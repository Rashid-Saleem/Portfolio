import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/portfolio/data";

/**
 * Auto-generated at /sitemap.xml. Update `siteConfig.url` in
 * `src/lib/portfolio/config.ts` and this picks the domain up automatically.
 * Add entries here if the site grows beyond the single landing page.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
