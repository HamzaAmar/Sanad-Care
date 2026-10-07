import { Chips, Paper, Separator, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import { Reveal } from "@/app/_components/reveal";
import FamilySection from "../section";

const Changes = () => {
  const t = useTranslations();
  const items = t.raw("family.page.section3.list") as { before: string; after: string }[];

  return (
    <FamilySection
      id="family-changes"
      title={t("family.page.section3.title")}
      lead={t("family.page.section3.subtitle")}
      gridAs="ul"
      cols={{ default: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
    >
      {items.map((item, index) => (
        <li key={item.before}>
          <Reveal variant="item" index={index}>
            <Paper flow="4" border p="5" corner="3" background="B1" className="family-card">
              <div className="family-change__part">
                <Chips variant="soft" color="b" size="3">
                  {t("common.before")}
                </Chips>
                <Text size="4" color="b" low>
                  {item.before}
                </Text>
              </div>
              <Separator />
              <div className="family-change__part">
                <Chips variant="soft" color="su" size="3">
                  {t("common.after")}
                </Chips>
                <Text size="4" weight="5">
                  {item.after}
                </Text>
              </div>
            </Paper>
          </Reveal>
        </li>
      ))}
    </FamilySection>
  );
};

export default Changes;
