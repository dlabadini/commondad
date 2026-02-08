import { Caveat } from "next/font/google";
import { EB_Garamond } from "next/font/google";

export const Handwritten = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-handwritten",
  display: "swap",
});

export const DeclarationSerif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-declaration",
  display: "swap",
});
