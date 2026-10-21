import type { Metadata } from "next";
import { RootDocument } from "@/components/RootDocument";
import { en } from "@/content/en";

export const metadata: Metadata = {
  description: en.meta.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang={en.htmlLang}>{children}</RootDocument>;
}
