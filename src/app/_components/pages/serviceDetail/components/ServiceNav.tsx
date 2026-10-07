"use client";

import { useEffect, useState } from "react";

export interface ServiceNavSection {
  id: string;
  label: string;
  /**
   * Whether the scroll-spy should track this section. Set false for targets
   * that are pinned (the sticky contact card) — a sticky element is always at
   * the top of the viewport and would otherwise always be "active".
   */
  spy?: boolean;
}

/**
 * Sticky in-page navigation with a scroll-spy.
 *
 * This is the page's only interactive chrome. It is a real list of anchor
 * links, so it works without JavaScript and mirrors automatically in RTL
 * (no translateX maths).
 */
export function ServiceNav({ sections, label }: { sections: ServiceNavSection[]; label: string }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const elements = sections
      .filter((section) => section.spy !== false)
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    /**
     * Pick the last section whose top has passed the reading line, derived from
     * live rects. Correct on tall viewports, where every section intersects at
     * once and "topmost intersecting" would be ambiguous.
     */
    const sync = () => {
      const line = window.innerHeight * 0.35;
      let current = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      setActive(current);
    };

    const observer = new IntersectionObserver(sync, {
      rootMargin: "-80px 0px -40% 0px",
      threshold: [0, 1],
    });
    for (const el of elements) observer.observe(el);
    sync();

    return () => observer.disconnect();
  }, [sections]);

  if (sections.length < 2) return null;

  return (
    <nav className="sd-nav" aria-label={label}>
      <ul className="sd-nav__list">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              className="sd-nav__link"
              href={`#${section.id}`}
              aria-current={active === section.id ? "location" : undefined}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ServiceNav;
