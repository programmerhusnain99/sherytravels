import {
  Plane,
  Building2,
  TrainFront,
  Landmark,
  Mountain,
  Repeat,
  MapPin,
  Route,
  Users,
  Crown,
  Accessibility,
  UserRound,
  Baby,
  Coffee,
  Droplets,
  Shirt,
  Luggage,
  ShoppingBag,
  Camera,
  Flower2,
  Gift,
  Utensils,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

/** Vehicle categories — capacity + the three round-trip package prices (SAR). */
export interface Vehicle {
  key: string;
  name: string;
  sub: string;
  persons: string;
  luggage: string;
  /** [arrive Jeddah / depart Madinah, Jeddah round trip, Jeddah round trip via both cities] */
  roundTrips: [number, number, number];
}

export const VEHICLES: Vehicle[] = [
  { key: "sedan", name: "Sedan Car", sub: "Camry · Sonata · Taurus", persons: "4 Persons", luggage: "2 Luggage", roundTrips: [730, 975, 1175] },
  { key: "van", name: "Family Van", sub: "Grand Starex · Staria", persons: "7 Persons", luggage: "7 Luggage", roundTrips: [900, 1225, 1525] },
  { key: "suv", name: "Luxury SUV", sub: "GMC Yukon XL · Suburban", persons: "7 Persons", luggage: "7 Luggage", roundTrips: [1345, 1875, 2175] },
  { key: "hiace", name: "Toyota Hiace", sub: "Group transport", persons: "10 Persons", luggage: "10 Luggage", roundTrips: [1125, 1425, 1725] },
  { key: "coaster", name: "Toyota Coaster", sub: "Mini coach", persons: "15 Persons", luggage: "25 Luggage", roundTrips: [1625, 2075, 2525] },
  { key: "bus", name: "King Long Bus", sub: "50-seater coach", persons: "50 Persons", luggage: "50 Luggage", roundTrips: [2325, 2825, 3525] },
];

/** Price order always matches VEHICLES: [sedan, van, suv, hiace, coaster, bus]. */
export interface FareRoute {
  from: string;
  to: string;
  prices: [number, number, number, number, number, number];
}

export const FARE_ROUTES: FareRoute[] = [
  { from: "Jeddah Airport", to: "Makkah Hotel", prices: [225, 275, 375, 350, 475, 825] },
  { from: "Makkah Hotel", to: "Jeddah Airport", prices: [225, 275, 325, 325, 425, 725] },
  { from: "Jeddah Airport", to: "Madinah Hotel", prices: [400, 525, 775, 600, 875, 1525] },
  { from: "Madinah Hotel", to: "Jeddah Airport", prices: [400, 500, 775, 575, 825, 1425] },
  { from: "Jeddah Airport", to: "Jeddah Hotel", prices: [175, 225, 275, 275, 375, 525] },
  { from: "Makkah Hotel", to: "Madinah Hotel", prices: [400, 500, 775, 600, 825, 1425] },
  { from: "Madinah Hotel", to: "Makkah Hotel", prices: [400, 500, 775, 575, 825, 1425] },
  { from: "Makkah Hotel", to: "Jeddah Hotel", prices: [225, 275, 325, 325, 425, 725] },
  { from: "Madinah Airport", to: "Madinah Hotel", prices: [155, 175, 275, 275, 375, 525] },
  { from: "Madinah Hotel", to: "Madinah Airport", prices: [155, 155, 245, 250, 325, 525] },
  { from: "Makkah Train Station", to: "Makkah Hotel", prices: [175, 175, 225, 225, 375, 425] },
  { from: "Madinah Train Station", to: "Madinah Hotel", prices: [175, 175, 225, 225, 325, 425] },
];

/** Ziyarat & day-trip fares (return unless noted). Same vehicle order. */
export interface ExtraFare {
  label: string;
  unit?: string;
  prices: [number, number, number, number, number, number];
}

export const EXTRA_FARES: ExtraFare[] = [
  { label: "Makkah Ziyarat tour", prices: [225, 250, 325, 325, 425, 625] },
  { label: "Madinah Ziyarat tour", prices: [225, 250, 325, 325, 425, 625] },
  { label: "Makkah Hotel → Masjid Aisha & return", prices: [175, 175, 225, 275, 325, 425] },
  { label: "Makkah Hotel → Masjid Ji'ranah & return", prices: [175, 225, 375, 425, 575, 575] },
  { label: "Makkah Hotel → Taif & return", prices: [425, 475, 725, 575, 875, 1225] },
  { label: "Madinah Hotel → Badr Ziyarat & return", prices: [425, 525, 675, 525, 875, 1025] },
  { label: "AlUla 12-hour tour", prices: [1025, 1225, 2275, 1525, 2275, 2525] },
  { label: "Makkah city taxi with driver", unit: "/ hr", prices: [95, 95, 125, 125, 125, 275] },
];

/** Round-trip Umrah packages — flow of stops + per-vehicle price. */
export interface RoundTrip {
  title: string;
  tag: string;
  image: string;
  stops: string[];
  prices: [number, number, number, number, number, number];
}

export const ROUND_TRIPS: RoundTrip[] = [
  {
    title: "Arrive Jeddah · Depart Madinah",
    tag: "One way across",
    image: "/images/home/home-hero-kaaba.webp",
    stops: ["Jeddah Airport", "Makkah Hotel", "Madinah Hotel", "Madinah Airport"],
    prices: [730, 900, 1345, 1125, 1625, 2325],
  },
  {
    title: "Jeddah Arrival & Departure",
    tag: "Full round trip",
    image: "/images/home/home-umrah-haram.webp",
    stops: ["Jeddah Airport", "Makkah Hotel", "Madinah Hotel", "Jeddah Airport"],
    prices: [975, 1225, 1875, 1425, 2075, 2825],
  },
  {
    title: "Jeddah Round Trip via Both Cities",
    tag: "Extended",
    image: "/images/home/home-hero-madinah.webp",
    stops: ["Jeddah Airport", "Makkah Hotel", "Madinah Hotel", "Makkah Hotel", "Jeddah Airport"],
    prices: [1175, 1525, 2175, 1725, 2525, 3525],
  },
];

/** Service categories. */
export const SERVICES: { Icon: LucideIcon; title: string; body: string }[] = [
  { Icon: Plane, title: "Airport Transfers", body: "Private pickup & drop-off at Jeddah and Madinah airports, with flight coordination." },
  { Icon: Route, title: "Intercity Transfers", body: "Comfortable private travel between Makkah, Madinah, Jeddah and Taif." },
  { Icon: Repeat, title: "Round-Trip Packages", body: "Complete arrival-to-departure Umrah transport, arranged end to end." },
  { Icon: MapPin, title: "Makkah Local", body: "Hotel, Haram, train station, shopping and Ihram transfers within Makkah." },
  { Icon: MapPin, title: "Madinah Local", body: "Masjid an-Nabawi, hotels, markets and Wadi-e-Jinn transfers in Madinah." },
  { Icon: Landmark, title: "Makkah Ziyarat", body: "Guided private tours of Makkah's historic Islamic sites and landmarks." },
  { Icon: Landmark, title: "Madinah Ziyarat", body: "Quba, Qiblatain, Uhud and the Seven Mosques with knowledgeable guides." },
  { Icon: Mountain, title: "Badr Ziyarat", body: "Private day trips to the historic battlefield and landmarks of Badr." },
  { Icon: Mountain, title: "Taif Sightseeing", body: "Scenic mountain day trips from Makkah or Jeddah with flexible stops." },
  { Icon: Building2, title: "Jeddah City Tours", body: "3-hour and 8-hour private Jeddah sightseeing and shopping tours." },
  { Icon: TrainFront, title: "Haramain Train Transfers", body: "To and from the high-speed railway stations in all three cities." },
  { Icon: Crown, title: "Group & VIP", body: "Sedans to 50-seat coaches — VIP, family and large-group transport." },
];

/** Intercity route groups. */
export const INTERCITY: { city: string; image: string; routes: string[] }[] = [
  { city: "From Makkah", image: "/images/home/home-transport-makkah.webp", routes: ["Makkah → Jeddah", "Makkah → Madinah", "Makkah → Taif", "Makkah → Jeddah Airport"] },
  { city: "From Madinah", image: "/images/home/home-transport-madinah.webp", routes: ["Madinah → Makkah", "Madinah → Jeddah", "Madinah → Jeddah Airport", "Madinah → Badr", "Madinah → AlUla", "Madinah → Taif"] },
  { city: "From Jeddah", image: "/images/home/home-transport-jeddah.webp", routes: ["Jeddah → Makkah", "Jeddah → Madinah", "Jeddah → Taif", "Jeddah → Makkah → Jeddah"] },
  { city: "Historic routes", image: "/images/ziarat/ziarat-makkah.webp", routes: ["Makkah → Madinah via Badr & Roha Well", "Madinah → Makkah via Badr & Roha Well", "Makkah → Madinah via Taif"] },
];

/** Local city transport. */
export const LOCAL: { city: string; image: string; items: string[] }[] = [
  {
    city: "Within Makkah",
    image: "/images/home/home-transport-makkah.webp",
    items: ["Haramain Train Station", "Masjid Aisha (Taneem)", "Masjid Al-Ji'ranah", "Shopping malls & markets", "Dates market", "Restaurants", "Relatives' residences", "Hourly private hire"],
  },
  {
    city: "Within Madinah",
    image: "/images/home/home-transport-madinah.webp",
    items: ["Haramain Train Station", "Masjid an-Nabawi", "Shopping malls", "Dates market", "Restaurants", "Relatives' residences", "Wadi-e-Jinn", "Hourly private hire"],
  },
];

/** Circular image galleries for the sightseeing tours. */
export const MAKKAH_GALLERY: { src: string; label: string }[] = [
  { src: "/images/home/home-hero-jabal.webp", label: "Jabal al-Noor" },
  { src: "/images/home/home-transport-makkah.webp", label: "Mount Arafat" },
  { src: "/images/ziarat/ziarat-makkah.webp", label: "Jabal Thawr" },
  { src: "/images/home/home-umrah-haram.webp", label: "Mina" },
  { src: "/images/home/home-umrah-tawaf.webp", label: "Masjid Aisha" },
];

export const MADINAH_GALLERY: { src: string; label: string }[] = [
  { src: "/images/home/home-transport-madinah.webp", label: "Mount Uhud" },
  { src: "/images/home/home-hero-quba.webp", label: "Masjid Quba" },
  { src: "/images/ziarat/ziarat-madinah.webp", label: "Masjid Qiblatain" },
  { src: "/images/home/home-hero-madinah.webp", label: "Masjid an-Nabawi" },
  { src: "/images/home/home-umrah-madinah.webp", label: "Saba Masajid" },
];

/** Ziyarat site lists. */
export const ZIYARAT: { city: string; sites: string[] }[] = [
  {
    city: "Makkah Ziyarat",
    sites: ["Jabal al-Noor (Cave Hira)", "Jabal Thawr (Cave Thawr)", "Jabal al-Rahmah (Arafat)", "Masjid Nimrah", "Muzdalifah", "Mina", "Masjid Al-Khayf", "Jannat Al-Mu'alla", "Masjid Al-Jinn", "Nehr Zubaida", "Masjid Aisha (Taneem)", "Masjid Al-Ji'ranah", "Hudaibiyah", "Kiswa Factory", "Makkah Museum", "Umm Al-Qura University"],
  },
  {
    city: "Madinah Ziyarat",
    sites: ["Masjid Quba", "Masjid Qiblatain", "Mount Uhud", "Uhud Martyrs' Cemetery", "Mount Rumah", "Khandaq Battlefield", "Seven Mosques (Saba Masajid)", "Masjid Jummah", "Salman Al-Farsi Garden", "Ghars Well", "Wadi-e-Jinn", "Madinah Museum"],
  },
];

/** Makkah sightseeing itinerary (ordered stops + dwell time). */
export const MAKKAH_TOUR: { name: string; time: string }[] = [
  { name: "Jabal Thawr", time: "15–20 min" },
  { name: "Al Rajhi Mosque", time: "Pass by" },
  { name: "Umm Al-Qura University", time: "Pass by" },
  { name: "Arafat Sightseeing", time: "Pass by" },
  { name: "Mount Arafat", time: "15–20 min" },
  { name: "Masjid-e-Nimrah", time: "Pass by" },
  { name: "Nehr Zubaida", time: "Pass by" },
  { name: "Muzdalifah", time: "Pass by" },
  { name: "Masjid al-Mashar al-Haram", time: "Pass by" },
  { name: "Mina Viewpoint & Wadi-e-Misr", time: "10 min" },
  { name: "Masjid Al-Khayf", time: "Pass by" },
  { name: "Jabal al-Noor (Cave Hira)", time: "15–20 min" },
  { name: "Jannat ul-Mu'alla", time: "Pass by" },
  { name: "Masjid Al-Jinn", time: "Pass by" },
  { name: "Masjid Shajarah", time: "Pass by" },
  { name: "Masjid e Fatah", time: "Pass by" },
];

/** Madinah sightseeing itinerary. */
export const MADINAH_TOUR: { name: string; time: string }[] = [
  { name: "Mountain Uhud", time: "25–30 min" },
  { name: "Shuhada Uhud Cemetery", time: "With Uhud" },
  { name: "Mount Rumah", time: "With Uhud" },
  { name: "Masjid-Al-Jummah", time: "Pass by" },
  { name: "Saba Masajid", time: "15 min" },
  { name: "Khandaq Battlefield", time: "15 min" },
  { name: "Masjid-Al-Qiblatayn", time: "20–25 min" },
  { name: "Masjid Quba", time: "20–25 min" },
  { name: "Garden Salman Farsi", time: "15 min" },
  { name: "Ghars Well", time: "10–15 min" },
];

export const TOUR_SLOTS = ["7 AM", "8 AM", "9 AM", "2 PM", "3 PM", "4 PM"];

/** Additional customer services. */
export const ADDITIONAL: { Icon: LucideIcon; label: string }[] = [
  { Icon: Accessibility, label: "Wheelchair transport & assistance" },
  { Icon: UserRound, label: "Male & female Umrah guides" },
  { Icon: Users, label: "Professional sightseeing guides" },
  { Icon: Baby, label: "Child seats on request" },
  { Icon: Coffee, label: "Refreshments during journeys" },
  { Icon: Droplets, label: "Zamzam water arrangements" },
  { Icon: Shirt, label: "Ihram delivery" },
  { Icon: Luggage, label: "Luggage assistance" },
  { Icon: ShoppingBag, label: "Shopping assistance & guides" },
  { Icon: Camera, label: "Family photography" },
  { Icon: BookOpen, label: "Museum & walking-tour guides" },
  { Icon: Flower2, label: "Flower bouquets & welcome" },
  { Icon: Gift, label: "Cakes & gift baskets" },
  { Icon: Utensils, label: "Meal arrangements (Al-Baik, Al-Romansiah)" },
];
