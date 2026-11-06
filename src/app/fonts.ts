import { Libre_Baskerville, Outfit } from "next/font/google";

/** Headings, prices, badge numbers — serif display face. */
export const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"], // non-variable font → weights required
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-libre",
});

/** Body, labels, buttons, nav — variable sans face. */
export const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});
