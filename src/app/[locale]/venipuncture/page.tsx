import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import VenipunctureHero from "./components/venipunctureHero";
import WhyUsVenipuncture from "./components/whyUsVenipuncture";
import GymPartnershipSection from "./components/gymPartnership";
import MedicalTourismVenipuncture from "./components/medicalTourismVenipuncture";
import PatientProfilesSection from "./components/patientProfiles";
import HowItWorksVenipuncture from "./components/howItWorks";
import PricingSection from "./components/pricingSection";
import ServiceAreasSection from "./components/serviceAreas";
import FAQSection from "./components/faqSection";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/venipuncture">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "venipuncture" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: [
      "prise de sang à domicile Marrakech",
      "blood test at home Marrakech",
      "infirmier domicile Marrakech",
      "bilan sanguin sportif Marrakech",
      "medical tourism Marrakech blood test",
      "فحص الدم المنزلي مراكش",
    ],
    openGraph: {
      title: t("meta.ogTitle"),
      description: t("meta.ogDescription"),
      locale: locale === "ar" ? "ar_MA" : locale === "en" ? "en_US" : "fr_MA",
      type: "website",
    },
    alternates: {
      canonical: `/${locale}/venipuncture`,
      languages: {
        fr: "/fr/venipuncture",
        en: "/en/venipuncture",
        ar: "/ar/venipuncture",
      },
    },
  };
}

export default function VenipuncturePage() {
  return (
    <div className="venipuncture-page Sf-6">
      <VenipunctureHero />
      <WhyUsVenipuncture />
      <GymPartnershipSection />
      <MedicalTourismVenipuncture />
      <PatientProfilesSection />
      <HowItWorksVenipuncture />
      <PricingSection />
      <ServiceAreasSection />
      <FAQSection />
    </div>
  );
}
