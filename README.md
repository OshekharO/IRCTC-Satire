# 🚂 IRCTC Satire — India's Most Reliable Ticket Frustration System

> *"Where your dreams of confirmed tickets go to die since 1999."*

A satirical / parody web app that lovingly roasts India's beloved IRCTC booking experience — Tatkal disasters, legendary server crashes, impossible captchas, mystery delays, and the all-powerful agent network.

**Live:** [www.irctc.eu.org](https://irctc.eu.org)

---

## 📸 What's Inside

| Page | What it does |
|---|---|
| `/` | Homepage — the full IRCTC experience condensed into one page of pure suffering |
| `/tatkal` | Tatkal Booking — a 0.3-second window to watch seats vanish |
| `/train-status` | Live fake train status board + interactive delay checker |
| `/why-tatkal-fails` | In-depth satirical breakdown of the 6 root causes |
| `/tatkal-tips` | 11 "tips" to book Tatkal, including the 1 that actually works |
| `/hall-of-shame` | Museum of IRCTC's greatest UX disasters and legendary crashes |
| `/agent-network` | When IRCTC fails you — meet the people who never do |
| `/disappointment-calculator` | Enter your journey details, get a personalised frustration score and booking-odds report |

---

## 🛠️ Tech Stack

| Tool | Version | Role |
|---|---|---|
| [Next.js](https://nextjs.org/) | 14 (App Router) | React framework |
| [React](https://react.dev/) | 18 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Styling |
| [Vercel](https://vercel.com/) | — | Hosting & deployment |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/OshekharO/IRCTC-Satire.git
cd IRCTC-Satire

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Unlike IRCTC, it will actually load.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 📂 Project Structure

```
IRCTC-Satire/
├── app/                            # Next.js App Router pages
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout (Header, Footer, metadata)
│   ├── globals.css                 # Global styles & Tailwind base
│   ├── robots.ts                   # robots.txt generation
│   ├── sitemap.ts                  # sitemap.xml generation
│   ├── tatkal/                     # Tatkal booking page
│   ├── train-status/               # Train status checker
│   ├── why-tatkal-fails/           # SEO article page
│   ├── tatkal-tips/                # SEO tips page
│   ├── hall-of-shame/              # IRCTC failure museum
│   ├── agent-network/              # The unofficial ticket guarantee
│   └── disappointment-calculator/  # Personalised frustration-score calculator
│
├── components/                     # Shared React components
│   ├── Header.tsx                  # Site navigation
│   ├── Footer.tsx                  # Footer with links & disclaimer
│   ├── HeroSection.tsx             # Reusable hero banner
│   ├── HomeAutoModal.tsx           # Auto-show error modal on homepage (client island)
│   ├── TrainStatusBoard.tsx        # Fake live train status table
│   ├── TatkalTimer.tsx             # Countdown to 10:00 AM doom
│   ├── TatkalTimerWrapper.tsx      # Client wrapper for TatkalTimer
│   ├── TatkalFaq.tsx               # FAQ accordion for Tatkal page
│   ├── NewsTickerBanner.tsx        # Breaking news ticker
│   ├── ErrorModal.tsx              # Windows XP-style error popup
│   ├── MemeCard.tsx                # Relatable IRCTC meme cards
│   ├── StatsSection.tsx            # Animated stats counter
│   ├── TestimonialCard.tsx         # Victim testimonials
│   ├── TweetCard.tsx               # Satirical tweet-style cards
│   ├── ShareButtons.tsx            # WhatsApp / Twitter share
│   ├── RelatedArticles.tsx         # Internal link section
│   ├── FadeInSection.tsx           # Scroll-triggered fade-in wrapper
│   └── BackToTop.tsx               # Floating back-to-top button
│
├── public/                         # Static assets
├── tailwind.config.ts              # Tailwind config (custom colors, animations)
├── next.config.js                  # Next.js config
├── tsconfig.json                   # TypeScript config
└── vercel.json                     # Vercel deployment config
```

---

## 🎨 Design System

Custom Tailwind theme colors matching IRCTC's iconic blue-and-red palette:

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#00285F` | IRCTC navy blue — headers, buttons |
| `accent` | `#E31837` | Alert red — delays, errors, badges |
| `warning` | `#FF6B00` | Orange — late trains, warnings |
| `success` | `#00A651` | Green — "On Time" (rarely used) |

Custom animations: `ticker-scroll`, `status-blink`, `live-pulse`, `fadeIn`, `shake`, `countUp`.

---

## 📄 Key Features

- **Interactive Train Status Checker** — enter any train number, get a randomly generated satirical delay reason and a fake station-by-station schedule
- **Tatkal Countdown Timer** — counts down to 10:00 AM with a live booking failure simulation
- **Fake Live Status Board** — scrollable table of trains with blinking status indicators
- **Official Delay Reason Generator™** — powered by advanced random selection technology
- **Disappointment Calculator** — enter journey details and receive a deterministic frustration score, ticket-odds estimate, and a grade from A to F
- **Windows XP Error Modal** — pops up 3 seconds after page load, because nostalgia
- **Scrolling News Ticker** — breaking IRCTC headlines you need to know
- **SEO-optimised article pages** — structured data, Open Graph, Twitter cards

---

## 🗓️ Changelog

### May 2026
- Fixed overflow issues in the Train Status "Check Status" panel — badge row now wraps on mobile, long delay reasons no longer break the layout
- Updated all date references to reflect 2026

### Initial Release
- Full satirical website launch with 7 pages
- Responsive design, Tailwind CSS, Next.js App Router

---

## ⚠️ Disclaimer

**This is a satirical / parody website.**  
Not affiliated with IRCTC, Indian Railways, or the Ministry of Railways in any way.  
All content is fictional and for entertainment purposes only.  
We mean absolutely no harm — we are just frustrated train passengers.

---

## 📜 License

MIT — feel free to fork, laugh, and share.

---

*Made with ☕, frustration, and the memory of every Tatkal attempt that ended at 10:00:01 AM.*
