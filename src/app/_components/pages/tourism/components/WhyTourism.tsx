import { Chips, Heading, Paper, Text } from "@pillar-ui/core";
import { ArmChair, Globe, HeartRateMonitor, Users } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { Reveal } from "@/app/_components/reveal";

const BENEFITS = [
  { key: "language", Icon: Globe },
  { key: "comfort", Icon: ArmChair },
  { key: "followUp", Icon: HeartRateMonitor },
  { key: "peaceOfMind", Icon: Users },
] as const;

const WhyTourism = () => {
  const t = useTranslations("tourism.page.whyTourism");

  return (
    <section className="tourism-why" aria-labelledby="tourism-why-title">
      <div className="tourism-container tourism-band">
        <header className="tour-head tour-head--center">
          <Reveal index={0}>
            <Chips corner="full" color="p" variant="soft" size="3">
              {t("subtitle")}
            </Chips>
          </Reveal>

          <Reveal index={1}>
            <Heading as="h2" size="8" weight="8" className="tour-title" id="tourism-why-title">
              {t("title")}
            </Heading>
          </Reveal>
        </header>

        <ul className="tourism-why__list" role="list">
          {BENEFITS.map(({ key, Icon }, i) => (
            <li key={key}>
              <Reveal variant="item" index={i}>
                <Paper
                  flow="4"
                  as="article"
                  background="B1"
                  border
                  p="5"
                  corner="3"
                  className="tour-card"
                >
                  <span className="tour-icon-chip" aria-hidden="true">
                    <Icon />
                  </span>
                  <Heading as="h3" size="4" weight="6">
                    {t(`benefits.${key}.title`)}
                  </Heading>
                  <Text size="4" color="b" low>
                    {t(`benefits.${key}.description`)}
                  </Text>
                </Paper>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyTourism;
