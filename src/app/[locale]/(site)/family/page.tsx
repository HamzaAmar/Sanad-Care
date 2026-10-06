import { getTranslations, setRequestLocale } from "next-intl/server";
import Family from "@/app/_components/pages/family";
import { buildPageMetadata } from "@/lib/page-metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/family">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "family.seo" });

  return buildPageMetadata({
    locale,
    path: "/family",
    title: t("title"),
    description: t("description"),
    ogTitle: t("og_title"),
  });
}
const page = async ({ params }: PageProps<"/[locale]/family">) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Family />;
};

export default page;
