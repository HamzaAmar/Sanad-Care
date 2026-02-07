import type { MetadataRoute } from "next";
import { BASE_URL } from "@/constants/domain";
import { LOCALES } from "@/constants/locale";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    "",
    "/contact-us",
    "/doctor",
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
    }));
  });

  return staticEntries;
}
