import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";


// Sample answers. Replace with Nectar's real policies.
const faqs = [
  {
    q: "How long does delivery take?",
    a: "Most orders arrive within 3 to 5 working days. We'll email you when yours ships.",
  },
  {
    q: "Can I return a chocolate?",
    a: "If something arrives damaged or isn't right, tell us within 7 days and we'll make it right.",
  },
  {
    q: "Do your chocolates contain allergens?",
    a: "Some bars contain milk, hazelnuts or almonds, and all are made in a kitchen that handles nuts. Each product page lists the ingredients.",
  },
  {
    q: "Is the chocolate suitable for vegetarians?",
    a: "Yes. The dark bars are also dairy-free. Check the ingredients on each product page.",
  },
  {
    q: "Can I get a bulk or corporate order?",
    a: "Yes. Write to us with the number of boxes and the date you need them, and we'll send a quote.",
  },
];

export default function ContactSection({ h = "h1" }: { h?: "h1" | "h2" } = {}) {
  return (
    <div id="contact" className="scroll-mt-16">
      <PageHero
        as={h}
        title="Say hello"
        intro="Want to order, ask a question or tell us about your smile? Write to us below."
      />

      <section className="mx-auto grid max-w-[1040px] gap-12 px-[6vw] py-[6vh]">
        <Suspense>
          <ContactForm />
        </Suspense>
      </section>

      <section className="mx-auto max-w-[760px] px-[6vw] pb-[10vh]">
        <h2 className="mb-6 text-3xl">Questions people ask</h2>
        <div className="flex flex-col">
          {faqs.map((f) => (
            <details key={f.q} className="group border-t border-black/10 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
                {f.q}
                <span aria-hidden="true" className="text-2xl text-accent transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-[1.7] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
