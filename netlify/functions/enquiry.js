const { google } = require("googleapis");
import { Resend } from "resend";

export const handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const {
      title,
      companyName,
      firstName,
      lastName,
      email,
      phone,
      country,
      message,
    } = JSON.parse(event.body);

    /* ===== GOOGLE AUTH ===== */
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

    /* ===== EMAIL (RESEND) ===== */
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "SofSecure <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: "New Website Enquiry",
      html: `
        <h3>New Enquiry</h3>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Country:</b> ${country}</p>
        <p>${message}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };

  } catch (err) {
    console.error("FUNCTION ERROR:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
