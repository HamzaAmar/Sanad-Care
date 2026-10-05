import { Heading, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import Reveal from "@/app/_components/reveal";

const Values = () => {
  const t = useTranslations("patient.page.values");

  return (
    <section className="pat-values">
      <Reveal className="pat-values__inner">
        <Heading as="h2" weight="5" className="pat-values__title">
          {t("title")}
        </Heading>
        <Text size="5" className="pat-values__desc">
          {t("description")}
        </Text>
        <span className="pat-values__rule" aria-hidden="true" />
        <Text as="p" weight="6" className="pat-values__cta">
          {t("cta")}
        </Text>
      </Reveal>
    </section>
  );
};

export default Values;
