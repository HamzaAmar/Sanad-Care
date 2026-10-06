import { getTranslations, setRequestLocale } from "next-intl/server";
import Patient from "@/app/_components/pages/patient";
import { buildPageMetadata } from "@/lib/page-metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/patient">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "patient.seo" });

  return buildPageMetadata({
    locale,
    path: "/patient",
    title: t("title"),
    description: t("description"),
    ogTitle: t("og_title"),
  });
}
const page = async ({ params }: PageProps<"/[locale]/patient">) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Patient />;
};

export default page;
