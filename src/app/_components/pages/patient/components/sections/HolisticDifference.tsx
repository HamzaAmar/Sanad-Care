import { Grid } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/app/_components/AnimatedSection";
import { Box } from "@/app/_components/box";

const HolisticDifference = () => {
  const t = useTranslations("patient.page.difference");
  const list = t.raw("list") as Array<{ not: string; but: string }>;

  return (
    <AnimatedSection title={t("title")}>
      <Grid cols={{ default: "1fr", md: "1fr 1fr" }} gap="4">
        {list.map((item, index) => (
          <Box variant="colored" key={index} title={item.not} description={item.but} />
        ))}
      </Grid>
    </AnimatedSection>
  );
};

export default HolisticDifference;
