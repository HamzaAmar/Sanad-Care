import { Flex, Grid, Paper, Text } from "@pillar-ui/core";
import { CircleCheck } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/app/_components/AnimatedSection";

const TrustSignals = () => {
  const t = useTranslations("patient.page.trust");
  const signals = t.raw("signals") as string[];

  return (
    <AnimatedSection title={t("title")} className="text-center">
      <Grid cols={{ default: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }} gap="6">
        {signals.map((signal, index) => (
          <Flex
            gap="4"
            key={index}
            className="delivery-section"
            as={Paper}
            p="4"
            corner="2"
            background="B1"
          >
            <CircleCheck width="24" stroke="var(--P11)" strokeWidth="1.5" />
            <Text size="4" weight="5" align="center">
              {signal}
            </Text>
          </Flex>
        ))}
      </Grid>
    </AnimatedSection>
  );
};

export default TrustSignals;
