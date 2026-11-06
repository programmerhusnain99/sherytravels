import Image from "next/image";
import { UserCheck, CarFront, CalendarCheck, Users, Briefcase, Snowflake, Wallet, Sparkles } from "lucide-react";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { InquireButton } from "@/components/inquiry/InquireButton";
import { ContactForm } from "@/components/inquiry/ContactForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

const PATH = "/transportation/fleets/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Hajj Umrah Fleet | Comfortable Travel with Shery Travels",
  description:
    "Travel across Makkah, Madinah, and beyond with Shery Travels. Enjoy modern, air-conditioned vehicles, skilled drivers, and easy booking for a smooth journey.",
  ogType: "article",
});

const FEATURES = [
  { Icon: UserCheck, title: "Experienced Drivers", body: "Our drivers are professional, friendly, and speak multiple languages, ensuring a safe and pleasant journey." },
  { Icon: CarFront, title: "Modern Vehicles", body: "Enjoy our top-quality vehicles that are regularly maintained, offering comfort and plenty of room for your luggage." },
  { Icon: CalendarCheck, title: "Easy Booking", body: "We’re available 24/7 for airport pickups, Ziyarah tours, and travel between cities, making it convenient for you to plan your trips." },
];

const FLEET = [
  { name: "Sedan / Camry / Ford", persons: "4 Persons", luggage: "2 Luggage", src: "/images/transportation/fleet-sedan.webp" },
  { name: "Hyundai HI / Toyota", persons: "7 Persons", luggage: "7 Luggage", src: "/images/transportation/fleet-h1.webp" },
  // NOTE: GMC Yukon had no spec line on the live page (content gap); filled from the
  // main Transportation page (7 pax / 7 bags). TODO(client): confirm.
  { name: "GMC Yukon", persons: "7 Persons", luggage: "7 Luggage", src: "/images/transportation/fleet-yukon.webp" },
  { name: "Toyota Hiace", persons: "10 Persons", luggage: "10 Luggage", src: "/images/transportation/fleet-hiace.webp" },
  { name: "Toyota Coaster", persons: "15 Persons", luggage: "25 Luggage", src: "/images/transportation/fleet-coaster.webp" },
  { name: "Bus 50 Seater", persons: "50 Persons", luggage: "50 Luggage", src: "/images/transportation/fleet-bus.webp" },
];

const WHY = [
  { Icon: Wallet, title: "Affordable Packages", body: "At Shery Travels, we believe that great travel shouldn’t break the bank. Our rates are designed to fit every budget, so you can enjoy top-notch rides without compromising on comfort, quality, or safety along the way." },
  { Icon: Users, title: "Group Travel Options", body: "Traveling with friends or family? We’ve got you covered! Our flexible group packages make sure everyone travels comfortably and stays connected, whether you’re headed for Umrah, Ziyarah, or exploring the city together." },
  { Icon: Sparkles, title: "Clean & Quality Vehicles", body: "Your safety matters to us. That’s why every vehicle in our fleet is regularly inspected, sanitized, and maintained. We aim to provide a comfortable and smooth travel experience no matter your destination." },
  { Icon: UserCheck, title: "Skilled Drivers", body: "Our friendly, experienced drivers are here to make your journey as enjoyable as possible. They speak English and are dedicated to ensuring timely transfers and a hassle-free ride, so you can sit back and relax." },
];

const FAQ = [
  { q: "What types of vehicles do you have in your fleet?", a: "We have a diverse selection of vehicles, including luxury sedans, SUVs, roomy vans, and buses, all kept in great condition for your comfort, safety, and cleanliness." },
  { q: "Can I choose a specific vehicle for my trip?", a: "Absolutely! You can pick the type of vehicle that fits your group size and preferences. We have options for solo travelers, families, and larger groups." },
  { q: "Are your vehicles air-conditioned and properly maintained?", a: "Yes, they are! Every vehicle in our fleet is fully air-conditioned, regularly serviced, and inspected before each trip to guarantee a smooth and dependable ride." },
  { q: "Do you provide professional drivers with your vehicles?", a: "Yes, we do! Every vehicle comes with a trained, English-speaking driver who knows the local routes well, ensuring that your journey is comfortable and timely." },
  { q: "Can I book a vehicle for intercity travel or tours?", a: "Definitely! Whether you need transportation between Jeddah, Makkah, and Madinah or want to tour local attractions, we offer flexible intercity and tour transport services to suit your needs." },
];

export default function FleetsPage() {
  return (
    <PageShell active="/transportation/">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Transportation", path: "/transportation/" },
          { name: "Our Fleet", path: PATH },
        ])}
      />

      {/* Hero */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-12 dt:pt-16">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 hidden h-[460px] w-[460px] rounded-full border border-gold/15 dt:block" />
        <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="order-2 text-center dt:order-1 dt:text-left">
            <Eyebrow align="center" className="mb-5 dt:justify-start">Our fleet</Eyebrow>
            <AccentHeading as="h1" before="Safe, Spacious & Comfortable " accent="Rides" className="text-[32px] leading-[1.15] text-navy dt:text-[48px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
              Experience the beauty of Saudi Arabia without the hassle. At Shery Travels, we provide a fleet of modern, air-conditioned vehicles that prioritize your comfort and peace of mind. Whether you’re on your way to Makkah, Madinah, or exploring surrounding cities, we ensure hassle-free transfers for families, individuals, and groups alike. Your journey with us will be relaxing and reliable, making every trip a pleasure.
            </p>
            <div className="mt-7">
              <InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton>
            </div>
          </div>
          <div className="relative order-1 flex justify-center dt:order-2">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[320px] w-[320px] overflow-hidden rounded-3xl bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[440px] dt:w-full">
              <Image src="/images/transportation/fleets-hero.webp" alt="Modern air-conditioned vehicles for Hajj and Umrah travel" fill sizes="(max-width:900px) 320px, 45vw" priority className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section bg="ice" className="py-14 dt:py-20">
        <Container className="grid gap-5 dt:grid-cols-3 dt:gap-7">
          {FEATURES.map(({ Icon, title, body }) => (
            <div key={title} className="card-hover group rounded-2xl border border-navy/10 bg-white p-7">
              <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border-[1.5px] border-gold bg-ice transition-colors duration-300 group-hover:bg-gold">
                <Icon size={26} className="text-navy" />
              </span>
              <h3 className="mb-2 font-serif text-[19px] font-bold text-navy">{title}</h3>
              <p className="text-[14.5px] font-light leading-relaxed text-navy/75">{body}</p>
            </div>
          ))}
        </Container>
      </Section>

      {/* Premium experience */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="relative order-2 h-[340px] w-full overflow-hidden rounded-2xl bg-lightblue shadow-[0_30px_60px_-26px_rgba(26,62,110,0.45)] dt:order-1 dt:h-[420px]">
            <Image src="/images/transportation/fleets-premium.webp" alt="Luxury sedan and van for pilgrimage travel" fill sizes="(max-width:900px) 100vw, 45vw" className="object-cover" />
          </div>
          <div className="order-1 dt:order-2">
            <Eyebrow align="left" className="mb-4">Premium comfort</Eyebrow>
            <AccentHeading as="h2" before="Premium Travel Experience for Every " accent="Journey" className="text-[26px] leading-tight text-navy dt:text-[36px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
              At Shery Travels, we believe that your journey should be just as enjoyable as your destination. Our fleet features comfortable luxury sedans, roomy vans, and SUVs that are perfect for families and groups. We take care of every detail to ensure your ride is smooth and pleasant - from timely pickups to personalized support. Whether you&apos;re heading to the airport or setting out on a pilgrimage, we focus on providing you with comfort, safety, and peace of mind every step of the way.
            </p>
          </div>
        </Container>
      </Section>

      {/* Fleet options */}
      <Section bg="ice" className="py-14 dt:py-20">
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

      {/* Why choose us — navy band */}
      <Section bg="navy" className="relative overflow-hidden py-14 dt:py-20">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-28 h-[360px] w-[360px] rounded-full border border-gold/15" />
        <Container>
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <Eyebrow tone="white" className="mb-4">Why choose us</Eyebrow>
            <AccentHeading as="h2" before="Why Choose Shery Travels for Your " accent="Journey" className="text-[27px] leading-tight text-white dt:text-[38px]" />
          </div>
          <div className="grid gap-5 dt:grid-cols-2 dt:gap-7">
            {WHY.map(({ Icon, title, body }) => (
              <div key={title} className="card-hover flex gap-5 rounded-2xl border border-white/10 bg-white/[0.06] p-7">
                <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl border-[1.5px] border-gold/60 text-gold">
                  <Icon size={26} />
                </span>
                <div>
                  <h3 className="mb-2 font-serif text-[19px] font-bold text-white">{title}</h3>
                  <p className="text-[14.5px] font-light leading-relaxed text-white/75">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <FaqAccordion items={FAQ} />

      {/* Inquiry */}
      <Section bg="white" className="py-14 dt:py-20">
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
