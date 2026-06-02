import { Grid, Paper, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/app/_components/AnimatedSection";

const Testimonials = () => {
  const t = useTranslations("family.page.section6");
  const testimonials = t.raw("testimonials") as Array<{ quote: string; source: string }>;

  return (
    <AnimatedSection title={t("title")} description={t("subtitle")}>
      <Grid cols={{ default: "1fr", md: "1fr 1fr" }} gap="6">
        {testimonials.map((testimonial, index) => (
          <Paper p="6" corner="2" key={index} background="B1">
            <Text size="4">{testimonial.quote}</Text>
            <Text size="3" color="p" low>
              - {testimonial.source}
            </Text>
          </Paper>
        ))}
      </Grid>
    </AnimatedSection>
  );
};

export default Testimonials;
