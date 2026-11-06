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
    label: "Umrah",
    href: "/umrah/",
    children: [
      {
        label: "USA Packages",
        href: "/umrah/usa-packages/",
        children: [
          { label: "New York Umrah Packages", href: "/umrah/usa-packages/newyork/" },
          { label: "Chicago Umrah Packages", href: "/umrah/usa-packages/chicago/" },
          { label: "Los Angeles Umrah Packages", href: "/umrah/usa-packages/los-angeles/" },
          { label: "Washington DC Umrah Packages", href: "/umrah/usa-packages/washington-dc/" },
          { label: "Dallas Umrah Packages", href: "/umrah/usa-packages/dallas/" },
          { label: "Detroit Umrah Packages", href: "/umrah/usa-packages/detroit/" },
          { label: "Houston Umrah Packages", href: "/umrah/usa-packages/houston/" },
          { label: "Atlanta Umrah Packages", href: "/umrah/usa-packages/atlanta/" },
          { label: "Dearborn Umrah Packages", href: "/umrah/usa-packages/dearborn/" },
        ],
      },
      {
        label: "Specialized Umrah Packages",
        children: [
          { label: "Economy Umrah Packages", href: "/umrah/usa-packages/economy-umrah-packages/" },
          { label: "Family Umrah Packages", href: "/umrah/usa-packages/family-umrah-packages/" },
          { label: "Group Umrah Packages", href: "/umrah/usa-packages/group-umrah-packages/" },
          { label: "Luxury Umrah Packages", href: "/umrah/usa-packages/luxury-umrah-packages/" },
        ],
      },
      {
        label: "Holy Months Umrah Packages",
        children: [
          { label: "Rabi-ul-Awal Umrah Packages", href: "/umrah/usa-packages/rabi-ul-awal/" },
          { label: "Ramadan Umrah Packages", href: "/umrah/usa-packages/ramadan/" },
          { label: "Shaban Umrah Packages", href: "/umrah/usa-packages/shaban/" },
          { label: "Shawwal Umrah Packages", href: "/umrah/usa-packages/shawwal/" },
        ],
      },
      { label: "Monthly Umrah Packages", href: "/umrah/usa-packages/monthly/" },
    ],
  },
  {
    label: "Hajj",
    href: "/hajj/",
    children: [{ label: "USA Packages", href: "/hajj/usa-packages/" }],
  },
  {
    label: "Transport",
    href: "/transportation/",
    children: [
      { label: "Ziarat", href: "/transportation/ziarat/" },
      { label: "Fleets", href: "/transportation/fleets/" },
    ],
  },
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
