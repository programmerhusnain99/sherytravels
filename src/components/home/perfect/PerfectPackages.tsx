"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { AccentHeading } from "@/components/ui/AccentHeading";

type Tile = {
  title: string;
  href: string;
  src: string;
};

const TILES: Tile[] = [
  { title: "Ramadan Umrah Packages", href: "/umrah/usa-packages/ramadan/", src: "/images/home/home-pkg-ramadan.webp" },
  { title: "December Umrah Packages", href: "/umrah/usa-packages/december/", src: "/images/home/home-pkg-december.webp" },
  { title: "Luxury Umrah Packages", href: "/umrah/usa-packages/luxury-umrah-packages/", src: "/images/home/home-pkg-luxury.webp" },
  { title: "Family Umrah Packages", href: "/umrah/usa-packages/family-umrah-packages/", src: "/images/home/home-pkg-family.webp" },
  { title: "Easter Umrah Packages", href: "/umrah/usa-packages/", src: "/images/home/home-pkg-easter.webp" },
];

// Navy gradient scrim over the lower half of each tile.
const SCRIM =
  "bg-[linear-gradient(180deg,rgba(26,62,110,0)_32%,rgba(26,62,110,0.8)_72%,rgba(26,62,110,0.96)_100%)]";

/**
 * Section 4 — "Find The Perfect Package For Umrah".
 * Horizontal deck with prev/next arrow controls (desktop) + CSS swipe (mobile).
 * Content is rendered in JSX (server-prerendered in the HTML) for SEO.
 */
export function PerfectPackages() {
  const deck = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: 1 | -1) => {
    const el = deck.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-tile]");
    const step = card ? card.offsetWidth + 12 : 300;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <Section bg="ice" className="pb-12 pt-12 dt:pb-16 dt:pt-20">
      <Container className="mb-[26px] flex items-end justify-between gap-6 dt:mb-10">
        <div>
          <AccentHeading
            as="h2"
            before="Find The Perfect Package For "
            accent="Umrah"
            className="text-[29px] leading-[1.22] dt:text-[40px] dt:leading-[1.16]"
          />
          <p className="mt-3 max-w-[720px] text-[15.5px] font-light leading-[1.65] text-navy/85 dt:text-[16.5px] dt:leading-[1.68]">
            Whether you prefer quieter months or peak seasons, luxury stays or family-friendly options
            — find the package that suits your budget, schedule, and travel preferences.
          </p>
        </div>

        {/* Prev / next controls (desktop) */}
        <div className="hidden flex-none items-center gap-3 dt:flex">
          <button
            type="button"
            aria-label="Previous packages"
            onClick={() => scrollByCards(-1)}
            className="grid h-[46px] w-[46px] place-items-center rounded-full bg-navy text-white transition-colors hover:bg-navy/90"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next packages"
            onClick={() => scrollByCards(1)}
            className="grid h-[46px] w-[46px] place-items-center rounded-full bg-gold text-navy transition-[filter] hover:brightness-105"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </Container>

      {/* Small-gap band (square image corners). A diverging/concave curve is
          carved into the top and bottom centre with ice-coloured arcs, so the
          band is full-height at the ends and gently pinched in the middle. */}
      <div className="relative overflow-hidden">
        <div
          ref={deck}
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-pl-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TILES.map((tile) => (
            <Link
              key={tile.href + tile.title}
              data-tile
              href={tile.href}
              aria-label={`${tile.title} — View all packages`}
              className="group relative h-[360px] w-full flex-none snap-start overflow-hidden bg-lightblue sm:w-[calc((100%-8px)/2)] lg:w-[calc((100%-16px)/3)] dt:h-[440px] xl:w-[calc((100%-24px)/4)] 2xl:w-[calc((100%-32px)/5)]"
            >
                <Image
                  src={tile.src}
                  alt={tile.title}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, (max-width:1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div aria-hidden className={`absolute inset-0 ${SCRIM}`} />
                <div className="absolute inset-x-[22px] bottom-9 dt:inset-x-7 dt:bottom-11">
                  <h3 className="mb-4 font-serif text-[20px] font-bold leading-[1.28] text-white text-balance dt:text-[22px]">
                    {tile.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 rounded-md bg-gold px-[18px] py-3 text-[13px] font-bold text-navy transition group-hover:brightness-105">
                    View All Packages
                    <ArrowRight size={16} aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Concave (diverging-lens) curve — ice arcs dip into the top & bottom centre */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[-48px] z-10 h-[76px] rounded-[50%] bg-ice"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-[-48px] z-10 h-[76px] rounded-[50%] bg-ice"
          />
        </div>
    </Section>
  );
}
