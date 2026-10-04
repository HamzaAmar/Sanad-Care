"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

const MAX_STAGGER_INDEX = 8;

type RevealProps = {
  children: ReactNode;
  className?: string;
  /**
   * Stagger slot for grid items. Delay = min(index, 8) * 60ms.
   * Capped so the last item never waits more than 480ms.
   */
  index?: number;
  /**
   * `section` — 450ms entrance for section blocks.
   * `item` — 300ms entrance for grid cards.
   */
  variant?: "section" | "item";
  threshold?: number;
  rootMargin?: string;
  style?: CSSProperties;
};

export function Reveal({
  children,
  className,
  index = 0,
  variant = "section",
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    // Gate the hidden pre-reveal state on JS being active so content
    // stays fully available with JS disabled or before hydration.
    document.documentElement.classList.add("js");
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin },
    );
    io.observe(el);
    return () => {
      io.disconnect();
    };
  }, [threshold, rootMargin]);

  const capped = Math.min(Math.max(index, 0), MAX_STAGGER_INDEX);
  const cls = ["reveal", variant === "item" ? "reveal-item" : null, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={cls} style={{ ...style, "--reveal-index": capped } as CSSProperties}>
      {children}
    </div>
  );
}

export default Reveal;
