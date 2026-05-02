import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Blurb */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-extrabold">
                🚂 IRCTC<sup className="text-accent text-sm">*</sup>
              </span>
              <span className="text-xs text-blue-300 italic mt-1">
                *Indian Railway Catering &amp; Tomfoolery Corporation
              </span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Proudly failing passengers since 1999. Our servers crash so you
              can appreciate the beauty of actually reaching your destination —
              someday.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-300 font-bold text-sm uppercase tracking-wide mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Book Ticket (Server Down)", href: "/" },
                { label: "Tatkal Lottery", href: "/tatkal" },
                { label: "Why Tatkal Fails", href: "/why-tatkal-fails" },
                { label: "Tatkal Booking Tips", href: "/tatkal-tips" },
                { label: "Train Status (It's Late)", href: "/train-status" },
                { label: "Hall of Shame", href: "/hall-of-shame" },
                { label: "Agent Network", href: "/agent-network" },
              ].map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useless Features */}
          <div>
            <h3 className="text-yellow-300 font-bold text-sm uppercase tracking-wide mb-4">
              Useless Features
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "PNR Status (WL Forever)",
                "Cancel Ticket (Good Luck)",
                "E-Ticket (Never Arrives)",
                "Refund Status (Processing Since 2019)",
                "Customer Support (Unreachable)",
              ].map((item) => (
                <li key={item} className="text-blue-300 cursor-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-yellow-300 font-bold text-sm uppercase tracking-wide mb-4">
                Legal Nonsense
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Privacy Policy (We Sold Your Data)",
                  "Terms & Conditions (42,000 pages)",
                  "Disclaimer (It's Satire)",
                  "Cookie Policy (We Use Many Cookies)",
                ].map((item) => (
                  <li key={item} className="text-blue-300 cursor-default">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-yellow-300 font-bold text-sm uppercase tracking-wide mb-4">
                Contact (Never)
              </h3>
              <ul className="space-y-2 text-sm text-blue-300">
                <li>📧 server-down@irctc.satire</li>
                <li>📞 1800-GOOD-LUCK</li>
                <li>🐦 @IRCTC_Problems</li>
                <li>🏢 Office: Usually closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Share the pain row */}
      <div className="border-t border-blue-800 bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-300 text-sm font-medium">
            😭 Share the pain — because misery loves company:
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://wa.me/?text=Bhai%20ye%20dekh%20-%20IRCTC%20ka%20saccha%20haal%20😂%20https%3A%2F%2Fwww.irctc.eu.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp karo
            </a>
            <a
              href="https://x.com/intent/tweet?text=IRCTC%20%E2%80%94%20India%27s%20most%20reliable%20ticket%20frustration%20system%20%F0%9F%9A%82&url=https%3A%2F%2Fwww.irctc.eu.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-black hover:bg-gray-800 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors"
            >
              Tweet
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-blue-300 text-xs mb-3">
            © 2026 IRCTC Satire. All rights reserved. All trains delayed.
            All tickets sold to agents.
          </p>
          <div className="bg-accent/20 border border-accent rounded-lg p-3 text-center">
            <p className="text-accent font-bold text-xs sm:text-sm">
              ⚠️ THIS IS A SATIRICAL/PARODY WEBSITE. Not affiliated with IRCTC
              or Indian Railways. All content is fictional and for entertainment
              purposes only. We mean no harm — we&apos;re just frustrated train
              passengers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
