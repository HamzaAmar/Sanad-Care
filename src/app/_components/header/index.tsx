import { Button, Flex } from "@pillar-ui/core";
import { CalendarPlus } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import Logo from "@/app/logo";
import { Link } from "@/i18n/navigation";

import LanguageSwitcher from "./language-switcher";
import DesktopMenu from "./menu";
import { MobileHeader } from "./mobileHeader";
import { Switcher } from "./switcher";

const Header = () => {
  const t = useTranslations();
  const language = {
    en: t("language.en"),
    fr: t("language.fr"),
    ar: t("language.ar"),
  };

  return (
    <Flex justify="between" items="center" as="header" className="h-e">
      <Flex
        as={Link}
        aria-label={t("header.homePage")}
        items="center"
        gap="4"
        href="/"
        className="h-e-logo slide-down-animation"
      >
        <Logo width="130" />
      </Flex>
      <DesktopMenu />
      <Flex gap="2" items="center" className="slide-down-animation">
        <Button
          as={Link}
          href="/contact-us"
          variant="solid"
          color="p"
          corner="full"
          size="4"
          icon={<CalendarPlus width={16} strokeWidth={1.8} />}
          className="h-e-cta"
        >
          {t("hero.bookBtn")}
        </Button>
        <LanguageSwitcher language={language} />
        <MobileHeader />
        <Switcher />
      </Flex>
    </Flex>
  );
};

export default Header;
