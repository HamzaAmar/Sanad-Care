import { Heading, Text } from "@pillar-ui/core";
import { CircleCheck } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import Reveal from "@/app/_components/reveal";

const TrustSignals = () => {
  const t = useTranslations("patient.page.trust");
  const signals = t.raw("signals") as string[];

  return (
    <section className="pat-block pat-trust">
      <header className="pat-head">
        <Reveal>
          <Heading as="h2" size="7" weight="5" className="pat-title">
            {t("title")}
          </Heading>
        </Reveal>
      </header>

      <ul className="pat-trust__list">
        {signals.map((signal, i) => (
          <li key={i}>
            <Reveal variant="item" index={i}>
              <div className="pat-trust__item">
                <span className="pat-trust__icon" aria-hidden="true">
                  <CircleCheck width={22} stroke="currentColor" strokeWidth={1.7} />
                </span>
                <Text size="4" weight="5">
                  {signal}
                </Text>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrustSignals;
