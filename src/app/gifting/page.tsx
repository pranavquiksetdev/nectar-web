import type { Metadata } from "next";
import GiftingSection from "@/components/sections/GiftingSection";

export const metadata: Metadata = {
  title: "Gifting",
  description: "Nectar gift boxes for birthdays, festivals and thank-yous, plus bulk and corporate orders.",
};

export default function GiftingPage() {
  return (
    <main>
      <GiftingSection />
    </main>
  );
}
