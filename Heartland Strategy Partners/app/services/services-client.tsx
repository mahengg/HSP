"use client";

import { useState } from "react";
import Link from "next/link";

type OrganizationKey =
  | "nonprofits"
  | "faith"
  | "public-community"
  | "coalitions";

type Service = {
  title: string;
  subtitle: string;
  description: string;
  items: string[];
};

type Organization = {
  key: OrganizationKey;
  eyebrow: string;
  title: string;
  description: string;
  services: Service[];
};

const organizations: Organization[] = [
  {
    key: "nonprofits",

    eyebrow: "Mission-centered growth",

    title: "Nonprofits",

    description:
      "Helping mission-driven organizations clarify priorities, strengthen alignment, and plan for what’s next.",

    services: [
      {
        title: "Strategy",

        subtitle:
          "Find clarity. Choose what matters. Build a path forward.",

        description:
          "We help nonprofits understand where they are, determine what matters most, and create practical strategies for where they want to go.",

        items: [
          "Strategic Plan Development & Refresh",
          "Vision & Goal Setting",
          "Organizational Assessments",
          "Priority & Action Planning",
          "Implementation Planning",
          "Surveys & Data Collection",
        ],
      },

      {
        title: "Facilitation",

        subtitle:
          "Create space for better conversations.",

        description:
          "We design and facilitate productive conversations that help nonprofit boards, staff, and stakeholders work through complexity and make decisions together.",

        items: [
          "Board & Staff Retreats",
          "Strategic Planning Sessions",
          "Stakeholder Conversations",
          "Small Group Conversations",
          "Visioning & Goal-Setting Sessions",
        ],
      },

      {
        title: "Advising",

        subtitle:
          "Support shaped around what you need.",

        description:
          "Flexible strategic support for nonprofit leaders who need help thinking through priorities, implementation, evaluation, or emerging challenges.",

        items: [
          "Implementation & Evaluation Support",
          "Project-Based Consulting",
          "Strategy or Facilitation Components",
          "Priority Decision-Making Tools",
          "Custom Support",
        ],
      },
    ],
  },

  {
    key: "faith",

    eyebrow: "Clarity through change",

    title: "Faith-Based Organizations",

    description:
      "Helping congregations and faith communities navigate growth, transition, priorities, and long-term planning.",

    services: [
      {
        title: "Strategy",

        subtitle:
          "Create shared direction for what comes next.",

        description:
          "We help faith-based organizations clarify priorities, develop shared goals, and create practical plans grounded in their mission and community.",

        items: [
          "Strategic Plan Development & Refresh",
          "Vision & Goal Setting",
          "Organizational Assessments",
          "Priority & Action Planning",
          "Implementation Planning",
          "Surveys & Data Collection",
        ],
      },

      {
        title: "Facilitation",

        subtitle:
          "Create space for meaningful conversations.",

        description:
          "Structured facilitation can help leaders, staff, members, and stakeholders work through important decisions together.",

        items: [
          "Leadership Retreats",
          "Strategic Planning Sessions",
          "Stakeholder Conversations",
          "Small Group Conversations",
          "Visioning & Goal-Setting Sessions",
        ],
      },

      {
        title: "Advising",

        subtitle:
          "Flexible support when you need another perspective.",

        description:
          "Advising provides focused support for leadership teams navigating transition, planning, implementation, or organizational decisions.",

        items: [
          "Implementation & Evaluation Support",
          "Project-Based Consulting",
          "Strategy or Facilitation Components",
          "Priority Decision-Making Tools",
          "Custom Support",
        ],
      },
    ],
  },

  {
    key: "public-community",

    eyebrow: "Community-centered strategy",

    title: "Public & Community Organizations",

    description:
      "Supporting public health, community, and civic organizations working across systems and stakeholders.",

    services: [
      {
        title: "Strategy",

        subtitle:
          "Turn complex needs into practical priorities.",

        description:
          "We support public and community organizations in translating stakeholder needs, data, and organizational goals into clear priorities and actionable strategies.",

        items: [
          "Strategic Plan Development & Refresh",
          "Vision & Goal Setting",
          "Organizational Assessments",
          "Priority & Action Planning",
          "Implementation Planning",
          "Surveys & Data Collection",
        ],
      },

      {
        title: "Facilitation",

        subtitle:
          "Bring different perspectives into the same conversation.",

        description:
          "We facilitate productive conversations among agencies, teams, partners, residents, and other stakeholders working across complex systems.",

        items: [
          "Strategic Planning Sessions",
          "Stakeholder Conversations",
          "Community Conversations",
          "Small Group Conversations",
          "Visioning & Goal-Setting Sessions",
        ],
      },

      {
        title: "Advising",

        subtitle:
          "Strategic support for complex community work.",

        description:
          "Flexible advising helps organizations move initiatives forward, evaluate progress, and respond to changing priorities.",

        items: [
          "Implementation & Evaluation Support",
          "Project-Based Consulting",
          "Strategy or Facilitation Components",
          "Priority Decision-Making Tools",
          "Custom Support",
        ],
      },
    ],
  },

  {
    key: "coalitions",

    eyebrow: "Shared direction",

    title: "Coalitions & Collaborative Initiatives",

    description:
      "Creating shared direction among organizations, leaders, and communities working toward common goals.",

    services: [
      {
        title: "Strategy",

        subtitle:
          "Build a shared path forward.",

        description:
          "We help collaborative groups define shared priorities, clarify responsibilities, and create strategies that multiple organizations can move forward together.",

        items: [
          "Shared Strategic Planning",
          "Vision & Goal Setting",
          "Collaborative Assessments",
          "Priority & Action Planning",
          "Implementation Planning",
          "Surveys & Data Collection",
        ],
      },

      {
        title: "Facilitation",

        subtitle:
          "Create alignment across organizations and perspectives.",

        description:
          "Neutral facilitation helps coalitions and collaborative groups work through differences, build consensus, and make decisions together.",

        items: [
          "Coalition Retreats",
          "Strategic Planning Sessions",
          "Stakeholder Conversations",
          "Small Group Conversations",
          "Consensus-Building Sessions",
        ],
      },

      {
        title: "Advising",

        subtitle:
          "Support for collaborative work that keeps moving.",

        description:
          "We provide focused strategic support as collaborations implement plans, navigate new challenges, or determine what needs attention next.",

        items: [
          "Implementation & Evaluation Support",
          "Project-Based Consulting",
          "Strategy or Facilitation Components",
          "Priority Decision-Making Tools",
          "Custom Support",
        ],
      },
    ],
  },
];

const pricing = [
  {
    title: "Focused Support",

    price: "$1,500–$7,500",

    description:
      "Targeted support for a specific challenge, conversation, or project.",
  },

  {
    title: "Strategic Engagements",

    price: "$7,500–$20,000",

    description:
      "A focused planning, assessment, facilitation, or organizational engagement.",
  },

  {
    title: "Comprehensive Strategy",

    price: "$20,000–$40,000+",

    description:
      "A deeper, multi-stage engagement involving strategy development, stakeholder participation, facilitation, and implementation planning.",
  },

  {
    title: "Flexible Support",

    price: "$120/hour",

    description:
      "Strategic thinking, facilitation, implementation support, or ongoing advising without a larger engagement.",
  },
];

export default function ServicesClient() {
  const [selected, setSelected] =
    useState<OrganizationKey>("nonprofits");

  const organization =
    organizations.find(
      (item) => item.key === selected
    ) ?? organizations[0];

  return (
    <>
      <section className="services-selection">
        <div className="container">
          <div className="organization-selector">
            {organizations.map((item) => (
              <button
                key={item.key}
                type="button"
                className={`organization-selector-card ${
                  selected === item.key ? "active" : ""
                }`}
                onClick={() => setSelected(item.key)}
              >
                <span>
                  {item.eyebrow}
                </span>

                <strong>
                  {item.title}
                </strong>

                <small>
                  View services →
                </small>
              </button>
            ))}
          </div>

          <div className="selected-organization-heading">
            <div>
              <p className="eyebrow">
                {organization.eyebrow}
              </p>

              <h2>
                {organization.title}
              </h2>
            </div>

            <p>
              {organization.description}
            </p>
          </div>

          <div className="organization-service-grid">
            {organization.services.map(
              (service, index) => (
                <article
                  className="organization-service-card"
                  key={service.title}
                >
                  <div>
                    <span className="service-number">
                      0{index + 1}
                    </span>

                    <h3>
                      {service.title}
                    </h3>

                    <p className="service-card-subtitle">
                      {service.subtitle}
                    </p>

                    <p className="service-card-description">
                      {service.description}
                    </p>
                  </div>

                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/inquiry?organization=${encodeURIComponent(
                      organization.title
                    )}&service=${encodeURIComponent(
                      service.title
                    )}`}
                    className="service-card-link"
                  >
                    Ask about this service →
                  </Link>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <section className="services-pricing-section">
        <div className="container">
          <div className="services-pricing-header">
            <div>
              <p className="eyebrow">
                Every organization is different.
                So is every engagement.
              </p>

              <h2>
                What does consulting with
                Heartland cost?
              </h2>
            </div>

            <p>
              Whether you need a few hours of
              strategic guidance or a
              comprehensive planning process,
              we shape the work around your
              organization’s goals, capacity,
              people, and needs.
            </p>
          </div>

          <div className="services-price-grid">
            {pricing.map((item) => (
              <article
                className="services-price-card"
                key={item.title}
              >
                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                <strong>
                  {item.price}
                </strong>
              </article>
            ))}
          </div>

          <div className="services-pricing-footer">
            <p>
              Not sure which approach is right
              for you? That’s okay. We’ll start
              with a conversation and figure it
              out together.
            </p>

            <Link
              href="/inquiry"
              className="button button-primary"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}