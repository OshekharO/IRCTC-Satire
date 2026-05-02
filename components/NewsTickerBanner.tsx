'use client';

const newsItems = [
  "🔴 BREAKING: IRCTC server achieves 0.1% uptime milestone, engineers celebrate with chai",
  "🚂 Tatkal tickets for Diwali 2025 already sold to agents as of January 2024",
  "⚡ New captcha update: users must now identify blurry trains in 0.3 seconds",
  "🚆 Train 12301 Howrah Rajdhani sets new record: 11 hours late, blamed on 'operational reasons'",
  "💳 IRCTC introduces new feature: payment processing takes longer than the actual train journey",
  "📊 Study finds 94% of Tatkal tickets purchased by just 12 bot accounts",
  "🙏 Railway Minister announces all trains will run on time 'very soon' (since 2014)",
  "📱 IRCTC app crashes simultaneously on Android, iOS, and desktop during Holi booking window",
  "🎫 New Tatkal quota introduced: 0 seats for public, 200 for agents",
  "⏰ Train that was running 3 hours late now running 3 hours late on a different track",
];

export default function NewsTickerBanner() {
  const tickerText = newsItems.join("   🚂   ");

  return (
    <div className="bg-accent text-white overflow-hidden py-2 relative">
      <div className="flex items-center">
        {/* LIVE badge */}
        <div className="flex-shrink-0 bg-white text-accent font-black text-xs px-3 py-1 mr-0 z-10 relative">
          <span className="live-indicator inline-block w-2 h-2 rounded-full bg-accent mr-1" />
          LIVE
        </div>

        <div className="ticker-wrap flex-1">
          <div className="ticker-content text-sm font-medium whitespace-nowrap">
            {tickerText}&nbsp;&nbsp;&nbsp;🚂&nbsp;&nbsp;&nbsp;{tickerText}
          </div>
        </div>
      </div>
    </div>
  );
}
