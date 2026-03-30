import type { Metadata } from "next";
import { EB_Garamond, Lato } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "700"],
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
    <html lang="en" className={`${garamond.variable} ${lato.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
