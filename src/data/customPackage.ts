import {
  Calendar,
  Users,
  Building2,
  Moon,
  Navigation,
  User,
  Phone,
  Mail,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export type CPField = {
  kind: "select" | "text" | "date" | "email" | "tel";
  placeholder: string;
  Icon: LucideIcon;
  options?: string[];
};

const HOTEL_TYPE = ["Economy", "3 Star", "4 Star", "5 Star", "Luxury"];
const NIGHTS = [1, 2, 3, 4, 5, 6, 7, 10, 14].map((n) => `${String(n).padStart(2, "0")} Nights`);

/** Umrah package customization. */
export const UMRAH_FIELDS: CPField[] = [
  { kind: "date", placeholder: "Departure Date", Icon: Calendar },
  { kind: "text", placeholder: "Number of Passengers", Icon: Users },
  { kind: "select", placeholder: "Hotel Type", Icon: Building2, options: HOTEL_TYPE },
  { kind: "text", placeholder: "Passenger Name", Icon: User },
  { kind: "tel", placeholder: "Contact Number", Icon: Phone },
];

/** Hajj package customization. */
export const HAJJ_FIELDS: CPField[] = [
  { kind: "date", placeholder: "Departure Date", Icon: Calendar },
  { kind: "text", placeholder: "Number of Pilgrims", Icon: Users },
  { kind: "select", placeholder: "Hotel Type", Icon: Building2, options: HOTEL_TYPE },
  { kind: "text", placeholder: "Pilgrim Name", Icon: User },
  { kind: "tel", placeholder: "Contact Number", Icon: Phone },
];

/** Custom transport / ride. */
export const RIDE_FIELDS: CPField[] = [
  { kind: "text", placeholder: "Pickup Location", Icon: MapPin },
  { kind: "text", placeholder: "Drop-off Location", Icon: Navigation },
  { kind: "date", placeholder: "Travel Date", Icon: Calendar },
  { kind: "text", placeholder: "Number of Passengers", Icon: Users },
  { kind: "tel", placeholder: "Contact Number", Icon: Phone },
];

/** Custom hotel / residency. */
export const HOTEL_FIELDS: CPField[] = [
  { kind: "select", placeholder: "City", Icon: MapPin, options: ["Makkah", "Madinah", "Jeddah"] },
  { kind: "date", placeholder: "Check-in Date", Icon: Calendar },
  { kind: "select", placeholder: "Nights", Icon: Moon, options: NIGHTS },
  { kind: "text", placeholder: "Number of Guests", Icon: Users },
  { kind: "text", placeholder: "Guest Name", Icon: User },
  { kind: "tel", placeholder: "Contact Number", Icon: Phone },
  { kind: "email", placeholder: "Email Address", Icon: Mail },
];
