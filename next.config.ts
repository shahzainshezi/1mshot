import type { NextConfig } from "next";

const nextConfig: any = {
  output: "export",
  basePath: "/1mshot",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: ".",
  },
};

export default nextConfig;

