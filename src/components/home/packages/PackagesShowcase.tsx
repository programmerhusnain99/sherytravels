"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Button } from "@/components/ui/Button";
import { PACKAGE_CARDS, type PackageCard as TPackageCard } from "@/data/home/packageCards";
import { PackageCard } from "./PackageCard";

type Bg = Parameters<typeof Section>[0]["bg"];

type Props = {
  eyebrow?: string;
  headingBefore?: string;
  headingAccent?: string;
  description?: string;
  packages?: TPackageCard[];
  viewAllHref?: string;
  bg?: Bg;
  /** "stacked": heading above the cards (default). "split": heading column on the left, cards on the right. */
  layout?: "stacked" | "split";
  /** Seamless infinite auto-loop (CSS marquee) instead of button-stepped scroll. */
  loop?: boolean;
};

/**
 * Horizontal auto-scrolling showcase of landscape package cards. Advances one
 * card every few seconds, loops at the end, and pauses on hover/touch/focus so
 * the cards stay clickable.
 */
export function PackagesShowcase({
  eyebrow = "Popular departures",
  headingBefore = "Explore Our ",
  headingAccent = "Umrah Packages",
  description = "Hand-picked packages with flights, visa, hotels near the Haram and transport — all arranged for you. Hover to pause and browse.",
  packages = PACKAGE_CARDS,
  viewAllHref = "/umrah-packages/",
  bg = "ice",
  layout = "stacked",
  loop = false,
}: Props = {}) {
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

  const arrows = (
    <div className="flex items-center gap-3">
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
  );

  const viewAll = (
    <Button href={viewAllHref} variant="navy" size="md" className="uppercase tracking-[0.06em]">
      View all packages
      <ArrowRight size={17} aria-hidden />
    </Button>
  );

  const trackEl = (
    <div
      ref={track}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onTouchStart={() => (paused.current = true)}
      onFocusCapture={() => (paused.current = true)}
      onBlurCapture={() => (paused.current = false)}
      className={`no-scrollbar flex snap-x snap-mandatory items-start gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
        layout === "split" ? "-mr-5 dt:-mr-14" : "px-5 dt:px-10"
      }`}
    >
      {packages.map((pkg) => (
        <div
          key={pkg.title + pkg.href}
          data-card
          className="w-[84vw] max-w-[390px] flex-none snap-start sm:w-[56vw] dt:w-[388px]"
        >
          <PackageCard pkg={pkg} />
        </div>
      ))}
    </div>
  );

  // Seamless infinite marquee (doubled cards). Pauses on hover via CSS.
  const marqueeEl = (
    <div className={`overflow-hidden pb-3 ${layout === "split" ? "-mr-5 dt:-mr-14" : ""}`}>
      <div className={`pkg-marquee flex w-max items-start gap-5 ${layout === "split" ? "" : "px-5 dt:px-10"}`}>
        {[...packages, ...packages].map((pkg, i) => (
          <div
            key={pkg.title + pkg.href + i}
            aria-hidden={i >= packages.length}
            className="w-[84vw] max-w-[390px] flex-none sm:w-[56vw] dt:w-[388px]"
          >
            <PackageCard pkg={pkg} />
          </div>
        ))}
      </div>
    </div>
  );

  const cards = loop ? marqueeEl : trackEl;

  if (layout === "split") {
    return (
      <Section bg={bg} className="overflow-hidden py-12 dt:py-16">
        <Container>
          <div className="grid gap-8 dt:grid-cols-[minmax(0,330px)_minmax(0,1fr)] dt:items-center dt:gap-12">
            {/* Heading column (left) */}
            <div className="text-center dt:text-left">
              <Eyebrow align="center" className="mb-4 dt:justify-start">
                {eyebrow}
              </Eyebrow>
              <AccentHeading
                as="h2"
                before={headingBefore}
                accent={headingAccent}
                className="text-[28px] leading-[1.16] text-navy dt:text-[40px]"
              />
              <p className="mx-auto mt-3 max-w-[460px] text-[15px] font-light leading-[1.65] text-navy/80 dt:mx-0">
                {description}
              </p>
              {/* small empty space, then controls */}
              <div className="mt-8 flex flex-col items-center gap-4 dt:items-start">
                {viewAll}
                {!loop && arrows}
              </div>
            </div>

            {/* Cards (right) */}
            {cards}
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section bg={bg} className="overflow-hidden py-12 dt:py-16">
      <Container className="mb-8 flex flex-col items-start justify-between gap-5 dt:mb-11 dt:flex-row dt:items-end">
        <div>
          <Eyebrow align="left" className="mb-4">
            {eyebrow}
          </Eyebrow>
          <AccentHeading
            as="h2"
            before={headingBefore}
            accent={headingAccent}
            className="text-[28px] leading-[1.18] text-navy dt:text-[42px]"
          />
          <p className="mt-3 max-w-[560px] text-[15.5px] font-light leading-[1.65] text-navy/80">
            {description}
          </p>
        </div>

        <div className="flex flex-none flex-col items-start gap-4 dt:items-end">
          {viewAll}
          {!loop && arrows}
        </div>
      </Container>

      {cards}
    </Section>
  );
}
