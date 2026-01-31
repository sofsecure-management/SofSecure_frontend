import { google } from "googleapis";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  /* ================= CORS ================= */
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const {
      title,
      companyName,
      firstName,
      lastName,
      email,
      phone,
      country,
      message,
    } = req.body;

    /* ================= GOOGLE SHEETS ================= */
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Leads!A1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          new Date().toLocaleString(),
          title,
          companyName,
          firstName,
          lastName,
          email,
          phone,
          country,
          message,
        ]],
      },
    });

    /* ================= EMAIL (RESEND) ================= */
    await resend.emails.send({
      from: "SofSecure <onboarding@resend.dev>",
      to: [process.env.ADMIN_EMAIL],
      subject: "New Contact Form Enquiry",
      html: `
        <h2>New Enquiry Received</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${companyName}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Enquiry submitted successfully",
    });

  } catch (error) {
    console.error("❌ BACKEND ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
