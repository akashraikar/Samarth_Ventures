/**
 * Samarth Ventures - Full Stack Application Server
 * ----------------------------------------------------
 * Express server handling API proxying for Resend emailer
 * and mounting Vite middleware for development and static assets for production.
 */

import express, { Request, Response } from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fallback configuration if not passed in request
const DEFAULT_RESEND_API_KEY = process.env.RESEND_API_KEY;
const DEFAULT_RESEND_DEV_SENDER = "onboarding@resend.dev";

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  // JSON Body Parser
  app.use(express.json());

  /**
   * Health Check
   */
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({
      status: "ok",
      service: "Samarth Ventures API",
      timestamp: new Date().toISOString(),
    });
  });

  /**
   * POST /api/send-email
   * --------------------
   * Dispatches email via Resend API
   */
  app.post(
    "/api/send-email",
    async (req: Request, res: Response): Promise<void> => {
      try {
        const { to, from, subject, html, text, apiKey } = req.body;

        const activeApiKey =
          apiKey || process.env.RESEND_API_KEY || DEFAULT_RESEND_API_KEY;

        if (!activeApiKey) {
          res.status(400).json({
            success: false,
            message:
              "Resend API key is missing. Please configure it in emailConfig.ts or environment.",
          });
          return;
        }

        if (!to || !subject || !html) {
          res.status(400).json({
            success: false,
            message: "Missing required email fields (to, subject, or html).",
          });
          return;
        }

        const senderEmail = from || DEFAULT_RESEND_DEV_SENDER;

        // Helper function to call Resend API
        const callResend = async (fromAddress: string) => {
          return await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${activeApiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: fromAddress,
              to: Array.isArray(to) ? to : [to],
              subject: subject,
              html: html,
              text: text || undefined,
            }),
          });
        };

        // 1. Attempt sending with requested sender address
        let resendResponse = await callResend(senderEmail);
        let resendData = await resendResponse.json();

        let usedFallback = false;

        // 2. If unverified domain error (e.g. gmail.com without domain verification),
        // fallback to Resend's official dev sandbox sender 'onboarding@resend.dev' for seamless localhost testing
        if (
          !resendResponse.ok &&
          resendData?.name === "validation_error" &&
          resendData?.message?.includes("not verified")
        ) {
          console.warn(
            `[Resend Warning] "${senderEmail}" domain is not verified. Retrying with official test sender "${DEFAULT_RESEND_DEV_SENDER}" for localhost development.`,
          );

          resendResponse = await callResend(DEFAULT_RESEND_DEV_SENDER);
          resendData = await resendResponse.json();
          usedFallback = true;
        }

        if (!resendResponse.ok) {
          console.error("[Resend Error]", resendData);
          res.status(resendResponse.status).json({
            success: false,
            message: resendData?.message || "Failed to send email via Resend",
            error: resendData,
          });
          return;
        }

        console.log(
          `[Resend Success] Email sent! ID: ${resendData.id} to ${to}`,
        );
        res.json({
          success: true,
          id: resendData.id,
          note: usedFallback
            ? `Dispatched via ${DEFAULT_RESEND_DEV_SENDER} because "${senderEmail}" domain is pending verification in Resend dashboard.`
            : undefined,
        });
      } catch (error: unknown) {
        const errorMsg =
          error instanceof Error ? error.message : "Internal Server Error";
        console.error("[Server Error /api/send-email]:", error);
        res.status(500).json({
          success: false,
          message: errorMsg,
        });
      }
    },
  );

  const isProduction = process.env.NODE_ENV === "production";

  if (!isProduction) {
    // Development: Vite middleware mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production: Serve static assets from dist
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(
      `Samarth Ventures application running at http://0.0.0.0:${PORT}`,
    );
  });
}

startServer();
