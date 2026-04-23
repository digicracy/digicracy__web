import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/layout/page-shell"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press contact, downloadable press kit, founder bio, and citations for Digicracy.",
}

export default function PressPage() {
  return (
    <PageShell
      eyebrow="Section"
      title="Press"
      lede="Press contact, downloadable press kit, and founder bio. Citations accumulate here as they publish."
    >
      <div className="ds-stamp block max-w-md p-5">
        <p className="ds-label ds-label--ochre">Press Enquiries</p>
        <p className="mt-2 font-mono text-sm text-[var(--ink)]">
          <a
            href={`mailto:${site.email.press}`}
            className="hover:underline underline-offset-4"
          >
            {site.email.press}
          </a>
        </p>
        <p className="mt-1 font-serif text-sm italic text-[var(--ink)]">
          Response within 24 hours
        </p>
        <p className="mt-3 font-mono text-sm">
          <Link href="/press/kit.zip" className="ds-link">
            Download press kit →
          </Link>
        </p>
      </div>
      <p className="mt-10 font-serif italic text-[var(--ink)]/60">
        Citations will appear here as they accumulate.
      </p>
    </PageShell>
  )
}
