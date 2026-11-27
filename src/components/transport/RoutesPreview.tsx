import { Plane, MapPin, Navigation } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Button } from "@/components/ui/Button";

const ROUTES = [
  { from: "Jeddah Airport", to: "Makkah Hotel" },
  { from: "Makkah", to: "Madinah" },
  { from: "Madinah", to: "Jeddah Airport" },
  { from: "Makkah", to: "Taif" },
  { from: "Jeddah", to: "Madinah" },
  { from: "Madinah", to: "AlUla" },
];

function Pin({ label }: { label: string }) {
  const Icon = label.toLowerCase().includes("airport") ? Plane : MapPin;
  return <Icon size={15} className="text-gold" aria-hidden />;
}

/**
 * Popular transfer routes preview with a link to the full Routes page.
 * Distinct "route line" treatment — two endpoints joined by a dashed path.
 */
export function RoutesPreview({ routesHref = "/umrah-transport/routes/" }: { routesHref?: string }) {
  return (
    <Section bg="navy" className="relative overflow-hidden py-12 dt:py-16">
      <div aria-hidden className="pointer-events-none absolute left-1/2 -top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.14),transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute -right-28 -bottom-24 hidden h-[360px] w-[360px] rounded-full border border-white/[0.06] dt:block" />
      <Container className="relative">
        <div className="mb-9 flex flex-col items-center gap-5 text-center dt:mb-12 dt:flex-row dt:items-end dt:justify-between dt:text-left">
          <div>
            <Eyebrow align="center" tone="white" className="mb-4 dt:justify-start">Where we drive</Eyebrow>
            <AccentHeading as="h2" before="Popular Transfer " accent="Routes" className="text-[27px] leading-tight text-white dt:text-[38px]" />
            <p className="mx-auto mt-4 max-w-[520px] text-[15px] font-light leading-relaxed text-white/70 dt:mx-0 dt:text-[16px]">
              Airport pickups, city-to-city transfers and scenic day trips — private, on your schedule.
            </p>
          </div>
          <Button href={routesHref} variant="gold" size="md" className="flex-none uppercase tracking-[0.06em]">
            View All Routes
            <Navigation size={16} aria-hidden />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-3.5 dt:grid-cols-2 dt:gap-4">
          {ROUTES.map((r) => (
            <div
              key={r.from + r.to}
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.08] to-white/[0.02] px-5 py-4 transition-all duration-300 hover:border-gold/50"
            >
              <span className="flex items-center gap-2 text-[14px] font-semibold text-white">
                <Pin label={r.from} /> {r.from}
              </span>
              <span aria-hidden className="relative mx-1 h-px flex-1 border-t border-dashed border-gold/40">
                <span className="absolute right-[-5px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 border-r border-t border-gold" />
              </span>
              <span className="flex items-center gap-2 text-[14px] font-semibold text-white">
                <Pin label={r.to} /> {r.to}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
