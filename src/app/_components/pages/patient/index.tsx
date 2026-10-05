import { useTranslations } from "next-intl";
import DayInLife from "./components/sections/DayInLife";
import HolisticDifference from "./components/sections/HolisticDifference";
import PatientServices from "./components/sections/PatientServices";
import Philosophy from "./components/sections/Philosophy";
import Struggle from "./components/sections/Struggle";
import TrustSignals from "./components/sections/TrustSignals";
import Values from "./components/sections/Values";
import AnimatedSection from "../../AnimatedSection";

const PatientPage = () => {
  const t = useTranslations("patient.page");

  return (
    <div className="section patient-page">
      <Struggle />

      <Philosophy />

      <HolisticDifference />

      <PatientServices />

      <DayInLife />

      <Values />

      <TrustSignals />

      <AnimatedSection
        title={t("cta.title")}
        description={t("cta.description")}
        cta={t("cta.button")}
        ctaLink="/contact"
      />
    </div>
  );
};

export default PatientPage;
