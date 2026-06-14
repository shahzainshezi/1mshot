import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === "1";

const nextConfig: any = {
  output: "export",
  basePath: isVercel ? "" : "/1mshot",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: ".",
  },
};

export default nextConfig;

