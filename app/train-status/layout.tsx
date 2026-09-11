import type { Metadata } from "next";
import type { ReactNode } from "react";

const BASE_URL = "https://irctc.eu.org";
const PAGE_URL = `${BASE_URL}/train-status`;

export const metadata: Metadata = {
  title: "Train Status — Confirmed: It's Late",
  description:
    "Check the real-time status of any train. Spoiler: it's running late. The only variable is by how much. A satirical Indian Railways train status tracker with 100% delay accuracy.",
  keywords: [
    "train status India",
    "IRCTC train running status",
    "Indian Railways delay",
    "train late India",
    "where is my train",
    "train status check",
    "IRCTC live train status",
    "train delay reason India",
    "railway status satire",
    "train running late India",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Train Status — Confirmed: It's Late",
    description:
      "LIVE: All 12,000 trains currently delayed. Check the status of any Indian Railways train — the only variable is how late. A satirical real-time train tracker.",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Train Status — IRCTC Satire" }],
    siteName: "IRCTC Satire",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Train Status — Confirmed: It's Late | IRCTC Satire",
    description:
      "All 12,000 trains running late. Check your train's status — we'll tell you exactly how late and why (spoiler: cow on tracks).",
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BASE_URL,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Train Status",
          "item": PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebApplication",
      "@id": PAGE_URL,
      "url": PAGE_URL,
      "name": "Train Status Checker",
      "applicationCategory": "TravelApplication",
      "operatingSystem": "Any",
      "description":
        "Check the real-time status and satirical delay reasons for any Indian Railways train.",
      "browserRequirements": "Requires JavaScript",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
      },
    },
  ],
};

export default function TrainStatusLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
