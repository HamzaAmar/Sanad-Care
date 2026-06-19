"use client";

import { useTranslations } from "next-intl";
import React from "react";

type Locale = "fr" | "en" | "ar";

interface StructuredDataProps {
  locale: Locale;
  baseUrl: string;
}

export default function VenipunctureStructuredData({ locale, baseUrl }: StructuredDataProps) {
  const pageUrl = `${baseUrl}/${locale}/venipuncture`;
  const t = useTranslations("venipuncture");

  // --- Shared Entity IDs (linked data graph) ---
  const businessId = `${pageUrl}#business`;
  const serviceId = `${pageUrl}#service`;
  const bloodTestId = `${pageUrl}#bloodTest`;
  const gymOfferId = `${pageUrl}#gymOffer`;
  const touristOfferId = `${pageUrl}#touristOffer`;
  const faqId = `${pageUrl}#faq`;
  const ratingId = `${pageUrl}#aggregateRating`;

  // --- FAQ builder (reuses your existing faq.q1..q8 / faq.a1..a8 keys) ---
  const faqMainEntity = Array.from({ length: 8 }, (_, i) => {
    const idx = i + 1;
    return {
      "@type": "Question" as const,
      name: t(`faq.q${idx}`),
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: t(`faq.a${idx}`),
      },
    };
  });

  // --- Schema Graph ---
  const schemaGraph = [
    // 1. PRIMARY ENTITY: MedicalBusiness
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": businessId,
      name: t("schema.businessName"),
      description: t("meta.description"),
      url: pageUrl,
      image: `${baseUrl}/nurse-venipuncture.png`,
      telephone: "+212-XXX-XXXXXX",
      email: "contact@yourdomain.com",
      priceRange: "$$",
      currenciesAccepted: "MAD, EUR, USD",
      paymentAccepted: t("schema.paymentAccepted"),
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "07:00",
          closes: "22:00",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Your Street Address",
        addressLocality: "Marrakech",
        addressRegion: "Marrakech-Safi",
        addressCountry: "MA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "31.6295",
        longitude: "-7.9811",
      },
      areaServed: [
        { "@type": "City", name: "Marrakech" },
        { "@type": "Place", name: "Gueliz, Marrakech" },
        { "@type": "Place", name: "Hivernage, Marrakech" },
        { "@type": "Place", name: "Menara, Marrakech" },
        { "@type": "Place", name: "Sidi Ghanem, Marrakech" },
        { "@type": "Place", name: "Palmeraie, Marrakech" },
        { "@type": "Place", name: "Targa, Marrakech" },
        { "@type": "Place", name: "Massira, Marrakech" },
        { "@type": "Place", name: "Daoudiate, Marrakech" },
        { "@type": "Place", name: "Medina, Marrakech" },
        { "@type": "Place", name: "Kasbah, Marrakech" },
      ],
      availableLanguage: [
        { "@type": "Language", name: "French", alternateName: "FR" },
        { "@type": "Language", name: "English", alternateName: "EN" },
        { "@type": "Language", name: "Arabic", alternateName: "AR" },
      ],
      medicalSpecialty: {
        "@type": "MedicalSpecialty",
        name: t("schema.specialtyPhlebotomy"),
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: t("schema.offerCatalogName"),
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: t("hero.badge"),
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTest",
              name: t("schema.testComplete"),
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalTest",
              name: t("schema.testSports"),
            },
          },
        ],
      },
      aggregateRating: {
        "@id": ratingId,
      },
    },

    // 2. SERVICE
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": serviceId,
      name: t("schema.serviceName"),
      description: t("meta.description"),
      provider: {
        "@id": businessId,
      },
      serviceType: t("schema.specialtyPhlebotomy"),
      areaServed: {
        "@id": businessId,
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceType: t("schema.serviceTypeHomeVisit"),
        servicePhone: {
          "@type": "ContactPoint",
          telephone: "+212-XXX-XXXXXX",
          contactType: t("schema.contactTypeBooking"),
          availableLanguage: ["French", "English", "Arabic"],
        },
        serviceSms: {
          "@type": "ContactPoint",
          telephone: "+212-XXX-XXXXXX",
          contactType: t("schema.contactTypeWhatsapp"),
          availableLanguage: ["French", "English", "Arabic"],
        },
      },
      offers: [
        {
          "@id": gymOfferId,
        },
        {
          "@id": touristOfferId,
        },
      ],
    },

    // 3. MEDICAL TEST
    {
      "@context": "https://schema.org",
      "@type": "BloodTest",
      "@id": bloodTestId,
      name: t("schema.bloodTestName"),
      description: t("schema.bloodTestDesc"),
      performedBy: {
        "@id": businessId,
      },
      preparation: [t("schema.prepPrescription"), t("schema.prepFasting")],
      normalRange: t("schema.normalRange"),
    },

    // 4. OFFER: Gym Discount
    {
      "@context": "https://schema.org",
      "@type": "Offer",
      "@id": gymOfferId,
      name: t("schema.offerGymName"),
      description: t("schema.offerGymDesc"),
      offeredBy: {
        "@id": businessId,
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "MAD",
        description: t("schema.offerGymPriceDesc"),
      },
      eligibleCustomerType: t("schema.eligibleGymMember"),
      validFor: {
        "@type": "LocationFeatureSpecification",
        name: t("schema.validForGyms"),
      },
    },

    // 5. OFFER: Tourist / Hotel
    {
      "@context": "https://schema.org",
      "@type": "Offer",
      "@id": touristOfferId,
      name: t("schema.offerTouristName"),
      description: t("schema.offerTouristDesc"),
      offeredBy: {
        "@id": businessId,
      },
      areaServed: {
        "@type": "City",
        name: "Marrakech",
      },
      eligibleCustomerType: t("schema.eligibleTourist"),
      availableAtOrFrom: {
        "@type": "Place",
        name: t("schema.availableAtHotels"),
      },
    },

    // 6. AGGREGATE RATING
    {
      "@context": "https://schema.org",
      "@type": "AggregateRating",
      "@id": ratingId,
      itemReviewed: {
        "@id": businessId,
      },
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "500",
      ratingCount: "500",
    },

    // 7. FAQ PAGE
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": faqId,
      mainEntity: faqMainEntity,
    },

    // 8. BREADCRUMB LIST
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: t("schema.breadcrumbHome"),
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: t("schema.breadcrumbPage"),
          item: pageUrl,
        },
      ],
    },

    // 9. WEBPAGE
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: t("meta.title"),
      description: t("meta.description"),
      inLanguage: t("meta.inLanguage"),
      isPartOf: {
        "@type": "WebSite",
        url: baseUrl,
        name: "Sanad Care",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${baseUrl}/nurse-venipuncture.png`,
      },
      mainEntity: {
        "@id": serviceId,
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
