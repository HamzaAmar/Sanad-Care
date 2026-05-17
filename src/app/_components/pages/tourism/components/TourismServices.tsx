import { Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";

const TourismServices = () => {
  const t = useTranslations("tourism.page.services");
  const services = [
    "postOp",
    "medication",
    "assistance",
    "equipment",
    "physio",
    "chronic",
  ] as const;

  return (
    <section className="tourism-services">
      <Paper flow="7">
        <div>
          <Heading size="7" leading="1" as="h2">
            {t("title")}
          </Heading>
          <Text size="4" color="b" low>
            {t("subtitle")}
          </Text>
        </div>

        <Grid cols={{ default: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap="6">
          {services.map((key) => (
            <Paper key={key} flow="4" as="article" className="G_card tourism-service-card">
              <Heading size="4" as="h3" className="service-title">
                {t(`list.${key}.title`)}
              </Heading>
              <Text size="3" color="b" low className="service-desc">
                {t(`list.${key}.description`)}
              </Text>
            </Paper>
          ))}
        </Grid>
      </Paper>
    </section>
  );
};

export default TourismServices;
