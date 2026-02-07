import { setRequestLocale } from "next-intl/server";
import FAQ from "@/app/_components/pages/faq";

// export async function generateMetadata({ params }: PageProps<"/[locale]/faq">) {
//   const { locale } = await params;
//   const t = await getTranslations({ locale, namespace: "Metadata.Faq" });

//   return {
//     title: t("title"),
//     description: t("description"),
//   };
// }

const page = async ({ params }: PageProps<"/[locale]/faq">) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return <FAQ />;
};

export default page;
