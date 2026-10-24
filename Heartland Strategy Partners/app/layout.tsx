import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/Header";

import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default:
      "Heartland Strategy Partners",

    template:
      "%s | Heartland Strategy Partners",
  },

  description:
    "Helping mission-driven organizations find clarity, build alignment, and move forward.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}