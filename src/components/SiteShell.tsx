import Link from "next/link";
import type { ReactNode } from "react";
import type { Dictionary } from "@/content/types";

type SiteShellProps = {
  dict: Dictionary;
  onToggleLocale: () => void;
  /** On the home page the section links are in-page anchors; elsewhere they lead back to it. */
  isHome?: boolean;
  children: ReactNode;
};

function Header({ dict, onToggleLocale, isHome }: Omit<SiteShellProps, "children">) {
  const home = isHome ? "" : "/";
  const links = [
    { href: `${home}#work`, label: dict.nav.work },
    { href: `${home}#projects`, label: dict.nav.projects },
    { href: `${home}#experience`, label: dict.nav.experience },
    { href: "/blog", label: dict.nav.blog },
    { href: `${home}#contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={isHome ? "#top" : "/"} className="font-semibold tracking-tight">
          Leonardo Delmiro
        </Link>
        <div className="flex items-center gap-1 text-sm">
          <nav aria-label={dict.nav.label} className="hidden sm:block">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded px-2 py-2 text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* The section links are hidden on phones, but the blog still needs a way in. */}
          <Link
            href="/blog"
            className="rounded px-2 py-2 text-muted transition-colors hover:text-foreground sm:hidden"
          >
            {dict.nav.blog}
          </Link>
          <button
            type="button"
            onClick={onToggleLocale}
            className="ml-2 min-h-8 min-w-10 rounded border border-border px-2 font-mono text-xs transition-colors hover:border-accent hover:text-accent"
          >
            {dict.nav.switchLabel}
            {/* Keeps the visible label in the accessible name (WCAG 2.5.3). */}
            <span className="sr-only" lang={dict.locale === "en" ? "pt-BR" : "en"}>
              {` · ${dict.nav.switchLang}`}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export function SiteShell({ dict, onToggleLocale, isHome = false, children }: SiteShellProps) {
  return (
    <>
      <a
        href="#content"
        className="sr-only z-20 rounded bg-foreground px-4 py-2 text-background focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {dict.nav.skipToContent}
      </a>
      <Header dict={dict} onToggleLocale={onToggleLocale} isHome={isHome} />
      <main id="content" className="mx-auto max-w-4xl px-4 sm:px-6">
        {children}
      </main>
      <footer className="border-t border-border">
        <p className="mx-auto max-w-4xl px-4 py-8 text-sm text-muted sm:px-6">
          Leonardo Delmiro · {dict.footer}
        </p>
      </footer>
    </>
  );
}
