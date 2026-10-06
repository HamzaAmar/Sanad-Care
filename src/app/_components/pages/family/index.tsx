"use client";

import { Heading } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import Changes from "./components/sections/changes";
import FamilyServices from "./components/sections/family-service";
import HowItWorks from "./components/sections/how-it-work";
import Testimonials from "./components/sections/Testimonials";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import AnimatedSection from "../../AnimatedSection";

const Family = () => {
  const t = useTranslations("family.page");
  const tSeo = useTranslations("family.seo");

  return (
    <div className="family-page section">
      <Heading as="h1" className="H-sr">
        {tSeo("title")}
      </Heading>
      <AnimatedSection
        title={t("section8.title")}
        description={t("section1.description")}
        subtitle={t("section1.subtitle")}
      />
      <AnimatedSection
        title={t("section2.title")}
        cta={t("section2.cta")}
        description={t("section2.description")}
        subtitle={t("section2.subtitle")}
      />
      <Changes />
      <FamilyServices />
      <HowItWorks />
      <Testimonials />
      <WhyChooseUs />
      <AnimatedSection
        title={t("section8.title")}
        description={t("section8.description")}
        subtitle={t("section8.subtitle")}
        cta={t("section8.cta")}
      />
      <AnimatedSection
        title={t("section9.title")}
        description={t("section9.description")}
        subtitle={t("section9.subtitle")}
        cta={t("section9.cta")}
      />
    </div>
  );
};

export default Family;
