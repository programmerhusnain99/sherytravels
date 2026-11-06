/**
 * "First choice" reasons (homepage station-rail section). Verbatim client copy.
 * `icon` is a key mapped to an inline SVG in the Icon component.
 */

export interface Feature {
  num: string;
  icon: "premium" | "handshake" | "shuttle" | "tune";
  title: string;
  body: string;
}

export const FEATURES: Feature[] = [
  {
    num: "01",
    icon: "premium",
    title: "Decades of Experience",
    body: "We are with you step by step on this emotional and sacred journey, as we’ve helped thousands of pilgrims before.",
  },
  {
    num: "02",
    icon: "handshake",
    title: "Professional Guidance",
    body: "We make the traveling process, and the actual pilgrimage experience easy for you by handling everything ourselves.",
  },
  {
    num: "03",
    icon: "shuttle",
    title: "Reliable Transportation",
    body: "Travel in air-conditioned vehicles, with experienced drivers and flexible pick-up options, so you do not have to worry.",
  },
  {
    num: "04",
    icon: "tune",
    title: "Customized Services",
    body: "We cater to all travelers’ needs, whether affordable or luxurious. Your pilgrimage will be comfortable and smooth.",
  },
];
