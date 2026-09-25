import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-copy">
            Thoughtful strategy and practical support for organizations serving
            their communities.
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
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phone.replace(/\D/g, "")}`}>{site.phone}</a>
            <span>{site.location}</span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span>Kansas City, Missouri</span>
      </div>
    </footer>
  );
}
