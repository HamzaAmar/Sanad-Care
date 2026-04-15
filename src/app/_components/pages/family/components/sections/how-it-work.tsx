import { Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import AnimatedSection from "../../../patient/components/AnimatedSection";

const HowItWorks = () => {
  const t = useTranslations("family.page.section5");
  const steps = t.raw("steps") as Array<{ title: string; description: string }>;

  return (
    <AnimatedSection title={t("title")} description={t("subtitle")}>
      <Grid cols={{ default: "1fr", sm: "1fr 1fr 1fr" }} gap="6">
        {steps.map((step, index) => (
          <Paper border p="6" corner="4" key={index} className="delivery-feature">
            <Heading size="4" weight="5" as="h3">
              {step.title}
            </Heading>
            <Text size="3" color="b" low>
              {step.description}
            </Text>
          </Paper>
        ))}
      </Grid>
    </AnimatedSection>
  );
};

export default HowItWorks;
