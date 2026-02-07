import { Button, Heading, Link, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";

const TourismHero = () => {
  const t = useTranslations("tourism.page.hero");

  return (
    <section className="tourism-hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <Heading size="8" as="h1" className="hero-title">
              {t("title")}
            </Heading>
            <Text size="5" color="b" className="hero-subtitle">
              {t("subtitle")}
            </Text>
            <div>
              <Link href="/contact">
                <Button color="p">{t("cta")}</Button>
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            {/* Placeholder for now - user can replace with actual image */}
            <div className="hero-placeholder">Medical Tourism Image</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismHero;
