// import { google } from "googleapis";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async function handler(req, res) {
//   /* ================= CORS ================= */
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");

//   if (req.method === "OPTIONS") {
//     return res.status(200).end();
//   }

//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   try {
//     const {
//       title,
//       companyName,
//       firstName,
//       lastName,
//       email,
//       phone,
//       country,
//       message,
//     } = req.body;

//     /* ================= GOOGLE SHEETS ================= */
//     const auth = new google.auth.GoogleAuth({
//       credentials: {
//         client_email: process.env.GOOGLE_CLIENT_EMAIL,
//         private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
//       },
//       scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//     });

//     const sheets = google.sheets({ version: "v4", auth });

//     await sheets.spreadsheets.values.append({
//       spreadsheetId: process.env.GOOGLE_SHEET_ID,
//       range: "Leads!A1",
//       valueInputOption: "USER_ENTERED",
//       requestBody: {
//         values: [[
//           new Date().toLocaleString(),
//           title,
//           companyName,
//           firstName,
//           lastName,
//           email,
//           phone,
//           country,
//           message,
//         ]],
//       },
//     });

//     /* ================= EMAIL (RESEND) ================= */
//     await resend.emails.send({
//       from: "SofSecure <onboarding@resend.dev>",
//       to: [process.env.ADMIN_EMAIL],
//       subject: "New Contact Form Enquiry",
//       html: `
//         <h2>New Enquiry Received</h2>
//         <p><b>Name:</b> ${firstName} ${lastName}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Phone:</b> ${phone}</p>
//         <p><b>Company:</b> ${companyName}</p>
//         <p><b>Country:</b> ${country}</p>
//         <p><b>Message:</b><br/>${message}</p>
//       `,
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Enquiry submitted successfully",
//     });

//   } catch (error) {
//     console.error("❌ BACKEND ERROR:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// }



// import { google } from "googleapis";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async function handler(req, res) {
//   /* ================= CORS ================= */
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");

//   if (req.method === "OPTIONS") {
//     return res.status(200).end();
//   }

//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   try {
//     const {
//       title,
//       companyName,
//       firstName,
//       lastName,
//       email,
//       phone,
//       country,
//       message,
//     } = req.body;

//     /* ================= GOOGLE SHEETS ================= */
//     const auth = new google.auth.GoogleAuth({
//       credentials: {
//         client_email: process.env.GOOGLE_CLIENT_EMAIL,
//         private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
//       },
//       scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//     });

//     const sheets = google.sheets({ version: "v4", auth });

//     await sheets.spreadsheets.values.append({
//       spreadsheetId: process.env.GOOGLE_SHEET_ID,
//       range: "Leads!A1",
//       valueInputOption: "USER_ENTERED",
//       requestBody: {
//         values: [[
//           new Date().toLocaleString(),
//           title,
//           companyName,
//           firstName,
//           lastName,
//           email,
//           phone,
//           country,
//           message,
//         ]],
//       },
//     });

//     /* ================= EMAIL (RESEND) ================= */
//     await resend.emails.send({
//       from: `SofSecure <${process.env.FROM_EMAIL}>`,
//       to: [process.env.ADMIN_EMAIL],
//       reply_to: email, // user ko direct reply kar sako
//       subject: "New Contact Form Enquiry – SofSecure",
//       html: `
//         <h2>📩 New Enquiry Received</h2>
//         <p><b>Name:</b> ${firstName} ${lastName}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Phone:</b> ${phone}</p>
//         <p><b>Company:</b> ${companyName}</p>
//         <p><b>Country:</b> ${country}</p>
//         <p><b>Message:</b><br/>${message}</p>
//       `,
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Enquiry submitted successfully",
//     });

//   } catch (error) {
//     console.error("❌ BACKEND ERROR:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// }


import { google } from "googleapis";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/* ❌ BLOCK FREE EMAIL DOMAINS */
const blockedDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "rediffmail.com",
  "yandex.com",
];

const isOfficialEmail = (email) => {
  const domain = email.split("@")[1]?.toLowerCase();
  return domain && !blockedDomains.includes(domain);
};

/* 🔥 LEAD SCORE */
const calculateLeadScore = ({
  email,
  description,
  companyName,
  preferredDateTime,
}) => {
  let score = 0;

  if (companyName?.length > 3) score += 20;
  if (description?.length > 50) score += 30;
  if (preferredDateTime) score += 20;

  const domain = email.split("@")[1]?.toLowerCase();
  if (domain && !blockedDomains.includes(domain)) score += 30;

  if (score >= 80) return "HOT 🔥";
  if (score >= 50) return "WARM 🟡";
  return "COLD ❄️";
};

/* 📅 ICS FILE */
const createICS = ({ startDate, email, name }) => {
  const start = new Date(startDate)
    .toISOString()
    .replace(/[-:]/g, "")
    .split(".")[0];

  const end = new Date(new Date(startDate).getTime() + 30 * 60000)
    .toISOString()
    .replace(/[-:]/g, "")
    .split(".")[0];

  return `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//SofSecure//Meeting//EN
BEGIN:VEVENT
UID:${Date.now()}@sofsecure.com
DTSTAMP:${start}
DTSTART:${start}
DTEND:${end}
SUMMARY:SofSecure Consultation Call
DESCRIPTION:SofSecure business consultation
ORGANIZER;CN=SofSecure:mailto:${process.env.FROM_EMAIL}
ATTENDEE;CN=${name};RSVP=TRUE:mailto:${email}
END:VEVENT
END:VCALENDAR
`;
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const {
      description,
      companyName,
      firstName,
      lastName,
      email,
      phone,
      country,
      message,
      preferredDateTime,
    } = req.body;

    /* ✅ BASIC VALIDATION */
    if (!isOfficialEmail(email)) {
      return res
        .status(400)
        .json({ message: "Official / business email required" });
    }

    const leadScore = calculateLeadScore({
      email,
      description,
      companyName,
      preferredDateTime,
    });

    /* 📊 GOOGLE SHEETS */
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
          leadScore,
          description,
          companyName,
          firstName,
          lastName,
          email,
          phone,
          country,
          preferredDateTime,
          message,
        ]],
      },
    });

    /* 📎 CALENDAR INVITE */
    const ics = createICS({
      startDate: preferredDateTime,
      email,
      name: `${firstName} ${lastName}`,
    });

    /* 📧 ADMIN EMAIL */
    await resend.emails.send({
      from: `SofSecure <${process.env.FROM_EMAIL}>`,
      to: [process.env.ADMIN_EMAIL],
      reply_to: email,
      subject: `New ${leadScore} Business Enquiry – SofSecure`,
      html: `
        <p><b>Lead Score:</b> ${leadScore}</p>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Meeting:</b> ${new Date(preferredDateTime).toLocaleString()}</p>
        <p>${description}</p>
      `,
    });

    /* 📧 CLIENT AUTO-REPLY */
    await resend.emails.send({
      from: `SofSecure <${process.env.FROM_EMAIL}>`,
      to: [email],
      subject: "Your meeting with SofSecure is confirmed",
      attachments: [
        {
          filename: "sofsecure-meeting.ics",
          content: Buffer.from(ics).toString("base64"),
        },
      ],
      html: `
        <p>Hi ${firstName},</p>
        <p>Thank you for contacting <b>SofSecure</b>.</p>
        <p>Your consultation is scheduled for:</p>
        <p><b>${new Date(preferredDateTime).toLocaleString()}</b></p>
        <p>Calendar invite attached.</p>
        <p>Regards,<br/>SofSecure Team</p>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error("ENQUIRY ERROR:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
