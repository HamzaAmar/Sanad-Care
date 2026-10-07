import { Chips, Heading, Paper, Text } from "@pillar-ui/core";
import { Bandage, Bed, Headset, Massage, Pill, Stethoscope } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { Reveal } from "@/app/_components/reveal";

const SERVICES = [
  { key: "postOp", Icon: Bandage },
  { key: "medication", Icon: Pill },
  { key: "assistance", Icon: Headset },
  { key: "equipment", Icon: Bed },
  { key: "physio", Icon: Massage },
  { key: "chronic", Icon: Stethoscope },
] as const;

const TourismServices = () => {
  const t = useTranslations("tourism.page.services");

  return (
    <section className="tourism-services" aria-labelledby="tourism-services-title">
      <div className="tourism-container tourism-band">
        <header className="tour-head tour-head--center">
          <Reveal index={0}>
            <Chips corner="full" color="p" variant="soft" size="3">
              {t("subtitle")}
            </Chips>
          </Reveal>

          <Reveal index={1}>
            <Heading as="h2" size="8" weight="8" className="tour-title" id="tourism-services-title">
              {t("title")}
            </Heading>
          </Reveal>
        </header>

        <ul className="tourism-services__list" role="list">
          {SERVICES.map(({ key, Icon }, i) => (
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
                    {t(`list.${key}.title`)}
                  </Heading>
                  <Text size="4" color="b" low>
                    {t(`list.${key}.description`)}
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

export default TourismServices;
