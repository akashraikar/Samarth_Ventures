/**
 * Reusable Email Service for Samarth Ventures
 * ----------------------------------------------------
 * Handles sending email notifications for all application features
 * using the Resend service provider.
 *
 * Features supported:
 * 1. Course Enrollment / Workstation Reservation Inquiries
 * 2. Academic Consultation / Campus Demo Inquiries
 */

import { EMAIL_CONFIG } from "../config/emailConfig";

export interface EnrollmentEmailPayload {
  fullName: string;
  email: string;
  phone: string;
  courseTitle: string;
  courseKey: string;
  mode: string;
  experience: string;
  message?: string;
}

export interface ContactEmailPayload {
  fullName: string;
  email: string;
  phone: string;
  courseTitle: string;
  batchPreference: string;
  message?: string;
}

export interface SendEmailResponse {
  success: boolean;
  id?: string;
  message?: string;
  note?: string;
}

/**
 * Low-level function to dispatch an email via the backend proxy
 */
export async function sendEmail(params: {
  to?: string;
  from?: string;
  subject: string;
  html: string;
  text?: string;
}): Promise<SendEmailResponse> {
  const payload = {
    to: params.to || EMAIL_CONFIG.toEmail,
    from: params.from || EMAIL_CONFIG.fromEmail,
    subject: params.subject,
    html: params.html,
    text: params.text || "",
    apiKey: EMAIL_CONFIG.apiKey,
  };

  try {
    // 🌟 THE CHANGED TARGET ROUTE: Point directly to the native PHP script file
    const response = await fetch("/send-email.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || `Failed to send email (${response.status})`,
      );
    }

    return {
      success: true,
      id: data.id,
      note: data.note,
    };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Unknown error occurred while sending email";
    console.error("Email dispatch error:", errorMessage);
    return {
      success: false,
      message: errorMessage,
    };
  }
}

/**
 * 1. Send Course Enrollment / Workstation Reservation Email
 */
export async function sendEnrollmentEmail(
  data: EnrollmentEmailPayload,
): Promise<SendEmailResponse> {
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  // Customizable Subject
  const subject = EMAIL_CONFIG.subjects.enrollmentInquiry(
    data.courseTitle,
    data.fullName,
  );

  // Customizable HTML Body
  const html = `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #0B1120; padding: 24px; text-align: center; border-bottom: 3px solid #0085CB;">
        <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px;">SAMARTH VENTURES</h1>
        <p style="color: #38BDF8; margin: 4px 0 0 0; font-size: 12px; font-weight: 500;">Precision CAD &amp; Jewellery Design Academy</p>
      </div>
      
      <div style="padding: 24px; color: #1e293b;">
        <h2 style="font-size: 16px; color: #0085CB; margin-top: 0; margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">
          New Course Enrollment &amp; Workstation Reservation
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px;">
          <tbody>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b; width: 35%;">Applicant Name:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Email Address:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${data.email}" style="color: #0085CB;">${data.email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Contact / WhatsApp:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${data.phone}" style="color: #0085CB;">${data.phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Selected Program:</td>
              <td style="padding: 8px 0; color: #0085CB; font-weight: 600;">${data.courseTitle}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Preferred Mode:</td>
              <td style="padding: 8px 0; color: #0f172a; text-transform: capitalize;">${data.mode}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Prior Experience:</td>
              <td style="padding: 8px 0; color: #0f172a; text-transform: capitalize;">${data.experience}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Received At:</td>
              <td style="padding: 8px 0; color: #64748b;">${timestamp} IST</td>
            </tr>
          </tbody>
        </table>

        ${
          data.message
            ? `
          <div style="background-color: #f8fafc; border-left: 4px solid #0085CB; padding: 12px 16px; border-radius: 4px; margin-bottom: 20px;">
            <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase;">Applicant's Message / Notes:</p>
            <p style="margin: 0; font-size: 13px; color: #334155; line-height: 1.5; white-space: pre-line;">${data.message}</p>
          </div>
        `
            : ""
        }

        <p style="font-size: 12px; color: #94a3b8; margin: 24px 0 0 0; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 12px;">
          This notification was automatically sent by the Samarth Ventures Admissions Portal.
        </p>
      </div>
    </div>
  `;

  const text = `
    New Course Enrollment Inquiry - Samarth Ventures
    -------------------------------------------------
    Applicant Name: ${data.fullName}
    Email: ${data.email}
    Phone: ${data.phone}
    Selected Program: ${data.courseTitle}
    Mode: ${data.mode}
    Experience Level: ${data.experience}
    Received At: ${timestamp} IST
    
    Message:
    ${data.message || "No additional message provided."}
  `;

  return sendEmail({
    subject,
    html,
    text,
  });
}

/**
 * 2. Send Academic Consultation / Campus Demo Inquiry Email
 */
export async function sendContactEmail(
  data: ContactEmailPayload,
): Promise<SendEmailResponse> {
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  // Customizable Subject
  const subject = EMAIL_CONFIG.subjects.contactInquiry(data.fullName);

  // Customizable HTML Body
  const html = `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #0B1120; padding: 24px; text-align: center; border-bottom: 3px solid #0085CB;">
        <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px;">SAMARTH VENTURES</h1>
        <p style="color: #38BDF8; margin: 4px 0 0 0; font-size: 12px; font-weight: 500;">Admissions &amp; Academic Dean Consultation Desk</p>
      </div>
      
      <div style="padding: 24px; color: #1e293b;">
        <h2 style="font-size: 16px; color: #0085CB; margin-top: 0; margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">
          New Consultation &amp; Workstation Demo Request
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px;">
          <tbody>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b; width: 35%;">Full Legal Name:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Email Address:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${data.email}" style="color: #0085CB;">${data.email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Phone / WhatsApp:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${data.phone}" style="color: #0085CB;">${data.phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Course of Interest:</td>
              <td style="padding: 8px 0; color: #0085CB; font-weight: 600;">${data.courseTitle}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Batch Preference:</td>
              <td style="padding: 8px 0; color: #0f172a; text-transform: capitalize;">${data.batchPreference.replace("-", " ")}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Received At:</td>
              <td style="padding: 8px 0; color: #64748b;">${timestamp} IST</td>
            </tr>
          </tbody>
        </table>

        ${
          data.message
            ? `
          <div style="background-color: #f8fafc; border-left: 4px solid #0085CB; padding: 12px 16px; border-radius: 4px; margin-bottom: 20px;">
            <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase;">Career Objectives / Requirements:</p>
            <p style="margin: 0; font-size: 13px; color: #334155; line-height: 1.5; white-space: pre-line;">${data.message}</p>
          </div>
        `
            : ""
        }

        <p style="font-size: 12px; color: #94a3b8; margin: 24px 0 0 0; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 12px;">
          This inquiry was dispatched from the Samarth Ventures Consultation Desk.
        </p>
      </div>
    </div>
  `;

  const text = `
    New Academic Consultation Request - Samarth Ventures
    ----------------------------------------------------
    Applicant Name: ${data.fullName}
    Email: ${data.email}
    Phone: ${data.phone}
    Course of Interest: ${data.courseTitle}
    Batch Preference: ${data.batchPreference}
    Received At: ${timestamp} IST
    
    Message:
    ${data.message || "No additional message provided."}
  `;

  return sendEmail({
    subject,
    html,
    text,
  });
}
