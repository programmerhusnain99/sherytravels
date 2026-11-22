"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { PackageCardLarge } from "./PackageCardLarge";
import type { PackageCard } from "@/data/home/packageCards";

/**
 * Package listing used on the Umrah pages.
 *  - Mobile: a horizontal snap-scroll that shows one card fully plus the edge
 *    of the next, so it's clear more can be swiped into view.
 *  - Desktop: a 3-column grid that reveals `step` more cards each time the
 *    "Load more" button is pressed.
 */
export function PackageGrid({
  cards,
  initial = 6,
  step = 3,
}: {
  cards: PackageCard[];
  initial?: number;
  step?: number;
}) {
  const [visible, setVisible] = useState(initial);
  const shown = cards.slice(0, visible);
  const hasMore = visible < cards.length;

  return (
    <>
      {/* Mobile — horizontal peek-scroll */}
      <div className="dt:hidden -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {cards.map((pkg) => (
          <div key={pkg.title + pkg.href} className="w-[82vw] max-w-[340px] flex-none snap-start">
            <PackageCardLarge pkg={pkg} />
          </div>
        ))}
      </div>

      {/* Desktop — grid + load more */}
      <div className="hidden dt:block">
        <div className="grid grid-cols-3 gap-7">
          {shown.map((pkg) => (
            <PackageCardLarge key={pkg.title + pkg.href} pkg={pkg} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + step)}
              className="group inline-flex items-center gap-3 rounded-full bg-navy py-3.5 pl-3.5 pr-7 text-[14px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_20px_44px_-18px_rgba(26,62,110,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_52px_-18px_rgba(26,62,110,0.75)]"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-navy transition-transform duration-300 group-hover:rotate-90">
                <Plus size={18} aria-hidden />
              </span>
              Load more packages
            </button>
          </div>
        )}
      </div>
    </>
  );
}
