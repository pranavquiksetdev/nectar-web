import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { rupees } from "@/data/products";


const boxes = [
  {
    name: "The Small Smile",
    contents: "4 assorted chocolates",
    price: 799,
    image: { src: "/images/small-smile.png", width: 500, height: 420 },
  },
  {
    name: "The Good Mood",
    contents: "8 assorted chocolates",
    price: 1499,
    image: { src: "/images/good-mood.png", width: 600, height: 490 },
  },
  {
    name: "The Big Hug",
    contents: "12 assorted chocolates, tied with a ribbon",
    price: 2799,
    image: { src: "/images/big-hug.png", width: 770, height: 635 },
  },
];

const occasions = ["Birthdays", "Festivals", "Weddings", "Thank-yous", "Get well soon", "Just because"];

export default function GiftingSection({ h = "h1" }: { h?: "h1" | "h2" } = {}) {
  return (
    <div id="gifting" className="scroll-mt-16">
      <PageHero
        as={h}
        title="Gifting"
        intro="A box of chocolate says it for you. Choose a size, add a note, and we'll wrap it in our eco-friendly packaging."
      />

      <section className="mx-auto grid max-w-[1180px] gap-8 px-[6vw] py-[6vh]">
        {boxes.map((b) => (
          <div key={b.name} className="mx-auto flex w-full max-w-[499px] flex-col gap-5">
            <Image
              src={b.image.src}
              width={b.image.width}
              height={b.image.height}
              alt={`${b.name} gift box, lid open`}
              sizes="(min-width: 540px) 499px, 90vw"
              className="h-auto w-full rounded-2xl bg-[#2b150a]"
            />
            <div className="px-1">
              <h2 className="text-2xl">{b.name}</h2>
              <p className="mt-1 text-muted">{b.contents}</p>
              <p className="mt-3 font-medium text-accent">{rupees(b.price)}</p>
              <Link
                href={`/contact?order=${encodeURIComponent(b.name)}`}
                className="mt-4 inline-block rounded-full bg-cocoa px-6 py-2.5 font-medium text-cream hover:bg-tile"
              >
                Order this box
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-[760px] px-[6vw] pb-[6vh] text-center">
        <h2 className="text-3xl">For every occasion</h2>
        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {occasions.map((o) => (
            <li key={o} className="rounded-full bg-card px-5 py-2 text-ink">
              {o}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1040px] px-[6vw] pb-[8vh]">
        <div className="rounded-[18px] bg-cocoa p-8 text-cream sm:p-12">
          <h2 className="text-3xl">Ordering for a team or an event?</h2>
          <p className="mt-4 max-w-[56ch] leading-[1.7] text-cream/75">
            We make bulk and corporate orders with custom notes. Tell us how many and when, and we&apos;ll
            send a quote.
          </p>
          <Link
            href="/contact?order=Bulk%20order"
            className="mt-7 inline-block rounded-full bg-caramel px-7 py-3 font-medium text-cocoa"
          >
            Ask for a quote
          </Link>
        </div>
      </section>
    </div>
  );
}
