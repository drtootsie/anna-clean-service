import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ana Clean Service | Professional House Cleaning in Kansas City & Overland Park",
  description: "Exceptional thoroughness and authentic clean. Professional residential, deep cleaning, move-in/out, and space organization in Overland Park, Leawood, Prairie Village, and Greater Kansas City.",
  keywords: [
    "house cleaning Kansas City",
    "maid service Overland Park",
    "deep cleaning Leawood",
    "residential cleaners Prairie Village",
    "move out cleaning KC",
    "Ana Clean Service"
  ],
  openGraph: {
    title: "Ana Clean Service | Professional House Cleaning in Kansas City",
    description: "Exceptional thoroughness, authentic clean. Owner-operated residential house cleaning across Overland Park & Greater KC.",
    type: "website",
    locale: "en_US",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HouseCleaningService",
  "name": "Ana Clean Service",
  "telephone": "+1-913-731-7373",
  "email": "annacleanservice3@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kansas City",
    "addressRegion": "KS",
    "addressCountry": "US"
  },
  "areaServed": [
    "Overland Park",
    "Leawood",
    "Prairie Village",
    "Mission Hills",
    "Olathe",
    "Lenexa",
    "Shawnee",
    "Kansas City"
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "52"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
