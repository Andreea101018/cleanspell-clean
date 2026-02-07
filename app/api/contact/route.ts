export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    /* ================= FORM FIELDS ================= */
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const service = String(formData.get("services") || "");
    const message = String(formData.get("message") || "");

    /* ================= MULTIPLE FILES ================= */
    const files = formData.getAll("images") as File[];

    const attachments =
      files.length > 0
        ? await Promise.all(
            files.map(async (file) => ({
              filename: file.name,
              content: Buffer.from(await file.arrayBuffer()),
              contentType: file.type,
            }))
          )
        : [];

    /* ================= SMTP CONFIG ================= */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, // App Password
  },
});


    /* ================= SEND EMAIL ================= */
    await transporter.sendMail({
      from: `"CleanSpell Contact" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email, // ⭐ allows direct reply
      subject: `New contact request – ${service}`,
      html: `
        <h3>New contact request</h3>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>

        ${
          message
            ? `<p><strong>Message:</strong><br/>${message.replace(
                /\n/g,
                "<br/>"
              )}</p>`
            : ""
        }

      `,
      attachments, // ✅ ARRAY — all images included
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      { success: false, error: "Email sending failed" },
      { status: 500 }
    );
  }
}
