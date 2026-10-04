import { Avatar, AvatarGroup, Button, Chips, Flex, Heading, Paper, Text } from "@pillar-ui/core";
import { PhoneCall, Star, Whatsapp } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PERSONAL_INFO } from "@/constants/personalInfo";

const HeroSection = () => {
  const t = useTranslations();

  return (
    <Flex
      as={Paper}
      flow="4"
      items="center"
      justify="center"
      className="hero"
      aria-label="Hero Car Carousel"
    >
      <div className="luxury-hero__noise" />
      <div className="luxury-hero__glow luxury-hero__glow--left" />
      <div className="luxury-hero__glow luxury-hero__glow--right" />
      <Paper flow="5" className="hero-content">
        <Chips variant="outline" color="b" corner="2" className="hero-chips hero-animation">
          {t("hero.ranking")}
        </Chips>
        <Heading leading="1" weight="5" className="hero-title hero-animation">
          {t("hero.title")}
        </Heading>
        <Text className="hero-description hero-animation">{t("hero.subtitle")}</Text>
        <Flex wrap gap="4" className="hero-actions">
          <Button
            variant="shadow"
            as={Link}
            href={PERSONAL_INFO.socialMedia.whatsapp}
            className="hero-action hero-animation"
            icon={<Whatsapp />}
          >
            {t("contact.contactWhatsapp")}
          </Button>
          <Button
            as={Link}
            variant="soft"
            href={PERSONAL_INFO.contact.phone}
            className="hero-action hero-animation"
            icon={<PhoneCall />}
          >
            {t("contact.contactPhone")}
          </Button>
        </Flex>
        <Paper flow="2">
          <Flex gap="4" className="hero-likes hero-animation">
            <AvatarGroup size="2">
              <Avatar title="Sanad Care client" fallback="SB" />
              <Avatar title="Sanad Care client" fallback="YE" />
              <Avatar title="Sanad Care client" fallback="KT" />
              <Avatar title="Sanad Care client" fallback="NR" />
            </AvatarGroup>
            <Flex gap="1" items="center">
              <Star width={16} fill="var(--W8)" stroke="var(--W8)" />
              <Text size="3" color="b" low>
                4.8
              </Text>
              <Text size="3" color="b" low>
                (3K+)
              </Text>
            </Flex>
          </Flex>
          <Text className="hero-numbers hero-animation" size="1" color="b" low>
            {t("hero.usersCount")}
          </Text>
        </Paper>
        <Flex gap="2" wrap>
          <Chips corner="full" variant="soft" color="se" className="hero-animation">
            {t("hero.timing")}
          </Chips>
          <Chips corner="full" variant="soft" color="se" className="hero-animation">
            {t("hero.careBased")}
          </Chips>
          <Chips corner="full" variant="soft" color="se" className="hero-animation">
            {t("hero.safe")}
          </Chips>
        </Flex>
      </Paper>
      <img src="/nurse.png" alt="" className="hero-bg" width="300" />
    </Flex>
  );
};

export default HeroSection;
