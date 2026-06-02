import { Avatar, Flex, Grid, Paper, Separator, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/app/_components/AnimatedSection";

const PatientTestimonials = () => {
  const t = useTranslations();
  const list = t.raw("patient.page.testimonials.list") as Array<{
    name: string;
    before: string;
    after: string;
  }>;

  return (
    <AnimatedSection
      title={t("patient.page.testimonials.title")}
      description={t("patient.page.testimonials.subtitle")}
    >
      <Grid cols={{ default: "1fr", lg: "1fr 1fr" }} gap="6">
        {list.map((item, index) => (
          <Paper key={index} background="B1" p="6" corner="4" flow="4">
            <div>
              <Text size="4" weight="6" color="d" low>
                {t("common.before")}
              </Text>
              <Text size="3" color="b" low>
                {item.before}
              </Text>
            </div>
            <Separator />
            <Paper flow="4">
              <div>
                <Text size="3" weight="6" color="su" low>
                  {t("common.after")}
                </Text>
                <Text size="4">{item.after}</Text>
              </div>
              <Flex gap="2" items="center">
                <Avatar size="3" fallback={item.name.charAt(0)} />
                <Text weight="5">{item.name}</Text>
              </Flex>
            </Paper>
          </Paper>
        ))}
      </Grid>
    </AnimatedSection>
  );
};

export default PatientTestimonials;
