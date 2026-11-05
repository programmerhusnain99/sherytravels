"use client";

import { useInquiry } from "./InquiryProvider";
import { buttonClasses, type ButtonVariant, type ButtonSize } from "@/components/ui/button";

/** Button that opens the site-wide inquiry modal (any `data-open-inquiry` trigger). */
export function InquireButton({
  variant = "navy",
  size = "md",
  className = "",
  children = "Inquire Now",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
}) {
  const { open } = useInquiry();
  return (
    <button type="button" onClick={open} className={buttonClasses({ variant, size, className })}>
      {children}
    </button>
  );
}
