import { Button, Flex, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import { PERSONAL_INFO } from "@/constants/personalInfo";
import { Reveal } from "@/app/_components/reveal";
import { Link } from "@/i18n/navigation";
import FamilySection from "../section";

const Closing = () => {
  const t = useTranslations("family.page.section9");
  const tCta = useTranslations("home.howItWorks.cta");

  return (
    <FamilySection
      id="family-closing"
      title={t("title")}
      lead={t("subtitle")}
      titleSize="9"
      variant="closing"
    >
      <Reveal variant="item" className="family-statement__body">
        <Text size="5" weight="3" color="b" low>
          {t("description")}
        </Text>
      </Reveal>
      <Reveal variant="item" index={1}>
        <Flex direction="col" items="center" gap="3">
          <Flex gap="4" wrap justify="center">
            <Button as={Link} href="/contact-us" size="4">
              {t("cta")}
            </Button>
            <Button as="a" href={PERSONAL_INFO.contact.phone} variant="soft" size="4" dir="ltr">
              {tCta("secondary")}
            </Button>
          </Flex>
          <Text size="2" color="b" low>
            {tCta("reassurance")}
          </Text>
        </Flex>
      </Reveal>
    </FamilySection>
  );
};

export default Closing;
