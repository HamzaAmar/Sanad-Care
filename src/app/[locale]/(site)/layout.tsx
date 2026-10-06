import { ThemeProvider } from "next-themes";
import { getTranslations, setRequestLocale } from "next-intl/server";
import LocaleChrome from "./locale-chrome";

import "@pillar-ui/core/main.css";
import "@/scss/_main.scss";
import { IconButton } from "@pillar-ui/core";
import { Whatsapp } from "@pillar-ui/icons";
import { PERSONAL_INFO } from "@/constants/personalInfo";

export default async function RootLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <ThemeProvider attribute="class">
      <LocaleChrome>{children}</LocaleChrome>

      <div className="whatsapp-button-container">
        <IconButton
          className="whatsapp-button"
          title={t("contactWhatsapp")}
          color="su"
          variant="solid"
          icon={<Whatsapp stroke="white" />}
          href={PERSONAL_INFO.contact.whatsapp}
          as="a"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </ThemeProvider>
  );
}
