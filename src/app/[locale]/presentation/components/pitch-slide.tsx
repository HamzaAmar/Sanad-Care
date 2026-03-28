/** biome-ignore-all lint/suspicious/noArrayIndexKey: static slide blocks, order is the key */
import { Separator } from "@pillar-ui/core";
import PointList from "../core/point-list";
import type { SlideConfig, SlideSection } from "../slide-data";

function renderSections(sections: SlideSection[]) {
  return sections.map((block, i) => {
    if (block.type === "p") {
      return (
        <p key={i} className="pitch-prose">
          {block.text}
        </p>
      );
    }
    if (block.type === "bullets") {
      return (
        <PointList
          key={i}
          items={block.items.map((item, j) => ({
            id: `${i}-${j}`,
            item,
          }))}
        />
      );
    }
    if (block.type === "numbered") {
      return (
        <ol key={i} className="step-list">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ol>
      );
    }
    if (block.type === "highlight") {
      return (
        <div key={i} className="pitch-callout">
          {block.text}
        </div>
      );
    }
    return null;
  });
}

export default function PitchSlide({ config }: { config: SlideConfig }) {
  if (config.variant === "cover") {
    return (
      <div className="slide-inner">
        <div className="accent-glow" style={{ top: -80, right: -80 }} />
        <div className="cover-badge">Soins à domicile · Maroc</div>
        <h1>
          SANAD <span className="accent">CARE</span>
        </h1>
        {config.tagline ? <p className="cover-tagline">{config.tagline}</p> : null}
        {config.sections.map((block, i) =>
          block.type === "p" ? (
            <p key={i} className="subtitle" style={{ marginTop: 28, maxWidth: 680 }}>
              {block.text}
            </p>
          ) : null,
        )}
      </div>
    );
  }

  if (config.variant === "closing") {
    const lines = config.sections.filter(
      (s): s is Extract<SlideSection, { type: "p" }> => s.type === "p",
    );
    return (
      <div className="slide-inner">
        <div className="accent-glow" style={{ bottom: -100, left: -100 }} />
        {config.label ? <div className="eyebrow">{config.label}</div> : null}
        <div className="vision-quote">
          {lines.map((s, i) => (
            <p key={i} className="closing-verse">
              {s.text}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="slide-inner">
      <div className="accent-glow" style={{ top: -60, right: -60 }} />
      <div className="eyebrow">{config.chapter}</div>
      {config.heading ? <h2>{config.heading}</h2> : null}
      <Separator />
      {renderSections(config.sections)}
    </div>
  );
}
