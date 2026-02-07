import { getTranslations, setRequestLocale } from "next-intl/server";
import Family from "@/app/_components/pages/family";

export async function generateMetadata({ params }: PageProps<"/[locale]/family">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "family.seo" });

  return {
    title: t("title"),
    description: t("description"),
    // keywords: (t("keywords") as unknown as string[]).join(", "),
    openGraph: {
      title: t("og_title"),
      description: t("description"),
    },
  };
}
const page = async ({ params }: PageProps<"/[locale]/family">) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Family />;
};

export default page;
