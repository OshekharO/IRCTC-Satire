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
          "name": "Agent Network",
          "item": PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      "url": PAGE_URL,
      "name": "IRCTC Agent Network",
      "description":
        "A satirical directory and overview of unofficial IRCTC ticket agents and their 99% ticket guarantee.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
      },
    },
  ],
};

export default function AgentNetworkLayout({ children }: { children: ReactNode }) {
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
