import { Flex, Heading, Paper, Text } from "@pillar-ui/core";
import { ChevronRight } from "@pillar-ui/icons";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

import Logo from "../../logo";
import { LINKS } from "./qr-code.data";
import { PERSONAL_INFO } from "@/constants/personalInfo";

export const metadata: Metadata = {
  title: "Sanad Care | Quick Links",
  description:
    "Quick links to contact Sanad Care: website, WhatsApp, phone, social media, and email.",
  robots: { index: false, follow: false },
};

const LOCALIZED_TITLES: Record<string, string> = {
  site: "site",
  call: "call",
  mail: "mail",
};

function Item({ link, title, icon }: { link: string; title: string; icon: React.ReactNode }) {
  const isExternal = link.startsWith("http");

  return (
    <Flex
      as={Link}
      href={link}
      className="qr-code_item"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <Paper
        as={Flex}
        justify="between"
        gap="2"
        border
        corner="3"
        p="3"
        width="100%"
        style={{ width: "100%" }}
      >
        <Flex gap="2">
          {icon}
          <Text size="4" weight="5">
            {title}
          </Text>
        </Flex>
        <ChevronRight width="20" strokeWidth="2" className="qr-code_arrow" />
      </Paper>
    </Flex>
  );
}

async function QrCode({ params }: PageProps<"/[locale]/qr-code">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "qrCode" });

  return (
    <Flex items="center" justify="center" className="qr-code">
      <Heading as="h1" className="H-sr">
        {PERSONAL_INFO.name}
      </Heading>
      <Paper shadow="0" flow="5" p="5" background="B1" corner="5" className="qr-code_container">
        <Paper flow="2" p="2" as={Flex} direction="col" items="center">
          <Logo width={180} />
          <Text color="b" low size="3">
            {t("subtitle", { name: PERSONAL_INFO.name })}
          </Text>
        </Paper>
        <Paper flow="2">
          {LINKS.map((link) => (
            <Item
              key={link.id}
              {...link}
              title={LOCALIZED_TITLES[link.id] ? t(LOCALIZED_TITLES[link.id]) : link.title}
            />
          ))}
        </Paper>
      </Paper>
    </Flex>
  );
}

export default QrCode;
