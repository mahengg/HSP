import type { Metadata } from "next";
import { Suspense } from "react";
import InquiryForm from "@/components/InquiryForm";

import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Inquiry",

  description:
    "Start a conversation with Heartland Strategy Partners.",
};

export default function InquiryPage() {
  return (
    <>
      <section className="page-hero inquiry-hero">
        <div className="container">
          <p className="eyebrow">
            Start a Conversation
          </p>

          <h1>
            Let’s talk about what comes next.
          </h1>

          <p className="page-hero-copy">
            Share what you know about your
            organization, project, or
            challenge. We’ll help determine
            the support that makes the most
            sense.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container inquiry-layout">
          <aside className="contact-panel">
            <h2>
              Let’s talk about what comes
              next.
            </h2>

            <p>
              Share what you know about your
              organization, project, or
              challenge. We’ll help determine
              the support that makes the most
              sense.
            </p>

            <div className="contact-details">
              <div>
                <span>
                  Email
                </span>

                <a
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </div>

              <div>
                <span>
                  Phone
                </span>

                <a
                  href={`tel:${site.phoneHref}`}
                >
                  {site.phone}
                </a>
              </div>

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
                <p>Loading inquiry form...</p>
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
