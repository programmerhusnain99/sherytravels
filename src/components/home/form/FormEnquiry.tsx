"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { buttonClasses } from "@/components/ui/button";
import {
  inputClasses,
  selectClasses,
  labelClasses,
  fieldWrapClasses,
} from "@/components/form/formStyles";

const FROM_CITIES = [
  "New York",
  "Chicago",
  "Los Angeles",
  "Washington DC",
  "Dallas",
  "Houston",
  "Atlanta",
];

const EMPTY = {
  name: "",
  phone: "",
  dates: "",
  from: "",
  persons: "",
  message: "",
};

/**
 * Homepage enquiry form. Mirrors InquiryModal's controlled-form + success-state
 * pattern. Mobile: solid white, stacked fields. Desktop: frosted card, 2-col rows.
 */
export function FormEnquiry() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [values, setValues] = useState(EMPTY);

  const set = (key: keyof typeof EMPTY) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setValues((v) => ({ ...v, [key]: e.target.value }));

  return (
    <div className="bg-white p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] dt:rounded-[22px] dt:bg-white/95 dt:p-9 dt:backdrop-blur-md">
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
        <>
          <h3 className="font-serif text-[22px] font-bold leading-tight text-navy dt:text-[24px]">
            Inquire Now
          </h3>
          <p className="mt-1.5 text-[14px] text-navy/75">We&apos;ll get back within 24 hours</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("success");
            }}
            className="mt-6 flex flex-col gap-4"
          >
            {/* Row 1 — Name / Phone */}
            <div className="grid grid-cols-1 gap-4 dt:grid-cols-2">
              <label className={fieldWrapClasses}>
                <span className={labelClasses}>Your Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  value={values.name}
                  onChange={set("name")}
                  className={inputClasses}
                  placeholder="Full name"
                />
              </label>
              <label className={fieldWrapClasses}>
                <span className={labelClasses}>Phone Number</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  value={values.phone}
                  onChange={set("phone")}
                  className={inputClasses}
                  placeholder="+1 667 000 0000"
                />
              </label>
            </div>

            {/* Row 2 — Travel dates / Persons */}
            <div className="grid grid-cols-2 gap-4">
              <label className={fieldWrapClasses}>
                <span className={labelClasses}>Travel Dates</span>
                <input
                  name="dates"
                  type="text"
                  value={values.dates}
                  onChange={set("dates")}
                  className={inputClasses}
                  placeholder="Select dates"
                />
              </label>
              <label className={fieldWrapClasses}>
                <span className={labelClasses}>Persons</span>
                <input
                  name="persons"
                  type="text"
                  value={values.persons}
                  onChange={set("persons")}
                  className={inputClasses}
                  placeholder="2 adults"
                />
              </label>
            </div>

            {/* From */}
            <label className={fieldWrapClasses}>
              <span className={labelClasses}>Travelling From</span>
              <select
                name="from"
                value={values.from}
                onChange={set("from")}
                className={selectClasses}
              >
                <option value="">Select city</option>
                {FROM_CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>

            {/* Message */}
            <label className={fieldWrapClasses}>
              <span className={labelClasses}>Message</span>
              <textarea
                name="message"
                rows={3}
                value={values.message}
                onChange={set("message")}
                className={`${inputClasses} resize-none`}
                placeholder="Tell us about your journey plans..."
              />
            </label>

            <button
              type="submit"
              className={buttonClasses({
                variant: "gold",
                size: "lg",
                className: "mt-1 w-full uppercase tracking-[0.06em]",
              })}
            >
              Send Inquiry
            </button>
          </form>
        </>
      )}
    </div>
  );
}
