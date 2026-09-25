"use client";

import { useState } from "react";
import Link from "next/link";
import {
  organizations,
  type OrganizationKey,
} from "@/data/site";

export default function ServicesClient() {
  const [selected, setSelected] = useState<OrganizationKey>("nonprofits");

  const organization =
    organizations.find((item) => item.key === selected) ?? organizations[0];

  return (
    <section className="section services-shell">
      <div className="container">
        <div className="organization-selector" aria-label="Organization types">
          {organizations.map((item) => (
            <button
              id={item.key}
              key={item.key}
              className={`organization-card ${
                selected === item.key ? "active" : ""
              }`}
              onClick={() => setSelected(item.key)}
              type="button"
            >
              <span>{item.eyebrow}</span>
              <strong>{item.title}</strong>
              <small>View services →</small>
            </button>
          ))}
        </div>

        <div className="selected-organization">
          <div className="selected-heading">
            <div>
              <p className="eyebrow">{organization.eyebrow}</p>
              <h2>{organization.title}</h2>
            </div>
            <p>{organization.description}</p>
          </div>

          <div className="service-grid">
            {organization.services.map((service) => (
              <article className="service-card" key={service.name}>
                <div>
                  <p className="price">{service.price}</p>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>

                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <Link
                  href={`/inquiry?organization=${encodeURIComponent(
                    organization.title
                  )}&service=${encodeURIComponent(service.name)}`}
                  className="text-link"
                >
                  Ask about this service →
                </Link>
              </article>
            ))}
          </div>

          <p className="pricing-note">
            Pricing shown is an example starting point. Final pricing should be
            confirmed after reviewing project scope, timeline, organization
            size, and level of support required.
          </p>
        </div>
      </div>
    </section>
  );
}
