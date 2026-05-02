'use client';

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import TatkalTimer from "@/components/TatkalTimer";
import ShareButtons from "@/components/ShareButtons";
import RelatedArticles from "@/components/RelatedArticles";

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
            url="https://irctc-satire.vercel.app/tatkal"
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
                  <span className="flex-shrink-0 text-primary">
                    {openFaq === idx ? "▲" : "▼"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 bg-blue-50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedArticles heading="More IRCTC Content" articles={tatkalRelatedArticles} />
    </>
  );
}
