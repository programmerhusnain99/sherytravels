"use client";

import { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import { PackageCardLarge } from "./PackageCardLarge";
import type { PackageCard } from "@/data/home/packageCards";

/**
 * Package listing with "load more", used on the detail pages (tier / seasonal).
 *  - Mobile: a horizontal snap-scroll showing one card plus the edge of the
 *    next. A slim "load more" strip sits where the next card's edge would be;
 *    tapping it reveals `step` more cards and smoothly scrolls the first new
 *    card into view (so the edge is "replaced" by a real card).
 *  - Desktop: a 3-column grid with a "Load more" button below the cards.
 *
 * One responsive container renders the visible subset, so revealed cards mount
 * and animate, and the SVG gradient icons always resolve their paint server
 * from a visible first card.
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

  const trackRef = useRef<HTMLDivElement>(null);
  const prev = useRef(initial);

  // When more cards are revealed, bring the first new card into view (mobile).
  useEffect(() => {
    const firstNew = prev.current;
    const grew = visible > prev.current;
    prev.current = visible;
    if (!grew) return;
    const el = trackRef.current;
    if (!el || el.scrollWidth <= el.clientWidth + 4) return; // not horizontally scrollable (desktop)
    const items = el.querySelectorAll<HTMLElement>("[data-card]");
    const target = items[firstNew];
    if (!target) return;
    // Scroll the first new card to the row's left padding (20px), matching the resting state.
    const delta = target.getBoundingClientRect().left - el.getBoundingClientRect().left - 20;
    el.scrollBy({ left: delta, behavior: "smooth" });
  }, [visible]);

  return (
    <>
      <div
        ref={trackRef}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto scroll-pl-5 pb-3 pl-5 pr-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden dt:mx-0 dt:grid dt:grid-cols-3 dt:gap-7 dt:overflow-visible dt:p-0 dt:[scroll-snap-type:none]"
      >
        {shown.map((pkg, i) => (
          <div
            key={pkg.title + pkg.href}
            data-card
            className={`w-[80vw] max-w-[330px] flex-none snap-start dt:w-auto dt:max-w-none ${
              i >= initial ? "card-in" : ""
            }`}
          >
            <PackageCardLarge pkg={pkg} />
          </div>
        ))}

        {/* Mobile-only slim "load more" strip, sized like a peeking card edge */}
        {hasMore && (
          <button
            type="button"
            onClick={more}
            aria-label={`Load ${step} more packages`}
            className="group relative flex w-[58px] flex-none snap-start flex-col items-center justify-center gap-3 self-stretch overflow-hidden rounded-xl border border-gold/40 bg-gradient-to-b from-navy to-[#14325a] text-white shadow-[0_18px_40px_-24px_rgba(26,62,110,0.85)] transition-colors hover:border-gold dt:hidden"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-navy shadow-[0_10px_22px_-8px_rgba(219,183,37,0.8)] transition-transform duration-300 group-hover:rotate-90">
              <Plus size={20} aria-hidden />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/80 [writing-mode:vertical-rl] rotate-180">
              Load {step} more
            </span>
          </button>
        )}
      </div>

      {/* Desktop-only "load more" button below the grid */}
      {hasMore && (
        <div className="mt-10 hidden justify-center dt:flex">
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
