"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/nav";

// Contact is the last link and gets the button style on desktop.
const links = navLinks.slice(0, -1);

export default function Navbar() {
  // Below md the links collapse into a menu button.
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-20 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-[6vw] py-4">
        <Link href="/" className="font-display text-2xl text-accent" onClick={() => setOpen(false)}>
          Nectar
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 text-[15px] md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-ink transition-colors hover:text-accent">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-full bg-cocoa px-5 py-2 font-medium text-cream hover:bg-tile">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="flex flex-col border-t border-black/5 px-[6vw] pb-4 md:hidden">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-base text-ink">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
