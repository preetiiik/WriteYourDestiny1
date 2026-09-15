import nodemailer from "nodemailer";

const NAME_RE = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
const EMAIL_RE = /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?(?:\.[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?)+$/i;
const MAX_NAME_LENGTH = 50;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 1000;
const ALLOWED_ROLES = new Set([
  "Job Seeker",
  "Employer / Company",
  "Looking for Training",
  "Other",
]);

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function validate(body = {}) {
  const firstName = typeof body.firstName === "string" ? body.firstName.trim() : "";
  const lastName = typeof body.lastName === "string" ? body.lastName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const role = typeof body.role === "string" ? body.role : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!firstName) return "Please enter your first name.";
  if (firstName.length > MAX_NAME_LENGTH || !NAME_RE.test(firstName)) {
    return "Please enter a valid first name using letters only.";
  }

  if (!lastName) return "Please enter your last name.";
  if (lastName.length > MAX_NAME_LENGTH || !NAME_RE.test(lastName)) {
    return "Please enter a valid last name using letters only.";
  }

  if (!email) return "Please enter your email address.";
  if (email.length > MAX_EMAIL_LENGTH || !EMAIL_RE.test(email)) {
    return "Please enter a valid email address.";
  }

  if (!ALLOWED_ROLES.has(role)) return "Please select who you are.";

  if (!message) return "Message cannot be empty or contain only spaces.";
  if (message.length > MAX_MESSAGE_LENGTH) return "Message is too long.";

  return null;
}

export async function handleContact(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed." });
  }

  const body = req.body || {};
  const validationError = validate(body);

  if (validationError) {
    return res.status(400).json({ success: false, message: validationError });
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD || process.env.EMAIL_PASS;
  const receiverEmail = process.env.RECEIVER_EMAIL || emailUser;

  if (!emailUser || !emailPassword || !receiverEmail) {
    console.error("Email service is not configured. Required: EMAIL_USER, EMAIL_PASSWORD (or EMAIL_PASS), RECEIVER_EMAIL.");
    return res.status(500).json({
      success: false,
      message: "Email service is not configured. Please try again later.",
    });
  }

  const { firstName, lastName, email, role, message } = body;
  const safe = {
    firstName: escapeHtml(firstName.trim()),
    lastName: escapeHtml(lastName.trim()),
    email: escapeHtml(email.trim()),
    role: escapeHtml(role),
    message: escapeHtml(message.trim()).replaceAll("\\n", "<br />"),
  };

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    await transporter.sendMail({
      from: emailUser,
      to: receiverEmail,
      replyTo: email.trim(),
      subject: `New Website Contact - ${firstName.trim()} ${lastName.trim()}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:0 auto;color:#0a1a3d;line-height:1.6">
          <h2 style="color:#1355B2">New Website Contact</h2>
          <p>A new contact form submission was received from Write Your Destiny.</p>
          <table style="width:100%;border-collapse:collapse;margin-top:20px">
            <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold">First Name</td><td style="padding:10px;border:1px solid #ddd">${safe.firstName}</td></tr>
            <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold">Last Name</td><td style="padding:10px;border:1px solid #ddd">${safe.lastName}</td></tr>
            <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:10px;border:1px solid #ddd">${safe.email}</td></tr>
            <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold">I am a</td><td style="padding:10px;border:1px solid #ddd">${safe.role}</td></tr>
            <tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold">Message</td><td style="padding:10px;border:1px solid #ddd">${safe.message}</td></tr>
          </table>
        </div>
      `,
    });

    console.log("Contact email sent successfully.");
    return res.status(200).json({
      success: true,
      message: "Thanks for reaching out! Your message has been sent — we'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      success: false,
      message: "We couldn't send your message right now. Please try again later.",
    });
  }
}
