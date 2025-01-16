import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { hostname: "adamant-antelope-943.convex.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;
