"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { buttonClasses } from "@/components/ui/button";
import { inputClasses, selectClasses, labelClasses, fieldWrapClasses } from "@/components/form/formStyles";

/** Hero enquiry card. Desktop: 5-field row. Mobile: Journey + Phone only. */
export function HeroEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-5 shadow-[0_30px_64px_-26px_rgba(26,62,110,0.4)] dt:p-7">
      {status === "success" ? (
        <div className="flex items-center gap-4 py-2">
          <div className="grid h-12 w-12 flex-none place-items-center rounded-full bg-lightblue text-navy">
            <Icon name="check" size={26} />
          </div>
          <div>
            <div className="font-serif text-[18px] font-bold text-navy">Enquiry sent</div>
            <div className="text-[13.5px] text-navy/75">A travel expert will reply within 24 hours.</div>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-4 flex flex-col gap-1 dt:flex-row dt:items-baseline dt:justify-between">
            <div className="font-serif text-[18px] font-bold text-navy dt:text-[19px]">Plan your journey</div>
            <div className="text-[13px] text-navy/80">A travel expert replies within 24 hours</div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("success");
            }}
            className="flex flex-col gap-3 dt:grid dt:grid-cols-[1.05fr_1fr_0.8fr_1.15fr_auto] dt:items-end dt:gap-3.5"
          >
            <label className={fieldWrapClasses}>
              <span className={labelClasses}>Journey</span>
              <select className={selectClasses} defaultValue="Umrah Package" aria-label="Journey">
                <option>Umrah Package</option>
                <option>Hajj Package</option>
                <option>Transport only</option>
              </select>
            </label>

            <label className={`${fieldWrapClasses} hidden dt:flex`}>
              <span className={labelClasses}>Departure date</span>
              <input type="text" className={inputClasses} placeholder="Select date" />
            </label>

            <label className={`${fieldWrapClasses} hidden dt:flex`}>
              <span className={labelClasses}>Travellers</span>
              <input type="text" className={inputClasses} placeholder="2 adults" />
            </label>

            <label className={fieldWrapClasses}>
              <span className={labelClasses}>Phone number</span>
              <input type="tel" className={inputClasses} placeholder="+1 667 000 0000" />
            </label>

            <button type="submit" className={buttonClasses({ variant: "gold", size: "md", className: "w-full dt:w-auto dt:py-3.5" })}>
              Send Enquiry
            </button>
          </form>
        </>
      )}
    </div>
  );
}
