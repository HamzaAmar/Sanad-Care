import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildPageMetadata } from "@/lib/page-metadata";
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
    ...buildPageMetadata({
      locale,
      path: "/venipuncture",
      title: t("meta.title"),
      description: t("meta.description"),
      ogTitle: t("meta.ogTitle"),
      ogDescription: t("meta.ogDescription"),
    }),
    keywords: [
      "prise de sang à domicile Marrakech",
      "blood test at home Marrakech",
      "infirmier domicile Marrakech",
      "bilan sanguin sportif Marrakech",
      "medical tourism Marrakech blood test",
      "فحص الدم المنزلي مراكش",
    ],
  };
}

export default async function VenipuncturePage({ params }: PageProps<"/[locale]/venipuncture">) {
  const { locale } = await params;
  setRequestLocale(locale);

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
