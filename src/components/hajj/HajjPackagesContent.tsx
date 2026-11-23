import Image from "next/image";
import { FileCheck2, Users, HeartHandshake, Handshake, PackageCheck, UserCheck, Syringe, PlaneTakeoff, Check } from "lucide-react";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { InquireButton } from "@/components/inquiry/InquireButton";
import { FormSection } from "@/components/home/form/FormSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PackageGrid } from "@/components/home/packages/PackageGrid";
import { PackagesShowcase } from "@/components/home/packages/PackagesShowcase";
import { HAJJ_PACKAGES } from "@/data/home/packageCards";

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
  { Icon: FileCheck2, title: "Valid Passport", body: "As an American Muslim, you will need a U.S. passport with a minimum validity of 6 months for your travel plans. Shery Travel assists in securing the Hajj visa with proper documentation that complies with Saudi government regulations." },
  { Icon: UserCheck, title: "Mahram Proof for Female Pilgrims", body: "According to Hajj guidance by the Saudi government, female pilgrims traveling alone must provide proof of a Mahram relationship (such as a birth certificate). Our team ensures that they collect the necessary documents." },
  { Icon: Syringe, title: "Health Vaccinations", body: "All pilgrims must present proof of COVID-19 vaccination (and any other required vaccines, if appropriate), according to Saudi officials. We’ll keep you updated on the most recent health regulations and assist you in meeting them on schedule." },
  { Icon: PlaneTakeoff, title: "Flight Tickets and Hotel Confirmations", body: "You will need confirmed hotel reservations and round-trip airline tickets in order to finish your Hajj application. All Shery trip packages include them, and we offer official documents to back up your trip and visa applications." },
];

const FAQ = [
  { q: "What is included in the Hajj package for the USA?", a: "All USA Hajj packages include a round-trip fare, visa processing, hotel accommodation, meals, and local transportation, along with proper guidance through every step." },
  { q: "Can I travel with my family from the USA?", a: "Yes, you can choose to travel with a group of friends and family with the desired package with shared departure dates." },
  { q: "Do you provide ground transportation during Hajj?", a: "Yes. At Shery Travels, we are keen to provide an air-conditioned mode of transportation for all transfers, i.e, from the airport to hotels and between holy sites like Mina, Arafat, and Muzdalifah." },
  { q: "Are There Family-Friendly Packages From NYC?", a: "Yes, our packages include convenient accommodations near Haram and easy transport for families." },
];

/** Shared Hajj Packages page body (legacy /hajj/usa-packages/ + new /hajj-packages/). */
export function HajjPackagesContent({ breadcrumb }: { breadcrumb: { name: string; path: string }[] }) {
  return (
    <PageShell active="/hajj-packages/" cta={false}>
      <JsonLd data={breadcrumbSchema(breadcrumb)} />

      {/* Hero */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-10 pb-8 dt:pt-12 dt:pb-10">
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 hidden h-[460px] w-[460px] rounded-full border border-gold/15 dt:block" />
        <Container className="flex flex-col items-center gap-6 text-center">
          <div className="order-1 max-w-[680px] text-center">
            <AccentHeading as="h1" before="Hajj Packages: From USA to the Heart of " accent="Makkah" className="text-[30px] leading-[1.18] text-navy dt:text-[46px]" />
          </div>
          <div className="order-3 max-w-[680px] text-center">
            <p className="text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
              Hajj is one in a lifetime journey that can become even more memorable and easier with premium services and smooth transportation. Exclusively catered to the Muslims living in the United States.
            </p>
            <div className="mt-7"><InquireButton variant="gold" size="lg" className="rounded-lg">Inquire Now</InquireButton></div>
          </div>
          <div className="relative order-2 flex justify-center">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 hidden h-[500px] w-[450px] -translate-x-1/2 rounded-t-[225px] rounded-b-[18px] border border-navy/10 dt:block" />
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[360px] w-[300px] overflow-hidden rounded-t-[150px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[480px] dt:w-[420px]">
              <Image src="/images/hajj/usa-packages-hero.webp" alt="Hajj packages for U.S. pilgrims" fill sizes="(max-width:900px) 300px, 420px" priority className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Trusted intro + package rooms */}
      <Section bg="ice" className="py-10 dt:py-14">
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

          <h3 className="mb-8 text-center font-serif text-[22px] font-bold text-navy dt:text-[26px]">Our USA Hajj Packages</h3>
          <PackageGrid cards={HAJJ_PACKAGES} initial={3} step={3} />
        </Container>
      </Section>

      {/* Why rely — navy band */}
      <Section bg="navy" className="relative overflow-hidden py-10 dt:py-14">
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

      {/* Explore more packages */}
      <PackagesShowcase
        eyebrow="Keep exploring"
        headingBefore="Explore more "
        headingAccent="packages"
        description="Browse other Umrah and Hajj packages — flights, visa, hotels near the Haram and transport, all arranged for you."
        bg="lightblue"
      />

      {/* Designed for every US Muslim — dark-blue band, image + text with audience list */}
      <Section bg="navy" className="relative overflow-hidden py-11 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-24 hidden h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.14),transparent_70%)] dt:block" />
        <div aria-hidden className="pointer-events-none absolute -left-24 -bottom-24 hidden h-[360px] w-[360px] rounded-full border border-gold/15 dt:block" />
        <Container className="relative grid items-center gap-11 dt:grid-cols-2 dt:gap-16">
          <div className="relative order-2 h-[340px] w-full overflow-hidden rounded-2xl bg-lightblue shadow-[0_44px_90px_-30px_rgba(0,0,0,0.6)] dt:order-1 dt:h-[500px]">
            <Image src="/images/hajj/usa-everyone.webp" alt="Hajj packages for every U.S. Muslim" fill sizes="(max-width:900px) 100vw, 45vw" className="object-cover" />
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(26,62,110,0.4)_100%)]" />
          </div>
          <div className="order-1 dt:order-2">
            <Eyebrow align="left" tone="white" className="mb-4">For everyone</Eyebrow>
            <AccentHeading as="h2" before="Hajj Package Designed for Every U.S. " accent="Muslim" className="text-[24px] leading-tight text-white dt:text-[34px]" />
            <p className="mt-5 text-[15.5px] font-light leading-[1.7] text-white/80">
              Whether you are a young American Muslim, a professional, an elderly couple, someone who wants to travel with their family, or even solo women travelers, we accommodate all of you.
            </p>
            <p className="mt-3 text-[15.5px] font-light leading-[1.7] text-white/70">
              Here you can look for basic Hajj packages or a luxury Hajj package with added comfort, as per your affordability. Our hajj services are designed with options for:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {AUDIENCES.map((a) => (
                <li key={a} className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-[14px] font-medium text-white/90">
                  <Check size={17} className="mt-0.5 flex-none text-gold" /> {a}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Transparent journey — text + image */}
      <Section bg="white" className="py-10 dt:py-14">
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

      {/* Guided group — navy band */}
      <Section bg="navy" className="relative overflow-hidden py-10 dt:py-14">
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

      {/* Essential documents — glorified premium cards */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice via-white to-ice py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute -left-28 -top-20 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)] blur-2xl" />
        <div aria-hidden className="pointer-events-none absolute -right-28 bottom-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(47,128,237,0.1),transparent_70%)] blur-2xl" />
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-16 hidden h-[620px] w-[620px] -translate-x-1/2 rounded-full border border-navy/[0.05] dt:block" />
        <Container className="relative">
          <div className="mx-auto mb-11 max-w-[800px] text-center dt:mb-14">
            <Eyebrow align="center" className="mb-4">Before you travel</Eyebrow>
            <AccentHeading as="h2" before="Essential Travel Documents for a Smooth Hajj " accent="Journey" className="text-[27px] leading-tight text-navy dt:text-[38px]" />
            <p className="mx-auto mt-4 max-w-[640px] text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">
              Here is everything you&apos;ll need to travel — and the good news is we prepare and verify each one with you, so nothing holds up your Hajj application.
            </p>
          </div>

          <div className="mx-auto grid max-w-[1000px] gap-5 dt:grid-cols-2 dt:gap-6">
            {DOCUMENTS.map(({ Icon, title, body }, i) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-[22px] border border-navy/10 bg-white p-6 shadow-[0_26px_56px_-34px_rgba(26,62,110,0.5)] transition-transform duration-300 hover:-translate-y-1.5 dt:p-7"
              >
                <span aria-hidden className="pointer-events-none absolute -right-2 -top-5 font-serif text-[86px] font-bold leading-none text-navy/[0.04]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="absolute inset-x-7 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-gold/0 via-gold to-gold/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start gap-5">
                  <span className="grid h-16 w-16 flex-none place-items-center rounded-2xl bg-gradient-to-br from-gold to-[#b4871a] text-navy shadow-[0_16px_34px_-12px_rgba(219,183,37,0.65)]">
                    <Icon size={28} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-serif text-[19px] font-bold text-navy">{title}</h3>
                    <p className="mt-2 text-[14px] font-light leading-relaxed text-navy/75">{body}</p>
                    <span className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-navy/5 px-3 py-1 text-[12px] font-semibold text-navy">
                      <Check size={13} className="text-gold" /> We prepare &amp; verify this for you
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Enquiry CTA (homepage design) */}
      <FormSection />

      {/* FAQ */}
      <FaqAccordion
        intro="Find answers to common questions about our transportation, Umrah and Hajj services, documentation, customization options, or support during your pilgrimage."
        items={FAQ}
      />
    </PageShell>
  );
}
