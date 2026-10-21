"use client";

import { useEffect, useSyncExternalStore } from "react";
import { HomePage } from "@/components/HomePage";
import { en } from "@/content/en";
import { pt } from "@/content/pt";
import type { Locale } from "@/content/types";

const dictionaries = { en, pt };
const STORAGE_KEY = "locale";

// In memory first, so the toggle still works when storage is blocked (private mode).
let currentLocale: Locale | null = null;
const listeners = new Set<() => void>();

function readSavedLocale(): Locale | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "en" || saved === "pt" ? saved : null;
  } catch {
    return null;
  }
}

function setLocale(locale: Locale) {
  currentLocale = locale;
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // The choice just won't persist across visits.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const getSnapshot = (): Locale => currentLocale ?? readSavedLocale() ?? "en";

// The static HTML is rendered in English; a saved choice is applied after hydration.
const getServerSnapshot = (): Locale => "en";

export function LocalizedHome() {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const dict = dictionaries[locale];

  useEffect(() => {
    document.documentElement.lang = dict.htmlLang;
  }, [dict.htmlLang]);

  return (
    <>
      {/* React hoists this into <head>; it lives here so it follows the chosen language. */}
      <title>{dict.meta.title}</title>
      <HomePage dict={dict} onToggleLocale={() => setLocale(locale === "en" ? "pt" : "en")} />
    </>
  );
}
