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
  { label: "Umrah Packages", href: "/umrah-packages/" },
  { label: "Hajj Packages", href: "/hajj-packages/" },
  { label: "Transport", href: "/umrah-transport/" },
  { label: "Contact", href: "/contact/" },
];

/** Nested primary menu with dropdowns (mirrors the live WordPress navbar). */
export interface MenuItem {
  label: string;
  href?: string; // group headers (e.g. "Specialized") have no link
  children?: MenuItem[];
}

export const MENU: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  {
    // Group-only heading (no standalone page) — opens the submenu on click/hover.
    label: "Umrah",
    children: [
      { label: "Umrah Packages", href: "/umrah-packages/" },
      { label: "3-Star Umrah", href: "/umrah-packages/3-star/" },
      { label: "4-Star Umrah", href: "/umrah-packages/4-star/" },
      { label: "5-Star Umrah", href: "/umrah-packages/5-star/" },
      { label: "Ramadan Umrah", href: "/umrah-packages/ramadan/" },
      { label: "December Umrah", href: "/umrah-packages/december/" },
    ],
  },
  {
    // Group-only heading (no standalone page) — opens the submenu on click/hover.
    label: "Hajj",
    children: [{ label: "Hajj Packages", href: "/hajj-packages/" }],
  },
  {
    label: "Transport",
    href: "/umrah-transport/",
    children: [
      { label: "Vehicles", href: "/umrah-transport/vehicles/" },
      { label: "Routes", href: "/umrah-transport/routes/" },
      { label: "Ziyarat", href: "/ziyarat/" },
    ],
  },
  { label: "Hotels", href: "/hotels/" },
  { label: "Contact", href: "/contact/" },
];

/** Utility strip quick links (desktop left; collapse into drawer on mobile). */
export const UTILITY_NAV: NavLink[] = [
  { label: "Umrah Packages", href: "/umrah-packages/" },
  { label: "Hajj Packages", href: "/hajj-packages/" },
  { label: "Transport", href: "/umrah-transport/" },
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
    heading: "Umrah",
    links: [
      { label: "Umrah Packages", href: "/umrah-packages/" },
      { label: "3-Star Umrah", href: "/umrah-packages/3-star/" },
      { label: "4-Star Umrah", href: "/umrah-packages/4-star/" },
      { label: "5-Star Umrah", href: "/umrah-packages/5-star/" },
      { label: "Ramadan Umrah", href: "/umrah-packages/ramadan/" },
      { label: "December Umrah", href: "/umrah-packages/december/" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Hajj Packages", href: "/hajj-packages/" },
      { label: "Transport", href: "/umrah-transport/" },
      { label: "Vehicles", href: "/umrah-transport/vehicles/" },
      { label: "Routes", href: "/umrah-transport/routes/" },
      { label: "Ziyarat", href: "/ziyarat/" },
      { label: "Hotels", href: "/hotels/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Payments & Refunds", href: "/payments-refunds/" },
      { label: "Complaints", href: "/complaints/" },
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms & Conditions", href: "/terms-and-conditions/" },
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
