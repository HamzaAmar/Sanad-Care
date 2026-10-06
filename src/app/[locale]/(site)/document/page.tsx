import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import DocumentPage from "@/app/_components/pages/document";
import { buildPageMetadata } from "@/lib/page-metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/document">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "document" });

  return {
    ...buildPageMetadata({
      locale,
      path: "/document",
      title: `${t("pageTitle")} | Sanad Care`,
      description: t("subtitle"),
    }),
    robots: { index: false, follow: false },
  };
}

const page = async ({ params }: PageProps<"/[locale]/document">) => {
  const { locale } = await params;
  setRequestLocale(locale);

  // Resolve the health questions on the server (in the active locale) and pass
  // them down. This keeps the client form free of any `t.raw()` array reliance.
  const t = await getTranslations({ locale, namespace: "document" });
  const questions = t.raw("questions") as string[];

  return <DocumentPage questions={questions} />;
};

export default page;
