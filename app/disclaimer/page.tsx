import type { Metadata } from "next"
import { PageShell } from "@/components/layout/page-shell"

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important disclaimer about the nature of Digicracy's content and RTI filings.",
}

export default function DisclaimerPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Disclaimer"
      lede="Important notes about what this site is and isn't."
    >
      <div className="prose-digicracy space-y-5 text-base text-[var(--ink)] sm:text-[17px]">
        <p>
          Digicracy™ is not a law firm. Content on this site is informational
          and for public-interest research; it is not legal advice.
        </p>
        <p>
          RTI filings published here are filed by named individuals in their
          personal capacity. Filer names appear alongside each filing.
        </p>
        <p>
          Where we cite government sources, we link to the original wherever
          possible. If a link breaks or a document moves, write to{" "}
          <a className="ds-link" href="mailto:hello@digicracy.org">
            hello@digicracy.org
          </a>
          .
        </p>
      </div>
    </PageShell>
  )
}
