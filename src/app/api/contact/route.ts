import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background-color:#faf9f6;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#faf9f6;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#163a38;border-radius:16px 16px 0 0;padding:36px 40px;text-align:center;">
              <p style="margin:0 0 4px 0;font-size:11px;font-weight:700;letter-spacing:0.2em;color:#c9a25b;text-transform:uppercase;">Wiser Contracting</p>
              <h1 style="margin:0;font-size:24px;font-weight:700;color:#ffffff;">New Contact Message</h1>
            </td>
          </tr>

          <!-- Gold accent bar -->
          <tr>
            <td style="background-color:#c9a25b;height:4px;"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:40px;">

              <!-- Sender info cards -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td width="48%" style="background-color:#faf9f6;border:1px solid #e8e3da;border-radius:10px;padding:16px 20px;vertical-align:top;">
                    <p style="margin:0 0 4px 0;font-size:10px;font-weight:700;letter-spacing:0.15em;color:#c9a25b;text-transform:uppercase;">From</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#163a38;">${name}</p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="background-color:#faf9f6;border:1px solid #e8e3da;border-radius:10px;padding:16px 20px;vertical-align:top;">
                    <p style="margin:0 0 4px 0;font-size:10px;font-weight:700;letter-spacing:0.15em;color:#c9a25b;text-transform:uppercase;">Email</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#286964;">${email}</p>
                  </td>
                </tr>
              </table>

              <!-- Subject -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="background-color:#faf9f6;border:1px solid #e8e3da;border-left:4px solid #c9a25b;border-radius:0 10px 10px 0;padding:16px 20px;">
                    <p style="margin:0 0 4px 0;font-size:10px;font-weight:700;letter-spacing:0.15em;color:#c9a25b;text-transform:uppercase;">Subject</p>
                    <p style="margin:0;font-size:16px;font-weight:700;color:#163a38;">${subject}</p>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <p style="margin:0 0 12px 0;font-size:10px;font-weight:700;letter-spacing:0.15em;color:#163a38;text-transform:uppercase;">Message</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#faf9f6;border:1px solid #e8e3da;border-radius:10px;padding:24px;">
                    <p style="margin:0;font-size:15px;line-height:1.8;color:#4a4a4a;">${message.replace(/\n/g, '<br/>')}</p>
                  </td>
                </tr>
              </table>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display:inline-block;background-color:#163a38;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;letter-spacing:0.05em;padding:14px 36px;border-radius:8px;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f0eae1;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;border-top:1px solid #e8e3da;">
              <p style="margin:0 0 4px 0;font-size:13px;font-weight:700;color:#163a38;">Wiser Contracting</p>
              <p style="margin:0;font-size:12px;color:#163a38;opacity:0.5;">This message was sent via the contact form on wiser-eg.com</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  await transporter.sendMail({
    from: `"${name}" <${process.env.SMTP_USER}>`,
    to: 'info@wiser-eg.com',
    replyTo: email,
    subject: `[Contact] ${subject}`,
    html,
  });

  return NextResponse.json({ success: true });
}
