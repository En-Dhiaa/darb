import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/darb" : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
