import { readdirSync } from "node:fs";
import { join } from "node:path";
import AboutSections from "@/components/AboutSections";
import CocoaSection from "@/components/sections/CocoaSection";
import ContactSection from "@/components/sections/ContactSection";
import GiftingSection from "@/components/sections/GiftingSection";
import JournalSection from "@/components/sections/JournalSection";
import MomentsSection from "@/components/sections/MomentsSection";
import PackagingSection from "@/components/sections/PackagingSection";
import ShopSection from "@/components/sections/ShopSection";
import ScrollFrames from "@/components/ScrollFrames";

// Every .jpg in public/frames, in order. Adding or removing frames needs no code change.
const srcs = readdirSync(join(process.cwd(), "public", "frames"))
  .filter((f) => f.endsWith(".jpg"))
  .sort()
  .map((f) => `/frames/${f}`);

export default function Home() {
  return (
    <>
      <ScrollFrames srcs={srcs} />
      <main>
        <section className="flex min-h-[60vh] flex-col items-center px-[6vw] pt-[12vh] text-center">
          <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.05]">
            Every break ends in a <em className="not-italic text-accent">smile</em>.
          </h1>
        </section>
        <AboutSections />
        <ShopSection h="h2" />
        <CocoaSection h="h2" />
        <PackagingSection h="h2" />
        <GiftingSection h="h2" />
        <MomentsSection h="h2" />
        <JournalSection h="h2" />
        <ContactSection h="h2" />
      </main>
    </>
  );
}
