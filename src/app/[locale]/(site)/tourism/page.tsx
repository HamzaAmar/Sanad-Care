import { getTranslations, setRequestLocale } from "next-intl/server";

import Tourism from "@/app/_components/pages/tourism";
import { buildPageMetadata } from "@/lib/page-metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/tourism">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "tourism.seo" });

  return buildPageMetadata({
    locale,
    path: "/tourism",
    title: t("title"),
    description: t("description"),
    ogTitle: t("og_title"),
  });
}
const page = async ({ params }: PageProps<"/[locale]/tourism">) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Tourism />;
};

export default page;
