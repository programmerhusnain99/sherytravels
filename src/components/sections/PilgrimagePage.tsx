import Image from "next/image";
import {
  Gem,
  Wallet,
  MoonStar,
  SlidersHorizontal,
  Accessibility,
  GraduationCap,
  Users,
  User,
  type LucideIcon,
} from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { InquireButton } from "@/components/inquiry/InquireButton";
import { ContactForm } from "@/components/inquiry/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { FaqAccordion, type Faq } from "./FaqAccordion";

/** Icon keys referenced from page data → lucide components. */
const ICONS: Record<string, LucideIcon> = {
  gem: Gem,
  wallet: Wallet,
  moon: MoonStar,
  sliders: SlidersHorizontal,
  accessibility: Accessibility,
  graduation: GraduationCap,
  users: Users,
  user: User,
};

interface Heading {
  eyebrow: string;
  before: string;
  accent: string;
  after?: string;
}

export interface PilgrimagePageData {
  active: string;
  path: string;
  crumb: string;
  hero: { eyebrow: string; before: string; accent: string; after?: string; image: string; imageAlt: string };
  overview: Heading & { paragraphs: string[]; image: string; imageAlt: string };
  cards: Heading & { items: { icon: string; title: string; body: string }[] };
  explainer: Heading & { intro?: string; items: { title: string; body: string }[] };
  faq: { intro?: string; items: Faq[] };
  inquiry: { before: string; accent: string; after?: string; text: string };
}

export function PilgrimagePage({ data }: { data: PilgrimagePageData }) {
  return (
    <PageShell active={data.active}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: data.crumb, path: data.path },
        ])}
      />

      {/* Hero */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-12 dt:pt-16">
        {/* Decorative gold ring */}
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 hidden h-[460px] w-[460px] rounded-full border border-gold/15 dt:block" />
        <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="order-2 text-center dt:order-1 dt:text-left">
            <Eyebrow align="center" className="mb-5 dt:justify-start">
              {data.hero.eyebrow}
            </Eyebrow>
            <AccentHeading
              as="h1"
              before={data.hero.before}
              accent={data.hero.accent}
              after={data.hero.after}
              className="text-[34px] leading-[1.15] text-navy dt:text-[52px]"
            />
            <div className="mt-7">
              <InquireButton variant="gold" size="lg" className="rounded-lg">
                Inquire Now
              </InquireButton>
            </div>
          </div>
          <div className="relative order-1 flex justify-center dt:order-2">
            {/* Decorative arch outline + soft glow behind the photo */}
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-2 h-[380px] w-[330px] -translate-x-1/2 rounded-t-[165px] rounded-b-[18px] border border-navy/10 dt:h-[520px] dt:w-[470px] dt:rounded-t-[235px]" />
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.12),transparent_70%)]" />
            <div className="hero-float relative h-[380px] w-[300px] overflow-hidden rounded-t-[150px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[500px] dt:w-[430px]">
              <Image src={data.hero.image} alt={data.hero.imageAlt} fill sizes="(max-width:900px) 300px, 430px" priority className="object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Overview */}
      <Section bg="white" className="relative overflow-hidden py-14 dt:py-20">
        <Container className="grid items-center gap-10 dt:grid-cols-2 dt:gap-16">
          <div className="relative order-2 mx-auto dt:order-1 dt:w-full">
            {/* Decorative offset gold-outline frame */}
            <div aria-hidden className="pointer-events-none absolute -bottom-4 -right-4 hidden h-full w-full rounded-2xl border border-gold/30 dt:block" />
            <div className="relative mx-auto h-[400px] w-[320px] overflow-hidden rounded-2xl bg-lightblue shadow-[0_30px_60px_-26px_rgba(26,62,110,0.45)] dt:h-[460px] dt:w-full">
              <Image src={data.overview.image} alt={data.overview.imageAlt} fill sizes="(max-width:900px) 320px, 45vw" className="object-cover" />
            </div>
          </div>
          <div className="order-1 dt:order-2">
            <Eyebrow align="left" className="mb-4">{data.overview.eyebrow}</Eyebrow>
            <AccentHeading as="h2" before={data.overview.before} accent={data.overview.accent} after={data.overview.after} className="text-[28px] leading-[1.2] text-navy dt:text-[40px]" />
            <div className="mt-5 space-y-4">
              {data.overview.paragraphs.map((p, i) => (
                <p key={i} className="text-[15.5px] font-light leading-[1.7] text-navy/80 dt:text-[16.5px]">{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Cards grid */}
      <Section bg="ice" className="py-14 dt:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <Eyebrow className="mb-4">{data.cards.eyebrow}</Eyebrow>
            <AccentHeading as="h2" before={data.cards.before} accent={data.cards.accent} after={data.cards.after} className="text-[28px] leading-tight text-navy dt:text-[40px]" />
          </div>
          <div className="grid gap-5 dt:grid-cols-2 dt:gap-7">
            {data.cards.items.map((c) => {
              const Icon = ICONS[c.icon] ?? Gem;
              return (
                <div key={c.title} className="card-hover group flex gap-5 rounded-2xl border border-navy/10 bg-white p-7">
                  <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl border-[1.5px] border-gold bg-ice transition-colors duration-300 group-hover:bg-gold">
                    <Icon size={26} className="text-navy" />
                  </span>
                  <div>
                    <h3 className="mb-2 font-serif text-[19px] font-bold text-navy">{c.title}</h3>
                    <p className="text-[14.5px] font-light leading-relaxed text-navy/75">{c.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Explainer (numbered items) — navy contrast band */}
      <Section bg="navy" className="relative overflow-hidden py-14 dt:py-20">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-28 h-[360px] w-[360px] rounded-full border border-gold/15" />
        <div aria-hidden className="pointer-events-none absolute -left-24 bottom-0 h-[300px] w-[300px] rounded-full border border-gold/10" />
        <Container>
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <Eyebrow tone="white" className="mb-4">{data.explainer.eyebrow}</Eyebrow>
            <AccentHeading as="h2" before={data.explainer.before} accent={data.explainer.accent} after={data.explainer.after} className="text-[28px] leading-tight text-white dt:text-[40px]" />
            {data.explainer.intro && (
              <p className="mt-4 text-[15.5px] font-light leading-relaxed text-white/80">{data.explainer.intro}</p>
            )}
          </div>
          <div className="grid gap-5 dt:grid-cols-2 dt:gap-7">
            {data.explainer.items.map((it, i) => (
              <div key={it.title} className="card-hover relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-7">
                <span className="pointer-events-none absolute -right-2 -top-3 font-serif text-[64px] font-bold leading-none text-gold/25" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="relative mb-2 font-serif text-[20px] font-bold text-white">{it.title}</h3>
                <p className="relative text-[14.5px] font-light leading-relaxed text-white/75">{it.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <FaqAccordion intro={data.faq.intro} items={data.faq.items} />

      {/* Inquiry */}
      <Section bg="white" className="py-14 dt:py-20">
        <Container className="grid items-start gap-10 dt:grid-cols-2 dt:gap-16">
          <div>
            <Eyebrow align="left" className="mb-4">Get in touch</Eyebrow>
            <AccentHeading as="h2" before={data.inquiry.before} accent={data.inquiry.accent} after={data.inquiry.after} className="text-[28px] leading-tight text-navy dt:text-[40px]" />
            <p className="mt-5 max-w-[460px] text-[16px] font-light leading-[1.7] text-navy/80">{data.inquiry.text}</p>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </PageShell>
  );
}
