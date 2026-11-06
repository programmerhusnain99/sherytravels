import Link from "next/link";
import type { ReactNode } from "react";
import { buttonClasses, type ButtonVariant, type ButtonSize } from "./button";

/**
 * Server button/link. Renders a Next <Link> when `href` is set, else a <button>.
 * For click-driven actions (e.g. opening the inquiry modal), use a client
 * component with buttonClasses() instead.
 */
export function Button({
  href,
  variant,
  size,
  className,
  children,
  external,
  type,
  ariaLabel,
}: {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  external?: boolean;
  type?: "button" | "submit";
  ariaLabel?: string;
}) {
  const cls = buttonClasses({ variant, size, className });
  if (href) {
    if (external) {
      return (
        <a href={href} className={cls} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
