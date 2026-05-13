import { Avatar, AvatarGroup, Button, Chips, Flex, Heading, Paper, Text } from "@pillar-ui/core";
import { Star } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const HeroSection = () => {
  const t = useTranslations();

  return (
    <Flex as={Paper} items="center" className="hero" aria-label="Hero Car Carousel">
      <div className="luxury-hero__noise" />
      <div className="luxury-hero__glow luxury-hero__glow--left" />
      <div className="luxury-hero__glow luxury-hero__glow--right" />
      <Paper flow="6" className="hero-content">
        <Chips variant="outline" color="b" corner="2" className="hero-chips hero-animation">
          {t("hero.ranking")}
        </Chips>
        <Heading leading="1" weight="5" className="hero-title hero-animation">
          {t("hero.title")}
        </Heading>
        <Text className="hero-description hero-animation">{t("hero.subtitle")}</Text>
        <Flex gap="5" className="hero-actions">
          <Button variant="shadow" as={Link} href="/services" className="hero-action hero-animation">
            {t("hero.browseBtn")}
          </Button>
          <Button as={Link} variant="soft" href="/contact-us" className="hero-action hero-animation">
            {t("contact.title")}
          </Button>
        </Flex>
        <Paper flow="2">
          <Flex gap="4" className="hero-likes hero-animation">
            <AvatarGroup size="2">
              {Array.from({ length: 4 }, (_, i) => (
                <Avatar key={`hero-avatar-${5 + i}`} src={`https://picsum.photos/id/${5 + i}/200/200`} />
              ))}
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
          <Text className="hero-numbers hero-animation" size="3" color="b" low>
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
      <Image src="/abc.webp" alt="Hero" width={580} height={800} />
    </Flex>
  );
};

export default HeroSection;
