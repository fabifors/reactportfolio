import { Resend } from "resend";
import { NextResponse } from "next/server";

const rateLimit = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // max requests per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimit.get(ip)?.filter((t) => now - t < RATE_LIMIT_WINDOW) ?? [];
  rateLimit.set(ip, timestamps);

  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  timestamps.push(now);
  return false;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL || !process.env.EMAIL_FROM) {
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 0;">
          <h2 style="font-size: 20px; margin: 0 0 24px;">New message from ${escapeHtml(name)}</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 60px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #2563eb;">${escapeHtml(email)}</a></td>
            </tr>
          </table>
          <div style="background: #f9fafb; border-radius: 8px; padding: 20px; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
