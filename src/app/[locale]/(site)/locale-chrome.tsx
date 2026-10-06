"use client";

import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
import Footer from "../../_components/footer";
import Header from "../../_components/header";

export default function LocaleChrome({ children }: { children: ReactNode }) {
  const t = useTranslations("common");

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t("skipToContent")}
      </a>
      <Header />
      <main id="main-content" className="main">
        {children}
      </main>
      <Footer />
    </>
  );
}
