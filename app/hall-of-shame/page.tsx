import HeroSection from "@/components/HeroSection";

const uxDisasters = [
  {
    title: "The 4-Hour Booking Process",
    desc: "Step 1: Login (2 attempts). Step 2: Search train (captcha). Step 3: Select seat (session warning). Step 4: Fill passenger details (15 fields). Step 5: Payment gateway loads (3 minutes). Step 6: Payment fails. Step 7: You're now 4 hours in and back at Step 1.",
    badge: "UX DISASTER",
  },
  {
    title: "The Disappearing Button",
    desc: 'The "Confirm Booking" button appears for exactly 3 seconds before the session expires. To click it successfully, you need the reflexes of a professional esports athlete and a Wi-Fi connection sponsored by God.',
    badge: "LEGENDARY BUG",
  },
  {
    title: "The Payment Roulette",
    desc: "Pay once, get charged thrice. Your money is on an adventure. Sometimes it comes back as a refund in 90 days. Sometimes it sends you a postcard from the Cayman Islands. Railway's TDR process is a whole different saga.",
    badge: "FINANCIAL HAZARD",
  },
];

const legendaryCrashes = [
  {
    train: "Train 15483",
    delay: "23 hours",
    reason: "The locomotive achieved full sentience and refused to proceed on philosophical grounds.",
  },
  {
    train: "Train 11061",
    delay: "18 hours",
    reason: "Entire crew went on a pilgrimage together. The passengers were not invited.",
  },
  {
    train: "Train 12967",
    delay: "16 hours",
    reason: "Train arrived at the correct station but the wrong decade.",
  },
  {
    train: "Train 19021",
    delay: "15 hours",
    reason: "Fog-related delay. Weather at the time: sunny and 38°C. Fog was 'internal'.",
  },
  {
    train: "Train 14311",
    delay: "14 hours",
    reason: "Driver and guard had a philosophical disagreement about the destination. Train waited for resolution.",
  },
];

const serverCrashes = [
  {
    event: "Diwali 2023 Booking Window",
    duration: "6 hours down",
    detail:
      "140 million booking requests in 10 minutes. Servers responded by entering a coma. Engineers were called in at 3 AM. They brought biryani. Servers remained unimpressed.",
    icon: "🪔",
  },
  {
    event: "IPL Final Travel Rush",
    duration: "4 hours down",
    detail:
      'Load exceeded capacity by 4,000%. Engineering team deployed prayer, incense sticks, and a ritual involving the backup server\'s hard drive. Official statement: "We are working on it."',
    icon: "🏏",
  },
  {
    event: "Holi 2024 Booking",
    duration: "4 hours transcended",
    detail:
      "Server achieved moksha and transcended physical existence for 4 hours. Users who attempted to book reported seeing their bookings in a parallel universe where they succeeded.",
    icon: "🎨",
  },
  {
    event: "New Year 2024 Rush",
    duration: "3 hours of nostalgia",
    detail:
      "Website displayed a 1999 error page. IRCTC later confirmed this was an intentional 'nostalgia feature' to remind users of simpler times when trains ran on time.",
    icon: "🎉",
  },
];

const errorMessages = [
  {
    code: "HTTP 503",
    title: "Service Unavailable",
    body: "Server is taking a chai break. Please try after Diwali. We apologize for the inconvenience and also for existing.",
    color: "border-orange-300 bg-orange-50",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    code: "HTTP 402",
    title: "Payment Required (Already Taken)",
    body: "We have your ₹2,340 but not your ticket. Your money is currently on a journey more successful than your booking attempt. This is fine.",
    color: "border-red-300 bg-red-50",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    code: "SESSION_EXP",
    title: "Session Expired — Again",
    body: "Your session expired while you were reading the captcha instructions. Your 45 minutes of form filling has been deleted. Please log in again. Your password has also been forgotten by us.",
    color: "border-yellow-300 bg-yellow-50",
    badgeColor: "bg-yellow-100 text-yellow-700",
  },
  {
    code: "BOOKING_CNF*",
    title: 'Your Booking Is "Confirmed"*',
    body: '*Confirmation subject to actual seat availability, server uptime, agent activity, planetary alignment, Railway Minister\'s mood, and whether the train exists on that date.',
    color: "border-green-300 bg-green-50",
    badgeColor: "bg-green-100 text-green-700",
  },
];

export default function HallOfShamePage() {
  return (
    <>
      <HeroSection
        title="Hall of Shame — A Museum of Indian Railway Excellence"
        subtitle="A curated collection of IRCTC's finest achievements in the art of failure. Entry is free. Your time is not."
        badge="🏛️ Est. 1999 | Disappointments: Uncountable"
      />

      {/* UX Disasters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-red-50 px-3 py-1 rounded-full">
              WING 1
            </span>
            <h2 className="text-2xl font-extrabold text-primary mt-3 mb-2">
              UX Disasters Gallery
            </h2>
            <p className="text-gray-500 text-sm">
              A timeline of the design decisions that shaped a generation&apos;s
              relationship with existential dread.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {uxDisasters.map((item) => (
              <div
                key={item.title}
                className="step-card bg-gray-50 border border-gray-200 rounded-2xl p-6"
              >
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-accent bg-red-50 px-2 py-1 rounded-full mb-3">
                  {item.badge}
                </span>
                <h3 className="font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Captcha Hall of Shame */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-red-50 px-3 py-1 rounded-full">
              WING 2
            </span>
            <h2 className="text-2xl font-extrabold text-primary mt-3 mb-2">
              Captcha Hall of Shame
            </h2>
            <p className="text-gray-500 text-sm">
              IRCTC&apos;s captchas have been independently verified as harder than
              the IIT-JEE and the bar exam combined.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Captcha 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
              <p className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wide">
                Captcha Challenge #1
              </p>
              <p className="text-sm font-semibold text-gray-700 mb-4">
                &ldquo;Identify all trains in this 4×4 grid&rdquo;
              </p>
              <div className="grid grid-cols-4 gap-1 mb-4">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400 overflow-hidden"
                    style={{
                      filter: "blur(1px) contrast(0.7)",
                      background: `hsl(${i * 22}, 20%, ${60 + (i % 3) * 10}%)`,
                    }}
                  >
                    <span className="text-[8px] opacity-50">?</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <button className="flex-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded transition-colors">
                  Verify
                </button>
                <button className="flex-1 text-xs bg-primary text-white py-2 rounded opacity-50 cursor-not-allowed">
                  Skip (₹50)
                </button>
              </div>
              <p className="text-[10px] text-gray-400 mt-2 text-center italic">
                Time remaining: 0.3 seconds
              </p>
            </div>

            {/* Captcha 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
              <p className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wide">
                Captcha Challenge #2
              </p>
              <p className="text-sm font-semibold text-gray-700 mb-4">
                &ldquo;Type the characters shown below&rdquo;
              </p>
              <div className="bg-gray-900 rounded-lg p-4 text-center mb-4 relative overflow-hidden">
                <div
                  className="font-mono text-2xl font-black tracking-[0.3em] select-none"
                  style={{
                    color: "transparent",
                    backgroundImage:
                      "linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ff00ff)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    filter: "blur(0.5px) contrast(200%)",
                    transform: "skew(-5deg)",
                  }}
                >
                  W@#$%^&amp;*)
                </div>
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
                  }}
                />
              </div>
              <input
                type="text"
                placeholder="Type what you see (good luck)"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-2"
                readOnly
              />
              <p className="text-[10px] text-red-500 text-center font-medium">
                ❌ Incorrect. You have 0 attempts remaining.
              </p>
            </div>

            {/* Captcha 3 */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
              <p className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wide">
                Captcha Challenge #3
              </p>
              <p className="text-sm font-semibold text-gray-700 mb-4">
                &ldquo;Confirm you are not a robot&rdquo;
              </p>
              <div className="border-2 border-gray-300 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-gray-400 rounded bg-gray-100" />
                  <span className="text-sm text-gray-700">I am not a robot</span>
                  <div className="ml-auto">
                    <div className="w-8 h-8 rounded-full bg-gray-200 animate-spin border-2 border-gray-400 border-t-primary" />
                  </div>
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                <p className="text-accent text-xs font-bold">SESSION EXPIRED</p>
                <p className="text-xs text-gray-500 mt-1">
                  Verification took too long. Please log in again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Record-Breaking Delays */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-red-50 px-3 py-1 rounded-full">
              WING 3
            </span>
            <h2 className="text-2xl font-extrabold text-primary mt-3 mb-2">
              Record-Breaking Delays
            </h2>
            <p className="text-gray-500 text-sm">
              India&apos;s greatest achievements in temporal displacement.
            </p>
          </div>

          <div className="space-y-4">
            {legendaryCrashes.map((item, idx) => (
              <div
                key={item.train}
                className="flex items-start gap-5 bg-gray-50 border border-gray-200 rounded-xl p-5 step-card"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-black text-sm">
                  #{idx + 1}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="font-mono font-black text-primary">
                      {item.train}
                    </span>
                    <span className="bg-red-100 text-accent text-xs font-bold px-3 py-1 rounded-full">
                      {item.delay} late
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm italic">&ldquo;{item.reason}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Server Crash Incidents */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest bg-white/20 text-yellow-300 px-3 py-1 rounded-full">
              WING 4
            </span>
            <h2 className="text-2xl font-extrabold mt-3 mb-2">
              Famous Server Crash Incidents
            </h2>
            <p className="text-blue-200 text-sm">
              Commemorating the moments IRCTC&apos;s infrastructure achieved
              peak spiritual elevation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serverCrashes.map((crash) => (
              <div
                key={crash.event}
                className="bg-white/10 border border-white/20 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{crash.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{crash.event}</h3>
                    <span className="text-yellow-300 text-xs font-semibold">
                      {crash.duration}
                    </span>
                  </div>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {crash.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Error Message Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-red-50 px-3 py-1 rounded-full">
              WING 5
            </span>
            <h2 className="text-2xl font-extrabold text-primary mt-3 mb-2">
              Error Message Gallery
            </h2>
            <p className="text-gray-500 text-sm">
              A carefully curated collection of IRCTC&apos;s most creative
              responses to your existence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {errorMessages.map((err) => (
              <div
                key={err.code}
                className={`rounded-2xl border-2 overflow-hidden ${err.color}`}
              >
                {/* Browser chrome mockup */}
                <div className="bg-gray-200 px-4 py-2 flex items-center gap-2 border-b border-gray-300">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-3 flex-1 bg-white rounded text-[10px] px-3 py-1 text-gray-400 font-mono">
                    https://www.irctc.co.in/nget/booking/error
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${err.badgeColor}`}>
                      {err.code}
                    </span>
                    <h3 className="font-bold text-gray-800">{err.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    &ldquo;{err.body}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
