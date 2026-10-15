/**
 * Email Service Configuration (Resend)
 * ----------------------------------------------------
 * Centralized settings for all email notifications in the application.
 *
 * Instructions for updating:
 * 1. API Key: Replace `apiKey` with your live Resend API key (starts with 're_').
 * 2. From Email: Resend requires a verified domain (e.g., info@yourdomain.com).
 *    For unverified Gmail addresses during local testing, Resend provides 'onboarding@resend.dev'.
 * 3. To Email: Set the destination inbox where inquiries should be received.
 * 4. Subjects & Templates: Easily customize the subject lines and email body below.
 */

export const EMAIL_CONFIG = {
  // Resend API Key provided for your account
  apiKey: import.meta.env.VITE_RESEND_API_KEY,

  // Sender Email (From address displayed to recipient)
  // NOTE: If sending to Gmail before verifying a custom domain,
  // Resend's free sandbox requires 'onboarding@resend.dev'.
  // Once you add your custom domain on https://resend.com/domains, set this to your branded address.
  fromEmail: "aiforakashraikar@gmail.com",

  // Resend official development sender (used as fallback for unverified domains during localhost testing)
  devFallbackSender: "onboarding@resend.dev",

  // Target Email Placeholder (Where admissions and inquiries are received)
  toEmail: "aiforakashraikar@gmail.com",

  // Email Subjects
  subjects: {
    enrollmentInquiry: (courseTitle: string, studentName: string) =>
      `[Course Inquiry] ${courseTitle} - ${studentName}`,
    contactInquiry: (studentName: string) =>
      `[Consultation Request] New Academic Inquiry - ${studentName}`,
  },
};
