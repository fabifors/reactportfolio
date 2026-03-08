export interface ContactData {
  name: string;
  email: string;
  message: string;
  createdAt?: string;
}

export function buildEmailHtml(data: ContactData): string {
  const date =
    data.createdAt ??
    new Date().toLocaleString("en-SE", { timeZone: "Europe/Stockholm" });

  const escape = (str: string) =>
    str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New contact message</title>
</head>
<body style="margin:0;padding:0;background-color:#0d1117;font-family:'Courier New',Courier,monospace;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d1117;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="padding-bottom:24px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:11px;letter-spacing:0.15em;color:#3ddbb8;text-transform:uppercase;">&gt; portfolio.fabio.dev</span>
                  </td>
                  <td align="right">
                    <span style="font-size:11px;letter-spacing:0.1em;color:#5a6478;">${escape(date)}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#161c27;border:1px solid #1e2739;border-radius:12px;overflow:hidden;">

              <!-- Card top accent bar -->
              <tr>
                <td style="height:3px;background:linear-gradient(90deg,#3ddbb8 0%,#40c8e8 100%);display:block;line-height:3px;font-size:3px;">&nbsp;</td>
              </tr>

              <!-- Card body -->
              <tr>
                <td style="padding:32px 32px 24px;">

                  <!-- Title -->
                  <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.18em;color:#3ddbb8;text-transform:uppercase;">new_message.received</p>
                  <h1 style="margin:0 0 28px;font-size:22px;font-weight:700;color:#dde4ed;letter-spacing:-0.01em;">Someone reached out</h1>

                  <!-- Sender block -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                    <tr>
                      <td style="background-color:#0d1117;border:1px solid #1e2739;border-radius:8px;padding:16px 20px;">
                        <p style="margin:0 0 4px;font-size:10px;letter-spacing:0.14em;color:#5a6478;text-transform:uppercase;">From</p>
                        <p style="margin:0 0 2px;font-size:16px;font-weight:600;color:#dde4ed;">${escape(data.name)}</p>
                        <a href="mailto:${escape(data.email)}" style="font-size:13px;color:#40c8e8;text-decoration:none;">${escape(data.email)}</a>
                      </td>
                    </tr>
                  </table>

                  <!-- Message block -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                    <tr>
                      <td style="background-color:#0d1117;border:1px solid #1e2739;border-left:3px solid #3ddbb8;border-radius:8px;padding:16px 20px;">
                        <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.14em;color:#5a6478;text-transform:uppercase;">Message</p>
                        <p style="margin:0;font-size:14px;line-height:1.7;color:#a8b3c4;white-space:pre-wrap;">${escape(data.message)}</p>
                      </td>
                    </tr>
                  </table>

                  <!-- Reply CTA -->
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="border-radius:6px;background:linear-gradient(135deg,#3ddbb8 0%,#40c8e8 100%);">
                        <a href="mailto:${escape(data.email)}?subject=Re: Your message"
                           style="display:inline-block;padding:10px 24px;font-size:13px;font-weight:700;color:#0d1117;text-decoration:none;letter-spacing:0.04em;border-radius:6px;">
                          Reply to ${escape(data.name)} →
                        </a>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:24px;text-align:center;">
              <p style="margin:0;font-size:11px;color:#3a4255;letter-spacing:0.08em;">
                Sent automatically from your portfolio contact form
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildEmailText(data: ContactData): string {
  const date =
    data.createdAt ?? new Date().toLocaleString("en-SE", { timeZone: "Europe/Stockholm" });

  return `New contact form submission
===========================
From:    ${data.name}
Email:   ${data.email}
Date:    ${date}

Message:
${data.message}

---
Reply: mailto:${data.email}
`;
}
