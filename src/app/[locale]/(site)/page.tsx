import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BASE_URL } from "@/constants/domain";
import { PERSONAL_INFO } from "@/constants/personalInfo";
import { GOOGLE_GEO, GOOGLE_PROFILE_URL } from "@/constants/reviews";
import { SERVICE_TREE } from "@/constants/services/serviceTreeData";
import type { LocaleKey } from "@/types/localeProps.interface";
import { buildPageMetadata } from "@/lib/page-metadata";
import Home from "../../_components/pages/home";

const FAQ_KEYS = [
  ["generalQuestion1", "generalAnswer1"],
  ["touristQuestion1", "touristAnswer1"],
  ["nursesQuestion1", "nursesAnswer1"],
  ["servicesQuestion1", "servicesAnswer1"],
  ["bookingQuestion1", "bookingAnswer1"],
  ["pricingQuestion3", "pricingAnswer3"],
] as const;

const CATALOG_SLUGS = [
  "home-nursing-marrakech",
  "nurse-at-home-marrakech",
  "post-surgery-care-marrakech",
  "elderly-care-marrakech",
  "hospitalization-at-home-marrakech",
  "medical-assistance-tourists-marrakech",
  "iv-therapy-marrakech",
];

const PROCEDURE_SLUGS = [
  "blood-test-at-home-marrakech",
  "injection-at-home-marrakech",
  "wound-care-marrakech",
  "iv-therapy-marrakech",
];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });

  return buildPageMetadata({
    locale,
    path: "",
    title: t("metaTitle"),
    description: t("metaDescription"),
    ogTitle: t("ogTitle"),
    ogDescription: t("ogDescription"),
    imageAlt: t("ogImageAlt"),
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const loc = locale as LocaleKey;
  const tSeo = await getTranslations({ locale, namespace: "seo" });
  const tFaq = await getTranslations({ locale, namespace: "faq" });

  const pageUrl = `${BASE_URL}/${locale}`;
  const businessId = `${BASE_URL}/#business`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: tSeo("metaTitle"),
        description: tSeo("metaDescription"),
        inLanguage: locale,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": businessId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Sanad Care",
        alternateName: "Sanad Care Morocco",
        description: "24/7 Home Nursing and Medical Care in Marrakech",
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: ["en", "fr", "ar"],
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Sanad Care",
        legalName: "Sanad Care SARL",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          "@id": `${BASE_URL}/#logo`,
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          caption: "Sanad Care",
        },
        image: `${BASE_URL}/og-image.jpg`,
        description:
          "Leading home nursing and medical care provider in Marrakech, Morocco. Serving locals and international tourists with 24/7 professional healthcare at home, hotel, or private residence.",
        foundingDate: "2026",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          value: "6",
        },
        knowsLanguage: ["English", "French", "Arabic", "Spanish"],
        sameAs: [
          PERSONAL_INFO.socialMedia.facebook,
          PERSONAL_INFO.socialMedia.instagram,
          PERSONAL_INFO.socialMedia.linkedin,
          PERSONAL_INFO.socialMedia.whatsapp,
          GOOGLE_PROFILE_URL,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          "@id": `${BASE_URL}/#contact`,
          telephone: PERSONAL_INFO.phone,
          contactType: "customer service",
          contactOption: "WhatsApp",
          availableLanguage: ["English", "French", "Arabic"],
          areaServed: "MA",
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: DAYS,
            opens: "00:00",
            closes: "23:59",
          },
        },
      },
      {
        "@type": "MedicalBusiness",
        "@id": businessId,
        name: "Sanad Care - Home Nursing Marrakech",
        alternateName: [
          "Sanad Care",
          "Private Nurse Marrakech",
          "Home Nurse Marrakech",
          "English Speaking Nurse Marrakech",
        ],
        image: [
          `${BASE_URL}/og-image.jpg`,
          `${BASE_URL}/images/hero/hero-care-portrait-9x16.avif`,
        ],
        description:
          "Sanad Care provides professional home nursing services in Marrakech, Morocco. Our registered nurses deliver 24/7 medical care including elderly care, post-surgery recovery, IV therapy, wound care, blood tests, injections, and doctor home visits. Specialized medical assistance for tourists in hotels and riads.",
        url: BASE_URL,
        telephone: PERSONAL_INFO.phone,
        email: PERSONAL_INFO.email,
        priceRange: "$$",
        currenciesAccepted: "MAD",
        paymentAccepted: ["Cash", "Cheque", "Bank Transfer"],
        isAcceptingNewPatients: true,
        sameAs: [GOOGLE_PROFILE_URL],
        medicalSpecialty: {
          "@type": "MedicalSpecialty",
          name: "Home Health Nursing",
        },
        address: {
          "@type": "PostalAddress",
          "@id": `${BASE_URL}/#address`,
          streetAddress: PERSONAL_INFO.information.address,
          addressLocality: "Marrakech",
          addressRegion: "Marrakech-Safi",
          postalCode: "40000",
          addressCountry: "MA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: GOOGLE_GEO.latitude,
          longitude: GOOGLE_GEO.longitude,
        },
        hasMap: GOOGLE_PROFILE_URL,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: DAYS,
            opens: "00:00",
            closes: "23:59",
          },
        ],
        areaServed: [
          {
            "@type": "City",
            name: "Marrakech",
            containedInPlace: {
              "@type": "Country",
              name: "Morocco",
            },
          },
          { "@type": "Place", name: "Medina, Marrakech" },
          { "@type": "Place", name: "Hivernage, Marrakech" },
          { "@type": "Place", name: "Gueliz, Marrakech" },
          { "@type": "Place", name: "Palmeraie, Marrakech" },
          { "@type": "Place", name: "Agdal, Marrakech" },
        ],
        availableService: PROCEDURE_SLUGS.map((slug) => {
          const item = SERVICE_TREE[slug];
          return {
            "@type": slug === "iv-therapy-marrakech" ? "MedicalTherapy" : "MedicalProcedure",
            name: item.title[loc] || item.title.en,
            description: item.description[loc] || item.description.en,
          };
        }),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Home Nursing & Medical Services",
          itemListElement: CATALOG_SLUGS.map((slug) => {
            const item = SERVICE_TREE[slug];
            return {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: item.shortTitle[loc] || item.shortTitle.en,
                description: item.subtitle[loc] || item.subtitle.en,
                url: `${BASE_URL}/${locale}/services/${slug}`,
              },
              areaServed: "Marrakech",
            };
          }),
        },
        potentialAction: {
          "@type": "ReserveAction",
          name: "Book a Nurse",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${PERSONAL_INFO.contact.whatsapp}?text=Hello%20Sanad%20Care`,
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
          result: {
            "@type": "Reservation",
            name: "Home Nursing Appointment",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        inLanguage: locale,
        mainEntity: FAQ_KEYS.map(([question, answer]) => ({
          "@type": "Question",
          name: tFaq(question),
          acceptedAnswer: {
            "@type": "Answer",
            text: tFaq(answer),
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Home />
    </>
  );
}
