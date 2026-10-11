import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact and FAQ",
  description: "Order, ask a question or say hello. Plus answers on shipping, returns and allergens.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
