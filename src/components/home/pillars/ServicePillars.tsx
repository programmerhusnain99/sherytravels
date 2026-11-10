"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Landmark, HeartHandshake, BusFront, ArrowRight, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";

/** Three service pillars from the live site's hero. */
const PILLARS: { icon: LucideIcon; title: string; body: string; href: string }[] = [
  {
    icon: Landmark,
    title: "Umrah Made Easy",
    body: "Let’s uncover your journey of peace with our Umrah services. We handle visa processing efficiently and provide comfortable accommodations near the Haram.",
    href: "/umrah/",
  },
  {
    icon: HeartHandshake,
    title: "Your Trusted Hajj Partner",
    body: "Join us for a memorable Hajj experience. We provide expert guidance, quality accommodations, and reliable transportation to make your pilgrimage unforgettable.",
    href: "/hajj/",
  },
  {
    icon: BusFront,
    title: "Reliable Travel Solutions",
    body: "Travel comfortably with our modern, air-conditioned vehicles and professional drivers. We offer flexible scheduling to make sure you arrive on time everywhere.",
    href: "/transportation/",
  },
];

/**
 * Service pillars as a one-card-at-a-time horizontal carousel that OVERLAPS the
 * hero above and the navy section below. One card is centred (with the neighbours
 * peeking); swipe / scroll or use the dots to move. Auto-advances, pausing on
 * interaction. Spacers at each end let the first and last card centre.
 */
export function ServicePillars() {
  const [active, setActive] = useState(0);
  const deckRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const n = PILLARS.length;

  const cards = () =>
    Array.from(deckRef.current?.querySelectorAll<HTMLElement>("[data-pillar]") ?? []);

  // Auto-advance.
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!paused.current) setActive((i) => (i + 1) % n);
    }, 4500);
    return () => clearInterval(id);
  }, [n]);

  // Centre the active card.
  useEffect(() => {
    const deck = deckRef.current;
    const card = cards()[active];
    if (!deck || !card) return;
    deck.scrollTo({
      left: card.offsetLeft - (deck.clientWidth - card.clientWidth) / 2,
      behavior: "smooth",
    });
  }, [active]);

  // Keep the dots in sync while the user scrolls manually.
  const syncActive = () => {
    const deck = deckRef.current;
    if (!deck) return;
    const center = deck.scrollLeft + deck.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    cards().forEach((el, i) => {
      const cc = el.offsetLeft + el.clientWidth / 2;
      const d = Math.abs(cc - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    if (best !== active) setActive(best);
  };

  return (
    <div
      className="relative z-20 -mt-28 -mb-16 dt:-mt-40 dt:-mb-24"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onTouchStart={() => (paused.current = true)}
    >
      <Container>
        <div
          ref={deckRef}
          onScroll={syncActive}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {/* leading spacer so the first card can centre */}
          <div aria-hidden className="flex-none w-[calc((100%-82vw)/2)] dt:w-[calc((100%-460px)/2)]" />

          {PILLARS.map(({ icon: Icon, title, body, href }, i) => (
            <div
              key={title}
              data-pillar
              className="group relative flex w-[82vw] flex-none snap-center flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_44px_84px_-34px_rgba(26,62,110,0.5)] dt:w-[460px] dt:p-8"
            >
              {/* editorial index number */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-4 top-1 font-serif text-[56px] font-bold leading-none text-navy/[0.06]"
              >
                0{i + 1}
              </span>

              <span className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-gold/[0.14]">
                <Icon size={20} className="text-gold" aria-hidden />
              </span>
              <h3 className="mb-1.5 font-serif text-[18px] font-bold text-navy dt:text-[20px]">
                {title}
              </h3>
              <span aria-hidden className="mb-3 block h-[2px] w-7 rounded-full bg-gold" />
              <p className="text-[13.5px] font-light leading-relaxed text-navy/70 dt:text-[14.5px]">
                {body}
              </p>

              <Link
                href={href}
                className="mt-auto inline-flex w-fit items-center gap-1.5 pt-5 text-[11.5px] font-bold uppercase tracking-[0.1em] text-gold transition-colors hover:text-navy"
              >
                Explore
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}

          {/* trailing spacer so the last card can centre */}
          <div aria-hidden className="flex-none w-[calc((100%-82vw)/2)] dt:w-[calc((100%-460px)/2)]" />
        </div>

        {/* Dots (sit over the navy section below — light on dark) */}
        <div className="mt-6 flex justify-center gap-2">
          {PILLARS.map(({ title }, i) => (
            <button
              key={title}
              type="button"
              aria-label={`Show ${title}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-gold" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
