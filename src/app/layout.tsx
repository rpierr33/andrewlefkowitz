import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andrew Lefkowitz — Legal Professional & Business Leader",
  description:
    "Andrew Lefkowitz is an experienced legal professional and business leader. From securities law at Jones Day to CEO of Ganeden Biotech and Locus Fermentation Solutions.",
  keywords: [
    "Andrew Lefkowitz",
    "Ganeden Biotech",
    "Locus Fermentation Solutions",
    "biotech CEO",
    "business leader",
    "securities law",
  ],
  openGraph: {
    title: "Andrew Lefkowitz — Legal Professional & Business Leader",
    description:
      "From securities law at Jones Day to leading biotech companies that reached 60,000+ stores nationwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
