import Image from "next/image";
import { Check, CalendarDays, Info, Mail, Phone, MapPin } from "lucide-react";
import { breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { CONTACT_EMAIL } from "@/data/nav";

export interface PolicySub {
  title: string;
  items: string[];
}
export interface PolicySection {
  h: string;
  intro?: string;
  paragraphs?: string[];
  list?: string[];
  subs?: PolicySub[];
  /** Highlighted callout box. */
  note?: string;
}
export interface PolicyPageData {
  path: string;
  breadcrumbName: string;
  eyebrow?: string;
  headBefore: string;
  headAccent: string;
  lead: string[];
  updated: string;
  heroImage: string;
  heroImageAlt: string;
  sections: PolicySection[];
  contactIntro: string;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-col gap-2.5">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-navy/80">
          <Check size={17} className="mt-1 flex-none text-gold" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Reusable modern legal / policy page: centered hero with a "last updated"
 * chip, an image banner, a sticky section index (desktop) beside the content,
 * numbered sections, and a contact card. Server component (anchor-link TOC, no JS).
 */
export function PolicyPage({ data }: { data: PolicyPageData }) {
  const sections = data.sections.map((s, i) => ({ ...s, id: `section-${i + 1}`, n: String(i + 1).padStart(2, "0") }));

  return (
    <PageShell active={data.path}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: data.breadcrumbName, path: data.path },
        ])}
      />

      {/* Hero */}
      <Section bg="white" className="relative overflow-hidden bg-gradient-to-b from-ice to-white pt-10 pb-12 dt:pt-12 dt:pb-16">
        <div aria-hidden className="pointer-events-none absolute -left-28 -top-24 hidden h-[360px] w-[360px] rounded-full border border-gold/15 dt:block" />
        <div aria-hidden className="pointer-events-none absolute -right-24 top-16 hidden h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.1),transparent_70%)] dt:block" />
        <Container className="relative flex flex-col items-center text-center">
          <Eyebrow align="center">{data.eyebrow ?? "Legal"}</Eyebrow>
          <div className="relative mt-6 flex justify-center dt:mt-7">
            <div className="hero-float relative h-[330px] w-[290px] overflow-hidden rounded-t-[145px] rounded-b-[16px] bg-lightblue shadow-[0_34px_62px_-26px_rgba(26,62,110,0.5)] dt:h-[420px] dt:w-[380px] dt:rounded-t-[190px]">
              <Image src={data.heroImage} alt={data.heroImageAlt} fill priority sizes="(max-width:900px) 290px, 380px" className="object-cover" />
            </div>
          </div>
          <AccentHeading as="h1" before={data.headBefore} accent={data.headAccent} className="mt-8 text-[30px] leading-[1.16] text-navy dt:text-[44px]" />
          {data.lead[0] && (
            <p className="mx-auto mt-4 max-w-[680px] text-[16px] font-light leading-[1.7] text-navy/80 dt:text-[17px]">
              {data.lead[0]}
            </p>
          )}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-1.5 text-[13px] font-medium text-navy/70">
            <CalendarDays size={15} className="text-gold" />
            Last updated: {data.updated}
          </div>
        </Container>
      </Section>

      {/* Body: sticky index + content */}
      <Section bg="ice" className="pb-14 pt-12 dt:pb-20 dt:pt-16">
        <Container>
          <div className="grid gap-10 dt:grid-cols-[250px_1fr] dt:gap-14">
            {/* Section index — sticky on desktop */}
            <aside className="hidden dt:block">
              <div className="sticky top-24">
                <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-navy/50">On this page</p>
                <nav className="flex flex-col gap-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="group flex items-start gap-2.5 rounded-lg px-3 py-2 text-[13.5px] leading-snug text-navy/70 transition-colors hover:bg-ice hover:text-navy"
                    >
                      <span className="font-serif text-[12px] font-bold text-gold">{s.n}</span>
                      <span>{s.h}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="mx-auto max-w-[760px]">
              {data.lead.slice(1).map((p, i) => (
                <p key={i} className={`${i === 0 ? "" : "mt-4"} text-[15.5px] leading-[1.75] text-navy/80`}>{p}</p>
              ))}

              {sections.map((s) => (
                <section key={s.id} id={s.id} className="mt-11 scroll-mt-24 first:mt-0">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-gold/15 font-serif text-[15px] font-bold text-gold">
                      {s.n}
                    </span>
                    <h2 className="font-serif text-[21px] font-bold text-navy dt:text-[24px]">{s.h}</h2>
                  </div>

                  {s.intro && <p className="mt-4 text-[15.5px] leading-[1.75] text-navy/80">{s.intro}</p>}
                  {s.paragraphs?.map((p, i) => (
                    <p key={i} className="mt-3 text-[15.5px] leading-[1.75] text-navy/80">{p}</p>
                  ))}
                  {s.list && <Bullets items={s.list} />}
                  {s.subs?.map((sub) => (
                    <div key={sub.title} className="mt-4">
                      <h3 className="font-serif text-[17px] font-bold text-navy">{sub.title}</h3>
                      <Bullets items={sub.items} />
                    </div>
                  ))}
                  {s.note && (
                    <div className="mt-4 flex gap-3 rounded-xl border border-gold/30 border-l-4 border-l-gold bg-ice p-4">
                      <Info size={18} className="mt-0.5 flex-none text-gold" />
                      <p className="text-[14.5px] leading-relaxed text-navy/80">{s.note}</p>
                    </div>
                  )}
                </section>
              ))}

              {/* Contact card */}
              <section className="mt-12 rounded-2xl border border-navy/10 bg-navy p-7 text-white dt:p-9">
                <h2 className="font-serif text-[21px] font-bold text-white dt:text-[23px]">Questions? Get in touch</h2>
                <p className="mt-3 max-w-[560px] text-[15px] font-light leading-relaxed text-white/80">{data.contactIntro}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 transition-colors hover:border-gold/50">
                    <Mail size={18} className="flex-none text-gold" />
                    <span className="text-[14.5px] text-white">{CONTACT_EMAIL}</span>
                  </a>
                  <a href="tel:+16674391263" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 transition-colors hover:border-gold/50">
                    <Phone size={18} className="flex-none text-gold" />
                    <span className="text-[14.5px] text-white">+1 667-439-1263</span>
                  </a>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 sm:col-span-2">
                    <MapPin size={18} className="flex-none text-gold" />
                    <span className="text-[14.5px] text-white/85">419 East Cherry Hill Road, Reisterstown, MD 21136, USA</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
