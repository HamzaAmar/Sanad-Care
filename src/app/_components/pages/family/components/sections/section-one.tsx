import { useTranslations } from "next-intl";
import AnimatedSection from "../../../patient/components/AnimatedSection";

const BurdenRemoval = () => {
  const t = useTranslations("family.page.section1");

  return (
    <AnimatedSection title={t("title")} subtitle={t("subtitle")} description={t("description")} />
  );
};

export default BurdenRemoval;
