import { getTranslations, setRequestLocale } from "next-intl/server";
import WhyUs from "@/app/_components/pages/whyUs";

export async function generateMetadata({ params }: PageProps<"/[locale]/why-us">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "whyUs.seo" });

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
const page = async ({ params }: PageProps<"/[locale]/why-us">) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return <WhyUs />;
};

export default page;
