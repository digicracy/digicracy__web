import type { Metadata, Viewport } from "next"
import { JetBrains_Mono, Source_Serif_4 } from "next/font/google"
import Script from "next/script"
import { Shell } from "@/components/layout/shell"
import { site } from "@/lib/site"
import "./globals.css"

// ─── Fonts ────────────────────────────────────────────────────────────────
// Two fonts only, per brand spec § Typography.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
})

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
})

// ─── Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}™ — ${site.shortDescription}`,
    template: `%s · ${site.name}™`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "Digicracy Foundation" }],
  creator: "Digicracy Foundation",
  publisher: "Digicracy Foundation",
  keywords: [
    "Digicracy",
    "India digital governance",
    "last-mile digital services",
    "RTI",
    "right to information",
    "digital government gaps",
    "civic tech India",
    "research and advocacy",
    "public interest litigation",
    "India public services",
  ],
  alternates: {
    canonical: site.url,
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: `${site.name} Research RSS` }],
    },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name}™ — ${site.shortDescription}`,
    description: site.description,
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: `${site.name}™ — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@digicracy",
    creator: "@digicracy",
    title: `${site.name}™ — ${site.shortDescription}`,
    description: site.tagline,
    images: ["/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  category: "research",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
}

export const viewport: Viewport = {
  themeColor: "#f4efe6", // paper
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

// ─── JSON-LD (Organization) ───────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Digicracy",
  alternateName: "Digicracy Foundation",
  url: site.url,
  logo: `${site.url}/logo.svg`,
  description: site.description,
  foundingDate: "2026",
  foundingLocation: {
    "@type": "Place",
    name: "Chandigarh, India",
  },
  slogan: site.tagline,
  email: site.email.general,
  sameAs: [site.social.twitter, site.social.linkedin],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "press",
      email: site.email.press,
      availableLanguage: ["en"],
    },
    {
      "@type": "ContactPoint",
      contactType: "general",
      email: site.email.general,
      availableLanguage: ["en"],
    },
  ],
}

// ─── Root Layout ──────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  const plausibleSrc =
    process.env.NEXT_PUBLIC_PLAUSIBLE_SRC || "https://plausible.io/js/script.js"

  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${sourceSerif.variable}`}>
      <head>
        {/* Organization schema (used by search engines, Knowledge Panel) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="bg-[var(--paper)] text-[var(--ink)] antialiased">
        <Shell>{children}</Shell>

        {/* Plausible — privacy-friendly analytics. NOT Google Analytics. */}
        {plausibleDomain && (
          <Script
            defer
            data-domain={plausibleDomain}
            src={plausibleSrc}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
