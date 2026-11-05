import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

/** Standard page wrapper: header + main + footer. `active` highlights the nav item. */
export function PageShell({
  active,
  children,
}: {
  active?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header active={active} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
