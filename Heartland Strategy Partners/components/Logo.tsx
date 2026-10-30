import Image from "next/image";
import Link from "next/link";

import logo from "@/public/heartland-logo.png";

export default function Logo() {
  return (
    <Link
      href="/"
      className="brand-logo"
      aria-label="Heartland Strategy Partners home"
    >
      <Image
        src={logo}
        alt="Heartland Strategy Partners"
        priority
        className="site-logo"
      />
    </Link>
  );
}