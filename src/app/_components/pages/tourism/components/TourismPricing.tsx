import { Heading, Link, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";

const TourismPricing = () => {
  const t = useTranslations("tourism.page.pricing");

  return (
    <section className="tourism-pricing">
      <div className="container">
        <div className="pricing-card">
          <Heading size="6" as="h2" className="pricing-title">
            {t("title")}
          </Heading>
          <Text size="5" className="pricing-desc">
            {t("description")}
          </Text>
          <Link href="/contact">{t("cta")}</Link>
        </div>
      </div>
    </section>
  );
};

export default TourismPricing;
