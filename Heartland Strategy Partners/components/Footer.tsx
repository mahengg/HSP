import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />

          <p className="footer-tagline">
            {site.tagline}
          </p>
        </div>

        <div>
          <h3>
            Navigation
          </h3>

          <div className="footer-links">
            <Link href="/">
              Home
            </Link>

            <Link href="/services">
              Services
            </Link>

            <Link href="/inquiry">
              Inquiry
            </Link>
          </div>
        </div>

        <div>
          <h3>
            Contact
          </h3>

          <div className="footer-links">
            <a
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>

            <a
              href={`tel:${site.phoneHref}`}
            >
              {site.phone}
            </a>

            <span>
              {site.location}
            </span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Heartland Strategy Partners.
          All rights reserved.
        </span>

        <span>
          Kansas City, Missouri
        </span>
      </div>
    </footer>
  );
}