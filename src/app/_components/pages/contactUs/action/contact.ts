"use server";
import nodemailer from "nodemailer";
import type { FormState } from "@/app/_components/pages/contactUs/contact.type";
import { verifyToken } from "./verify-token";

export type ContactProps = {
  message: string;
  email: string;
  name: string;
  subject: string;
  token: string;
};

const mailContent = (name: string, text: string) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Email from ${name}</title>
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
    <p style="font-weight:bold">${text}</p> 
  </div>
</body>
</html>`;

export async function sendMail(_state: FormState, formData: FormData): Promise<Required<FormState>> {
  const token = formData.get("cf-turnstile-response") as string;
  const data = (Object.fromEntries(formData) as unknown as ContactProps) ?? {};
  const { email, message, name, subject } = data;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number.parseInt(process.env.SMTP_PORT || "465", 10),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const content = {
    from: `"Mail From Our Site" <${process.env.RECIPIENT_EMAIL}>`,
    to: process.env.RECIPIENT_EMAIL,
    replyTo: email,
    subject,
    text: `Name: ${name}\nMessage: ${message}`,
    html: mailContent(name, message),
  };

  try {
    if (!token) {
      return {
        message: "Captcha verification token is required",
        status: "error",
      };
    }
    await verifyToken(token);
    await transporter.sendMail(content);
    return { message: "Email Send With Success", status: "success" };
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
        status: "error",
      };
    }
    return {
      message: "Something wen wrong when we try to send Mail",
      status: "error",
    };
  }
}
