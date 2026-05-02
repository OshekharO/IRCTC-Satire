'use client';

import { useState, useEffect } from "react";

type Phase = "countdown" | "open" | "soldout";

export default function TatkalTimer() {
  const [seconds, setSeconds] = useState(10);
  const [phase, setPhase] = useState<Phase>("countdown");

  useEffect(() => {
    if (phase !== "countdown") return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setPhase("open");
          setTimeout(() => setPhase("soldout"), 300);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [phase]);

  const handleReset = () => {
    setSeconds(10);
    setPhase("countdown");
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm mx-auto">
      {/* Timer Header */}
      <div className="bg-primary text-white px-6 py-4 text-center">
        <p className="text-sm font-medium text-blue-200 uppercase tracking-wider mb-1">
          Tatkal Booking Window
        </p>
        <p className="text-xs text-blue-300">Date: Today | Train: 12301 Rajdhani</p>
      </div>

      <div className="p-8 text-center">
        {phase === "countdown" && (
          <>
            <div className="text-6xl font-mono font-black text-primary mb-3 tabular-nums">
              0:{seconds.toString().padStart(2, "0")}
            </div>
            <p className="text-gray-500 text-sm">Opening in...</p>
            <div className="mt-4 flex justify-center gap-1">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-6 rounded-full transition-colors duration-500 ${
                    i < seconds ? "bg-primary" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {phase === "open" && (
          <div className="animate-pulse">
            <div className="text-5xl mb-2">🎉</div>
            <p className="text-2xl font-black text-success">TATKAL OPEN!</p>
          </div>
        )}

        {phase === "soldout" && (
          <>
            <div className="text-5xl mb-3">❌</div>
            <p className="text-2xl font-black text-accent mb-2">
              ALL TICKETS SOLD OUT
            </p>
            <p className="text-sm text-gray-500 mb-1">
              Fastest sellout: <span className="font-bold text-accent">0.3 seconds</span>
            </p>
            <p className="text-xs text-gray-400 mb-6 italic">
              Purchased by: <span className="font-semibold">17 bot accounts</span>
            </p>
            <div className="bg-orange-50 border border-warning/30 rounded-lg p-3 mb-4">
              <p className="text-xs text-warning font-medium">
                💡 Pro tip: Call an agent. They already have your ticket.
                For a small(ish) fee.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="text-xs text-primary underline hover:text-blue-800 transition-colors"
            >
              Try again (you won&apos;t get it)
            </button>
          </>
        )}
      </div>
    </div>
  );
}
