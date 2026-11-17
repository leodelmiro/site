"use client";

import { HomePage } from "@/components/HomePage";
import { useLocale } from "@/components/useLocale";

export function LocalizedHome() {
  const { dict, toggleLocale } = useLocale();

  return (
    <>
      {/* React hoists this into <head>; it lives here so it follows the chosen language. */}
      <title>{dict.meta.title}</title>
      <HomePage dict={dict} onToggleLocale={toggleLocale} />
    </>
  );
}
