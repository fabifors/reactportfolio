import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { buildEmailHtml, buildEmailText } from "@/lib/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const contactData = {
      name,
      email,
      message,
      createdAt: new Date().toLocaleString("en-SE", {
        timeZone: "Europe/Stockholm",
      }),
    };

    await resend.emails.send({
      from: process.env.NOTIFY_FROM_EMAIL!,
      to: process.env.NOTIFY_TO_EMAIL!,
      replyTo: email,
      subject: `New contact from ${name}`,
      html: buildEmailHtml(contactData),
      text: buildEmailText(contactData),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
