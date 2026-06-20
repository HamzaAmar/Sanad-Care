import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { routing } from "@/i18n/routing";
import LocaleChrome from "./locale-chrome";

import "@pillar-ui/core/main.css";
import "@/scss/_main.scss";
import { BASE_URL } from "@/constants/domain";
import { IconButton } from "@pillar-ui/core";
import { Whatsapp } from "@pillar-ui/icons";
import { PERSONAL_INFO } from "@/constants/personalInfo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      locale: locale,
      url: `${BASE_URL}/${locale}`,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
    },
    twitter: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        en: `${BASE_URL}/en`,
        fr: `${BASE_URL}/fr`,
        ar: `${BASE_URL}/ar`,
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children }: LayoutProps<"/[locale]">) {
  return (
    <ThemeProvider attribute="class">
      <LocaleChrome>{children}</LocaleChrome>

      <div className="whatsapp-button-container">
        <IconButton
          className="whatsapp-button"
          title="whatsapp call"
          color="su"
          variant="solid"
          icon={<Whatsapp stroke="white" />}
          href={PERSONAL_INFO.contact.whatsapp}
          as="a"
          target="_blank"
        />
      </div>
    </ThemeProvider>
  );
}
