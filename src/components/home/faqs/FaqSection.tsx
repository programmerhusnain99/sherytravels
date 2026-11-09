import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";

// TODO(client): replace with exact answers from the live FAQ pages
const FAQS = [
  {
    q: "Which documents do I need for Umrah?",
    a: "A passport valid for at least six months, your completed visa application, recent photographs, and proof of required vaccinations. We handle the Umrah visa process on your behalf.",
  },
  {
    q: "Can women travel alone for Hajj?",
    a: "Yes. Current Saudi policy allows women to perform Hajj and Umrah in an organized group without a Mehram. We arrange dedicated group departures with on-ground support throughout.",
  },
  {
    q: "How far in advance should I book?",
    a: "For Umrah, book 4–6 weeks ahead — earlier for Ramadan, when seats and hotels fill quickly. For Hajj, book several months in advance, as quotas and flights sell out well before the season.",
  },
  {
    q: "What is included in the packages?",
    a: "Return flights, visa processing, hotels near the Haram, inter-city transfers, and guided ziyarat in Makkah and Madinah. Meal plans and hotel tier vary by package — we confirm the details before you book.",
  },
  {
    q: "Do you provide transportation between cities?",
    a: "Yes. We provide 24/7 air-conditioned transfers between Jeddah, Makkah, and Madinah — private cars, shared vans, or full coaches, matched to your group size.",
  },
  {
    q: "How do I pay for my trip?",
    a: "Payments are made securely online. A deposit reserves your package and the balance is due before departure. Instalment plans are available on most packages — just ask your travel expert.",
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
