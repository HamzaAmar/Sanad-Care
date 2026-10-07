import { Heading } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import ClosingCta from "./components/sections/ClosingCta";
import DayInLife from "./components/sections/DayInLife";
import HolisticDifference from "./components/sections/HolisticDifference";
import PatientServices from "./components/sections/PatientServices";
import Philosophy from "./components/sections/Philosophy";
import Struggle from "./components/sections/Struggle";
import TrustSignals from "./components/sections/TrustSignals";
import Values from "./components/sections/Values";

const PatientPage = () => {
  const tSeo = useTranslations("patient.seo");

  return (
    <div className="section patient-page">
      <Heading as="h1" className="H-sr">
        {tSeo("title")}
      </Heading>
      <Struggle />

      <Philosophy />

      <HolisticDifference />

      <PatientServices />

      <DayInLife />

      <Values />

      <TrustSignals />

      <ClosingCta />
    </div>
  );
};

export default PatientPage;
