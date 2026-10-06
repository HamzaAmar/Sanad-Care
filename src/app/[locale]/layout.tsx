import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

import "@pillar-ui/core/main.css";
import "@/scss/_main.scss";
import { BASE_URL } from "@/constants/domain";
import { buildPageMetadata } from "@/lib/page-metadata";

/**
 * Only the namespaces consumed by client components are serialized to the
 * browser. Server components read from the full catalog on the server.
 */
const CLIENT_MESSAGE_NAMESPACES = [
  "common",
  "header",
  "language",
  "nav",
  "hero",
  "footer",
  "contact",
  "document",
  "family",
  "venipuncture",
  "whyUs",
  "errorPage",
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });

  return {
    metadataBase: new URL(BASE_URL),
    ...buildPageMetadata({
      locale,
      path: "",
      title: t("metaTitle"),
      description: t("metaDescription"),
      ogTitle: t("ogTitle"),
      ogDescription: t("ogDescription"),
      imageAlt: t("ogImageAlt"),
    }),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  const dir = locale === "ar" ? "rtl" : "ltr";

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const clientMessages = Object.fromEntries(
    CLIENT_MESSAGE_NAMESPACES.map((namespace) => [namespace, messages[namespace]]),
  );

  return (
    <html suppressHydrationWarning lang={locale} dir={dir}>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={clientMessages}>{children}</NextIntlClientProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
      </body>
    </html>
  );
}
