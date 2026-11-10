import type { ReactNode } from "react";

/**
 * CSS-only "Read more" disclosure.
 *
 * The full text is always rendered in the server HTML (so it is indexed —
 * SEO-safe); only the overflow is *visually* collapsed. A visually-hidden
 * checkbox toggles a line-clamp on the lead paragraph and reveals any extra
 * content, so it works even with JavaScript disabled. This is legitimate
 * progressive disclosure, not cloaking.
 *
 * `id` must be unique per instance.
 */
export function ReadMore({
  id,
  lead,
  leadClassName = "",
  className = "",
  children,
}: {
  id: string;
  /** First paragraph — shown clamped to ~3 lines when collapsed. */
  lead: ReactNode;
  /** Classes for the lead paragraph (size / colour / leading). */
  leadClassName?: string;
  /** Wrapper classes (e.g. top margin from the heading). */
  className?: string;
  /** Extra content revealed on expand (e.g. further paragraphs). */
  children?: ReactNode;
}) {
  const btn =
    "mt-3 cursor-pointer select-none items-center gap-1 text-[12px] font-bold uppercase tracking-[0.12em] text-gold transition-opacity hover:opacity-80";

  return (
    <div className={className}>
      <input type="checkbox" id={id} aria-label="Expand text" className="peer sr-only" />

      <p className={`line-clamp-3 peer-checked:line-clamp-none ${leadClassName}`}>{lead}</p>

      {children ? <div className="hidden peer-checked:block">{children}</div> : null}

      <label htmlFor={id} className={`${btn} inline-flex peer-checked:hidden`}>
        Read more
      </label>
      <label htmlFor={id} className={`${btn} hidden peer-checked:inline-flex`}>
        Read less
      </label>
    </div>
  );
}
