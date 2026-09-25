import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="brand" aria-label="Heartland Strategy Partners home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <path
            d="M14 12v40M50 12v40M14 32h36"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M22 22c5-7 15-7 20 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="brand-text">
        <strong>Heartland</strong>
        <span>Strategy Partners</span>
      </span>
    </Link>
  );
}
