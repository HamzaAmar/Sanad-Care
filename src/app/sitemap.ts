import type { MetadataRoute } from "next";
import { BASE_URL } from "@/constants/domain";
import { LOCALES } from "@/constants/locale";
import { SERVICE_TREE } from "@/constants/services/serviceTreeData";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    "",
    "/contact-us",
    "/family",
    "/faq",
    "/patient",
    "/qr-code",
    "/services",
    "/tourism",
    "/why-us",
  ];

  const staticEntries = routes.flatMap((route) => {
    return LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((alt) => [alt, `${BASE_URL}/${alt}${route}`]),
        ),
      },
    }));
  });

  // The 26 service pages were missing from the sitemap entirely.
  const serviceEntries = Object.values(SERVICE_TREE).flatMap((item) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}/services/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: item.category === "pillar" ? 0.9 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((alt) => [alt, `${BASE_URL}/${alt}/services/${item.slug}`]),
        ),
      },
    })),
  );

  return [...staticEntries, ...serviceEntries];
}
