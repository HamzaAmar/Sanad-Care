import { setRequestLocale } from "next-intl/server";
import Services from "@/app/_components/pages/services";

const services = async ({ params }: PageProps<"/[locale]/services">) => {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Services />;
};

export default services;
