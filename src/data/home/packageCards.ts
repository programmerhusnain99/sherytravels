import type { ComponentType } from "react";
import {
  FlightsIcon, HotelsIcon, VisaIcon, TransportIcon, GuideIcon,
} from "@/components/icons/PackageIcons";

export type PackageCard = {
  title: string;
  image: string;
  highlights: string[];
  price: string;
  href: string;
};

export type PackageFeatureIcon = ComponentType<{ className?: string }>;

/** Shared feature row shown on every package card. */
export const PACKAGE_FEATURES: { Icon: PackageFeatureIcon; label: string }[] = [
  { Icon: FlightsIcon, label: "Flights" },
  { Icon: HotelsIcon, label: "Hotels" },
  { Icon: VisaIcon, label: "Visa" },
  { Icon: TransportIcon, label: "Transport" },
  { Icon: GuideIcon, label: "Guide" },
];

export const PACKAGE_CARDS: PackageCard[] = [
  {
    title: "14 Nights Umrah Package",
    image: "/images/home/home-pkg-ramadan.webp",
    highlights: ["8 in Makkah & 6 in Madinah", "Visa, Transport & Ziyarat", "Triple Room"],
    price: "$1,395",
    href: "/umrah-packages/",
  },
  {
    title: "10 Nights Umrah Package",
    image: "/images/home/home-pkg-december.webp",
    highlights: ["6 in Makkah & 4 in Madinah", "Visa & Transport", "Quad Room"],
    price: "$1,180",
    href: "/umrah-packages/december/",
  },
  {
    title: "12 Nights Luxury Umrah",
    image: "/images/home/home-pkg-luxury.webp",
    highlights: ["7 in Makkah & 5 in Madinah", "5★ Haram-view hotels", "Private Transfers"],
    price: "$2,640",
    href: "/umrah-packages/5-star/",
  },
  {
    title: "9 Nights Family Umrah",
    image: "/images/home/home-pkg-family.webp",
    highlights: ["5 in Makkah & 4 in Madinah", "Family Rooms & Meals", "Guided Ziyarat"],
    price: "$1,620",
    href: "/umrah-packages/4-star/",
  },
  {
    title: "7 Nights Umrah Package",
    image: "/images/home/home-pkg-easter.webp",
    highlights: ["4 in Makkah & 3 in Madinah", "Visa & Transport", "Triple Room"],
    price: "$1,090",
    href: "/umrah-packages/3-star/",
  },
];

/** Umrah tier/season cards for the homepage "Explore Our Umrah Packages" carousel. */
export const UMRAH_PACKAGES: PackageCard[] = [
  {
    title: "3-Star Umrah Package",
    image: "/images/home/home-hotel-grand.webp",
    highlights: ["7 Nights · 4 Makkah / 3 Madinah", "Comfortable hotels near the Haram", "Visa & Transport included"],
    price: "$940",
    href: "/umrah-packages/3-star/",
  },
  {
    title: "4-Star Umrah Package",
    image: "/images/home/home-hotel-kiswah.webp",
    highlights: ["10 Nights · 5 Makkah / 5 Madinah", "Premium-comfort hotels", "Visa & Transport included"],
    price: "$1,140",
    href: "/umrah-packages/4-star/",
  },
  {
    title: "5-Star Umrah Package",
    image: "/images/home/home-pkg-luxury.webp",
    highlights: ["6 Nights · 3 Makkah / 3 Madinah", "5★ Haram-view rooms", "Private transfers & guide"],
    price: "$1,670",
    href: "/umrah-packages/5-star/",
  },
  {
    title: "Ramadan Umrah Package",
    image: "/images/home/home-pkg-ramadan.webp",
    highlights: ["Ramadan departures", "Hotels close to the Haram", "Visa & Transport included"],
    price: "$1,890",
    href: "/umrah-packages/ramadan/",
  },
  {
    title: "December Umrah Package",
    image: "/images/home/home-pkg-december.webp",
    highlights: ["December departures", "Family-friendly options", "Visa & Transport included"],
    price: "$1,180",
    href: "/umrah-packages/december/",
  },
];

export const HAJJ_PACKAGES: PackageCard[] = [
  {
    title: "Economy Hajj Package",
    image: "/images/home/home-trending-hajj.webp",
    highlights: ["Shared Mina & Arafat camps", "Visa, Transport & Meals", "Quad Room"],
    price: "$8,400",
    href: "/hajj-packages/",
  },
  {
    title: "Standard Hajj Package",
    image: "/images/home/home-pkg-family.webp",
    highlights: ["Upgraded Mina tents", "Guided rituals & ziyarat", "Triple Room"],
    price: "$10,900",
    href: "/hajj-packages/",
  },
  {
    title: "Premium Hajj Package",
    image: "/images/home/home-pkg-luxury.webp",
    highlights: ["5★ Haram-view hotels", "VIP Mina & Arafat camps", "Double Room"],
    price: "$14,500",
    href: "/hajj-packages/",
  },
];
