import { FileText, Building2, CalendarDays, BusFront } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Reveal } from "@/components/motion/Reveal";
import { AuroraBlobs } from "@/components/motion/AuroraBlobs";
import { Button } from "@/components/ui/Button";
import { ReadMore } from "@/components/ui/ReadMore";
import { UmrahArch } from "./UmrahArch";

const CHECKLIST: { Icon: LucideIcon; label: string }[] = [
  { Icon: FileText, label: "Visa processing" },
  { Icon: Building2, label: "Hotel bookings" },
  { Icon: CalendarDays, label: "Itinerary planning" },
  { Icon: BusFront, label: "Ziyarat and transport" },
];

const SERVICES: { Icon: LucideIcon; title: string; sub: string; border: string }[] = [
  { Icon: FileText, title: "Visa processing", sub: "Handled start to approval", border: "border-r border-b dt:border-b-0" },
  { Icon: Building2, title: "Hotel bookings", sub: "Close to the Haram", border: "border-b dt:border-b-0 dt:border-r" },
  { Icon: CalendarDays, title: "Itinerary planning", sub: "Solo, family or group", border: "border-r" },
  { Icon: BusFront, title: "Ziyarat and transport", sub: "Air-conditioned vehicles", border: "" },
];

/** Homepage Umrah section: navy band with copy + arch cluster, white service bar straddling the band edge. */
export function UmrahSection() {
  return (
    <>
      <Section bg="navy" className="relative overflow-hidden pt-14 pb-24 dt:pt-24 dt:pb-28">
        <AuroraBlobs />
        {/* Decorative gold arch outline rising from the band */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[34px] h-[600px] w-[430px] -translate-x-1/2 rounded-t-[215px] border border-b-0 border-gold/30 dt:top-[54px] dt:h-[1000px] dt:w-[900px] dt:rounded-t-[450px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-52 -right-28 hidden h-[420px] w-[420px] rounded-full bg-white/[0.04] dt:block"
        />

        <Container className="relative">
          <div className="grid items-center gap-10 dt:grid-cols-[1fr_1.02fr] dt:gap-[76px]">
            {/* Copy column — on mobile, heading/eyebrow render first, arch is injected after */}
            <div className="flex flex-col">
              <Reveal as="div">
                <Eyebrow align="left" tone="white">
                  The serenity of Umrah
                </Eyebrow>
                <AccentHeading
                  as="h2"
                  before="Our "
                  accent="Umrah"
                  after=" Services"
                  className="mt-6 text-[32px] leading-[1.14] text-white dt:text-[50px]"
                />
              </Reveal>

              {/* Arch cluster — appears directly under the heading on mobile */}
              <div className="order-first mt-8 dt:hidden">
                <UmrahArch />
              </div>

              <ReadMore
                id="rm-umrah"
                className="mt-6 max-w-[520px]"
                leadClassName="text-[16.5px] font-light leading-[1.72] text-white/90 text-pretty dt:text-[17.5px]"
                lead={
                  <>
                    The Serenity of Umrah is undeniable. So, if you are planning your first ever
                    Umrah with hard-earned money, you are at the right place. Shery Travels is here to
                    assist Muslims who choose to travel with us, in all capacities making processes,
                    making necessary bookings and planning itineraries on your behalf.
                  </>
                }
              >
                <p className="mt-5 text-[16.5px] font-light leading-[1.72] text-white/90 text-pretty dt:text-[17.5px]">
                  Whether you choose to travel solo, with family, or in a group, our team will help
                  you choose from the best Umrah packages and ensure convenience throughout the
                  process.
                </p>
              </ReadMore>

              {/* Checklist — desktop only */}
              <div className="mb-8 mt-8 hidden max-w-[520px] grid-cols-2 gap-x-7 gap-y-3.5 border-y border-white/20 py-6 dt:grid">
                {CHECKLIST.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon size={19} className="flex-none text-gold" />
                    <span className="text-[15px] font-medium text-white">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 dt:mt-0">
                <Button
                  href="/umrah/"
                  variant="gold"
                  size="lg"
                  className="w-full uppercase tracking-[0.07em] dt:w-auto"
                >
                  Umrah begins here
                </Button>
              </div>
            </div>

            {/* Arch cluster — desktop column */}
            <div className="hidden dt:block">
              <UmrahArch />
            </div>
          </div>
        </Container>
      </Section>

      {/* White 4-up service bar straddling the band edge */}
      <div className="bg-white pb-4 dt:pb-6">
        <Container>
          <div className="relative z-10 -mt-12 grid grid-cols-2 rounded-[18px] border border-navy/[0.08] bg-white shadow-[0_28px_56px_-28px_rgba(26,62,110,0.44)] dt:-mt-16 dt:grid-cols-4">
            {SERVICES.map(({ Icon, title, sub, border }) => (
              <div
                key={title}
                className={`flex flex-col items-center gap-3 border-navy/10 p-6 text-center dt:flex-row dt:items-center dt:gap-4 dt:p-8 dt:text-left ${border}`}
              >
                <span className="grid h-[46px] w-[46px] flex-none place-items-center rounded-full border-[1.5px] border-gold bg-ice dt:h-[52px] dt:w-[52px]">
                  <Icon size={22} className="text-navy" />
                </span>
                <div>
                  <div className="font-serif text-[15.5px] font-bold leading-tight text-navy dt:text-[17px]">
                    {title}
                  </div>
                  <div className="mt-1 hidden text-[13.5px] text-navy/80 dt:block">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
