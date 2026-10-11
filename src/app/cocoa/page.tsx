import type { Metadata } from "next";
import CocoaSection from "@/components/sections/CocoaSection";

export const metadata: Metadata = {
  title: "Our cocoa",
  description: "Why Nectar chocolate has less sugar and lots of cocoa, and how we make it.",
};

export default function CocoaPage() {
  return (
    <main>
      <CocoaSection />
    </main>
  );
}
