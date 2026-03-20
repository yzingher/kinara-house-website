import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kinara House — Curated Matchmaking for London's ENM Community",
  description:
    "Done swiping. Start meeting. Kinara House is a curated matchmaking service for London's ENM community. No algorithms. No swiping. Just thoughtful introductions.",
  openGraph: {
    title: "Kinara House — Curated Matchmaking for London's ENM Community",
    description:
      "Done swiping. Start meeting. Kinara House is a curated matchmaking service for London's ENM community.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <body className="bg-[#1a1a1a] text-[#f5f0e8] antialiased">
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
