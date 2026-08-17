import Link from "next/link";
import type { ReactNode } from "react";
import { IconArrow } from "./Icons";

/* -------------------------------------------------------------------------- */
/*  Section shell                                                             */
/* -------------------------------------------------------------------------- */

export function Section({
  id,
  children,
  className = "",
  tight = false,
  wide = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tight?: boolean;
  /** Uses the wider 96rem container instead of the default 78rem one. */
  wide?: boolean;
}) {
  return (
    <section id={id} className={`relative ${tight ? "py-14 sm:py-16" : "py-20 sm:py-28"} ${className}`}>
      <div className={wide ? "wrap-wide" : "wrap"}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  as: As = "h2",
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  as?: "h1" | "h2" | "h3";
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">{eyebrow}</p>
      ) : null}
      <As className="text-balance text-3xl font-bold leading-tight tracking-tight text-mist-100 sm:text-4xl">
        {title}
      </As>
      {subtitle ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-mist-400 sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Buttons                                                                   */
/* -------------------------------------------------------------------------- */

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 disabled:cursor-not-allowed disabled:opacity-60";

export const buttonStyles = {
  primary:
    `${buttonBase} bg-linear-to-r from-gold-300 via-gold-400 to-gold-300 px-6 py-3.5 text-ink-950 shadow-[0_16px_45px_-18px_rgba(229,184,73,0.75)] hover:brightness-110 hover:shadow-[0_20px_55px_-16px_rgba(229,184,73,0.9)] active:scale-[0.98]`,
  secondary: `${buttonBase} glass-soft px-6 py-3.5 text-mist-100 hover:border-gold-400/40 hover:text-gold-200 active:scale-[0.98]`,
  ghost: `${buttonBase} px-4 py-2 text-mist-300 hover:text-gold-200`,
  outline: `${buttonBase} border border-gold-400/40 px-6 py-3.5 text-gold-200 hover:bg-gold-400/10 active:scale-[0.98]`,
};

export function CtaLink({
  href,
  variant = "primary",
  children,
  className = "",
  withArrow = false,
}: {
  href: string;
  variant?: keyof typeof buttonStyles;
  children: ReactNode;
  className?: string;
  withArrow?: boolean;
}) {
  return (
    <Link href={href} className={`${buttonStyles[variant]} ${className}`}>
      {children}
      {withArrow ? <IconArrow className="h-4 w-4" /> : null}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*  Decorative background                                                     */
/* -------------------------------------------------------------------------- */

export function AmbientGlow({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-gold-500/12 blur-[120px] animate-drift" />
      <div className="absolute -bottom-52 -left-24 h-[30rem] w-[30rem] rounded-full bg-flag-red/10 blur-[130px]" />
      <div className="absolute -right-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-ink-600/50 blur-[110px]" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  JSON-LD                                                                   */
/* -------------------------------------------------------------------------- */

export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Prose wrapper for guide/legal articles                                    */
/* -------------------------------------------------------------------------- */

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div
      className="max-w-none space-y-5 text-base leading-relaxed text-mist-300
        [&_a]:font-medium [&_a]:text-gold-300 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-gold-200
        [&_h2]:mt-12 [&_h2]:scroll-mt-28 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-mist-100 sm:[&_h2]:text-3xl
        [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-mist-100
        [&_li]:leading-relaxed
        [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6
        [&_strong]:text-mist-100
        [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6"
    >
      {children}
    </div>
  );
}
