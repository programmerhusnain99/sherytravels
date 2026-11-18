/**
 * Detailed, glossy package-feature icons (Flights, Hotels, Visa, Transport,
 * Guide) rendered as inline SVG so their gradients can read the `--i-*` palette
 * CSS variables from an ancestor (see `.pkg-feature-icons` in globals.css).
 * They must be inlined — an external <img> SVG cannot inherit page CSS vars.
 */
type IconProps = { className?: string };

export function FlightsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="pl-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--i-lo)" />
          <stop offset=".16" stopColor="var(--i-base)" />
          <stop offset=".34" stopColor="var(--i-gl)" />
          <stop offset=".58" stopColor="var(--i-base)" />
          <stop offset="1" stopColor="var(--i-lo)" />
        </linearGradient>
        <linearGradient id="pl-wingL" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--i-hi)" />
          <stop offset=".5" stopColor="var(--i-base)" />
          <stop offset="1" stopColor="var(--i-lo)" />
        </linearGradient>
        <linearGradient id="pl-wingR" x1="0" y1="0" x2=".4" y2="1">
          <stop offset="0" stopColor="var(--i-base)" />
          <stop offset="1" stopColor="var(--i-lo)" />
        </linearGradient>
        <linearGradient id="pl-eng" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--i-dk)" />
          <stop offset=".4" stopColor="var(--i-lo)" />
          <stop offset="1" stopColor="var(--i-dk)" />
        </linearGradient>
      </defs>
      <ellipse cx="31" cy="56" rx="15" ry="2.9" fill="var(--i-dk)" opacity=".15" />
      <g transform="translate(32 31) rotate(40) scale(.86) translate(-32 -32)">
        <path d="M28 24 5.5 34.4a1.8 1.8 0 0 0 0 3.6L28 38Z" fill="url(#pl-wingL)" />
        <path d="M36 24l22.5 10.4a1.8 1.8 0 0 1 0 3.6L36 38Z" fill="url(#pl-wingR)" />
        <rect x="17.8" y="30" width="4.4" height="9.6" rx="2.2" fill="url(#pl-eng)" />
        <rect x="41.8" y="30" width="4.4" height="9.6" rx="2.2" fill="url(#pl-eng)" />
        <path d="M29 44 19.5 48.6a1.2 1.2 0 0 0 0 2.4L29 50Z" fill="url(#pl-wingL)" />
        <path d="M35 44l9.5 4.6a1.2 1.2 0 0 1 0 2.4L35 50Z" fill="url(#pl-wingR)" />
        <path d="M30.4 9.6c.5-1.1 2.7-1.1 3.2 0 2.3 3.4 3.4 7 3.4 11V40c0 5.6-1 9.6-2.2 12.4h-5.6C28 49.6 27 45.6 27 40V20.6c0-4 1.1-7.6 3.4-11Z" fill="url(#pl-body)" />
        <path d="M32 11.6c1.6 1.9 2.6 3.8 3.2 5.9-1 .5-2.1.8-3.2.8s-2.2-.3-3.2-.8c.6-2.1 1.6-4 3.2-5.9Z" fill="var(--i-pa)" opacity=".92" />
        <path d="M32 41.5 29.9 52.4h4.2Z" fill="var(--i-hi)" opacity=".7" />
      </g>
    </svg>
  );
}

export function HotelsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ht-front" x1="0" y1="0" x2="1" y2=".3">
          <stop offset="0" stopColor="var(--i-gl)" />
          <stop offset=".35" stopColor="var(--i-base)" />
          <stop offset="1" stopColor="var(--i-base)" />
        </linearGradient>
        <linearGradient id="ht-side" x1="0" y1="0" x2="1" y2=".4">
          <stop offset="0" stopColor="var(--i-lo)" />
          <stop offset="1" stopColor="var(--i-dk)" />
        </linearGradient>
        <linearGradient id="ht-roof" x1=".2" y1="1" x2=".8" y2="0">
          <stop offset="0" stopColor="var(--i-hi)" />
          <stop offset="1" stopColor="var(--i-gl)" />
        </linearGradient>
      </defs>
      <ellipse cx="33" cy="53.5" rx="21" ry="3.2" fill="var(--i-dk)" opacity=".15" />
      <path d="M14 14h26l12-6H26Z" fill="url(#ht-roof)" />
      <path d="M40 14l12-6v36l-12 6Z" fill="url(#ht-side)" />
      <path d="M14 14h26v36H14Z" fill="url(#ht-front)" />
      <rect x="18" y="16" width="18" height="2.6" rx="1.3" fill="var(--i-pa)" opacity=".75" />
      <g fill="var(--i-pa)">
        <rect x="18" y="21.5" width="4.5" height="4.5" rx="1" />
        <rect x="24.75" y="21.5" width="4.5" height="4.5" rx="1" />
        <rect x="31.5" y="21.5" width="4.5" height="4.5" rx="1" />
        <rect x="18" y="27.5" width="4.5" height="4.5" rx="1" />
        <rect x="24.75" y="27.5" width="4.5" height="4.5" rx="1" />
        <rect x="31.5" y="27.5" width="4.5" height="4.5" rx="1" />
        <rect x="18" y="33.5" width="4.5" height="4.5" rx="1" />
        <rect x="24.75" y="33.5" width="4.5" height="4.5" rx="1" />
        <rect x="31.5" y="33.5" width="4.5" height="4.5" rx="1" />
      </g>
      <g fill="var(--i-pa)" opacity=".42">
        <path d="M42 20.5 46 18.5v4.5L42 25Z" />
        <path d="M42 26.5 46 24.5v4.5L42 31Z" />
        <path d="M42 32.5 46 30.5v4.5L42 37Z" />
        <path d="M47.5 17.75 51.5 15.75v4.5l-4 2Z" />
        <path d="M47.5 23.75 51.5 21.75v4.5l-4 2Z" />
        <path d="M47.5 29.75 51.5 27.75v4.5l-4 2Z" />
      </g>
      <rect x="18.5" y="40.5" width="17" height="2.4" rx="1.2" fill="var(--i-lo)" />
      <path d="M22 50v-6a5 5 0 0 1 10 0v6Z" fill="var(--i-pa)" />
      <rect x="26.6" y="44.6" width=".8" height="5.4" fill="var(--i-lo)" opacity=".45" />
    </svg>
  );
}

export function VisaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="vs-front" x1="0" y1="0" x2=".85" y2="1">
          <stop offset="0" stopColor="var(--i-gl)" />
          <stop offset=".4" stopColor="var(--i-base)" />
          <stop offset="1" stopColor="var(--i-base)" />
        </linearGradient>
        <linearGradient id="vs-side" x1="0" y1="0" x2="1" y2=".5">
          <stop offset="0" stopColor="var(--i-lo)" />
          <stop offset="1" stopColor="var(--i-dk)" />
        </linearGradient>
        <linearGradient id="vs-top" x1=".2" y1="1" x2=".8" y2="0">
          <stop offset="0" stopColor="var(--i-hi)" />
          <stop offset="1" stopColor="var(--i-gl)" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="54" rx="20" ry="3.4" fill="var(--i-dk)" opacity=".15" />
      <path d="M9 21h42l6-5H15z" fill="url(#vs-top)" />
      <path d="M51 21l6-5v27l-6 5z" fill="url(#vs-side)" />
      <rect x="9" y="21" width="42" height="27" rx="3" fill="url(#vs-front)" />
      <rect x="14" y="26" width="12" height="16" rx="2" fill="var(--i-pa)" />
      <circle cx="20" cy="31.5" r="3" fill="var(--i-lo)" opacity=".55" />
      <path d="M15.2 42a4.8 4.8 0 0 1 9.6 0z" fill="var(--i-lo)" opacity=".55" />
      <g fill="var(--i-pa)">
        <rect x="30" y="27" width="16" height="3" rx="1.5" />
        <rect x="30" y="33" width="13" height="3" rx="1.5" />
        <rect x="30" y="39" width="9" height="3" rx="1.5" />
      </g>
    </svg>
  );
}

export function TransportIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="bs-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--i-gl)" />
          <stop offset=".16" stopColor="var(--i-hi)" />
          <stop offset=".46" stopColor="var(--i-base)" />
          <stop offset="1" stopColor="var(--i-lo)" />
        </linearGradient>
        <linearGradient id="bs-round" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity=".26" />
          <stop offset=".17" stopColor="#000" stopOpacity="0" />
          <stop offset=".74" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".26" />
        </linearGradient>
        <linearGradient id="bs-glass" x1="0" y1="0" x2=".7" y2="1">
          <stop offset="0" stopColor="var(--i-hi)" />
          <stop offset=".45" stopColor="var(--i-pa)" />
          <stop offset="1" stopColor="var(--i-hi)" />
        </linearGradient>
        <clipPath id="bs-clip">
          <path d="M14 20c0-5 3.6-8 18-8s18 3 18 8v24a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4Z" />
        </clipPath>
      </defs>
      <ellipse cx="32" cy="54" rx="20" ry="3.2" fill="var(--i-dk)" opacity=".15" />
      <rect x="18.5" y="45" width="9" height="8" rx="3.2" fill="var(--i-dk)" />
      <rect x="36.5" y="45" width="9" height="8" rx="3.2" fill="var(--i-dk)" />
      <rect x="20.3" y="47" width="5.4" height="4.4" rx="2" fill="var(--i-lo)" opacity=".6" />
      <rect x="38.3" y="47" width="5.4" height="4.4" rx="2" fill="var(--i-lo)" opacity=".6" />
      <rect x="9.6" y="22.5" width="4.8" height="5.4" rx="2.1" fill="var(--i-lo)" />
      <rect x="49.6" y="22.5" width="4.8" height="5.4" rx="2.1" fill="var(--i-lo)" />
      <path d="M14 20c0-5 3.6-8 18-8s18 3 18 8v24a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4Z" fill="url(#bs-body)" />
      <g clipPath="url(#bs-clip)">
        <path d="M18 18.6c0-2.4 2.2-3.6 14-3.6s14 1.2 14 3.6v11.2c0 1.5-1 2.2-3 2.2H21c-2 0-3-.7-3-2.2Z" fill="url(#bs-glass)" />
        <path d="M24 13 10 34h6.6l14-21Z" fill="#fff" opacity=".3" />
        <path d="M34 13 23 29.5h3.6L37.6 13Z" fill="#fff" opacity=".22" />
        <rect x="14" y="34.6" width="36" height="1.8" fill="var(--i-lo)" opacity=".45" />
        <rect x="18.6" y="38.4" width="7.4" height="4.4" rx="2.2" fill="var(--i-pa)" />
        <rect x="38" y="38.4" width="7.4" height="4.4" rx="2.2" fill="var(--i-pa)" />
        <rect x="28.4" y="38.8" width="7.2" height="3.6" rx="1.4" fill="var(--i-lo)" opacity=".5" />
        <rect x="14" y="44.4" width="36" height="3.6" fill="var(--i-lo)" opacity=".7" />
        <rect x="14" y="12" width="36" height="36" fill="url(#bs-round)" />
      </g>
    </svg>
  );
}

export function GuideIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="gd-head" cx=".34" cy=".28" r=".85">
          <stop offset="0" stopColor="var(--i-gl)" />
          <stop offset=".45" stopColor="var(--i-base)" />
          <stop offset="1" stopColor="var(--i-lo)" />
        </radialGradient>
        <radialGradient id="gd-body" cx=".32" cy=".1" r="1">
          <stop offset="0" stopColor="var(--i-hi)" />
          <stop offset=".45" stopColor="var(--i-base)" />
          <stop offset="1" stopColor="var(--i-lo)" />
        </radialGradient>
      </defs>
      <ellipse cx="32" cy="57" rx="18" ry="3.2" fill="var(--i-dk)" opacity=".15" />
      <path d="M11 55c0-11.6 9.4-21 21-21s21 9.4 21 21v1H11z" fill="url(#gd-body)" />
      <circle cx="32" cy="21" r="12" fill="url(#gd-head)" />
    </svg>
  );
}
