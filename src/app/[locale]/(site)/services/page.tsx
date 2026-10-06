import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Services from "@/app/_components/pages/services";
import { buildPageMetadata } from "@/lib/page-metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.seo" });

  return buildPageMetadata({
    locale,
    path: "/services",
    title: t("title"),
    description: t("description"),
  });
}

const services = async ({ params }: PageProps<"/[locale]/services">) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Services />;
};

export default services;
