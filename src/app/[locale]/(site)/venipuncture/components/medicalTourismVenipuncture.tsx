// app/[locale]/venipuncture/components/medicalTourismVenipuncture.tsx
import { Chips, Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { Check } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";

const MedicalTourismVenipuncture = () => {
  const t = useTranslations("venipuncture");

  const REASONS = [
    "tourism.reasons.preTravel",
    "tourism.reasons.postTravel",
    "tourism.reasons.extended",
    "tourism.reasons.medication",
    "tourism.reasons.illness",
    "tourism.reasons.visa",
  ];

  return (
    <Paper as="section" flow="8" className="section medical-tourism-container">
      <Grid cols={{ default: "1fr", md: "3fr 1fr" }} gap="6" items="center">
        <Paper flow="5">
          <Chips corner="2" color="su" size="3" variant="outline">
            {t("tourism.badge")}
          </Chips>
          <Heading as="h2" size="7" weight="6">
            {t("tourism.heading")}
          </Heading>
          <Text size="5" color="b" low>
            {t("tourism.subheading")}
          </Text>
          <Text size="4" color="b" low>
            {t("tourism.description")}
          </Text>

          <Flex direction="col" gap="3" className="delivery-features">
            {REASONS.map((key) => (
              <Flex key={key} gap="2" items="center">
                <Check width={20} stroke="var(--P9)" />
                <Text size="3">{t(key)}</Text>
              </Flex>
            ))}
          </Flex>
        </Paper>
        <Paper
          className="medical-tourism-image"
          corner="5"
          border
          style={{ height: "350px", background: "var(--B3)", overflow: "hidden" }}
        >
          <img
            src="/images/medical-assistance-tourists/medical-assistance-tourists-marrakech-sanadcare.avif"
            alt={t("tourism.imageAlt")}
            loading="lazy"
            decoding="async"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Paper>
      </Grid>
    </Paper>
  );
};

export default MedicalTourismVenipuncture;
