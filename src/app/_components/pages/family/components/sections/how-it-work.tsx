import { Grid } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/app/_components/AnimatedSection";
import { ServiceCard } from "@/app/_components/service-card";

const HowItWorks = () => {
  const t = useTranslations("family.page.section5");
  const steps = t.raw("steps") as Array<{ title: string; description: string }>;

  return (
    <AnimatedSection title={t("title")} description={t("subtitle")}>
      <Grid cols={{ default: "1fr", sm: "1fr 1fr 1fr" }} gap="6">
        {steps.map((step, index) => (
          <ServiceCard
            key={index}
            variant="colored"
            description={step.description}
            title={step.title}
          />
        ))}
      </Grid>
    </AnimatedSection>
  );
};

export default HowItWorks;
