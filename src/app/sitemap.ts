import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://darbmedia.com";
  const routes = [
    "",
    "/how-it-works",
    "/campaigns",
    "/campaigns/natco-jetour",
    "/campaigns/from-factory-to-people",
    "/partners",
    "/team",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes("/campaigns/") ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/campaigns") ? 0.9 : 0.8,
  }));
}
