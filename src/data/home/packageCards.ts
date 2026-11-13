import { Plane, Building2, IdCard, BusFront, UserRound, type LucideIcon } from "lucide-react";

export type PackageCard = {
  title: string;
  image: string;
  highlights: string[];
  price: string;
  href: string;
};

/** Shared feature row shown on every package card. */
export const PACKAGE_FEATURES: { Icon: LucideIcon; label: string }[] = [
  { Icon: Plane, label: "Flights" },
  { Icon: Building2, label: "Hotels" },
  { Icon: IdCard, label: "Visa" },
  { Icon: BusFront, label: "Transport" },
  { Icon: UserRound, label: "Guide" },
];

export const PACKAGE_CARDS: PackageCard[] = [
  {
    title: "14 Nights Umrah Package",
    image: "/images/home/home-pkg-ramadan.webp",
    highlights: ["8 in Makkah & 6 in Madinah", "Visa, Transport & Ziyarat", "Triple Room"],
    price: "$1,395",
    href: "/umrah/usa-packages/",
  },
  {
    title: "10 Nights Umrah Package",
    image: "/images/home/home-pkg-december.webp",
    highlights: ["6 in Makkah & 4 in Madinah", "Visa & Transport", "Quad Room"],
    price: "$1,180",
    href: "/umrah/usa-packages/december/",
  },
  {
    title: "12 Nights Luxury Umrah",
    image: "/images/home/home-pkg-luxury.webp",
    highlights: ["7 in Makkah & 5 in Madinah", "5★ Haram-view hotels", "Private Transfers"],
    price: "$2,640",
    href: "/umrah/usa-packages/luxury-umrah-packages/",
  },
  {
    title: "9 Nights Family Umrah",
    image: "/images/home/home-pkg-family.webp",
    highlights: ["5 in Makkah & 4 in Madinah", "Family Rooms & Meals", "Guided Ziyarat"],
    price: "$1,620",
    href: "/umrah/usa-packages/family-umrah-packages/",
  },
  {
    title: "7 Nights Umrah Package",
    image: "/images/home/home-pkg-easter.webp",
    highlights: ["4 in Makkah & 3 in Madinah", "Visa & Transport", "Triple Room"],
    price: "$1,090",
    href: "/umrah/usa-packages/",
  },
];
