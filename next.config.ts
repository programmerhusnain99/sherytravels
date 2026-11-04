import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enforce trailing slashes on every URL, matching the live WordPress site
  // (e.g. /about -> /about/ via a 301). Critical for byte-for-byte URL parity.
  trailingSlash: true,

  // Belt-and-suspenders www -> non-www 301. Host/CDN usually handles this too,
  // but this guarantees parity even if the platform redirect is misconfigured.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.sherytravels.com" }],
        destination: "https://sherytravels.com/:path*",
        permanent: true,
      },
    ];
  },

  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
