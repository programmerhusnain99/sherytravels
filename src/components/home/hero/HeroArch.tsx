"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Stat = { value: string; label: string };

/**
 * Three pilgrimage images that cross-fade one after another. Each image carries
 * its own set of three floating stat badges, which change together with the image.
 *
 * NOTE: the stats for slides 2 and 3 are PLACEHOLDERS — replace with the client's
 * real figures before launch (claims like ratings / success rates must be true).
 */
const SLIDES: { src: string; alt: string; stats: [Stat, Stat, Stat] }[] = [
  {
    src: "/images/home/home-hero-kaaba.webp",
    alt: "The Kaaba, Masjid al-Haram",
    stats: [
      { value: "10+", label: "Years of service" },
      { value: "1,000+", label: "Pilgrims guided" },
      { value: "24/7", label: "On-ground support" },
    ],
  },
  {
    src: "/images/home/home-hero-madinah.webp",
    alt: "Masjid an-Nabawi, Madinah",
    stats: [
      { value: "4.9★", label: "Average rating" }, // TODO(client): confirm
      { value: "500+", label: "Families served" }, // TODO(client): confirm
      { value: "2", label: "Offices · US & KSA" }, // TODO(client): confirm
    ],
  },
  {
    src: "/images/home/home-hero-jabal.webp",
    alt: "Jabal al-Nour, Makkah",
    stats: [
      { value: "15+", label: "Yearly departures" }, // TODO(client): confirm
      { value: "5★", label: "Haram-close hotels" }, // TODO(client): confirm
      { value: "100%", label: "Visa assistance" }, // TODO(client): confirm
    ],
  },
];

/** Fixed look + position for the three badge slots; content comes from the active slide. */
const SLOTS = [
  {
    className: "left-[-14px] top-[56px] dt:left-[-6px] dt:top-[150px]",
    tile: "bg-lightblue",
    shape: <span className="h-3.5 w-3.5 rounded-full border-[2.5px] border-navy" />,
  },
  {
    className: "right-[-14px] top-[184px] dt:right-[-18px] dt:top-[96px]",
    tile: "bg-gold",
    shape: <span className="h-3.5 w-3.5 rotate-45 bg-navy" />,
  },
  {
    className: "bottom-[48px] left-[-6px] dt:bottom-[120px] dt:right-[6px] dt:left-auto",
    tile: "bg-navy",
    shape: <span className="h-3.5 w-3.5 rounded-[3px] border-[2.5px] border-gold" />,
  },
];

export function HeroArch() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), 4200);
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[active];

  return (
    <div className="relative mx-auto h-[440px] w-[326px] dt:h-[520px] dt:w-[540px]">
      {/* Ground shadow */}
      <div
        aria-hidden
        className="absolute bottom-1 left-1/2 h-9 w-[300px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(26,62,110,0.22),rgba(26,62,110,0)_70%)] dt:w-[560px]"
      />

      {/* Arch image stack (cross-fade) */}
      <div className="hero-float absolute bottom-7 left-1/2 h-[392px] w-[326px] -translate-x-1/2 overflow-hidden rounded-t-[163px] rounded-b-[14px] shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[480px] dt:w-[540px] dt:rounded-t-[270px] dt:rounded-b-[16px]">
        {SLIDES.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt={s.alt}
            fill
            sizes="(max-width: 900px) 326px, 540px"
            priority={i === 0}
            className="object-cover transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
          />
        ))}
      </div>

      {/* Stat badges — content changes with the active slide */}
      {SLOTS.map((slot, i) => (
        <Badge
          key={i}
          className={slot.className}
          tile={slot.tile}
          shape={slot.shape}
          stat={slide.stats[i]}
          swapKey={active}
        />
      ))}
    </div>
  );
}

function Badge({
  className,
  tile,
  shape,
  stat,
  swapKey,
}: {
  className: string;
  tile: string;
  shape: React.ReactNode;
  stat: Stat;
  swapKey: number;
}) {
  return (
    <div
      className={`absolute z-10 flex items-center gap-2.5 rounded-full border border-navy/10 bg-white py-2 pl-2 pr-4 shadow-[0_18px_40px_-16px_rgba(26,62,110,0.4)] ${className}`}
    >
      <span className={`grid h-9 w-9 flex-none place-items-center rounded-full ${tile}`}>{shape}</span>
      {/* key swaps the content so the fade-in animation re-runs on each slide change */}
      <span key={swapKey} className="hero-badge-in block">
        <span className="block font-serif text-[18px] font-bold leading-none text-navy">{stat.value}</span>
        <span className="block whitespace-nowrap text-[11.5px] text-navy/80">{stat.label}</span>
      </span>
    </div>
  );
}
