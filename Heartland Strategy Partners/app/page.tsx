import Link from "next/link";

const audiences = [
  {
    title: "Nonprofits",
    text: "Strategy and organizational support for mission-driven teams navigating growth, capacity, and community needs.",
  },
  {
    title: "Churches",
    text: "Planning, facilitation, and engagement support for congregations and leadership teams.",
  },
  {
    title: "Nonprofit Boards",
    text: "Governance, planning, and facilitated conversations that help boards move from discussion to direction.",
  },
  {
    title: "Public Health",
    text: "Community-centered strategy, survey support, stakeholder engagement, and program planning.",
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
            <p className="eyebrow">Heartland Strategy Partners</p>
            <h1>Helping mission-driven organizations move ideas forward.</h1>
            <p className="hero-copy">
              Strategic guidance, facilitation, consulting, and survey support
              for organizations working to strengthen their communities.
            </p>
            <div className="button-row">
              <Link href="/services" className="button">
                Explore Services
              </Link>
              <Link href="/inquiry" className="button button-secondary">
                Start a Conversation
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <span className="hero-panel-label">Our approach</span>
            <h2>Clear thinking. Useful conversations. Practical next steps.</h2>
            <p>
              Every engagement is shaped around your organization, your people,
              and the decisions in front of you.
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
            <p className="eyebrow">What we do</p>
            <h2>Strategy built around your mission.</h2>
          </div>
          <p>
            Heartland Strategy Partners works alongside organizations navigating
            growth, planning, organizational change, community engagement, and
            complex decisions.
          </p>
        </div>

        <div className="container service-preview-grid">
          {["Development Strategy", "Facilitation", "General Consulting", "Survey Support"].map(
            (service, index) => (
              <article className="mini-card" key={service}>
                <span>0{index + 1}</span>
                <h3>{service}</h3>
              </article>
            )
          )}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Who we serve</p>
            <h2>Support designed for organizations serving people.</h2>
          </div>

          <div className="audience-grid">
            {audiences.map((audience) => (
              <Link
                href={`/services#${audience.title
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
                className="audience-card"
                key={audience.title}
              >
                <span className="card-arrow">↗</span>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container owner-card">
          <div className="owner-photo">
            <div className="owner-photo-placeholder">
              <span>Owner photo</span>
              <small>Replace this panel with your professional headshot.</small>
            </div>
          </div>

          <div className="owner-content">
            <p className="eyebrow">Meet the founder</p>
            <h2>Owner Name</h2>
            <p className="owner-title">Founder &amp; Principal Consultant</p>
            <p>
              Add the owner&apos;s professional biography here. A strong version
              should explain their background, experience, approach to working
              with organizations, and why Heartland Strategy Partners was
              created.
            </p>
            <p>
              The goal is to make the company feel personal and accessible while
              still presenting the experience and credibility clients expect
              from a professional consulting partner.
            </p>
            <div className="tag-row">
              <span>Strategy</span>
              <span>Facilitation</span>
              <span>Community Engagement</span>
              <span>Survey Support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading light">
            <p className="eyebrow">Client perspectives</p>
            <h2>Built around productive partnership.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <blockquote className="testimonial-card" key={testimonial.role}>
                <p>“{testimonial.quote}”</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>Have a challenge you&apos;re working through?</h2>
            <p>
              Tell us what your organization is facing and what kind of support
              would be most useful.
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
