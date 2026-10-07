import { Text } from "@pillar-ui/core";
import { HeartBeat } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { Reveal } from "@/app/_components/reveal";
import FamilySection from "../section";

const Intro = () => {
  const t = useTranslations("family.page.section1");

  return (
    <FamilySection
      id="family-intro"
      title={t("title")}
      lead={t("subtitle")}
      titleSize="9"
      variant="statement"
    >
      <Reveal variant="item" className="family-intro__body">
        <Text size="5" weight="3" color="b" low>
          {t("description")}
        </Text>
        <span className="family-pulse" aria-hidden="true">
          <HeartBeat width={24} stroke="currentColor" strokeWidth={1.6} />
        </span>
      </Reveal>
    </FamilySection>
  );
};

export default Intro;
