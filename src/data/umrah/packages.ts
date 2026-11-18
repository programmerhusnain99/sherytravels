/**
 * Content for the new `/umrah-packages` section (index + 3/4/5-star tier pages).
 * Tier pricing mirrors the existing Umrah packages page; copy is written to be
 * evergreen (not tied to the old USA-specific SEO framing).
 */
import {
  Wallet, Users, BedDouble, CarFront, FileCheck2, Plane, MapPinned,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type TierSlug = "3-star" | "4-star" | "5-star";

export interface TierRoom {
  room: string;
  price: string;
  image: string;
}

export interface UmrahTier {
  slug: TierSlug;
  star: string; // "3-Star"
  stars: number; // 3
  nights: string; // "7 Nights"
  split: string; // "4 nights in Makkah · 3 in Madina"
  heroImage: string;
  heroEyebrow: string;
  heroHeadBefore: string;
  heroHeadAccent: string;
  heroIntro: string[];
  /** Short lead for the "what's included" band. */
  lead: string;
  rooms: TierRoom[];
  metaTitle: string;
  metaDescription: string;
}

const ROOM_IMAGES = {
  double: "/images/home/home-hotel-grand.webp",
  triple: "/images/home/home-hotel-kiswah.webp",
  quad: "/images/home/home-hotel-manar.webp",
};

export const TIERS: UmrahTier[] = [
  {
    slug: "3-star",
    star: "3-Star",
    stars: 3,
    nights: "7 Nights",
    split: "4 nights in Makkah · 3 in Madina",
    heroImage: "/images/umrah/umrah-hero.webp",
    heroEyebrow: "3-Star Umrah packages",
    heroHeadBefore: "Comfortable & Affordable 3-Star Umrah ",
    heroHeadAccent: "Packages",
    heroIntro: [
      "Our 3-Star Umrah packages are built for pilgrims who want a clean, comfortable stay within easy reach of the Haram — without stretching the budget. Flights, visa, hotels and transport are all arranged for you.",
      "Travel solo, with family, or in a group, and let our team handle every detail so you can focus entirely on your worship.",
    ],
    lead: "Everything you need for a smooth, affordable pilgrimage — handled end to end.",
    rooms: [
      { room: "Double Room", price: "$1,250", image: ROOM_IMAGES.double },
      { room: "Triple Room", price: "$1,090", image: ROOM_IMAGES.triple },
      { room: "Quad Room", price: "$940", image: ROOM_IMAGES.quad },
    ],
    metaTitle: "3-Star Umrah Packages - Shery Travels",
    metaDescription:
      "Affordable 3-Star Umrah packages with comfortable hotels near the Haram, visa processing, flights and transport — all arranged by Shery Travels.",
  },
  {
    slug: "4-star",
    star: "4-Star",
    stars: 4,
    nights: "10 Nights",
    split: "5 nights in Makkah · 5 in Madina",
    heroImage: "/images/umrah/usa-packages-hero.webp",
    heroEyebrow: "4-Star Umrah packages",
    heroHeadBefore: "Premium Comfort with Our 4-Star Umrah ",
    heroHeadAccent: "Packages",
    heroIntro: [
      "Our 4-Star Umrah packages pair well-located hotels and extra nights in both holy cities with the same end-to-end care — visa, flights, transfers and guided ziyarat included.",
      "A balanced choice for pilgrims who want added comfort and a relaxed pace of worship.",
    ],
    lead: "Added comfort, more time in Makkah and Madinah, and every detail taken care of.",
    rooms: [
      { room: "Double Room", price: "$1,395", image: ROOM_IMAGES.double },
      { room: "Triple Room", price: "$1,250", image: ROOM_IMAGES.triple },
      { room: "Quad Room", price: "$1,140", image: ROOM_IMAGES.quad },
    ],
    metaTitle: "4-Star Umrah Packages - Shery Travels",
    metaDescription:
      "Premium 4-Star Umrah packages with well-located hotels, extra nights in Makkah and Madinah, visa, flights and transport — all arranged by Shery Travels.",
  },
  {
    slug: "5-star",
    star: "5-Star",
    stars: 5,
    nights: "6 Nights",
    split: "3 nights in Makkah · 3 in Madina",
    heroImage: "/images/umrah/usa-path.webp",
    heroEyebrow: "5-Star Umrah packages",
    heroHeadBefore: "Luxury & Serenity with Our 5-Star Umrah ",
    heroHeadAccent: "Packages",
    heroIntro: [
      "Our 5-Star Umrah packages place you in premium hotels steps from the Haram, with private transfers, priority service and guided ziyarat — a serene, uninterrupted pilgrimage.",
      "For pilgrims who want the finest comfort while they devote themselves fully to ibadah.",
    ],
    lead: "Premium hotels steps from the Haram, private transfers, and effortless, uninterrupted worship.",
    rooms: [
      { room: "Double Room", price: "$1,950", image: ROOM_IMAGES.double },
      { room: "Triple Room", price: "$1,790", image: ROOM_IMAGES.triple },
      { room: "Quad Room", price: "$1,670", image: ROOM_IMAGES.quad },
    ],
    metaTitle: "5-Star Umrah Packages - Shery Travels",
    metaDescription:
      "Luxury 5-Star Umrah packages with premium hotels steps from the Haram, private transfers, visa, flights and guided ziyarat — all arranged by Shery Travels.",
  },
];

export function getTier(slug: TierSlug): UmrahTier {
  const t = TIERS.find((x) => x.slug === slug);
  if (!t) throw new Error(`Unknown tier: ${slug}`);
  return t;
}

/* --------------------- Shared "Umrah packages page" content --------------------- */

export interface IconCard {
  Icon: LucideIcon;
  title: string;
  body: string;
}

/** "What's included" — the mid-page section on each tier page. */
export const INCLUDED: IconCard[] = [
  { Icon: FileCheck2, title: "Effortless Visa Solutions", body: "Quick, accurate visa assistance with guidance on every document you need for a smooth journey." },
  { Icon: Plane, title: "Flights & Accommodation", body: "Round-trip flights and carefully selected hotels near the Haram for a comfortable, focused stay." },
  { Icon: MapPinned, title: "Guided Ziyarah Tours", body: "Guided religious tours across Makkah and Madinah to deepen your connection to each sacred site." },
];

/** "Why choose us" — shared navy band. */
export const WHY: IconCard[] = [
  { Icon: Wallet, title: "Affordable Packages", body: "Thoughtfully priced packages that never compromise on comfort, so your pilgrimage stays within reach." },
  { Icon: Users, title: "Group Booking", body: "Travel together with shared experiences, lower costs and expert guidance that builds lasting bonds." },
  { Icon: BedDouble, title: "Quality Accommodation", body: "Comfortable, clean hotels close to the Haram, making it easy to reach prayers and rituals." },
  { Icon: CarFront, title: "Luxury Transport", body: "Modern, air-conditioned vehicles with skilled, English-speaking drivers for smooth, timely transfers." },
];

/** Spiritual highlights — shared numbered grid. */
export const HIGHLIGHTS = [
  { title: "Guided Tours of Sacred Sites", body: "Visit Islamic sites like Jabal al-Noor, Mount Uhud and the Cave of Hira with guides who bring their significance to life." },
  { title: "Stay Close to the Haram", body: "Premium hotel options a short walk from Masjid al-Haram and Masjid al-Nabawi, so prayer and reflection are always within reach." },
  { title: "Customized Plans for Meaningful Worship", body: "Personalized itineraries that give you ample time for peace, reflection and heartfelt duas at every holy site." },
  { title: "Full Travel Support, Start to Finish", body: "From visa processing to airport transfers and accommodation, we handle the logistics so you can focus on ibadah." },
];

export const FAQ = [
  { q: "What's included in an Umrah package?", a: "Our packages include visa processing, round-trip flights, hotels near the Haram, airport and inter-city transfers, and guided ziyarat. Exact inclusions depend on the tier you choose." },
  { q: "Can I choose my own hotel or room type?", a: "Yes. Each tier offers double, triple and quad room options, and our team can tailor hotels and nights in Makkah and Madinah to your preference." },
  { q: "Do you help with the Umrah visa?", a: "Absolutely. We handle the complete visa process and guide you through every required document." },
  { q: "Is on-ground support available in Saudi Arabia?", a: "Yes — we offer 24/7 support both before departure and throughout your stay, so you're never on your own." },
  { q: "How do I book or get a quote?", a: "Use the Inquire Now button or the contact form below with your dates and group size, and a travel expert will reply within 24 hours." },
];
