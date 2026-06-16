import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === "1";
const isDev = process.env.NODE_ENV === "development";

const nextConfig: any = {
  output: "export",
  basePath: isDev ? "" : (isVercel ? "" : "/1mshot"),
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: ".",
  },
};

export default nextConfig;


