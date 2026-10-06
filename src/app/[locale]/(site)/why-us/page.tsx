import { getTranslations, setRequestLocale } from "next-intl/server";
import WhyUs from "@/app/_components/pages/whyUs";
import { buildPageMetadata } from "@/lib/page-metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/why-us">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "whyUs.seo" });

  return buildPageMetadata({
    locale,
    path: "/why-us",
    title: t("title"),
    description: t("description"),
    ogTitle: t("og_title"),
  });
}
const page = async ({ params }: PageProps<"/[locale]/why-us">) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return <WhyUs />;
};

export default page;
