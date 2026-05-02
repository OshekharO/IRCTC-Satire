'use client';

import dynamic from "next/dynamic";

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

export default function TatkalTimerWrapper() {
  return <TatkalTimer />;
}
