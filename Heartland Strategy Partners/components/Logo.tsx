import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="brand brand-image"
      aria-label="Heartland Strategy Partners home"
    >
      <Image
        src="/heartland-logo.png"
        alt="Heartland Strategy Partners"
        width={360}
        height={130}
        priority
        className="site-logo"
      />
    </Link>
  );
}