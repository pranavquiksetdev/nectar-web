import type { Metadata } from "next";
import MomentsSection from "@/components/sections/MomentsSection";

export const metadata: Metadata = {
  title: "Moments",
  description: "Which Nectar chocolate for which moment: free time, happy days and sad ones.",
};

export default function MomentsPage() {
  return (
    <main>
      <MomentsSection />
    </main>
  );
}
