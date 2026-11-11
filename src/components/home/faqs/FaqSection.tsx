import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";

// Content verbatim from the live site's homepage FAQ.
const FAQS = [
  {
    q: "What payment methods do you accept?",
    a: "We accept payment via multiple mediums, including credit and debit cards, bank transfers, and online payment options, to make it easier for you.",
  },
  {
    q: "Can I customize my travel package?",
    a: "Absolutely. We offer customizable packages for Hajj and Umrah to suit your specific needs and preferences.",
  },
  {
    q: "Do you assist during the pilgrimage?",
    a: "Yes, our team offers on-ground support to ensure your journey is smooth and worry-free.",
  },
  {
    q: "Are there Hajj and Umrah packages available during Ramadan?",
    a: "Yes, we offer special packages for Hajj and Umrah, customized for the Holy Month of Ramadan.",
  },
];

/**
 * Homepage FAQ. Server-rendered, JavaScript-free accordion built on native
 * <details>/<summary>. First item open. Gold chevron rotates on open.
 */
export function FaqSection() {
  return (
    <Section bg="ice" className="py-16 dt:py-22">
      <Container>
        {/* Header */}
        <div className="mx-auto mb-10 max-w-[700px] text-center dt:mb-12">
          <Eyebrow align="center" className="mb-4">
            Common questions
          </Eyebrow>
          <AccentHeading
            as="h2"
            before="Frequently Asked "
            accent="Questions"
            className="text-[28px] leading-[1.22] text-navy dt:text-[42px] dt:leading-[1.16]"
          />
          <p className="mx-auto mt-4 max-w-[640px] text-[15.5px] font-light leading-[1.65] text-navy/75">
            Find answers to common questions about our transportation, Umrah and Hajj services,
            documentation, customization options, or support during your pilgrimage.
          </p>
        </div>

        {/* Accordion — single column on mobile, two columns on desktop */}
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-x-[52px] dt:grid-cols-2">
          {FAQS.map((item, i) => (
            <details
              key={item.q}
              open={i === 0}
              className="group border-b border-navy/12 py-5"
            >
              <summary className="flex cursor-pointer list-none select-none items-center justify-between gap-4 font-serif text-[16px] font-bold leading-[1.36] text-navy [&::-webkit-details-marker]:hidden dt:text-[17px]">
                <span>{item.q}</span>
                <ChevronDown
                  size={22}
                  aria-hidden
                  className="shrink-0 text-gold transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                />
              </summary>
              <p className="mt-3 pr-9 text-[14.5px] font-light leading-[1.6] text-navy/85 dt:text-[15px] dt:leading-[1.62]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
