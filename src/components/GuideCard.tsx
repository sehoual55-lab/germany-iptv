import Link from "next/link";
import { IconArrow } from "./Icons";

export default function GuideCard({
  href,
  title,
  body,
  readMore,
}: {
  href: string;
  title: string;
  body: string;
  readMore: string;
}) {
  return (
    <article className="glass group relative flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/35">
      <h3 className="text-lg font-semibold text-mist-100">
        <Link href={href} className="after:absolute after:inset-0">
          {title}
        </Link>
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-mist-400">{body}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition-colors group-hover:text-gold-200">
        {readMore}
        <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </article>
  );
}
