'use client';

import { useState, useMemo, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";

// Lazy-load the train status board — it is a large table component that lives
// below the fold; deferring it reduces the initial JS evaluated on page load.
const TrainStatusBoard = dynamic(() => import("@/components/TrainStatusBoard"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl border border-gray-200 overflow-hidden animate-pulse">
      <div className="bg-primary h-10" />
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex gap-4 px-4 py-3 border-b border-gray-100 last:border-0">
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-32 bg-gray-200 rounded" />
          <div className="h-4 w-12 bg-gray-200 rounded" />
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  ),
});

const delayReasons = [
  "Driver stopped for chai break (2.5 hours)",
  "Cow achieved enlightenment on the tracks",
  "Fog in July (classified)",
  "VIP movement — entire line cleared for 3 hours",
  "Signal failure (all signals failed simultaneously)",
  "Engine decided to take a different route",
  "Passengers were TOO happy — not suspicious enough",
  "Schedule was wrong from 1987, we just noticed",
  "Railway Minister's astrologer said today was inauspicious for trains",
  "Train competed with parallel universe train for same track",
  "Crew fell asleep — AC was too comfortable",
  "GPS said 'turn left'. Train cannot turn left.",
];

const delayAmounts = [
  "47m", "1h 05m", "1h 30m", "2h 10m", "3h 47m",
  "4h 23m", "5h 10m", "6h 42m", "7h 00m", "11h 30m",
];

const liveUpdateMessages = [
  "Driver spotted at tea stall near Platform 3",
  "Train still emotionally unavailable",
  "Signal refused to turn green (personal reasons)",
  "Guard blowing whistle; nobody listening",
  "Engine consulting astrologer about departure time",
  "Passengers have accepted fate and started a kitty party",
  "ATC: 'Where is train?' | Control: 'Yes'",
  "Train approaching station. Station also approaching. Standoff.",
  "Delay updated from 3h to 'whenever God wills'",
  "TTE confirmed: at least the AC is working",
  "Official update: No official update available",
  "Train seen near Mathura. Or was it Agra. Unclear.",
  "Driver has finished first chai. Second chai commenced.",
  "New ETA generated. Previous ETA filed under 'Satire'.",
  "Railway Minister tweeted 'On time India'. Train not told.",
];

const fakeStations = [
  { name: "New Delhi", scheduled: "10:00", actual: "10:47", status: "Left Late" },
  { name: "Mathura Jn", scheduled: "11:15", actual: "12:03", status: "Left Late" },
  { name: "Agra Cantt", scheduled: "12:00", actual: "13:11", status: "Left Late" },
  { name: "Gwalior", scheduled: "13:30", actual: "14:52", status: "Left Late" },
  { name: "Jhansi Jn", scheduled: "14:45", actual: "16:23", status: "Left Late" },
  { name: "Bhopal Jn", scheduled: "17:00", actual: "--:--", status: "Expected Late" },
  { name: "Itarsi Jn", scheduled: "18:30", actual: "--:--", status: "Expected Late" },
  { name: "Nagpur", scheduled: "21:00", actual: "--:--", status: "Expected Late" },
];

const severityTiers = [
  { emoji: "🔥", label: "Mild Delay",     subtitle: "< 2h",    level: 1, active: "border-orange-400 bg-orange-50", labelColor: "text-orange-700" },
  { emoji: "🚨", label: "Serious Delay",  subtitle: "2h – 5h", level: 2, active: "border-red-400 bg-red-50",       labelColor: "text-red-700"    },
  { emoji: "💀", label: "IRCTC Special",  subtitle: "5h+",     level: 3, active: "border-gray-700 bg-gray-900",    labelColor: "text-white"      },
] as const;

function getDelaySeverityLevel(delay: string): 1 | 2 | 3 {
  const hours = parseInt(delay.match(/(\d+)h/)?.[1] ?? "0");
  const mins  = parseInt(delay.match(/(\d+)m/)?.[1] ?? "0");
  const total = hours * 60 + mins;
  if (total >= 300) return 3;
  if (total >= 120) return 2;
  return 1;
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false });
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function TrainStatusPage() {
  const [trainNumber, setTrainNumber] = useState("");
  const [searched,    setSearched]    = useState(false);
  const [loading,     setLoading]     = useState(false);
  // bumped on every search — used as the useMemo key so random values
  // are stable across re-renders and only change when the user searches again
  const [searchKey,   setSearchKey]   = useState(0);
  const [generatedReason, setGeneratedReason] = useState("");
  const [liveUpdates, setLiveUpdates] = useState<Array<{ time: string; message: string }>>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Stable random values — recomputed only when searchKey changes, not on every render
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const reason      = useMemo(() => pickRandom(delayReasons),  [searchKey]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delayAmount = useMemo(() => pickRandom(delayAmounts),  [searchKey]);

  const severityLevel = useMemo(() => getDelaySeverityLevel(delayAmount), [delayAmount]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    };
  }, []);

  const handleSearch = () => {
    if (trainNumber.length !== 5) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

    setSearched(false);
    setLoading(true);
    setLiveUpdates([]);

    // Fake ~1.5 s network call for realism
    searchTimeoutRef.current = setTimeout(() => {
      setSearchKey((k) => k + 1);
      setSearched(true);
      setLoading(false);

      const now = new Date();
      setLiveUpdates([
        { time: formatTime(new Date(now.getTime() - 6 * 60_000)), message: pickRandom(liveUpdateMessages) },
        { time: formatTime(new Date(now.getTime() - 3 * 60_000)), message: pickRandom(liveUpdateMessages) },
      ]);

      intervalRef.current = setInterval(() => {
        setLiveUpdates((prev) => [
          { time: formatTime(new Date()), message: pickRandom(liveUpdateMessages) },
          ...prev.slice(0, 9),
        ]);
      }, 5000);
    }, 1500);
  };

  const handleGenerateReason = () => {
    setGeneratedReason(pickRandom(delayReasons));
  };

  return (
    <>
      <HeroSection
        title="Train Status — Confirmed: It's Late"
        subtitle="Check the real-time status of any train. Spoiler: it's running late. The only variable is by how much."
        badge="🔴 LIVE: All 12,000 trains currently delayed"
      />

      {/* Search Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-primary mb-2">
              Check Train Status
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Enter any train number. We guarantee it&apos;s late.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                inputMode="numeric"
                value={trainNumber}
                onChange={(e) => {
                  // Accept only digits, max 5 characters
                  const digits = e.target.value.replace(/\D/g, "").slice(0, 5);
                  setTrainNumber(digits);
                  setSearched(false);
                  setLoading(false);
                }}
                placeholder="Enter 5-digit train number (e.g. 12301)"
                maxLength={5}
                pattern="[0-9]{5}"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button
                onClick={handleSearch}
                disabled={loading}
                className="shrink-0 bg-primary hover:bg-blue-900 disabled:opacity-60 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                {loading ? "Checking…" : "Check Status"}
              </button>
            </div>

            {/* Skeleton Loader */}
            {loading && (
              <div className="mt-6 space-y-4 animate-pulse" aria-label="Loading train status">
                {/* summary skeleton */}
                <div className="bg-primary/20 rounded-xl h-[76px]" />
                {/* severity meter skeleton */}
                <div className="grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="rounded-lg border-2 border-gray-100 bg-gray-100 h-20" />
                  ))}
                </div>
                {/* reason skeleton */}
                <div className="border-l-4 border-gray-200 bg-gray-50 rounded-r-xl px-5 py-4">
                  <div className="h-2.5 w-24 bg-gray-200 rounded mb-3" />
                  <div className="h-4 w-2/3 bg-gray-200 rounded" />
                </div>
                {/* timeline skeleton */}
                <div className="rounded-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gray-200 h-8" />
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-3 px-4 py-3 border-b border-gray-100 last:border-0">
                      <div className="h-4 w-28 bg-gray-100 rounded" />
                      <div className="h-4 w-12 bg-gray-100 rounded" />
                      <div className="h-4 w-12 bg-gray-100 rounded" />
                      <div className="h-4 w-20 bg-gray-100 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Search Result */}
            {searched && !loading && trainNumber && (
              <div className="mt-6 space-y-4 animate-fadeIn">

                {/* Block 1 — Train Summary */}
                <div className="flex items-center gap-4 bg-primary rounded-xl px-5 py-4">
                  <span className="text-4xl" aria-hidden="true">🚆</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-0.5">
                      Train Number
                    </p>
                    <p className="font-mono font-black text-white text-3xl leading-none">
                      {trainNumber}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="delay-badge text-sm">RUNNING LATE</span>
                    <p className="text-white font-extrabold text-2xl mt-1">{delayAmount}</p>
                  </div>
                </div>

                {/* Block 2 — Delay Severity Meter */}
                <div className="bg-white border border-gray-200 rounded-xl px-5 py-4">
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">
                    Delay Severity Meter
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {severityTiers.map((tier) => {
                      const isActive = severityLevel >= tier.level;
                      return (
                        <div
                          key={tier.label}
                          className={`rounded-lg px-2 py-3 text-center border-2 transition-all ${
                            isActive ? tier.active : "border-gray-100 bg-gray-50"
                          }`}
                        >
                          <div className="text-2xl mb-1">{tier.emoji}</div>
                          <p className={`text-xs font-bold leading-tight ${isActive ? tier.labelColor : "text-gray-400"}`}>
                            {tier.label}
                          </p>
                          <p className={`text-xs mt-0.5 ${isActive ? tier.labelColor + " opacity-70" : "text-gray-300"}`}>
                            {tier.subtitle}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Block 3 — Delay Reason callout */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl px-5 py-4">
                  <p className="text-yellow-700 text-xs font-bold uppercase tracking-widest mb-1">
                    Official Reason™
                  </p>
                  <p className="text-gray-800 font-medium text-base italic">
                    &ldquo;{reason}&rdquo;
                  </p>
                </div>

                {/* Block 4 — Station timeline */}
                <div className="rounded-xl border border-red-200 overflow-hidden">
                  <div className="bg-primary px-4 py-2">
                    <p className="text-white text-xs font-bold uppercase tracking-wider">
                      Station Timeline
                    </p>
                  </div>

                  {/* Mobile: card list */}
                  <ul className="divide-y divide-red-100 md:hidden">
                    {fakeStations.map((station) => (
                      <li key={station.name} className="bg-white px-4 py-3">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-semibold text-gray-800 text-sm">
                            {station.name}
                          </span>
                          <span
                            className={`whitespace-nowrap text-xs font-bold px-2 py-0.5 rounded-full ${
                              station.status === "Left Late"
                                ? "bg-orange-100 text-orange-700"
                                : "bg-red-100 text-accent"
                            }`}
                          >
                            {station.status}
                          </span>
                        </div>
                        <div className="flex gap-4 text-xs text-gray-500">
                          <span>
                            Sched:{" "}
                            <span className="font-mono text-gray-700">{station.scheduled}</span>
                          </span>
                          <span>
                            Actual:{" "}
                            <span className="font-mono font-bold text-accent">{station.actual}</span>
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Desktop: table */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="bg-red-50 text-gray-600 text-xs uppercase tracking-wide">
                          <th className="px-4 py-2 text-left font-semibold">Station</th>
                          <th className="px-4 py-2 text-left font-semibold">Scheduled</th>
                          <th className="px-4 py-2 text-left font-semibold">Actual</th>
                          <th className="px-4 py-2 text-left font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-red-100">
                        {fakeStations.map((station) => (
                          <tr key={station.name} className="bg-white hover:bg-red-50 transition-colors">
                            <td className="px-4 py-3 font-medium text-gray-800">{station.name}</td>
                            <td className="px-4 py-3 font-mono text-gray-600">{station.scheduled}</td>
                            <td className="px-4 py-3 font-mono font-bold text-accent">{station.actual}</td>
                            <td className="px-4 py-3">
                              <span
                                className={`inline-block whitespace-nowrap text-xs font-bold px-2 py-1 rounded-full ${
                                  station.status === "Left Late"
                                    ? "bg-orange-100 text-orange-700"
                                    : "bg-red-100 text-accent"
                                }`}
                              >
                                {station.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Block 5 — Fake Live Updates */}
                <div className="rounded-xl border border-gray-700 overflow-hidden">
                  <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
                    <p className="text-green-400 text-xs font-mono font-bold uppercase tracking-wider">
                      Live Updates
                    </p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400 live-indicator" />
                      <span className="text-green-400 text-xs font-bold">LIVE</span>
                    </div>
                  </div>
                  <ul className="bg-gray-950 divide-y divide-gray-800 max-h-48 overflow-y-auto">
                    {liveUpdates.map((update, i) => (
                      <li key={i} className="px-4 py-2.5 flex items-start gap-3">
                        <span className="text-green-500 font-mono text-xs shrink-0 mt-0.5">
                          [{update.time}]
                        </span>
                        <span className="text-gray-300 text-sm">{update.message}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            )}
          </div>
        </div>
      </section>

      {/* Live Status Board */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-extrabold text-primary">
              Fake Live Status Board
            </h2>
            <div className="flex items-center gap-2 bg-red-100 text-accent text-xs font-bold px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent live-indicator" />
              LIVE
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-6">
            Showing status for today&apos;s most notable departures. All trains
            confirmed late. Color coding: 🟠 Very Late, 🔴 Catastrophically Late
          </p>
          <TrainStatusBoard />
        </div>
      </section>

      {/* Delay Reason Generator */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-primary mb-3">
            Official Delay Reason Generator™
          </h2>
          <p className="text-gray-500 mb-8 text-sm">
            Indian Railways&apos; proprietary system for generating plausible-sounding
            explanations for delays. Powered by advanced random selection.
          </p>

          <button
            onClick={handleGenerateReason}
            className="bg-primary hover:bg-blue-900 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-md mb-6"
          >
            🎲 Generate Reason for Delay
          </button>

          {generatedReason && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 animate-fadeIn">
              <p className="text-xs text-yellow-600 font-semibold uppercase tracking-wide mb-2">
                Official Reason
              </p>
              <p className="text-gray-800 font-medium text-lg">
                &ldquo;{generatedReason}&rdquo;
              </p>
              <p className="text-xs text-gray-400 mt-3">
                — Indian Railways Official Statement
              </p>
            </div>
          )}

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {[
              { label: "Trains Running Late", value: "11,847", color: "text-accent" },
              { label: "Average Delay", value: "3h 42m", color: "text-warning" },
              { label: "On-Time Trains", value: "3", color: "text-success" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center"
              >
                <p className={`text-2xl font-extrabold ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
