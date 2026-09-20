import { NextResponse } from "next/server";
import { LIMITS, validateContact, type ContactValues } from "@/lib/contact";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT = { requests: 5, windowMs: 10 * 60 * 1000 };

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function clientKey(request: Request): string {
  return (
    request.headers.get("x-nf-client-connection-ip") ?? // Netlify
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

function fail(error: string, status: number, headers?: Record<string, string>) {
  return NextResponse.json({ ok: false, error }, { status, headers });
}

export async function POST(request: Request) {
  // Only accept requests that come from this site's own pages.
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) return fail("forbidden", 403);
    } catch {
      return fail("forbidden", 403);
    }
  }

  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_BODY_BYTES) return fail("too_large", 413);

  const limit = rateLimit(clientKey(request), RATE_LIMIT.requests, RATE_LIMIT.windowMs);
  if (!limit.ok) return fail("rate_limited", 429, { "Retry-After": String(limit.retryAfterSeconds) });

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) return fail("too_large", 413);
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) return fail("invalid_json", 400);
    body = parsed as Record<string, unknown>;
  } catch {
    return fail("invalid_json", 400);
  }

  // Honeypot: people never see or fill this field. Bots do.
  if (clean(body.website, 200)) return fail("invalid_request", 400);

  const data: ContactValues = {
    name: clean(body.name, LIMITS.name),
    email: clean(body.email, LIMITS.email),
    phone: clean(body.phone, LIMITS.phone),
    inquiryType: clean(body.inquiryType, 60),
    // Newlines are stripped from single-line fields so they cannot inject email headers.
    subject: clean(body.subject, LIMITS.subject).replace(/[\r\n]+/g, " "),
    message: clean(body.message, LIMITS.message),
  };
  data.name = data.name.replace(/[\r\n]+/g, " ");
  data.email = data.email.replace(/[\r\n]+/g, " ");

  if (Object.keys(validateContact(data)).length > 0) return fail("validation_failed", 400);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  // Not configured: say so honestly instead of pretending the message was delivered.
  if (!apiKey || !to || !from) return fail("not_configured", 501);

  const text = [
    `Inquiry type: ${data.inquiryType}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "-"}`,
    `Subject: ${data.subject}`,
    "",
    data.message,
  ].join("\n");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `[Website] ${data.inquiryType}: ${data.subject}`.slice(0, 250),
        text,
      }),
      signal: controller.signal,
    });

    // Success is reported only when the email service actually accepted the message.
    if (!response.ok) {
      console.error(`Contact form: email service rejected the message (HTTP ${response.status}).`);
      return fail("delivery_failed", 502);
    }
    return NextResponse.json({ ok: true });
  } catch {
    console.error("Contact form: could not reach the email service.");
    return fail("delivery_failed", 502);
  } finally {
    clearTimeout(timeout);
  }
}

// Anything other than POST is not supported.
export function GET() {
  return fail("method_not_allowed", 405, { Allow: "POST" });
}
