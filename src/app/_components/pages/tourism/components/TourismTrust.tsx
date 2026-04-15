import { Grid, Heading, Paper } from "@pillar-ui/core";
import { useTranslations } from "next-intl";

const TourismTrust = () => {
  const t = useTranslations("tourism.page.trust");
  const signals = t.raw("signals") as string[];

  return (
    <section className="tourism-trust">
      <div className="container">
        <div className="trust-header">
          <Heading size="7" as="h2" className="trust-title">
            {t("title")}
          </Heading>
        </div>

        <Grid cols={{ default: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap="6">
          {signals.map((signal) => (
            <Paper key={signal} className="G_card">
              <span className="trust-text">{signal}</span>
            </Paper>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default TourismTrust;
