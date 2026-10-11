import Image from "next/image";
import PageHero from "@/components/PageHero";


const layers = [
  { title: "The wrapper", image: { src: "/images/packaging-wrapper.png", width: 770, height: 420 }, body: "Made from paper-based material, with no plastic film around the chocolate." },
  { title: "The box", image: { src: "/images/packaging-box.png", width: 660, height: 470 }, body: "Recycled card, printed with inks that are kinder to the planet." },
  { title: "The shipping", image: { src: "/images/packaging-shipping.png", width: 780, height: 585 }, body: "Padded with paper instead of plastic bubbles, and packed to the size of your order." },
];

const habits = [
  "Right-sized boxes, so nothing travels as air.",
  "Easy to separate, so each layer goes in the right bin.",
  "No glossy extras that can't be recycled.",
];

export default function PackagingSection({ h = "h1" }: { h?: "h1" | "h2" } = {}) {
  return (
    <div id="packaging" className="scroll-mt-16">
      <PageHero
        as={h}
        title="Kind packaging"
        intro="We think a chocolate should be kind to you and to the planet it came from. So we wrap it in eco-friendly packaging."
      />

      <section className="mx-auto grid max-w-[1040px] gap-10 px-[6vw] py-[6vh]">
        {layers.map((l) => (
          <div
            key={l.title}
            className="mx-auto flex w-full max-w-[499px] flex-col gap-5"
          >
            <Image
              src={l.image.src}
              width={l.image.width}
              height={l.image.height}
              alt={l.title}
              sizes="(min-width: 540px) 499px, 90vw"
              className="h-auto w-full rounded-2xl bg-[#2b150a]"
            />
            <div className="px-1 text-center">
              <h2 className="text-2xl">{l.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{l.body}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-[760px] px-[6vw] pb-[10vh]">
        <h2 className="mb-6 text-3xl">Small habits that add up</h2>
        <ul className="flex flex-col">
          {habits.map((h) => (
            <li key={h} className="border-t border-black/10 py-4 text-lg leading-[1.6] text-muted">
              {h}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
