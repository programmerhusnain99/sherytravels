import Image from "next/image";
import { Users, Briefcase, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Button } from "@/components/ui/Button";

const PREVIEW = [
  { name: "Sedan — Camry / Sonata", persons: "4 Persons", luggage: "2 Luggage", src: "/images/transportation/fleet-sedan.webp" },
  { name: "Family Van — Starex / Staria", persons: "7 Persons", luggage: "7 Luggage", src: "/images/transportation/fleet-h1.webp" },
  { name: "Luxury SUV — GMC Yukon", persons: "7 Persons", luggage: "7 Luggage", src: "/images/transportation/fleet-yukon.webp" },
];

/**
 * Compact fleet preview — three representative vehicles with a link to the full
 * vehicles page. No pricing. Reused on Transport, Routes and Ziyarat. Adapts its
 * card styling to a light or dark (`navy`) section background.
 */
export function FleetPreview({
  bg = "white",
  vehiclesHref = "/umrah-transport/vehicles/",
}: {
  bg?: "white" | "ice" | "navy";
  vehiclesHref?: string;
}) {
  const dark = bg === "navy";

  return (
    <Section bg={bg} className="relative overflow-hidden py-12 dt:py-16">
      {dark && (
        <div aria-hidden className="pointer-events-none absolute left-1/2 -top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.13),transparent_70%)]" />
      )}
      <Container className="relative">
        <div className="mb-9 flex flex-col items-center gap-5 text-center dt:mb-12 dt:flex-row dt:items-end dt:justify-between dt:text-left">
          <div>
            <Eyebrow align="center" tone={dark ? "white" : undefined} className="mb-4 dt:justify-start">Our fleet</Eyebrow>
            <AccentHeading as="h2" before="Travel in Comfort: Choose Your " accent="Ride" className={`text-[27px] leading-tight dt:text-[38px] ${dark ? "text-white" : "text-navy"}`} />
          </div>
          <Button href={vehiclesHref} variant={dark ? "gold" : "navy"} size="md" className="flex-none uppercase tracking-[0.06em]">
            View All Vehicles
            <ArrowRight size={17} aria-hidden />
          </Button>
        </div>

        <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-5 px-5 pb-2 dt:mx-0 dt:grid dt:grid-cols-3 dt:gap-6 dt:overflow-visible dt:p-0">
          {PREVIEW.map((v) => (
            <article
              key={v.name}
              className={`group w-[80vw] max-w-[320px] flex-none snap-start overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 dt:w-auto dt:max-w-none ${
                dark
                  ? "border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:border-gold/50"
                  : "border border-navy/10 bg-white shadow-[0_26px_54px_-30px_rgba(26,62,110,0.4)] hover:border-gold/50"
              }`}
            >
              <div className={`relative h-[185px] w-full overflow-hidden ${dark ? "bg-white/5" : "bg-lightblue"}`}>
                <Image src={v.src} alt={v.name} fill sizes="(max-width:900px) 80vw, 30vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold/0 via-gold/70 to-gold/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <h3 className={`mb-3 font-serif text-[17px] font-bold ${dark ? "text-white" : "text-navy"}`}>{v.name}</h3>
                <div className={`flex flex-wrap gap-4 text-[13px] ${dark ? "text-white/75" : "text-navy/75"}`}>
                  <span className="flex items-center gap-1.5"><Users size={15} className="text-gold" /> {v.persons}</span>
                  <span className="flex items-center gap-1.5"><Briefcase size={15} className="text-gold" /> {v.luggage}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
