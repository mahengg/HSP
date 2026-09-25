import Link from "next/link";
import { site } from "@/data/site";

const audiences = [
  {
    title: "Nonprofits",
    slug: "nonprofits",
    text:
      "Strategy and organizational support for mission-driven teams navigating growth, capacity, and community needs.",
  },
  {
    title: "Churches",
    slug: "churches",
    text:
      "Planning, facilitation, and engagement support for congregations and leadership teams.",
  },
  {
    title: "Nonprofit Boards",
    slug: "boards",
    text:
      "Governance, planning, and facilitated conversations that help boards move from discussion to direction.",
  },
  {
    title: "Public Health",
    slug: "public-health",
    text:
      "Community-centered strategy, survey support, stakeholder engagement, and program planning.",
  },
];

const testimonials = [
  {
    quote:
      "Heartland Strategy Partners helped us turn a broad set of ideas into priorities our team could actually move forward.",
    name: "Client Name",
    role: "Executive Director · Organization Name",
  },
  {
    quote:
      "The facilitation process created space for a productive conversation and gave our board clear next steps.",
    name: "Client Name",
    role: "Board Chair · Organization Name",
  },
  {
    quote:
      "We left the engagement with stronger questions, better alignment, and a much clearer path forward.",
    name: "Client Name",
    role: "Public Health Leader · Organization Name",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">
              Collaborative Planning · Practical Strategy · Meaningful Impact
            </p>

            <h1>
              Helping organizations build stronger strategies for stronger
              communities.
            </h1>

            <p className="hero-copy">
              Heartland Strategy Partners provides strategic planning,
              facilitation, consulting, and survey support for nonprofits,
              churches, nonprofit boards, and public-health organizations.
            </p>

            <div className="button-row">
              <Link href="/services" className="button">
                Explore Services
              </Link>

              <Link
                href="/inquiry"
                className="button button-secondary"
              >
                Start a Conversation
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <span className="hero-panel-label">
              Our mission
            </span>

            <h2>
              Practical strategy that creates meaningful community impact.
            </h2>

            <p>
              {site.mission}
            </p>

            <div className="hero-stat-grid">
              <div>
                <strong>4</strong>
                <span>Core service areas</span>
              </div>

              <div>
                <strong>4</strong>
                <span>Organization types</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-heading">
          <div>
            <p className="eyebrow">
              What we do
            </p>

            <h2>
              Collaborative planning built around your mission.
            </h2>
          </div>

          <p>
            Heartland Strategy Partners works alongside organizations
            navigating growth, planning, organizational change, community
            engagement, and complex decisions. Our approach is collaborative,
            practical, and focused on creating strategies organizations can
            actually put into action.
          </p>
        </div>

        <div className="container service-preview-grid">
          {[
            "Development Strategy",
            "Facilitation",
            "General Consulting",
            "Survey Support",
          ].map((service, index) => (
            <article className="mini-card" key={service}>
              <span>
                0{index + 1}
              </span>

              <h3>
                {service}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">
              Who we serve
            </p>

            <h2>
              Supporting organizations working to strengthen their communities.
            </h2>
          </div>

          <div className="audience-grid">
            {audiences.map((audience) => (
              <Link
                href={`/services#${audience.slug}`}
                className="audience-card"
                key={audience.title}
              >
                <span className="card-arrow">
                  ↗
                </span>

                <h3>
                  {audience.title}
                </h3>

                <p>
                  {audience.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container owner-card">
          <div className="owner-photo">
            <div className="owner-photo-placeholder">
              <span>
                Founder photo
              </span>

              <small>
                Add a professional founder headshot here.
              </small>
            </div>
          </div>

          <div className="owner-content">
            <p className="eyebrow">
              Meet the founder
            </p>

            <h2>
              Founder Name
            </h2>

            <p className="owner-title">
              Founder &amp; Principal Consultant
            </p>

            <p>
              Heartland Strategy Partners was founded to help organizations
              approach important decisions with clarity, collaboration, and
              practical strategy.
            </p>

            <p>
              Add the founder&apos;s professional background here, including
              experience working with nonprofits, community organizations,
              boards, public-health programs, strategic planning, and
              facilitation.
            </p>

            <div className="tag-row">
              <span>
                Strategic Planning
              </span>

              <span>
                Facilitation
              </span>

              <span>
                Community Engagement
              </span>

              <span>
                Survey Support
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading light">
            <p className="eyebrow">
              Client perspectives
            </p>

            <h2>
              Built around productive partnership.
            </h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <blockquote
                className="testimonial-card"
                key={testimonial.role}
              >
                <p>
                  “{testimonial.quote}”
                </p>

                <footer>
                  <strong>
                    {testimonial.name}
                  </strong>

                  <span>
                    {testimonial.role}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta">
          <div>
            <p className="eyebrow">
              Start a conversation
            </p>

            <h2>
              Have a challenge your organization is working through?
            </h2>

            <p>
              Whether you are planning for the future, facilitating an
              important conversation, gathering community feedback, or
              strengthening your organizational strategy, we would be glad to
              hear what you are working on.
            </p>
          </div>

          <Link href="/inquiry" className="button">
            Send an Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}