import type { Metadata } from "next";
import { Gloock, Instrument_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const display = Gloock({ variable: "--font-display", weight: "400", subsets: ["latin"] });
const body = Instrument_Sans({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Nectar — Break. Taste. Smile.", template: "%s — Nectar" },
  description:
    "Nectar chocolate: less sugar, lots of cocoa and eco-friendly packaging. Every break ends in a smile.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
