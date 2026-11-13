"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Button } from "@/components/ui/Button";
import { PACKAGE_CARDS } from "@/data/home/packageCards";
import { PackageCard } from "./PackageCard";

/**
 * Horizontal auto-scrolling showcase of landscape package cards. Advances one
 * card every few seconds, loops at the end, and pauses on hover/touch/focus so
 * the cards stay clickable.
 */
export function PackagesShowcase() {
  const track = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : 420;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
    if (dir === 1 && atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (dir === -1 && el.scrollLeft <= 8) {
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    } else {
      el.scrollBy({ left: dir * amount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!paused.current) step(1);
    }, 3800);
    return () => clearInterval(id);
  }, []);

  return (
    <Section bg="ice" className="overflow-hidden py-16 dt:py-24">
      <Container className="mb-8 flex flex-col items-start justify-between gap-5 dt:mb-11 dt:flex-row dt:items-end">
        <div>
          <Eyebrow align="left" className="mb-4">
            Popular departures
          </Eyebrow>
          <AccentHeading
            as="h2"
            before="Explore Our "
            accent="Umrah Packages"
            className="text-[28px] leading-[1.18] text-navy dt:text-[42px]"
          />
          <p className="mt-3 max-w-[560px] text-[15.5px] font-light leading-[1.65] text-navy/80">
            Hand-picked packages with flights, visa, hotels near the Haram and transport — all
            arranged for you. Hover to pause and browse.
          </p>
        </div>

        <div className="flex flex-none items-center gap-3">
          <button
            type="button"
            aria-label="Previous package"
            onClick={() => step(-1)}
            className="grid h-[46px] w-[46px] place-items-center rounded-full bg-navy text-white transition-colors hover:bg-navy/90"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next package"
            onClick={() => step(1)}
            className="grid h-[46px] w-[46px] place-items-center rounded-full bg-gold text-navy transition-[filter] hover:brightness-105"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </Container>

      <div
        ref={track}
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        onTouchStart={() => (paused.current = true)}
        onFocusCapture={() => (paused.current = true)}
        onBlurCapture={() => (paused.current = false)}
        className="no-scrollbar flex snap-x snap-mandatory items-start gap-5 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden dt:px-10"
      >
        {PACKAGE_CARDS.map((pkg) => (
          <div
            key={pkg.title + pkg.href}
            data-card
            className="w-[84vw] max-w-[390px] flex-none snap-start sm:w-[56vw] dt:w-[388px]"
          >
            <PackageCard pkg={pkg} />
          </div>
        ))}
      </div>

      <Container className="mt-9 text-center dt:mt-11">
        <Button href="/umrah/usa-packages/" variant="navy" size="lg" className="uppercase tracking-[0.06em]">
          View all packages
          <ArrowRight size={18} aria-hidden />
        </Button>
      </Container>
    </Section>
  );
}
