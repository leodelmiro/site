import type { Metadata } from "next";
import { LocalizedBlogIndex, type BlogIndexItem } from "@/components/blog";
import { en } from "@/content/en";
import { getAllPosts } from "@/content/posts";

export const metadata: Metadata = {
  description: en.blog.intro,
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  const items: BlogIndexItem[] = posts.map((post) => ({
    slug: post.slug,
    date: post.date,
    versions: Object.fromEntries(
      Object.entries(post.versions).map(([locale, { meta }]) => [
        locale,
        { title: meta.title, description: meta.description },
      ]),
    ),
  }));

  return <LocalizedBlogIndex posts={items} />;
}
