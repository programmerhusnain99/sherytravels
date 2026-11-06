/** Shared form field styling. 16px text on mobile prevents iOS zoom-on-focus. */
export const inputClasses =
  "w-full rounded-lg border-[1.5px] border-navy/15 bg-white px-3.5 py-3 text-[16px] dt:text-[15px] font-medium text-navy outline-none transition-colors focus:border-navy/40 placeholder:text-navy/40";

export const selectClasses = `${inputClasses} appearance-none bg-no-repeat`;

export const labelClasses = "text-[12.5px] font-medium text-navy/70";

export const fieldWrapClasses = "flex flex-col gap-1.5";
