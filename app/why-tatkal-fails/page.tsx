import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ShareButtons from "@/components/ShareButtons";
import MemeCard from "@/components/MemeCard";
import RelatedArticles from "@/components/RelatedArticles";

const BASE_URL = "https://irctc-satire.vercel.app";
const PAGE_URL = `${BASE_URL}/why-tatkal-fails`;

export const metadata: Metadata = {
  title: "Why Tatkal Fails Every Time: The Real Reasons Behind IRCTC's Booking Disaster",
  description:
    "Discover the real reasons why Tatkal booking fails every time — bots, agents, server crashes, and IRCTC's legendary infrastructure. A satirical deep-dive into the Tatkal booking problem every Indian faces.",
  keywords: [
    "why tatkal fails",
    "tatkal booking problem",
    "tatkal fails every time",
    "irctc tatkal issue",
    "tatkal ticket not available",
    "tatkal booking problem solution",
    "irctc server down tatkal",
    "tatkal agents bots irctc",
    "tatkal quota sold out",
    "irctc tatkal problem today",
    "why tatkal tickets sold in seconds",
    "irctc booking failure reasons",
  ],
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Why Tatkal Fails Every Time: The Real Reasons Behind IRCTC's Booking Disaster",
    description:
      "A satirical deep-dive into why tatkal booking fails — bots, agents, server crashes, and IRCTC's undying ability to disappoint 1.4 billion people simultaneously.",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 }],
    siteName: "IRCTC Satire",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Tatkal Fails Every Time | IRCTC Satire",
    description:
      "Bots buy all seats in 0.3 seconds. Server crashes at 10 AM. Agents already have your ticket. A complete satirical guide to why tatkal always fails.",
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Tatkal Fails Every Time: The Real Reasons Behind IRCTC's Booking Disaster",
  description:
    "A satirical analysis of why tatkal booking fails — covering bots, agents, server infrastructure, and the systematic design failures of IRCTC's Tatkal system.",
  url: PAGE_URL,
  image: `${BASE_URL}/og-image.png`,
  author: { "@type": "Person", name: "A Frustrated Train Passenger" },
  publisher: { "@type": "Organization", name: "IRCTC Satire", url: BASE_URL },
  datePublished: "2024-12-01",
  dateModified: "2024-12-01",
  inLanguage: "en-IN",
  keywords: "why tatkal fails, tatkal booking problem, irctc tatkal issue",
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
};

const reasons = [
  {
    num: "01",
    icon: "🤖",
    title: "Bots & Automated Scripts Buy Everything in Milliseconds",
    badge: "Root Cause #1",
    badgeColor: "bg-red-100 text-red-700",
    body: [
      "The moment the Tatkal window opens at 10:00:00 AM, professional agents deploy automated booking bots that can complete the entire booking flow — login, passenger details, seat selection, payment — in under 300 milliseconds.",
      "Meanwhile, you are still typing your username. The bots have already bought seats 1–72, confirmed payment, and logged out.",
      "IRCTC has officially acknowledged the bot problem multiple times and has responded by making the captcha slightly more illegible. This has not helped.",
    ],
    quote:
      "\"We are actively working to curb the menace of bots.\" — IRCTC, every year since 2012",
    quoteType: "warning",
  },
  {
    num: "02",
    icon: "💻",
    title: "IRCTC Servers Run on Hope and Ancient Hardware",
    badge: "Root Cause #2",
    badgeColor: "bg-orange-100 text-orange-700",
    body: [
      "Every morning at 10:00 AM, approximately 80 lakh people simultaneously try to open the IRCTC website. The servers — reportedly last upgraded during the UPA government — greet this traffic with the digital equivalent of a white flag.",
      "The peak load causes the server to enter what engineers call a 'meditative state' — technically running, but not responding to any requests from humans.",
      "IRCTC has a stated server capacity of ~7.2 lakh concurrent users. With 80 lakh users showing up every Tatkal window, the servers do what any overworked government employee would do: go on involuntary leave.",
    ],
    quote:
      "\"Server is down due to high traffic. Please try after some time.\" — Error message that has been displayed since 2009",
    quoteType: "error",
  },
  {
    num: "03",
    icon: "🏪",
    title: "The Licensed Agent Network Has an Unfair Technical Advantage",
    badge: "Root Cause #3",
    badgeColor: "bg-purple-100 text-purple-700",
    body: [
      "Licensed IRCTC agents — both authorized and unauthorized — often have dedicated high-speed leased line connections, pre-filled booking software, saved payment credentials, and in some cases, prioritized API access.",
      "When you're on a 40 Mbps home WiFi fighting a 6-year-old browser against a trained booking professional with a 1 Gbps leased line and automation software — you were never going to win.",
      "The tout ecosystem has evolved into a parallel economy. Tatkal tickets bought at ₹850 are sold at ₹2,500+ on festival days. Demand is infinite. Supply is 72 seats. Economics 101.",
    ],
    quote:
      "\"Just call bhaiya, woh ticket dila dega. Thoda zyada lagega, but confirmed milega.\" — Every Indian uncle ever",
    quoteType: "desi",
  },
  {
    num: "04",
    icon: "🧩",
    title: "The Captcha Is Designed to Stop Humans, Not Bots",
    badge: "Root Cause #4",
    badgeColor: "bg-yellow-100 text-yellow-700",
    body: [
      "IRCTC's captcha — a rotating, blurry image-based puzzle that requires identifying partially hidden characters in fonts that haven't been legal since the Geneva Convention — takes the average human 8–12 seconds to solve.",
      "Modern bots solve it in 0.1 seconds using machine learning, or simply bypass it entirely through API calls.",
      "The captcha, in practice, functions as a speed bump that slows down legitimate users while barely inconveniencing professional bots. It is, in every technical sense, backwards.",
    ],
    quote:
      "\"I failed the captcha 7 times. My 8-year-old solved it in 2 seconds. I don't know what this says about me.\" — Actual user review",
    quoteType: "info",
  },
  {
    num: "05",
    icon: "💳",
    title: "Payment Gateway Fails at the Last Microsecond",
    badge: "Root Cause #5",
    badgeColor: "bg-blue-100 text-blue-700",
    body: [
      "Even in the rare scenario where a human successfully navigates through server errors, login loops, and impossible captchas to reach the payment page — the payment gateway has its own ideas.",
      "Session timeouts during payment are so common that IRCTC's own FAQ dedicates an entire section to 'what to do when money is deducted but no ticket is issued' — which essentially answers: 'wait 7 business days and pray.'",
      "In a particularly poetic design choice, a payment failure often logs you out and clears your cart. You must start over. From login. Freshly captcha'd.",
    ],
    quote:
      "\"Transaction failed. Amount deducted. Ticket not issued. This is your 3rd time. We understand your frustration.\" — IRCTC confirmation email nobody wanted",
    quoteType: "error",
  },
  {
    num: "06",
    icon: "📅",
    title: "Tatkal Quota Is Absurdly Small for India's Scale",
    badge: "Root Cause #6",
    badgeColor: "bg-green-100 text-green-700",
    body: [
      "A typical Tatkal quota for a popular express train is 72 seats in sleeper and 30 in 3AC. India has 1.4 billion people. On busy routes — Mumbai–Delhi, Delhi–Patna, Chennai–Bangalore — hundreds of thousands of passengers want these seats every day.",
      "The mathematical probability of a random individual getting a Tatkal ticket on a popular route has been estimated at approximately 0.02%. You have better odds winning a state lottery.",
      "This is not a technology problem. It's a supply problem. No amount of website optimization helps when demand exceeds supply by a factor of 1,000.",
    ],
    quote:
      "\"72 seats. 80,000 people trying. Sir, aap bhi try karte raho.\" — Math, being honest",
    quoteType: "desi",
  },
];

const memes = [
  {
    topText: "Me: Opens IRCTC at 9:59 AM sharp",
    bottomText: "IRCTC at 10:00:00 AM: SOLD OUT",
    emoji: "💀",
    variant: "dark" as const,
    bgColor: "bg-gray-900",
  },
  {
    topText: "Bots at 9:59:59 AM:",
    bottomText: "Already booked all 72 seats 😂",
    emoji: "🤖",
    variant: "desi" as const,
    bgColor: "bg-gray-800",
  },
  {
    topText: "IRCTC captcha: identify all blurry trains",
    bottomText: "Me, an actual train passenger:",
    emoji: "😵‍💫",
    variant: "dark" as const,
    bgColor: "bg-gray-900",
  },
  {
    topText: "Payment deducted ✅",
    bottomText: "Ticket issued ❌ (Welcome to IRCTC)",
    emoji: "🙃",
    variant: "desi" as const,
    bgColor: "bg-gray-800",
  },
];

const relatedArticles = [
  {
    href: "/tatkal-tips",
    title: "Tatkal Booking Tips: 11 Ways to Book Fast (+ The One That Actually Works)",
    description:
      "A satirical guide to tatkal booking tips — speed tricks, browser hacks, and the one reliable method every Indian already knows.",
    badge: "Tatkal Tips",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    href: "/tatkal",
    title: "The Tatkal Experience: Watch Tickets Disappear in 0.3 Seconds",
    description:
      "Full guide to Tatkal pricing, the real-time SOLD OUT timer, and why every step in the process is designed to break your spirit.",
    badge: "Tatkal",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    href: "/agent-network",
    title: "The Agent Network: When IRCTC Fails, Bhaiya Delivers",
    description:
      "Meet the certified agents who guarantee tickets that IRCTC can't. Premium pricing, guaranteed results, no captcha required.",
    badge: "Agents",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    href: "/hall-of-shame",
    title: "IRCTC Hall of Shame: Greatest Failures in Railway Booking History",
    description:
      "A curated museum of IRCTC's finest moments — legendary server crashes, impossible captchas, and record-breaking train delays.",
    badge: "Hall of Shame",
    badgeColor: "bg-orange-100 text-orange-700",
  },
];

export default function WhyTatkalFailsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection
        title="Why Tatkal Fails Every Single Time"
        subtitle="Six brutally honest reasons why your Tatkal booking attempt was doomed before you even opened the website."
        badge="📖 6 Root Causes Exposed"
      />

      {/* Intro + Share */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-600 mb-8">
            <p className="text-lg leading-relaxed">
              Every day, millions of Indians wake up at 9:55 AM, make tea, open
              IRCTC, and faithfully attempt to book a Tatkal ticket. Every day,
              the result is the same: <strong className="text-accent">SOLD OUT</strong> before
              a single human being had a chance.
            </p>
            <p className="leading-relaxed mt-4">
              This is not bad luck. It is not your internet connection. It is a
              predictable, systemic failure that has six very specific root
              causes — and IRCTC has been aware of most of them for over a
              decade.
            </p>
          </div>

          <ShareButtons
            url={PAGE_URL}
            title="Why Tatkal Fails Every Time — The Real Reasons Explained"
            message="Yaar ye padh — exactly why tatkal kabhi nahi milta 😭 #IRCTC"
          />
        </div>
      </section>

      {/* The 6 Reasons */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto space-y-12">
          {reasons.map((reason, idx) => (
            <article key={reason.num} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-primary px-6 py-4 flex items-center gap-3">
                <span className="text-3xl">{reason.icon}</span>
                <div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${reason.badgeColor} inline-block mb-1`}>
                    {reason.badge}
                  </span>
                  <h2 className="text-white font-extrabold text-lg leading-tight">
                    {reason.num}. {reason.title}
                  </h2>
                </div>
              </div>

              <div className="px-6 py-6 space-y-4">
                {reason.body.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                ))}

                <blockquote
                  className={`border-l-4 pl-4 italic text-sm rounded-r-lg py-3 pr-4 mt-4 ${
                    reason.quoteType === "error"
                      ? "border-accent bg-red-50 text-red-700"
                      : reason.quoteType === "warning"
                      ? "border-yellow-400 bg-yellow-50 text-yellow-800"
                      : reason.quoteType === "desi"
                      ? "border-orange-400 bg-orange-50 text-orange-800"
                      : "border-blue-400 bg-blue-50 text-blue-700"
                  }`}
                >
                  {reason.quote}
                </blockquote>
              </div>

              {/* Internal link nudge every 2 reasons */}
              {idx === 1 && (
                <div className="px-6 pb-5">
                  <Link
                    href="/tatkal"
                    className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
                  >
                    🎰 See the Tatkal SOLD OUT timer in action →
                  </Link>
                </div>
              )}
              {idx === 3 && (
                <div className="px-6 pb-5">
                  <Link
                    href="/tatkal-tips"
                    className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
                  >
                    💡 Still want to try? Read our satirical Tatkal Tips →
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Memes section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              Relatable Tatkal Content 😭
            </h2>
            <p className="text-gray-400">
              Share karo — har koi samjhega immediately.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {memes.map((meme, i) => (
              <MemeCard key={i} {...meme} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <ShareButtons
              url={PAGE_URL}
              title="Why Tatkal Booking Fails Every Time — Hilarious & True"
              message="😂 Ek baar padho zaroor — tatkal kyun kabhi nahi milta, explained perfectly"
              className="justify-center"
            />
          </div>
        </div>
      </section>

      {/* TL;DR summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-primary rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-extrabold mb-4">
              TL;DR — Why Tatkal Always Fails
            </h2>
            <ul className="space-y-3 text-blue-100 text-sm leading-relaxed">
              {[
                "Bots buy all seats in under 300 milliseconds — before any human can reach the payment page",
                "IRCTC servers crash under peak Tatkal load every single day",
                "Licensed agents have technical and infrastructure advantages that regular users don't",
                "The captcha slows down humans more than bots — it's genuinely backwards",
                "Payment gateways fail at the final step, deducting money without issuing tickets",
                "Tatkal quota (72 seats) is absurdly small vs. demand (80,000+ users per route)",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold mt-0.5">{i + 1}.</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-blue-800 flex flex-col sm:flex-row gap-3">
              <Link
                href="/tatkal-tips"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors text-sm"
              >
                💡 Tatkal Booking Tips →
              </Link>
              <Link
                href="/agent-network"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                📞 Just Call an Agent →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedArticles heading="More IRCTC Suffering" articles={relatedArticles} />
    </>
  );
}
