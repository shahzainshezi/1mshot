import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === "1";
const isDev = process.env.NODE_ENV === "development";
const basePath = isDev ? "" : (isVercel ? "" : "/1mshot");

const nextConfig: any = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: ".",
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;


