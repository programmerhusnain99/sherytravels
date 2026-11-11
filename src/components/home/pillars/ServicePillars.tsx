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

function PillarCard({
  icon: Icon,
  title,
  body,
  href,
  index,
  className = "",
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  href: string;
  index: number;
  className?: string;
}) {
  return (
    <div
      data-pillar
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white p-5 shadow-[0_44px_84px_-34px_rgba(26,62,110,0.5)] dt:p-6 ${className}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute right-4 top-1 font-serif text-[56px] font-bold leading-none text-navy/[0.06]"
      >
        0{index + 1}
      </span>

      <div className="mb-2.5 flex items-center gap-3">
        <span className="grid h-10 w-10 flex-none place-items-center rounded-lg bg-gold/[0.14]">
          <Icon size={20} className="text-gold" aria-hidden />
        </span>
        <h3 className="font-serif text-[18px] font-bold leading-tight text-navy dt:text-[20px]">
          {title}
        </h3>
      </div>
      <span aria-hidden className="mb-3 block h-[2px] w-7 rounded-full bg-gold" />
      <p className="text-[13.5px] font-light leading-relaxed text-navy/70 dt:text-[14.5px]">{body}</p>

      <Link
        href={href}
        className="mt-auto inline-flex w-fit items-center gap-1.5 pt-3.5 text-[11.5px] font-bold uppercase tracking-[0.1em] text-gold transition-colors hover:text-navy"
      >
        Explore
        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

/**
 * Service pillars overlapping the hero above and the navy section below.
 * Desktop: the three cards sit side by side. Mobile: a one-card slider that
 * reveals the next card's left edge (so it's clear there's more) with dots.
 */
export function ServicePillars() {
  const [active, setActive] = useState(0);
  const deckRef = useRef<HTMLDivElement>(null);

  const cards = () =>
    Array.from(deckRef.current?.querySelectorAll<HTMLElement>("[data-pillar]") ?? []);

  // Scroll the deck so the chosen card is left-aligned (dot clicks).
  useEffect(() => {
    const deck = deckRef.current;
    const card = cards()[active];
    if (!deck || !card) return;
    deck.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  }, [active]);

  // Track the card at the left edge as the user swipes.
  const syncActive = () => {
    const deck = deckRef.current;
    if (!deck) return;
    let best = 0;
    let bestDist = Infinity;
    cards().forEach((el, i) => {
      const d = Math.abs(el.offsetLeft - deck.scrollLeft);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    if (best !== active) setActive(best);
  };

  return (
    <div className="relative z-20 -mt-28 -mb-16 dt:-mt-40 dt:-mb-24">
      <Container>
        {/* Desktop: three cards side by side */}
        <div className="hidden gap-7 dt:grid dt:grid-cols-3">
          {PILLARS.map((p, i) => (
            <PillarCard key={p.title} {...p} index={i} />
          ))}
        </div>

        {/* Mobile: one-card slider with the next card peeking + dots */}
        <div className="dt:hidden">
          <div
            ref={deckRef}
            onScroll={syncActive}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
          >
            {PILLARS.map((p, i) => (
              <PillarCard key={p.title} {...p} index={i} className="w-[86%] flex-none snap-start" />
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {PILLARS.map((p, i) => (
              <button
                key={p.title}
                type="button"
                aria-label={`Show ${p.title}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-gold" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
