'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TestimonialCard from "@/components/TestimonialCard";
import NewsTickerBanner from "@/components/NewsTickerBanner";
import ErrorModal from "@/components/ErrorModal";
import MemeCard from "@/components/MemeCard";
import ShareButtons from "@/components/ShareButtons";

const steps = [
  {
    num: "01",
    title: "Open IRCTC Website",
    desc: "Type irctc.co.in with hope in your heart and a prayer on your lips. The loading spinner becomes your best friend.",
    icon: "🌐",
  },
  {
    num: "02",
    title: "Server Crashes Immediately",
    desc: "The website loads for exactly 1.4 seconds before presenting you with a 503 error. Your hope begins its rapid descent.",
    icon: "💥",
  },
  {
    num: "03",
    title: "Wait 47 Minutes, Try Again",
    desc: "After 47 minutes of existential reflection, you try again. A brand new captcha awaits. Your previous progress: gone. Session: expired.",
    icon: "⏰",
  },
  {
    num: "04",
    title: "Solve the PhD-Level Captcha",
    desc: "Identify 9 blurry squares containing trains from a security camera circa 1987. You have 0.3 seconds. Wrong answer? Start over from login.",
    icon: "🧩",
  },
  {
    num: "05",
    title: "Agents Already Bought Everything",
    desc: "Congratulations! You made it to the payment page at 10:00:04 AM. All 72 Tatkal seats were sold at 10:00:00.3 AM by 12 bot accounts.",
    icon: "🤖",
  },
];

const features = [
  {
    icon: "🔐",
    title: "World-Class Captcha Technology",
    desc: "Our captcha is so advanced, even our own developers can't solve it. We call this a feature, not a bug. Security through impossibility.",
  },
  {
    icon: "⚡",
    title: "Lightning Fast Booking",
    desc: "Experience booking speeds so fast, you'll see 'Payment Failed' before you even enter your card number. Efficiency redefined.",
  },
  {
    icon: "📍",
    title: "Real-Time Train Tracking",
    desc: "Track your train in real-time, and watch in real-time as the delay counter keeps going up. Transparency at its finest.",
  },
  {
    icon: "📞",
    title: "24/7 Customer Support",
    desc: "Our support team is available 24/7. They just don't pick up the phone 24/7. Subtle but important difference.",
  },
];

const promisedVsReality = [
  {
    category: "Booking Speed",
    promised: "⚡ Lightning fast ticket booking in seconds",
    reality: "💀 503 error before you finish typing your name",
  },
  {
    category: "Session Security",
    promised: "🔐 Secure, uninterrupted booking session",
    reality: "⏳ Session expired while you blinked. Start over.",
  },
  {
    category: "Tatkal Availability",
    promised: "🎟️ Tatkal quota for genuine last-minute travellers",
    reality: "🤖 All 72 seats sold to bots in 0.3 seconds. Enjoy WL/99.",
  },
  {
    category: "Payment Success",
    promised: "💳 Seamless, secure payment gateway",
    reality: "😭 Money deducted. No ticket. No refund ETA. No explanation.",
  },
  {
    category: "Captcha",
    promised: "🛡️ Quick security check to keep bots out",
    reality: "🧩 Identify 11 blurry trains from a 1987 parking-lot cam",
  },
  {
    category: "Customer Support",
    promised: "📞 24/7 dedicated support for all queries",
    reality: "🎵 Hold music for 2 hours then disconnected. Twitter DM: no reply.",
  },
  {
    category: "Train Punctuality",
    promised: "🚄 Real-time schedule for on-time arrivals",
    reality: "📺 Display board shows 'ON TIME' for a train delayed 9 hours",
  },
  {
    category: "Waitlist",
    promised: "📋 Waitlist clears automatically closer to journey date",
    reality: "♾️ WL/47 → WL/46 → WL/46 → journey date → WL/46",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    quote:
      "I tried booking Tatkal for 6 hours straight. The captcha alone took 3 hours. I'm convinced it changes every time I look away. Finally gave up and took a bus. 10/10 experience, would suffer again.",
  },
  {
    name: "Priya Sharma",
    location: "Delhi",
    quote:
      "Server crashed 14 times. Payment was deducted twice. Ticket never came. When I called customer support, the hold music played for 2 hours then disconnected. They later tweeted 'We value your patience.' Iconic.",
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad",
    quote:
      "Booked a 'Confirmed' ticket three weeks in advance. Reached the station. The display board showed the train 'ON TIME' — from 2019. The train arrived 9 hours late. When I asked, the station master said 'train aayegi bhai, wait karo.'",
  },
];

const homeStats = [
  { value: 230, label: "Failures Served", suffix: " Cr+" },
  { value: 99, label: "Tatkal Disappointment Rate", suffix: ".9%" },
  { value: 10000, label: "Certified Agent Partners", suffix: "+" },
  { value: 4, label: "Average Delay (Hours)", suffix: ".7h" },
];

export default function HomePage() {
  const [showErrorModal, setShowErrorModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowErrorModal(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NewsTickerBanner />

      <HeroSection
        title="IRCTC — India's Most Reliable Ticket Frustration System"
        subtitle="Where Your Dreams of Confirmed Tickets Go to Die Since 1999"
        ctaText="Book Ticket (Haha, Good Luck)"
        ctaHref="/tatkal"
        secondaryCtaText="Check Train Status (It's Late)"
        secondaryCtaHref="/train-status"
        badge="🏆 Proudly Crashing Since 1999"
      />

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A scientifically proven 5-step process that has successfully
              prevented ticket booking for millions of Indians since 1999.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className={`step-card relative bg-gray-50 rounded-2xl p-6 border border-gray-200 ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="absolute -top-3 -left-3 bg-primary text-white text-xs font-black w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                  {step.num}
                </div>
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection
        stats={homeStats}
        title="By The Numbers"
        subtitle="Real statistics from our commitment to making train travel impossibly frustrating."
      />

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
              Our Premium Features
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Cutting-edge technology designed to maximize your frustration at
              every possible touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="step-card bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promised vs. Reality */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent/10 text-accent text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Reality Check
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
              Promised vs. Reality
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              The official IRCTC press-release universe versus the universe the
              rest of us live in.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-gray-50 border-b border-gray-200 px-5 py-3.5 text-left text-xs font-extrabold text-gray-400 uppercase tracking-widest w-36">
                    Feature
                  </th>
                  <th className="bg-success/10 border-b border-success/20 px-5 py-3.5 text-left text-xs font-extrabold text-success uppercase tracking-widest">
                    ✅ What IRCTC Says
                  </th>
                  <th className="bg-accent/10 border-b border-accent/20 px-5 py-3.5 text-left text-xs font-extrabold text-accent uppercase tracking-widest">
                    😭 What Actually Happens
                  </th>
                </tr>
              </thead>
              <tbody>
                {promisedVsReality.map((row, i) => (
                  <tr
                    key={row.category}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
                  >
                    <td className="px-5 py-4 font-bold text-gray-700 border-r border-gray-100 align-top">
                      {row.category}
                    </td>
                    <td className="px-5 py-4 text-gray-600 border-r border-gray-100 align-top">
                      {row.promised}
                    </td>
                    <td className="px-5 py-4 text-gray-800 font-medium align-top">
                      {row.reality}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card stack */}
          <div className="md:hidden space-y-4">
            {promisedVsReality.map((row) => (
              <div
                key={row.category}
                className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <div className="bg-gray-50 px-4 py-2 text-xs font-extrabold text-gray-500 uppercase tracking-widest border-b border-gray-200">
                  {row.category}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-100">
                  <div className="bg-success/5 px-4 py-3">
                    <p className="text-[10px] font-extrabold text-success uppercase tracking-widest mb-1">
                      They Say
                    </p>
                    <p className="text-gray-600 text-sm leading-snug">{row.promised}</p>
                  </div>
                  <div className="bg-accent/5 px-4 py-3">
                    <p className="text-[10px] font-extrabold text-accent uppercase tracking-widest mb-1">
                      Reality
                    </p>
                    <p className="text-gray-800 font-medium text-sm leading-snug">{row.reality}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Shareable nudge */}
          <p className="text-center text-gray-400 text-xs mt-8 italic">
            Tag karo apne us dost ko jo abhi bhi IRCTC par believe karta hai 👇
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
              What Our Victims Say
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Real stories from real passengers who survived (barely) the IRCTC
              experience. 5 stars for the memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.name}
                name={t.name}
                location={t.location}
                quote={t.quote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Memes / Relatable Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Relatable IRCTC Content 😭
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Share karo apne dosto ke saath — ek Indian ka universal experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            <MemeCard
              topText="Me: Opens IRCTC at 9:59 AM sharp"
              bottomText="Server at 10:00 AM: I sleep"
              emoji="💤"
              variant="dark"
              bgColor="bg-gray-800"
            />
            <MemeCard
              topText="IRCTC Captcha: Identify trains"
              bottomText="Literally a smudge from 1987"
              emoji="😵"
              variant="desi"
              bgColor="bg-gray-800"
            />
            <MemeCard
              topText="Tatkal Queue: 80,000 people"
              bottomText="Tatkal Seats: 72"
              emoji="💀"
              variant="dark"
              bgColor="bg-gray-900"
            />
            <MemeCard
              topText="Payment deducted ✅"
              bottomText="Ticket issued ❌"
              emoji="🙃"
              variant="desi"
              bgColor="bg-gray-900"
            />
          </div>

          {/* Share row */}
          <div className="bg-white/5 rounded-2xl p-6 text-center">
            <p className="text-white font-semibold mb-4">
              Tag karo apne us dost ko jisne last week tatkal mein fail hua 👇
            </p>
            <ShareButtons
              url="https://irctc.eu.org"
              title="IRCTC Satire — India's Most Reliable Ticket Frustration System"
              message="Bhai ye site dekh 😂 IRCTC ka saccha haal — tatkal, delays, agents sab kuch"
              className="justify-center"
            />
          </div>
        </div>
      </section>

      {/* Internal Link Nudge — SEO pages */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-primary mb-2">
              Deep Dive Into the Chaos
            </h2>
            <p className="text-gray-500 text-sm">
              Everything you wanted to know about IRCTC but were too frustrated to ask.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                href: "/why-tatkal-fails",
                icon: "🔍",
                title: "Why Tatkal Always Fails",
                desc: "6 root causes — bots, agents, servers, captcha, payment, and maths.",
                badge: "Most Asked",
                badgeCls: "bg-red-100 text-red-700",
              },
              {
                href: "/tatkal-tips",
                icon: "💡",
                title: "Tatkal Booking Tips",
                desc: "11 tips to book tatkal fast — including the 1 that actually works.",
                badge: "Popular",
                badgeCls: "bg-blue-100 text-blue-700",
              },
              {
                href: "/hall-of-shame",
                icon: "🏛️",
                title: "Hall of Shame",
                desc: "IRCTC's greatest failures: legendary crashes, impossible captchas, record delays.",
                badge: "Classic",
                badgeCls: "bg-orange-100 text-orange-700",
              },
              {
                href: "/agent-network",
                icon: "📞",
                title: "The Agent Network",
                desc: "When IRCTC fails you (and it will), meet the people who never do.",
                badge: "Always Available",
                badgeCls: "bg-green-100 text-green-700",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group bg-gray-50 hover:bg-white rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-md p-5 transition-all flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{card.icon}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${card.badgeCls}`}>
                    {card.badge}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 group-hover:text-primary transition-colors mb-1">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
                <span className="text-primary text-xs font-semibold mt-auto group-hover:underline">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-accent py-16 px-4 sm:px-6 lg:px-8 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          Ready to Be Disappointed?
        </h2>
        <p className="text-red-100 mb-8 max-w-md mx-auto">
          Join 140 crore Indians in the sacred ritual of refreshing a website
          for 6 hours and still not getting a ticket.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/tatkal"
            className="bg-white text-accent font-bold px-8 py-3 rounded-lg hover:bg-red-50 transition-colors"
          >
            Try Tatkal (Spoiler: SOLD OUT)
          </Link>
          <Link
            href="/agent-network"
            className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            Just Call an Agent Already
          </Link>
        </div>
      </section>

      <ErrorModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
      />
    </>
  );
}
