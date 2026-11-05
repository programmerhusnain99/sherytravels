/**
 * Site-wide navigation, contact, and footer data.
 * All internal links use the locked canonical paths (lowercase, trailing slash).
 * TODO(client): fill real social URLs + confirm tagline/email before launch.
 */

export interface NavLink {
  label: string;
  href: string;
}

/** Primary nav (logo row). "Home" is the active item on the homepage. */
export const PRIMARY_NAV: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Umrah", href: "/umrah/" },
  { label: "Hajj", href: "/hajj/" },
  { label: "Transport", href: "/transportation/" },
  { label: "Contact", href: "/contact/" },
];

/** Utility strip quick links (desktop left; collapse into drawer on mobile). */
export const UTILITY_NAV: NavLink[] = [
  { label: "Umrah Packages", href: "/umrah/usa-packages/" },
  { label: "Hajj Packages", href: "/hajj/usa-packages/" },
  { label: "Transportation", href: "/transportation/" },
];

export interface Phone {
  country: string; // short label shown in gold, e.g. "USA"
  display: string; // human-readable, e.g. "+1-667-439-1263"
  tel: string; // tel: value, digits only with +, e.g. "+16674391263"
}

export const PHONES: Phone[] = [
  { country: "USA", display: "+1-667-439-1263", tel: "+16674391263" },
  { country: "KSA", display: "+966-58-384-2090", tel: "+966583842090" },
];

export const CONTACT_EMAIL = "info@sherytravels.com";

/** Short brand tagline used in the footer. */
export const TAGLINE =
  "Your trusted partner for Hajj & Umrah — visas, hotels near the Haram, guided ziyarat, and reliable transport.";

/* ------------------------------- Footer ---------------------------------- */

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Services",
    links: [
      { label: "Umrah", href: "/umrah/" },
      { label: "Hajj", href: "/hajj/" },
      { label: "Transportation", href: "/transportation/" },
      { label: "Ziyarat Tours", href: "/transportation/ziarat/" },
      { label: "Our Fleet", href: "/transportation/fleets/" },
    ],
  },
  {
    heading: "Packages",
    links: [
      { label: "Umrah Packages", href: "/umrah/usa-packages/" },
      { label: "Hajj Packages", href: "/hajj/usa-packages/" },
      { label: "Economy Umrah", href: "/umrah/usa-packages/economy-umrah-packages/" },
      { label: "Family Umrah", href: "/umrah/usa-packages/family-umrah-packages/" },
      { label: "Luxury Umrah", href: "/umrah/usa-packages/luxury-umrah-packages/" },
      { label: "Ramadan Umrah", href: "/umrah/usa-packages/ramadan/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about/" },
      { label: "Contact", href: "/contact/" },
      { label: "Blogs", href: "/blogs/" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
    ],
  },
];

export interface SocialLink {
  label: string;
  href: string; // TODO(client): replace "#" with real profile URLs
}

export const SOCIALS: SocialLink[] = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "LinkedIn", href: "#" },
];
