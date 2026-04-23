import type { Metadata } from "next"
import { PageShell } from "@/components/layout/page-shell"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of digicracy.org and its content.",
}

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of Use"
      lede="Rules for using this site and its content. Draft placeholder — final version publishes before public launch."
    >
      <div className="prose-digicracy space-y-5 text-base text-[var(--ink)] sm:text-[17px]">
        <p>
          Content on digicracy.org is provided for informational and
          public-interest purposes. Copy, cite, and re-share freely with
          attribution.
        </p>
        <p>
          Digicracy™ is not a law firm and provides no legal advice. Content
          is not a substitute for counsel.
        </p>
      </div>
    </PageShell>
  )
}
