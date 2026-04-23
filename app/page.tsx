import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { CurrentInvestigation } from "@/components/home/current-investigation"
import { RecentPublications } from "@/components/home/recent-publications"
import { LastMileTracker } from "@/components/home/last-mile-tracker"
import { HowWeWork } from "@/components/home/how-we-work"
import { PressContact } from "@/components/home/press-contact"
import { MonthlyDigest } from "@/components/home/monthly-digest"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: {
    absolute: `${site.name}™ — ${site.shortDescription}`,
  },
  description: site.description,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    url: site.url,
    title: `${site.name}™ — ${site.shortDescription}`,
    description: site.description,
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  alternateName: `${site.name} Foundation`,
  url: site.url,
  description: site.description,
  inLanguage: "en-IN",
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${site.url}/research?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <Hero />
      <CurrentInvestigation />
      <RecentPublications />
      <LastMileTracker />
      <HowWeWork />
      <PressContact />
      <MonthlyDigest />
    </>
  )
}
