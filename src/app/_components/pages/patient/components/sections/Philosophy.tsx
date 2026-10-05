import { Heading, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import Reveal from "@/app/_components/reveal";
import { RevealImage } from "@/app/_components/reveal/image";

const Philosophy = () => {
  const t = useTranslations("patient.page.philosophy");

  return (
    <section className="pat-block pat-philosophy">
      <Reveal className="pat-philosophy__art">
        <RevealImage src="/sick.png" alt="" width={240} height={240} />
      </Reveal>

      <header className="pat-head">
        <Reveal>
          <Heading as="h2" size="7" weight="5" className="pat-title">
            {t("title")}
          </Heading>
        </Reveal>
        <Reveal index={1}>
          <Text size="5" color="p" low weight="5">
            {t("subtitle")}
          </Text>
        </Reveal>
        <Reveal index={2}>
          <Text size="5" color="b" low className="pat-lead">
            {t("description")}
          </Text>
        </Reveal>
        <Reveal index={3}>
          <Text size="4" weight="6" color="p">
            {t("cta")}
          </Text>
        </Reveal>
      </header>
    </section>
  );
};

export default Philosophy;
