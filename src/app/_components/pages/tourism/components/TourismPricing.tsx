import { Button, Heading, Text } from "@pillar-ui/core";
import { Receipt } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/app/_components/reveal";

const TourismPricing = () => {
  const t = useTranslations("tourism.page.pricing");

  return (
    <section className="tourism-pricing" aria-labelledby="tourism-pricing-title">
      <div className="tourism-container tourism-band tourism-pricing__band">
        <Reveal>
          <div className="tourism-pricing__inner">
            <span className="tour-icon-chip" aria-hidden="true">
              <Receipt />
            </span>

            <Heading as="h2" size="7" weight="7" className="tour-title" id="tourism-pricing-title">
              {t("title")}
            </Heading>

            <Text size="5" color="b" low>
              {t("description")}
            </Text>

            <Button as={Link} href="/contact-us" size="4" color="p">
              {t("cta")}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TourismPricing;
