import PageHero from "@/components/PageHero";


// Sample posts. Replace with real articles.
const posts = [
  {
    id: "taste-slowly",
    title: "How to taste chocolate properly",
    date: "5 October 2026",
    body: [
      "Break a piece and listen for the snap. Good chocolate breaks cleanly.",
      "Let it rest on your tongue for a few seconds instead of chewing. The flavours open up as it melts: fruit first, then roast, then a long finish.",
      "Take a sip of water between pieces. The next one will taste as good as the first.",
    ],
  },
  {
    id: "why-less-sugar",
    title: "Why we use less sugar",
    date: "21 September 2026",
    body: [
      "Sugar is a great supporting actor and a terrible lead. Too much of it hides what the cocoa is trying to say.",
      "So we add just enough to balance the natural bitterness, and let the cocoa do the talking.",
    ],
  },
  {
    id: "hot-chocolate",
    title: "A better hot chocolate",
    date: "8 September 2026",
    body: [
      "Chop a bar of Midnight 70 and melt it slowly into warm milk, stirring until smooth.",
      "Add a pinch of salt and a little cinnamon. You will not need any extra sugar.",
    ],
  },
];

export default function JournalSection({ h = "h1" }: { h?: "h1" | "h2" } = {}) {
  return (
    <div id="journal" className="scroll-mt-16">
      <PageHero as={h} title="Journal" intro="Tasting tips, small stories and ideas from the Nectar kitchen." />

      <section className="mx-auto flex max-w-[720px] flex-col px-[6vw] py-[6vh]">
        {posts.map((p) => (
          <article key={p.id} id={p.id} className="scroll-mt-24 border-t border-black/10 py-10">
            <p className="text-sm text-muted">{p.date}</p>
            <h2 className="mt-2 text-3xl leading-[1.15]">{p.title}</h2>
            <div className="mt-5 flex flex-col gap-4 text-lg leading-[1.75] text-muted">
              {p.body.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
