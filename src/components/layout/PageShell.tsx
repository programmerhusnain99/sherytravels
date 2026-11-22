import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { TrustStrip } from "@/components/home/trust/TrustStrip";
import { FormSection, type FormSectionProps } from "@/components/home/form/FormSection";

/**
 * Standard page wrapper: header + main + enquiry CTA + trust strip + footer.
 * `active` highlights the nav item.
 * `cta` controls the pre-footer enquiry section (homepage FormSection design):
 *   - omitted / true  → render with homepage defaults
 *   - an object       → render with page-specific text
 *   - false           → skip it (for pages that already have their own form)
 */
export function PageShell({
  active,
  cta = true,
  children,
}: {
  active?: string;
  cta?: boolean | FormSectionProps;
  children: ReactNode;
}) {
  return (
    <>
      <Header active={active} />
      <main>{children}</main>
      {cta !== false && <FormSection {...(typeof cta === "object" ? cta : {})} />}
      <TrustStrip />
      <Footer />
    </>
  );
}
