import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-c3c5765215d14e3d882d51123be2ba44.r2.dev",
      },
    ],
  },
};

export default nextConfig;
