import { PERSONAL_INFO } from "@/constants/personalInfo";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${PERSONAL_INFO.domain}/sitemap.xml`,
    host: `${PERSONAL_INFO.domain}`,
  };
}
