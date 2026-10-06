"use client";

import { cx, Flex, IconButton, Paper, Text } from "@pillar-ui/core";
import { Close, Envelop, Menu, Phone } from "@pillar-ui/icons";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import Logo from "@/app/logo";
import { PERSONAL_INFO } from "@/constants/personalInfo";
import { Link } from "@/i18n/navigation";

import { useHeaderLinks } from "./header.data";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

export const HeaderMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  const t = useTranslations();
  const pathname = usePathname();
  const LINKS = useHeaderLinks();

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
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  function closeMenu() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  function openMenu() {
    setOpen(true);
  }

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusables = panel
      ? Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
      : [];

    focusables[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <Flex as={Paper} gap="4" justify="between" items="center" className="mobile-header">
      <IconButton
        ref={triggerRef}
        variant="soft"
        size="4"
        title={open ? t("header.closeMenu") : t("header.openMenu")}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={open ? closeMenu : openMenu}
        icon={open ? <Close /> : <Menu />}
      />

      <Paper
        ref={panelRef}
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label={t("header.menu")}
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
