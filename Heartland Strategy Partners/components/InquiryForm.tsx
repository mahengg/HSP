"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

type Status = "idle" | "sending" | "success" | "error";

export default function InquiryForm() {
  const params = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const defaultOrganization = params.get("organization") ?? "";
  const defaultService = params.get("service") ?? "";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send your inquiry.");
      }

      form.reset();
      setStatus("success");
      setMessage(
        "Thank you. Your inquiry has been sent and Heartland Strategy Partners will follow up with you."
      );
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="honeypot" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="form-grid">
        <label>
          <span>First name *</span>
          <input name="firstName" required maxLength={80} />
        </label>

        <label>
          <span>Last name *</span>
          <input name="lastName" required maxLength={80} />
        </label>

        <label>
          <span>Email *</span>
          <input name="email" type="email" required maxLength={160} />
        </label>

        <label>
          <span>Phone</span>
          <input name="phone" type="tel" maxLength={40} />
        </label>

        <label className="full">
          <span>Organization name *</span>
          <input name="organizationName" required maxLength={160} />
        </label>

        <label>
          <span>Organization type *</span>
          <select
            name="organizationType"
            required
            defaultValue={defaultOrganization}
          >
            <option value="">Select one</option>
            <option>Nonprofits</option>
            <option>Churches</option>
            <option>Nonprofit Boards</option>
            <option>Public Health</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          <span>Service *</span>
          <select name="service" required defaultValue={defaultService}>
            <option value="">Select one</option>
            <option>Development Strategy</option>
            <option>Facilitation</option>
            <option>General Consulting</option>
            <option>Survey Support</option>
            <option>Not Sure Yet</option>
          </select>
        </label>

        <label>
          <span>Approximate budget</span>
          <select name="budget" defaultValue="">
            <option value="">Select one</option>
            <option>Under $1,000</option>
            <option>$1,000 – $2,500</option>
            <option>$2,500 – $5,000</option>
            <option>$5,000 – $10,000</option>
            <option>$10,000+</option>
            <option>Not Sure</option>
          </select>
        </label>

        <label>
          <span>Desired timeline</span>
          <select name="timeline" defaultValue="">
            <option value="">Select one</option>
            <option>Immediately</option>
            <option>Within 30 Days</option>
            <option>1–3 Months</option>
            <option>3–6 Months</option>
            <option>Exploring Options</option>
          </select>
        </label>

        <label className="full">
          <span>Tell us about your project *</span>
          <textarea
            name="project"
            required
            rows={7}
            maxLength={4000}
            placeholder="What are you working on, and what kind of support would be useful?"
          />
        </label>

        <label className="full">
          <span>How did you hear about us?</span>
          <input name="referral" maxLength={200} />
        </label>
      </div>

      <div className="form-submit-row">
        <button
          className="button"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Submit Inquiry"}
        </button>
        <p className="privacy-note">
          Your information will only be used to respond to your inquiry.
        </p>
      </div>

      {message && (
        <div
          className={`form-message ${
            status === "success" ? "success" : "error"
          }`}
          role="status"
        >
          {message}
        </div>
      )}
    </form>
  );
}
