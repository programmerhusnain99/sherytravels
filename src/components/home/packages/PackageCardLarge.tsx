import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PACKAGE_FEATURES, type PackageCard as TPackageCard } from "@/data/home/packageCards";
import { Skyline } from "./Skyline";

/** Corner-bracket frame marks, drawn in the foreground over the card. */
function Corners() {
  const base = "pointer-events-none absolute z-20 h-4 w-4 border-gold";
  return (
    <>
      <span className={`${base} left-2 top-2 border-l-2 border-t-2`} />
      <span className={`${base} right-2 top-2 border-r-2 border-t-2`} />
      <span className={`${base} bottom-2 left-2 border-b-2 border-l-2`} />
      <span className={`${base} bottom-2 right-2 border-b-2 border-r-2`} />
    </>
  );
}

/**
 * Portrait package card (Design 2) for package listing / detail pages: image on
 * top, then title, highlights, the feature row over a skyline band, and a
 * price + "View all details" footer. Brand navy/gold theme, square-ish corners
 * with gold corner markers.
 */
export function PackageCardLarge({ pkg }: { pkg: TPackageCard }) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_26px_54px_-30px_rgba(26,62,110,0.45)] ring-1 ring-navy/10">
      <Corners />

      {/* Image */}
      <Link
        href={pkg.href}
        aria-label={pkg.title}
        className="relative block h-[200px] w-full flex-none overflow-hidden bg-lightblue"
      >
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(max-width: 900px) 100vw, 400px"
          className="object-cover"
        />
      </Link>

      {/* Body */}
      <div className="relative flex flex-1 flex-col p-4 dt:p-5">
        <h3 className="font-serif text-[18px] font-bold leading-tight text-navy dt:text-[19px]">
          <Link href={pkg.href} className="transition-colors hover:text-gold">
            {pkg.title}
          </Link>
        </h3>

        <ul className="mt-3 flex flex-col gap-1.5">
          {pkg.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-[13px] text-navy/80">
              <span className="h-2.5 w-2.5 flex-none rounded-full border-2 border-gold" aria-hidden />
              {h}
            </li>
          ))}
        </ul>

        {/* Skyline band just above the feature row */}
        <div className="mt-auto pt-3 text-lightblue" aria-hidden>
          <Skyline className="h-[26px] w-full" />
        </div>

        {/* Feature row */}
        <div className="flex items-stretch border-t border-navy/10 pt-2.5">
          {PACKAGE_FEATURES.map(({ Icon, label }, i) => (
            <div
              key={label}
              className={`flex flex-1 flex-col items-center gap-0.5 ${i > 0 ? "border-l border-navy/10" : ""}`}
            >
              <Icon size={16} className="text-gold" aria-hidden />
              <span className="text-[10.5px] font-medium text-navy/75">{label}</span>
            </div>
          ))}
        </div>

        {/* Price + View all details */}
        <div className="mt-3 flex items-center justify-between border-t border-navy/10 pt-3">
          <div className="font-serif text-[22px] font-bold leading-none text-navy">
            {pkg.price}
            <span className="ml-1 font-sans text-[12px] font-medium text-navy/50">/pp</span>
          </div>
          <Link
            href={pkg.href}
            className="inline-flex items-center gap-1.5 text-[13px] font-bold text-navy transition-colors hover:text-gold"
          >
            View all details
            <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
