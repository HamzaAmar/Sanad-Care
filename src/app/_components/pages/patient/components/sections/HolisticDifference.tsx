/** biome-ignore-all lint/suspicious/noArrayIndexKey: TODO: Fix it later */
import { Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import AnimatedSection from "../AnimatedSection";

const HolisticDifference = () => {
  const t = useTranslations("patient.page.difference");
  const list = t.raw("list") as Array<{ not: string; but: string }>;

  return (
    <AnimatedSection title={t("title")}>
      <Grid cols={{ default: "1fr", md: "1fr 1fr" }} gap="4">
        {list.map((item, index) => (
          <Paper key={index} background="B1" p="6" corner="4">
            <Heading size="4">{item.not}</Heading>
            <Text size="3" color="b" low>
              {item.but}
            </Text>
          </Paper>
        ))}
      </Grid>
    </AnimatedSection>
  );
};

export default HolisticDifference;
