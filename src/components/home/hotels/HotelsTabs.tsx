"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, ArrowRight } from "lucide-react";

export type Hotel = {
  name: string;
  stars: number;
  image: string;
  nearest: string;
};

type City = "makkah" | "madinah";

const TABS: { id: City; label: string }[] = [
  { id: "makkah", label: "Makkah" },
  { id: "madinah", label: "Madinah" },
];

/**
 * Client child: Makkah/Madinah segmented control that switches the hotel list.
 * Both lists are always rendered (inactive one hidden) so every hotel stays in
 * the server-rendered HTML for SEO. The tab toggle is the only interactivity.
 */
export function HotelsTabs({
  makkah,
  madinah,
}: {
  makkah: Hotel[];
  madinah: Hotel[];
}) {
  const [active, setActive] = useState<City>("makkah");
  const lists: Record<City, Hotel[]> = { makkah, madinah };

  return (
    <div>
      {/* Segmented city tabs */}
      <div
        role="tablist"
        aria-label="Hotel city"
        className="mb-6 mt-7 flex w-full overflow-hidden rounded-xl border-2 border-navy dt:w-fit"
      >
        {TABS.map((t) => {
          const selected = active === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(t.id)}
              className={`flex-1 px-6 py-3 text-[15px] font-semibold transition-colors dt:flex-none dt:px-8 ${
                selected ? "bg-navy text-white" : "bg-white text-navy hover:bg-navy/5"
              }`}
            >
              {t.label} Hotels
            </button>
          );
        })}
      </div>

      {/* City panels — inactive kept in DOM (hidden) for SEO */}
      {TABS.map((t) => {
        const hotels = lists[t.id];
        const hidden = active !== t.id;
        return (
          <div key={t.id} role="tabpanel" hidden={hidden} className={hidden ? "hidden" : ""}>
            {/* Desktop: stacked horizontal cards in a fixed-height scroll window
                (shows ~2–3; the up/down arrows scroll it). */}
            <div
              data-hotel-scroll
              className="no-scrollbar hidden max-h-[420px] flex-col gap-4 overflow-y-auto pr-1 dt:flex"
            >
              {hotels.map((h, i) => (
                <HotelCardDesktop key={h.name} hotel={h} highlighted={i === 0} />
              ))}
            </div>

            {/* Mobile: horizontal scroll-snap cards + dots */}
            <div className="dt:hidden">
              <div className="-mx-5 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-5 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {hotels.map((h, i) => (
                  <HotelCardMobile key={h.name} hotel={h} highlighted={i === 0} />
                ))}
              </div>
              <div className="mt-5 flex justify-center gap-2" aria-hidden>
                {hotels.map((h, i) => (
                  <span
                    key={h.name}
                    className={
                      i === 0
                        ? "h-1.5 w-6 rounded-full bg-navy"
                        : "h-1.5 w-1.5 rounded-full bg-navy/15"
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Stars({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} star hotel`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < count ? "fill-gold text-gold" : "fill-navy/15 text-navy/15"}
        />
      ))}
    </span>
  );
}

function HotelCardDesktop({ hotel, highlighted }: { hotel: Hotel; highlighted: boolean }) {
  return (
    <article
      className={`flex items-stretch overflow-hidden rounded-[18px] bg-white ${
        highlighted
          ? "border-2 border-gold shadow-[0_8px_30px_-10px_rgba(26,62,110,0.12)]"
          : "border border-navy/10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]"
      }`}
    >
      <div className="relative w-[240px] flex-none">
        <Image
          src={hotel.image}
          alt={`${hotel.name} hotel exterior`}
          fill
          sizes="240px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1.5 px-6 py-5">
        <div className="flex items-center gap-2.5">
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] ${
              highlighted ? "bg-navy text-white" : "bg-navy/8 text-navy"
            }`}
          >
            Nearest
          </span>
          <Stars count={hotel.stars} />
        </div>
        <h3 className="font-serif text-[24px] font-bold text-navy">{hotel.name}</h3>
        <p className="flex items-center gap-1.5 text-[14px] text-navy/60">
          <MapPin size={17} className="flex-none text-gold" />
          {hotel.nearest}
        </p>
        <Link
          href="/umrah/usa-packages/"
          className="inline-flex w-fit items-center gap-1 text-[14px] font-medium text-navy underline underline-offset-[3px] hover:text-navy/70"
        >
          View All Details <ArrowRight size={16} />
        </Link>
      </div>
      <div className="flex flex-none flex-col items-end justify-center gap-1 border-l border-navy/10 px-6 py-5 text-right">
        <span className="text-[12px] text-navy/50">{hotel.stars}-Star Hotel</span>
        <span className="text-[13px] font-semibold text-navy/60">Included in package</span>
      </div>
    </article>
  );
}

function HotelCardMobile({ hotel, highlighted }: { hotel: Hotel; highlighted: boolean }) {
  return (
    <article
      className={`w-[300px] flex-none snap-start overflow-hidden rounded-2xl bg-white ${
        highlighted
          ? "border-2 border-gold shadow-[0_6px_24px_-8px_rgba(26,62,110,0.1)]"
          : "border border-navy/10"
      }`}
    >
      <div className="relative h-40">
        <Image
          src={hotel.image}
          alt={`${hotel.name} hotel exterior`}
          fill
          sizes="300px"
          className="object-cover"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] ${
              highlighted ? "bg-navy text-white" : "bg-navy/70 text-white"
            }`}
          >
            Nearest
          </span>
          <span className="rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold text-navy">
            {hotel.stars}★
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-1 flex items-center justify-between gap-2">
          <h3 className="font-serif text-[20px] font-bold text-navy">{hotel.name}</h3>
          <Stars count={hotel.stars} size={13} />
        </div>
        <p className="mb-2.5 flex items-center gap-1 text-[13px] text-navy/55">
          <MapPin size={16} className="flex-none text-gold" />
          {hotel.nearest}
        </p>
        <div className="flex items-center justify-between">
          <Link
            href="/umrah/usa-packages/"
            className="inline-flex items-center gap-1 text-[13px] font-medium text-navy underline underline-offset-[3px] hover:text-navy/70"
          >
            View Details <ArrowRight size={15} />
          </Link>
          <span className="text-[12px] font-semibold text-navy/50">Included in package</span>
        </div>
      </div>
    </article>
  );
}
