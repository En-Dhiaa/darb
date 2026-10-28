import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const isVercel = process.env.VERCEL === "1";
const basePath = isGithubPages ? "/darb" : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  trailingSlash: !isVercel,
  ...(isVercel
    ? {
        images: {
          formats: ["image/avif", "image/webp"],
          remotePatterns: [
            {
              protocol: "https",
              hostname: "images.unsplash.com",
            },
          ],
        },
      }
    : {
        output: "export" as const,
        images: {
          unoptimized: true,
        },
      }),
};

export default nextConfig;
