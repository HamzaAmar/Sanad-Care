import { Grid, Paper, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import PatientSection from "./components/AnimatedSection";
import DayInLife from "./components/sections/DayInLife";
import HolisticDifference from "./components/sections/HolisticDifference";
import PatientServices from "./components/sections/PatientServices";
import PatientTestimonials from "./components/sections/PatientTestimonials";
import TrustSignals from "./components/sections/TrustSignals";

const PatientPage = () => {
  const t = useTranslations("patient.page");

  return (
    <section className="section">
      <PatientSection
        title={t("struggle.title")}
        description={t("struggle.description")}
        cta={t("philosophy.cta")}
      >
        <Text size="4" className="italic opacity-80 mb-4 block">
          {t("struggle.affirmation")}
        </Text>
        <Grid
          cols={{ default: "1fr", sm: "1fr 1fr" }}
          gap="3"
          className="list-disc pl-5 space-y-2 opacity-90"
        >
          {(t.raw("struggle.points") as string[]).map((point, i) => (
            <Paper as="li" background="B1" p="3" corner="2" key={i}>
              <Text color="b" low weight="4">
                {point}
              </Text>
            </Paper>
          ))}
        </Grid>
      </PatientSection>

      <PatientSection title={t("philosophy.title")} description={t("philosophy.description")} />

      <HolisticDifference />

      <PatientServices />

      <DayInLife />

      <PatientTestimonials />
      <TrustSignals />
      <PatientSection
        title={t("cta.title")}
        description={t("cta.description")}
        cta={t("cta.button")}
        ctaLink="/contact"
      />
    </section>
  );
};

export default PatientPage;
