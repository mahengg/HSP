import type { Metadata } from "next";

import ServicesClient from "./services-client";

export const metadata: Metadata = {
  title: "Services",

  description:
    "Strategy, facilitation, and advising for nonprofits, faith-based organizations, public and community organizations, and collaborative initiatives.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="services-hero">
        <div className="container services-hero-inner">
          <p className="eyebrow">
            Services
          </p>

          <h1>
            Support shaped
            <br />
            around your
            <br />
            organization.
          </h1>

          <p>
            Select the type of organization you represent to explore
            services, common engagement types, and starting price
            points.
          </p>
        </div>
      </section>

      <ServicesClient />
    </>
  );
}