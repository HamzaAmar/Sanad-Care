import type { ReadTimeResults } from "reading-time";

export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  publishedAt: string;
  lastModified: string;
  slug: string;
  language: string;
  id: string;
  author: {
    name: string;
    picture: string;
  };
  tags: string[];
  readingTime: ReadTimeResults;
  meta_title?: string;
  meta_description?: string;
  keywords?: string[];
}
