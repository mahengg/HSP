"use client";

import {
  FormEvent,
  useState,
} from "react";

import {
  useSearchParams,
} from "next/navigation";

type Status =
  | "idle"
  | "sending"
  | "success"
  | "error";

export default function InquiryForm() {
  const params =
    useSearchParams();

  const [
    status,
    setStatus,
  ] =
    useState<Status>(
      "idle"
    );

  const [
    message,
    setMessage,
  ] =
    useState("");

  const organization =
    params.get(
      "organization"
    ) || "";

  const service =
    params.get(
      "service"
    ) || "Not sure yet";

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setStatus(
      "sending"
    );

    setMessage("");

    const form =
      event.currentTarget;

    const formData =
      new FormData(form);

    const payload =
      Object.fromEntries(
        formData.entries()
      );

    try {
      const response =
        await fetch(
          "/api/inquiry",
          {
            method:
              "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify(
                payload
              ),
          }
        );

      const data =
        await response.json();

      if (
        !response.ok
      ) {
        throw new Error(
          data.error ||
            "Unable to send your inquiry."
        );
      }

      form.reset();

      setStatus(
        "success"
      );

      setMessage(
        "Thank you. Your inquiry has been sent. Heartland Strategy Partners will follow up with you."
      );
    } catch (
      error
    ) {
      setStatus(
        "error"
      );

      setMessage(
        error instanceof
          Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form
      className="inquiry-form"
      onSubmit={
        handleSubmit
      }
    >
      <div
        className="honeypot"
        aria-hidden="true"
      >
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="form-grid">
        <label>
          <span>
            First name *
          </span>

          <input
            name="firstName"
            required
          />
        </label>

        <label>
          <span>
            Last name *
          </span>

          <input
            name="lastName"
            required
          />
        </label>

        <label>
          <span>
            Email *
          </span>

          <input
            type="email"
            name="email"
            required
          />
        </label>

        <label>
          <span>
            Phone
          </span>

          <input
            type="tel"
            name="phone"
          />
        </label>

        <label className="full">
          <span>
            Organization
            name *
          </span>

          <input
            name="organizationName"
            required
          />
        </label>

        <label>
          <span>
            Organization
            type *
          </span>

          <select
            name="organizationType"
            required
            defaultValue={
              organization
            }
          >
            <option
              value=""
              disabled
            >
              Select one
            </option>

            <option>
              Nonprofits
            </option>

            <option>
              Faith-Based Organizations
            </option>

            <option>
              Public & Community Organizations
            </option>

            <option>
              Coalitions & Collaborative Initiatives
            </option>

            <option>
              Other
            </option>
          </select>
        </label>

        <label>
          <span>
            Service of
            interest
          </span>

          <select
            name="service"
            defaultValue={
              service
            }
          >
            <option>
              Not sure yet
            </option>

            <option>
              Strategy
            </option>

            <option>
              Facilitation
            </option>

            <option>
              Advising
            </option>
          </select>
        </label>

        <label>
          <span>
            Approximate
            budget
          </span>

          <select
            name="budget"
            defaultValue="Not sure yet"
          >
            <option>
              Not sure yet
            </option>

            <option>
              Under $1,500
            </option>

            <option>
              $1,500–$7,500
            </option>

            <option>
              $7,500–$20,000
            </option>

            <option>
              $20,000–$40,000+
            </option>
          </select>
        </label>

        <label>
          <span>
            Desired timeline
          </span>

          <select
            name="timeline"
            defaultValue="Not sure yet"
          >
            <option>
              Not sure yet
            </option>

            <option>
              As soon as possible
            </option>

            <option>
              Within 30 days
            </option>

            <option>
              1–3 months
            </option>

            <option>
              3–6 months
            </option>

            <option>
              6+ months
            </option>
          </select>
        </label>

        <label className="full">
          <span>
            Tell us about
            your project *
          </span>

          <textarea
            name="project"
            required
            rows={7}
            placeholder="What are you working on, and what kind of support would be useful?"
          />
        </label>

        <label className="full">
          <span>
            How did you
            hear about us?
          </span>

          <input
            name="referral"
          />
        </label>
      </div>

      <div className="form-submit">
        <button
          type="submit"
          className="button button-primary"
          disabled={
            status ===
            "sending"
          }
        >
          {status ===
          "sending"
            ? "Sending..."
            : "Submit Inquiry"}
        </button>

        <p>
          Your information
          will only be used
          to respond to your
          inquiry.
        </p>
      </div>

      {message && (
        <div
          className={`form-message ${
            status ===
            "success"
              ? "success"
              : "error"
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
}