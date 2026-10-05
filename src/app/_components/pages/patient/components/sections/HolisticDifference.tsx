import { Heading, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import Reveal from "@/app/_components/reveal";

const HolisticDifference = () => {
  const t = useTranslations("patient.page.difference");
  const list = t.raw("list") as Array<{ not: string; but: string }>;

  return (
    <section className="pat-block pat-diff">
      <header className="pat-head">
        <Reveal>
          <Heading as="h2" size="7" weight="5" className="pat-title">
            {t("title")}
          </Heading>
        </Reveal>
      </header>

      <ul className="pat-diff__list">
        {list.map((item, i) => (
          <li key={i} className="pat-diff__item">
            <Reveal variant="item" index={i} className="pat-diff__row">
              <Text as="p" size="4" className="pat-diff__not">
                {item.not}
              </Text>
              <Text as="p" size="5" className="pat-diff__but">
                {item.but}
              </Text>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HolisticDifference;
