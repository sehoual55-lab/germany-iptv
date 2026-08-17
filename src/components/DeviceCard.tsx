import { ICON_MAP } from "./Icons";

export default function DeviceCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  const Icon = ICON_MAP[icon] ?? ICON_MAP.tv;
  return (
    <article className="glass-soft flex h-full flex-col rounded-2xl p-5 transition-colors duration-300 hover:border-gold-400/30">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-gold-300">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-base font-semibold text-mist-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-mist-400">{body}</p>
    </article>
  );
}
