import { NextResponse, type NextRequest } from "next/server";
import { createHash } from "crypto";

import { db } from "@/lib/db";
import { contactFormSchema } from "@/lib/portfolio/contact-schema";

/**
 * POST /api/contact
 *
 * Receives contact-form submissions, validates them with the shared Zod
 * schema, applies simple in-memory rate limiting, and stores the inquiry
 * in the database (ContactInquiry table).
 *
 * ── Want inquiries by email too? ────────────────────────────────────────────
 * Add a provider below where marked. Example (Resend):
 *   1. bun add resend
 *   2. Set RESEND_API_KEY and CONTACT_TO_EMAIL in .env
 *   3. Uncomment the sendNotificationEmail() call marked below.
 */

export const runtime = "nodejs";

/* ── Simple in-memory rate limit: 3 submissions / 10 min / IP ────────────── */

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

const rateBuckets = new Map<string, number[]>();

function isRateLimited(ipHash: string): boolean {
  const now = Date.now();
  const timestamps = (rateBuckets.get(ipHash) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT_MAX) {
    rateBuckets.set(ipHash, timestamps);
    return true;
  }
  timestamps.push(now);
  rateBuckets.set(ipHash, timestamps);
  return false;
}

function hashIp(ip: string | null): string {
  return createHash("sha256")
    .update(ip ?? "unknown")
    .digest("hex")
    .slice(0, 32);
}

/* ── Optional email notification (Resend example) ────────────────────────── */

// async function sendNotificationEmail(payload: {
//   name: string;
//   email: string;
//   projectType: string;
//   budget: string | null;
//   message: string;
// }) {
//   const { Resend } = await import("resend");
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({
//     from: "Portfolio <onboarding@resend.dev>",
//     to: process.env.CONTACT_TO_EMAIL!,
//     replyTo: payload.email,
//     subject: `New inquiry: ${payload.projectType} — ${payload.name}`,
//     text: [
//       `Name: ${payload.name}`,
//       `Email: ${payload.email}`,
//       `Project type: ${payload.projectType}`,
//       `Budget: ${payload.budget ?? "not specified"}`,
//       "",
//       payload.message,
//     ].join("\n"),
//   });
// }

/* ── Route handler ────────────────────────────────────────────────────────── */

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip");
    const ipHash = hashIp(ip);

    if (isRateLimited(ipHash)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please try again in a few minutes.",
        },
        { status: 429 }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid request body." },
        { status: 400 }
      );
    }

    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      const firstError =
        parsed.error.issues[0]?.message ?? "Please check the form fields.";
      return NextResponse.json(
        { success: false, error: firstError },
        { status: 400 }
      );
    }

    const { name, email, projectType, budget, message } = parsed.data;

    const inquiry = await db.contactInquiry.create({
      data: {
        name,
        email,
        projectType,
        budget: budget || null,
        message,
        clientIpHash: ipHash,
      },
    });

    // Optionally notify by email (see setup comment above):
    // await sendNotificationEmail({ name, email, projectType, budget, message });

    return NextResponse.json(
      { success: true, id: inquiry.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("[/api/contact] Failed to store inquiry:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong on our side. Please email me directly.",
      },
      { status: 500 }
    );
  }
}
