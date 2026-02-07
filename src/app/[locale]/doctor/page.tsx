import { getTranslations, setRequestLocale } from "next-intl/server";
import Doctor from "@/app/_components/pages/doctor";

export async function generateMetadata({ params }: PageProps<"/[locale]/doctor">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "doctor.seo" });

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
const page = async ({ params }: PageProps<"/[locale]/doctor">) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Doctor />;
};

export default page;
