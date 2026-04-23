import type { MetadataRoute } from "next"
import { site } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.shortDescription}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "minimal-ui",
    background_color: "#f4efe6",
    theme_color: "#f4efe6",
    icons: [
      { src: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
  }
}
