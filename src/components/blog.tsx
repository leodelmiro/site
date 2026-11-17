"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/SiteShell";
import { useLocale } from "@/components/useLocale";
import type { Locale } from "@/content/types";

export type PostSummary = { title: string; description: string };

/** A post as the client sees it: each language already rendered on the server. */
export type LocalizedPostData = {
  date: string;
  versions: Partial<Record<Locale, PostSummary & { body: ReactNode }>>;
};

export type BlogIndexItem = {
  slug: string;
  date: string;
  versions: Partial<Record<Locale, PostSummary>>;
};

const htmlLang: Record<Locale, string> = { en: "en", pt: "pt-BR" };

/** The reader's language when the post has it, otherwise the one it was written in. */
function pickVersion<T>(versions: Partial<Record<Locale, T>>, locale: Locale) {
  const other: Locale = locale === "en" ? "pt" : "en";
  const shown = versions[locale] ? locale : other;
  return { version: versions[shown] as T, lang: shown, isFallback: shown !== locale };
}

function PostDate({ date, locale }: { date: string; locale: Locale }) {
  // Dates are calendar days, so format in UTC to avoid shifting by the viewer's time zone.
  const label = new Intl.DateTimeFormat(htmlLang[locale], {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
  return (
    <time dateTime={date} className="font-mono text-sm text-muted">
      {label}
    </time>
  );
}

export function LocalizedBlogIndex({ posts }: { posts: BlogIndexItem[] }) {
  const { locale, dict, toggleLocale } = useLocale();

  return (
    <SiteShell dict={dict} onToggleLocale={toggleLocale}>
      <title>{dict.blog.title}</title>
      <section aria-labelledby="blog-heading" className="pt-16 pb-16 sm:pt-24">
        <h1 id="blog-heading" className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {dict.blog.heading}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{dict.blog.intro}</p>

        {posts.length === 0 ? (
          <p className="mt-12 text-muted">{dict.blog.empty}</p>
        ) : (
          <ul className="mt-12 grid gap-4">
            {posts.map((post) => {
              const { version, lang, isFallback } = pickVersion(post.versions, locale);
              return (
                <li
                  key={post.slug}
                  className="group relative rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent"
                >
                  <PostDate date={post.date} locale={locale} />
                  <h2 className="mt-2 text-xl font-semibold tracking-tight" lang={htmlLang[lang]}>
                    {/* The pseudo-element stretches the link over the whole card. */}
                    <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:content-['']">
                      {version.title}
                    </Link>
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted" lang={htmlLang[lang]}>
                    {version.description}
                  </p>
                  {isFallback && (
                    <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted">
                      {dict.blog.onlyInOtherLanguage}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </SiteShell>
  );
}

export function LocalizedPost({ post }: { post: LocalizedPostData }) {
  const { locale, dict, toggleLocale } = useLocale();
  const { version, lang, isFallback } = pickVersion(post.versions, locale);

  return (
    <SiteShell dict={dict} onToggleLocale={toggleLocale}>
      <title>{`${version.title} · Leonardo Delmiro`}</title>
      <article className="mx-auto max-w-2xl pt-12 pb-16 sm:pt-16">
        <Link href="/blog" className="font-mono text-sm text-muted transition-colors hover:text-accent">
          <span aria-hidden="true">← </span>
          {dict.blog.backLabel}
        </Link>
        <header className="mt-8">
          <PostDate date={post.date} locale={locale} />
          <h1
            lang={htmlLang[lang]}
            className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {version.title}
          </h1>
          {isFallback && (
            <p role="note" className="mt-4 rounded-md border border-border bg-surface px-4 py-3 text-sm text-muted">
              {dict.blog.onlyInOtherLanguage}
            </p>
          )}
        </header>
        <div lang={htmlLang[lang]} className="mt-10">
          {version.body}
        </div>
      </article>
    </SiteShell>
  );
}
