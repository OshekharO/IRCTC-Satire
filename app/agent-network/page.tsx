'use client';

import { useState } from "react";
import HeroSection from "@/components/HeroSection";

const pricingTiers = [
  {
    name: "Tatkal Basic",
    premium: "₹200",
    tagline: "For the mildly desperate",
    features: [
      "Ticket guaranteed ✅",
      "Same day booking",
      "WhatsApp confirmation",
      "No captcha hassle",
    ],
    highlighted: false,
  },
  {
    name: "Tatkal Premium",
    premium: "₹500",
    tagline: "For the seriously desperate",
    features: [
      "Everything in Basic",
      "Priority seat selection",
      "AC coaches available",
      "No captcha — ever",
      "24-hour confirmation",
    ],
    highlighted: true,
  },
  {
    name: "Festival Season Special",
    premium: "₹2,000",
    tagline: "For the completely desperate",
    features: [
      "Everything in Premium",
      "Diwali / Holi booking",
      "Guaranteed AC seat",
      "Window seat negotiable",
      'Driver "informed" of your presence',
    ],
    highlighted: false,
  },
];

const agents = [
  {
    name: "Masterji",
    city: "Varanasi",
    speciality: "Tatkal AC",
    successRate: "99.2%",
    since: "1994",
    quote:
      "Booking tickets since before IRCTC had a website. 30 years, zero complaints. WhatsApp only. No calls after 10 PM.",
    emoji: "🧓",
    verified: true,
  },
  {
    name: "Pappu Travels",
    city: "New Delhi",
    speciality: "Festival Season",
    successRate: "97.8%",
    since: "2001",
    quote:
      "Diwali ke liye ticket chahiye? Call karo. Server nahi chaahiye humko. Humara apna system hai.",
    emoji: "🧳",
    verified: true,
  },
  {
    name: "Quick Tickets Ramesh",
    city: "Mumbai",
    speciality: "Rajdhani / Shatabdi",
    successRate: "98.5%",
    since: "2007",
    quote:
      "I have special software. Government knows. We have understanding. Don't ask too many questions.",
    emoji: "⚡",
    verified: true,
  },
  {
    name: "Sharma Ji Ka Beta",
    city: "Patna",
    speciality: "Bihar Special Trains",
    successRate: "96.4%",
    since: "2015",
    quote:
      "Pehle paisa, phir ticket. No questions asked. Payment by cash or UPI. No refunds.",
    emoji: "🎯",
    verified: false,
  },
];

const howItWorksSteps = [
  { num: 1, text: "IRCTC booking opens at 10:00:00 AM", icon: "⏰" },
  { num: 2, text: "IRCTC servers crash for regular users (you)", icon: "💥" },
  {
    num: 3,
    text: "Agent's 'special software' books 200 tickets in 0.4 seconds",
    icon: "🤖",
  },
  {
    num: 4,
    text: "Agent lists tickets on black market for 3× the original price",
    icon: "💰",
  },
  {
    num: 5,
    text: "You call agent. Agent says 'Bhai, ek hi bacha hai. Jaldi karo.'",
    icon: "📞",
  },
];

export default function AgentNetworkPage() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    capacity: "",
    connections: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <HeroSection
        title="IRCTC Agent Network — When IRCTC Fails You (Every Time), We Deliver"
        subtitle="Our certified agents guarantee tickets because they have something IRCTC doesn't: working software and railway station friendships."
        badge="🤝 Unofficially Official Since 1999"
      />

      {/* Disclaimer Banner */}
      <div className="bg-yellow-50 border-y-2 border-yellow-300 py-3 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-yellow-800 text-sm text-center font-medium">
            ⚠️{" "}
            <strong>SATIRE DISCLAIMER:</strong> This section is entirely
            satirical and depicts illegal tout activity for comedic purposes.
            Ticket touting is illegal under Railway law. Please book only
            through official IRCTC channels (and good luck with that).
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <section className="bg-primary text-white py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { val: "10,000+", label: "Active Agents" },
              { val: "98.7%", label: "Success Rate" },
              { val: "24/7", label: "Availability" },
              { val: "🏆", label: "Festival Season Champions" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-xl font-extrabold text-yellow-300">{s.val}</p>
                <p className="text-blue-200 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-primary mb-3">
              Choose Your Desperation Level
            </h2>
            <p className="text-gray-500">
              Transparent pricing for an opaque system. All prices are in
              addition to the actual ticket cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-6 border-2 relative flex flex-col ${
                  tier.highlighted
                    ? "border-accent bg-red-50 shadow-xl scale-105"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="font-extrabold text-xl text-gray-800 mb-1">
                  {tier.name}
                </h3>
                <p className="text-gray-400 text-xs mb-4 italic">{tier.tagline}</p>
                <div className="mb-4">
                  <span className="text-3xl font-black text-primary">
                    {tier.premium}
                  </span>
                  <span className="text-gray-400 text-sm"> premium / ticket</span>
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-success mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2.5 rounded-xl font-bold text-sm transition-colors ${
                    tier.highlighted
                      ? "bg-accent hover:bg-red-700 text-white"
                      : "bg-primary hover:bg-blue-900 text-white"
                  }`}
                  onClick={() => alert("Please call Masterji directly at WhatsApp. 🙏")}
                >
                  Contact Agent
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Profiles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-primary mb-3">
              Meet Our Top Agents
            </h2>
            <p className="text-gray-500">
              Seasoned professionals who have mastered what IRCTC cannot: the
              art of actually delivering a ticket.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="agent-card bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-3xl flex-shrink-0">
                    {agent.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-extrabold text-lg text-gray-800">
                        {agent.name}
                      </h3>
                      {agent.verified && (
                        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          ✓ VERIFIED AGENT
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 mb-3">
                      <span>📍 {agent.city}</span>
                      <span>🎯 {agent.speciality}</span>
                      <span>📅 Since {agent.since}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-success rounded-full"
                          style={{ width: agent.successRate }}
                        />
                      </div>
                      <span className="text-xs font-bold text-success">
                        {agent.successRate}
                      </span>
                    </div>
                    <blockquote className="text-gray-500 text-sm italic border-l-2 border-accent pl-3">
                      &ldquo;{agent.quote}&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-primary mb-3">
              How the Agent Network Works
            </h2>
            <p className="text-gray-500">
              A scientifically observed process, documented for educational
              purposes only.
            </p>
          </div>

          <div className="space-y-4">
            {howItWorksSteps.map((step) => (
              <div
                key={step.num}
                className="flex items-start gap-5 bg-gray-50 rounded-xl p-5 border border-gray-200 step-card"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-black text-sm">
                  {step.num}
                </div>
                <p className="text-gray-700 pt-2">
                  {step.icon} {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Network */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-primary text-white px-6 py-5">
              <h2 className="text-xl font-extrabold">
                Join Our Agent Network
              </h2>
              <p className="text-blue-200 text-sm mt-1">
                Are you interested in becoming a certified ticket frustration
                specialist?
              </p>
            </div>

            <div className="p-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name (alias acceptable)"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City / Station
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      placeholder="Nearest railway station"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      How many tickets can you sell per day?
                    </label>
                    <input
                      type="text"
                      value={formData.capacity}
                      onChange={(e) =>
                        setFormData({ ...formData, capacity: e.target.value })
                      }
                      placeholder="e.g. 50-200 per day"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Do you have &ldquo;connections&rdquo; at the railway station?
                    </label>
                    <select
                      value={formData.connections}
                      onChange={(e) =>
                        setFormData({ ...formData, connections: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="yes-many">Yes, many (preferred candidate)</option>
                      <option value="yes-few">Yes, a few</option>
                      <option value="working-on-it">Working on it</option>
                      <option value="no">No (not eligible)</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-colors mt-2"
                  >
                    Submit Application
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">🤝</div>
                  <h3 className="font-extrabold text-xl text-gray-800 mb-2">
                    Application Received!
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">
                    A senior agent will contact you via an untraceable phone
                    number within 2–3 business days.
                  </p>
                  <p className="text-gray-400 text-xs mt-3 italic">
                    Note: IRCTC does not officially endorse this. Neither does
                    the law.
                  </p>
                </div>
              )}
            </div>
          </div>

          <p className="text-xs text-gray-400 text-center mt-4 italic">
            ⚠️ This form is entirely satirical. No data is collected or
            processed. Ticket touting is illegal. Book through official IRCTC
            channels.
          </p>
        </div>
      </section>
    </>
  );
}
