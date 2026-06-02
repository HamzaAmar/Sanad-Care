"use client";

import { cx, Flex, IconButton, Paper, Text } from "@pillar-ui/core";
import { Close, Envelop, Menu, Phone } from "@pillar-ui/icons";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Logo from "@/app/logo";
import { PERSONAL_INFO } from "@/constants/personalInfo";
import { Link } from "@/i18n/navigation";

import { useMenuLinks } from "./header.data";

export const HeaderMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  const t = useTranslations();
  const pathname = usePathname();
  const LINKS = useMenuLinks();

  return (
    <Paper flow="6" as="nav" className="mobile-menu">
      <Flex justify="between" items="center">
        <Link className="header-logo" href="/" aria-label={t("header.homePage")}>
          <Logo width="140" />
        </Link>
        <IconButton onClick={closeMenu} title={t("header.closeMenu")} icon={<Close />} />
      </Flex>
      <ul>
        {LINKS.map(({ href, label, icon }) => {
          const result = pathname.split("/").slice(2).join("/");
          const isActive = `/${result}` === href;
          return (
            <li className="sidebar--nav-item" key={href}>
              <Flex
                as={Link}
                gap="4"
                className={cx("sidebar--nav-button", { gold: isActive })}
                href={href}
                onClick={closeMenu}
                aria-label={label}
              >
                {icon}
                {label}
              </Flex>
            </li>
          );
        })}
      </ul>
    </Paper>
  );
};

export const MobileHeader = () => {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  function openMenu() {
    setOpen(true);
  }

  return (
    <Flex as={Paper} gap="4" justify="between" items="center" className="mobile-header">
      <IconButton
        variant="soft"
        size="4"
        title={t("header.openMenu")}
        onClick={openMenu}
        icon={<Menu />}
      />

      <Paper
        className="mobile-menu-header menu-mobile-animation"
        width="100"
        height="screen"
        p="5"
        flow="6"
        data-open={open}
        as={Flex}
        justify="between"
        direction="col"
      >
        <HeaderMenu closeMenu={closeMenu} />

        <Paper flow="3">
          <Flex items="center" gap="4">
            <Envelop width="16" />
            <Text color="b" low size="4">
              {PERSONAL_INFO.email}
            </Text>
          </Flex>
          <Flex items="center" gap="4">
            <Phone width="16" />
            <Text color="b" low size="4" dir="ltr">
              {PERSONAL_INFO.phone}
            </Text>
          </Flex>
        </Paper>
      </Paper>
    </Flex>
  );
};
