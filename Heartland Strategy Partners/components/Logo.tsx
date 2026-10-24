import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="brand-logo"
      aria-label="Heartland Strategy Partners home"
    >
      <Image
        src="/heartland-logo.png"
        alt="Heartland Strategy Partners"
        width={420}
        height={170}
        priority
        className="site-logo"
      />
    </Link>
  );
}