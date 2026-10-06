import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import FAQ from "@/app/_components/pages/faq";
import { buildPageMetadata } from "@/lib/page-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq.seo" });

  return buildPageMetadata({
    locale,
    path: "/faq",
    title: t("title"),
    description: t("description"),
  });
}

const page = async ({ params }: PageProps<"/[locale]/faq">) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return <FAQ />;
};

export default page;
