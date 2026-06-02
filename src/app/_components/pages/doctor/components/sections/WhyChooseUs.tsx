import { Flex, Grid, Paper, Text } from "@pillar-ui/core";
import { CircleCheck } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/app/_components/AnimatedSection";

const WhyChooseUs = () => {
  const t = useTranslations("doctor.page.section7");
  const list = t.raw("list") as string[];

  return (
    <AnimatedSection title={t("title")} description={t("subtitle")}>
      <Grid cols={{ default: "1fr", lg: "1fr 1fr" }} gap="6">
        {list.map((item, index) => (
          <Paper as={Flex} gap="2" p="4" corner="2" key={index} className="delivery-feature">
            <CircleCheck stroke="var(--P11)" width="24" />
            <Text size="4" weight="5">
              {item}
            </Text>
          </Paper>
        ))}
      </Grid>
    </AnimatedSection>
  );
};

export default WhyChooseUs;
