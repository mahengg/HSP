import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />

          <p className="footer-tagline">{site.tagline}</p>

          <p className="footer-copy">
            Helping organizations turn collaborative planning into practical
            strategies that strengthen communities and create meaningful,
            lasting impact.
          </p>
        </div>

        <div>
          <h3>Navigate</h3>

          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/inquiry">Inquiry</Link>
          </div>
        </div>

        <div>
          <h3>Contact</h3>

          <div className="footer-links">
            <a href={`mailto:${site.email}`}>
              {site.email}
            </a>

            {site.phone && (
              <a href={`tel:${site.phone.replace(/\D/g, "")}`}>
                {site.phone}
              </a>
            )}

            <span>{site.location}</span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </span>

        <span>{site.location}</span>
      </div>
    </footer>
  );
}