import type { Metadata } from "next";
import type { ReactNode } from "react";

const BASE_URL = "https://irctc.eu.org";
const PAGE_URL = `${BASE_URL}/tatkal`;

export const metadata: Metadata = {
  title: "Tatkal Booking — The Great Indian Lottery",
  description:
    "₹1,500 for a chance to witness the fastest sellout in human history. All 72 Tatkal seats gone in 0.3 seconds every morning at 10 AM. A satirical guide to IRCTC's Tatkal booking system.",
  keywords: [
    "tatkal booking",
    "tatkal ticket IRCTC",
    "tatkal price",
    "tatkal quota",
    "irctc tatkal lottery",
    "tatkal seats sold out",
    "tatkal booking 10am",
    "tatkal premium charge",
    "tatkal confirmation chances",
    "IRCTC tatkal satire",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Tatkal Booking — The Great Indian Lottery",
    description:
      "Tickets available for 0.3 seconds every morning. Odds of success: 0.02%. A satirical breakdown of IRCTC's Tatkal system — pricing, bots, and why you'll never win.",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Tatkal Booking — IRCTC Satire" }],
    siteName: "IRCTC Satire",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tatkal Booking — The Great Indian Lottery | IRCTC Satire",
    description:
      "₹1,500 for a 0.3-second window. All seats gone before you finish typing. The definitive satirical guide to Tatkal.",
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
};

export default function TatkalLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
