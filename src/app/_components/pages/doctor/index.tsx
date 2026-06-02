import { useTranslations } from "next-intl";
import BurdenRemoval from "./components/sections/BurdenRemoval";
import FamilyServices from "./components/sections/FamilyServices";
import HowItWorks from "./components/sections/HowItWorks";
import Testimonials from "./components/sections/Testimonials";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import AnimatedSection from "../../AnimatedSection";

const Doctor = () => {
  const t = useTranslations("doctor.page");
  return (
    <div className="doctor-page section">
      <AnimatedSection
        direction="row"
        title={t("section1.title")}
        subtitle={t("section1.subtitle")}
        description={t("section1.description")}
      >
        <img src="/sad-doctor.png" alt="" width="260" />
      </AnimatedSection>
      <AnimatedSection
        title={t("section2.title")}
        subtitle={t("section2.subtitle")}
        description={t("section2.description")}
        cta={t("section2.cta")}
        direction="row"
      >
        <img src="/comminication.png" alt="" width="300" style={{ objectFit: "contain" }} />
      </AnimatedSection>
      <BurdenRemoval />
      <FamilyServices />
      <HowItWorks />
      <Testimonials />
      <WhyChooseUs />
      <AnimatedSection
        title={t("section8.title")}
        subtitle={t("section8.subtitle")}
        description={t("section8.description")}
        cta={t("section8.cta")}
        direction="row"
      >
        <img src="/doctor-comminication.png" alt="" width="300" style={{ objectFit: "contain" }} />
      </AnimatedSection>
      <AnimatedSection
        title={t("section9.title")}
        subtitle={t("section9.subtitle")}
        description={t("section9.description")}
        cta={t("section9.cta")}
        direction="row"
      >
        <img src="/doctor-finale.png" alt="" width="300" style={{ objectFit: "contain" }} />
      </AnimatedSection>
    </div>
  );
};

export default Doctor;
