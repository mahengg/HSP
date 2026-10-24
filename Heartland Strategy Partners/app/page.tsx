import Link from "next/link";

const approachSteps = [
  "See Where You’re Going",
  "Understand What’s in the Way",
  "Find the Way Forward",
  "Move From Ideas to Action",
];

const testimonials = [
  {
    quote: [
      "Working with MaryAnna as a strategic planner was a valuable experience for our board. She created an environment where we could openly brainstorm, collaborate, and develop a clear framework for our vision and an achievable plan for moving forward.",
      "We especially appreciated her understanding of what it takes for nonprofits to operate and grow successfully. Her guidance helped us approach our future with greater clarity and confidence.",
    ],

    name:
      "Jennifer Hunsinger, Executive Director",

    organization:
      "Happiness Project LSMO",
  },

  {
    quote: [
      "Working with MaryAnna made strategic planning easy for our leadership team. She came with a clear plan and gave us direction before and after every session, which took the planning burden off our staff. Her process struck just the right balance: enough time to engage a wide group of stakeholders, without getting so far into the weeds that we lost momentum.",
      "The result is the most useful strategic plan I’ve worked with at any organization. We’ve turned to it again and again as we’ve navigated choppy waters in the nonprofit sector.",
    ],

    name:
      "Jennifer Meyer, Executive Director",

    organization:
      "Kansas City Community Gardens",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}

      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">
            Heartland Strategy Partners
          </p>

          <h1>
            Helping mission-driven
            organizations find clarity,
            build alignment, and move
            forward.
          </h1>

          <p className="hero-copy">
            Heartland Strategy Partners helps
            nonprofits, faith-based
            organizations, public-sector teams,
            and communities turn complex
            challenges into clear priorities,
            practical strategies, and
            meaningful impact.
          </p>

          <div className="button-row">
            <Link
              href="/services"
              className="button button-primary"
            >
              Explore Services
            </Link>

            <Link
              href="/inquiry"
              className="button button-outline"
            >
              Start a Conversation
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>
                3
              </strong>

              <span>
                Core services
              </span>
            </div>

            <div>
              <strong>
                4
              </strong>

              <span>
                Types of organizations
              </span>
            </div>
          </div>
        </div>

        <div className="hero-landscape">
          <div className="hill hill-one" />
          <div className="hill hill-two" />
          <div className="hill hill-three" />
        </div>
      </section>

      {/* APPROACH */}

      <section className="section section-soft">
        <div className="container approach-grid">
          <div>
            <p className="eyebrow">
              Our Approach
            </p>

            <h2>
              Practical strategy that creates
              meaningful community impact.
            </h2>

            <p className="section-copy">
              We help organizations understand
              where they are, decide what
              matters most, and turn shared
              direction into action their teams
              can actually carry out.
            </p>
          </div>

          <div className="approach-steps">
            {approachSteps.map(
              (step, index) => (
                <div
                  className="approach-step"
                  key={step}
                >
                  <span>
                    {index + 1}
                  </span>

                  <strong>
                    {step}
                  </strong>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="about-section">
        <div className="container about-grid">
          <div className="owner-image-placeholder">
            <span>
              Photo of MaryAnna
            </span>

            <small>
              coming soon
            </small>
          </div>

          <div className="about-content">
            <p className="eyebrow eyebrow-light">
              About Heartland Strategy Partners
            </p>

            <h2>
              MaryAnna
            </h2>

            <p className="owner-title">
              Founder &amp; Principal Consultant
            </p>

            <p>
              I’m a strategic planning
              consultant and public health
              leader with more than eight
              years of experience helping
              community groups and
              organizations create practical,
              organization-centered plans that
              lead to meaningful, measurable
              results.
            </p>

            <p>
              As a certified ToP Facilitator in
              Methods and Strategic Planning, I
              guide teams through an engaging
              process: clarifying purpose,
              understanding current realities,
              building a shared three-to-five-
              year vision, naming obstacles,
              and developing clear goals and
              actions.
            </p>

            <p>
              Through interactive discussion,
              brainstorming,
              consensus-building, and visual
              mapping, I help organizations
              create straightforward plans with
              well-defined outcomes and a clear
              path to implementation.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="section testimonials-section">
        <div className="container">
          <p className="eyebrow">
            Client Perspectives
          </p>

          <h2 className="section-heading">
            Plans people actually use.
          </h2>

          <div className="testimonial-list">
            {testimonials.map(
              (testimonial) => (
                <blockquote
                  className="testimonial"
                  key={testimonial.name}
                >
                  {testimonial.quote.map(
                    (paragraph) => (
                      <p key={paragraph}>
                        {paragraph}
                      </p>
                    )
                  )}

                  <footer>
                    <strong>
                      {testimonial.name}
                    </strong>

                    <span>
                      {testimonial.organization}
                    </span>
                  </footer>
                </blockquote>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="section home-cta-section">
        <div className="container home-cta">
          <div>
            <p className="eyebrow">
              Think clearly. Work together.
              Move forward.
            </p>

            <h2>
              Ready to talk about what comes
              next?
            </h2>
          </div>

          <Link
            href="/inquiry"
            className="button button-primary"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}