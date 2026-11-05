import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { FormEnquiry } from "./FormEnquiry";

const STATS = [
  { value: "10+", label: "Years of service" },
  { value: "1,000+", label: "Pilgrims guided" },
  { value: "24/7", label: "On-ground support" },
];

const CONTACTS = [
  { icon: Phone, label: "+1-667-439-1263", href: "tel:+16674391263" },
  { icon: Phone, label: "+966-58-384-2090", href: "tel:+966583842090" },
  { icon: Mail, label: "info@sherytravels.com", href: "mailto:info@sherytravels.com" },
];

/**
 * Contact / enquiry CTA. Full-bleed background photo with a navy gradient overlay.
 * Left column: eyebrow, heading, body, gold trust stats (+ desktop contact row).
 * Right column: the client enquiry form. Server-rendered copy for SEO.
 */
export function FormSection() {
  return (
    <Section bg="navy" className="relative overflow-hidden dt:min-h-[680px]">
      {/* Background photo + navy gradient (vertical on mobile, left-to-right on desktop) */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/home/home-form-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,62,110,0.88)_0%,rgba(26,62,110,0.94)_50%,rgba(26,62,110,0.98)_100%)] dt:bg-[linear-gradient(90deg,rgba(26,62,110,0.96)_0%,rgba(26,62,110,0.88)_38%,rgba(26,62,110,0.4)_70%,rgba(26,62,110,0.15)_100%)]" />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 py-12 dt:grid-cols-2 dt:gap-14 dt:py-20">
          {/* Left column — copy + stats */}
          <div className="text-center dt:text-left">
            <Eyebrow align="center" tone="white" className="dt:justify-start">
              Start your journey
            </Eyebrow>

            <AccentHeading
              as="h2"
              before="Your sacred journey is one "
              accent="conversation"
              after=" away"
              className="mt-5 text-[30px] leading-[1.2] text-white dt:text-[48px] dt:leading-[1.12]"
            />

            <p className="mx-auto mt-4 max-w-[300px] text-[15.5px] font-light leading-[1.62] text-white/90 dt:mx-0 dt:mt-5 dt:max-w-[460px] dt:text-[17.5px] dt:leading-[1.72]">
              Tell us your dates and preferences. A travel expert builds your proposal within 24
              hours — flights, hotels, ziyarat, everything.
            </p>

            {/* Gold trust stats */}
            <div className="mt-8 flex items-stretch justify-center gap-7 dt:justify-start dt:gap-10">
              {STATS.map((s, i) => (
                <div key={s.label} className="flex items-stretch gap-7 dt:gap-10">
                  {i > 0 && <div className="w-px bg-white/25" aria-hidden />}
                  <div className="text-center dt:text-left">
                    <div className="font-serif text-[30px] font-bold leading-none text-gold dt:text-[42px]">
                      {s.value}
                    </div>
                    <div className="mt-1.5 text-[12px] text-white/85 dt:text-[14px]">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop contact row */}
            <div className="mt-10 hidden items-center gap-5 dt:flex">
              {CONTACTS.map(({ icon: ContactIcon, label, href }, i) => (
                <div key={label} className="flex items-center gap-5">
                  {i > 0 && <div className="h-4 w-px bg-white/25" aria-hidden />}
                  <a
                    href={href}
                    className="flex items-center gap-2 text-[13.5px] font-semibold text-white transition-colors hover:text-gold"
                  >
                    <ContactIcon size={18} className="text-gold" aria-hidden />
                    {label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — enquiry form (edge-to-edge white on mobile) */}
          <div className="-mx-5 dt:mx-0">
            <FormEnquiry />
          </div>
        </div>
      </Container>
    </Section>
  );
}
