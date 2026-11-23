import Image from "next/image";
import { UserCheck, Users, Briefcase, Snowflake, Wallet, Sparkles, Check, ShieldCheck } from "lucide-react";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { InquireButton } from "@/components/inquiry/InquireButton";
import { ContactForm } from "@/components/inquiry/ContactForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

const PREMIUM = [
  "Air-conditioned, modern vehicles",
  "Luxury sedans, vans & SUVs",
  "Timely airport & hotel pickups",
  "Personalized 24/7 support",
];

const FLEET = [
  { name: "Sedan / Camry / Ford", persons: "4 Persons", luggage: "2 Luggage", src: "/images/transportation/fleet-sedan.webp" },
  { name: "Hyundai HI / Toyota", persons: "7 Persons", luggage: "7 Luggage", src: "/images/transportation/fleet-h1.webp" },
  { name: "GMC Yukon", persons: "7 Persons", luggage: "7 Luggage", src: "/images/transportation/fleet-yukon.webp" },
  { name: "Toyota Hiace", persons: "10 Persons", luggage: "10 Luggage", src: "/images/transportation/fleet-hiace.webp" },
  { name: "Toyota Coaster", persons: "15 Persons", luggage: "25 Luggage", src: "/images/transportation/fleet-coaster.webp" },
  { name: "Bus 50 Seater", persons: "50 Persons", luggage: "50 Luggage", src: "/images/transportation/fleet-bus.webp" },
];

const WHY = [
  { Icon: Wallet, title: "Affordable Packages", body: "Fair rates for every budget — comfort, quality and safety without the premium price." },
  { Icon: Users, title: "Group Travel Options", body: "Flexible group packages keep friends and family together and comfortable." },
  { Icon: Sparkles, title: "Clean & Quality Vehicles", body: "Every vehicle is regularly inspected, sanitised and maintained for a smooth ride." },
  { Icon: UserCheck, title: "Skilled Drivers", body: "Friendly, English-speaking chauffeurs focused on timely, hassle-free transfers." },
];

const FAQ = [
  { q: "What types of vehicles do you have in your fleet?", a: "We have a diverse selection of vehicles, including luxury sedans, SUVs, roomy vans, and buses, all kept in great condition for your comfort, safety, and cleanliness." },
  { q: "Can I choose a specific vehicle for my trip?", a: "Absolutely! You can pick the type of vehicle that fits your group size and preferences. We have options for solo travelers, families, and larger groups." },
  { q: "Are your vehicles air-conditioned and properly maintained?", a: "Yes, they are! Every vehicle in our fleet is fully air-conditioned, regularly serviced, and inspected before each trip to guarantee a smooth and dependable ride." },
  { q: "Do you provide professional drivers with your vehicles?", a: "Yes, we do! Every vehicle comes with a trained, English-speaking driver who knows the local routes well, ensuring that your journey is comfortable and timely." },
  { q: "Can I book a vehicle for intercity travel or tours?", a: "Definitely! Whether you need transportation between Jeddah, Makkah, and Madinah or want to tour local attractions, we offer flexible intercity and tour transport services to suit your needs." },
];

/** Shared Fleet / Vehicles page body (legacy /transportation/fleets/ + new /umrah-transport/vehicles/). */
export function FleetsContent({
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
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-10 pb-14 dt:pt-12 dt:pb-20">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 hidden h-[460px] w-[460px] rounded-full border border-gold/15 dt:block" />
        <Container className="flex flex-col items-center gap-6 text-center">
          <div className="order-1 max-w-[680px] text-center">
            <AccentHeading as="h1" before="Safe, Spacious & Comfortable " accent="Rides" className="text-[32px] leading-[1.15] text-navy dt:text-[48px]" />
          </div>
          <div className="order-3 max-w-[680px] text-center">
            <p className="text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
              Experience the beauty of Saudi Arabia without the hassle. At Shery Travels, we provide a fleet of modern, air-conditioned vehicles that prioritize your comfort and peace of mind. Whether you’re on your way to Makkah, Madinah, or exploring surrounding cities, we ensure hassle-free transfers for families, individuals, and groups alike. Your journey with us will be relaxing and reliable, making every trip a pleasure.
            </p>
            <div className="mt-7">
              <InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton>
            </div>
          </div>
          <div className="relative order-2 flex justify-center">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[330px] w-[290px] overflow-hidden rounded-t-[145px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[420px] dt:w-[380px] dt:rounded-t-[190px]">
              <Image src="/images/transportation/fleets-hero.webp" alt="Modern air-conditioned vehicles for Hajj and Umrah travel" fill sizes="(max-width:900px) 290px, 380px" priority className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Premium experience — navy, redesigned */}
      <Section bg="navy" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute left-1/2 -top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.13),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -left-28 bottom-0 hidden h-[360px] w-[360px] rounded-full border border-white/[0.06] dt:block" />
        <div aria-hidden className="pointer-events-none absolute -right-24 top-20 hidden h-[300px] w-[300px] rounded-full border border-gold/15 dt:block" />
        <Container className="relative grid items-center gap-12 dt:grid-cols-2 dt:gap-16">
          {/* Image — gold corner frame + floating badge */}
          <div className="relative order-2 dt:order-1">
            <span aria-hidden className="pointer-events-none absolute -left-3 -top-3 z-10 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-gold/70" />
            <span aria-hidden className="pointer-events-none absolute -bottom-3 -right-3 z-10 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-gold/70" />
            <div className="relative h-[340px] w-full overflow-hidden rounded-2xl bg-white/5 shadow-[0_34px_64px_-26px_rgba(0,0,0,0.6)] dt:h-[430px]">
              <Image src="/images/transportation/fleets-premium.webp" alt="Luxury sedan and van for pilgrimage travel" fill sizes="(max-width:900px) 100vw, 45vw" className="object-cover" />
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(26,62,110,0.6)_100%)]" />
            </div>
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-xl border border-white/10 bg-navy/90 px-4 py-3 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.7)] backdrop-blur">
              <span className="grid h-10 w-10 flex-none place-items-center rounded-lg bg-gradient-to-br from-gold to-[#b4871a] text-navy">
                <ShieldCheck size={20} />
              </span>
              <div>
                <div className="font-serif text-[15px] font-bold leading-none text-white">Fully insured</div>
                <div className="mt-1 text-[12px] text-white/60">Serviced &amp; sanitised fleet</div>
              </div>
            </div>
          </div>
          {/* Text + feature chips */}
          <div className="order-1 dt:order-2">
            <Eyebrow align="left" tone="white" className="mb-4">Premium comfort</Eyebrow>
            <AccentHeading as="h2" before="Premium Travel Experience for Every " accent="Journey" className="text-[26px] leading-tight text-white dt:text-[36px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-white/75 dt:text-[16.5px]">
              Your journey should be just as enjoyable as your destination. Our fleet of luxury sedans, roomy vans and SUVs is built for families and groups — and we handle every detail, from timely pickups to personalized support, so you travel in comfort, safety and peace of mind.
            </p>
            <div className="mt-7 grid grid-cols-1 gap-3 dt:grid-cols-2">
              {PREMIUM.map((f) => (
                <div key={f} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3">
                  <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-gold/15 text-gold">
                    <Check size={15} />
                  </span>
                  <span className="text-[13.5px] font-light text-white/85">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Fleet options */}
      <Section bg="ice" className="py-10 dt:py-14">
        <Container>
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <Eyebrow className="mb-4">The vehicles</Eyebrow>
            <AccentHeading as="h2" before="Discover Our Latest Fleet " accent="Options" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            <p className="mt-4 text-[15.5px] font-light leading-relaxed text-navy/75">
              Select from a diverse range of vehicles designed to meet your needs—whether you prefer stylish sedans or spacious premium vans, we’ve got you covered for a smooth journey throughout your pilgrimage.
            </p>
          </div>
          <div className="grid gap-5 dt:grid-cols-3 dt:gap-6">
            {FLEET.map((v) => (
              <div key={v.name} className="card-hover overflow-hidden rounded-2xl border border-navy/10 bg-white">
                <div className="relative h-[180px] w-full bg-lightblue">
                  <Image src={v.src} alt={v.name} fill sizes="(max-width:900px) 100vw, 30vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="mb-3 font-serif text-[18px] font-bold text-navy">{v.name}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13.5px] text-navy/75">
                    <span className="flex items-center gap-1.5"><Users size={16} className="text-gold" /> {v.persons}</span>
                    <span className="flex items-center gap-1.5"><Briefcase size={16} className="text-gold" /> {v.luggage}</span>
                    <span className="flex items-center gap-1.5"><Snowflake size={16} className="text-gold" /> Air Condition</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why choose us — navy, glass-card design (matches Umrah page) */}
      <Section bg="navy" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute left-1/2 -top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(219,183,37,0.15),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -right-28 top-24 hidden h-[340px] w-[340px] rounded-full border border-gold/15 dt:block" />
        <div aria-hidden className="pointer-events-none absolute -left-28 -bottom-28 hidden h-[380px] w-[380px] rounded-full border border-white/[0.06] dt:block" />
        <Container className="relative">
          <div className="mx-auto mb-9 max-w-[760px] text-center dt:mb-12">
            <Eyebrow align="center" tone="white" className="mb-4">Why choose us</Eyebrow>
            <AccentHeading as="h2" before="Why Choose Shery Travels for Your " accent="Journey" className="text-[27px] leading-tight text-white dt:text-[38px]" />
            <p className="mx-auto mt-4 max-w-[580px] text-[15px] font-light leading-relaxed text-white/70 dt:text-[16px]">
              Budget-friendly rates, flexible group options and a spotless, well-kept fleet — driven by friendly, experienced chauffeurs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3.5 dt:grid-cols-4 dt:gap-4">
            {WHY.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50"
              >
                <span aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gold/0 blur-2xl transition-colors duration-300 group-hover:bg-gold/25" />
                <div className="relative mb-2.5 flex items-center gap-3">
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-lg bg-gradient-to-br from-gold to-[#b4871a] text-navy shadow-[0_10px_22px_-10px_rgba(219,183,37,0.65)]">
                    <Icon size={19} aria-hidden />
                  </span>
                  <h3 className="font-serif text-[15px] font-bold leading-tight text-white">{title}</h3>
                </div>
                <p className="relative text-[12.5px] font-light leading-relaxed text-white/60">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <FaqAccordion items={FAQ} />

      {/* Inquiry */}
      <Section bg="white" className="py-10 dt:py-14">
        <Container className="grid items-start gap-10 dt:grid-cols-2 dt:gap-16">
          <div>
            <Eyebrow align="left" className="mb-4">Get in touch</Eyebrow>
            <AccentHeading as="h2" before="Reserve your " accent="Ride" className="text-[28px] leading-tight text-navy dt:text-[40px]" />
            <p className="mt-5 max-w-[460px] text-[16px] font-light leading-[1.7] text-navy/80">
              Tell us your route, dates, and group size — a travel expert replies within 24 hours.
            </p>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </PageShell>
  );
}
