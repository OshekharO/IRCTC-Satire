import type { Metadata } from "next";
import type { ReactNode } from "react";

const BASE_URL = "https://irctc.eu.org";
const PAGE_URL = `${BASE_URL}/disappointment-calculator`;

export const metadata: Metadata = {
  title: "Disappointment Calculator™ — Predict Your IRCTC Frustration Score",
  description:
    "Enter your journey details and receive a scientifically accurate Frustration Score™ — personalised predictions for how badly IRCTC will let you down, powered by 25 years of Indian Railways data.",
  keywords: [
    "IRCTC frustration calculator",
    "disappointment calculator",
    "IRCTC booking failure prediction",
    "Indian Railways delay calculator",
    "tatkal failure probability",
    "IRCTC satire tool",
    "train booking disappointment",
    "irctc waiting list calculator",
    "railway frustration score",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Disappointment Calculator™ — Your IRCTC Frustration Score",
    description:
      "Powered by 25 years of Indian Railways data. Enter journey details, receive a scientifically accurate prediction of exactly how IRCTC will ruin your travel plans.",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "IRCTC Disappointment Calculator" }],
    siteName: "IRCTC Satire",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "IRCTC Disappointment Calculator™ | IRCTC Satire",
    description:
      "How badly will IRCTC let you down? Enter your journey details for a scientifically accurate Frustration Score™.",
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
};

export default function DisappointmentCalculatorLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
