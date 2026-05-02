'use client';

import { useState } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import ShareButtons from "@/components/ShareButtons";
import RelatedArticles from "@/components/RelatedArticles";
import TweetCard from "@/components/TweetCard";

// Lazy-load the Tatkal timer — it uses setInterval/countdown and is rendered
// below the fold, so deferring it keeps the initial bundle smaller.
const TatkalTimer = dynamic(() => import("@/components/TatkalTimer"), {
  ssr: false,
  loading: () => (
    // Matches the TatkalTimer's rendered height (header ~68px + content ~216px)
    // to avoid layout shift while the component bundle loads.
    <div className="bg-white rounded-2xl shadow-xl max-w-sm mx-auto overflow-hidden animate-pulse">
      <div className="bg-primary h-[68px]" />
      <div className="p-8 flex flex-col items-center gap-4">
        <div className="h-16 w-32 bg-gray-200 rounded" />
        <div className="h-4 w-24 bg-gray-100 rounded" />
        <div className="flex gap-1 mt-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-2 w-6 rounded-full bg-gray-200" />
          ))}
        </div>
      </div>
    </div>
  ),
});

const pricingData = [
  {
    type: "Sleeper Regular",
    price: "₹450",
    availability: "WAITLISTED",
    detail: "WL/423",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    type: "AC 3-Tier Regular",
    price: "₹1,200",
    availability: "WAITLISTED",
    detail: "WL/891",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    type: "Sleeper Tatkal",
    price: "₹850",
    availability: "SOLD OUT",
    detail: "",
    color: "text-accent",
    bg: "bg-red-50",
  },
  {
    type: "AC 3-Tier Tatkal",
    price: "₹2,100",
    availability: "SOLD OUT",
    detail: "",
    color: "text-accent",
    bg: "bg-red-50",
  },
  {
    type: "Agent Special (Guaranteed)",
    price: "₹4,500",
    availability: "Always Available ✅",
    detail: "",
    color: "text-green-700",
    bg: "bg-green-50",
    highlight: true,
  },
];

const bookingSteps = [
  { step: 1, text: "Wake up at 9:55 AM", status: "normal", icon: "⏰" },
  { step: 2, text: "Open IRCTC (server crashes)", status: "fail", icon: "💥" },
  { step: 3, text: "Try mobile app (also crashes)", status: "fail", icon: "📱" },
  { step: 4, text: "Clear cache, try again", status: "normal", icon: "🔄" },
  { step: 5, text: "Complete 3 captchas (fail 2, pass 1 by luck)", status: "normal", icon: "🧩" },
  { step: 6, text: "Payment page loads!", status: "success", icon: "✅" },
  { step: 7, text: '"Session expired, please login again"', status: "fail", icon: "❌" },
  { step: 8, text: "Login again, start entire process over", status: "normal", icon: "🔁" },
  { step: 9, text: "It's 10:01 AM — all tickets sold at 10:00:00.3 AM", status: "fail", icon: "😭" },
  {
    step: 10,
    text: "Just call an agent",
    status: "agent",
    icon: "📞",
  },
];

const faqs = [
  {
    q: "Why are all Tatkal tickets sold in 0.3 seconds?",
    a: 'IRCTC has pioneered quantum booking technology that allows specially registered agents to purchase tickets before the booking window actually opens. This is called "innovation."',
  },
  {
    q: "Why does the server always crash during peak booking?",
    a: "Our servers are highly sensitive to human anticipation. The collective hope of 1.4 billion Indians wanting tickets creates a spiritual overload that our 1999-era servers simply cannot handle.",
  },
  {
    q: "Can I get a refund if my payment was deducted but no ticket was issued?",
    a: "Yes! Simply fill Form TDR-7/B, submit it at your nearest railway station between 2–4 PM on Tuesdays (except public holidays), wait 90 working days, and receive a helpful rejection email.",
  },
  {
    q: "Why is the captcha so hard?",
    a: "We take security very seriously. Our captcha is designed to verify that you are human. Unfortunately, it's so effective that it also successfully blocks humans.",
  },
  {
    q: "Is there any way to guarantee a Tatkal ticket?",
    a: "We're glad you asked! Our Agent Network page has all the information you need. Tell them IRCTC sent you. They'll laugh, but they'll understand.",
  },
];

const userExperiences = [
  {
    name: "Saurabh Tiwari",
    location: "Lucknow → Mumbai",
    time: "10:00 AM, last Tuesday",
    story:
      "Set 3 alarms for 9:55 AM. Opened IRCTC on phone, laptop, AND my dad's tablet — all three logged in. The clock hit 10:00:00. I clicked 'Book Now' on all three simultaneously. Phone: session expired. Laptop: payment page loaded (I screamed in joy). Tablet: still loading. I entered card details in 8 seconds — personal record. Hit Pay. 'Your payment of ₹2,140 has been deducted.' Relief. Then: 'Booking Failed due to seat unavailability.' The seats were gone during the 8 seconds it took my hands to stop shaking.",
    tags: ["AC 3-Tier Tatkal", "0.3s sellout", "Payment deducted"],
  },
  {
    name: "Meenakshi Iyer",
    location: "Chennai → Delhi",
    time: "10:02 AM, last Friday",
    story:
      "I am a software engineer. I wrote a script to automate the booking. IRCTC blocked my IP within 4 seconds. I then tried manually. Solved 6 captchas — each wrongly rejected. On the 7th, it accepted, but my session had expired. Logged in again. Solved 3 more captchas. Reached passenger details. Filled everything. Hit Next. New captcha appeared. I stared at my screen for 45 seconds. My script would have been faster. IRCTC out-engineered me, a person whose job is to engineer things.",
    tags: ["IP blocked", "Captcha hell", "Session expired"],
  },
  {
    name: "Hardeep Singh",
    location: "Amritsar → Kolkata",
    time: "9:58 AM, this morning",
    story:
      "Bhai, I want to tell you about the 4G situation. I had full bars. IRCTC loaded at 9:58 AM. I was ready. 10:00 AM — I clicked. Page refreshed on its own. Just refreshed. No reason. Like IRCTC looked at my hope and thought, 'Not today.' Tried again at 10:00:02. All seats gone. I sat there for a while. Then I called Pappu bhaiya (agent). He said 'haan bhai, 3 minutes pehle hi confirm ho gaya tha mera.' I am not angry. I am just... educated now.",
    tags: ["Page refresh", "Full bars 4G", "Agent confirmed in 3 mins"],
  },
  {
    name: "Deepa Nair",
    location: "Kochi → Bengaluru",
    time: "10:05 AM, last Saturday",
    story:
      "My experience was unique. I actually got to the payment page. I was shaking. I typed my UPI ID. It said 'Invalid UPI ID.' I typed it again — same message. Third time, it said 'Too many attempts, try a different payment method.' I entered card details. OTP arrived. I typed OTP. 'OTP expired.' Another OTP arrived. I entered it. 'Transaction failed, please try again.' I tried again. 'Duplicate transaction request detected.' At this point I started laughing because what else can you do. Money was blocked for 5 days. Ticket: 0.",
    tags: ["UPI failed", "OTP expired", "Duplicate transaction"],
  },
];

const tweetData = [
  {
    handle: "frustrated_raj",
    username: "Rajesh Pandey",
    avatar: "R",
    text: "Set 4 alarms for 9:55 AM. Had IRCTC open on 2 phones and a laptop. Solved captcha on all 3. Hit book simultaneously at 10:00:00. All 3 said SOLD OUT by 10:00:01.\n\nBots wake up earlier than me. Respect honestly. 😭\n\n#IRCTC #Tatkal #IndianRailways",
    time: "2h",
    likes: "14.2K",
    retweets: "3.1K",
    replies: "847",
    verified: false,
  },
  {
    handle: "priya_mumbai99",
    username: "Priya S.",
    avatar: "P",
    text: "IRCTC charged me ₹2,140. No ticket. Called customer support. On hold 45 mins. Got disconnected.\n\nFiled TDR. Got email: 'Your refund will be processed in 90 working days.'\n\n90. Working. Days.\n\nMy train is tomorrow. 😂 #IRCTC",
    time: "5h",
    likes: "28.7K",
    retweets: "6.4K",
    replies: "1.2K",
    verified: false,
  },
  {
    handle: "techbro_ankit",
    username: "Ankit Verma 🧑‍💻",
    avatar: "A",
    text: "Me: writes selenium script to automate tatkal booking\nIRCTC: blocks IP in 3 seconds\nMe: uses VPN\nIRCTC: new captcha type, unsolvable by humans or bots\nMe: solves it manually\nIRCTC: session expired\n\nI have a CS degree from IIT. IRCTC humbled me. 🫡",
    time: "1d",
    likes: "52.1K",
    retweets: "11.8K",
    replies: "2.4K",
    verified: false,
  },
  {
    handle: "delhi_to_mumbai",
    username: "Niharika Joshi",
    avatar: "N",
    text: "tatkal booking experience speedrun:\n\n9:55 - login ✅\n9:57 - search train ✅\n9:59 - select seat ✅\n10:00 - captcha ✅\n10:00:03 - payment page ✅\n10:00:08 - OTP received ✅\n10:00:12 - OTP entered ✅\n10:00:13 - 'Booking failed. Seat no longer available'\n\nI was 13 seconds too slow. 13 seconds. 🙂",
    time: "3h",
    likes: "41.3K",
    retweets: "9.2K",
    replies: "1.8K",
    verified: false,
  },
  {
    handle: "sardar_travels",
    username: "Gurpreet Singh",
    avatar: "G",
    text: "My cousin is an IRCTC agent. At 10 AM sharp I'm still typing username. He sends me a photo of my confirmed ticket.\n\nHe booked it for me. Without asking. Because he knew.\n\nI don't know whether to thank him or feel deeply understood. 😭 #Tatkal",
    time: "6h",
    likes: "19.5K",
    retweets: "4.7K",
    replies: "963",
    verified: false,
  },
  {
    handle: "infra_nerd_ravi",
    username: "Ravi Shankar",
    avatar: "V",
    text: "Hot take: IRCTC's tatkal system is actually working exactly as designed.\n\nDesigned by whom? That's the investigation nobody wants to fund.\n\n#IRCTC #Tatkal #IndianRailways",
    time: "2d",
    likes: "67.4K",
    retweets: "15.6K",
    replies: "3.1K",
    verified: false,
  },
];

const tatkalRelatedArticles = [
  {
    href: "/why-tatkal-fails",
    title: "Why Tatkal Fails Every Time: 6 Root Causes",
    description:
      "The systemic reasons your tatkal attempt was doomed — bots, agents, bad servers, and maths.",
    badge: "Must Read",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    href: "/tatkal-tips",
    title: "Tatkal Booking Tips: 11 Ways to Try (1 That Works)",
    description:
      "Speed hacks, browser tips, OTP prep — and the one guaranteed method everyone secretly uses.",
    badge: "Tips",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    href: "/agent-network",
    title: "The Agent Network: Guaranteed Tickets",
    description:
      "When all else fails — and it will — meet the certified agents with a 99.8% success rate.",
    badge: "Agents",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    href: "/hall-of-shame",
    title: "IRCTC Hall of Shame",
    description:
      "A museum of IRCTC's greatest hits — legendary crashes, impossible captchas, record delays.",
    badge: "Classic",
    badgeColor: "bg-orange-100 text-orange-700",
  },
];

export default function TatkalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <HeroSection
        title="Tatkal Booking — The Great Indian Lottery"
        subtitle="₹1,500 for a chance to witness the fastest sellout in human history. Tickets available for 0.3 seconds every morning."
        badge="🎰 Odds of success: 0.02%"
      />

      {/* Share row just under hero */}
      <div className="bg-white border-b border-gray-100 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ShareButtons
            url="https://irctc.eu.org/tatkal"
            title="Tatkal Booking — The Great Indian Lottery | IRCTC Satire"
            message="Bhai tatkal ka scene dekh 😂 — 0.3 seconds mein SOLD OUT. Ye hai India ka asli experience!"
          />
        </div>
      </div>

      {/* Timer + Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-primary mb-4">
                The Tatkal Experience
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Every morning at 10:00 AM, IRCTC opens Tatkal booking — a
                window of opportunity lasting approximately 0.3 seconds, during
                which 200+ seats are purchased exclusively by automated bot
                accounts operated by professional agents.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Regular humans, who require more than 0.3 seconds to navigate a
                website that hasn&apos;t been updated since 2004, are welcome to
                watch the seats disappear in real time.
              </p>
              <div className="bg-warning/10 border border-warning/30 rounded-xl p-4">
                <p className="text-warning font-semibold text-sm">
                  ⚡ Fun Fact: The record for fastest Tatkal sellout is 0.18
                  seconds, set on Diwali 2025. Zero humans were involved.
                </p>
              </div>
            </div>
            <div>
              <TatkalTimer />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-primary mb-3">
              Ticket Availability
            </h2>
            <p className="text-gray-500">
              Live availability as of today, 10:00:01 AM
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-primary text-white text-left text-sm">
                  <th className="px-6 py-4 font-semibold">Ticket Type</th>
                  <th className="px-6 py-4 font-semibold">Price</th>
                  <th className="px-6 py-4 font-semibold">Availability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pricingData.map((row) => (
                  <tr
                    key={row.type}
                    className={`${row.bg} ${
                      row.highlight ? "font-semibold" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-gray-800">{row.type}</td>
                    <td className="px-6 py-4 font-mono font-bold text-gray-700">
                      {row.price}
                    </td>
                    <td className={`px-6 py-4 font-bold ${row.color}`}>
                      {row.availability}
                      {row.detail && (
                        <span className="ml-2 text-xs font-normal text-gray-500">
                          ({row.detail})
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center italic">
            * Prices are approximate. Actual disappointment may exceed listed
            amounts.
          </p>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-primary mb-3">
              Your Tatkal Journey: A Step-by-Step Guide
            </h2>
            <p className="text-gray-500">
              A deeply researched, peer-reviewed guide to failing at Tatkal
              booking.
            </p>
          </div>

          <div className="space-y-3">
            {bookingSteps.map((item) => (
              <div
                key={item.step}
                className={`flex items-start gap-4 p-4 rounded-xl border transition-all ${
                  item.status === "agent"
                    ? "bg-accent text-white border-red-700 scale-105 shadow-lg"
                    : item.status === "fail"
                    ? "bg-red-50 border-red-200"
                    : item.status === "success"
                    ? "bg-green-50 border-green-200"
                    : "bg-white border-gray-200"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    item.status === "agent"
                      ? "bg-white text-accent"
                      : item.status === "fail"
                      ? "bg-red-100 text-accent"
                      : item.status === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-primary text-white"
                  }`}
                >
                  {item.step}
                </div>
                <div className="flex-1">
                  <p
                    className={`font-medium ${
                      item.status === "agent"
                        ? "text-white text-lg font-extrabold"
                        : item.status === "fail"
                        ? "text-red-700"
                        : "text-gray-700"
                    }`}
                  >
                    {item.icon} {item.text}
                    {item.status === "agent" && (
                      <span className="block text-sm font-normal text-red-100 mt-1">
                        It was always going to end here.
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-primary mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500">
              Questions we receive. Answers we have perfected.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-4 font-semibold text-gray-800 hover:bg-gray-50 transition-colors flex items-center justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <span className={`flex-shrink-0 text-primary transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === idx ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 bg-blue-50">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real User Experiences */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-primary mb-3">
              Real Tatkal Experiences
            </h2>
            <p className="text-gray-500">
              Submitted by survivors. Names changed to protect the traumatized.
            </p>
          </div>

          <div className="space-y-6">
            {userExperiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                    {exp.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{exp.name}</p>
                    <p className="text-gray-400 text-xs">
                      {exp.location} &nbsp;·&nbsp; {exp.time}
                    </p>
                  </div>
                  <span className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0">
                    Verified Victim
                  </span>
                </div>

                <blockquote className="text-gray-700 text-sm leading-relaxed italic mb-4 border-l-4 border-primary/30 pl-4">
                  &ldquo;{exp.story}&rdquo;
                </blockquote>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* X / Twitter Wall */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-primary mb-3">
              What 𝕏 Users Are Saying
            </h2>
            <p className="text-gray-500">
              The internet has feelings about Tatkal. Strong ones.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {tweetData.map((tweet, idx) => (
              <div key={idx} className="break-inside-avoid mb-4">
                <TweetCard {...tweet} />
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 mt-6 text-center italic">
            * Posts are illustrative and satirical, based on common experiences shared publicly about IRCTC Tatkal booking.
          </p>
        </div>
      </section>

      <RelatedArticles heading="More IRCTC Content" articles={tatkalRelatedArticles} />
    </>
  );
}
