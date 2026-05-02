import type { Metadata } from "next";
import type { ReactNode } from "react";

const BASE_URL = "https://irctc.eu.org";
const PAGE_URL = `${BASE_URL}/agent-network`;

export const metadata: Metadata = {
  title: "IRCTC Agent Network — When IRCTC Fails You, We Deliver",
  description:
    "Certified IRCTC agents who guarantee confirmed tickets because they have something IRCTC doesn't: working software and railway station friendships. A satirical look at India's unofficial ticket mafia.",
  keywords: [
    "IRCTC agent",
    "ticket agent India",
    "tatkal agent booking",
    "irctc tout",
    "railway agent network",
    "confirmed ticket agent",
    "irctc black market tickets",
    "tatkal ticket agent price",
    "irctc agent commission",
    "buy confirmed train ticket",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "IRCTC Agent Network — When IRCTC Fails You, We Deliver",
    description:
      "Our certified agents guarantee tickets because they have something IRCTC doesn't: working software and railway station friendships. Unofficially official since 1999.",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "IRCTC Agent Network" }],
    siteName: "IRCTC Satire",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "IRCTC Agent Network | IRCTC Satire",
    description:
      "They have confirmed tickets when IRCTC has none. A satirical expose of India's unofficial railway agent ecosystem.",
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
};

export default function AgentNetworkLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
