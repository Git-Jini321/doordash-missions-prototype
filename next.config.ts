import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/doordash-missions-prototype",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
