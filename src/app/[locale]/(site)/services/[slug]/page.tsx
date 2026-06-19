import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { SERVICE_TREE } from "@/constants/services/serviceTreeData";
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

export async function generateStaticParams() {
  const paramsList: { locale: string; slug: string }[] = [];
  const locales = ["en", "fr", "ar"];
  const slugs = Object.keys(SERVICE_TREE);

  for (const locale of locales) {
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
    return {
      title: "Service Not Found - Sanad Care",
      description: "The requested medical care or nursing service was not found.",
    };
  }

  const loc = locale as LocaleKey;
  const title = item.metaTitle[loc] || item.metaTitle.en;
  const description = item.metaDescription[loc] || item.metaDescription.en;
  const keywordsStr = (item.keywords[loc] || item.keywords.en).join(", ");

  const canonicalUrl = `${BASE_URL}/${locale}/services/${slug}`;

  return {
    title: title,
    description: description,
    keywords: keywordsStr,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${BASE_URL}/en/services/${slug}`,
        fr: `${BASE_URL}/fr/services/${slug}`,
        ar: `${BASE_URL}/ar/services/${slug}`,
      },
    },
    openGraph: {
      title: title,
      description: description,
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
      locale: locale,
    },
    twitter: {
      title: title,
      description: description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale, slug } = await params;
  const item = SERVICE_TREE[slug];

  if (!item) {
    notFound();
  }

  setRequestLocale(locale);
  const loc = locale as LocaleKey;

  // Generate dynamic JSON-LD Schema
  const title = item.title[loc] || item.title.en;
  const description = item.description[loc] || item.description.en;

  const jsonLd =
    item.category === "condition"
      ? {
          "@context": "https://schema.org",
          "@type": "MedicalCondition",
          name: title,
          description: description,
          possibleTreatment: [
            {
              "@type": "MedicalTherapy",
              name: "Home Nursing Care & Continuous Monitoring",
            },
          ],
        }
      : {
          "@context": "https://schema.org",
          "@type": "Service",
          name: title,
          description: description,
          provider: {
            "@type": "MedicalBusiness",
            name: PERSONAL_INFO.name,
            image: `${PERSONAL_INFO.domain}/og-image.jpg`,
            priceRange: "150 MAD - 8000 MAD",
            telephone: PERSONAL_INFO.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: PERSONAL_INFO.information.address,
              addressLocality: "Marrakech",
              addressCountry: "MA",
            },
          },
        };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetail slug={slug} locale={loc} />
    </>
  );
}
