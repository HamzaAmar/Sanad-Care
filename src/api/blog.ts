// import fs from 'fs';

import fs from "node:fs";
import path from "node:path";
import { compareDesc } from "date-fns";

import readingTime from "reading-time";
import { parse } from "yaml";
import type { BlogPost } from "@/types/post.type";

function parseFrontmatter(fileContent: string) {
  // Split the file content into frontmatter and content

  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match?.[1] ?? "";
  const content = fileContent.replace(frontmatterRegex, "").trim();
  // Parse the frontmatter as YAML

  const frontmatter = parse(frontMatterBlock);
  const stats = readingTime(content);
  const metadata = {
    ...frontmatter,
    readingTime: stats,
  } as BlogPost;

  return {
    metadata,
    content,
  };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(fileContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    return {
      metadata,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content")).sort((first, second) => {
    return compareDesc(new Date(first.metadata.publishedAt), new Date(second.metadata.publishedAt));
  });
}

export function getBlogPostsWithLimit(max = 4) {
  const blogs = getBlogPosts();
  const length = Math.min(max, blogs.length);
  return Array.from({ length }).map((_, index) => blogs[index]);
}

export function getBlogPostsByIdSlug(id: string) {
  return getBlogPosts().filter(({ metadata }) => metadata.id === id);
}
