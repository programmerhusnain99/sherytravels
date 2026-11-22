import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { ContactForm } from "@/components/inquiry/ContactForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { WHY, HIGHLIGHTS, FAQ } from "@/data/umrah/packages";

/**
 * The shared lower half of the Umrah packages page — reused by the index and
 * every tier page: "Why choose us" (navy), spiritual highlights, FAQ, and the
 * contact form.
 */
export function UmrahPackagesCommon({ crumb = "Umrah" }: { crumb?: string }) {
  return (
    <>
      {/* Why choose us — navy, numbered feature cards */}
      <Section bg="navy" className="relative overflow-hidden py-12 dt:py-16">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-24 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(219,183,37,0.14),transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -left-24 -bottom-24 hidden h-[340px] w-[340px] rounded-full border border-gold/15 dt:block" />
        <Container className="relative">
          <div className="mx-auto mb-10 max-w-[760px] text-center dt:mb-12">
            <Eyebrow align="center" tone="white" className="mb-4">Why choose us</Eyebrow>
            <AccentHeading as="h2" before="Why Choose Us for Your Umrah " accent="Journey" className="text-[27px] leading-tight text-white dt:text-[38px]" />
            <p className="mx-auto mt-4 max-w-[600px] text-[15.5px] font-light leading-relaxed text-white/75">
              A dedicated team, trusted partners and years of experience — so every part of your pilgrimage is in safe, caring hands.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 dt:grid-cols-4 dt:gap-6">
            {WHY.map(({ Icon, title, body }, i) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition-colors hover:border-gold/40"
              >
                <span aria-hidden className="pointer-events-none absolute -right-1 -top-3 font-serif text-[64px] font-bold leading-none text-white/[0.06]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold/0 via-gold to-gold/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative mb-4 grid h-14 w-14 place-items-center rounded-2xl border-[1.5px] border-gold/50 text-gold">
                  <Icon size={26} />
                </span>
                <h3 className="relative mb-2 font-serif text-[17px] font-bold text-white">{title}</h3>
                <p className="relative text-[13.5px] font-light leading-relaxed text-white/70">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Spiritual highlights — numbered */}
      <Section bg="white" className="py-10 dt:py-14">
        <Container>
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <Eyebrow className="mb-4">What&apos;s included</Eyebrow>
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

      {/* FAQ */}
      <FaqAccordion
        intro="Find answers to common questions about our Umrah packages, visas, room options and support during your pilgrimage."
        items={FAQ}
      />

      {/* Inquiry */}
      <Section bg="white" className="py-10 dt:py-14">
        <Container className="grid items-start gap-10 dt:grid-cols-2 dt:gap-16">
          <div>
            <Eyebrow align="left" className="mb-4">Get in touch</Eyebrow>
            <AccentHeading as="h2" before="Plan Your " accent={crumb} className="text-[28px] leading-tight text-navy dt:text-[40px]" />
            <p className="mt-5 max-w-[460px] text-[16px] font-light leading-[1.7] text-navy/80">
              Tell us your dates and group size — a travel expert replies within 24 hours.
            </p>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </>
  );
}
