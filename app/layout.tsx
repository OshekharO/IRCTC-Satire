import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://irctc.eu.org"),
  title: {
    default: "IRCTC Satire — India's Most Reliable Ticket Frustration System",
    template: "%s | IRCTC Satire",
  },
  description:
    "Where your dreams of confirmed tickets go to die since 1999. A satirical roast of India's IRCTC booking experience — Tatkal disasters, server crashes, impossible captchas, and delay trackers.",
  keywords: [
    "IRCTC satire",
    "IRCTC meme",
    "IRCTC tatkal",
    "IRCTC server down",
    "IRCTC ticket booking funny",
    "Indian Railways satire",
    "IRCTC captcha meme",
    "train status satire",
  ],
  openGraph: {
    type: "website",
    url: "https://irctc.eu.org",
    title: "IRCTC Satire — India's Most Reliable Ticket Frustration System",
    description:
      "Where your dreams of confirmed tickets go to die since 1999. Experience Tatkal sellouts, delay generators, and the agent network.",
    images: [{ url: "https://irctc.eu.org/og-image.png", width: 1200, height: 630, alt: "IRCTC Satire" }],
    siteName: "IRCTC Satire",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "IRCTC Satire — India's Most Reliable Ticket Frustration System",
    description:
      "Where your dreams of confirmed tickets go to die since 1999. A satirical roast of IRCTC's Tatkal, captchas, and delays.",
    images: ["https://irctc.eu.org/og-image.png"],
  },
  alternates: {
    canonical: "https://irctc.eu.org",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://irctc.eu.org/#website",
      "url": "https://irctc.eu.org",
      "name": "IRCTC Satire",
      "description": "India's Most Reliable Ticket Frustration System — A satirical parody of IRCTC ticket booking.",
      "publisher": {
        "@id": "https://irctc.eu.org/#organization",
      },
      "inLanguage": "en-IN",
    },
    {
      "@type": "Organization",
      "@id": "https://irctc.eu.org/#organization",
      "name": "IRCTC Satire",
      "url": "https://irctc.eu.org",
      "logo": "https://irctc.eu.org/og-image.png",
      "sameAs": ["https://x.com/IRCTC_Problems"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
