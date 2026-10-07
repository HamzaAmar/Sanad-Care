import { Chips, Heading, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import type { CSSProperties } from "react";
import { Reveal } from "@/app/_components/reveal";

const TourismJourney = () => {
  const t = useTranslations("tourism.page.journey");
  const steps = t.raw("steps") as { title: string; description: string }[];

  return (
    <section className="tourism-journey" aria-labelledby="tourism-journey-title">
      <div className="tourism-container tourism-band">
        <header className="tour-head tour-head--center">
          <Reveal index={0}>
            <Chips corner="full" color="p" variant="soft" size="3">
              {t("subtitle")}
            </Chips>
          </Reveal>

          <Reveal index={1}>
            <Heading as="h2" size="8" weight="8" className="tour-title" id="tourism-journey-title">
              {t("title")}
            </Heading>
          </Reveal>
        </header>

        <Reveal className="tourism-journey__wrap">
          <div className="tour-timeline">
            <span className="tour-timeline__thread" aria-hidden="true">
              <svg viewBox="0 0 44 400" preserveAspectRatio="none">
                <path
                  className="tour-timeline__path"
                  d="M22 4 C 8 70 36 120 22 190 S 8 320 22 396"
                  pathLength={1}
                />
              </svg>
            </span>

            <ol className="tour-timeline__list">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="tour-timeline__item"
                  style={{ "--i": i } as CSSProperties}
                >
                  <span className="tour-timeline__node" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="tour-timeline__body">
                    <Heading as="h3" size="4" weight="6">
                      {step.title}
                    </Heading>
                    <Text size="4" color="b" low>
                      {step.description}
                    </Text>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TourismJourney;
