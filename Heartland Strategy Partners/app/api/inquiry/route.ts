import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type InquiryPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  organizationName?: string;
  organizationType?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  project?: string;
  referral?: string;
  website?: string;
};

function clean(value: unknown, max = 4000) {
  return String(value ?? "").trim().slice(0, max);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InquiryPayload;

    // Basic honeypot protection for simple bots.
    if (clean(body.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const firstName = clean(body.firstName, 80);
    const lastName = clean(body.lastName, 80);
    const email = clean(body.email, 160);
    const phone = clean(body.phone, 40);
    const organizationName = clean(body.organizationName, 160);
    const organizationType = clean(body.organizationType, 100);
    const service = clean(body.service, 100);
    const budget = clean(body.budget, 100);
    const timeline = clean(body.timeline, 100);
    const project = clean(body.project, 4000);
    const referral = clean(body.referral, 200);

    if (
      !firstName ||
      !lastName ||
      !email ||
      !organizationName ||
      !organizationType ||
      !service ||
      !project
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.INQUIRY_TO_EMAIL;
    const fromEmail = process.env.INQUIRY_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("Missing Resend environment variables.");
      return NextResponse.json(
        { error: "The inquiry email service is not configured yet." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const safe = {
      firstName: escapeHtml(firstName),
      lastName: escapeHtml(lastName),
      email: escapeHtml(email),
      phone: escapeHtml(phone || "Not provided"),
      organizationName: escapeHtml(organizationName),
      organizationType: escapeHtml(organizationType),
      service: escapeHtml(service),
      budget: escapeHtml(budget || "Not provided"),
      timeline: escapeHtml(timeline || "Not provided"),
      project: escapeHtml(project).replaceAll("\n", "<br />"),
      referral: escapeHtml(referral || "Not provided"),
    };

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New website inquiry — ${organizationName}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1f2b28;max-width:680px;margin:auto">
          <h1 style="font-size:24px;margin-bottom:8px">New website inquiry</h1>
          <p style="color:#5f6f69;margin-top:0">Heartland Strategy Partners</p>
          <hr style="border:none;border-top:1px solid #dfe6e2;margin:24px 0" />

          <p><strong>Name:</strong> ${safe.firstName} ${safe.lastName}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          <p><strong>Phone:</strong> ${safe.phone}</p>
          <p><strong>Organization:</strong> ${safe.organizationName}</p>
          <p><strong>Organization type:</strong> ${safe.organizationType}</p>
          <p><strong>Service:</strong> ${safe.service}</p>
          <p><strong>Budget:</strong> ${safe.budget}</p>
          <p><strong>Timeline:</strong> ${safe.timeline}</p>
          <p><strong>Referral:</strong> ${safe.referral}</p>

          <h2 style="font-size:18px;margin-top:28px">Project details</h2>
          <p>${safe.project}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Your inquiry could not be sent. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Inquiry route error:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your inquiry." },
      { status: 500 }
    );
  }
}
