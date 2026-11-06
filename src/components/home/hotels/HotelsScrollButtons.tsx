"use client";

import { ChevronUp, ChevronDown } from "lucide-react";

/** Up/down controls that vertically scroll the currently visible hotel list. */
export function HotelsScrollButtons() {
  const scroll = (dir: 1 | -1) => {
    // The active city panel's scroll container is the visible one.
    const containers = Array.from(
      document.querySelectorAll<HTMLElement>("[data-hotel-scroll]"),
    );
    const el = containers.find((c) => c.offsetParent !== null);
    if (el) el.scrollBy({ top: dir * 180, behavior: "smooth" });
  };

  return (
    <div className="hidden flex-none flex-col gap-3 pt-2 dt:flex">
      <button
        type="button"
        aria-label="Scroll hotels up"
        onClick={() => scroll(-1)}
        className="grid h-11 w-11 place-items-center rounded-full bg-navy text-white transition-colors hover:bg-navy/90"
      >
        <ChevronUp size={20} />
      </button>
      <button
        type="button"
        aria-label="Scroll hotels down"
        onClick={() => scroll(1)}
        className="grid h-11 w-11 place-items-center rounded-full bg-navy text-white transition-colors hover:bg-navy/90"
      >
        <ChevronDown size={20} />
      </button>
    </div>
  );
}
