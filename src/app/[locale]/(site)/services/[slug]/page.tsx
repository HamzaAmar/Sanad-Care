import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { SERVICE_TREE } from "@/constants/services/serviceTreeData";
import { getPacks } from "@/constants/services/packs";
import ServiceDetail from "@/app/_components/pages/serviceDetail";
import type { LocaleKey } from "@/types/localeProps.interface";
import { BASE_URL } from "@/constants/domain";
import { PERSONAL_INFO } from "@/constants/personalInfo";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

const LOCALES: LocaleKey[] = ["en", "fr", "ar"];

/** schema.org expects full locale tags, not bare language codes. */
const OG_LOCALES: Record<LocaleKey, string> = {
  en: "en_US",
  fr: "fr_FR",
  ar: "ar_MA",
};

export async function generateStaticParams() {
  const paramsList: { locale: string; slug: string }[] = [];
  const slugs = Object.keys(SERVICE_TREE);

  for (const locale of LOCALES) {
    for (const slug of slugs) {
      paramsList.push({ locale, slug });
    }
  }

  return paramsList;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const item = SERVICE_TREE[slug];

  if (!item) {
    notFound();
  }

  const loc = locale as LocaleKey;
  const title = item.metaTitle[loc] || item.metaTitle.en;
  const description = item.metaDescription[loc] || item.metaDescription.en;
  const canonicalUrl = `${BASE_URL}/${locale}/services/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${BASE_URL}/en/services/${slug}`,
        fr: `${BASE_URL}/fr/services/${slug}`,
        ar: `${BASE_URL}/ar/services/${slug}`,
        "x-default": `${BASE_URL}/en/services/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      locale: OG_LOCALES[loc],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
  };
}

/**
 * Structured data for the service page.
 *
 * All 26 pages are a `Service`; condition pages add an `about: MedicalCondition`
 * rather than claiming to BE a medical condition. Monthly plans are modelled as
 * `Offer` with a `UnitPriceSpecification` billing duration so the recurring
 * nature is machine-readable.
 *
 * Deliberately absent: `aggregateRating` and `review`. They would be
 * self-serving for our own business and Google ignores them there.
 */
const buildGraph = (slug: string, loc: LocaleKey) => {
  const item = SERVICE_TREE[slug];
  const title = item.title[loc] || item.title.en;
  const description = item.description[loc] || item.description.en;
  const pageUrl = `${BASE_URL}/${loc}/services/${slug}`;
  const businessId = `${BASE_URL}/#business`;

  const packs = getPacks(item.packs);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      inLanguage: loc,
      about: { "@id": `${pageUrl}#service` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/${loc}` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${BASE_URL}/${loc}/services`,
        },
        { "@type": "ListItem", position: 3, name: item.shortTitle[loc] || item.shortTitle.en },
      ],
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: title,
      alternateName: item.shortTitle[loc] || item.shortTitle.en,
      description,
      serviceType: "Home nursing",
      provider: { "@id": businessId },
      areaServed: {
        "@type": "City",
        name: "Marrakech",
        containedInPlace: { "@type": "Country", name: "Morocco" },
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceType: "Home visit",
        availableLanguage: ["fr", "en", "ar"],
        servicePhone: {
          "@type": "ContactPoint",
          telephone: PERSONAL_INFO.phone,
          contactType: "customer service",
          availableLanguage: ["fr", "en", "ar"],
        },
      },
      ...(packs.length
        ? {
            offers: packs.map((pack) => ({
              "@type": "Offer",
              "@id": `${pageUrl}#pack-${pack.id}`,
              name: pack.name[loc] || pack.name.en,
              price: pack.priceMad,
              priceCurrency: "MAD",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: pack.priceMad,
                priceCurrency: "MAD",
                billingDuration: "P1M",
              },
              offeredBy: { "@id": businessId },
            })),
          }
        : {}),
      ...(item.category === "condition"
        ? { about: { "@type": "MedicalCondition", name: title } }
        : {}),
    },
    {
      "@type": "MedicalBusiness",
      "@id": businessId,
      name: PERSONAL_INFO.name,
      url: PERSONAL_INFO.domain,
      telephone: PERSONAL_INFO.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: PERSONAL_INFO.information.address,
        addressLocality: "Marrakech",
        addressCountry: "MA",
      },
      areaServed: { "@type": "City", name: "Marrakech" },
      medicalSpecialty: "Nursing",
      availableLanguage: ["fr", "en", "ar"],
    },
  ];

  const faqs = item.faqs[loc] || item.faqs.en;
  if (faqs.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
};

export default async function Page({ params }: PageProps) {
  const { locale, slug } = await params;
  const item = SERVICE_TREE[slug];

  if (!item) {
    notFound();
  }

  setRequestLocale(locale);
  const loc = locale as LocaleKey;
  const jsonLd = JSON.stringify(buildGraph(slug, loc)).replace(/</g, "\\u003c");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <ServiceDetail slug={slug} locale={loc} />
    </>
  );
}
