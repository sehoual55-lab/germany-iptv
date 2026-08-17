import type { LocaleCode } from "@/config/site.config";
import { IconInfo } from "./Icons";

const COPY = {
  de: {
    title: "Vor dem Livegang ausfüllen",
    body: "Dieser Abschnitt enthält Platzhalter. Ergänzen Sie Ihre tatsächlichen Angaben in der Datei src/config/site.config.ts beziehungsweise direkt in diesem Dokument und lassen Sie die Texte vor der Veröffentlichung rechtlich prüfen.",
  },
  tr: {
    title: "Yayına almadan önce doldurun",
    body: "Bu bölüm yer tutucu metin içerir. Gerçek bilgilerinizi src/config/site.config.ts dosyasında veya doğrudan bu belgede tamamlayın ve yayımlamadan önce metinleri hukuki açıdan kontrol ettirin.",
  },
} as const;

/** Visible reminder that a legal document still contains placeholders. */
export default function PlaceholderNotice({ locale }: { locale: LocaleCode }) {
  const c = COPY[locale];
  return (
    <div className="not-prose my-6 flex items-start gap-3 rounded-2xl border border-gold-400/30 bg-gold-400/[0.06] p-5">
      <IconInfo className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
      <div>
        <p className="text-sm font-semibold text-gold-200">{c.title}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-mist-400">{c.body}</p>
      </div>
    </div>
  );
}
