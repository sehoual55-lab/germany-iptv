import type { SVGProps } from "react";
import { BRAND_LOGOS } from "./BrandLogos";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  focusable: false,
};

export function IconSetup(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 6h16M4 12h10M4 18h7" />
      <circle cx="18" cy="17" r="3" />
      <path d="m20.4 19.4 1.4 1.4" />
    </svg>
  );
}

export function IconPackage(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 3.5 7.5v9L12 21l8.5-4.5v-9L12 3Z" />
      <path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" />
    </svg>
  );
}

export function IconDevices(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="2" y="4" width="14" height="10" rx="2" />
      <path d="M6 18h6" />
      <rect x="17" y="10" width="5" height="10" rx="1.6" />
    </svg>
  );
}

export function IconSupport(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.6" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.6" />
      <path d="M19.5 19v.6a2.4 2.4 0 0 1-2.4 2.4H13" />
    </svg>
  );
}

export function IconShield(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3l7 3v5.5c0 4.3-2.9 8.1-7 9.5-4.1-1.4-7-5.2-7-9.5V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconSparkle(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3.5 13.8 9l5.5 1.8-5.5 1.8L12 18.1l-1.8-5.5L4.7 10.8 10.2 9 12 3.5Z" />
      <path d="M19 16.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </svg>
  );
}

export function IconTv(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="2.5" y="4.5" width="19" height="12" rx="2" />
      <path d="M8 20.5h8M12 16.5v4" />
    </svg>
  );
}

export function IconAndroid(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 11a6 6 0 0 1 12 0v6.5A1.5 1.5 0 0 1 16.5 19h-9A1.5 1.5 0 0 1 6 17.5V11Z" />
      <path d="m7.5 6-1.2-2M16.5 6l1.2-2M9.5 9.5h.01M14.5 9.5h.01" />
    </svg>
  );
}

export function IconFire(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3s4.5 3.4 4.5 8a4.5 4.5 0 0 1-9 0c0-1.4.5-2.6 1.2-3.6.3 1.2 1 2 1.9 2.2C11 8 12 5.5 12 3Z" />
      <path d="M8 19.5h8" />
    </svg>
  );
}

export function IconMobile(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.4" />
      <path d="M10.5 5.5h3M11 18.5h2" />
    </svg>
  );
}

export function IconDesktop(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="2.5" y="4" width="19" height="12.5" rx="2" />
      <path d="M7.5 20.5h9l-1-4h-7l-1 4Z" />
    </svg>
  );
}

export function IconPlayer(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8.5 6 3.5-6 3.5v-7Z" />
    </svg>
  );
}

export function IconBox(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="2.5" y="7" width="19" height="10" rx="2" />
      <path d="M6 12h.01M9.5 12h5.5" />
      <path d="M6 20h12" />
    </svg>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function IconChevron(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconArrow(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconGlobe(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9.5h17M3.5 14.5h17M12 3c2.4 2.4 3.6 5.4 3.6 9S14.4 18.6 12 21c-2.4-2.4-3.6-5.4-3.6-9S9.6 5.4 12 3Z" />
    </svg>
  );
}

export function IconMail(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.4" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function IconPhone(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6.2 3.5h3l1.5 4-2 1.4a12 12 0 0 0 6.4 6.4l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function IconChat(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M20.5 12.5c0 4-3.8 7-8.5 7-1 0-2-.1-2.9-.4L4 21l1.4-3.6A6.9 6.9 0 0 1 3.5 12.5c0-4 3.8-7 8.5-7s8.5 3 8.5 7Z" />
    </svg>
  );
}

export function IconMenu(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function IconInfo(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </svg>
  );
}

export function IconScale(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 4v16M7 20h10M5 8h14M5 8 2.5 14h5L5 8Zm14 0-2.5 6h5L19 8Z" />
    </svg>
  );
}


export function IconTablet(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="3" width="17" height="18" rx="2.4" />
      <path d="M10.5 18h3" />
    </svg>
  );
}

export function IconLaptop(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="4" y="4.5" width="16" height="11" rx="1.8" />
      <path d="M2 19h20M9.5 19l.5-1.5h4l.5 1.5" />
    </svg>
  );
}

export function IconMonitor(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="2.5" y="4" width="19" height="12.5" rx="2" />
      <path d="M12 16.5V20M8.5 20h7" />
    </svg>
  );
}

export const ICON_MAP: Record<string, (p: IconProps) => React.ReactElement> = {
  setup: IconSetup,
  package: IconPackage,
  devices: IconDevices,
  support: IconSupport,
  shield: IconShield,
  sparkle: IconSparkle,
  tv: IconTv,
  android: IconAndroid,
  fire: IconFire,
  mobile: IconMobile,
  desktop: IconDesktop,
  tablet: IconTablet,
  laptop: IconLaptop,
  monitor: IconMonitor,
  player: IconPlayer,
  box: IconBox,
  globe: IconGlobe,
  mail: IconMail,
  phone: IconPhone,
  chat: IconChat,
  info: IconInfo,
  scale: IconScale,
  // Manufacturer word-marks (fill-based). Registered last so a brand key such
  // as "android" or "windows" resolves to the logo rather than the line icon.
  ...BRAND_LOGOS,
};
