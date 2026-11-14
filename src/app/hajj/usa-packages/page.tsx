import Image from "next/image";
import { Plane, FileCheck2, PackageCheck, Users, HeartHandshake, Handshake, Check } from "lucide-react";
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
import { PackageCardLarge } from "@/components/home/packages/PackageCardLarge";
import { PackagesShowcase } from "@/components/home/packages/PackagesShowcase";
import { HAJJ_PACKAGES } from "@/data/home/packageCards";

const PATH = "/hajj/usa-packages/";

export const metadata = pageMetadata({
  path: PATH,
  title: "Hajj Packages from USA - Shery Travels",
  description:
    "Discover premium Hajj packages designed just for you. Enjoy easy visa processing, inclusive services, and 24/7 support for a stress-free journey from the USA.",
  ogType: "article",
});

const FEATURES = [
  { Icon: Plane, title: "US-Based Departure", body: "U.S. travelers can take flights from major cities, including L.A., Houston, Chicago, New York, and other cities. The bilingual support team communicates every step of the way." },
  { Icon: FileCheck2, title: "Easy Visa Processing", body: "Travel easily knowing we take care of all necessary visa paperwork and requirements from the embassy." },
  { Icon: PackageCheck, title: "Inclusive Services", body: "Get airport pickups, guided rituals, and air-conditioned accommodation in Makkah and Madina, fully religious compliant." },
];

const WHY = [
  { Icon: Users, title: "Deep Understanding of U.S. Muslim Travelers", body: "From time zone differences to halal dietary needs and bilingual challenges, we match your lifestyle without compromising throughout the Hajj journey." },
  { Icon: HeartHandshake, title: "Spiritual and Logistic Guidance", body: "Our team offers complete spiritual mentorship and on-ground support to help first-time pilgrims understand every ritual." },
  { Icon: Handshake, title: "Strong Partnerships", body: "We collaborate with top-tier hotels for bookings near the Haram, reliable transport, and guided ziyarat tours to ensure a smooth experience." },
  { Icon: PackageCheck, title: "All-Inclusive Packages", body: "We offer transparent Hajj packages that include everything: flights, visas, meals, transportation, lodging, and religious mentorship." },
];

const AUDIENCES = [
  "First-time pilgrims unsure about the process",
  "Elderly Muslims needing mobility assistance",
  "Families looking for organized group travel",
  "Islamic centers organizing group pilgrimages",
];

const DOCUMENTS = [
  { title: "Valid Passport", body: "As an American Muslim, you will need a U.S. passport with a minimum validity of 6 months for your travel plans. Shery Travel assists in securing the Hajj visa with proper documentation that complies with Saudi government regulations." },
  { title: "Mahram Proof for Female Pilgrims", body: "According to Hajj guidance by the Saudi government, female pilgrims traveling alone must provide proof of a Mahram relationship (such as a birth certificate). Our team ensures that they collect the necessary documents." },
  { title: "Health Vaccinations", body: "All pilgrims must present proof of COVID-19 vaccination (and any other required vaccines, if appropriate), according to Saudi officials. We’ll keep you updated on the most recent health regulations and assist you in meeting them on schedule." },
  { title: "Flight Tickets and Hotel Confirmations", body: "You will need confirmed hotel reservations and round-trip airline tickets in order to finish your Hajj application. All Shery trip packages include them, and we offer official documents to back up your trip and visa applications." },
];

const FAQ = [
  { q: "What is included in the Hajj package for the USA?", a: "All USA Hajj packages include a round-trip fare, visa processing, hotel accommodation, meals, and local transportation, along with proper guidance through every step." },
  { q: "Can I travel with my family from the USA?", a: "Yes, you can choose to travel with a group of friends and family with the desired package with shared departure dates." },
  { q: "Do you provide ground transportation during Hajj?", a: "Yes. At Shery Travels, we are keen to provide an air-conditioned mode of transportation for all transfers, i.e, from the airport to hotels and between holy sites like Mina, Arafat, and Muzdalifah." },
  { q: "Are There Family-Friendly Packages From NYC?", a: "Yes, our packages include convenient accommodations near Haram and easy transport for families." },
];

export default function HajjUsaPackagesPage() {
  return (
    <PageShell active="/hajj/">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Hajj", path: "/hajj/" },
          { name: "USA Packages", path: PATH },
        ])}
      />

      {/* Hero */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-12 dt:pt-16">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 hidden h-[460px] w-[460px] rounded-full border border-gold/15 dt:block" />
        <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="order-2 text-center dt:order-1 dt:text-left">
            <Eyebrow align="center" className="mb-5 dt:justify-start">Hajj packages from USA</Eyebrow>
            <AccentHeading as="h1" before="Hajj Packages: From USA to the Heart of " accent="Makkah" className="text-[30px] leading-[1.18] text-navy dt:text-[46px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
              Hajj is one in a lifetime journey that can become even more memorable and easier with premium services and smooth transportation. Exclusively catered to the Muslims living in the United States.
            </p>
            <div className="mt-7"><InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton></div>
          </div>
          <div className="relative order-1 flex justify-center dt:order-2">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 hidden h-[500px] w-[450px] -translate-x-1/2 rounded-t-[225px] rounded-b-[18px] border border-navy/10 dt:block" />
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[360px] w-[300px] overflow-hidden rounded-t-[150px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[480px] dt:w-[420px]">
              <Image src="/images/hajj/usa-packages-hero.webp" alt="Hajj packages for U.S. pilgrims" fill sizes="(max-width:900px) 300px, 420px" priority className="object-cover" />
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

      {/* Trusted intro + package rooms */}
      <Section bg="ice" className="py-14 dt:py-20">
        <Container>
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <Eyebrow className="mb-4">Our packages</Eyebrow>
            <AccentHeading as="h2" before="Trusted by Muslim Communities All Over the " accent="U.S." className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80">
              Shery Travel is all about bringing the masses of Muslims from the US to the place of worship. We ensure coordinated group departures, safe transportation, and assistance throughout the pilgrimage.
            </p>
            <p className="mt-3 text-[15.5px] font-light leading-[1.7] text-navy/80">
              Enjoy the benefit of your chosen Hajj package for a stress-free experience and the enlightenment of local mosques and community leaders in Makkah and Madinah, and other religious sites.
            </p>
          </div>

          <h3 className="mb-6 text-center font-serif text-[22px] font-bold text-navy dt:text-[26px]">Types of USA Hajj Packages</h3>
          <div className="grid gap-6 dt:grid-cols-3 dt:gap-7">
            {HAJJ_PACKAGES.map((pkg) => (
              <PackageCardLarge key={pkg.title} pkg={pkg} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Why rely — navy band */}
      <Section bg="navy" className="relative overflow-hidden py-14 dt:py-20">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-28 h-[360px] w-[360px] rounded-full border border-gold/15" />
        <Container>
          <div className="mx-auto mb-10 max-w-[800px] text-center">
            <Eyebrow tone="white" className="mb-4">Why choose us</Eyebrow>
            <AccentHeading as="h2" before="Why Rely on Shery Travels for Hajj Services in the " accent="USA" className="text-[26px] leading-tight text-white dt:text-[36px]" />
          </div>
          <div className="grid gap-5 dt:grid-cols-2 dt:gap-7">
            {WHY.map(({ Icon, title, body }) => (
              <div key={title} className="card-hover flex gap-5 rounded-2xl border border-white/10 bg-white/[0.06] p-7">
                <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl border-[1.5px] border-gold/60 text-gold">
                  <Icon size={26} />
                </span>
                <div>
                  <h3 className="mb-2 font-serif text-[18px] font-bold text-white">{title}</h3>
                  <p className="text-[14.5px] font-light leading-relaxed text-white/75">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Suggestions — explore more packages (right after Why choose us) */}
      <PackagesShowcase
        eyebrow="Keep exploring"
        headingBefore="Explore more "
        headingAccent="packages"
        description="Browse other Umrah and Hajj packages — flights, visa, hotels near the Haram and transport, all arranged for you."
        bg="ice"
      />

      {/* Transparent journey — text + image */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div>
            <Eyebrow align="left" className="mb-4">Transparency</Eyebrow>
            <AccentHeading as="h2" before="Transparent Journey at Every Turn. From Planning to " accent="Return" className="text-[24px] leading-tight text-navy dt:text-[32px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80">
              Your journey begins with us the moment you contact us. From personalized consultation to post-travel follow-up, we are with you every step of the way. During Hajj, our team in Saudi Arabia provides 24/7 assistance so that you are never alone in unfamiliar territory.
            </p>
            <p className="mt-3 text-[15.5px] font-light leading-[1.7] text-navy/80">
              We answer all your Hajj-related queries about lost items or any follow-ups needed.
            </p>
          </div>
          <div className="relative h-[320px] w-full overflow-hidden rounded-2xl bg-lightblue shadow-[0_30px_60px_-26px_rgba(26,62,110,0.45)] dt:h-[420px]">
            <Image src="/images/hajj/usa-transparent.webp" alt="24/7 support throughout your Hajj journey" fill sizes="(max-width:900px) 100vw, 45vw" className="object-cover" />
          </div>
        </Container>
      </Section>

      {/* Designed for every US Muslim — image + text with audience list */}
      <Section bg="ice" className="py-14 dt:py-20">
        <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="relative order-2 h-[340px] w-full overflow-hidden rounded-2xl bg-lightblue shadow-[0_30px_60px_-26px_rgba(26,62,110,0.45)] dt:order-1 dt:h-[500px]">
            <Image src="/images/hajj/usa-everyone.webp" alt="Hajj packages for every U.S. Muslim" fill sizes="(max-width:900px) 100vw, 45vw" className="object-cover" />
          </div>
          <div className="order-1 dt:order-2">
            <Eyebrow align="left" className="mb-4">For everyone</Eyebrow>
            <AccentHeading as="h2" before="Hajj Package Designed for Every U.S. " accent="Muslim" className="text-[24px] leading-tight text-navy dt:text-[34px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-navy/80">
              Whether you are a young American Muslim, a professional, an elderly couple, someone who wants to travel with their family, or even solo women travelers, we accommodate all of you.
            </p>
            <p className="mt-3 text-[15.5px] font-light leading-[1.7] text-navy/80">
              Here you can look for basic Hajj packages or a luxury Hajj package with added comfort, as per your affordability. Our hajj services are designed with options for:
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {AUDIENCES.map((a) => (
                <li key={a} className="flex items-start gap-2.5 rounded-xl border border-navy/10 bg-white px-4 py-3 text-[14.5px] font-medium text-navy">
                  <Check size={17} className="mt-0.5 flex-none text-gold" /> {a}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Essential documents — numbered */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <Eyebrow className="mb-4">Before you travel</Eyebrow>
            <AccentHeading as="h2" before="Essential Travel Documents for a Smooth Hajj " accent="Journey" className="text-[26px] leading-tight text-navy dt:text-[36px]" />
          </div>
          <div className="grid gap-5 dt:grid-cols-2 dt:gap-7">
            {DOCUMENTS.map((d, i) => (
              <div key={d.title} className="card-hover relative overflow-hidden rounded-2xl border border-navy/10 bg-ice p-7">
                <span className="pointer-events-none absolute -right-2 -top-3 font-serif text-[64px] font-bold leading-none text-gold/15" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="relative mb-2 font-serif text-[19px] font-bold text-navy">{d.title}</h3>
                <p className="relative text-[14.5px] font-light leading-relaxed text-navy/75">{d.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Guided group — navy band */}
      <Section bg="navy" className="relative overflow-hidden py-14 dt:py-20">
        <div aria-hidden className="pointer-events-none absolute -left-24 -bottom-24 h-[320px] w-[320px] rounded-full border border-gold/15" />
        <Container className="mx-auto max-w-[800px] text-center">
          <Eyebrow tone="white" className="mb-4">Community</Eyebrow>
          <AccentHeading as="h2" before="Be Part of a Guided Hajj " accent="Group" className="text-[26px] leading-tight text-white dt:text-[36px]" />
          <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-white/80">
            The best part of Hajj is the sense of formation and unity. With Shery Travels, you will not have to worry about being a solo pilgrim. Whether you are a solo woman or man planning your first-ever Hajj, we foster the sense of community from the streets of the U.S. to the roads of Makkah and Madinah.
          </p>
          <p className="mt-3 text-[15.5px] font-light leading-[1.7] text-white/80">
            You will share accommodation, meals, and create memorable moments with peers, reflecting your Hajj journey as a group. It’s time to connect, learn, and stay spiritually aligned with your brothers and sisters in arms.
          </p>
          <div className="mt-7"><InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton></div>
        </Container>
      </Section>

      {/* FAQ */}
      <FaqAccordion
        intro="Find answers to common questions about our transportation, Umrah and Hajj services, documentation, customization options, or support during your pilgrimage."
        items={FAQ}
      />

      {/* Inquiry */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container className="grid items-start gap-10 dt:grid-cols-2 dt:gap-16">
          <div>
            <Eyebrow align="left" className="mb-4">Get in touch</Eyebrow>
            <AccentHeading as="h2" before="Plan your Hajj from the " accent="USA" className="text-[28px] leading-tight text-navy dt:text-[40px]" />
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
