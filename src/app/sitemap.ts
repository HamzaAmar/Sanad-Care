import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/api/blog";
import { BASE_URL } from "@/constants/domain";
import { LOCALES } from "@/constants/locale";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["", "/about-us", "/contact-us", "/faq", "/blogs"];

  const staticEntries = routes.flatMap((route) => {
    return LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    }));
  });

  const posts = getBlogPosts();
  const blogEntries = posts.flatMap((post) => {
    return {
      url: `${BASE_URL}/${post.metadata.language}/blogs/${post.metadata.id}`,
      lastModified: new Date(post.metadata.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...staticEntries, ...blogEntries];
}
