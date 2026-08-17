import type { LocaleCode } from "@/config/site.config";
import { getDictionary } from "@/locales";
import { ICON_MAP, IconInfo } from "./Icons";
import SupportButton from "./SupportButton";
import { Section, SectionHeading } from "./ui";

/**
 * Device grid for the homepage: manufacturer / platform mark, device family,
 * platform note. The marks are used purely to describe compatibility — the
 * trademark disclaimer below the grid is part of the component on purpose.
 */
export default function DeviceTiles({ locale }: { locale: LocaleCode }) {
  const t = getDictionary(locale);
  const d = t.devices;

  return (
    <Section id={d.id} className="relative overflow-hidden border-y border-white/5 bg-ink-900/40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[24rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-gold-500/12 blur-[110px]" />
      </div>

      <SectionHeading title={d.tilesHeading} subtitle={d.tilesSubheading} />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {d.tiles.map((tile) => {
          const Mark = ICON_MAP[tile.icon] ?? ICON_MAP.tv;
          return (
            <div
              key={`${tile.title}-${tile.note}`}
              className="glass-strong group flex flex-col items-center rounded-2xl px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.05] ring-1 ring-inset ring-white/10 transition-colors group-hover:bg-white/[0.08]">
                <Mark className="h-8 w-8 text-mist-200 transition-colors group-hover:text-gold-200" />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-mist-100">{tile.title}</h3>
              <p className="mt-1 text-xs text-mist-500">{tile.note}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 text-center">
        <SupportButton label={d.cta} variant="outline" />
        <p className="flex max-w-xl items-start gap-2 text-xs leading-relaxed text-mist-500">
          <IconInfo className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{d.disclaimer}</span>
        </p>
        <p className="max-w-3xl text-[11px] leading-relaxed text-mist-500/80">{d.trademarkNote}</p>
      </div>
    </Section>
  );
}
