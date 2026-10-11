import type { Metadata } from "next";
import JournalSection from "@/components/sections/JournalSection";

export const metadata: Metadata = {
  title: "Journal",
  description: "Stories, tasting tips and ideas from the Nectar kitchen.",
};

export default function JournalPage() {
  return (
    <main>
      <JournalSection />
    </main>
  );
}
