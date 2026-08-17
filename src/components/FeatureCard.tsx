import { ICON_MAP } from "./Icons";

export default function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  const Icon = ICON_MAP[icon] ?? ICON_MAP.sparkle;
  return (
    <article className="glass group h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/35 sm:p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-gold-400/20 to-flag-red/10 text-gold-300 ring-1 ring-inset ring-white/10 transition-colors group-hover:text-gold-200">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-mist-100">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-mist-400">{body}</p>
    </article>
  );
}
