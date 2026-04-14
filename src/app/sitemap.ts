import type { MetadataRoute } from "next";

const routes = [
  "/",
  "/about",
  "/dui-defense",
  "/drug-crimes",
  "/assault-violent-crimes",
  "/theft-property-crimes",
  "/case-results",
  "/testimonials",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://motorcitylawfirm.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}