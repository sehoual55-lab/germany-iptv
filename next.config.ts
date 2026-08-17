import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set STATIC_EXPORT=1 to emit a plain HTML site into ./out
  // (for shared hosting / cPanel, or to preview without a Node server).
  // Note: the headers() block below is ignored in export mode — configure
  // those security headers on your web server instead.
  ...(process.env.STATIC_EXPORT ? { output: "export" as const } : {}),

  // Clean, canonical URLs ending in a slash: /iptv-pakete/
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
