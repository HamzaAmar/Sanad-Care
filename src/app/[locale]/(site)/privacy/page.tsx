import { Flex, Heading, Paper, Text } from "@pillar-ui/core";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PERSONAL_INFO } from "@/constants/personalInfo";
import { buildPageMetadata } from "@/lib/page-metadata";
import type { Metadata } from "next";
import "./privacy.scss";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacyPage" });

  return buildPageMetadata({
    locale,
    path: "/privacy",
    title: `${t("title")} | Sanad Care`,
    description: t("metaDescription"),
  });
}

interface Section {
  title: string;
  body: string[];
}

const PrivacyPage = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "privacyPage" });
  const sections = t.raw("sections") as unknown as Section[];

  return (
    <Paper as="article" flow="7" className="section privacy">
      <header className="privacy__head">
        <Heading as="h1" size="7" weight="6">
          {t("title")}
        </Heading>
        <Text as="p" size="3" color="b" low>
          {t("updated")}
        </Text>
        <Text as="p" size="4" color="b" low className="privacy__intro">
          {t("intro")}
        </Text>
      </header>

      {sections.map((section, index) => (
        <section className="privacy__section" key={section.title}>
          <Heading as="h2" size="5" weight="5" id={`privacy-${index}`}>
            {section.title}
          </Heading>
          {section.body.map((paragraph) => (
            <Text as="p" size="4" color="b" low className="privacy__p" key={paragraph}>
              {paragraph}
            </Text>
          ))}
        </section>
      ))}

      <Flex gap="4" wrap className="privacy__contact">
        <Text as="p" size="4">
          <a className="privacy__link" href={PERSONAL_INFO.contact.email}>
            {PERSONAL_INFO.email}
          </a>
        </Text>
        <Text as="p" size="4">
          <a className="privacy__link" href={PERSONAL_INFO.contact.phone} dir="ltr">
            {PERSONAL_INFO.phone}
          </a>
        </Text>
      </Flex>
    </Paper>
  );
};

export default PrivacyPage;
