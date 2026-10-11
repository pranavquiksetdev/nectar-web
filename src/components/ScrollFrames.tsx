"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Draws a frame sequence on a canvas as the page scrolls through a tall section. The displayed
// progress eases toward the scroll position. The first 92% of the scroll plays the frames and the
// rest zooms and fades the canvas out.
const PLAY = 0.92;
const EASE = 0.12;

export default function ScrollFrames({ srcs }: { srcs: string[] }) {
  const scroller = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const hint = useRef<HTMLDivElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const cv = canvas.current!;
    const ctx = cv.getContext("2d")!;
    const imgs: HTMLImageElement[] = [];
    let frames: HTMLImageElement[] = [];
    let loaded = 0;
    let current = -1;
    let target = 0;
    let shown = 0;
    let raf = 0;
    let cancelled = false;

    const readScroll = () => {
      const el = scroller.current!;
      const max = el.offsetHeight - innerHeight;
      target = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / max));
    };

    const draw = (i: number) => {
      const img = frames[i];
      if (i === current || !img) return;
      ctx.drawImage(img, 0, 0, cv.width, cv.height);
      current = i;
    };

    const render = () => {
      shown += (target - shown) * EASE;
      if (Math.abs(target - shown) < 0.0002) shown = target;
      const a = Math.min(1, shown / PLAY);
      draw(Math.round(a * (frames.length - 1)));
      hint.current!.style.opacity = shown > 0.01 ? "0" : "1";
      // The intro text fades and drifts up over the first few percent of the scroll.
      const t = Math.min(1, shown / 0.06);
      intro.current!.style.opacity = String(1 - t);
      intro.current!.style.transform = `translateY(${-t * 40}px)`;
      const out = Math.max(0, (shown - PLAY) / (1 - PLAY));
      stage.current!.style.transform = `scale(${1 + out * 0.15})`;
      stage.current!.style.opacity = String(1 - out);
      raf = requestAnimationFrame(render);
    };

    srcs.forEach((src, i) => {
      const im = new Image();
      const finish = () => {
        if (cancelled) return;
        setPercent(Math.round((++loaded / srcs.length) * 100));
        if (loaded === srcs.length) {
          frames = imgs.filter((m) => m.naturalWidth > 0);
          readScroll();
          shown = target;
          setReady(true);
          raf = requestAnimationFrame(render);
        }
      };
      im.onload = finish;
      im.onerror = finish;
      im.src = src;
      imgs[i] = im;
    });

    addEventListener("scroll", readScroll, { passive: true });
    addEventListener("resize", readScroll);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      removeEventListener("scroll", readScroll);
      removeEventListener("resize", readScroll);
    };
  }, [srcs]);

  return (
    <>
      <div
        className={`fixed inset-0 z-10 grid place-items-center bg-white text-[13px] tracking-[0.2em] text-muted transition-opacity duration-600 ${
          ready ? "pointer-events-none opacity-0" : ""
        }`}
      >
        LOADING {percent}%
      </div>

      <section ref={scroller} className="relative h-[250vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <div
            ref={hint}
            className="absolute inset-x-0 bottom-7 z-[3] text-center text-[13px] uppercase tracking-[0.25em] text-cream/80 transition-opacity duration-400"
          >
            Scroll to unwrap
          </div>
          <div
            ref={intro}
            className="pointer-events-none absolute inset-0 z-[2] flex flex-col justify-center bg-gradient-to-r from-black/70 via-black/35 to-transparent px-[6vw] will-change-[transform,opacity]"
          >
            <p className="flex items-center gap-4 text-[11px] tracking-[0.35em] text-cream/80 sm:text-xs">
              CRAFTED TO BE SAVOURED
              <span className="h-px w-14 bg-cream/60" />
            </p>
            <p className="mt-5 max-w-[12ch] font-display text-[clamp(2.8rem,7vw,6rem)] leading-[1.02] text-white">
              A moment of <span className="text-caramel">pure indulgence</span>
            </p>
            <p className="mt-5 max-w-[34ch] text-[clamp(1rem,1.5vw,1.3rem)] text-cream/90">
              Less sugar. Lots of cocoa. Every break ends in a smile.
            </p>
            <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/shop"
                className="bg-caramel px-7 py-3.5 text-[13px] font-medium tracking-[0.2em] text-cocoa transition-colors hover:bg-cream"
              >
                SHOP THE COLLECTION
              </Link>
              <Link
                href="/cocoa"
                className="border-b border-cream/60 pb-1 text-[13px] tracking-[0.2em] text-cream hover:border-caramel hover:text-caramel"
              >
                OUR COCOA
              </Link>
            </div>
            <p className="absolute bottom-7 left-[6vw] hidden text-[11px] tracking-[0.25em] text-cream/70 sm:block">
              LESS SUGAR &nbsp;•&nbsp; LOTS OF COCOA &nbsp;•&nbsp; ECO PACKAGING
            </p>
          </div>
          <div ref={stage} className="h-screen w-screen overflow-hidden bg-white will-change-[transform,opacity]">
            <canvas ref={canvas} width={2944} height={1248} className="block h-full w-full bg-white" />
          </div>
        </div>
      </section>
    </>
  );
}
