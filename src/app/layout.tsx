import type { Metadata } from "next";
import { Poppins, Bricolage_Grotesque, Outfit } from "next/font/google";
import "@/theme/tokens.css";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["600"], // SemiBold
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  // Bricolage Grotesque is a variable font by default, but we can specify weights if needed or rely on variable axes.
  // Including normal range for safety.
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
  metadataBase: new URL("https://omnoo.app"),
  title: "Omnoo ile Tanışın! 🥦 Mutfağın Yeni Neşesi",
  description: "Akşam yemeği planlamayı bir yük olmaktan çıkarıp eğlenceye dönüştürüyoruz. Bekleme listesine katıl, mutfaktaki değişimi ilk sen gör!",
  openGraph: {
    title: "Omnoo ile Tanışın! 🥦 Mutfağın Yeni Neşesi",
    description: "Akşam yemeği planlamayı bir yük olmaktan çıkarıp eğlenceye dönüştürüyoruz. Bekleme listesine katıl, mutfaktaki değişimi ilk sen gör!",
    url: "https://omnoo.app",
    siteName: "Omnoo",
    images: [
      {
        url: "/OG.png",
        width: 1200,
        height: 630,
        alt: "Omnoo - Mutfağın Yeni Neşesi",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omnoo ile Tanışın! 🥦 Mutfağın Yeni Neşesi",
    description: "Akşam yemeği planlamayı bir yük olmaktan çıkarıp eğlenceye dönüştürüyoruz.",
    images: ["/OG.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${bricolage.variable} ${outfit.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
