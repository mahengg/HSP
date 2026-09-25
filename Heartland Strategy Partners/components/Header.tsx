import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/inquiry">Inquiry</Link>

          <Link href="/inquiry" className="button button-small">
            Start a Conversation
          </Link>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>

          <nav aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/inquiry">Inquiry</Link>

            <Link href="/inquiry" className="button">
              Start a Conversation
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}