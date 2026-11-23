import { PackageCardLarge } from "./PackageCardLarge";
import type { PackageCard } from "@/data/home/packageCards";

/**
 * A fixed row of package cards (no "load more").
 *  - Mobile: horizontal snap-scroll showing one card plus the edge of the next.
 *  - Desktop: an even grid (defaults to 3 columns).
 *
 * One container is used so the SVG gradient icons always resolve their paint
 * server from a visible card.
 */
export function PackageRow({ cards, cols = 3 }: { cards: PackageCard[]; cols?: 2 | 3 }) {
  const gridCols = cols === 2 ? "dt:grid-cols-2" : "dt:grid-cols-3";
  return (
    <div
      className={`no-scrollbar -mx-5 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto scroll-pl-5 pb-3 pl-5 pr-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden dt:mx-0 dt:grid ${gridCols} dt:gap-7 dt:overflow-visible dt:p-0 dt:[scroll-snap-type:none]`}
    >
      {cards.map((pkg) => (
        <div
          key={pkg.title + pkg.href}
          className="w-[80vw] max-w-[330px] flex-none snap-start dt:w-auto dt:max-w-none"
        >
          <PackageCardLarge pkg={pkg} />
        </div>
      ))}
    </div>
  );
}
