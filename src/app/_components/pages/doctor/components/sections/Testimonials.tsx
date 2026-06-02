import { Grid, Paper, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/app/_components/AnimatedSection";

const Testimonials = () => {
  const t = useTranslations("doctor.page.section6");
  const testimonials = t.raw("testimonials") as string[];

  return (
    <AnimatedSection title={t("title")} description={t("subtitle")}>
      <Grid cols={{ default: "1fr", md: "1fr 1fr" }} gap="6">
        {testimonials.map((quote, index) => (
          <Paper p="6" corner="3" key={index} className="delivery-feature">
            <Text size="4">{quote}</Text>
          </Paper>
        ))}
      </Grid>
    </AnimatedSection>
  );
};

export default Testimonials;
