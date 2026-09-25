import type { Metadata } from "next";
import ServicesClient from "./services-client";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore consulting services for nonprofits, churches, nonprofit boards, and public-health organizations.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Services</p>
          <h1>Support shaped around your organization.</h1>
          <p>
            Select the type of organization you represent to explore services,
            common engagement types, and starting price points.
          </p>
        </div>
      </section>
      <ServicesClient />
    </>
  );
}
