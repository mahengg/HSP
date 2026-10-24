import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />

        <nav className="desktop-nav">
          <Link href="/">
            Home
          </Link>

          <Link href="/services">
            Services
          </Link>

          <Link href="/inquiry">
            Inquiry
          </Link>

          <Link
            href="/inquiry"
            className="button button-primary button-small"
          >
            Start a Conversation
          </Link>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open menu">
            <span />
            <span />
            <span />
          </summary>

          <nav>
            <Link href="/">
              Home
            </Link>

            <Link href="/services">
              Services
            </Link>

            <Link href="/inquiry">
              Inquiry
            </Link>

            <Link
              href="/inquiry"
              className="button button-primary"
            >
              Start a Conversation
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}