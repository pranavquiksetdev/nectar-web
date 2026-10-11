import type { Metadata } from "next";
import PackagingSection from "@/components/sections/PackagingSection";

export const metadata: Metadata = {
  title: "Packaging and planet",
  description: "Nectar uses eco-friendly packaging, so the only thing left behind is a smile.",
};

export default function PackagingPage() {
  return (
    <main>
      <PackagingSection />
    </main>
  );
}
