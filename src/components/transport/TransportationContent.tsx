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
import { HeroEnquiryForm } from "@/components/home/hero/HeroEnquiryForm";
import { HERO_DESCRIPTION } from "@/components/sections/heroCopy";
import { FormSection } from "@/components/home/form/FormSection";
import { CustomPackageForm } from "@/components/inquiry/CustomPackageForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PerfectPackages } from "@/components/home/perfect/PerfectPackages";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

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
  { Icon: MapPin, title: "Point-to-Point Transfers", body: "Airports, hotels and sacred sites — by taxi or bus." },
  { Icon: Clock, title: "24/7 Flexible Travel", body: "Day or night, one-way or round-trip, on your schedule." },
  { Icon: ShieldCheck, title: "Licensed Drivers", body: "Experienced, multilingual drivers who know every route." },
  { Icon: ReceiptText, title: "Transparent Fares", body: "Know the cost upfront — clear pricing, no surprises." },
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
          <div className="order-3 max-w-[680px] text-center">
            <p className="text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">{HERO_DESCRIPTION}</p>
          </div>
          <div className="order-4 w-full">
            <HeroEnquiryForm />
          </div>
          <div className="relative order-2 flex justify-center">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[330px] w-[290px] overflow-hidden rounded-t-[145px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[420px] dt:w-[380px] dt:rounded-t-[190px]">
              <Image src="/images/transportation/transport-hero.webp" alt="Air-conditioned vehicle for Umrah transfers" fill sizes="(max-width:900px) 290px, 380px" priority className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Reliable Mecca transportation — dark-blue band with an edge-bleed image that dissolves into the navy */}
      <Section bg="navy" className="relative overflow-hidden py-12 dt:py-0 dt:min-h-[540px]">
        <div aria-hidden className="absolute inset-y-0 left-0 hidden w-[46%] dt:block">
          <Image src="/images/transportation/transport-hero.webp" alt="" fill sizes="46vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,62,110,0.3)_0%,rgba(26,62,110,0.55)_50%,rgba(26,62,110,0.9)_82%,#1a3e6e_100%)]" />
          <span className="absolute right-0 top-[18%] bottom-[18%] w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0" />
        </div>
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-24 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.14),transparent_70%)]" />
        <Container className="relative flex items-center dt:min-h-[540px] dt:py-16">
          <div className="w-full dt:ml-[48%] dt:w-[52%]">
            <div className="relative mb-6 h-[200px] w-full overflow-hidden rounded-2xl dt:hidden">
              <Image src="/images/transportation/transport-hero.webp" alt="Air-conditioned Umrah transfer" fill sizes="100vw" className="object-cover" />
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(26,62,110,0.5)_100%)]" />
            </div>
            <Eyebrow align="left" tone="white" className="mb-4">Reliable transfers</Eyebrow>
            <AccentHeading as="h2" before="Reliable Mecca Transportation for Umrah " accent="Pilgrims" className="text-[26px] leading-tight text-white dt:text-[36px]" />
            <p className="mt-5 max-w-[560px] text-[15.5px] font-light leading-[1.7] text-white/75 dt:text-[16.5px]">
              Shery Travels offers reliable Mecca transportation for pilgrims from every walk of life — an Umrah taxi, the value of an Umrah bus, or a shared ride. Modern, air-conditioned vehicles, skilled drivers and round-the-clock service make travel easy and stress-free.
            </p>
            <div className="mt-7 flex flex-col gap-3.5">
              {PILLARS.map(({ Icon, title, body }) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-xl border-[1.5px] border-gold/50 text-gold">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-serif text-[16px] font-bold text-white">{title}</h3>
                    <p className="text-[13.5px] font-light leading-relaxed text-white/65">{body}</p>
                  </div>
                </div>
              ))}
            </div>
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
      <Section bg="ice" className="relative overflow-hidden py-10 dt:py-14">
        {/* Decorative background wash */}
        <div aria-hidden className="pointer-events-none absolute -left-28 -top-24 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.14),transparent_70%)] blur-2xl" />
        <div aria-hidden className="pointer-events-none absolute -right-24 -bottom-28 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(47,128,237,0.1),transparent_70%)] blur-2xl" />
        <div aria-hidden className="pointer-events-none absolute right-[6%] top-8 hidden h-[280px] w-[280px] rounded-full border border-navy/[0.06] dt:block" />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(rgba(26,62,110,0.05)_1px,transparent_1px)] [background-size:22px_22px]" />
        <Container className="relative grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="relative order-2 mx-auto w-full dt:order-1">
            {/* Gold corner frame */}
            <span aria-hidden className="pointer-events-none absolute -left-3 -top-3 z-10 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-gold/70" />
            <span aria-hidden className="pointer-events-none absolute -bottom-3 -right-3 z-10 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-gold/70" />
            <div className="relative h-[360px] w-full overflow-hidden rounded-2xl bg-lightblue shadow-[0_30px_60px_-26px_rgba(26,62,110,0.45)] dt:h-[420px]">
              <Image src="/images/transportation/transport-madinah.webp" alt="Transfers near Masjid al-Nabawi in Madinah" fill sizes="(max-width:900px) 100vw, 45vw" className="object-cover" />
            </div>
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
        py="pb-8 pt-8 dt:pb-10 dt:pt-12"
      />

      {/* How it works — compact animated step row */}
      <Section bg="ice" className="py-9 dt:py-12">
        <Container>
          <div className="mx-auto mb-8 max-w-[760px] text-center dt:mb-10">
            <Eyebrow align="center" className="mb-4">How it works</Eyebrow>
            <AccentHeading as="h2" before="How Our Transportation " accent="Works" className="text-[26px] leading-tight text-navy dt:text-[36px]" />
          </div>
          <div className="relative">
            <div aria-hidden className="absolute inset-x-[12%] top-7 hidden h-[2px] bg-gradient-to-r from-gold/0 via-navy/15 to-gold/0 dt:block" />
            <Stagger as="div" gap={0.1} className="relative grid grid-cols-2 gap-x-4 gap-y-8 dt:grid-cols-4 dt:gap-5">
              {HOW.map(({ Icon, title, body }, i) => (
                <StaggerItem as="div" key={title} direction="up" className="flex flex-col items-center px-2 text-center">
                  <span className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold to-[#b4871a] text-navy shadow-[0_14px_30px_-12px_rgba(219,183,37,0.65)] ring-4 ring-ice transition-transform duration-300 hover:-translate-y-1">
                    <Icon size={23} />
                    <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-navy text-[11px] font-bold text-white ring-2 ring-ice">{i + 1}</span>
                  </span>
                  <h3 className="mt-4 font-serif text-[15.5px] font-bold leading-tight text-navy">{title}</h3>
                  <p className="mt-1.5 text-[12.5px] font-light leading-relaxed text-navy/65">{body}</p>
                </StaggerItem>
              ))}
            </Stagger>
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

      <CustomPackageForm
        title="Customise Your Ride"
        accent="Ride"
        description="Build a private transfer that fits your trip — pickup and drop-off, vehicle, dates and passengers, all arranged around you."
        image="/images/transportation/transport-hero.webp"
        variant="ride"
      />

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
