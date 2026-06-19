import { setRequestLocale } from "next-intl/server";
import FAQ from "@/app/_components/pages/faq";

const page = async ({ params }: PageProps<"/[locale]/faq">) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return <FAQ />;
};

export default page;
