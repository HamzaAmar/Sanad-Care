/** biome-ignore-all lint/suspicious/noArrayIndexKey: static slide blocks, order is the key */
import type { CSSProperties, ReactNode } from "react";
import { Separator } from "@pillar-ui/core";
import Card from "../core/card";
import FlowStep from "../core/flow-step";
import PointList from "../core/point-list";
import RevenueCard from "../core/revenue-card";
import StatCard from "../core/stat-card";
import type { SlideConfig, SlideSection } from "../slide-data";

function Reveal({
  i,
  className = "",
  children,
}: {
  i: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`reveal ${className}`.trim()} style={{ "--reveal-i": i } as CSSProperties}>
      {children}
    </div>
  );
}

export default function PitchSlide({ config }: { config: SlideConfig }) {
  if (config.variant === "cover") {
    let ri = 0;
    const r = () => ri++;
    return (
      <div className="slide-inner pitch-slide pitch-slide--cover">
        <div className="accent-glow accent-glow--lg" />
        <div className="accent-glow accent-glow--secondary" />
        <Reveal i={r()}>
          <div className="cover-badge cover-badge--pulse">Conference deck · Maroc</div>
        </Reveal>
        <Reveal i={r()}>
          <h1 className="cover-title-h1">
            SANAD <span className="accent">CARE</span>
          </h1>
        </Reveal>
        {config.tagline ? (
          <Reveal i={r()}>
            <p className="cover-tagline cover-tagline--hero">{config.tagline}</p>
          </Reveal>
        ) : null}
        {config.sections.map((block, i) => {
          if (block.type === "stats") {
            return (
              <Reveal key={i} i={r()}>
                <div className="stat-row stat-row--hero">
                  {block.items.map((s, j) => (
                    <StatCard key={j} value={s.value} label={s.label} />
                  ))}
                </div>
              </Reveal>
            );
          }
          if (block.type === "p") {
            return (
              <Reveal key={i} i={r()}>
                <p className="subtitle subtitle--cover">{block.text}</p>
              </Reveal>
            );
          }
          return null;
        })}
      </div>
    );
  }

  if (config.variant === "closing") {
    const lines = config.sections.filter(
      (s): s is Extract<SlideSection, { type: "p" }> => s.type === "p",
    );
    let ri = 0;
    const r = () => ri++;
    return (
      <div className="slide-inner pitch-slide pitch-slide--closing">
        <div className="accent-glow accent-glow--lg" style={{ bottom: "-40%", left: "-20%" }} />
        {config.label ? (
          <Reveal i={r()}>
            <div className="eyebrow">{config.label}</div>
          </Reveal>
        ) : null}
        <Reveal i={r()}>
          <div className="vision-quote vision-quote--closing">
            {lines.map((s, i) => (
              <p key={i} className="closing-verse">
                {s.text}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    );
  }

  let revealIdx = 0;
  const nextR = () => revealIdx++;

  return (
    <div className="slide-inner pitch-slide pitch-slide--content">
      <div className="accent-glow" />
      <Reveal i={nextR()}>
        <div className="eyebrow">{config.chapter}</div>
      </Reveal>
      {config.heading ? (
        <Reveal i={nextR()}>
          <h2 className="pitch-heading">{config.heading}</h2>
        </Reveal>
      ) : null}
      <Reveal i={nextR()}>
        <Separator />
      </Reveal>
      {config.sections.map((block, i) => {
        if (block.type === "p") {
          return (
            <Reveal key={i} i={nextR()}>
              <p className="pitch-prose">{block.text}</p>
            </Reveal>
          );
        }
        if (block.type === "bullets") {
          return (
            <Reveal key={i} i={nextR()}>
              <PointList
                items={block.items.map((item, j) => ({
                  id: `${i}-${j}`,
                  item,
                }))}
              />
            </Reveal>
          );
        }
        if (block.type === "numbered") {
          return (
            <Reveal key={i} i={nextR()}>
              <ol className="step-list">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            </Reveal>
          );
        }
        if (block.type === "highlight") {
          return (
            <Reveal key={i} i={nextR()}>
              <div className="pitch-callout">{block.text}</div>
            </Reveal>
          );
        }
        if (block.type === "stats") {
          return (
            <Reveal key={i} i={nextR()}>
              <div className="stat-row">
                {block.items.map((s, j) => (
                  <StatCard key={j} value={s.value} label={s.label} />
                ))}
              </div>
            </Reveal>
          );
        }
        if (block.type === "cards") {
          const cols = block.items.length >= 5 ? "pitch-card-grid pitch-card-grid--5" : "pitch-card-grid";
          return (
            <Reveal key={i} i={nextR()}>
              <div className={cols}>
                {block.items.map((c, j) => (
                  <Card key={j} icon={c.icon} title={c.title} body={c.body} />
                ))}
              </div>
            </Reveal>
          );
        }
        if (block.type === "flow") {
          return (
            <Reveal key={i} i={nextR()}>
              <div className="pitch-flow-grid">
                {block.items.map((step, j) => (
                  <FlowStep key={j} icon={step.icon} label={step.label} />
                ))}
              </div>
            </Reveal>
          );
        }
        if (block.type === "revenue") {
          return (
            <Reveal key={i} i={nextR()}>
              <div className="revenue-row revenue-row--pitch">
                {block.items.map((rc, j) => (
                  <RevenueCard
                    key={j}
                    icon={rc.icon}
                    title={rc.title}
                    subtitle={rc.subtitle}
                    badge={rc.badge}
                  />
                ))}
              </div>
            </Reveal>
          );
        }
        return null;
      })}
    </div>
  );
}
