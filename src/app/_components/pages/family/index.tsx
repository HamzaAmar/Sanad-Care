import { Heading, Paper } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import Changes from "./components/sections/changes";
import Closing from "./components/sections/closing";
import FamilyServices from "./components/sections/family-service";
import HowItWorks from "./components/sections/how-it-work";
import Intro from "./components/sections/intro";
import PromiseSection from "./components/sections/promise";
import Support from "./components/sections/support";
import Testimonials from "./components/sections/Testimonials";
import WhyChooseUs from "./components/sections/WhyChooseUs";

const Family = () => {
  const tSeo = useTranslations("family.seo");

  return (
    <Paper flow="8" className="section family-page">
      <Heading as="h1" className="H-sr">
        {tSeo("title")}
      </Heading>
      <Intro />
      <Support />
      <Changes />
      <FamilyServices />
      <HowItWorks />
      <Testimonials />
      <WhyChooseUs />
      <PromiseSection />
      <Closing />
    </Paper>
  );
};

export default Family;
