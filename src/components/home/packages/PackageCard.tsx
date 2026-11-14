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
 * Landscape package card (square corners): image + details on top, title, and a
 * feature row sitting over a skyline silhouette. Brand navy/gold theme.
 */
export function PackageCard({ pkg }: { pkg: TPackageCard }) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_26px_54px_-30px_rgba(26,62,110,0.45)] ring-1 ring-navy/10">
      <Corners />

      <div className="relative z-10 flex flex-1 flex-col p-3.5 pb-2.5 dt:p-4 dt:pb-3">
        {/* Top: image + details */}
        <div className="flex gap-3.5">
          <Link
            href={pkg.href}
            aria-label={pkg.title}
            className="relative h-[100px] w-[100px] flex-none overflow-hidden rounded-xl bg-lightblue dt:h-[108px] dt:w-[108px]"
          >
            <Image src={pkg.image} alt={pkg.title} fill sizes="128px" className="object-cover" />
          </Link>

          <div className="min-w-0 flex-1">
            <Link
              href={pkg.href}
              className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-navy transition-colors hover:text-gold"
            >
              View all details
              <ArrowRight size={14} aria-hidden />
            </Link>

            <ul className="mt-2 flex flex-col gap-1">
              {pkg.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-[12.5px] text-navy/80">
                  <span className="h-2.5 w-2.5 flex-none rounded-full border-2 border-gold" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-2 font-serif text-[19px] font-bold leading-none text-navy dt:text-[21px]">
              {pkg.price}
              <span className="ml-1 font-sans text-[11.5px] font-medium text-navy/50">/pp</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-2.5 font-serif text-[15px] font-bold leading-none text-navy dt:text-[16px]">
          {pkg.title}
        </h3>

        {/* Skyline band — sits just above the divider line above the icons */}
        <div className="pt-1 text-lightblue" aria-hidden>
          <Skyline className="h-[24px] w-full" />
        </div>

        {/* Feature row */}
        <div className="flex items-stretch border-t border-navy/10 pt-2">
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
      </div>
    </article>
  );
}
