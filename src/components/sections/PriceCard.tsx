import { Check } from "lucide-react";
import { InquireButton } from "@/components/inquiry/InquireButton";

/** Reusable pricing card (new design) for the package pages. */
export function PriceCard({
  badge,
  title,
  price,
  unit = "/pp",
  features,
  featured = false,
}: {
  badge: string;
  title: string;
  price: string;
  unit?: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`card-hover flex flex-col rounded-2xl border p-7 ${
        featured
          ? "border-gold bg-white shadow-[0_24px_54px_-24px_rgba(26,62,110,0.4)]"
          : "border-navy/10 bg-white"
      }`}
    >
      <span className="mb-4 inline-flex w-fit items-center rounded-full bg-navy/5 px-3 py-1 text-[11.5px] font-bold uppercase tracking-[0.1em] text-navy">
        {badge}
      </span>
      <h3 className="font-serif text-[22px] font-bold text-navy">{title}</h3>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="font-serif text-[34px] font-bold text-gold">{price}</span>
        <span className="text-[14px] font-medium text-navy/60">{unit}</span>
      </div>
      <ul className="mt-5 flex flex-1 flex-col gap-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[14px] text-navy/80">
            <Check size={17} className="mt-0.5 flex-none text-gold" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <InquireButton variant={featured ? "gold" : "navy"} size="md" className="mt-6 w-full rounded-lg">
        Inquire Now
      </InquireButton>
    </div>
  );
}
