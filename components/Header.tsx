'use client';

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tatkal Scam", href: "/tatkal" },
  { label: "Why Tatkal Fails", href: "/why-tatkal-fails" },
  { label: "Tatkal Tips", href: "/tatkal-tips" },
  { label: "Train Status", href: "/train-status" },
  { label: "Hall of Shame", href: "/hall-of-shame" },
  { label: "Agent Network", href: "/agent-network" },
  { label: "Disappointment Calculator", href: "/disappointment-calculator" },
];

const retryMessages = [
  "Still down. Have you tried turning off your hopes?",
  "Retry #2 failed. Server is now more down than before.",
  "Server has entered a meditative state. Please wait.",
  "Error persists. Engineers have been paged (they're at lunch).",
  "Connection refused. The server has feelings too.",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [retryMsg, setRetryMsg] = useState("");

  const handleBookTicket = () => {
    setRetryCount(0);
    setRetryMsg("");
    setShowModal(true);
  };

  const handleRetry = () => {
    const next = retryCount % retryMessages.length;
    setRetryMsg(retryMessages[next]);
    setRetryCount((c) => c + 1);
  };

  return (
    <>
      <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
        {/* Satirical disclaimer strip */}
        <div className="bg-accent text-white text-center text-xs py-1 px-4 font-medium">
          ⚠️ SATIRE / PARODY WEBSITE — Not affiliated with IRCTC or Indian Railways. For entertainment only.
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-tight group">
              <span className="text-xl font-extrabold tracking-wide group-hover:text-yellow-300 transition-colors">
                🚂 IRCTC<sup className="text-accent text-xs">*</sup>
              </span>
              <span className="text-[10px] text-blue-200 font-light italic">
                *Indian Railway Catering &amp; Tomfoolery Corporation
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-800 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Book Ticket Button + Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleBookTicket}
                className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-md transition-colors shadow-md"
              >
                🎫 Book Ticket
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-blue-800 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="space-y-1">
                  <span
                    className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${
                      menuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  />
                  <span
                    className={`block w-5 h-0.5 bg-white transition-opacity duration-200 ${
                      menuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${
                      menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 border-t border-blue-700 mt-2 pt-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-800 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleBookTicket}
                className="w-full text-left px-3 py-2 rounded-md text-sm font-bold text-white bg-accent hover:bg-red-700 transition-colors mt-2"
              >
                🎫 Book Ticket
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Server Down Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] modal-overlay p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Windows XP-style title bar */}
            <div className="xp-title-bar flex items-center justify-between px-4 py-2">
              <div className="flex items-center gap-2">
                <span className="text-white text-sm font-bold">
                  IRCTC Booking System — Error
                </span>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 hover:bg-red-600 text-white rounded-sm w-5 h-5 flex items-center justify-center text-xs font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-6 text-center">
              <div className="text-6xl mb-4">🚫</div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Server Down!
              </h2>
              <p className="text-gray-600 mb-2">
                Please try after Diwali 🙏
              </p>
              <p className="text-xs text-gray-400 mb-6">
                Error Code: HOPE_LOST_503 | Our servers are meditating.
                Expected recovery: Sometime in the next fiscal year.
              </p>
              {retryMsg && (
                <p className="text-xs text-orange-600 font-medium mb-4 bg-orange-50 rounded p-2">
                  ↻ {retryMsg}
                </p>
              )}
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-blue-900 transition-colors"
                >
                  Give Up
                </button>
                <button
                  onClick={handleRetry}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
                >
                  Retry (Lol)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
