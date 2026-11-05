import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/portfolio/data";

/**
 * Auto-generated at /robots.txt.
 * Note: a static public/robots.txt also exists from the scaffold — the
 * dynamic route below takes precedence in Next.js, but remove the static
 * file to avoid confusion.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
