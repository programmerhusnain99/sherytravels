import Image from "next/image";
import { Plane, Building2, Clock, Users, Briefcase, MapPin, Route } from "lucide-react";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { FormSection } from "@/components/home/form/FormSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { HeroEnquiryForm } from "@/components/home/hero/HeroEnquiryForm";
import { HERO_DESCRIPTION } from "@/components/sections/heroCopy";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import {
  SERVICES,
  ROUND_TRIPS,
  INTERCITY,
  LOCAL,
  ZIYARAT,
  MAKKAH_TOUR,
  MADINAH_TOUR,
  TOUR_SLOTS,
  VEHICLES,
  ADDITIONAL,
} from "@/data/transport/routesData";
import { RouteFareTable } from "./RouteFareTable";

const PATH = "/umrah-transport/routes/";

const FAQ = [
  { q: "How are your route prices calculated?", a: "All fares are quoted per vehicle (not per seat) in Saudi Riyals and include tolls, taxes and fees unless stated otherwise. You simply choose the vehicle that suits your group size and luggage." },
  { q: "How do I book and pay?", a: "You can book through our website, a direct call, or on WhatsApp. A 25% deposit is required to confirm airport pickups; the balance is settled as agreed at booking." },
  { q: "Can I customize a round-trip package?", a: "Yes. Any round trip can include Ziyarat tours, extra hotel transfers, shopping visits and sightseeing stops. Tell us your itinerary and we will arrange it end to end." },
  { q: "Do you provide transport for large groups?", a: "Absolutely — from sedans and family vans to the Toyota Hiace, Coaster and a 50-seat King Long bus. Vehicle choice depends on passenger numbers, luggage and the route." },
  { q: "Are your drivers professional?", a: "Our drivers are experienced, wear uniforms and speak multiple languages. They know the routes across Makkah, Madinah, Jeddah and beyond for timely, comfortable transfers." },
  { q: "Can I cancel my booking?", a: "Yes. To cancel, please contact us in writing through WhatsApp and our team will assist you with the next steps." },
];

function StopIcon({ label }: { label: string }) {
  const Icon = label.toLowerCase().includes("airport") ? Plane : Building2;
  return <Icon size={16} className="text-navy" aria-hidden />;
}

export function RoutesContent({
  breadcrumb,
  active = "/umrah-transport/",
}: {
  breadcrumb: { name: string; path: string }[];
  active?: string;
}) {
  return (
    <PageShell active={active} cta={false}>
      <JsonLd data={breadcrumbSchema(breadcrumb)} />

      {/* Hero */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-10 pb-14 dt:pt-12 dt:pb-16">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 hidden h-[460px] w-[460px] rounded-full border border-gold/15 dt:block" />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <div className="order-1 max-w-[680px]">
            <AccentHeading as="h1" before="Private Transport Routes Across " accent="Saudi Arabia" className="text-[30px] leading-[1.16] text-navy dt:text-[46px]" />
          </div>
          <div className="order-3 max-w-[680px]">
            <p className="text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">{HERO_DESCRIPTION}</p>
          </div>
          <div className="relative order-2 flex justify-center">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[330px] w-[290px] overflow-hidden rounded-t-[145px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[420px] dt:w-[380px] dt:rounded-t-[190px]">
              <Image src="/images/transportation/transport-hero.webp" alt="Transport routes across the holy cities" fill sizes="(max-width:900px) 290px, 380px" priority className="object-cover" />
            </div>
          </div>
          <div className="order-4 w-full"><HeroEnquiryForm /></div>
        </Container>
      </Section>

      {/* Services overview */}
      <Section bg="ice" className="py-12 dt:py-16">
        <Container>
          <div className="mx-auto mb-9 max-w-[760px] text-center dt:mb-12">
            <Eyebrow align="center" className="mb-4">What we offer</Eyebrow>
            <AccentHeading as="h2" before="Every Route, One Trusted " accent="Partner" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            <p className="mx-auto mt-4 max-w-[600px] text-[15px] font-light leading-relaxed text-navy/70 dt:text-[16px]">
              Airport pickups, intercity journeys, local transfers and guided Ziyarat — all with private vehicles and professional drivers.
            </p>
          </div>
          <Stagger as="div" gap={0.06} className="grid grid-cols-2 gap-3.5 dt:grid-cols-4 dt:gap-4">
            {SERVICES.map(({ Icon, title, body }) => (
              <StaggerItem as="div" key={title} direction="up" className="group rounded-2xl border border-navy/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_22px_44px_-28px_rgba(26,62,110,0.5)]">
                <span className="mb-3.5 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold to-[#b4871a] text-navy shadow-[0_10px_22px_-10px_rgba(219,183,37,0.65)]">
                  <Icon size={20} aria-hidden />
                </span>
                <h3 className="mb-1.5 font-serif text-[15.5px] font-bold leading-tight text-navy">{title}</h3>
                <p className="text-[12.5px] font-light leading-relaxed text-navy/65">{body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Round-trip packages */}
      <Section bg="white" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ice via-white to-ice" />
        <div aria-hidden className="pointer-events-none absolute -left-28 -top-20 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.1),transparent_70%)] blur-2xl" />
        <Container className="relative">
          <div className="mx-auto mb-10 max-w-[760px] text-center dt:mb-12">
            <Eyebrow align="center" className="mb-4">Complete Umrah transport</Eyebrow>
            <AccentHeading as="h2" before="Round-Trip " accent="Packages" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            <p className="mx-auto mt-4 max-w-[620px] text-[15px] font-light leading-relaxed text-navy/70 dt:text-[16px]">
              Arrival-to-departure transport, arranged end to end. Prices shown are from our Sedan; every package is available in any vehicle.
            </p>
          </div>
          <div className="grid gap-6 dt:grid-cols-3 dt:gap-6">
            {ROUND_TRIPS.map((rt) => (
              <div key={rt.title} className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white/80 p-6 shadow-[0_24px_50px_-32px_rgba(26,62,110,0.5)] backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50">
                <span className="inline-flex w-fit items-center rounded-full bg-lightblue px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-navy">{rt.tag}</span>
                <h3 className="mt-3 font-serif text-[18px] font-bold leading-snug text-navy">{rt.title}</h3>
                <ol className="mt-5 flex-1 space-y-0">
                  {rt.stops.map((s, i) => (
                    <li key={s + i} className="relative flex items-center gap-3 pb-5 last:pb-0">
                      {i < rt.stops.length - 1 && <span aria-hidden className="absolute left-[17px] top-9 h-[calc(100%-18px)] w-px bg-gold/30" />}
                      <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-ice ring-1 ring-navy/10"><StopIcon label={s} /></span>
                      <span className="text-[13.5px] font-medium text-navy/85">{s}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-5 border-t border-navy/10 pt-4">
                  <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-navy/50">From</span>
                  <div className="font-serif text-[26px] font-bold leading-none text-navy">
                    {rt.prices[0]}
                    <span className="ml-1.5 font-sans text-[13px] font-medium text-navy/55">SAR</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Route fare table — interactive, navy */}
      <Section bg="navy" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute left-1/2 -top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.14),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -right-28 bottom-0 hidden h-[360px] w-[360px] rounded-full border border-white/[0.06] dt:block" />
        <Container className="relative">
          <div className="mx-auto mb-9 max-w-[760px] text-center dt:mb-11">
            <Eyebrow align="center" tone="white" className="mb-4">Transparent pricing</Eyebrow>
            <AccentHeading as="h2" before="Route Fares by " accent="Vehicle" className="text-[27px] leading-tight text-white dt:text-[38px]" />
            <p className="mx-auto mt-4 max-w-[560px] text-[15px] font-light leading-relaxed text-white/70 dt:text-[16px]">
              Pick a vehicle to see live one-way fares for every popular route.
            </p>
          </div>
          <RouteFareTable />
        </Container>
      </Section>

      {/* Intercity routes */}
      <Section bg="ice" className="py-12 dt:py-16">
        <Container>
          <div className="mx-auto mb-9 max-w-[760px] text-center dt:mb-12">
            <Eyebrow align="center" className="mb-4">City to city</Eyebrow>
            <AccentHeading as="h2" before="Intercity " accent="Routes" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
          </div>
          <div className="grid gap-5 dt:grid-cols-2 dt:gap-6">
            {INTERCITY.map((group) => (
              <div key={group.city} className="rounded-2xl border border-navy/10 bg-white p-6">
                <h3 className="mb-4 flex items-center gap-2 font-serif text-[17px] font-bold text-navy">
                  <Route className="text-gold" /> {group.city}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.routes.map((r) => (
                    <li key={r} className="rounded-full border border-navy/10 bg-ice px-3.5 py-1.5 text-[13px] font-medium text-navy/85">{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Local city transport */}
      <Section bg="white" className="py-12 dt:py-16">
        <Container>
          <div className="mx-auto mb-9 max-w-[760px] text-center dt:mb-12">
            <Eyebrow align="center" className="mb-4">Around the holy cities</Eyebrow>
            <AccentHeading as="h2" before="Local City " accent="Transport" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
          </div>
          <div className="grid gap-5 dt:grid-cols-2 dt:gap-6">
            {LOCAL.map((group) => (
              <div key={group.city} className="rounded-2xl border border-navy/10 bg-ice p-6 dt:p-7">
                <h3 className="mb-5 font-serif text-[18px] font-bold text-navy">{group.city}</h3>
                <ul className="grid grid-cols-1 gap-x-6 gap-y-3">
                  {group.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-[13.5px] text-navy/80">
                      <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-white text-gold ring-1 ring-navy/10"><MapPin size={14} /></span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Ziyarat tours */}
      <Section bg="navy" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute left-1/2 -top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.13),transparent_70%)]" />
        <Container className="relative">
          <div className="mx-auto mb-9 max-w-[760px] text-center dt:mb-12">
            <Eyebrow align="center" tone="white" className="mb-4">Sacred landmarks</Eyebrow>
            <AccentHeading as="h2" before="Private Ziyarat " accent="Tours" className="text-[27px] leading-tight text-white dt:text-[38px]" />
            <p className="mx-auto mt-4 max-w-[580px] text-[15px] font-light leading-relaxed text-white/70 dt:text-[16px]">
              Guided visits to the historic Islamic sites of Makkah and Madinah — plus day trips to Badr and Taif.
            </p>
          </div>
          <div className="grid gap-5 dt:grid-cols-2 dt:gap-6">
            {ZIYARAT.map((group) => (
              <div key={group.city} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 dt:p-7">
                <h3 className="mb-5 font-serif text-[18px] font-bold text-white">{group.city}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.sites.map((s) => (
                    <li key={s} className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-[12.5px] font-medium text-white/90">
                      <MapPin size={13} className="flex-none text-gold" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Makkah sightseeing itinerary */}
      <Section bg="ice" className="py-12 dt:py-16">
        <Container>
          <div className="mx-auto mb-9 max-w-[760px] text-center dt:mb-11">
            <Eyebrow align="center" className="mb-4">Guided day tour</Eyebrow>
            <AccentHeading as="h2" before="Makkah Sightseeing " accent="Route" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            <SlotRow />
          </div>
          <TourTimeline stops={MAKKAH_TOUR} />
          <p className="mx-auto mt-8 max-w-[640px] text-center text-[13px] font-light leading-relaxed text-navy/60">
            Be ready in your hotel lobby 10 minutes before the tour; your driver meets you there. Please arrive on time — delays may result in cancellation.
          </p>
        </Container>
      </Section>

      {/* Madinah sightseeing itinerary */}
      <Section bg="white" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-16 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(47,128,237,0.08),transparent_70%)] blur-2xl" />
        <Container className="relative">
          <div className="mx-auto mb-9 max-w-[760px] text-center dt:mb-11">
            <Eyebrow align="center" className="mb-4">Guided day tour</Eyebrow>
            <AccentHeading as="h2" before="Madinah Sightseeing " accent="Route" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            <SlotRow />
          </div>
          <TourTimeline stops={MADINAH_TOUR} />
          <p className="mx-auto mt-8 max-w-[640px] text-center text-[13px] font-light leading-relaxed text-navy/60">
            A 2 to 2.5-hour tour with limited time at Masjid e Qiblatain — please make wudu beforehand. Be in your hotel lobby 10 minutes early.
          </p>
        </Container>
      </Section>

      {/* Fleet */}
      <Section bg="navy" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute left-1/2 -top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.13),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -left-28 -bottom-28 hidden h-[380px] w-[380px] rounded-full border border-white/[0.06] dt:block" />
        <Container className="relative">
          <div className="mx-auto mb-9 max-w-[760px] text-center dt:mb-12">
            <Eyebrow align="center" tone="white" className="mb-4">Choose your ride</Eyebrow>
            <AccentHeading as="h2" before="Our Transport " accent="Fleet" className="text-[27px] leading-tight text-white dt:text-[38px]" />
          </div>
          <div className="grid grid-cols-2 gap-3.5 dt:grid-cols-3 dt:gap-5">
            {VEHICLES.map((veh) => (
              <div key={veh.key} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50">
                <h3 className="font-serif text-[16px] font-bold leading-tight text-white dt:text-[18px]">{veh.name}</h3>
                <p className="mt-0.5 text-[12px] text-white/55">{veh.sub}</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[12.5px] text-white/80">
                  <span className="flex items-center gap-1.5"><Users size={14} className="text-gold" /> {veh.persons}</span>
                  <span className="flex items-center gap-1.5"><Briefcase size={14} className="text-gold" /> {veh.luggage}</span>
                </div>
                <div className="mt-4 border-t border-white/10 pt-3">
                  <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-white/45">Round trip from</span>
                  <div className="font-serif text-[20px] font-bold leading-none text-gold">
                    {veh.roundTrips[0]}
                    <span className="ml-1 font-sans text-[11.5px] font-medium text-white/50">SAR</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Additional services */}
      <Section bg="ice" className="py-12 dt:py-16">
        <Container>
          <div className="mx-auto mb-9 max-w-[760px] text-center dt:mb-12">
            <Eyebrow align="center" className="mb-4">Beyond the drive</Eyebrow>
            <AccentHeading as="h2" before="Extra Comforts on " accent="Request" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
          </div>
          <div className="grid grid-cols-2 gap-3 dt:grid-cols-4 dt:gap-3.5">
            {ADDITIONAL.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl border border-navy/10 bg-white px-4 py-3.5">
                <span className="grid h-9 w-9 flex-none place-items-center rounded-lg bg-lightblue text-navy"><Icon size={17} aria-hidden /></span>
                <span className="text-[12.5px] font-medium leading-tight text-navy/80">{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Form */}
      <FormSection
        eyebrow="Get in touch with us"
        headingBefore="Plan Your "
        headingAccent="Route"
        description="Tell us your pickup, destination, dates and group size — a travel expert replies within 24 hours with the right vehicle and a clear fare."
      />

      {/* FAQ */}
      <FaqAccordion items={FAQ} />
    </PageShell>
  );
}

/** Time-slot pills shared by both sightseeing itineraries. */
function SlotRow() {
  return (
    <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
      <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-gold">Time slots</span>
      {TOUR_SLOTS.map((s) => (
        <span key={s} className="rounded-full border border-navy/15 bg-white px-3 py-1 text-[12.5px] font-semibold text-navy">{s}</span>
      ))}
    </div>
  );
}

/** Numbered itinerary timeline, two columns on desktop. */
function TourTimeline({ stops }: { stops: { name: string; time: string }[] }) {
  return (
    <ol className="grid grid-cols-1 gap-2.5 dt:grid-cols-2 dt:gap-x-6 dt:gap-y-2.5">
      {stops.map((s, i) => (
        <li key={s.name} className="flex items-center gap-3.5 rounded-xl border border-navy/10 bg-white/70 px-4 py-3">
          <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-gradient-to-br from-gold to-[#b4871a] text-[13px] font-bold text-navy">{i + 1}</span>
          <span className="flex-1 text-[14px] font-medium text-navy">{s.name}</span>
          <span className={`flex flex-none items-center gap-1.5 rounded-full px-2.5 py-1 text-[11.5px] font-semibold ${s.time === "Pass by" ? "bg-navy/5 text-navy/55" : "bg-lightblue text-navy"}`}>
            <Clock size={12} aria-hidden /> {s.time}
          </span>
        </li>
      ))}
    </ol>
  );
}
