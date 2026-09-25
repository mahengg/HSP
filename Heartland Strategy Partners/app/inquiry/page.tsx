import type { Metadata } from "next";
import { Suspense } from "react";
import InquiryForm from "@/components/InquiryForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Inquiry",
  description:
    "Start a conversation with Heartland Strategy Partners about your organization, project, or consulting needs.",
};

export default function InquiryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">
            Inquiry
          </p>

          <h1>
            Start with what you know.
          </h1>

          <p>
            Tell us a little about your organization and what you&apos;re
            working through. You do not need to have every detail figured out
            before reaching out.
          </p>
        </div>
      </section>

      <section className="section inquiry-section">
        <div className="container inquiry-layout">
          <aside className="contact-panel">
            <p className="eyebrow">
              Contact
            </p>

            <h2>
              Let&apos;s talk about what comes next.
            </h2>

            <p>
              Share what you know about your organization, project, or
              challenge. Heartland Strategy Partners can help determine the
              type of support that makes the most sense.
            </p>

            <div className="contact-list">
              <div>
                <span>
                  Email
                </span>

                <a href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>

              {site.phone && (
                <div>
                  <span>
                    Phone
                  </span>

                  <a
                    href={`tel:${site.phone.replace(/\D/g, "")}`}
                  >
                    {site.phone}
                  </a>
                </div>
              )}

              <div>
                <span>
                  Location
                </span>

                <strong>
                  {site.location}
                </strong>
              </div>
            </div>
          </aside>

          <Suspense
            fallback={
              <div className="inquiry-form">
                Loading form…
              </div>
            }
          >
            <InquiryForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}