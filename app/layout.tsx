import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kinara House — Bespoke Matchmaking for the ENM Community",
  description:
    "A bespoke matchmaking house for the ENM community. We curate high-chemistry connections for adventurous couples and intentional singles who have outgrown the noise of the apps.",
  openGraph: {
    title: "Kinara House — Bespoke Matchmaking for the ENM Community",
    description:
      "A bespoke matchmaking house for the ENM community. We curate high-chemistry connections for adventurous couples and intentional singles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <main>{children}</main>
        <CookieBanner />
      </body>
    </html>
  );
}
