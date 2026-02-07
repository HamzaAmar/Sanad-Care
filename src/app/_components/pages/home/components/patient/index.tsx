import { Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";

const PatientSection = () => {
  const t = useTranslations("patient");

  return (
    <Paper as="section" flow="5" className="patient-section" p="6" style={{ background: "var(--B1)" }}>
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
          <Text align="center" size="4" color="b" low style={{ maxWidth: "800px" }}>
            {t("description")}
          </Text>
        </Flex>
      </Grid>
    </Paper>
  );
};

export default PatientSection;
