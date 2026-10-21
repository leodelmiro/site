import type { Metadata } from "next";
import { RootDocument } from "@/components/RootDocument";
import { en } from "@/content/en";

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
  alternates: { languages: { "pt-BR": "/pt" } },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang={en.htmlLang}>{children}</RootDocument>;
}
