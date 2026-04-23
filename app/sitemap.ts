import type { MetadataRoute } from "next"
import { site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = (
    [
      { url: site.url, priority: 1.0, changeFrequency: "weekly" },
      { url: `${site.url}/research`, priority: 0.9, changeFrequency: "weekly" },
      { url: `${site.url}/filings`, priority: 0.9, changeFrequency: "weekly" },
      { url: `${site.url}/reports`, priority: 0.9, changeFrequency: "monthly" },
      { url: `${site.url}/press`, priority: 0.7, changeFrequency: "monthly" },
      { url: `${site.url}/about`, priority: 0.7, changeFrequency: "monthly" },
      { url: `${site.url}/contact`, priority: 0.5, changeFrequency: "yearly" },
    ] as const
  ).map((p) => ({ ...p, lastModified: now }))

  const legalPages: MetadataRoute.Sitemap = [
    "privacy",
    "terms",
    "disclaimer",
    "cookies",
  ].map((slug) => ({
    url: `${site.url}/${slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }))

  // TODO: when publications / filings / reports exist, add their dynamic URLs here.

  return [...staticPages, ...legalPages]
}
