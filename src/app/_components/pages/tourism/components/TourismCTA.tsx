import { Heading, Link, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";

const TourismCTA = () => {
  const t = useTranslations("tourism.page.cta");

  return (
    <section className="tourism-cta">
      <div className="cta-container">
        <Heading size="7" as="h2" className="cta-title">
          {t("title")}
        </Heading>
        <Text size="5" color="b" className="cta-desc">
          {t("description")}
        </Text>
        <Link href="/contact-us">{t("button")}</Link>
      </div>
    </section>
  );
};

export default TourismCTA;
