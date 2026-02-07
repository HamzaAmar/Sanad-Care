import { getTranslations, setRequestLocale } from "next-intl/server";
import Patient from "@/app/_components/pages/patient";

export async function generateMetadata({ params }: PageProps<"/[locale]/patient">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "patient.seo" });

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
const page = async ({ params }: PageProps<"/[locale]/patient">) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Patient />;
};

export default page;
