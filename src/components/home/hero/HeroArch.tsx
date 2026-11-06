"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const PHOTOS = [
  { src: "/images/home/home-hero-kaaba.webp", alt: "The Kaaba, Masjid al-Haram" },
  { src: "/images/home/home-hero-madinah.webp", alt: "Masjid an-Nabawi, Madinah" },
  { src: "/images/home/home-hero-quba.webp", alt: "Masjid Quba, Madinah" },
  { src: "/images/home/home-hero-jabal.webp", alt: "Jabal al-Nour, Makkah" },
];

/** Floating arch photo that cross-fades through four pilgrimage images every 4.2s. */
export function HeroArch() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((i) => (i + 1) % PHOTOS.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto h-[440px] w-[326px] dt:h-[520px] dt:w-[540px]">
      {/* Ground shadow */}
      <div
        aria-hidden
        className="absolute bottom-1 left-1/2 h-9 w-[300px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(26,62,110,0.22),rgba(26,62,110,0)_70%)] dt:w-[560px]"
      />
      {/* Arch image stack */}
      <div className="hero-float absolute bottom-7 left-1/2 h-[392px] w-[326px] -translate-x-1/2 overflow-hidden rounded-t-[163px] rounded-b-[14px] shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[480px] dt:w-[540px] dt:rounded-t-[270px] dt:rounded-b-[16px]">
        {PHOTOS.map((p, i) => (
          <Image
            key={p.src}
            src={p.src}
            alt={p.alt}
            fill
            sizes="(max-width: 900px) 326px, 540px"
            priority={i === 0}
            className="object-cover transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
          />
        ))}
      </div>

      {/* Stat badges */}
      <Badge
        className="left-[-14px] top-[56px] dt:left-[-6px] dt:top-[150px]"
        value="10+"
        label="Years of service"
        shape={<span className="h-3.5 w-3.5 rounded-full border-[2.5px] border-navy" />}
        tile="bg-lightblue"
      />
      <Badge
        className="right-[-14px] top-[184px] dt:right-[-18px] dt:top-[96px]"
        value="1,000+"
        label="Pilgrims guided"
        shape={<span className="h-3.5 w-3.5 rotate-45 bg-navy" />}
        tile="bg-gold"
      />
      <Badge
        className="bottom-[48px] left-[-6px] dt:bottom-[120px] dt:right-[6px] dt:left-auto"
        value="24/7"
        label="On-ground support"
        shape={<span className="h-3.5 w-3.5 rounded-[3px] border-[2.5px] border-gold" />}
        tile="bg-navy"
      />
    </div>
  );
}

function Badge({
  className,
  value,
  label,
  shape,
  tile,
}: {
  className: string;
  value: string;
  label: string;
  shape: React.ReactNode;
  tile: string;
}) {
  return (
    <div
      className={`absolute z-10 flex items-center gap-2.5 rounded-full border border-navy/10 bg-white py-2 pl-2 pr-4 shadow-[0_18px_40px_-16px_rgba(26,62,110,0.4)] ${className}`}
    >
      <span className={`grid h-9 w-9 flex-none place-items-center rounded-full ${tile}`}>{shape}</span>
      <span>
        <span className="block font-serif text-[18px] font-bold leading-none text-navy">{value}</span>
        <span className="block whitespace-nowrap text-[11.5px] text-navy/80">{label}</span>
      </span>
    </div>
  );
}
