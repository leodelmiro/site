import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";
import type { Locale } from "./types";

/**
 * Each post is a folder in src/content/posts/ named after its slug, holding `en.mdx`, `pt.mdx`
 * or both. Every file exports its own `metadata` (see PostMeta). This module reads the disk,
 * so it only runs on the server, at build time.
 */

export type PostMeta = {
  title: string;
  description: string;
  /** ISO date, e.g. "2026-11-17". */
  date: string;
};

export type PostVersion = {
  meta: PostMeta;
  Content: ComponentType;
};

export type Post = {
  slug: string;
  date: string;
  versions: Partial<Record<Locale, PostVersion>>;
};

const POSTS_DIR = path.join(process.cwd(), "src", "content", "posts");
const LOCALES: Locale[] = ["en", "pt"];

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

function assertMeta(meta: unknown, file: string): asserts meta is PostMeta {
  const m = meta as Partial<PostMeta> | undefined;
  const valid =
    typeof m?.title === "string" &&
    typeof m.description === "string" &&
    typeof m.date === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(m.date);
  if (!valid) {
    throw new Error(
      `${file} needs \`export const metadata = { title: "…", description: "…", date: "YYYY-MM-DD" }\``,
    );
  }
}

async function loadVersion(slug: string, locale: Locale): Promise<PostVersion | null> {
  const file = path.join(POSTS_DIR, slug, `${locale}.mdx`);
  if (!fs.existsSync(file)) return null;

  const mod: { default: ComponentType; metadata?: unknown } = await import(
    `./posts/${slug}/${locale}.mdx`
  );
  assertMeta(mod.metadata, file);
  return { meta: mod.metadata, Content: mod.default };
}

export async function getPost(slug: string): Promise<Post> {
  const versions: Post["versions"] = {};
  for (const locale of LOCALES) {
    const version = await loadVersion(slug, locale);
    if (version) versions[locale] = version;
  }

  const first = versions.en ?? versions.pt;
  if (!first) throw new Error(`src/content/posts/${slug}/ has no en.mdx or pt.mdx`);
  return { slug, date: first.meta.date, versions };
}

/** All posts, newest first. */
export async function getAllPosts(): Promise<Post[]> {
  const posts = await Promise.all(getPostSlugs().map(getPost));
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}
