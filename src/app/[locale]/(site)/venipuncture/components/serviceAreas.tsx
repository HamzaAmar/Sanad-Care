// app/[locale]/venipuncture/components/serviceAreas.tsx
import { Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { Location } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";

const ServiceAreasSection = () => {
  const t = useTranslations("venipuncture");

  const AREAS = [
    { name: t("areas.gueliz"), key: "gueliz" },
    { name: t("areas.hivernage"), key: "hivernage" },
    { name: t("areas.menara"), key: "menara" },
    { name: t("areas.sidiGhanem"), key: "sidiGhanem" },
    { name: t("areas.palmeraie"), key: "palmeraie" },
    { name: t("areas.targa"), key: "targa" },
    { name: t("areas.massira"), key: "massira" },
    { name: t("areas.daoudiate"), key: "daoudiate" },
    { name: t("areas.medina"), key: "medina" },
    { name: t("areas.kasbah"), key: "kasbah" },
  ];

  return (
    <Paper as="section" flow="8" className="section" style={{ background: "var(--B1)" }}>
      <Heading as="h2" size="6" weight="5" align="center">
        {t("areas.heading")}
      </Heading>
      <Text size="3" color="b" low align="center" className="subheading">
        {t("areas.description")}
      </Text>

      <Grid cols={{ default: "1fr 1fr", sm: "1fr 1fr 1fr", md: "1fr 1fr 1fr 1fr 1fr" }} gap="4">
        {AREAS.map((area) => (
          <Paper
            key={area.key}
            p="4"
            corner="3"
            border
            className="delivery-feature"
            style={{ background: "var(--B2)" }}
          >
            <Flex gap="2" items="center">
              <Location width={20} stroke="var(--P9)" />
              <Text weight="5">{area.name}</Text>
            </Flex>
          </Paper>
        ))}
      </Grid>

      <Text size="3" color="b" low align="center">
        {t("areas.hotelNote")}
      </Text>
    </Paper>
  );
};

export default ServiceAreasSection;
