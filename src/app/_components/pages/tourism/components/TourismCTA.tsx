import { Button, Flex, Heading, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PERSONAL_INFO } from "@/constants/personalInfo";
import { Reveal } from "@/app/_components/reveal";

const TourismCTA = () => {
  const t = useTranslations("tourism.page.cta");
  const tCta = useTranslations("home.howItWorks.cta");

  return (
    <section className="tourism-cta" aria-labelledby="tourism-cta-title">
      <div className="tourism-container tourism-band tourism-cta__band">
        <Reveal>
          <div className="tourism-cta__inner">
            <Heading as="h2" size="8" weight="8" className="tour-title" id="tourism-cta-title">
              {t("title")}
            </Heading>

            <Text size="6" weight="3" color="b" low>
              {t("description")}
            </Text>

            <Flex gap="4" wrap justify="center">
              <Button as={Link} href="/contact-us" size="4">
                {t("button")}
              </Button>
              <Button as="a" href={PERSONAL_INFO.contact.phone} variant="soft" size="4" dir="ltr">
                {tCta("secondary")}
              </Button>
            </Flex>

            <Text size="2" color="b" low>
              {tCta("reassurance")}
            </Text>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TourismCTA;
