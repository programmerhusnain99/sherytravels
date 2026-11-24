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

const PASSENGERS = ["01 Adult", "02 Adults", "03 Adults", "04 Adults", "Family (2 Adults + 2 Children)", "Group (5+)"];
const HOTEL_TYPE = ["Economy", "3 Star", "4 Star", "5 Star", "Luxury"];
const NIGHTS = [1, 2, 3, 4, 5, 6, 7, 10, 14].map((n) => `${String(n).padStart(2, "0")} Nights`);

/** Umrah package customization. */
export const UMRAH_FIELDS: CPField[] = [
  { kind: "date", placeholder: "Departure Date", Icon: Calendar },
  { kind: "select", placeholder: "Passengers", Icon: Users, options: PASSENGERS },
  { kind: "select", placeholder: "Hotel Type", Icon: Building2, options: HOTEL_TYPE },
  { kind: "text", placeholder: "Passenger Name", Icon: User },
  { kind: "tel", placeholder: "Contact Number", Icon: Phone },
  { kind: "email", placeholder: "Email Address", Icon: Mail },
];

/** Hajj package customization. */
export const HAJJ_FIELDS: CPField[] = [
  { kind: "date", placeholder: "Departure Date", Icon: Calendar },
  { kind: "select", placeholder: "Pilgrims", Icon: Users, options: PASSENGERS },
  { kind: "select", placeholder: "Hotel Type", Icon: Building2, options: HOTEL_TYPE },
  { kind: "text", placeholder: "Pilgrim Name", Icon: User },
  { kind: "tel", placeholder: "Contact Number", Icon: Phone },
  { kind: "email", placeholder: "Email Address", Icon: Mail },
];

/** Custom transport / ride. */
export const RIDE_FIELDS: CPField[] = [
  { kind: "text", placeholder: "Pickup Location", Icon: MapPin },
  { kind: "text", placeholder: "Drop-off Location", Icon: Navigation },
  { kind: "date", placeholder: "Travel Date", Icon: Calendar },
  { kind: "select", placeholder: "Passengers", Icon: Users, options: PASSENGERS },
  { kind: "text", placeholder: "Passenger Name", Icon: User },
  { kind: "tel", placeholder: "Contact Number", Icon: Phone },
  { kind: "email", placeholder: "Email Address", Icon: Mail },
];

/** Custom hotel / residency. */
export const HOTEL_FIELDS: CPField[] = [
  { kind: "select", placeholder: "City", Icon: MapPin, options: ["Makkah", "Madinah", "Jeddah"] },
  { kind: "date", placeholder: "Check-in Date", Icon: Calendar },
  { kind: "select", placeholder: "Nights", Icon: Moon, options: NIGHTS },
  { kind: "select", placeholder: "Guests", Icon: Users, options: PASSENGERS },
  { kind: "text", placeholder: "Guest Name", Icon: User },
  { kind: "tel", placeholder: "Contact Number", Icon: Phone },
  { kind: "email", placeholder: "Email Address", Icon: Mail },
];
