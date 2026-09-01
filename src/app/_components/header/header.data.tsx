import { Car, Envelop, Home, News, UserCircle } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";

export const useMenuLinks = () => {
  const t = useTranslations("nav");

  return [
    { href: "/", label: t("home"), icon: <Home width="20" strokeWidth="1.5" /> },
    { href: "/services", label: t("services"), icon: <UserCircle width="20" strokeWidth="1.5" /> },
    { href: "/why-us", label: t("why-us"), icon: <UserCircle width="20" strokeWidth="1.5" /> },
    { href: "/doctor", label: t("doctor"), icon: <Car width="20" strokeWidth="1.5" /> },
    { href: "/patient", label: t("patient"), icon: <News width="20" strokeWidth="1.5" /> },
    { href: "/family", label: t("family"), icon: <Envelop width="20" strokeWidth="1.5" /> },
    { href: "/tourism", label: t("tourism"), icon: <Envelop width="20" strokeWidth="1.5" /> },
    { href: "/document", label: t("document"), icon: <Envelop width="20" strokeWidth="1.5" /> },
    { href: "/contact-us", label: t("contact"), icon: <Envelop width="20" strokeWidth="1.5" /> },
  ];
};
