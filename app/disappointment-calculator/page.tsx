'use client';

import { useState, useRef, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ShareButtons from "@/components/ShareButtons";
import RelatedArticles from "@/components/RelatedArticles";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface FormState {
  source: string;
  destination: string;
  travelClass: string;
  date: string;
  passengers: string;
}

interface FrustrationReport {
  overallScore: number;
  ticketOdds: number;
  sessionExpiries: number;
  paymentFailProb: number;
  botCompetition: number;
  captchaRating: number;
  timeWasted: number;
  recommendation: string;
  grade: string;
  gradeColor: string;
  tagline: string;
}

// ---------------------------------------------------------------------------
// Deterministic "hash" — same inputs → same outputs every time
// ---------------------------------------------------------------------------
function simpleHash(str: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = (h * 0x01000193) >>> 0;
  }
  return h;
}

function seededRand(seed: number, min: number, max: number): number {
  const x = Math.sin(seed) * 10000;
  const r = x - Math.floor(x); // 0..1
  return Math.round(min + r * (max - min));
}

// ---------------------------------------------------------------------------
// Popular Indian stations for datalist autocomplete
// ---------------------------------------------------------------------------
const POPULAR_STATIONS = [
  "New Delhi (NDLS)",
  "Mumbai Central (BCT)",
  "Howrah (HWH)",
  "Chennai Central (MAS)",
  "Bangalore City (SBC)",
  "Hyderabad (HYB)",
  "Ahmedabad (ADI)",
  "Pune (PUNE)",
  "Jaipur (JP)",
  "Lucknow (LKO)",
  "Patna (PNBE)",
  "Bhopal (BPL)",
  "Nagpur (NGP)",
  "Surat (ST)",
  "Agra Cantt (AGC)",
  "Varanasi (BSB)",
  "Amritsar (ASR)",
  "Kolkata (KOAA)",
  "Guwahati (GHY)",
  "Kochi (ERN)",
];

const TRAVEL_CLASSES = [
  { value: "SL", label: "Sleeper (SL)" },
  { value: "3A", label: "AC 3-Tier (3A)" },
  { value: "2A", label: "AC 2-Tier (2A)" },
  { value: "1A", label: "First Class AC (1A)" },
  { value: "CC", label: "Chair Car (CC)" },
  { value: "SL-TATKAL", label: "Tatkal Sleeper 😂" },
  { value: "3A-TATKAL", label: "Tatkal AC 3-Tier 💀" },
];

const RECOMMENDATIONS = [
  "Just call an agent. Save yourself. It's over.",
  "We recommend calling Masterji in Varanasi. He was probably born to get your ticket.",
  "Skip IRCTC entirely. Take a bus. Or a bullock cart. Either is faster.",
  "Your only hope: an agent who started booking before the window opened.",
  "We suggest praying to the server room. It listens more than customer support.",
  "Call your most well-connected uncle. This is a family emergency.",
  "Try booking in 1999. Odds were slightly better then.",
];

const TAGLINES = [
  "Resistance is futile. The bots already won.",
  "Your journey begins and ends here — on this results page.",
  "Hope is the first thing that dies. Sessions expire second.",
  "The algorithm has spoken. The verdict: waitlisted.",
  "In the time it took to fill this form, 14 agents bought your seat.",
  "Science has confirmed: you were never getting that ticket.",
  "The good news: no captcha on this page. The bad news: everything else.",
];

// ---------------------------------------------------------------------------
// Computation
// ---------------------------------------------------------------------------
function computeReport(form: FormState): FrustrationReport {
  const seed = simpleHash(
    `${form.source}|${form.destination}|${form.travelClass}|${form.date}|${form.passengers}`
  );

  const isTatkal = form.travelClass.includes("TATKAL");
  const passengers = parseInt(form.passengers, 10) || 1;

  // Ticket availability odds — always bad, worse for Tatkal
  const ticketOdds = isTatkal
    ? seededRand(seed + 1, 0, 4)
    : seededRand(seed + 2, 2, 18);

  // Session expiries — 2–8 normally, 5–12 on Tatkal
  const sessionExpiries = isTatkal
    ? seededRand(seed + 3, 5, 12)
    : seededRand(seed + 4, 2, 8);

  // Payment fail probability — always high
  const paymentFailProb = seededRand(seed + 5, 55, 94);

  // Bot competition — how many bots are competing (in thousands)
  const botCompetition = seededRand(seed + 6, 12, 80) * 1000;

  // Captcha difficulty — 1 to 10, always 8–10
  const captchaRating = seededRand(seed + 7, 8, 10);

  // Estimated time wasted in hours
  const timeWasted = isTatkal
    ? seededRand(seed + 8, 4, 8)
    : seededRand(seed + 9, 2, 5);

  // Overall frustration score out of 100 — higher is more frustrating
  const overallScore = Math.min(
    100,
    Math.round(
      100 -
        ticketOdds * 1.5 -
        (passengers > 2 ? 5 : 0) +
        (isTatkal ? 10 : 0) +
        seededRand(seed + 10, 0, 5)
    )
  );

  let grade: string;
  let gradeColor: string;
  if (overallScore >= 90) {
    grade = "S";
    gradeColor = "text-accent";
  } else if (overallScore >= 75) {
    grade = "A";
    gradeColor = "text-orange-600";
  } else if (overallScore >= 60) {
    grade = "B";
    gradeColor = "text-yellow-600";
  } else {
    grade = "C";
    gradeColor = "text-green-600";
  }

  const recommendation = RECOMMENDATIONS[seededRand(seed + 11, 0, RECOMMENDATIONS.length - 1)];
  const tagline = TAGLINES[seededRand(seed + 12, 0, TAGLINES.length - 1)];

  return {
    overallScore,
    ticketOdds,
    sessionExpiries,
    paymentFailProb,
    botCompetition,
    captchaRating,
    timeWasted,
    recommendation,
    grade,
    gradeColor,
    tagline,
  };
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function ScoreBar({
  label,
  value,
  max,
  color,
  displayValue,
  icon,
}: {
  label: string;
  value: number;
  max: number;
  color: string;
  displayValue: string;
  icon: string;
}) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-700 font-medium flex items-center gap-1.5">
          <span aria-hidden="true">{icon}</span>
          {label}
        </span>
        <span className={`font-black tabular-nums ${color}`}>{displayValue}</span>
      </div>
      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${color.replace("text-", "bg-")}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function ScoreGauge({ score, grade, gradeColor }: { score: number; grade: string; gradeColor: string }) {
  // Map 0-100 frustration score to a -140..140 degree sweep (total 280°)
  const angle = -140 + (score / 100) * 280;
  const r = 54;
  const cx = 70;
  const cy = 70;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const needleX = cx + r * Math.cos(toRad(angle));
  const needleY = cy + r * Math.sin(toRad(angle));

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 140 100" className="w-48 h-32" role="img" aria-label={`Frustration score: ${score} out of 100`}>
        {/* Track arc */}
        <path
          d="M 16 85 A 54 54 0 1 1 124 85"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Colored arc — red to orange to yellow */}
        <defs>
          <linearGradient id="gauge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#E31837" />
          </linearGradient>
        </defs>
        <path
          d="M 16 85 A 54 54 0 1 1 124 85"
          fill="none"
          stroke="url(#gauge-grad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="170"
          strokeDashoffset={170 - (score / 100) * 170}
        />
        {/* Needle */}
        <line
          x1={cx}
          y1={cy}
          x2={needleX}
          y2={needleY}
          stroke="#00285F"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx={cx} cy={cy} r="4" fill="#00285F" />
        {/* Score text */}
        <text x={cx} y={cy + 20} textAnchor="middle" fontSize="18" fontWeight="900" fill="#E31837">
          {score}
        </text>
        <text x={cx} y={cy + 30} textAnchor="middle" fontSize="7" fill="#6b7280">
          FRUSTRATION SCORE™
        </text>
      </svg>
      <div className="text-center -mt-2">
        <span className={`text-5xl font-black ${gradeColor}`}>{grade}</span>
        <p className="text-xs text-gray-500 mt-0.5">
          {grade === "S"
            ? "Catastrophic — Legendary Suffering"
            : grade === "A"
            ? "Severe — IRCTC Power User"
            : grade === "B"
            ? "Moderate — You May Survive"
            : "Mild — Beginner Level Pain"}
        </p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

const relatedArticles = [
  {
    href: "/tatkal",
    title: "Tatkal Booking — The Great Indian Lottery",
    description: "Witness Tatkal tickets sell out in 0.3 seconds, live on this page.",
    badge: "Experience It",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    href: "/why-tatkal-fails",
    title: "Why Tatkal Always Fails: 6 Root Causes",
    description: "The systemic reasons your booking was doomed before it started.",
    badge: "Root Causes",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    href: "/tatkal-tips",
    title: "Tatkal Booking Tips: 11 Ways (1 That Works)",
    description: "Speed hacks, OTP prep, and the one method everyone actually uses.",
    badge: "Tips",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    href: "/agent-network",
    title: "The Agent Network: Guaranteed Tickets",
    description: "When the calculator confirms the worst — agents are waiting.",
    badge: "Guaranteed",
    badgeColor: "bg-green-100 text-green-700",
  },
];

const TODAY_ISO = new Date().toISOString().split("T")[0];

export default function DisappointmentCalculatorPage() {
  const [form, setForm] = useState<FormState>({
    source: "",
    destination: "",
    travelClass: "",
    date: "",
    passengers: "1",
  });
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<FrustrationReport | null>(null);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const resultsRef = useRef<HTMLDivElement>(null);

  // Scroll into results when they appear
  useEffect(() => {
    if (report && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [report]);

  function validate(): boolean {
    const newErrors: Partial<FormState> = {};
    const src = form.source.trim();
    const dst = form.destination.trim();
    if (!src) newErrors.source = "Please enter your source station";
    if (!dst) newErrors.destination = "Please enter your destination";
    if (src && dst && src.toLowerCase() === dst.toLowerCase()) {
      newErrors.destination = "Source and destination cannot be the same (although IRCTC wouldn't notice)";
    }
    if (!form.travelClass) newErrors.travelClass = "Please select a travel class";
    if (!form.date) newErrors.date = "Please pick a travel date";
    if (!form.passengers || parseInt(form.passengers) < 1) newErrors.passengers = "At least 1 passenger required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleCalculate() {
    if (!validate()) return;
    setReport(null);
    setLoading(true);
    // Fake "computing" delay for drama
    setTimeout(() => {
      setReport(computeReport(form));
      setLoading(false);
    }, 1800);
  }

  const shareUrl = "https://irctc.eu.org/disappointment-calculator";
  const shareMessage =
    "Meri frustration score dekho 😂 IRCTC Disappointment Calculator — apni bhi calculate karo!";

  return (
    <>
      <HeroSection
        title="Disappointment Calculator™"
        subtitle="Enter your journey details and receive a scientifically accurate Frustration Score™ — personalised predictions for how badly IRCTC will let you down."
        badge="🔬 Powered by 25 years of Indian Railways data"
      />

      {/* Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl" aria-hidden="true">🧮</span>
              <div>
                <h2 className="text-xl font-extrabold text-primary leading-tight">
                  Calculate Your Frustration Score™
                </h2>
                <p className="text-gray-500 text-sm mt-0.5">
                  All fields required. Results are 100% accurate and 0% hopeful.
                </p>
              </div>
            </div>

            {/* Station datalist */}
            <datalist id="stations-list">
              {POPULAR_STATIONS.map((s) => (
                <option key={s} value={s} />
              ))}
            </datalist>

            <div className="space-y-5">
              {/* Source */}
              <div>
                <label htmlFor="source" className="block text-sm font-semibold text-gray-700 mb-1">
                  From (Source Station) 🚉
                </label>
                <input
                  id="source"
                  type="text"
                  list="stations-list"
                  placeholder="e.g. New Delhi (NDLS)"
                  value={form.source}
                  onChange={(e) => setForm((f) => ({ ...f, source: e.target.value }))}
                  className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                    errors.source ? "border-accent bg-red-50" : "border-gray-300"
                  }`}
                />
                {errors.source && (
                  <p className="text-accent text-xs mt-1 font-medium">{errors.source}</p>
                )}
              </div>

              {/* Destination */}
              <div>
                <label htmlFor="destination" className="block text-sm font-semibold text-gray-700 mb-1">
                  To (Destination Station) 🏁
                </label>
                <input
                  id="destination"
                  type="text"
                  list="stations-list"
                  placeholder="e.g. Mumbai Central (BCT)"
                  value={form.destination}
                  onChange={(e) => setForm((f) => ({ ...f, destination: e.target.value }))}
                  className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                    errors.destination ? "border-accent bg-red-50" : "border-gray-300"
                  }`}
                />
                {errors.destination && (
                  <p className="text-accent text-xs mt-1 font-medium">{errors.destination}</p>
                )}
              </div>

              {/* Class + Date — 2 columns on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="travelClass" className="block text-sm font-semibold text-gray-700 mb-1">
                    Travel Class 🎟️
                  </label>
                  <select
                    id="travelClass"
                    value={form.travelClass}
                    onChange={(e) => setForm((f) => ({ ...f, travelClass: e.target.value }))}
                    className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white ${
                      errors.travelClass ? "border-accent bg-red-50" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select class…</option>
                    {TRAVEL_CLASSES.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  {errors.travelClass && (
                    <p className="text-accent text-xs mt-1 font-medium">{errors.travelClass}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-1">
                    Travel Date 📅
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                    min={TODAY_ISO}
                    className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                      errors.date ? "border-accent bg-red-50" : "border-gray-300"
                    }`}
                  />
                  {errors.date && (
                    <p className="text-accent text-xs mt-1 font-medium">{errors.date}</p>
                  )}
                </div>
              </div>

              {/* Passengers */}
              <div>
                <label htmlFor="passengers" className="block text-sm font-semibold text-gray-700 mb-1">
                  Number of Passengers 👥
                </label>
                <div className="flex items-center gap-3">
                  <input
                    id="passengers"
                    type="range"
                    min={1}
                    max={6}
                    value={form.passengers}
                    onChange={(e) => setForm((f) => ({ ...f, passengers: e.target.value }))}
                    className="flex-1 accent-primary"
                  />
                  <span className="w-10 text-center font-black text-primary text-lg tabular-nums">
                    {form.passengers}
                  </span>
                </div>
                <p className="text-gray-400 text-xs mt-1 italic">
                  {parseInt(form.passengers) > 4
                    ? "5+ passengers? Bold. You have truly nothing to lose."
                    : parseInt(form.passengers) > 2
                    ? "More passengers = more session expiries. Brave."
                    : "At least you travel light in your suffering."}
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={handleCalculate}
                disabled={loading}
                className="w-full bg-accent hover:bg-red-700 disabled:opacity-60 text-white font-extrabold py-4 rounded-xl text-base transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Calculating your doom…
                  </>
                ) : (
                  <>🔬 Calculate My Frustration</>
                )}
              </button>

              {loading && (
                <p className="text-center text-xs text-gray-400 italic animate-pulse">
                  Consulting IRCTC servers… (just kidding, they&apos;re down)
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {report && (
        <section
          ref={resultsRef}
          className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200"
        >
          <div className="max-w-3xl mx-auto space-y-8">

            {/* Header card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-primary px-6 py-4 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-0.5">
                    Frustration Report™ — Personal Analysis
                  </p>
                  <p className="text-white font-bold text-sm">
                    {form.source} → {form.destination}
                  </p>
                  <p className="text-blue-300 text-xs">
                    {form.date} &nbsp;·&nbsp;{" "}
                    {TRAVEL_CLASSES.find((c) => c.value === form.travelClass)?.label} &nbsp;·&nbsp;{" "}
                    {form.passengers} pax
                  </p>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-center">
                  <p className="text-yellow-300 text-xs font-bold uppercase tracking-wide">Status</p>
                  <p className="text-white font-black text-sm mt-0.5">WAITLISTED</p>
                </div>
              </div>

              {/* Gauge + tagline */}
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8">
                <ScoreGauge
                  score={report.overallScore}
                  grade={report.grade}
                  gradeColor={report.gradeColor}
                />
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">
                    Our Assessment
                  </p>
                  <p className="text-gray-800 font-bold text-lg leading-snug mb-3 italic">
                    &ldquo;{report.tagline}&rdquo;
                  </p>
                  <div className="inline-flex items-start gap-2 bg-warning/10 border border-warning/30 rounded-xl px-4 py-3 text-left">
                    <span className="text-xl leading-none mt-0.5" aria-hidden="true">💡</span>
                    <p className="text-warning font-semibold text-sm leading-snug">
                      {report.recommendation}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics breakdown */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
              <h3 className="text-base font-extrabold text-primary mb-6 flex items-center gap-2">
                <span aria-hidden="true">📊</span> Detailed Breakdown
              </h3>

              <div className="space-y-5">
                <ScoreBar
                  label="Ticket Availability Odds"
                  value={100 - report.ticketOdds}
                  max={100}
                  color="text-accent"
                  displayValue={`${report.ticketOdds}% chance`}
                  icon="🎟️"
                />
                <ScoreBar
                  label="Sessions That Will Expire"
                  value={report.sessionExpiries}
                  max={12}
                  color="text-orange-600"
                  displayValue={`~${report.sessionExpiries} times`}
                  icon="⏳"
                />
                <ScoreBar
                  label="Payment Failure Probability"
                  value={report.paymentFailProb}
                  max={100}
                  color="text-red-600"
                  displayValue={`${report.paymentFailProb}%`}
                  icon="💳"
                />
                <ScoreBar
                  label="Bot Competition Index"
                  value={report.botCompetition}
                  max={80000}
                  color="text-purple-700"
                  displayValue={`${(report.botCompetition / 1000).toFixed(0)}k bots`}
                  icon="🤖"
                />
                <ScoreBar
                  label="Captcha Difficulty Rating"
                  value={report.captchaRating}
                  max={10}
                  color="text-yellow-600"
                  displayValue={`${report.captchaRating} / 10`}
                  icon="🧩"
                />
                <ScoreBar
                  label="Estimated Time Wasted"
                  value={report.timeWasted}
                  max={8}
                  color="text-blue-700"
                  displayValue={`~${report.timeWasted} hours`}
                  icon="⏰"
                />
              </div>
            </div>

            {/* Fun facts row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: "🏆",
                  label: "Booking Difficulty",
                  value:
                    report.overallScore >= 85
                      ? "Expert Level"
                      : report.overallScore >= 70
                      ? "Hard Mode"
                      : "Normal (Still Bad)",
                  color: "text-accent",
                },
                {
                  icon: "🤦",
                  label: "Your IRCTC Rank",
                  value:
                    report.overallScore >= 90
                      ? "#1 Certified Victim"
                      : report.overallScore >= 75
                      ? "Senior Sufferer"
                      : "Apprentice",
                  color: "text-orange-600",
                },
                {
                  icon: "📞",
                  label: "Agent Recommendation",
                  value: "Strongly Advised",
                  color: "text-green-700",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl border border-gray-200 p-4 text-center step-card"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <p className="text-gray-500 text-xs mb-1 font-medium">{stat.label}</p>
                  <p className={`font-extrabold text-sm ${stat.color}`}>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Share CTA */}
            <div className="bg-gray-900 rounded-2xl p-6 text-center">
              <p className="text-white font-bold mb-1">
                Tag karo apne us dost ko jo abhi bhi IRCTC try kar raha hai 👇
              </p>
              <p className="text-gray-400 text-sm mb-5">
                Share this — misery loves company, and company loves WhatsApp forwards.
              </p>
              <ShareButtons
                url={shareUrl}
                title="IRCTC Disappointment Calculator™ — My Frustration Score is confirmed 😭"
                message={shareMessage}
                className="justify-center"
              />
            </div>

            {/* Recalculate */}
            <div className="text-center">
              <button
                onClick={() => {
                  setReport(null);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-sm text-primary underline hover:text-blue-800 transition-colors"
              >
                ↑ Try another journey (results will still be bad)
              </button>
            </div>
          </div>
        </section>
      )}

      <RelatedArticles heading="More IRCTC Content" articles={relatedArticles} />
    </>
  );
}
