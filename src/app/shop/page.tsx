import type { Metadata } from "next";
import ShopSection from "@/components/sections/ShopSection";

export const metadata: Metadata = {
  title: "Shop",
  description: "Nectar chocolates: dark, milk and filled bars with less sugar and lots of cocoa.",
};

export default function ShopPage() {
  return (
    <main>
      <ShopSection />
    </main>
  );
}
