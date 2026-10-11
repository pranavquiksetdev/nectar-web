// Title and intro at the top of every inner page. On the one-page home it is an h2, since the
// hero already holds the page's h1.
export default function PageHero({
  title,
  intro,
  as: Heading = "h1",
}: {
  title: string;
  intro: string;
  as?: "h1" | "h2";
}) {
  return (
    <header className="mx-auto flex max-w-[820px] flex-col items-center gap-5 px-[6vw] pt-[10vh] pb-[4vh] text-center">
      <Heading className="text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.05]">{title}</Heading>
      <p className="max-w-[56ch] text-lg leading-[1.7] text-muted">{intro}</p>
    </header>
  );
}
