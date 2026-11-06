"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { buttonClasses } from "@/components/ui/button";
import { inputClasses, selectClasses, labelClasses, fieldWrapClasses } from "@/components/form/formStyles";

/**
 * Reusable inquiry form (General / Transportation / Package) used on the
 * About and Contact pages — mirrors the 3 inquiry types from the live site.
 */
export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-navy/10 bg-white p-8 text-center shadow-[0_30px_64px_-26px_rgba(26,62,110,0.3)]">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-lightblue text-navy">
          <Icon name="check" size={28} />
        </div>
        <h3 className="font-serif text-[20px] font-bold text-navy">Thank you</h3>
        <p className="mx-auto mt-2 max-w-[340px] text-[14px] text-navy/75">
          Your inquiry has been received. A travel expert will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("success");
      }}
      className={`flex flex-col gap-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_30px_64px_-26px_rgba(26,62,110,0.3)] dt:p-8 ${compact ? "" : ""}`}
    >
      <div className={fieldWrapClasses}>
        <label htmlFor="cf-type" className={labelClasses}>Inquiry type</label>
        <select id="cf-type" name="type" className={selectClasses} defaultValue="General Inquiry">
          <option>General Inquiry</option>
          <option>Transportation Inquiry</option>
          <option>Package Inquiry</option>
        </select>
      </div>

      <div className="grid gap-4 dt:grid-cols-2">
        <div className={fieldWrapClasses}>
          <label htmlFor="cf-name" className={labelClasses}>Your Name</label>
          <input id="cf-name" name="name" required className={inputClasses} placeholder="Full name" />
        </div>
        <div className={fieldWrapClasses}>
          <label htmlFor="cf-phone" className={labelClasses}>Phone</label>
          <input id="cf-phone" name="phone" type="tel" required className={inputClasses} placeholder="+1 667 000 0000" />
        </div>
      </div>

      <div className={fieldWrapClasses}>
        <label htmlFor="cf-email" className={labelClasses}>Email</label>
        <input id="cf-email" name="email" type="email" className={inputClasses} placeholder="you@example.com" />
      </div>

      <div className={fieldWrapClasses}>
        <label htmlFor="cf-message" className={labelClasses}>Message</label>
        <textarea id="cf-message" name="message" rows={compact ? 3 : 4} className={`${inputClasses} resize-none`} placeholder="How can we help with your pilgrimage?" />
      </div>

      <button type="submit" className={buttonClasses({ variant: "gold", size: "lg", className: "mt-1 w-full" })}>
        Send Inquiry
      </button>
    </form>
  );
}
