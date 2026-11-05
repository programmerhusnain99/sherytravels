/**
 * Inline SVG icon set (no icon web-font — keeps the bundle tiny and LCP fast).
 * Add new glyphs to PATHS as sections need them. All 24x24, currentColor.
 */
const PATHS: Record<string, { d: string; evenodd?: boolean }> = {
  close: {
    d: "M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4z",
  },
  check: { d: "M9.55 17.6 4.35 12.4l1.4-1.4 3.8 3.8 8.5-8.5 1.4 1.4z" },
  star: {
    d: "M12 17.3 6.2 20.8l1.5-6.6L2.6 9.8l6.7-.6L12 3l2.7 6.2 6.7.6-5.1 4.4 1.5 6.6z",
  },
  chevronDown: { d: "M12 15.4 6.6 10l1.4-1.4 4 4 4-4L17.4 10z" },
  arrowRight: {
    d: "M12 20l-1.4-1.45L16.15 13H4v-2h12.15L10.6 5.45 12 4l8 8z",
  },
  arrowLeft: {
    d: "M12 20 4 12l8-8 1.4 1.45L7.85 11H20v2H7.85l5.55 5.55z",
  },
  phone: {
    d: "M19.95 21q-3.1 0-6.17-1.42t-5.6-3.96q-2.52-2.53-3.95-5.6T2.8 3.85q0-.45.3-.75t.75-.3H7.3q.35 0 .62.24t.33.57l.59 3.07q.05.36-.01.63t-.26.46L6.23 10.2q1.03 1.78 2.48 3.22t3.2 2.45l2.22-2.33q.22-.22.5-.31t.6-.04l3 .61q.35.09.56.35t.21.59v3.5q0 .45-.3.75t-.75.3z",
  },
  mail: {
    d: "M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7 8-5V6l-8 5-8-5v2z",
  },
  facebook: {
    d: "M13.5 21v-8h2.7l.4-3h-3.1V8.1q0-.9 1.3-.9h1.9V4.5q-.3-.05-1.65-.05-2 0-3.1 1.17T10.8 8v2H8v3h2.8v8z",
  },
  instagram: {
    d: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.5 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z",
    evenodd: true,
  },
  youtube: {
    d: "M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.5a2.5 2.5 0 0 0 1.8-1.8C23 15.2 23 12 23 12zM9.8 15.3V8.7l5.7 3.3z",
    evenodd: true,
  },
  tiktok: {
    d: "M16 3c.3 2.1 1.6 3.6 3.7 3.9v2.6c-1.3.1-2.6-.3-3.7-1V15a5.5 5.5 0 1 1-5.5-5.5c.2 0 .4 0 .6.03v2.7a2.8 2.8 0 1 0 2 2.7V3z",
  },
  linkedin: {
    d: "M4.98 3.5A2.5 2.5 0 1 1 2.5 6 2.5 2.5 0 0 1 4.98 3.5zM3 8.98h4V21H3zM9 8.98h3.8v1.65h.05a4.2 4.2 0 0 1 3.75-2.05C20.5 8.58 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3s-2.3 1.57-2.3 3.2V21H9z",
  },
};

export type IconName = keyof typeof PATHS;

export function Icon({
  name,
  size = 24,
  className = "",
  title,
}: {
  name: IconName;
  size?: number;
  className?: string;
  title?: string;
}) {
  const g = PATHS[name];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <path d={g.d} fillRule={g.evenodd ? "evenodd" : undefined} clipRule={g.evenodd ? "evenodd" : undefined} />
    </svg>
  );
}
