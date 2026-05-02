'use client';

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import TrainStatusBoard from "@/components/TrainStatusBoard";

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

export default function TrainStatusPage() {
  const [trainNumber, setTrainNumber] = useState("");
  const [searched, setSearched] = useState(false);
  const [reason, setReason] = useState("");
  const [generatedReason, setGeneratedReason] = useState("");

  const handleSearch = () => {
    if (trainNumber.trim()) {
      const randomReason =
        delayReasons[Math.floor(Math.random() * delayReasons.length)];
      setReason(randomReason);
      setSearched(true);
    }
  };

  const handleGenerateReason = () => {
    const r = delayReasons[Math.floor(Math.random() * delayReasons.length)];
    setGeneratedReason(r);
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
                value={trainNumber}
                onChange={(e) => {
                  setTrainNumber(e.target.value);
                  setSearched(false);
                }}
                placeholder="Enter train number (e.g. 12301)"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button
                onClick={handleSearch}
                className="shrink-0 bg-primary hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Check Status
              </button>
            </div>

            {/* Search Result */}
            {searched && trainNumber && (
              <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-5 animate-fadeIn">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🚆</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center flex-wrap gap-2 mb-2">
                      <span className="font-mono font-black text-primary text-lg">
                        {trainNumber}
                      </span>
                      <span className="delay-badge">RUNNING LATE</span>
                      <span className="bg-accent/10 text-accent font-bold text-sm px-2 py-1 rounded whitespace-nowrap">
                        4h 23m
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 break-words">
                      <span className="font-medium">Current reason: </span>
                      <span className="italic text-gray-500">&ldquo;{reason}&rdquo;</span>
                    </p>
                    <div className="mt-4 overflow-x-auto rounded-lg border border-red-200">
                      <table className="min-w-full text-xs">
                        <thead>
                          <tr className="bg-primary text-white">
                            <th className="px-3 py-2 text-left font-semibold">Station</th>
                            <th className="px-3 py-2 text-left font-semibold">Scheduled</th>
                            <th className="px-3 py-2 text-left font-semibold">Actual</th>
                            <th className="px-3 py-2 text-left font-semibold">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-red-100">
                          {fakeStations.map((station) => (
                            <tr key={station.name} className="bg-white hover:bg-red-50">
                              <td className="px-3 py-2 font-medium text-gray-800">
                                {station.name}
                              </td>
                              <td className="px-3 py-2 font-mono text-gray-600">
                                {station.scheduled}
                              </td>
                              <td className="px-3 py-2 font-mono font-bold text-accent">
                                {station.actual}
                              </td>
                              <td className="px-3 py-2">
                                <span
                                  className={`inline-block whitespace-nowrap text-xs font-bold px-2 py-0.5 rounded-full ${
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
