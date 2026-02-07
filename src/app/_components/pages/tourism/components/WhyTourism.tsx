import { Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";

const WhyTourism = () => {
  const t = useTranslations("tourism.page.whyTourism");
  const keys = ["language", "comfort", "followUp", "peaceOfMind"] as const;

  return (
    <section className="why-tourism">
      <Paper flow="7">
        <div className="section-header">
          <Heading size="7" as="h2" className="section-heading">
            {t("title")}
          </Heading>
          <Text size="5" color="b" low>
            {t("subtitle")}
          </Text>
        </div>

        <Grid cols={{ default: "1fr", md: "1fr 1fr" }} gap="6">
          {keys.map((key) => (
            <Paper key={key} flow="5" as="article" className="G_card why-card">
              <Heading size="5" as="h3" className="card-heading" low>
                {t(`benefits.${key}.title`)}
              </Heading>
              <Text size="4" color="b" low>
                {t(`benefits.${key}.description`)}
              </Text>
            </Paper>
          ))}
        </Grid>
      </Paper>
    </section>
  );
};

export default WhyTourism;
