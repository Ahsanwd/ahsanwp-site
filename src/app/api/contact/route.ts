import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL_TO ?? "ahsanspo@gmail.com";

const MIN_SUBMIT_MS = 3000;

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, projectType, budget, message, company, elapsedMs } = body as {
    name?: string;
    email?: string;
    projectType?: string;
    budget?: string;
    message?: string;
    company?: string;
    elapsedMs?: number;
  };

  // Honeypot filled or form submitted too fast to be human — pretend success, drop silently.
  if (company || typeof elapsedMs !== "number" || elapsedMs < MIN_SUBMIT_MS) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "AhsanWP Contact Form <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New project inquiry: ${projectType || "General"} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectType || "Not specified"}`,
        budget ? `Budget: ${budget}` : null,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try WhatsApp instead." },
      { status: 502 }
    );
  }
}
