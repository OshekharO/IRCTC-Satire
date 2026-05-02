'use client';

import { useEffect, useRef, useState } from "react";

export interface StatItem {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

interface StatsSectionProps {
  stats: StatItem[];
  title?: string;
  subtitle?: string;
}

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  isVisible,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span className="tabular-nums">
      {prefix}
      {isVisible ? count.toLocaleString("en-IN") : "0"}
      {suffix}
    </span>
  );
}

export default function StatsSection({
  stats,
  title,
  subtitle,
}: StatsSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8">
      {(title || subtitle) && (
        <div className="max-w-3xl mx-auto text-center mb-12">
          {title && (
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">{title}</h2>
          )}
          {subtitle && (
            <p className="text-blue-200">{subtitle}</p>
          )}
        </div>
      )}

      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`text-center counter-animate ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <p className="text-3xl sm:text-4xl font-extrabold text-yellow-300 mb-2">
              <AnimatedCounter
                target={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                isVisible={isVisible}
              />
            </p>
            <p className="text-blue-200 text-sm font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
