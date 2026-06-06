"use client";

import { Flex } from "@pillar-ui/core";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";

import { useMenuLinks } from "./header.data";

export default function DesktopMenu() {
  const pathname = usePathname();
  const LINKS = useMenuLinks();

  return (
    <nav className="luxury-nav slide-down-animation">
      <Flex as="ul" className="luxury-nav__list">
        {LINKS.map(({ href, label }) => {
          const currentPath = `/${pathname.split("/").slice(2).join("/")}`;
          const isActive = currentPath === href || currentPath.startsWith(`${href}/`);
          const data = isActive ? ({ "aria-current": "page" } as const) : undefined;
          return (
            <Flex key={href} className="luxury-nav__item">
              <Flex
                aria-label={label}
                {...data}
                as={Link}
                gap="2"
                items="center"
                href={href}
                className="luxury-nav__link"
              >
                {label}
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </nav>
  );
}
