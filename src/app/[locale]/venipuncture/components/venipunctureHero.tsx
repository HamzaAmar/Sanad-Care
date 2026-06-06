// app/[locale]/venipuncture/components/venipunctureHero.tsx
import { Button, Chips, Flex, Heading, Paper, Text } from "@pillar-ui/core";
import { PhoneCall, Whatsapp } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PERSONAL_INFO } from "@/constants/personalInfo";

const VenipunctureHero = () => {
  const t = useTranslations("venipuncture");

  return (
    <Flex as={Paper} items="center" justify="center" aria-label="Venipuncture Hero">
      <Paper flow="7" className="hero-content">
        <Flex items="center">
          <Paper flow="5">
            <div>
              <Text color="p" low size="4" leading="5" className="hero-animation">
                {t("hero.badge")}
              </Text>
              <Heading size="8" as="h1" leading="1" weight="5" className="hero-animation">
                {t("hero.title")}
              </Heading>
            </div>
            <Flex gap="3" wrap className="hero-badges hero-animation">
              <Chips corner="full" variant="soft" color="se" size="3">
                {t("hero.badges.hours")}
              </Chips>
              <Chips corner="full" variant="soft" color="su" size="3">
                {t("hero.badges.gym")}
              </Chips>
              <Chips corner="full" variant="soft" color="b" size="3">
                {t("hero.badges.tourism")}
              </Chips>
            </Flex>
          </Paper>
          <Flex gap="5" className="hero-actions">
            <Button
              variant="shadow"
              as={Link}
              href={PERSONAL_INFO.socialMedia.whatsapp}
              className="hero-action hero-animation"
              icon={<Whatsapp />}
            >
              {t("hero.ctaWhatsapp")}
            </Button>
            <Button
              as={Link}
              variant="soft"
              href={PERSONAL_INFO.contact.phone}
              className="hero-action hero-animation"
              icon={<PhoneCall />}
            >
              {t("hero.ctaPhone")}
            </Button>
          </Flex>
        </Flex>
        <Text size="7" color="b" low weight="3" className="hero-animation">
          {t("hero.subtitle")}
        </Text>
      </Paper>
    </Flex>
  );
};

export default VenipunctureHero;
