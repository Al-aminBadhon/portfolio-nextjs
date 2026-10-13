import { NextResponse } from "next/server";
import { profile } from "@/data/profile";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function rateLimit(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) return false;
  recent.push(now);
  hits.set(ip, recent);
  return true;
}

function isValid(body: ContactPayload) {
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  return {
    ok:
      name.length > 1 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      message.length >= 12,
    data: { name, email, message },
  };
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const { ok, data } = isValid(body);
  if (!ok) {
    return NextResponse.json({ error: "Invalid form fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || profile.email;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email is not configured. Set RESEND_API_KEY in .env.local." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Portfolio <hello@alaminbadhon.dev>",
        to: [to],
        reply_to: data.email,
        subject: `Portfolio message from ${data.name}`,
        text: `From: ${data.name} <${data.email}>\n\n${data.message}`,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("[contact] Resend failed", response.status, detail);
      return NextResponse.json(
        { error: "Could not send email. Please try again or email me directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Resend error", error);
    return NextResponse.json(
      { error: "Could not send email. Please try again or email me directly." },
      { status: 502 },
    );
  }
}
