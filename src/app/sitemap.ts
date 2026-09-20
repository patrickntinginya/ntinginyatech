import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { products } from "@/content/products";

const staticRoutes = [
  "/",
  "/about",
  "/solutions",
  "/products",
  "/agriculture",
  "/innovation",
  "/masterclass",
  "/research",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [...staticRoutes, ...products.map((p) => `/products/${p.slug}`)];
  return paths.map((path): MetadataRoute.Sitemap[number] => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/products/") ? 0.6 : path === "/privacy" || path === "/terms" ? 0.2 : 0.8,
  }));
}
