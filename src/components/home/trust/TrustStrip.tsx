import type { LucideIcon } from "lucide-react";
import { FileText, MapPin, BusFront, Headset, Lock } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

const ITEMS: { icon: LucideIcon; title: string; sub: string }[] = [
  { icon: FileText, title: "Umrah visa handled", sub: "We process your visa end to end" },
  { icon: MapPin, title: "Hotels near the Haram", sub: "Walking distance to the holy mosques" },
  { icon: BusFront, title: "Private transfers", sub: "Met on arrival, on time, every time" },
  { icon: Headset, title: "24/7 on-ground support", sub: "A local team throughout your trip" },
  { icon: Lock, title: "Secure payment", sub: "Pay safely, no hidden fees" },
];

/** Static trust strip: five reassurance items with gold icon tiles, on a light band. */
export function TrustStrip() {
  return (
    <Section bg="ice" className="relative overflow-hidden border-t border-navy/[0.06] py-10 dt:py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 -top-16 h-[220px] w-[220px] rounded-full border border-gold/15"
      />
      <Container>
        <ul className="relative grid grid-cols-1 gap-5 dt:grid-cols-5 dt:gap-6">
          {ITEMS.map((item) => {
            const Glyph = item.icon;
            return (
              <li key={item.title} className="flex items-center gap-3.5 dt:items-start">
                <span className="grid h-[46px] w-[46px] flex-none place-items-center rounded-[13px] bg-gold/15 ring-1 ring-gold/25">
                  <Glyph size={23} className="text-gold" />
                </span>
                <div>
                  <div className="text-[15px] font-semibold text-navy">{item.title}</div>
                  <div className="mt-0.5 text-[12.5px] font-light leading-snug text-navy/70">
                    {item.sub}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
