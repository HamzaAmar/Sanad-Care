import { useMemo } from "react";

interface NavProps {
  slides: { chapter: string; title: string }[];
  current: number;
  visible: boolean;
  onNavigate: (index: number) => void;
}

export default function Nav({ slides, current, visible, onNavigate }: NavProps) {
  // Group slides by chapter
  const chapters = useMemo(() => {
    const map = new Map<string, { index: number; title: string }[]>();
    slides.forEach((s, i) => {
      let items = map.get(s.chapter);
      if (!items) {
        items = [];
        map.set(s.chapter, items);
      }
      items.push({ index: i, title: s.title });
    });
    return map;
  }, [slides]);

  return (
    <nav id="nav" className={visible ? "" : "hidden"}>
      <div className="nav-logo">
        <div className="nav-logo-text">SANAD CARE</div>
        <div className="nav-logo-sub">Pitch Deck · 2025</div>
      </div>

      <div id="chapter-nav">
        {[...chapters.entries()].map(([chapter, items]) => (
          <div className="chapter-group" key={chapter}>
            <div className="chapter-label">{chapter}</div>
            {items.map((item) => (
              <button
                type="button"
                key={item.index}
                className={`nav-item ${item.index === current ? "active" : ""}`}
                onClick={() => onNavigate(item.index)}
              >
                <span className="nav-dot" />
                {item.title}
              </button>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
}
