import { Heading, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import Reveal from "@/app/_components/reveal";

const Struggle = () => {
  const t = useTranslations("patient.page.struggle");
  const points = t.raw("points") as string[];

  return (
    <section className="pat-block pat-struggle">
      <div className="pat-struggle__intro">
        <Reveal>
          <Heading as="h2" weight="5" className="pat-title">
            {t("title")}
          </Heading>
        </Reveal>
        <Reveal index={1}>
          <Text size="5" color="b" low className="pat-lead">
            {t("description")}
          </Text>
        </Reveal>
      </div>

      <ul className="pat-voice">
        {points.map((point, i) => (
          <li key={i}>
            <Reveal variant="item" index={i} className="pat-voice__item">
              <span className="pat-voice__mark" aria-hidden="true" />
              <Text size="5" fontStyle="italic" className="pat-voice__text">
                {point}
              </Text>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal>
        <p className="pat-affirm">
          <Text as="span" weight="5" className="pat-affirm__text">
            {t("affirmation")}
          </Text>
        </p>
      </Reveal>
    </section>
  );
};

export default Struggle;
