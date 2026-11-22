"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { PackageCardLarge } from "./PackageCardLarge";
import type { PackageCard } from "@/data/home/packageCards";

/**
 * Package listing with "load more", used on the detail pages (tier / seasonal).
 *  - Mobile: horizontal snap-scroll showing one card plus the edge of the next;
 *    after the last visible card a beautiful "Load more" tile reveals 3 more in
 *    the row (and the next edge peeks so it's clear to keep scrolling).
 *  - Desktop: a 3-column grid with a "Load more" button below the cards.
 * Both controls drive the same state and reveal cards with a smooth entrance.
 *
 * A single container renders the visible subset so (a) revealed cards mount and
 * animate, and (b) the SVG gradient icons resolve their paint server from a
 * visible first card (a display:none copy would render blank in Chromium).
 */
export function PackageGrid({
  cards,
  initial = 3,
  step = 3,
}: {
  cards: PackageCard[];
  initial?: number;
  step?: number;
}) {
  const [visible, setVisible] = useState(initial);
  const shown = cards.slice(0, visible);
  const hasMore = visible < cards.length;
  const more = () => setVisible((v) => Math.min(v + step, cards.length));

  return (
    <>
      <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden dt:mx-0 dt:grid dt:grid-cols-3 dt:gap-7 dt:overflow-visible dt:px-0 dt:pb-0 dt:[scroll-snap-type:none]">
        {shown.map((pkg, i) => (
          <div
            key={pkg.title + pkg.href}
            className={`w-[82vw] max-w-[340px] flex-none snap-start dt:w-auto dt:max-w-none ${
              i >= initial ? "card-in" : ""
            }`}
          >
            <PackageCardLarge pkg={pkg} />
          </div>
        ))}

        {/* Mobile-only inline "load more" tile after the last visible card */}
        {hasMore && (
          <div className="w-[72vw] max-w-[290px] flex-none snap-start dt:hidden">
            <button
              type="button"
              onClick={more}
              className="group flex h-full min-h-[240px] w-full flex-col items-center justify-center gap-3.5 rounded-xl border-2 border-dashed border-gold/50 bg-gradient-to-br from-navy to-[#14325a] p-6 text-center text-white transition-all duration-300 hover:border-gold"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-gold text-navy shadow-[0_14px_30px_-10px_rgba(219,183,37,0.7)] transition-transform duration-300 group-hover:rotate-90">
                <Plus size={24} aria-hidden />
              </span>
              <span className="font-serif text-[18px] font-bold">Load {step} more</span>
              <span className="text-[12.5px] font-light leading-relaxed text-white/70">Swipe to see more packages</span>
            </button>
          </div>
        )}
      </div>

      {/* Desktop-only "load more" button below the grid */}
      {hasMore && (
        <div className="mt-12 hidden justify-center dt:flex">
          <button
            type="button"
            onClick={more}
            className="group inline-flex items-center gap-3 rounded-full bg-navy py-3.5 pl-3.5 pr-7 text-[14px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_20px_44px_-18px_rgba(26,62,110,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_52px_-18px_rgba(26,62,110,0.75)]"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-navy transition-transform duration-300 group-hover:rotate-90">
              <Plus size={18} aria-hidden />
            </span>
            Load more packages
          </button>
        </div>
      )}
    </>
  );
}
