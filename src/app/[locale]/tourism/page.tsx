import { getTranslations, setRequestLocale } from "next-intl/server";

import Tourism from "@/app/_components/pages/tourism";

export async function generateMetadata({ params }: PageProps<"/[locale]/tourism">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "tourism.seo" });

  return {
    title: t("title"),
    description: t("description"),
    // keywords: t("keywords"),
    openGraph: {
      title: t("og_title"),
      description: t("description"),
    },
  };
}
const page = async ({ params }: PageProps<"/[locale]/tourism">) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Tourism />;
};

export default page;
