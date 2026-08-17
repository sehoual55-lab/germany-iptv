/**
 * Original abstract illustration of a TV, a tablet and a phone showing a
 * generic streaming interface. Pure inline SVG — no third-party artwork,
 * no channel logos, no photographs of people.
 */
export default function StreamingVisual({ alt }: { alt: string }) {
  return (
    <svg
      viewBox="0 0 640 460"
      role="img"
      aria-label={alt}
      className="h-auto w-full max-w-xl drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]"
    >
      <defs>
        <linearGradient id="gi-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#101a35" />
          <stop offset="55%" stopColor="#0a1226" />
          <stop offset="100%" stopColor="#141d36" />
        </linearGradient>
        <linearGradient id="gi-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f6e2a6" />
          <stop offset="50%" stopColor="#e5b849" />
          <stop offset="100%" stopColor="#a97c17" />
        </linearGradient>
        <linearGradient id="gi-frame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a3556" />
          <stop offset="100%" stopColor="#0d1424" />
        </linearGradient>
        <linearGradient id="gi-hero-tile" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c8102e" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#e5b849" stopOpacity="0.35" />
        </linearGradient>
        <filter id="gi-blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="26" />
        </filter>
      </defs>

      {/* ambient glow */}
      <ellipse cx="320" cy="200" rx="240" ry="140" fill="#e5b849" opacity="0.14" filter="url(#gi-blur)" />

      {/* TV */}
      <g>
        <rect x="70" y="40" width="500" height="290" rx="18" fill="url(#gi-frame)" />
        <rect x="82" y="52" width="476" height="266" rx="12" fill="url(#gi-screen)" />

        {/* top bar */}
        <rect x="104" y="74" width="76" height="9" rx="4.5" fill="url(#gi-gold)" opacity="0.9" />
        <rect x="192" y="74" width="42" height="9" rx="4.5" fill="#cfd8ea" opacity="0.35" />
        <rect x="246" y="74" width="42" height="9" rx="4.5" fill="#cfd8ea" opacity="0.2" />
        <circle cx="530" cy="79" r="6" fill="#cfd8ea" opacity="0.3" />

        {/* hero tile */}
        <rect x="104" y="100" width="270" height="130" rx="12" fill="url(#gi-hero-tile)" />
        <rect x="104" y="100" width="270" height="130" rx="12" fill="none" stroke="#e5b849" strokeOpacity="0.35" />
        <circle cx="150" cy="200" r="17" fill="#e5b849" opacity="0.95" />
        <path d="M145 193.5 L159 200 L145 206.5 Z" fill="#04060d" />
        <rect x="178" y="188" width="120" height="9" rx="4.5" fill="#f4f7fc" opacity="0.85" />
        <rect x="178" y="204" width="80" height="7" rx="3.5" fill="#f4f7fc" opacity="0.45" />

        {/* side tiles */}
        <rect x="388" y="100" width="146" height="60" rx="10" fill="#1d2947" opacity="0.85" />
        <rect x="400" y="116" width="70" height="8" rx="4" fill="#cfd8ea" opacity="0.4" />
        <rect x="400" y="132" width="46" height="6" rx="3" fill="#cfd8ea" opacity="0.22" />
        <rect x="388" y="170" width="146" height="60" rx="10" fill="#1d2947" opacity="0.6" />
        <rect x="400" y="186" width="58" height="8" rx="4" fill="#cfd8ea" opacity="0.32" />
        <rect x="400" y="202" width="80" height="6" rx="3" fill="#cfd8ea" opacity="0.18" />

        {/* bottom row */}
        <rect x="104" y="248" width="98" height="52" rx="9" fill="#141d36" />
        <rect x="212" y="248" width="98" height="52" rx="9" fill="#141d36" opacity="0.8" />
        <rect x="320" y="248" width="98" height="52" rx="9" fill="#141d36" opacity="0.6" />
        <rect x="428" y="248" width="106" height="52" rx="9" fill="#141d36" opacity="0.4" />

        {/* progress line */}
        <rect x="104" y="238" width="430" height="3" rx="1.5" fill="#cfd8ea" opacity="0.14" />
        <rect x="104" y="238" width="168" height="3" rx="1.5" fill="url(#gi-gold)" />

        {/* stand */}
        <rect x="286" y="330" width="68" height="34" rx="6" fill="#182240" />
        <rect x="228" y="362" width="184" height="12" rx="6" fill="url(#gi-frame)" />
      </g>

      {/* Tablet */}
      <g>
        <rect x="18" y="228" width="132" height="182" rx="14" fill="url(#gi-frame)" />
        <rect x="27" y="240" width="114" height="158" rx="8" fill="url(#gi-screen)" />
        <rect x="39" y="256" width="56" height="7" rx="3.5" fill="url(#gi-gold)" opacity="0.85" />
        <rect x="39" y="274" width="90" height="46" rx="7" fill="#1d2947" />
        <circle cx="60" cy="297" r="10" fill="#e5b849" opacity="0.9" />
        <path d="M56.5 292.5 L65 297 L56.5 301.5 Z" fill="#04060d" />
        <rect x="39" y="330" width="42" height="34" rx="6" fill="#141d36" />
        <rect x="87" y="330" width="42" height="34" rx="6" fill="#141d36" opacity="0.65" />
        <rect x="39" y="374" width="66" height="6" rx="3" fill="#cfd8ea" opacity="0.25" />
      </g>

      {/* Phone */}
      <g>
        <rect x="502" y="252" width="104" height="186" rx="18" fill="url(#gi-frame)" />
        <rect x="511" y="264" width="86" height="162" rx="12" fill="url(#gi-screen)" />
        <rect x="540" y="272" width="28" height="5" rx="2.5" fill="#04060d" />
        <rect x="522" y="290" width="46" height="7" rx="3.5" fill="url(#gi-gold)" opacity="0.85" />
        <rect x="522" y="306" width="64" height="42" rx="7" fill="#1d2947" />
        <circle cx="542" cy="327" r="9" fill="#e5b849" opacity="0.9" />
        <path d="M539 323 L546.5 327 L539 331 Z" fill="#04060d" />
        <rect x="522" y="358" width="64" height="10" rx="5" fill="#141d36" />
        <rect x="522" y="374" width="48" height="10" rx="5" fill="#141d36" opacity="0.7" />
        <rect x="522" y="390" width="56" height="10" rx="5" fill="#141d36" opacity="0.5" />
        <rect x="536" y="414" width="36" height="4" rx="2" fill="#cfd8ea" opacity="0.3" />
      </g>

      {/* signal arcs */}
      <g stroke="#e5b849" fill="none" strokeLinecap="round" opacity="0.55">
        <path d="M596 122 a34 34 0 0 1 0 44" strokeWidth="3" opacity="0.35" />
        <path d="M606 108 a52 52 0 0 1 0 72" strokeWidth="3" opacity="0.22" />
        <path d="M44 122 a34 34 0 0 0 0 44" strokeWidth="3" opacity="0.35" />
        <path d="M34 108 a52 52 0 0 0 0 72" strokeWidth="3" opacity="0.22" />
      </g>
    </svg>
  );
}
