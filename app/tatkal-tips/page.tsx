import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ShareButtons from "@/components/ShareButtons";
import MemeCard from "@/components/MemeCard";
import RelatedArticles from "@/components/RelatedArticles";

const BASE_URL = "https://www.irctc.eu.org";
const PAGE_URL = `${BASE_URL}/tatkal-tips`;

export const metadata: Metadata = {
  title: "Tatkal Booking Tips: 11 Ways to Book Fast (The One That Actually Works)",
  description:
    "The ultimate guide to tatkal booking tips — browser tricks, speed hacks, OTP prep and the one tip that 99% of Indians secretly rely on. How to book tatkal tickets fast on IRCTC.",
  keywords: [
    "tatkal booking tips",
    "how to book tatkal fast",
    "tatkal ticket booking tips",
    "irctc tatkal tips",
    "tatkal booking tricks",
    "how to get tatkal ticket",
    "tatkal booking kaise kare",
    "irctc fast booking tips",
    "tatkal ticket booking guide",
    "irctc tatkal booking process",
    "get tatkal ticket confirmed",
    "book tatkal ticket quickly",
  ],
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Tatkal Booking Tips: 11 Ways to Book Fast (The One That Actually Works)",
    description:
      "Satirical but accurate — everything you should try before accepting defeat and calling an agent. How to book tatkal tickets fast on IRCTC.",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 }],
    siteName: "IRCTC Satire",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tatkal Booking Tips | 11 Ways (+ The 1 That Works) | IRCTC Satire",
    description:
      "Browser tricks, speed hacks, saved credentials — and the one tatkal tip every Indian already knows. A complete satirical guide.",
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Book Tatkal Tickets Fast on IRCTC",
  description:
    "A satirical step-by-step guide on how to book tatkal tickets fast on IRCTC — including the tip that actually works.",
  url: PAGE_URL,
  image: `${BASE_URL}/og-image.png`,
  author: { "@type": "Person", name: "A Frustrated Train Passenger" },
  publisher: { "@type": "Organization", name: "IRCTC Satire", url: BASE_URL },
  datePublished: "2026-05-01",
  inLanguage: "en-IN",
  step: [
    {
      "@type": "HowToStep",
      name: "Pre-fill your IRCTC profile",
      text: "Save all passenger details in your IRCTC profile so you don't waste time typing during booking.",
    },
    {
      "@type": "HowToStep",
      name: "Use a fast browser",
      text: "Use Google Chrome or Firefox with all extensions disabled to get the fastest page load.",
    },
    {
      "@type": "HowToStep",
      name: "Prepare payment in advance",
      text: "Keep your UPI or card details ready. Pre-authorize your payment method to save time.",
    },
    {
      "@type": "HowToStep",
      name: "Open multiple tabs",
      text: "Open three tabs with IRCTC loaded and ready to go before 10 AM.",
    },
    {
      "@type": "HowToStep",
      name: "Call a ticket agent",
      text: "The one tip that actually works. A professional agent with bots and leased lines will secure your ticket in milliseconds.",
    },
  ],
};

const tips = [
  {
    num: "01",
    icon: "⚡",
    title: "Use a Wired Connection (Not WiFi)",
    category: "Somewhat Useful",
    categoryColor: "bg-green-100 text-green-700",
    genuinelyUseful: true,
    content:
      "Reduce latency by plugging into ethernet instead of WiFi. A wired connection can shave 20–50ms off your page loads. At Tatkal speeds, 20ms is the difference between WL/892 and SOLD OUT — so you'll still be getting WL/892, just with slightly better self-esteem.",
    satireBite:
      "Pro tip: Also sacrifice a coconut at your nearest Ganesh temple. Statistically similar success rate to the ethernet cable.",
  },
  {
    num: "02",
    icon: "💾",
    title: "Pre-fill All Passenger Details in Your Profile",
    category: "Actually Useful",
    categoryColor: "bg-blue-100 text-blue-700",
    genuinelyUseful: true,
    content:
      "Save every passenger's name, age, ID proof, and berth preferences in your IRCTC profile master list before the day of booking. During Tatkal, every saved keystroke is 0.3 seconds. You want to remove every possible friction point.",
    satireBite:
      "Fun fact: By the time you finish typing your name, a bot has already booked, cancelled, and relisted your seat at a 200% markup.",
  },
  {
    num: "03",
    icon: "🌐",
    title: "Disable All Browser Extensions",
    category: "Actually Useful",
    categoryColor: "bg-blue-100 text-blue-700",
    genuinelyUseful: true,
    content:
      "Ad blockers, VPNs, password managers and tracking blockers can all slow down IRCTC's already suffering page loads. Disable every extension before your 10 AM session. Use an incognito window if possible — it starts with a clean slate.",
    satireBite:
      "IRCTC's website is so poorly optimized that extensions actually make it worse. Removing them gets you back to baseline terrible, which is the best-case scenario.",
  },
  {
    num: "04",
    icon: "📱",
    title: "Have Your OTP Phone Unlocked and Ready",
    category: "Actually Useful",
    categoryColor: "bg-blue-100 text-blue-700",
    genuinelyUseful: true,
    content:
      "Payment OTPs expire in 30–60 seconds. If your phone is locked, on silent, in another room, or occupied by someone playing candy crush, you will miss it. Place your phone face-up, volume on, unlocked, right next to you.",
    satireBite:
      "The OTP arrives in exactly 29 seconds when the expiry is 30. IRCTC and your bank's servers are in a secret conspiracy against you.",
  },
  {
    num: "05",
    icon: "🗓️",
    title: "Book at Exactly 10:00:00 AM — Not 10:00:01",
    category: "Theoretically Useful",
    categoryColor: "bg-yellow-100 text-yellow-700",
    genuinelyUseful: false,
    content:
      "Tatkal opens at exactly 10:00:00 AM IST. Sync your phone/computer clock with an atomic clock app beforehand. Have your cursor hovering over the Book button. Click at the exact millisecond. Stare into the abyss as it says SOLD OUT anyway.",
    satireBite:
      "The bots opened at 9:59:59.7 AM. Your 10:00:00.000 was already too late. But it's still good practice for developing punctuality.",
  },
  {
    num: "06",
    icon: "🖥️",
    title: "Open 3 Tabs Simultaneously (The Tab Juggle Strategy)",
    category: "Somewhat Useful",
    categoryColor: "bg-green-100 text-green-700",
    genuinelyUseful: false,
    content:
      "Open three separate IRCTC tabs with your journey details pre-entered. At 10 AM, submit all three simultaneously. This triples your chances from 0.02% to approximately 0.06%. Still not a good number, but mathematically superior.",
    satireBite:
      "This strategy gives you three simultaneous payment failure notifications instead of one. Silver lining: you feel busier.",
  },
  {
    num: "07",
    icon: "📲",
    title: "Try the IRCTC Rail Connect App Instead",
    category: "Theoretically Useful",
    categoryColor: "bg-yellow-100 text-yellow-700",
    genuinelyUseful: false,
    content:
      "Some users report that the mobile app is slightly faster than the website because it uses native API calls. Download it, log in, and have the booking screen ready. Note: The app crashes during peak Tatkal load with the same commitment as the website.",
    satireBite:
      "The IRCTC app has a 2.4-star rating on the Play Store. 1.2 stars of that is from people who gave it 5 stars by accident while trying to submit a complaint.",
  },
  {
    num: "08",
    icon: "💳",
    title: "Use UPI Autopay or a Saved Card — Not Net Banking",
    category: "Actually Useful",
    categoryColor: "bg-blue-100 text-blue-700",
    genuinelyUseful: true,
    content:
      "Net banking redirects you to your bank's website, adds an extra login step, and gives you 3 more pages to time out on. Use IRCTC iMudra wallet, a saved debit/credit card, or UPI with a 6-digit PIN you can type in under 2 seconds.",
    satireBite:
      "IRCTC's payment gateway has successfully charged users for tickets that don't exist since 2008. They've had plenty of practice — just not at the part where the ticket gets issued.",
  },
  {
    num: "09",
    icon: "🤝",
    title: "Book in a Group — Assign Roles",
    category: "Somewhat Useful",
    categoryColor: "bg-green-100 text-green-700",
    genuinelyUseful: false,
    content:
      "If multiple people are travelling, assign booking roles: Person A enters passenger details, Person B is on payment standby with card in hand, Person C handles OTP. This shaves critical seconds during each phase. It also requires convincing your family to wake up before 10 AM, which may be harder than getting the ticket.",
    satireBite:
      "Your family's group booking WhatsApp thread will still be active 6 years later, titled 'Delhi Trip Planning 2026 🚂' with 847 messages and zero confirmed tickets.",
  },
  {
    num: "10",
    icon: "🧘",
    title: "Accept Defeat Gracefully and Check Waitlist Trends",
    category: "Wisdom",
    categoryColor: "bg-purple-100 text-purple-700",
    genuinelyUseful: true,
    content:
      "If you get a waitlist, check historical confirmation rates on sites like ConfirmTkt or RailYatri. WL/23 on a popular route two days before travel has a decent chance of confirmation. Sometimes the system works — mostly by accident, but still.",
    satireBite:
      "Checking waitlist trends is the most mentally healthy thing you can do at 10:05 AM after your 8th server error. Also, breathing helps.",
  },
  {
    num: "11",
    icon: "📞",
    title: "The One Tip That Always Works",
    category: "100% Success Rate",
    categoryColor: "bg-accent/10 text-accent",
    genuinelyUseful: true,
    isSpecial: true,
    content:
      "Call a licensed (or unlicensed — who's asking?) ticket agent. Tell them the train, date, class, and number of passengers. Pay 20–40% above ticket price. Receive confirmed ticket. Done.",
    satireBite:
      "This is the most widely used tatkal booking tip in India. It works because the agent deploys the same bots and infrastructure that defeat you every morning — except now they're working for you. India jugaad at its finest.",
  },
];

const memes = [
  {
    topText: "Tatkal booking tip #1: Use fast internet",
    bottomText: "Bot speed: 0.3ms. Your speed: irrelevant",
    emoji: "😂",
    variant: "desi" as const,
    bgColor: "bg-gray-900",
  },
  {
    topText: "Me following all 10 tatkal tips perfectly",
    bottomText: "Still WL/734 💀",
    emoji: "🤦",
    variant: "dark" as const,
    bgColor: "bg-gray-900",
  },
  {
    topText: "The one tatkal tip that always works:",
    bottomText: "Bhai ko call karo 📞",
    emoji: "😤",
    variant: "desi" as const,
    bgColor: "bg-gray-800",
  },
  {
    topText: "IRCTC captcha at 10:00:01 AM:",
    bottomText: "Please identify 17 bicycles in this potato image",
    emoji: "🤡",
    variant: "dark" as const,
    bgColor: "bg-gray-900",
  },
];

const relatedArticles = [
  {
    href: "/why-tatkal-fails",
    title: "Why Tatkal Fails Every Time: 6 Root Causes Explained",
    description:
      "Even with perfect preparation, you'll lose. Here's the systemic reason why — bots, agents, server crashes, and IRCTC's legendary infrastructure.",
    badge: "Root Causes",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    href: "/tatkal",
    title: "The Tatkal Experience: Watch Tickets Disappear in Real-Time",
    description:
      "A live SOLD OUT timer, pricing breakdown, and the 10-step journey that always ends at step 10: call an agent.",
    badge: "Tatkal",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    href: "/agent-network",
    title: "The Agent Network: Guaranteed Tickets When IRCTC Can't Deliver",
    description:
      "Meet our certified agents with 99.8% success rates. No captcha. No server errors. Just results (at a price).",
    badge: "Agents",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    href: "/train-status",
    title: "Train Status: It's Late. How Late? Let's Find Out.",
    description:
      "Track your train's delay in real time. Spoiler: if you need to ask, it's late. How late? Yes.",
    badge: "Train Status",
    badgeColor: "bg-blue-100 text-blue-700",
  },
];

export default function TatkalTipsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <HeroSection
        title="How to Book Tatkal Fast: 11 Tips (+ The 1 That Works)"
        subtitle="Prepare your browser. Save your credentials. Pre-fill your details. Accept defeat. Call an agent. The complete guide."
        badge="💡 11 Tips — 1 Guaranteed"
      />

      {/* Intro + Share */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-gray-600 space-y-4 mb-8">
            <p className="text-lg leading-relaxed">
              Every Indian who has tried Tatkal booking has Googled <em>"how to book tatkal fast"</em> at
              some point. We see you. We are you.
            </p>
            <p className="leading-relaxed">
              Below are 11 tatkal booking tips — 4 of which are genuinely useful,
              several of which are touching in their optimism, and one of which has a
              100% success rate that 90% of India already knows about. We list all of
              them so you can feel you tried everything before arriving at Tip #11.
            </p>
            <div className="flex flex-wrap gap-3 text-sm mt-4">
              <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full">
                ✅ Actually Useful: 4 tips
              </span>
              <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">
                🤞 Somewhat Useful: 3 tips
              </span>
              <span className="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-700 font-semibold px-3 py-1 rounded-full">
                😐 Theoretically Useful: 2 tips
              </span>
              <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold px-3 py-1 rounded-full">
                📞 Always Works: 1 tip
              </span>
            </div>
          </div>

          <ShareButtons
            url={PAGE_URL}
            title="Tatkal Booking Tips: 11 Ways to Book Fast (The 1 That Always Works)"
            message="Yaar tatkal booking ke tips 😂 — ek baar padho zaroor #IRCTC"
          />
        </div>
      </section>

      {/* Tips list */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto space-y-6">
          {tips.map((tip, idx) => (
            <article
              key={tip.num}
              id={`tip-${tip.num}`}
              className={`rounded-2xl shadow-sm border overflow-hidden ${
                tip.isSpecial
                  ? "border-accent bg-white ring-2 ring-accent/30"
                  : "border-gray-100 bg-white"
              }`}
            >
              <div
                className={`px-6 py-4 flex items-start gap-3 ${
                  tip.isSpecial ? "bg-accent" : "bg-gray-50 border-b border-gray-100"
                }`}
              >
                <span className="text-2xl">{tip.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        tip.isSpecial ? "bg-white/20 text-white" : tip.categoryColor
                      }`}
                    >
                      {tip.category}
                    </span>
                    {tip.genuinelyUseful && !tip.isSpecial && (
                      <span className="text-xs text-green-600 font-medium">✅ Genuine tip</span>
                    )}
                  </div>
                  <h2
                    className={`font-extrabold text-base leading-tight ${
                      tip.isSpecial ? "text-white text-xl" : "text-gray-800"
                    }`}
                  >
                    Tip {tip.num}: {tip.title}
                  </h2>
                </div>
              </div>

              <div className="px-6 py-5 space-y-3">
                <p className={`leading-relaxed ${tip.isSpecial ? "text-gray-700 font-medium" : "text-gray-600"}`}>
                  {tip.content}
                </p>
                <div
                  className={`border-l-4 pl-4 py-2 rounded-r-lg text-sm italic ${
                    tip.isSpecial
                      ? "border-accent bg-red-50 text-accent font-semibold"
                      : "border-gray-300 bg-gray-50 text-gray-500"
                  }`}
                >
                  😄 {tip.satireBite}
                </div>

                {tip.isSpecial && (
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/agent-network"
                      className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
                    >
                      📞 View Agent Network →
                    </Link>
                    <Link
                      href="/why-tatkal-fails"
                      className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-900 text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
                    >
                      🔍 Why Tatkal Always Fails →
                    </Link>
                  </div>
                )}
              </div>

              {/* Internal nudges between tips */}
              {idx === 3 && (
                <div className="px-6 pb-4 border-t border-gray-50 pt-3 bg-blue-50">
                  <p className="text-xs text-blue-600">
                    💡 Even with these tips, the odds are stacked against you.{" "}
                    <Link href="/why-tatkal-fails" className="font-semibold underline">
                      Find out exactly why →
                    </Link>
                  </p>
                </div>
              )}
              {idx === 7 && (
                <div className="px-6 pb-4 border-t border-gray-50 pt-3 bg-orange-50">
                  <p className="text-xs text-orange-700">
                    🎰 See it in action:{" "}
                    <Link href="/tatkal" className="font-semibold underline">
                      Watch the Tatkal SOLD OUT timer →
                    </Link>
                  </p>
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
              Every Indian Who Tried Tatkal:
            </h2>
            <p className="text-gray-400">
              Tag karein apne dost ko jo bolta hai &quot;mai kar lunga tatkal booking&quot; 😂
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {memes.map((meme, i) => (
              <MemeCard key={i} {...meme} />
            ))}
          </div>

          <div className="mt-10 bg-white/10 rounded-2xl p-6 text-center">
            <p className="text-white text-lg font-bold mb-4">
              Share karo — sabka tatkal experience same hai 😭
            </p>
            <ShareButtons
              url={PAGE_URL}
              title="Tatkal Booking Tips — 11 Ways to Try, 1 Way That Works"
              message="Bhai tatkal tips padhe kya? 😂 Ek baar padho — experience relatable hai 100%"
              className="justify-center"
            />
          </div>
        </div>
      </section>

      {/* Quick reference summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-primary mb-6 text-center">
            Quick Reference: Your 10-Minute Tatkal Checklist
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { time: "9:45 AM", task: "Charge phone, sit near router", icon: "🔌" },
              { time: "9:50 AM", task: "Open IRCTC, login, go to booking page", icon: "🌐" },
              { time: "9:52 AM", task: "Enter journey details, leave payment page open", icon: "🗺️" },
              { time: "9:55 AM", task: "Phone face-up, volume on, OTP ready", icon: "📱" },
              { time: "9:58 AM", task: "Disable extensions, clear IRCTC cache", icon: "💻" },
              { time: "9:59 AM", task: "Hover cursor over Book button, breathe deeply", icon: "🧘" },
              { time: "10:00:00", task: "Click. Submit. Enter OTP. Pray.", icon: "🙏" },
              { time: "10:00:01", task: "SOLD OUT. Close laptop. Call agent.", icon: "📞" },
            ].map((item) => (
              <div
                key={item.time}
                className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-xs font-bold text-primary">{item.time}</div>
                  <div className="text-sm text-gray-700">{item.task}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 text-center">
            <p className="text-gray-700 font-medium mb-4">
              Did the checklist. Still failed? You&apos;re in excellent company.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/why-tatkal-fails"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-5 py-2.5 rounded-lg hover:bg-blue-900 transition-colors text-sm"
              >
                🔍 Why Tatkal Always Fails →
              </Link>
              <Link
                href="/hall-of-shame"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 font-bold px-5 py-2.5 rounded-lg hover:bg-gray-200 transition-colors text-sm"
              >
                🏛️ IRCTC Hall of Shame →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedArticles heading="More IRCTC Wisdom" articles={relatedArticles} />
    </>
  );
}
