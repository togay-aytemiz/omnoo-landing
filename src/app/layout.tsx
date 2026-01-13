import type { Metadata } from "next";
import { Poppins, Fraunces, Outfit } from "next/font/google";
import "@/theme/tokens.css";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["600"], // SemiBold
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  weight: ["500", "700"], // Medium, Bold
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["400", "600"], // Regular, SemiBold
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omnoo - Your AI Personal Chef",
  description: "Personalized weekly meal plans based on your routine, preferences, and lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${fraunces.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
