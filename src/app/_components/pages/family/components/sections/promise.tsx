import { Button, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import { Reveal } from "@/app/_components/reveal";
import { Link } from "@/i18n/navigation";
import FamilySection from "../section";

const PromiseSection = () => {
  const t = useTranslations("family.page.section8");

  return (
    <FamilySection
      id="family-promise"
      title={t("title")}
      lead={t("subtitle")}
      cols={{ default: "1fr", lg: "minmax(0, 1.4fr) auto" }}
    >
      <Reveal variant="item" className="family-statement__body">
        <Text size="5" weight="3" color="b" low>
          {t("description")}
        </Text>
      </Reveal>
      <Reveal variant="item" index={1} className="family-statement__cta">
        <Button as={Link} href="/contact-us" size="4">
          {t("cta")}
        </Button>
      </Reveal>
    </FamilySection>
  );
};

export default PromiseSection;
