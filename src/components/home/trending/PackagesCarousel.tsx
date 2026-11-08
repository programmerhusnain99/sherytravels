"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  type LucideIcon,
  Star,
  MapPin,
  Plane,
  FileCheck,
  Bus,
  Landmark,
  Car,
  Utensils,
  BedDouble,
  Headphones,
  Tent,
  Check,
} from "lucide-react";
import type { TrendingPackage } from "@/data/home/packages";

/** Maps an inclusion emoji (from the data) to a clean line icon. */
const INCLUSION_ICON: Record<string, LucideIcon> = {
  "✈️": Plane,
  "🛂": FileCheck,
  "🚌": Bus,
  "🚐": Bus,
  "🕌": Landmark,
  "🚕": Car,
  "🚗": Car,
  "🍽️": Utensils,
  "🛏️": BedDouble,
  "🎧": Headphones,
  "⛺": Tent,
};

function Stars({ n, size = 13 }: { n: number; size?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} star`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={size} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

/** Small inclusion icon tiles (compact — line icons, not oversized). */
function Inclusions({ pkg, onNavy = false }: { pkg: TrendingPackage; onNavy?: boolean }) {
  return (
    <div className="flex gap-2">
      {pkg.inclusions.map((inc) => {
        const Icon = INCLUSION_ICON[inc.emoji] ?? Check;
        return (
          <div
            key={inc.label}
            title={inc.label}
            className={`grid h-10 w-10 flex-none place-items-center rounded-lg ${
              onNavy ? "bg-white/10 text-white" : "bg-ice text-navy"
            }`}
          >
            <Icon size={17} aria-hidden />
            <span className="sr-only">{inc.label}</span>
          </div>
        );
      })}
    </div>
  );
}

function locationLine(p: TrendingPackage) {
  return `${p.makkah} · ${p.madinah}`;
}

export function PackagesCarousel({ packages }: { packages: TrendingPackage[] }) {
  const [active, setActive] = useState(0);
  const paused = useRef(false);
  const n = packages.length;
  const deckRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Auto-advance to the next package (pauses on hover / touch).
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!paused.current) setActive((i) => (i + 1) % n);
    }, 4200);
    return () => clearInterval(id);
  }, [n]);

  // Keep the mobile deck scrolled to the active card.
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;
    const card = deck.children[active] as HTMLElement | undefined;
    if (card) deck.scrollTo({ left: card.offsetLeft - 20, behavior: "smooth" });
  }, [active]);

  // Keep the active card in view inside the desktop list (scrolls the list only).
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const el = list.children[active] as HTMLElement | undefined;
    if (!el) return;
    const top = el.offsetTop - list.offsetTop;
    if (top < list.scrollTop || top + el.offsetHeight > list.scrollTop + list.clientHeight) {
      list.scrollTo({ top: top - 8, behavior: "smooth" });
    }
  }, [active]);

  const pkg = packages[active];

  return (
    <div
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onTouchStart={() => (paused.current = true)}
    >
      {/* ---------- Desktop: feature card + list ---------- */}
      <div className="hidden gap-7 dt:grid dt:grid-cols-2">
        {/* Feature card — shows the active package */}
        <div className="flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_30px_64px_-26px_rgba(26,62,110,0.3)]">
          <div className="relative h-[230px] w-full">
            {packages.map((p, i) => (
              <Image
                key={p.id}
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width:900px) 0px, 48vw"
                className="object-cover transition-opacity duration-500"
                style={{ opacity: i === active ? 1 : 0 }}
              />
            ))}
            {pkg.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-bold text-navy shadow-sm">
                {pkg.badge}
              </span>
            )}
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="rounded-full bg-navy px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                {pkg.nightsLabel}
              </span>
              <Stars n={pkg.stars} />
              <span className="text-[12px] text-navy/55">{pkg.starLabel}</span>
            </div>

            <h3 className="font-serif text-[25px] font-bold leading-tight text-navy">{pkg.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-navy/70">{pkg.blurb}</p>

            <div className="mt-4 space-y-1.5 text-[13px] text-navy/70">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="flex-none text-gold" />
                {pkg.makkah}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="flex-none text-gold" />
                {pkg.madinah}
              </div>
            </div>

            <div className="mt-4">
              <Inclusions pkg={pkg} />
            </div>

            <div className="mt-auto flex items-end justify-between pt-6">
              <div>
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-navy/45">
                  From · per person
                </div>
                <div className="font-serif text-[26px] font-bold text-navy">{pkg.price}</div>
              </div>
              <Link
                href={pkg.href}
                className="rounded-lg bg-gold px-5 py-2.5 text-[14px] font-bold text-navy transition hover:brightness-95"
              >
                View details →
              </Link>
            </div>
          </div>
        </div>

        {/* List — redesigned cards (image + nights/stars + title + location + price) */}
        <div
          ref={listRef}
          className="no-scrollbar flex max-h-[536px] flex-col gap-3 overflow-y-auto pr-1"
        >
          {packages.map((p, i) => {
            const isActive = i === active;
            return (
              <div
                key={p.id}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
                className={`flex cursor-pointer gap-3.5 rounded-xl border p-3 text-left transition-colors duration-300 ${
                  isActive
                    ? "border-gold/60 bg-lightblue/40"
                    : "border-navy/10 bg-white hover:border-navy/25"
                }`}
              >
                <div className="relative h-[88px] w-[96px] flex-none overflow-hidden rounded-lg bg-lightblue">
                  <Image src={p.image} alt={p.title} fill sizes="96px" className="object-cover" />
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.08em] text-navy/55">
                      {p.nightsLabel}
                    </span>
                    <Stars n={p.stars} size={12} />
                    {isActive && (
                      <span className="ml-auto rounded-full bg-gold px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.08em] text-navy">
                        Showing now
                      </span>
                    )}
                  </div>

                  <h4 className="mt-1 font-serif text-[17px] font-bold leading-tight text-navy">
                    {p.title}
                  </h4>

                  <div className="mt-1 flex items-start gap-1.5 text-[11.5px] leading-snug text-navy/55">
                    <MapPin size={12} className="mt-[2px] flex-none text-gold" />
                    <span className="line-clamp-2">{locationLine(p)}</span>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="font-serif text-[17px] font-bold text-navy">{p.price}</span>
                    <Link
                      href={p.href}
                      onClick={(e) => e.stopPropagation()}
                      className="text-[12.5px] font-semibold text-gold hover:underline"
                    >
                      View details →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
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
