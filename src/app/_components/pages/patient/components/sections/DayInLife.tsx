import { Heading, Text } from "@pillar-ui/core";
import { MoonStar, Star, SunHigh, Sunrise } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import type { CSSProperties, ReactNode } from "react";
import Reveal from "@/app/_components/reveal";

const PERIODS: Array<{ key: string; icon: ReactNode }> = [
  { key: "morning", icon: <Sunrise width={22} stroke="currentColor" strokeWidth={1.6} /> },
  { key: "afternoon", icon: <SunHigh width={22} stroke="currentColor" strokeWidth={1.6} /> },
  { key: "evening", icon: <MoonStar width={22} stroke="currentColor" strokeWidth={1.6} /> },
  { key: "night", icon: <Star width={22} stroke="currentColor" strokeWidth={1.6} /> },
];

const DayInLife = () => {
  const t = useTranslations("patient.page.dayInLife");

  return (
    <section className="pat-block pat-day">
      <Reveal className="pat-day__wrap">
        <header className="pat-head">
          <Heading as="h2" size="7" weight="5" className="pat-title">
            {t("title")}
          </Heading>
        </header>

        <div className="pat-timeline">
          <span className="pat-timeline__thread" aria-hidden="true">
            <svg viewBox="0 0 44 400" preserveAspectRatio="none">
              <path d="M22 4 C 8 70 36 120 22 190 S 8 320 22 396" pathLength={1} />
            </svg>
          </span>

          <ol className="pat-timeline__list">
            {PERIODS.map(({ key, icon }, i) => (
              <li key={key} className="pat-timeline__item" style={{ "--i": i } as CSSProperties}>
                <span className="pat-timeline__node" aria-hidden="true">
                  {icon}
                </span>
                <div className="pat-timeline__body">
                  <Text as="h3" weight="6" className="pat-timeline__time">
                    {t(`periods.${key}.title`)}
                  </Text>
                  <Text size="4" color="b" low>
                    {t(`periods.${key}.description`)}
                  </Text>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
};

export default DayInLife;
