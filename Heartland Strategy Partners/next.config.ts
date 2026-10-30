import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  output: "export",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  // Change "HSP" to your exact GitHub repository name.
  // If you use a custom domain later, remove basePath and assetPrefix.
  basePath: isProd ? "/HSP" : "",
  assetPrefix: isProd ? "/HSP/" : "",
};

export default nextConfig;