import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AccentHeading } from "@/components/ui/AccentHeading";

export interface Faq {
  q: string;
  a: string;
}

/**
 * Reusable FAQ section — native <details>/<summary> accordion (zero JS).
 * First item open by default. Used on service pages (Umrah, Hajj, …).
 */
export function FaqAccordion({ intro, items }: { intro?: string; items: Faq[] }) {
  return (
    <section className="bg-ice py-14 dt:py-20">
      <Container>
        <div className="mx-auto mb-10 max-w-[720px] text-center">
          <Eyebrow className="mb-4">Common questions</Eyebrow>
          <AccentHeading
            as="h2"
            before="Frequently Asked "
            accent="Questions"
            className="text-[28px] leading-tight text-navy dt:text-[42px]"
          />
          {intro && (
            <p className="mt-4 text-[15.5px] font-light leading-relaxed text-navy/75 dt:text-[16.5px]">
              {intro}
            </p>
          )}
        </div>

        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-x-[52px] dt:grid-cols-2">
          {items.map((item, i) => (
            <details
              key={item.q}
              open={i === 0}
              className="group border-b border-navy/10 py-2"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 [&::-webkit-details-marker]:hidden">
                <span className="font-serif text-[16.5px] font-bold text-navy dt:text-[18px]">
                  {item.q}
                </span>
                <ChevronDown
                  size={22}
                  className="flex-none text-gold transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                />
              </summary>
              <p className="pb-4 text-[14.5px] font-light leading-relaxed text-navy/75">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
