"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const TALL = [
  { src: "/images/home/home-umrah-haram.webp", alt: "Pilgrim at the Haram" },
  { src: "/images/home/home-umrah-tawaf.webp", alt: "Tawaf around the Kaaba" },
];

/**
 * Umrah arch photo cluster. The tall arch cross-fades between its two
 * photographs every 4.2s (1.5s opacity ease); a smaller arch sits at its foot.
 * Honors prefers-reduced-motion by holding the first image.
 */
export function UmrahArch() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((i) => (i + 1) % TALL.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto h-[402px] w-[326px] dt:h-[640px] dt:w-[540px]">
      {/* Gold arch outline, offset behind the photo */}
      <div
        aria-hidden
        className="absolute left-[76px] top-0 h-[330px] w-[250px] rounded-[125px_125px_12px_12px] border-[1.5px] border-gold/70 dt:left-auto dt:right-[46px] dt:h-[600px] dt:w-[470px] dt:rounded-[235px_235px_16px_16px] dt:border-gold/65"
      />

      {/* Tall cross-fading arch */}
      <div className="absolute left-[62px] top-[22px] h-[330px] w-[250px] overflow-hidden rounded-[125px_125px_12px_12px] shadow-[0_28px_52px_-20px_rgba(0,0,0,0.5)] dt:left-auto dt:right-0 dt:top-[40px] dt:h-[600px] dt:w-[470px] dt:rounded-[235px_235px_16px_16px] dt:shadow-[0_40px_70px_-26px_rgba(0,0,0,0.45)]">
        {TALL.map((p, i) => (
          <Image
            key={p.src}
            src={p.src}
            alt={p.alt}
            fill
            sizes="(max-width: 900px) 250px, 470px"
            priority={i === 0}
            className="object-cover transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
          />
        ))}
      </div>

      {/* Small accent arch at the foot */}
      <div className="absolute bottom-0 left-0 h-[158px] w-[128px] overflow-hidden rounded-[64px_64px_10px_10px] border-4 border-white shadow-[0_18px_34px_-14px_rgba(0,0,0,0.55)] dt:bottom-[46px] dt:h-[250px] dt:w-[208px] dt:rounded-[104px_104px_12px_12px] dt:border-[5px]">
        <Image
          src="/images/home/home-umrah-madinah.webp"
          alt="Masjid an-Nabawi courtyard"
          fill
          sizes="(max-width: 900px) 128px, 208px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
