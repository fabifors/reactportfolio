import * as admin from "firebase-admin";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { defineString, defineSecret } from "firebase-functions/params";
import * as nodemailer from "nodemailer";
import { buildEmailHtml, buildEmailText, ContactData } from "./emailTemplate";

admin.initializeApp();

// ── Runtime config params ────────────────────────────────────────────────────
// Set these with:
//   firebase functions:secrets:set GMAIL_APP_PASSWORD
//   firebase functions:config:set notify.to_email="you@gmail.com" notify.from_email="you@gmail.com"
// Or define them in .env.local for the emulator.

const toEmail = defineString("NOTIFY_TO_EMAIL", {
  description: "The email address that receives contact notifications",
});
const fromEmail = defineString("NOTIFY_FROM_EMAIL", {
  description: "The Gmail address used to send (must match app password)",
});
const gmailAppPassword = defineSecret("GMAIL_APP_PASSWORD");

// ── Cloud Function ───────────────────────────────────────────────────────────
export const onContactCreated = onDocumentCreated(
  {
    document: "contacts/{docId}",
    secrets: [gmailAppPassword],
    region: "europe-west1",
  },
  async (event) => {
    const snap = event.data;
    if (!snap) {
      console.warn("onContactCreated: no data snapshot, skipping");
      return;
    }

    const data = snap.data() as ContactData;

    // Basic sanity check
    if (!data.name || !data.email || !data.message) {
      console.warn("onContactCreated: incomplete contact data, skipping", data);
      return;
    }

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: fromEmail.value(),
        pass: gmailAppPassword.value(),
      },
    });

    const mailOptions: nodemailer.SendMailOptions = {
      from: `"Portfolio Contact" <${fromEmail.value()}>`,
      to: toEmail.value(),
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `New message from ${data.name} — portfolio`,
      text: buildEmailText(data),
      html: buildEmailHtml(data),
    };

    try {
      const info = await transport.sendMail(mailOptions);
      console.log(`Email sent to ${toEmail.value()} — messageId: ${info.messageId}`);

      // Mark the Firestore doc so we know the email was dispatched
      await snap.ref.update({ emailSent: true, emailSentAt: admin.firestore.FieldValue.serverTimestamp() });
    } catch (err) {
      console.error("Failed to send contact email:", err);
      await snap.ref.update({ emailSent: false, emailError: String(err) });
      // Re-throw so Firebase logs it as a function error
      throw err;
    }
  }
);
