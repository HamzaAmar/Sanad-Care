import { setRequestLocale } from "next-intl/server";
import DocumentPage from "@/app/_components/pages/document";

const page = async ({ params }: PageProps<"/[locale]/document">) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DocumentPage />;
};

export default page;
