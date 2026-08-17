import type { LocaleCode } from "@/config/site.config";
import de, { type Dictionary } from "./de";
import tr from "./tr";

export const dictionaries: Record<LocaleCode, Dictionary> = { de, tr };

export function getDictionary(locale: LocaleCode): Dictionary {
  return dictionaries[locale];
}

export const LOCALES: { code: LocaleCode; label: string; flag: string; home: string }[] = [
  { code: "de", label: "Deutsch", flag: "🇩🇪", home: "/" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷", home: "/tr/" },
];

export type { Dictionary };
