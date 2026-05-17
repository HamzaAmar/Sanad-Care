import { Grid, Paper, Separator, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import AnimatedSection from "../../../patient/components/AnimatedSection";

const Changes = () => {
  const t = useTranslations();
  const lists = t.raw("family.page.section3.list") as Array<{ before: string; after: string }>;

  return (
    <AnimatedSection
      title={t("family.page.section3.title")}
      description={t("family.page.section3.subtitle")}
    >
      <Grid cols={{ default: "1fr", lg: "1fr 1fr" }} gap="6">
        {lists.map((item, index) => (
          <Paper border p="6" corner="4" flow="4" key={index} className="delivery-feature">
            <div>
              <Text size="4" color="d" weight="5" low>
                {t("common.before")}
              </Text>
              <Text size="3" color="b" low>
                {item.before}
              </Text>
            </div>
            <Separator />
            <div>
              <Text size="3" color="su" weight="5" low>
                {t("common.after")}
              </Text>
              <Text size="3" color="b" low>
                {item.after}
              </Text>
            </div>
          </Paper>
        ))}
      </Grid>
    </AnimatedSection>
  );
};

export default Changes;
