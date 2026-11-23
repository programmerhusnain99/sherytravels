"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Send, Check } from "lucide-react";
import { UMRAH_FIELDS, HAJJ_FIELDS, RIDE_FIELDS, HOTEL_FIELDS } from "@/data/customPackage";

const FIELD_SETS = {
  umrah: UMRAH_FIELDS,
  hajj: HAJJ_FIELDS,
  ride: RIDE_FIELDS,
  hotel: HOTEL_FIELDS,
} as const;

export type CustomPackageVariant = keyof typeof FIELD_SETS;

/**
 * "Customise Your … Package" — full-bleed image banner with an overlapping
 * multi-field request card. Reused across pages; title, description, image and
 * field set change per page while the style stays the same. The field set is
 * resolved here by `variant` (icon components can't cross the RSC boundary).
 */
export function CustomPackageForm({
  title,
  description,
  image,
  variant,
  accent,
}: {
  title: string;
  description: string;
  image: string;
  variant: CustomPackageVariant;
  /** Optional word in the title rendered in gold. */
  accent?: string;
}) {
  const fields = FIELD_SETS[variant];
  const [sent, setSent] = useState(false);
  const [a, setA] = useState(3);
  const [b, setB] = useState(8);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setA(2 + Math.floor(Math.random() * 7));
    setB(1 + Math.floor(Math.random() * 8));
  }, []);

  const heading = accent && title.includes(accent)
    ? (() => {
        const [before, after] = title.split(accent);
        return (
          <>
            {before}
            <span className="text-gold">{accent}</span>
            {after}
          </>
        );
      })()
    : title;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Number(answer) !== a + b) {
      setError(true);
      return;
    }
    setError(false);
    setSent(true);
  };

  const inputCls =
    "h-[46px] w-full rounded-lg border border-navy/10 bg-ice px-4 text-[13.5px] text-navy outline-none transition-colors placeholder:text-navy/45 focus:border-gold focus:bg-white";

  return (
    <section className="relative bg-white pt-4 pb-14 dt:pb-20">
      <div className="mx-auto w-full max-w-[1240px] px-5">
        <div className="relative">
          {/* Banner */}
          <div className="relative overflow-hidden rounded-[26px]">
            <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,62,110,0.82)_0%,rgba(26,62,110,0.45)_45%,rgba(26,62,110,0.72)_100%)]" />
            <div className="relative z-10 flex flex-col gap-5 px-7 pt-12 pb-36 dt:flex-row dt:items-end dt:justify-between dt:px-12 dt:pt-16 dt:pb-44">
              <h2 className="max-w-[460px] font-serif text-[30px] font-bold leading-[1.12] text-white dt:text-[40px]">
                {heading}
              </h2>
              <p className="max-w-[380px] text-[14.5px] font-light leading-relaxed text-white/85 dt:text-right dt:text-[15px]">
                {description}
              </p>
            </div>
          </div>

          {/* Overlapping request card */}
          <div className="relative z-20 mx-2 -mt-28 rounded-2xl bg-white p-5 shadow-[0_34px_70px_-30px_rgba(26,62,110,0.5)] ring-1 ring-navy/5 dt:mx-6 dt:-mt-32 dt:p-7">
            {sent ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold to-[#b4871a] text-navy">
                  <Check size={28} />
                </div>
                <div>
                  <div className="font-serif text-[20px] font-bold text-navy">Request received</div>
                  <p className="mt-1 text-[14px] text-navy/70">A travel expert will contact you within 24 hours with a tailored quote.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="grid grid-cols-2 gap-3 dt:grid-cols-3">
                  {fields.map((f) => (
                    <div key={f.placeholder} className="relative">
                      {f.kind === "select" ? (
                        <>
                          <select defaultValue="" className={`${inputCls} appearance-none pr-10`} aria-label={f.placeholder}>
                            <option value="" disabled>{f.placeholder}</option>
                            {f.options?.map((o) => <option key={o}>{o}</option>)}
                          </select>
                          <ChevronDown size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-navy/40" aria-hidden />
                        </>
                      ) : (
                        <>
                          <input
                            type={f.kind === "date" ? "text" : f.kind}
                            placeholder={f.placeholder}
                            className={`${inputCls} pr-10`}
                            onFocus={f.kind === "date" ? (e) => (e.target.type = "date") : undefined}
                            onBlur={f.kind === "date" ? (e) => { if (!e.target.value) e.target.type = "text"; } : undefined}
                          />
                          <f.Icon size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-navy/40" aria-hidden />
                        </>
                      )}
                    </div>
                  ))}
                </div>

                {/* Special request + captcha + submit */}
                <div className="mt-3 flex flex-col gap-3 dt:flex-row">
                  <input type="text" placeholder="Type any special request here…" className={`${inputCls} flex-1`} />
                  <div className="flex gap-3 dt:w-[300px]">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        inputMode="numeric"
                        value={answer}
                        onChange={(e) => { setAnswer(e.target.value); setError(false); }}
                        placeholder="Answer"
                        aria-label={`What is ${a} plus ${b}?`}
                        className={`${inputCls} pr-14 ${error ? "border-red-400" : ""}`}
                      />
                      <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] font-bold text-navy/55">{a}+{b}</span>
                    </div>
                    <button
                      type="submit"
                      aria-label="Send request"
                      className="grid h-[46px] w-[46px] flex-none place-items-center rounded-full bg-gradient-to-br from-gold to-[#b4871a] text-navy shadow-[0_12px_26px_-10px_rgba(219,183,37,0.8)] transition-transform hover:-translate-y-0.5"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                </div>
                {error && <p className="mt-2 text-[12.5px] font-medium text-red-500">Please answer the question correctly.</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
