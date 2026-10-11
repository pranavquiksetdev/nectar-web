import Link from "next/link";
import PageHero from "@/components/PageHero";
import { getProduct, rupees } from "@/data/products";


const moments = [
  {
    title: "Free time",
    line: "A slow afternoon with nowhere to be.",
    slug: "velvet-milk",
    why: "Soft and creamy, made to be nibbled over a book or a long chat.",
  },
  {
    title: "Happy days",
    line: "Good news deserves a bite.",
    slug: "salted-hazelnut",
    why: "A crunch and a pinch of salt. Share it with whoever you told first.",
  },
  {
    title: "Sad days",
    line: "When you need something warm to hold on to.",
    slug: "midnight-70",
    why: "Deep, dark and quietly sweet. It doesn't try to cheer you up. It just keeps you company.",
  },
  {
    title: "Focus time",
    line: "Deadlines, exams, late nights.",
    slug: "pure-85",
    why: "Intense cocoa and very little sugar, so there's no crash afterwards.",
  },
  {
    title: "Tea time",
    line: "Something small next to a hot cup.",
    slug: "orange-zest",
    why: "The orange lifts the dark chocolate and pairs well with a strong tea.",
  },
];

export default function MomentsSection({ h = "h1" }: { h?: "h1" | "h2" } = {}) {
  return (
    <div id="moments" className="scroll-mt-16">
      <PageHero
        as={h}
        title="Moments"
        intro="Spend your free time, your happiness and your sadness with us. Here's what we'd reach for in each."
      />

      <section className="mx-auto flex max-w-[860px] flex-col px-[6vw] py-[6vh]">
        {moments.map((m) => {
          const product = getProduct(m.slug)!;
          return (
            <article key={m.title} className="grid gap-4 border-t border-black/10 py-8">
              <div>
                <h2 className="text-3xl">{m.title}</h2>
                <p className="mt-2 text-accent">{m.line}</p>
              </div>
              <div>
                <p className="text-lg leading-[1.7] text-muted">{m.why}</p>
                <Link href={`/shop/${product.slug}`} className="mt-4 inline-block font-medium text-ink underline decoration-accent underline-offset-4 hover:text-accent">
                  {product.name}, {rupees(product.price)}
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
