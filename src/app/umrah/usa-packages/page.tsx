import Image from "next/image";
import Link from "next/link";
import {
  FileCheck2, Plane, MapPinned, Wallet, Users, BedDouble, CarFront, ArrowRight,
} from "lucide-react";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { Button } from "@/components/ui/Button";
import { InquireButton } from "@/components/inquiry/InquireButton";
import { ContactForm } from "@/components/inquiry/ContactForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PriceCard } from "@/components/sections/PriceCard";

const PATH = "/umrah/usa-packages/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Affordable Umrah Packages from USA - Shery Travels",
  description:
    "Explore reliable Umrah packages customized for Muslims in the USA. Experience spiritual journeys with hassle-free travel, accommodations, and 24/7 support.",
  ogType: "article",
});

const FEATURES = [
  { Icon: FileCheck2, title: "Effortless Visa Solutions", body: "We provide quick and accurate visa assistance for U.S. citizens, ensuring a smooth journey to Umrah." },
  { Icon: Plane, title: "Travel & Accommodation", body: "Enjoy round-trip flights and carefully selected hotels near Haram for a comfortable stay during your pilgrimage." },
  { Icon: MapPinned, title: "Guided Ziyarah Tours", body: "Experience guided religious tours in Makkah and Madinah to deepen your understanding and connection to your faith." },
];

const TIERS = [
  {
    star: "3-Star", nights: "7 Nights", split: "4 nights in Makkah · 3 in Madina",
    rooms: [
      { room: "Double Room", price: "$1,250" },
      { room: "Triple Room", price: "$1,090" },
      { room: "Quad Room", price: "$940" },
    ],
  },
  {
    star: "4-Star", nights: "10 Nights", split: "5 nights in Makkah · 5 in Madina",
    rooms: [
      { room: "Double Room", price: "$1,395" },
      { room: "Triple Room", price: "$1,250" },
      { room: "Quad Room", price: "$1,140" },
    ],
  },
  {
    star: "5-Star", nights: "6 Nights", split: "3 nights in Makkah · 3 in Madina",
    rooms: [
      { room: "Double Room", price: "$1,950" },
      { room: "Triple Room", price: "$1,790" },
      { room: "Quad Room", price: "$1,670" },
    ],
  },
];

const WHY = [
  { Icon: Wallet, title: "Affordable Packages", body: "Whether you’re flying from New York, Chicago, or Houston our Umrah packages are designed explicitly for the U.S.-based Muslims, offering competitive prices without compromising comfort." },
  { Icon: Users, title: "Group Booking", body: "Join us for a group experience that promotes community and connection. Enjoy shared adventures, lower costs, and expert guidance from our team, creating lasting bonds." },
  { Icon: BedDouble, title: "Quality Accommodation", body: "Stay in comfortable hotels located close to the Haram. Our clean and cozy rooms make it easy for you to reach prayers and rituals, enhancing your spiritual journey." },
  { Icon: CarFront, title: "Luxury Transport", body: "Travel in comfort with our modern, air-conditioned vehicles. With English-speaking, skilled drivers, we ensure timely and smooth transport for all your needs." },
];

const SPECIALIZED = [
  { label: "Family Umrah Packages", href: "/umrah/usa-packages/family-umrah-packages/" },
  { label: "Economy Umrah Packages", href: "/umrah/usa-packages/economy-umrah-packages/" },
  { label: "Luxury Umrah Packages", href: "/umrah/usa-packages/luxury-umrah-packages/" },
  { label: "Group Umrah Packages", href: "/umrah/usa-packages/group-umrah-packages/" },
];

const MONTHS_HOLY = [
  { label: "Ramadan Umrah Packages", href: "/umrah/usa-packages/ramadan/" },
  { label: "Rabi-ul-Awal Umrah Packages", href: "/umrah/usa-packages/rabi-ul-awal/" },
  { label: "Sha’ban Umrah Packages", href: "/umrah/usa-packages/shaban/" },
  { label: "Shawwal Umrah Packages", href: "/umrah/usa-packages/shawwal/" },
];

const HIGHLIGHTS = [
  { title: "Guided Tours of Sacred Sites", body: "Our Umrah packages include guided visits to Islamic sites like Jabal al-Noor, Mount Uhud, and the Cave of Hira. This will deepen your spiritual journey and help you understand their significance in Islam." },
  { title: "Stay Close to the Haram", body: "Enjoy hassle-free access with our premium hotel options located just a short walk from Masjid al-Haram and Masjid al-Nabawi. This way, you can easily engage in prayer and reflection at your convenience." },
  { title: "Customized Plans for Meaningful Worship", body: "Whether you’re visiting Makkah or Medina, our personalized plans ensure a deep connection with each holy site. We provide ample time for peace, reflection, and heartfelt duas to enhance your worship experience." },
  { title: "Full Travel Support for a Stress-Free Experience", body: "We manage everything from visa processing to airport transfers and accommodations. Our all-inclusive Umrah packages enable you to focus entirely on your ibadah while we handle all the logistical details for you." },
];

const FAQ = [
  { q: "Do you assist U.S. citizens with Umrah visas?", a: "Yes, we handle the complete Umrah visa process for U.S. passport holders, including guidance on required documents and embassy protocols." },
  { q: "Can I depart from any U.S. city?", a: "Absolutely. We arrange departures from major U.S. airports, including New York, Chicago, and Houston, among others, based on your convenience." },
  { q: "Are your services available in English?", a: "Yes. All communication, documents, and support services are provided in English to ensure clarity and ease for U.S.-based travelers." },
  { q: "Is there on-ground support available in Saudi Arabia for U.S. pilgrims?", a: "Yes, we offer 24/7 support both before departure and during your stay in Saudi Arabia, so you’re never alone on your journey." },
  { q: "Can I pay in U.S. dollars and use U.S. payment methods?", a: "Yes. We accept payments in US Dollars through credit/debit cards, bank transfers, and secure online platforms trusted by U.S. customers." },
];

function LinkTiles({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="grid gap-4 dt:grid-cols-4">
      {items.map((it) => (
        <Link key={it.href} href={it.href} className="card-hover group flex items-center justify-between gap-3 rounded-2xl border border-navy/10 bg-white p-5">
          <span className="font-serif text-[16px] font-bold text-navy">{it.label}</span>
          <ArrowRight size={18} className="flex-none text-gold transition-transform group-hover:translate-x-1" />
        </Link>
      ))}
    </div>
  );
}

export default function UmrahUsaPackagesPage() {
  return (
    <PageShell active="/umrah/">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Umrah", path: "/umrah/" },
          { name: "USA Packages", path: PATH },
        ])}
      />

      {/* Hero */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-12 dt:pt-16">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 hidden h-[460px] w-[460px] rounded-full border border-gold/15 dt:block" />
        <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="order-2 text-center dt:order-1 dt:text-left">
            <Eyebrow align="center" className="mb-5 dt:justify-start">Umrah packages from USA</Eyebrow>
            <AccentHeading as="h1" before="Easy, Spiritual & Reliable Umrah Packages from " accent="USA" className="text-[30px] leading-[1.18] text-navy dt:text-[46px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
              At Shery Travels, we understand the unique needs of Muslims in the USA – from documentation and travel arrangements to spiritual preparation. Let us take care of the details so you can focus on your worship.
            </p>
            <div className="mt-7"><InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton></div>
          </div>
          <div className="relative order-1 flex justify-center dt:order-2">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[360px] w-[300px] overflow-hidden rounded-t-[150px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[480px] dt:w-[420px]">
              <Image src="/images/umrah/usa-packages-hero.webp" alt="Umrah packages for U.S. pilgrims" fill sizes="(max-width:900px) 300px, 420px" priority className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container className="grid gap-5 dt:grid-cols-3 dt:gap-7">
          {FEATURES.map(({ Icon, title, body }) => (
            <div key={title} className="card-hover group rounded-2xl border border-navy/10 bg-ice p-7">
              <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border-[1.5px] border-gold bg-white transition-colors duration-300 group-hover:bg-gold">
                <Icon size={26} className="text-navy" />
              </span>
              <h3 className="mb-2 font-serif text-[19px] font-bold text-navy">{title}</h3>
              <p className="text-[14.5px] font-light leading-relaxed text-navy/75">{body}</p>
            </div>
          ))}
        </Container>
      </Section>

      {/* Packages */}
      <Section bg="ice" className="py-14 dt:py-20">
        <Container>
          <div className="mx-auto mb-12 max-w-[780px] text-center">
            <Eyebrow className="mb-4">Our packages</Eyebrow>
            <AccentHeading as="h2" before="Your Path to a Rewarding Umrah " accent="Experience" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80">
              We specialize in helping pilgrims from the USA plan their trip with ease and affordability. Our dedicated team provides 24/7 support to ensure every detail aligns with your spiritual goals — so you can focus on your worship with devotion.
            </p>
          </div>

          <div className="space-y-12">
            {TIERS.map((tier) => (
              <div key={tier.star}>
                <div className="mb-6 text-center dt:text-left">
                  <h3 className="font-serif text-[22px] font-bold text-navy dt:text-[26px]">{tier.star} Umrah Package</h3>
                  <p className="mt-1 text-[14.5px] text-navy/70">{tier.nights} · {tier.split}</p>
                </div>
                <div className="grid gap-5 dt:grid-cols-3 dt:gap-7">
                  {tier.rooms.map((r, i) => (
                    <PriceCard
                      key={r.room}
                      badge={`${tier.star} · ${tier.nights}`}
                      title={r.room}
                      price={r.price}
                      features={[tier.split, "Visa & Transport included"]}
                      featured={i === 0}
                    />
                  ))}
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
            <AccentHeading as="h2" before="Why Choose Us for Your Umrah " accent="Journey" className="text-[27px] leading-tight text-white dt:text-[38px]" />
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

      {/* Specialized packages */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container>
          <div className="mx-auto mb-8 max-w-[820px] text-center">
            <Eyebrow className="mb-4">Specialized packages</Eyebrow>
            <AccentHeading as="h2" before="Explore Specialized Umrah Packages for the U.S. " accent="Travelers" className="text-[26px] leading-tight text-navy dt:text-[36px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80">
              Your journey is unique, and so are your needs! Whether you’re planning a trip with your family, watching your budget, or looking for something more luxurious, we’ve got you covered — departing from your favorite U.S. city.
            </p>
          </div>
          <LinkTiles items={SPECIALIZED} />
        </Container>
      </Section>

      {/* Holy months */}
      <Section bg="ice" className="py-14 dt:py-20">
        <Container>
          <div className="mx-auto mb-8 max-w-[820px] text-center">
            <Eyebrow className="mb-4">Holy months</Eyebrow>
            <AccentHeading as="h2" before="Umrah Packages for the Holy " accent="Months" className="text-[26px] leading-tight text-navy dt:text-[36px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80">
              Each sacred month — like Ramadan, Rabi-ul-Awal, and Sha’ban — is filled with unique blessings that make your pilgrimage even more special. Check out our special packages for these holy months:
            </p>
          </div>
          <LinkTiles items={MONTHS_HOLY} />
        </Container>
      </Section>

      {/* Spiritual highlights — numbered */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <Eyebrow className="mb-4">What’s included</Eyebrow>
            <AccentHeading as="h2" before="Spiritual Highlights of Our Umrah " accent="Packages" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
          </div>
          <div className="grid gap-5 dt:grid-cols-2 dt:gap-7">
            {HIGHLIGHTS.map((h, i) => (
              <div key={h.title} className="card-hover relative overflow-hidden rounded-2xl border border-navy/10 bg-ice p-7">
                <span className="pointer-events-none absolute -right-2 -top-3 font-serif text-[64px] font-bold leading-none text-gold/15" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="relative mb-2 font-serif text-[19px] font-bold text-navy">{h.title}</h3>
                <p className="relative text-[14.5px] font-light leading-relaxed text-navy/75">{h.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Monthly CTA band */}
      <Section bg="navy" className="py-14 dt:py-16">
        <Container className="flex flex-col items-center gap-5 text-center dt:flex-row dt:justify-between dt:text-left">
          <div className="max-w-[620px]">
            <AccentHeading as="h2" before="Explore Our Monthly Umrah " accent="Packages" className="text-[24px] leading-tight text-white dt:text-[32px]" />
            <p className="mt-3 text-[15px] font-light leading-relaxed text-white/80">
              Departures every month from major cities like New York, Chicago, Dallas, and Houston — at affordable prices.
            </p>
          </div>
          <Button href="/umrah/usa-packages/monthly/" variant="gold" size="lg" className="flex-none rounded-lg uppercase tracking-[0.05em]">
            Choose your Umrah month <ArrowRight size={18} />
          </Button>
        </Container>
      </Section>

      {/* FAQ */}
      <FaqAccordion
        intro="Find answers to common questions about our Umrah service, required documents, customized options, or support during your pilgrimage."
        items={FAQ}
      />

      {/* Inquiry */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container className="grid items-start gap-10 dt:grid-cols-2 dt:gap-16">
          <div>
            <Eyebrow align="left" className="mb-4">Get in touch</Eyebrow>
            <AccentHeading as="h2" before="Plan your Umrah from the " accent="USA" className="text-[28px] leading-tight text-navy dt:text-[40px]" />
            <p className="mt-5 max-w-[460px] text-[16px] font-light leading-[1.7] text-navy/80">
              Tell us your city, dates, and group size — a travel expert replies within 24 hours.
            </p>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </PageShell>
  );
}
