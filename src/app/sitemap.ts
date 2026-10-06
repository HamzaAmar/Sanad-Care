import type { MetadataRoute } from "next";
import { BASE_URL } from "@/constants/domain";
import { LOCALES } from "@/constants/locale";
import { SERVICE_TREE } from "@/constants/services/serviceTreeData";

const STATIC_ROUTES = [
  "",
  "/contact-us",
  "/family",
  "/faq",
  "/patient",
  "/privacy",
  "/services",
  "/tourism",
  "/venipuncture",
  "/why-us",
];

const alternatesFor = (path: string) => ({
  languages: {
    ...Object.fromEntries(LOCALES.map((locale) => [locale, `${BASE_URL}/${locale}${path}`])),
    "x-default": `${BASE_URL}/en${path}`,
  },
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = STATIC_ROUTES.flatMap((route) => {
    return LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${route}`,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: alternatesFor(route),
    }));
  });

  const serviceEntries = Object.values(SERVICE_TREE).flatMap((item) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}/services/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: item.category === "pillar" ? 0.9 : 0.7,
      alternates: alternatesFor(`/services/${item.slug}`),
    })),
  );

  return [...staticEntries, ...serviceEntries];
}
