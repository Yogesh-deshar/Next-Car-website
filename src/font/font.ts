import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap", // Prevents blocking, uses fallback until loaded
  weight: ["400", "600", "700"], // Specify needed weights
  variable: "--font-poppins", // For Tailwind/CSS vars
});