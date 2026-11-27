import Image from "next/image";
import { Clock } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TOUR_SLOTS } from "@/data/transport/routesData";

/** Glorified sightseeing section: circular image gallery + numbered itinerary. */
export function SightseeingTour({
  bg = "white",
  eyebrow = "Guided day tour",
  headBefore,
  headAccent,
  gallery,
  stops,
  note,
}: {
  bg?: "ice" | "white";
  eyebrow?: string;
  headBefore: string;
  headAccent: string;
  gallery: { src: string; label: string }[];
  stops: { name: string; time: string }[];
  note: string;
}) {
  return (
    <Section bg={bg} className="relative overflow-hidden py-12 dt:py-16">
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-16 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.1),transparent_70%)] blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(47,128,237,0.08),transparent_70%)] blur-2xl" />
      <Container className="relative">
        <div className="mx-auto mb-8 max-w-[760px] text-center dt:mb-10">
          <Eyebrow align="center" className="mb-4">{eyebrow}</Eyebrow>
          <AccentHeading as="h2" before={headBefore} accent={headAccent} className="text-[27px] leading-tight text-navy dt:text-[38px]" />
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-gold">Time slots</span>
            {TOUR_SLOTS.map((s) => (
              <span key={s} className="rounded-full border border-navy/15 bg-white px-3 py-1 text-[12.5px] font-semibold text-navy">{s}</span>
            ))}
          </div>
        </div>

        {/* Circular image gallery */}
        <Stagger as="div" gap={0.1} className="no-scrollbar -mx-5 mb-10 flex gap-5 overflow-x-auto px-5 pb-2 dt:mx-0 dt:grid dt:grid-cols-5 dt:gap-6 dt:overflow-visible dt:px-0">
          {gallery.map((g) => (
            <StaggerItem as="div" key={g.label} direction="up" className="w-[130px] flex-none text-center dt:w-auto">
              <div className="group relative mx-auto aspect-square w-[130px] overflow-hidden rounded-full ring-4 ring-white shadow-[0_22px_44px_-22px_rgba(26,62,110,0.55)] dt:w-full">
                <Image src={g.src} alt={g.label} fill sizes="150px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div aria-hidden className="absolute inset-0 rounded-full ring-1 ring-inset ring-navy/10" />
              </div>
              <div className="mt-3 text-[13px] font-semibold text-navy">{g.label}</div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Itinerary timeline */}
        <ol className="grid grid-cols-1 gap-2.5 dt:grid-cols-2 dt:gap-x-6 dt:gap-y-2.5">
          {stops.map((s, i) => (
            <li key={s.name} className="flex items-center gap-3.5 rounded-xl border border-navy/10 bg-white/70 px-4 py-3 transition-colors hover:border-gold/40">
              <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-gradient-to-br from-gold to-[#b4871a] text-[13px] font-bold text-navy">{i + 1}</span>
              <span className="flex-1 text-[14px] font-medium text-navy">{s.name}</span>
              <span className={`flex flex-none items-center gap-1.5 rounded-full px-2.5 py-1 text-[11.5px] font-semibold ${s.time === "Pass by" ? "bg-navy/5 text-navy/55" : "bg-lightblue text-navy"}`}>
                <Clock size={12} aria-hidden /> {s.time}
              </span>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-8 max-w-[640px] text-center text-[13px] font-light leading-relaxed text-navy/60">{note}</p>
      </Container>
    </Section>
  );
}
