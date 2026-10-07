import { Button, Flex, Heading, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import { Reveal } from "@/app/_components/reveal";
import { PERSONAL_INFO } from "@/constants/personalInfo";
import { Link } from "@/i18n/navigation";

const ClosingCta = () => {
  const t = useTranslations("patient.page.cta");
  const tCta = useTranslations("home.howItWorks.cta");

  return (
    <section className="pat-cta">
      <Reveal>
        <div className="pat-cta__inner">
          <Heading as="h2" size="7" weight="5" className="pat-title">
            {t("title")}
          </Heading>
          <Text size="5" color="b" low className="pat-lead">
            {t("description")}
          </Text>
          <Flex className="pat-cta__actions" gap="4" wrap justify="center">
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
    </section>
  );
};

export default ClosingCta;
