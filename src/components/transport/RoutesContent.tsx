import Image from "next/image";
import { Plane, Building2, MapPin } from "lucide-react";
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
import { CustomPackageForm } from "@/components/inquiry/CustomPackageForm";
import { FleetPreview } from "./FleetPreview";
import { ROUND_TRIPS, INTERCITY, LOCAL, ADDITIONAL } from "@/data/transport/routesData";

const PATH = "/umrah-transport/routes/";

const FAQ = [
  { q: "How do I get a quote for my route?", a: "Share your pickup, destination, dates and group size through our form or on WhatsApp, and a travel expert replies within 24 hours with the right vehicle for your trip." },
  { q: "How do I book and pay?", a: "You can book through our website, a direct call, or on WhatsApp. Our team confirms your booking and driver details promptly, and arranges payment with you at booking." },
  { q: "Can I customize a round-trip package?", a: "Yes. Any round trip can include Ziyarat tours, extra hotel transfers, shopping visits and sightseeing stops. Tell us your itinerary and we will arrange it end to end." },
  { q: "Do you provide transport for large groups?", a: "Absolutely — from sedans and family vans to the Toyota Hiace, Coaster and a 50-seat King Long bus. Vehicle choice depends on passenger numbers, luggage and the route." },
  { q: "Are your drivers professional?", a: "Our drivers are experienced, wear uniforms and speak multiple languages. They know the routes across Makkah, Madinah, Jeddah and beyond for timely, comfortable transfers." },
  { q: "Can I cancel my booking?", a: "Yes. To cancel, please contact us in writing through WhatsApp and our team will assist you with the next steps." },
];

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

      {/* Round-trip packages — dark, image cards */}
      <Section bg="navy" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute left-1/2 -top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.14),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -right-28 bottom-0 hidden h-[360px] w-[360px] rounded-full border border-white/[0.06] dt:block" />
        <Container className="relative">
          <div className="mx-auto mb-10 max-w-[760px] text-center dt:mb-12">
            <Eyebrow align="center" tone="white" className="mb-4">Complete Umrah transport</Eyebrow>
            <AccentHeading as="h2" before="Round-Trip " accent="Packages" className="text-[27px] leading-tight text-white dt:text-[38px]" />
            <p className="mx-auto mt-4 max-w-[620px] text-[15px] font-light leading-relaxed text-white/70 dt:text-[16px]">
              Arrival-to-departure transport, arranged end to end — available in any vehicle, from a private sedan to a group coach.
            </p>
          </div>
          <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-5 px-5 pb-2 dt:mx-0 dt:grid dt:grid-cols-3 dt:gap-6 dt:overflow-visible dt:p-0">
            {ROUND_TRIPS.map((rt) => (
              <div key={rt.title} className="group flex w-[82vw] max-w-[330px] flex-none snap-start flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 dt:w-auto dt:max-w-none">
                <div className="relative h-[150px] w-full overflow-hidden">
                  <Image src={rt.image} alt={rt.title} fill sizes="(max-width:900px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,62,110,0.1)_0%,rgba(26,62,110,0.85)_100%)]" />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-navy">{rt.tag}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-[18px] font-bold leading-snug text-white">{rt.title}</h3>
                  <ol className="mt-5 flex-1 space-y-0">
                    {rt.stops.map((s, i) => (
                      <li key={s + i} className="relative flex items-center gap-3 pb-5 last:pb-0">
                        {i < rt.stops.length - 1 && <span aria-hidden className="absolute left-[17px] top-9 h-[calc(100%-18px)] w-px bg-gold/30" />}
                        <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-white/10 text-gold ring-1 ring-white/10">
                          {s.toLowerCase().includes("airport") ? <Plane size={15} aria-hidden /> : <Building2 size={15} aria-hidden />}
                        </span>
                        <span className="text-[13.5px] font-medium text-white/85">{s}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-[12.5px] font-semibold text-gold">
                    Private · door to door · any vehicle
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Intercity routes — image-banner cards */}
      <Section bg="ice" className="py-12 dt:py-16">
        <Container>
          <div className="mx-auto mb-9 max-w-[760px] text-center dt:mb-12">
            <Eyebrow align="center" className="mb-4">City to city</Eyebrow>
            <AccentHeading as="h2" before="Intercity " accent="Routes" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            <p className="mx-auto mt-4 max-w-[560px] text-[15px] font-light leading-relaxed text-navy/70 dt:text-[16px]">
              Private travel between Makkah, Madinah, Jeddah and Taif — including scenic historic routes.
            </p>
          </div>
          <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-5 px-5 pb-2 dt:mx-0 dt:grid dt:grid-cols-2 dt:gap-6 dt:overflow-visible dt:p-0">
            {INTERCITY.map((group) => (
              <div key={group.city} className="group w-[82vw] max-w-[360px] flex-none snap-start overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_22px_48px_-32px_rgba(26,62,110,0.4)] dt:w-auto dt:max-w-none">
                <div className="relative h-[130px] w-full overflow-hidden">
                  <Image src={group.image} alt={group.city} fill sizes="(max-width:900px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,62,110,0.15)_0%,rgba(26,62,110,0.82)_100%)]" />
                  <h3 className="absolute bottom-4 left-5 font-serif text-[20px] font-bold text-white">{group.city}</h3>
                </div>
                <ul className="flex flex-wrap gap-2 p-5">
                  {group.routes.map((r) => (
                    <li key={r} className="rounded-full border border-navy/10 bg-ice px-3.5 py-1.5 text-[13px] font-medium text-navy/85">{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Local city transport — split image cards */}
      <Section bg="white" className="py-12 dt:py-16">
        <Container>
          <div className="mx-auto mb-9 max-w-[760px] text-center dt:mb-12">
            <Eyebrow align="center" className="mb-4">Around the holy cities</Eyebrow>
            <AccentHeading as="h2" before="Local City " accent="Transport" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
          </div>
          <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-5 px-5 pb-2 dt:mx-0 dt:grid dt:grid-cols-2 dt:gap-6 dt:overflow-visible dt:p-0">
            {LOCAL.map((group) => (
              <div key={group.city} className="w-[85vw] max-w-[400px] flex-none snap-start overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_24px_52px_-34px_rgba(26,62,110,0.45)] dt:w-auto dt:max-w-none dt:flex">
                <div className="relative h-[190px] w-full overflow-hidden dt:h-auto dt:w-[40%] dt:self-stretch">
                  <Image src={group.image} alt={group.city} fill sizes="(max-width:900px) 100vw, 40vw" className="object-cover" />
                  <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,62,110,0.1)_0%,rgba(26,62,110,0.6)_100%)] dt:bg-[linear-gradient(90deg,rgba(26,62,110,0.1)_0%,rgba(26,62,110,0.55)_100%)]" />
                  <h3 className="absolute bottom-4 left-5 font-serif text-[20px] font-bold text-white dt:top-5 dt:bottom-auto">{group.city}</h3>
                </div>
                <ul className="grid flex-1 grid-cols-1 gap-x-6 gap-y-3 p-6 dt:p-7">
                  {group.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-[13.5px] text-navy/80">
                      <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-lightblue text-navy"><MapPin size={14} /></span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Fleet preview — links to the vehicles page */}
      <FleetPreview bg="navy" />

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

      {/* Customise your ride */}
      <CustomPackageForm
        title="Customise Your Ride"
        accent="Ride"
        description="Build a private transfer that fits your trip — pickup and drop-off, dates and passengers, all arranged around you."
        image="/images/transportation/transport-hero.webp"
        variant="ride"
      />

      {/* Form */}
      <FormSection
        eyebrow="Get in touch with us"
        headingBefore="Plan Your "
        headingAccent="Route"
        description="Tell us your pickup, destination, dates and group size — a travel expert replies within 24 hours with the right vehicle for your journey."
      />

      {/* FAQ */}
      <FaqAccordion items={FAQ} />
    </PageShell>
  );
}
