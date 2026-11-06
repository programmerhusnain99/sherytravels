import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Wallet, ShieldCheck, Snowflake } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Button } from "@/components/ui/Button";

const FEATURES = [
  { Icon: Clock, label: "24/7 availability" },
  { Icon: Wallet, label: "Transparent pricing" },
  { Icon: ShieldCheck, label: "Licensed drivers" },
  { Icon: Snowflake, label: "Air-conditioned fleet" },
];

const STOPS = [
  { title: "Jeddah Airport", sub: "Airport pickup to your hotel or the Haram", src: "/images/home/home-transport-jeddah.webp", align: "dt:self-start" },
  { title: "Makkah", sub: "Transfers, ziyarat and inter-city routes", src: "/images/home/home-transport-makkah.webp", align: "dt:self-center" },
  { title: "Madinah", sub: "Hotel transfers and local ziyarat", src: "/images/home/home-transport-madinah.webp", align: "dt:self-end" },
];

const FLEET = [
  { alt: "Sedan / Camry", src: "/images/home/home-fleet-sedan.webp" },
  { alt: "Hyundai H1 / Hiace", src: "/images/home/home-fleet-h1.webp" },
  { alt: "GMC Yukon", src: "/images/home/home-fleet-yukon.webp" },
  { alt: "Minibus / Coaster", src: "/images/home/home-fleet-coaster.webp" },
  { alt: "Large Bus", src: "/images/home/home-fleet-bus.webp" },
];

const ZIARAT = "/transportation/ziarat/";
const FLEETS = "/transportation/fleets/";

/**
 * Section 5 — Transportation.
 * Server component (no JS). Copy + a route map (3 city stops on a static dashed
 * gold SVG curve on desktop / vertical dashed line on mobile), then a full-bleed
 * navy fleet strip with a mobile scroll-snap deck.
 */
export function TransportSection() {
  return (
    <Section bg="white" className="pt-12 dt:pt-20">
      <Container>
        <div className="grid gap-10 dt:grid-cols-[1fr_1.1fr] dt:items-center dt:gap-[72px]">
          {/* Copy */}
          <div>
            <Eyebrow align="left" tone="navy">
              Transportation
            </Eyebrow>
            <AccentHeading
              as="h2"
              before="Smooth travel across the "
              accent="Holy Cities"
              className="mt-4 text-[30px] leading-[1.22] dt:text-[42px] dt:leading-[1.16]"
            />
            <p className="mt-4 max-w-[500px] text-[16px] font-light leading-[1.7] text-navy/80 dt:text-[17px] dt:leading-[1.72]">
              Air-conditioned vehicles, experienced drivers, and 24/7 availability — from Jeddah
              Airport to the Haram and between Makkah and Madinah. Private cars, shared buses, or
              full coaches.
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3 dt:mt-8">
              {FEATURES.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5">
                  <Icon size={20} className="flex-none text-gold" aria-hidden />
                  <span className="text-[13.5px] font-medium text-navy dt:text-[14.5px]">{label}</span>
                </li>
              ))}
            </ul>

            <Button
              href="/transportation/"
              variant="navy"
              size="lg"
              className="mt-8 uppercase tracking-[0.06em]"
            >
              Explore Transportation
              <ArrowRight size={18} aria-hidden />
            </Button>
          </div>

          {/* Route map card */}
          <div className="relative rounded-3xl border border-navy/10 bg-ice p-7 dt:p-10">
            {/* Desktop: static dashed gold S-curve behind the stops */}
            <svg
              viewBox="0 0 520 320"
              fill="none"
              aria-hidden
              className="pointer-events-none absolute inset-7 hidden h-[calc(100%-56px)] w-[calc(100%-56px)] text-gold dt:inset-10 dt:block dt:h-[calc(100%-80px)] dt:w-[calc(100%-80px)]"
            >
              <path
                d="M 60 40 C 180 40, 180 160, 260 160 S 340 280, 460 280"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="10 8"
                strokeOpacity="0.5"
                fill="none"
              />
            </svg>

            {/* Mobile: vertical dashed line through the circle column */}
            <div
              aria-hidden
              className="absolute left-[53px] top-[90px] bottom-[90px] border-l-[3px] border-dashed border-gold/50 dt:hidden"
            />

            <div className="relative flex flex-col gap-7 dt:gap-20">
              {STOPS.map((stop) => (
                <Link
                  key={stop.title}
                  href={ZIARAT}
                  className={`flex items-center gap-4 ${stop.align}`}
                >
                  <span className="relative z-[1] h-16 w-16 flex-none overflow-hidden rounded-full border-[2.5px] border-gold bg-lightblue shadow-[0_8px_22px_-8px_rgba(26,62,110,0.5)] dt:h-20 dt:w-20">
                    <Image
                      src={stop.src}
                      alt={stop.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </span>
                  <span>
                    <span className="block font-serif text-[17px] font-bold leading-[1.28] text-navy dt:text-[19px]">
                      {stop.title}
                    </span>
                    <span className="block text-[13.5px] text-navy/80 dt:text-[14px]">{stop.sub}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Full-bleed fleet strip (light ice ground, per design #F2FDFF) */}
      <div className="mt-12 border-t border-navy/10 bg-ice dt:mt-14">
        <Container className="py-7 dt:py-9">
          {/* Mobile header row */}
          <div className="mb-4 flex items-center justify-between dt:hidden">
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
              Our fleet
            </span>
            <Link
              href={FLEETS}
              className="flex items-center gap-1.5 border-b-2 border-gold pb-0.5 text-[13px] font-semibold text-gold"
            >
              View all
              <ArrowRight size={15} aria-hidden />
            </Link>
          </div>

          <div className="flex items-center gap-[22px] dt:gap-[34px]">
            <span className="hidden flex-none whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.16em] text-gold dt:block">
              Our fleet
            </span>
            <span aria-hidden className="hidden h-[52px] w-px flex-none bg-navy/15 dt:block" />

            <ul className="flex flex-1 gap-[10px] overflow-x-auto snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden dt:gap-[22px] dt:overflow-visible">
              {FLEET.map((v) => (
                <li
                  key={v.src}
                  className="h-[90px] w-[140px] flex-none snap-start dt:h-20 dt:w-auto dt:flex-1"
                >
                  <Link
                    href={FLEETS}
                    className="relative block h-full w-full overflow-hidden rounded-xl bg-lightblue"
                    aria-label={`${v.alt} — view all vehicles`}
                  >
                    <Image
                      src={v.src}
                      alt={v.alt}
                      fill
                      sizes="(max-width: 900px) 140px, 15vw"
                      className="object-cover"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={FLEETS}
              className="hidden flex-none items-center gap-2 whitespace-nowrap border-b-2 border-gold pb-[3px] text-[14px] font-semibold text-gold dt:flex"
            >
              View all
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </Container>
      </div>
    </Section>
  );
}
