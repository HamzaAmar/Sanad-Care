import { Chips, Flex, Grid, Heading, Paper } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import AnimatedSection from "../AnimatedSection";

const AnimatedServices = () => {
  const t = useTranslations("patient.page.services");

  const categories = ["comfort", "medical", "recovery", "peace"];

  return (
    <AnimatedSection title={t("title")} description={t("subtitle")}>
      <Grid cols={{ default: "1fr", lg: "1fr 1fr" }} gap="6">
        {categories.map((catKey) => {
          const items = t.raw(`categories.${catKey}.items`) as string[];
          return (
            <Paper key={catKey} flow="2">
              <Heading weight="5" size="5">
                {t(`categories.${catKey}.title`)}
              </Heading>
              <Flex wrap gap="2">
                {items.map((item, i) => (
                  <Chips key={i} variant="mixed" color="p">
                    {item}
                  </Chips>
                ))}
              </Flex>
            </Paper>
          );
        })}
      </Grid>
    </AnimatedSection>
  );
};

export default AnimatedServices;
