import Link from "next/link";
import { navLinks } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="mt-auto bg-cocoa px-[6vw] py-12 text-cream/80">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-8 text-center">
        <div className="max-w-sm">
          <p className="font-display text-3xl text-cream">Nectar</p>
          <p className="mt-3 leading-relaxed">Less sugar, lots of cocoa. Every break ends in a smile.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[15px]">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-caramel">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-[1180px] border-t border-white/10 pt-6 text-center text-[13px] text-cream/60">
        © Nectar
      </p>
    </footer>
  );
}
