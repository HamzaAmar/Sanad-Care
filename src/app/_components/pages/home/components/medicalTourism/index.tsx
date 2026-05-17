import { Button, Chips, Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const MedicalTourism = () => {
  const t = useTranslations("tourism");

  return (
    <Paper as="section" flow="8" className="section medical-tourism-container">
      <Grid cols={{ default: "1fr", md: "1fr 1fr" }} gap="6" items="center">
        <Paper flow="5">
          <Chips corner="2" color="su" size="3" variant="outline">
            Tourism Support
          </Chips>
          <Heading as="h2" size="7" weight="6">
            {t("heading")}
          </Heading>
          <Text size="5" color="b" low>
            {t("subheading")}
          </Text>
          <Text size="4" color="b" low>
            {t("description")}
          </Text>
          <Flex>
            <Button as={Link} href="/contact-us" size="5" color="su">
              {t("cta")}
            </Button>
          </Flex>
        </Paper>
        <Paper
          className="medical-tourism-image"
          corner="5"
          border
          style={{ minHeight: "300px", background: "var(--B3)", overflow: "hidden" }}
        >
          {/* <Flex justify="center" items="center" style={{ height: "100%" }}>
            <Text size="7" color="b" low>
              Medical Assistance
            </Text>
          </Flex> */}
          <img
            src="/tourism.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Paper>
      </Grid>
    </Paper>
  );
};

export default MedicalTourism;
