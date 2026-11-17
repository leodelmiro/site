import type { Metadata } from "next";
import { LocalizedPost, type LocalizedPostData } from "@/components/blog";
import { getPost, getPostSlugs } from "@/content/posts";

// Static export: only the posts found at build time exist.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const { versions } = await getPost(slug);
  const version = versions.en ?? versions.pt;
  // The <title> is set by LocalizedPost so it follows the chosen language.
  return { description: version?.meta.description };
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = await getPost(slug);

  // Both languages are rendered here, so the toggle switches instantly on the client.
  const data: LocalizedPostData = {
    date: post.date,
    versions: Object.fromEntries(
      Object.entries(post.versions).map(([locale, { meta, Content }]) => [
        locale,
        { title: meta.title, description: meta.description, body: <Content /> },
      ]),
    ),
  };

  return <LocalizedPost post={data} />;
}
