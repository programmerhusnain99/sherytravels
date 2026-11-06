"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { buttonClasses } from "@/components/ui/button";
import { inputClasses, labelClasses, fieldWrapClasses } from "@/components/form/formStyles";

const COUNTRIES = [
  { flag: "🇺🇸", code: "+1" },
  { flag: "🇸🇦", code: "+966" },
  { flag: "🇬🇧", code: "+44" },
  { flag: "🇨🇦", code: "+1" },
  { flag: "🇵🇰", code: "+92" },
  { flag: "🇮🇳", code: "+91" },
  { flag: "🇧🇩", code: "+880" },
];

export function InquiryModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const closeRef = useRef<HTMLButtonElement>(null);

  // Enter/exit animation + mount lifecycle.
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      const r = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(r);
    }
    setShown(false);
    const t = setTimeout(() => {
      setMounted(false);
      setStatus("idle");
    }, 280);
    return () => clearTimeout(t);
  }, [isOpen]);

  // Esc to close + body scroll lock while mounted.
  useEffect(() => {
    if (!mounted) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [mounted, onClose]);

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Inquire now"
      className="fixed inset-0 z-[100] flex items-end justify-center dt:items-center"
    >
      {/* Backdrop */}
      <button
        aria-label="Close"
        tabIndex={-1}
        onClick={onClose}
        className={`absolute inset-0 bg-navy/55 backdrop-blur-[6px] transition-opacity duration-200 ${shown ? "opacity-100" : "opacity-0"}`}
      />
      {/* Panel: bottom sheet on mobile, centered card on desktop */}
      <div
        className={`relative w-full dt:w-[560px] max-h-[92dvh] overflow-y-auto rounded-t-3xl dt:rounded-3xl bg-white shadow-2xl transition-all duration-300 ease-out ${
          shown ? "translate-y-0 opacity-100 dt:scale-100" : "translate-y-full opacity-0 dt:translate-y-0 dt:scale-95"
        }`}
      >
        {/* Navy header */}
        <div className="relative overflow-hidden bg-navy px-6 py-7 dt:px-8">
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-gold/30" aria-hidden />
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/30 dt:hidden" aria-hidden />
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-serif text-[22px] font-bold text-white">Inquire Now</h2>
              <p className="mt-1 text-[13.5px] text-white/75">
                A travel expert replies within 24 hours.
              </p>
            </div>
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close"
              className="grid h-10 w-10 flex-none place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <Icon name="close" size={20} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6 dt:px-8">
          {status === "success" ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-lightblue text-navy">
                <Icon name="check" size={28} />
              </div>
              <h3 className="font-serif text-[20px] font-bold text-navy">Thank you</h3>
              <p className="mx-auto mt-2 max-w-[340px] text-[14px] text-navy/75">
                Your inquiry has been received. A travel expert will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStatus("success");
              }}
              className="flex flex-col gap-4"
            >
              <div className={fieldWrapClasses}>
                <label htmlFor="iq-name" className={labelClasses}>Your Name</label>
                <input id="iq-name" name="name" required className={inputClasses} placeholder="Full name" />
              </div>

              <div className={fieldWrapClasses}>
                <label htmlFor="iq-phone" className={labelClasses}>Phone Number</label>
                <div className="flex gap-2">
                  <select aria-label="Country code" className={`${inputClasses} w-[92px] flex-none appearance-none px-2 text-center`} defaultValue="+1">
                    {COUNTRIES.map((c, i) => (
                      <option key={`${c.code}-${i}`} value={c.code}>{c.flag} {c.code}</option>
                    ))}
                  </select>
                  <input id="iq-phone" name="phone" type="tel" required className={inputClasses} placeholder="667 000 0000" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className={fieldWrapClasses}>
                  <label htmlFor="iq-dates" className={labelClasses}>Travel Dates</label>
                  <input id="iq-dates" name="dates" className={inputClasses} placeholder="Approx. dates" />
                </div>
                <div className={fieldWrapClasses}>
                  <label htmlFor="iq-persons" className={labelClasses}>Persons</label>
                  <input id="iq-persons" name="persons" className={inputClasses} placeholder="2 adults" />
                </div>
              </div>

              <div className={fieldWrapClasses}>
                <label htmlFor="iq-message" className={labelClasses}>Message</label>
                <textarea id="iq-message" name="message" rows={3} className={`${inputClasses} resize-none`} placeholder="Tell us about your plans" />
              </div>

              <button type="submit" className={buttonClasses({ variant: "gold", size: "lg", className: "w-full mt-1" })}>
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
