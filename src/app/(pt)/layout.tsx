import type { Metadata } from "next";
import { RootDocument } from "@/components/RootDocument";
import { pt } from "@/content/pt";

export const metadata: Metadata = {
  title: pt.meta.title,
  description: pt.meta.description,
  alternates: { languages: { en: "/" } },
};

export default function PortugueseLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang={pt.htmlLang}>{children}</RootDocument>;
}
