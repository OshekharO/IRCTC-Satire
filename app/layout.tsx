import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://irctc.eu.org"),
  title: {
    default: "IRCTC Satire | India's Most Reliable Ticket Frustration System",
    template: "%s | IRCTC Satire",
  },
  description:
    "A satirical parody of IRCTC — India's official ticket booking nightmare. Explore Tatkal scams, server crashes, and the joy of never getting a confirmed ticket.",
  keywords: [
    "IRCTC satire",
    "Indian Railways parody",
    "Tatkal ticket scam",
    "IRCTC server down",
    "railway delay India",
    "IRCTC captcha impossible",
    "train late India",
    "IRCTC agent tout",
    "Indian Railways comedy",
    "IRCTC frustration",
    "tatkal booking nightmare",
    "irctc website crash",
  ],
  authors: [{ name: "A Frustrated Train Passenger" }],
  creator: "IRCTC Satire",
  publisher: "IRCTC Satire",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.irctc.eu.org",
    siteName: "IRCTC Satire",
    title: "IRCTC Satire | India's Most Reliable Ticket Frustration System",
    description:
      "A satirical parody of IRCTC — India's official ticket booking nightmare. Explore Tatkal scams, server crashes, and the joy of never getting a confirmed ticket.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IRCTC Satire - India's Most Reliable Ticket Frustration System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRCTC Satire | India's Most Reliable Ticket Frustration System",
    description:
      "A satirical parody of IRCTC. Server down. Captcha impossible. Agents bought all tickets. The authentic Indian Railways experience.",
    images: ["/og-image.png"],
    creator: "@IRCTC_Problems",
  },
  alternates: {
    canonical: "https://www.irctc.eu.org",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "IRCTC Satire",
  url: "https://www.irctc.eu.org",
  description:
    "A satirical parody of IRCTC — India's official ticket booking nightmare.",
  author: {
    "@type": "Person",
    name: "A Frustrated Train Passenger",
  },
  inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      </body>
    </html>
  );
}
