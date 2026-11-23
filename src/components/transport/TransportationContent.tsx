import Image from "next/image";
import {
  Users,
  Briefcase,
  MapPin,
  Clock,
  ShieldCheck,
  ReceiptText,
  ArrowRight,
  BusFront,
  MousePointerClick,
  SlidersHorizontal,
  Headset,
} from "lucide-react";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Button } from "@/components/ui/Button";
import { InquireButton } from "@/components/inquiry/InquireButton";
import { FormSection } from "@/components/home/form/FormSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PerfectPackages } from "@/components/home/perfect/PerfectPackages";

const FLEET = [
  { name: "Sedan / Camry / Ford Taurus", seats: "4 pax", bags: "2 – 4 bags", src: "/images/transportation/fleet-sedan.webp" },
  { name: "Hyundai H1 / Toyota Hiace", seats: "7 – 10 pax", bags: "Up to 10 bags", src: "/images/transportation/fleet-h1.webp" },
  { name: "GMC Yukon / Chevy Suburban", seats: "7 pax", bags: "7 bags", src: "/images/transportation/fleet-yukon.webp" },
];

const PILLARS = [
  { Icon: Clock, title: "24/7 Transfers", body: "Round-the-clock reliable Mecca transportation, day or night." },
  { Icon: BusFront, title: "Bus or Private Taxi", body: "Shared Umrah bus or a private taxi — whatever suits you." },
  { Icon: MapPin, title: "Straight to the Haram", body: "Smooth transfers from Jeddah Airport to Masjid al-Haram." },
];

const HOW = [
  { Icon: MapPin, title: "Point-to-Point Transfers", body: "We ensure smooth connections for pilgrims traveling between airports, hotels, and sacred sites — including Ziyarat transfers in Mecca, Medina, and Jeddah with both taxi services and buses." },
  { Icon: Clock, title: "24/7 Flexible Travel", body: "Travel on your schedule — day or night, one-way or round-trip. We recommend booking at least 2 hours in advance to ensure availability." },
  { Icon: ShieldCheck, title: "Licensed & Courteous Drivers", body: "Our drivers are experienced, multilingual, and familiar with all Umrah and Hajj routes. Expect timely service, professionalism and a calm, safe journey." },
  { Icon: ReceiptText, title: "Transparent Fare Structure", body: "You will know the cost before you start your journey — transparent pricing for key routes and economical Umrah bus sharing options." },
];

const EFFORTLESS = [
  { Icon: MousePointerClick, title: "Effortless Booking", body: "Arrange every transfer in a few clicks — online or on WhatsApp." },
  { Icon: SlidersHorizontal, title: "Customized Services", body: "Options tailored to your routes, dates and group size." },
  { Icon: Headset, title: "24/7 Team Support", body: "Our team follows up with confirmation and any details you need." },
];

const BOOK = [
  { title: "Choose Your Ride", body: "Pick your route, vehicle type and date — an Umrah bus or a private taxi." },
  { title: "Book Online or WhatsApp", body: "Fill out our form or WhatsApp us — instant support from our team." },
  { title: "Instant Confirmation", body: "Get prompt confirmation with fare, driver info and your timings." },
  { title: "Relax and Travel", body: "Your driver arrives on time — sit back and focus on your worship." },
];

const FAQ = [
  { q: "How much is the Makkah to Madinah taxi fare?", a: "It varies depending on vehicle type and time, but we provide transparent pricing upfront when you book." },
  { q: "Can I book a taxi from Jeddah to Makkah late at night?", a: "Yes! Our Umrah taxi service operates 24/7 to meet your travel needs." },
  { q: "Do you provide shared options for Jeddah to Madinah bus services?", a: "Yes, shared and private Umrah bus options are available based on your preference and budget." },
  { q: "How do I pay for my trip?", a: "We accept secure online payments at the time of booking for a stress-free experience." },
  { q: "Is the taxi service in Madinah available during peak Umrah season?", a: "Absolutely. We increase availability during busy seasons to accommodate all travelers." },
];

/**
 * Shared Transportation page body. Rendered at both the legacy
 * /transportation/ route and the new /umrah-transport/ route; internal links
 * (fleet + ziarat) are passed in so each route links within its own structure.
 */
export function TransportationContent({
  breadcrumb,
  fleetsHref,
  ziaratHref,
  active = "/umrah-transport/",
}: {
  breadcrumb: { name: string; path: string }[];
  fleetsHref: string;
  ziaratHref: string;
  active?: string;
}) {
  return (
    <PageShell active={active} cta={false}>
      <JsonLd data={breadcrumbSchema(breadcrumb)} />

      {/* Hero */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-10 pb-8 dt:pt-12 dt:pb-10">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 hidden h-[460px] w-[460px] rounded-full border border-gold/15 dt:block" />
        <Container className="flex flex-col items-center gap-6 text-center">
          <div className="order-1 max-w-[680px] text-center">
            <AccentHeading
              as="h1"
              before="Umrah Transportation Services for Smooth Travel Across the "
              accent="Holy Cities"
              className="text-[30px] leading-[1.18] text-navy dt:text-[46px]"
            />
          </div>
          <div className="order-3">
            <InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton>
          </div>
          <div className="relative order-2 flex justify-center">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[330px] w-[290px] overflow-hidden rounded-t-[145px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[420px] dt:w-[380px] dt:rounded-t-[190px]">
              <Image src="/images/transportation/transport-hero.webp" alt="Air-conditioned vehicle for Umrah transfers" fill sizes="(max-width:900px) 290px, 380px" priority className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Reliable Mecca transportation — dark-blue stat band */}
      <Section bg="navy" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute left-1/2 -top-24 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.14),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -right-28 -bottom-24 hidden h-[380px] w-[380px] rounded-full border border-gold/15 dt:block" />
        <Container className="relative">
          <div className="mx-auto max-w-[860px] text-center">
            <Eyebrow align="center" tone="white" className="mb-4">Reliable transfers</Eyebrow>
            <AccentHeading as="h2" before="Reliable Mecca Transportation for Umrah " accent="Pilgrims" className="text-[27px] leading-tight text-white dt:text-[38px]" />
            <p className="mx-auto mt-5 max-w-[720px] text-[15.5px] font-light leading-[1.75] text-white/75 dt:text-[16.5px]">
              Shery Travels offers reliable Mecca transportation for pilgrims from every walk of life — whether you prefer an Umrah taxi, the value of an Umrah bus, or the shared experience of travelling by bus. Modern, air-conditioned vehicles, skilled drivers, and round-the-clock service make your travel easy and stress-free.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-[920px] grid-cols-1 divide-y divide-white/10 dt:mt-12 dt:grid-cols-3 dt:divide-x dt:divide-y-0">
            {PILLARS.map(({ Icon, title, body }) => (
              <div key={title} className="flex flex-col items-center gap-3 px-6 py-7 text-center dt:py-2">
                <span className="grid h-16 w-16 place-items-center rounded-full border-[1.5px] border-gold/50 text-gold">
                  <Icon size={28} />
                </span>
                <h3 className="font-serif text-[18px] font-bold text-white">{title}</h3>
                <p className="max-w-[240px] text-[13.5px] font-light leading-relaxed text-white/65">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Fleet — 3 vehicles + View all Vehicles */}
      <Section bg="white" className="py-10 dt:py-14">
        <Container>
          <div className="mb-10 flex flex-col items-center gap-4 text-center dt:mb-12 dt:flex-row dt:items-end dt:justify-between dt:text-left">
            <div>
              <Eyebrow align="center" className="mb-4 dt:justify-start">Our fleet</Eyebrow>
              <AccentHeading as="h2" before="Travel in Comfort: Choose Your " accent="Ride" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            </div>
            <Button href={fleetsHref} variant="navy" size="md" className="flex-none uppercase tracking-[0.06em]">
              View all Vehicles
              <ArrowRight size={17} aria-hidden />
            </Button>
          </div>
          <div className="grid gap-5 dt:grid-cols-3 dt:gap-6">
            {FLEET.map((v) => (
              <div key={v.name} className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_26px_54px_-30px_rgba(26,62,110,0.4)]">
                <div className="relative h-[180px] w-full flex-none bg-lightblue">
                  <Image src={v.src} alt={v.name} fill sizes="(max-width:900px) 100vw, 30vw" className="object-cover" />
                </div>
                <div className="flex-1 p-5">
                  <h3 className="mb-3 font-serif text-[18px] font-bold text-navy">{v.name}</h3>
                  <div className="flex flex-wrap gap-4 text-[13.5px] text-navy/75">
                    <span className="flex items-center gap-1.5"><Users size={16} className="text-gold" /> {v.seats}</span>
                    <span className="flex items-center gap-1.5"><Briefcase size={16} className="text-gold" /> {v.bags}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Madinah */}
      <Section bg="ice" className="py-10 dt:py-14">
        <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="relative order-2 mx-auto h-[360px] w-full overflow-hidden rounded-2xl bg-lightblue shadow-[0_30px_60px_-26px_rgba(26,62,110,0.45)] dt:order-1 dt:h-[420px]">
            <Image src="/images/transportation/transport-madinah.webp" alt="Transfers near Masjid al-Nabawi in Madinah" fill sizes="(max-width:900px) 100vw, 45vw" className="object-cover" />
          </div>
          <div className="order-1 dt:order-2">
            <Eyebrow align="left" className="mb-4">In Madinah</Eyebrow>
            <AccentHeading as="h2" before="Madinah Umrah Services with Easy Bus " accent="Travel" className="text-[26px] leading-tight text-navy dt:text-[36px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
              When you’re in Madinah, our Umrah services are all about making your journey smooth and enjoyable. We offer convenient airport pickups and comfortable hotel transfers just a short walk from Masjid al-Nabawi. If you’re looking for a friendly and cost-effective way to travel, join us for Umrah by bus with other pilgrims. You can trust that every ride will be timely and safe, allowing you to focus on your prayers and visits while we take care of the transportation.
            </p>
          </div>
        </Container>
      </Section>

      {/* Ziyarat — homepage design + View all Ziyarat */}
      <PerfectPackages
        viewAllHref={ziaratHref}
        description="Dedicated to trustworthy, convenient Ziarat journeys in Makkah and Madinah — skilled chauffeurs and well-maintained vehicles prioritise your safety and comfort, so you can focus on reflection at every sacred site."
      />

      {/* How it works — vertical process timeline */}
      <Section bg="ice" className="py-12 dt:py-16">
        <Container>
          <div className="mx-auto mb-10 max-w-[760px] text-center dt:mb-12">
            <Eyebrow align="center" className="mb-4">How it works</Eyebrow>
            <AccentHeading as="h2" before="How Our Transportation " accent="Works" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            <p className="mx-auto mt-4 max-w-[600px] text-[15.5px] font-light leading-relaxed text-navy/75">
              Four simple promises behind every transfer you book with us.
            </p>
          </div>
          <div className="relative mx-auto max-w-[780px]">
            <div aria-hidden className="absolute left-7 top-4 bottom-4 w-[2px] bg-gradient-to-b from-gold/50 via-navy/15 to-transparent dt:left-8" />
            <div className="flex flex-col gap-6 dt:gap-7">
              {HOW.map(({ Icon, title, body }, i) => (
                <div key={title} className="relative flex gap-5">
                  <span className="relative z-10 grid h-14 w-14 flex-none place-items-center rounded-2xl bg-gradient-to-br from-gold to-[#b4871a] text-navy shadow-[0_16px_32px_-12px_rgba(219,183,37,0.65)] ring-4 ring-ice dt:h-16 dt:w-16">
                    <Icon size={24} />
                  </span>
                  <div className="pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold">Step {i + 1}</span>
                    <h3 className="mt-1 font-serif text-[18px] font-bold text-navy dt:text-[19px]">{title}</h3>
                    <p className="mt-1.5 text-[14px] font-light leading-relaxed text-navy/75">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Effortless planning — dark-blue split with stacked glass bars */}
      <Section bg="navy" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-24 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.14),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -left-24 -bottom-24 hidden h-[360px] w-[360px] rounded-full border border-white/[0.06] dt:block" />
        <Container className="relative grid items-center gap-11 dt:grid-cols-[0.9fr_1.1fr] dt:gap-16">
          <div className="text-center dt:text-left">
            <Eyebrow align="center" tone="white" className="mb-4 dt:justify-start">Plan your trip</Eyebrow>
            <AccentHeading as="h2" before="Effortless Travel Planning: Your Trip, Your " accent="Way" className="text-[26px] leading-tight text-white dt:text-[36px]" />
            <p className="mx-auto mt-5 max-w-[460px] text-[15.5px] font-light leading-[1.7] text-white/75 dt:mx-0 dt:text-[16.5px]">
              Planning your Umrah by bus or car has never been easier. Fill out the form and our team follows up with confirmation and any details you need — so you can focus on your prayers while we handle every transfer.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {EFFORTLESS.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.08] to-white/[0.02] p-5 transition-all duration-300 hover:border-gold/40 hover:translate-x-1"
              >
                <span className="grid h-14 w-14 flex-none place-items-center rounded-xl bg-gradient-to-br from-gold to-[#b4871a] text-navy shadow-[0_12px_26px_-10px_rgba(219,183,37,0.6)]">
                  <Icon size={24} />
                </span>
                <div>
                  <h3 className="font-serif text-[17px] font-bold text-white">{title}</h3>
                  <p className="mt-0.5 text-[13.5px] font-light leading-relaxed text-white/65">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Book your ride — compact steps on a decorated backdrop */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice via-white to-ice py-11 dt:py-14">
        <div aria-hidden className="pointer-events-none absolute -left-28 -top-20 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.1),transparent_70%)] blur-2xl" />
        <div aria-hidden className="pointer-events-none absolute -right-28 bottom-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(47,128,237,0.08),transparent_70%)] blur-2xl" />
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-16 hidden h-[560px] w-[560px] -translate-x-1/2 rounded-full border border-navy/[0.05] dt:block" />
        <Container className="relative">
          <div className="mx-auto mb-9 max-w-[760px] text-center dt:mb-11">
            <Eyebrow align="center" className="mb-4">Book your ride with ease</Eyebrow>
            <AccentHeading as="h2" before="Book Your Ride With " accent="Ease" className="text-[26px] leading-tight text-navy dt:text-[36px]" />
            <p className="mx-auto mt-3 max-w-[600px] text-[14.5px] font-light leading-relaxed text-navy/75">
              Since 2007, thousands of pilgrims have trusted us across the holy cities. Booking is simple:
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3.5 dt:grid-cols-4 dt:gap-5">
            {BOOK.map((s, i) => (
              <div key={s.title} className="group rounded-xl border border-navy/10 bg-white p-4 shadow-[0_16px_36px_-30px_rgba(26,62,110,0.45)] transition-transform duration-300 hover:-translate-y-1 dt:p-5">
                <span className="mb-3 inline-grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-gold to-[#b4871a] font-serif text-[14px] font-bold text-navy shadow-[0_10px_22px_-10px_rgba(219,183,37,0.6)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-1.5 font-serif text-[15.5px] font-bold leading-tight text-navy">{s.title}</h3>
                <p className="text-[12.5px] font-light leading-relaxed text-navy/70">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Enquiry CTA (homepage design) */}
      <FormSection />

      {/* FAQ */}
      <FaqAccordion
        intro="Find answers to common questions about our Umrah services, required documents, customized options, or support during your pilgrimage."
        items={FAQ}
      />
    </PageShell>
  );
}
