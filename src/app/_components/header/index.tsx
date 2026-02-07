import { Flex } from "@pillar-ui/core";
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
        <Logo width="120" dir="ar" />
      </Flex>
      <DesktopMenu />
      <Flex gap="1" items="center" className="slide-down-animation">
        <LanguageSwitcher language={language} />
        <MobileHeader />
        <Switcher />
      </Flex>
    </Flex>
  );
};

export default Header;
