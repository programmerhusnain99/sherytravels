/**
 * Trending packages (homepage "This month's most requested").
 * PLACEHOLDER prices/content from the design — client to confirm before launch.
 * Images use local placeholder paths; drop real WebP files at these paths.
 */

export interface PackageInclusion {
  emoji: string;
  label: string;
}

export interface TrendingPackage {
  id: string;
  image: string;
  nightsLabel: string;
  stars: number;
  starLabel: string;
  title: string;
  badge?: string;
  blurb: string;
  makkah: string;
  madinah: string;
  price: string;
  inclusions: PackageInclusion[];
  /** Destination link for "View details". */
  href: string;
}

const img = (id: string) => `/images/home/home-trending-${id}.webp`;

export const TRENDING_PACKAGES: TrendingPackage[] = [
  {
    id: "essential",
    image: img("essential"),
    nightsLabel: "7 Nights",
    stars: 3,
    starLabel: "3-star",
    title: "Essential Umrah",
    blurb:
      "Three nights in Madinah, four in Makkah, with shared coach transfers between the two cities.",
    makkah: "Makkah — 400m from the Haram",
    madinah: "Madinah — 250m from the Masjid",
    price: "$1,295",
    inclusions: [
      { emoji: "✈️", label: "Return flights" },
      { emoji: "🛂", label: "Visa processing" },
      { emoji: "🚌", label: "Coach transfers" },
      { emoji: "🕌", label: "Guided ziyarat" },
    ],
    href: "/umrah/usa-packages/economy-umrah-packages/",
  },
  {
    id: "comfort",
    image: img("comfort"),
    nightsLabel: "10 Nights",
    stars: 4,
    starLabel: "4-star",
    title: "Comfort Umrah",
    badge: "Most booked",
    blurb:
      "Four nights in Madinah and six in Makkah, both hotels a short walk from the Haram.",
    makkah: "Makkah — 200m from the Haram",
    madinah: "Madinah — 120m from the Masjid",
    price: "$1,780",
    inclusions: [
      { emoji: "✈️", label: "Return flights" },
      { emoji: "🛂", label: "Visa processing" },
      { emoji: "🚕", label: "Private transfers" },
      { emoji: "🍽️", label: "Daily breakfast" },
    ],
    href: "/umrah/usa-packages/",
  },
  {
    id: "premium",
    image: img("premium"),
    nightsLabel: "14 Nights",
    stars: 5,
    starLabel: "5-star",
    title: "Premium Umrah",
    blurb:
      "A Haram-facing tower in Makkah, central Madinah, and a private car with a guide throughout.",
    makkah: "Makkah — Haram-facing tower",
    madinah: "Madinah — Central area, 80m",
    price: "$2,640",
    inclusions: [
      { emoji: "✈️", label: "Return flights" },
      { emoji: "🛂", label: "Visa processing" },
      { emoji: "🚗", label: "Private car and guide" },
      { emoji: "🍽️", label: "Full board" },
    ],
    href: "/umrah/usa-packages/luxury-umrah-packages/",
  },
  {
    id: "ramadan",
    image: img("ramadan"),
    nightsLabel: "10 Nights",
    stars: 4,
    starLabel: "4-star",
    title: "Ramadan Umrah",
    badge: "Limited seats",
    blurb:
      "Taraweeh at the Haram with hotels held well in advance of the Ramadan rush.",
    makkah: "Makkah — 250m from the Haram",
    madinah: "Madinah — 150m from the Masjid",
    price: "$2,150",
    inclusions: [
      { emoji: "✈️", label: "Return flights" },
      { emoji: "🛂", label: "Visa processing" },
      { emoji: "🍽️", label: "Iftar arrangements" },
      { emoji: "🕌", label: "Guided ziyarat" },
    ],
    href: "/umrah/usa-packages/ramadan/",
  },
  {
    id: "lastten",
    image: img("lastten"),
    nightsLabel: "12 Nights",
    stars: 5,
    starLabel: "5-star",
    title: "Last Ten Nights",
    blurb:
      "The final ten nights of Ramadan in a Haram-facing room, with Laylat al-Qadr in Makkah.",
    makkah: "Makkah — Haram-facing tower",
    madinah: "Madinah — Central area, 100m",
    price: "$3,480",
    inclusions: [
      { emoji: "✈️", label: "Return flights" },
      { emoji: "🛂", label: "Visa processing" },
      { emoji: "🚕", label: "Private transfers" },
      { emoji: "🍽️", label: "Suhoor and iftar" },
    ],
    href: "/umrah/usa-packages/ramadan/",
  },
  {
    id: "family",
    image: img("family"),
    nightsLabel: "9 Nights",
    stars: 4,
    starLabel: "4-star",
    title: "Family Umrah",
    blurb:
      "Connecting family rooms in both cities and a private vehicle sized for children and elders.",
    makkah: "Makkah — 300m from the Haram",
    madinah: "Madinah — 180m from the Masjid",
    price: "$1,620",
    inclusions: [
      { emoji: "✈️", label: "Return flights" },
      { emoji: "🛏️", label: "Family rooms" },
      { emoji: "🚐", label: "Private vehicle" },
      { emoji: "🍽️", label: "Daily breakfast" },
    ],
    href: "/umrah/usa-packages/family-umrah-packages/",
  },
  {
    id: "group",
    image: img("group"),
    nightsLabel: "7 Nights",
    stars: 3,
    starLabel: "3-star",
    title: "Group Umrah",
    blurb:
      "Priced for mosques and community groups of fifteen or more travelling together.",
    makkah: "Makkah — 500m from the Haram",
    madinah: "Madinah — 300m from the Masjid",
    price: "$1,150",
    inclusions: [
      { emoji: "✈️", label: "Return flights" },
      { emoji: "🛂", label: "Visa processing" },
      { emoji: "🚌", label: "Group coach" },
      { emoji: "🎧", label: "Group leader support" },
    ],
    href: "/umrah/usa-packages/group-umrah-packages/",
  },
  {
    id: "hajj",
    image: img("hajj"),
    nightsLabel: "16 Nights",
    stars: 4,
    starLabel: "4-star",
    title: "Hajj 2027",
    badge: "Registration open",
    blurb:
      "Non-shifting Hajj with Mina and Arafat arrangements handled end to end by our on-ground team.",
    makkah: "Makkah — 350m from the Haram",
    madinah: "Madinah — 200m from the Masjid",
    price: "$8,400",
    inclusions: [
      { emoji: "✈️", label: "Return flights" },
      { emoji: "🛂", label: "Hajj visa" },
      { emoji: "⛺", label: "Mina and Arafat camps" },
      { emoji: "🍽️", label: "Full board" },
    ],
    href: "/hajj/usa-packages/",
  },
];
