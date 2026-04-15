import { Flex, Grid, Heading, Paper, Separator, Text } from "@pillar-ui/core";
import { CircleCheck } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import AnimatedSection from "../../../patient/components/AnimatedSection";

const FamilyServices = () => {
  const t = useTranslations("family.page.section4");
  const categories = ["medical", "daily", "family"] as const;

  return (
    <AnimatedSection title={t("title")} description={t("subtitle")}>
      <Grid cols={{ default: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap="6">
        {categories.map((key) => (
          <Paper corner="3" p="4" flow="4" key={key} className="delivery-feature">
            <Heading size="4" as="h3">
              {t(`categories.${key}.title`)}
            </Heading>
            <Separator thickness="1" />
            <Paper as="ul" flow="3">
              {(t.raw(`categories.${key}.items`) as string[]).map((item, idx) => (
                <Flex gap="2" as="li" key={idx}>
                  <CircleCheck stroke="var(--P11)" width="20" />
                  <Text size="3" color="b" low>
                    {item}
                  </Text>
                </Flex>
              ))}
            </Paper>
          </Paper>
        ))}
      </Grid>
    </AnimatedSection>
  );
};

export default FamilyServices;
