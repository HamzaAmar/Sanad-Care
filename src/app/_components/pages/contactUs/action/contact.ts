"use server";

import nodemailer from "nodemailer";
import { headers } from "next/headers";
import type { FormState } from "@/app/_components/pages/contactUs/contact.type";
import { contactSchema } from "@/validation/contact";
import { verifyToken } from "./verify-token";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map<string, number[]>();

const isRateLimited = (key: string) => {
  const now = Date.now();
  const recent = (requestLog.get(key) ?? []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    requestLog.set(key, recent);
    return true;
  }

  recent.push(now);
  requestLog.set(key, recent);

  if (requestLog.size > 5000) {
    for (const [entryKey, times] of requestLog) {
      if (times.every((time) => now - time >= RATE_LIMIT_WINDOW_MS)) {
        requestLog.delete(entryKey);
      }
    }
  }

  return false;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const mailContent = (name: string, text: string) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Email from ${escapeHtml(name)}</title>
  <style>
    body {
      font-family: sans-serif;
      line-height: 1.5;
    }
    .signature {
      margin-top: 20px;
      border-top: 1px solid #ccc;
      padding-top: 10px; 
    }
  </style>
</head>
<body>
  <div class="signature">
    <p style="font-weight:bold">${escapeHtml(text)}</p> 
  </div>
</body>
</html>`;

export async function sendMail(
  _state: FormState,
  formData: FormData,
): Promise<Required<FormState>> {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return { code: "invalid_data", status: "error" };
  }

  const { email, message, name, subject } = parsed.data;

  const requestHeaders = await headers();
  const ip = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(`contact:${ip}`)) {
    return { code: "rate_limited", status: "error" };
  }

  const token = formData.get("cf-turnstile-response");

  if (typeof token !== "string" || token.length === 0) {
    return { code: "captcha_failed", status: "error" };
  }

  try {
    await verifyToken(token);
  } catch {
    return { code: "captcha_failed", status: "error" };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number.parseInt(process.env.SMTP_PORT || "465", 10),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Mail From Our Site" <${process.env.RECIPIENT_EMAIL}>`,
      to: process.env.RECIPIENT_EMAIL,
      cc: process.env.SMTP_CC,
      replyTo: email,
      subject,
      text: `Name: ${name}\nMessage: ${message}`,
      html: mailContent(name, message),
    });
  } catch (error) {
    console.error("[contact] failed to send email", error);
    return { code: "send_failed", status: "error" };
  }

  return { code: "success", status: "success" };
}
