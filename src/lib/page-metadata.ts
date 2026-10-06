import type { Metadata } from "next";
import { BASE_URL } from "@/constants/domain";
import { LOCALES } from "@/constants/locale";

const OG_LOCALES: Record<string, string> = {
  en: "en_US",
  fr: "fr_FR",
  ar: "ar_MA",
};

type PageMetadataInput = {
  locale: string;
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  image?: string;
  imageAlt?: string;
};

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  ogTitle,
  ogDescription,
  image = "/og-image.jpg",
  imageAlt,
}: PageMetadataInput): Metadata {
  const canonical = `${BASE_URL}/${locale}${path}`;
  const socialTitle = ogTitle ?? title;
  const socialDescription = ogDescription ?? description;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(LOCALES.map((l) => [l, `${BASE_URL}/${l}${path}`])),
        "x-default": `${BASE_URL}/en${path}`,
      },
    },
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      url: canonical,
      siteName: "Sanad Care",
      type: "website",
      locale: OG_LOCALES[locale] ?? locale,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt ?? socialTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [image],
    },
  };
}
