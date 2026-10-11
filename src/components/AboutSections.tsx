const promises = [
  { title: "Less sugar", body: "All the pleasure, without the sugar overload." },
  { title: "Lots of cocoa", body: "Rich, deep chocolate flavour is the star of every piece." },
  {
    title: "Eco-friendly packaging",
    body: "Our wrappers are kind to the planet, just like the chocolate is kind to you.",
  },
];

// One segment of the bar: a raised, moulded tile with the promise set into it.
function Segment({ title, body }: { title: string; body: string }) {
  return (
    <div className="group relative flex min-h-[260px] flex-col items-center justify-center rounded-[10px] bg-gradient-to-br from-[#4a2816] to-tile p-7 text-center shadow-[inset_0_1.5px_0_rgba(255,235,210,.18),inset_0_-3px_0_rgba(0,0,0,.4),0_6px_0_rgba(0,0,0,.35)] transition-transform duration-300 motion-safe:hover:-translate-y-1">
      {/* The moulded inner panel */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-3.5 rounded-md shadow-[inset_0_2px_5px_rgba(0,0,0,.45),0_1px_0_rgba(255,235,210,.1)]"
      />
      <h3 className="relative text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.1] text-cream">{title}</h3>
      <p className="relative mt-3 max-w-[26ch] leading-relaxed text-cream/70">{body}</p>
    </div>
  );
}

// The About Us content, shown on the home page under the headline and on /about.
export default function AboutSections() {
  return (
    <section id="about" className="scroll-mt-16 mx-auto flex max-w-[1040px] flex-col items-center gap-7 px-[6vw] py-[8vh] text-center">
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.05]">
        We pack a lot of <em className="not-italic text-accent">love</em> into every bite.
      </h2>
      <p className="max-w-[620px] text-lg leading-[1.7] text-muted">
        Nectar chocolate is made to keep you company.{" "}
        <strong className="font-semibold text-accent">
          Whatever the moment, there&apos;s a piece waiting for you.
        </strong>
      </p>

      <h3 className="mt-8 text-[clamp(1.6rem,4vw,2.4rem)]">Made with care</h3>
      <div className="grid w-full gap-2 rounded-[18px] bg-cocoa p-2.5 shadow-[0_24px_40px_-18px_rgba(36,18,10,.55)]">
        {promises.map((p) => (
          <Segment key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
