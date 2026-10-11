import Link from "next/link";
import PageHero from "@/components/PageHero";


// A real sequence, so the numbering carries meaning.
const steps = [
  { title: "Choose the beans", body: "Good chocolate starts with good cocoa. We pick beans for flavour first." },
  { title: "Roast slowly", body: "A gentle roast brings out the fruit and the depth without burning off the character." },
  { title: "Grind and refine", body: "The nibs are ground until smooth, so every piece melts evenly on the tongue." },
  { title: "Add only what's needed", body: "A little sugar to balance, never enough to hide the cocoa." },
  { title: "Rest and mould", body: "The chocolate is tempered, moulded into segments and left to set with a clean snap." },
];

export default function CocoaSection({ h = "h1" }: { h?: "h1" | "h2" } = {}) {
  return (
    <div id="cocoa" className="scroll-mt-16">
      <PageHero
        as={h}
        title="Lots of cocoa. Less sugar."
        intro="Most chocolate is mostly sugar. Ours is mostly cocoa, so you taste the chocolate and not just the sweetness."
      />

      <section className="mx-auto max-w-[760px] px-[6vw] py-[6vh]">
        <h2 className="mb-8 text-3xl">How we make it</h2>
        <ol className="flex flex-col">
          {steps.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-black/10 py-6">
              <span className="font-display text-3xl text-accent">{i + 1}</span>
              <div>
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-2 leading-[1.7] text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-[1040px] px-[6vw] pb-[8vh]">
        <div className="rounded-[18px] bg-cocoa p-8 text-cream sm:p-12">
          <h2 className="text-3xl">Less sugar doesn&apos;t mean less joy.</h2>
          <p className="mt-4 max-w-[56ch] leading-[1.7] text-cream/75">
            With more cocoa in every bar, you get a deeper flavour from fewer, smaller pieces. Taste
            slowly and a little goes a long way.
          </p>
          <Link href="/shop" className="mt-7 inline-block rounded-full bg-caramel px-7 py-3 font-medium text-cocoa">
            Shop the range
          </Link>
        </div>
      </section>
    </div>
  );
}
