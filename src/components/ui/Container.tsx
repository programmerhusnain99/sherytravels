import type { ReactNode } from "react";

/** Centered page container: 56px side padding desktop, 20px mobile; caps at 1440px. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-5 dt:px-14 ${className}`}>
      {children}
    </div>
  );
}
