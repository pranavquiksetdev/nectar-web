import type { Metadata } from "next";
import AboutSections from "@/components/AboutSections";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <main>
      <AboutSections />
    </main>
  );
}
