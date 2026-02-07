"use client";

import { Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";

const DoctorSection = () => {
  const t = useTranslations("doctor");

  return (
    <Paper as="section" flow="6" className="section doctor-section" p="6" corner="3" border>
      <Grid cols={{ default: "1fr", md: "1fr 1fr" }} gap="6" items="center">
        <Paper
          className="medical-tourism-image"
          corner="4"
          border
          style={{ minHeight: "300px", background: "var(--B3)" }}
        >
          <Flex justify="center" items="center" style={{ height: "100%" }}>
            <Text size="7" color="b" low>
              Doctor Logo
            </Text>
          </Flex>
        </Paper>
        <Flex direction="col" items="center" gap="4">
          <Heading as="h2" size="6" align="center">
            {t("heading")}
          </Heading>
          <Text align="center" size="4" color="b" low>
            {t("description")}
          </Text>
          <Paper p="4" corner="2">
            <Text weight="5" color="b" align="center">
              {t("organization")}
            </Text>
          </Paper>
        </Flex>
      </Grid>
    </Paper>
  );
};

export default DoctorSection;
