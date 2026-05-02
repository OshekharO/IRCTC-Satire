'use client';

import { useEffect, useRef, useState } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Extra bottom margin to trigger slightly earlier. Defaults to -60px */
  rootMargin?: string;
  /** Delay before the fade starts, in ms. Useful for staggered siblings. */
  delay?: number;
}

/**
 * Wraps children in a div that fades and slides up when scrolled into view.
 * Uses IntersectionObserver — animates only once per page load.
 */
export default function FadeInSection({
  children,
  className = "",
  rootMargin = "0px 0px -60px 0px",
  delay = 0,
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            timeoutId = setTimeout(() => setVisible(true), delay);
          } else {
            setVisible(true);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [rootMargin, delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
      } ${className}`}
    >
      {children}
    </div>
  );
}
