import { Heading, Paper, Text } from "@pillar-ui/core";
import { CircleCheck } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { Reveal } from "@/app/_components/reveal";

const TourismTrust = () => {
  const t = useTranslations("tourism.page.trust");
  const signals = t.raw("signals") as string[];

  return (
    <section className="tourism-trust" aria-labelledby="tourism-trust-title">
      <div className="tourism-container tourism-band">
        <header className="tour-head tour-head--center">
          <Reveal index={0}>
            <Heading as="h2" size="8" weight="8" className="tour-title" id="tourism-trust-title">
              {t("title")}
            </Heading>
          </Reveal>
        </header>

        <ul className="tourism-trust__list" role="list">
          {signals.map((signal, i) => (
            <li key={signal}>
              <Reveal variant="item" index={i}>
                <Paper
                  background="B1"
                  border
                  p="4"
                  corner="3"
                  className="tour-card tourism-trust__card"
                >
                  <span className="tour-icon-chip tour-icon-chip--sm" aria-hidden="true">
                    <CircleCheck />
                  </span>
                  <Text as="span" size="4" weight="5">
                    {signal}
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

export default TourismTrust;
