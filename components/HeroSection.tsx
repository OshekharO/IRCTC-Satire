import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  badge?: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaHref = "/",
  secondaryCtaText,
  secondaryCtaHref = "/",
  badge,
}: HeroSectionProps) {
  return (
    <section className="hero-gradient text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-9xl">🚂</div>
        <div className="absolute bottom-10 right-10 text-9xl">🚃</div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px]">
          🎫
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {badge && (
          <div className="inline-flex items-center gap-2 bg-warning/20 border border-warning/40 text-yellow-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            {badge}
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          {title}
        </h1>

        <p className="text-lg sm:text-xl text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {(ctaText || secondaryCtaText) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaText && (
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {ctaText}
              </Link>
            )}
            {secondaryCtaText && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-3 rounded-lg text-base transition-all"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
