/** Central site metadata — single source of truth */
export const site = {
  name: "Digicracy",
  nameMark: "DIGICRACY™",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://digicracy.org",
  tagline: "Online until it isn't.",
  description:
    "We research and publish the gaps in India's last-mile digital governance. Services that work online until the last step, where they break.",
  shortDescription:
    "Research and advocacy on India's last-mile digital governance.",
  locale: "en_IN",
  founded: 2026,
  location: "Chandigarh",
  email: {
    general: "hello@digicracy.org",
    press: "press@digicracy.org",
  },
  social: {
    twitter: "https://twitter.com/digicracy",
    linkedin: "https://www.linkedin.com/company/digicracy",
    rss: "/feed.xml",
  },
} as const

export type SiteConfig = typeof site
