"use client";

import { Flex, Text } from "@pillar-ui/core";
import { ChevronDown } from "@pillar-ui/icons";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { DropdownMenu } from "radix-ui";
import { useTransition } from "react";
import { LOCALES } from "@/constants/locale";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { LocaleKey } from "@/types/localeProps.interface";

interface Language {
  en: string;
  fr: string;
  ar: string;
}

interface LanguageProps {
  language: Language;
}

const LanguageMenu = ({ language }: LanguageProps) => {
  const router = useRouter();
  const [_isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams<{ locale: LocaleKey }>();
  const locale = useLocale();

  function onSelectChange(locale: LocaleKey) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale, scroll: false },
      );
    });
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button type="button" className="language--trigger">
          <Flex as="span" items="center" gap="3" className="menu-button--item">
            <Image width="22" height="15" src={`/flags/${locale}.svg`} alt={`${locale} Flag`} />
            <Text className="language-txt" as="span" size="3" weight="5">
              {language[locale as LocaleKey]}
            </Text>
            <ChevronDown width={16} />
          </Flex>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end" sideOffset={8} className="menu-button--container">
        <DropdownMenu.Group>
          {LOCALES.filter((lang) => lang !== locale).map((lang) => {
            return (
              <DropdownMenu.Item key={lang} asChild>
                <Flex as="button" onClick={() => onSelectChange(lang)} gap="2" className="menu-button--item">
                  <Image width="22" height="15" src={`/flags/${lang}.svg`} alt={`${lang} Flag`} />
                  <Text size="3" weight="5">
                    {language[lang]}
                  </Text>
                </Flex>
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default LanguageMenu;
