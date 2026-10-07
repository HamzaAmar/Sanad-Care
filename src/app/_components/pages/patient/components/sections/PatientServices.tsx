import { Chips, Heading, Text } from "@pillar-ui/core";
import { HeartBeat, HeartMonitor, Shield, Stethoscope } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
import Reveal from "@/app/_components/reveal";

const CATEGORIES: Array<{ key: string; icon: ReactNode }> = [
  { key: "comfort", icon: <HeartBeat width={22} stroke="currentColor" strokeWidth={1.6} /> },
  { key: "medical", icon: <Stethoscope width={22} stroke="currentColor" strokeWidth={1.6} /> },
  { key: "recovery", icon: <HeartMonitor width={22} stroke="currentColor" strokeWidth={1.6} /> },
  { key: "peace", icon: <Shield width={22} stroke="currentColor" strokeWidth={1.6} /> },
];

const PatientServices = () => {
  const t = useTranslations("patient.page.services");

  return (
    <section className="pat-block pat-services">
      <header className="pat-head">
        <Reveal>
          <Heading as="h2" size="7" weight="5" className="pat-title">
            {t("title")}
          </Heading>
        </Reveal>
        <Reveal index={1}>
          <Text size="5" color="b" low className="pat-lead">
            {t("subtitle")}
          </Text>
        </Reveal>
      </header>

      <div className="pat-services__grid">
        {CATEGORIES.map(({ key, icon }, i) => {
          const items = t.raw(`categories.${key}.items`) as string[];
          return (
            <Reveal key={key} variant="item" index={i}>
              <div className="pat-service-card">
                <div className="pat-service-card__head">
                  <span className="pat-service-card__icon" aria-hidden="true">
                    {icon}
                  </span>
                  <Heading as="h3" size="4" weight="5">
                    {t(`categories.${key}.title`)}
                  </Heading>
                </div>
                <div className="pat-service-card__chips">
                  {items.map((item, idx) => (
                    <Chips key={idx} variant="soft" color="p" size="3">
                      {item}
                    </Chips>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default PatientServices;
