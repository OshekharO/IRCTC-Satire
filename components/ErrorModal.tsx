'use client';

import { useState } from "react";

const errorMessages = [
  {
    code: "503",
    title: "Service Unavailable",
    body: "Our servers are on a chai break. This is a scheduled feature, not a bug. Please try after Diwali.",
  },
  {
    code: "402",
    title: "Payment Required (Already Taken)",
    body: "We have your ₹2,340 but not your ticket. Your money is enjoying a vacation. This is fine.",
  },
  {
    code: "SESSION_EXP",
    title: "Session Expired",
    body: "You took 0.7 seconds too long to fill the captcha. Your 45 minutes of form-filling has been discarded. Please start over.",
  },
  {
    code: "CAPTCHA_FAIL",
    title: "Captcha Verification Failed",
    body: "You failed to identify 9 images of trains in a blurry 4x4 grid within 0.3 seconds. We're not sure you're human. Are you?",
  },
  {
    code: "DB_FULL",
    title: "Database Error",
    body: "Our database is full of disappointment. No more disappointment can be added at this time. Queue position: 4,73,291.",
  },
];

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ErrorModal({ isOpen, onClose }: ErrorModalProps) {
  const [errorIndex, setErrorIndex] = useState(0);

  const handleRetry = () => {
    setErrorIndex((prev) => (prev + 1) % errorMessages.length);
  };

  if (!isOpen) return null;

  const error = errorMessages[errorIndex];

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[200] modal-overlay p-4">
      <div className="bg-white rounded-sm shadow-2xl max-w-md w-full overflow-hidden border-2 border-gray-400">
        {/* Windows XP Title Bar */}
        <div className="xp-title-bar flex items-center justify-between px-3 py-2 select-none">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚠️</span>
            <span className="text-white text-sm font-bold">
              IRCTC Booking System — Critical Error #{error.code}
            </span>
          </div>
          <div className="flex gap-1">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-sm w-5 h-5 flex items-center justify-center text-xs">
              _
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-sm w-5 h-5 flex items-center justify-center text-xs">
              □
            </button>
            <button
              onClick={onClose}
              className="bg-red-500 hover:bg-red-600 text-white rounded-sm w-5 h-5 flex items-center justify-center text-xs font-bold"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="flex gap-4 mb-5">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
              <span className="text-4xl">🚫</span>
            </div>
            <div>
              <h2 className="font-bold text-gray-800 mb-1">{error.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{error.body}</p>
            </div>
          </div>

          <div className="bg-gray-100 rounded p-3 mb-5 font-mono text-xs text-gray-500">
            Error: 0x{error.code}_IRCTC_HOPELESS | Line: ??? | File: hope.dll
            <br />
            Memory: Insufficient | Patience: None remaining
          </div>

          <div className="flex gap-2 justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded text-sm font-medium transition-colors border border-gray-300"
            >
              Give Up
            </button>
            <button
              onClick={handleRetry}
              className="px-5 py-2 bg-primary hover:bg-blue-900 text-white rounded text-sm font-medium transition-colors border border-blue-900"
            >
              Retry (Different Error)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
