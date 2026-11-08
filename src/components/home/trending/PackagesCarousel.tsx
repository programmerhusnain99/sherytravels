"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import type { TrendingPackage } from "@/data/home/packages";

function Stars({ n, size = 14 }: { n: number; size?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} star`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={size} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

function Inclusions({ pkg, onNavy = false }: { pkg: TrendingPackage; onNavy?: boolean }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {pkg.inclusions.map((inc) => (
        <div
          key={inc.label}
          title={inc.label}
          className={`grid aspect-square place-items-center rounded-lg text-[20px] ${onNavy ? "bg-white/10" : "bg-ice"}`}
        >
          <span aria-hidden>{inc.emoji}</span>
          <span className="sr-only">{inc.label}</span>
        </div>
      ))}
    </div>
  );
}

export function PackagesCarousel({ packages }: { packages: TrendingPackage[] }) {
  const [active, setActive] = useState(0);
  const paused = useRef(false);
  const n = packages.length;
  const deckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!paused.current) setActive((i) => (i + 1) % n);
    }, 3600);
    return () => clearInterval(id);
  }, [n]);

  // Keep the mobile deck scrolled to the active card.
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;
    const card = deck.children[active] as HTMLElement | undefined;
    if (card) deck.scrollTo({ left: card.offsetLeft - 20, behavior: "smooth" });
  }, [active]);

  const pkg = packages[active];

  return (
    <div
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onTouchStart={() => (paused.current = true)}
    >
      {/* ---------- Desktop: feature card + list ---------- */}
      <div className="hidden gap-8 dt:grid dt:grid-cols-2">
        {/* Feature card */}
        <div className="flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_30px_64px_-26px_rgba(26,62,110,0.3)]">
          <div className="relative h-[244px] w-full">
            {packages.map((p, i) => (
              <Image
                key={p.id}
                src={p.image}
                alt={p.title}
                fill
                sizes="50vw"
                className="object-cover transition-opacity duration-500"
                style={{ opacity: i === active ? 1 : 0 }}
              />
            ))}
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-ice px-3 py-1 text-[12px] font-semibold text-navy">{pkg.nightsLabel}</span>
              <Stars n={pkg.stars} />
              <span className="text-[12px] text-navy/60">{pkg.starLabel}</span>
              {pkg.badge && (
                <span className="ml-auto rounded-full bg-gold px-3 py-1 text-[11px] font-bold text-navy">{pkg.badge}</span>
              )}
            </div>
            <h3 className="font-serif text-[26px] font-normal text-navy">{pkg.title}</h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-navy/75">{pkg.blurb}</p>
            <div className="mt-4 space-y-1 text-[13.5px] text-navy/70">
              <div>{pkg.makkah}</div>
              <div>{pkg.madinah}</div>
            </div>
            <div className="mt-4">
              <Inclusions pkg={pkg} />
            </div>
            <div className="mt-auto flex items-center justify-between pt-6">
              <div className="font-serif text-[24px] font-bold text-navy">{pkg.price}</div>
              <Link href={pkg.href} className="text-[14px] font-semibold text-gold hover:underline">
                View details →
              </Link>
            </div>
          </div>
        </div>

        {/* List */}
        <div className="flex max-h-[696px] flex-col gap-3 overflow-y-auto pr-1 no-scrollbar">
          {packages.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-4 rounded-xl border p-3 text-left transition-colors duration-300 ${
                i === active ? "border-gold bg-lightblue/40" : "border-navy/10 bg-white hover:border-navy/20"
              }`}
            >
              <div className="relative h-[72px] w-[72px] flex-none overflow-hidden rounded-lg">
                <Image src={p.image} alt={p.title} fill sizes="72px" className="object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="truncate font-serif text-[16px] font-bold text-navy">{p.title}</span>
                  {i === active && <span className="ml-auto rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold text-navy">Showing now</span>}
                </div>
                <div className="mt-0.5 flex items-center gap-2">
                  <Stars n={p.stars} size={12} />
                  <span className="text-[12px] text-navy/60">{p.nightsLabel}</span>
                </div>
              </div>
              <div className="font-serif text-[16px] font-bold text-navy">{p.price}</div>
            </button>
          ))}
        </div>
      </div>

      {/* ---------- Mobile: ticket deck + dots ---------- */}
      <div className="dt:hidden">
        <div ref={deckRef} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {packages.map((p) => (
            <article key={p.id} className="relative w-[300px] flex-none snap-start overflow-hidden rounded-2xl bg-navy text-white">
              <div className="relative h-[150px] w-full">
                <Image src={p.image} alt={p.title} fill sizes="300px" className="object-cover" />
                {p.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-1 text-[11px] font-bold text-navy">{p.badge}</span>
                )}
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold">{p.nightsLabel}</span>
                  <Stars n={p.stars} />
                </div>
                <h3 className="font-serif text-[22px] font-normal">{p.title}</h3>
                <div className="mt-2 space-y-0.5 text-[12.5px] text-white/70">
                  <div>{p.makkah}</div>
                  <div>{p.madinah}</div>
                </div>
                <div className="mt-3">
                  <Inclusions pkg={p} onNavy />
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-serif text-[20px] font-bold">{p.price}</span>
                  <Link href={p.href} className="text-[13px] font-semibold text-gold">View details →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-1.5">
          {packages.map((p, i) => (
            <button
              key={p.id}
              aria-label={`Show ${p.title}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-5 bg-gold" : "w-1.5 bg-navy/20"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
