import { Button, Chips, Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const MedicalTourism = () => {
  const t = useTranslations("tourism");

  return (
    <Paper as="section" flow="8" className="section medical-tourism-container">
      <Grid cols={{ default: "1fr", md: "1fr 1fr" }} gap="6" items="center">
        <Paper flow="5">
          <div>
            <Chips corner="2" color="su" size="3" variant="outline">
              {t("heading")}
            </Chips>
            <Heading as="h2" size="7" weight="6">
              {t("subheading")}
            </Heading>
          </div>
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
          style={{ height: "300px", background: "var(--B3)", overflow: "hidden" }}
        >
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
