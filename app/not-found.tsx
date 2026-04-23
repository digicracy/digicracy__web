import Link from "next/link"
import { PageShell } from "@/components/layout/page-shell"

export default function NotFound() {
  return (
    <PageShell
      eyebrow="Error 404"
      title="Page not found."
      lede="This page doesn't exist, or moved. If you followed a link from somewhere, let us know."
    >
      <div className="flex flex-col gap-3 font-mono text-sm sm:flex-row sm:gap-6">
        <Link href="/" className="ds-link">
          Back to home →
        </Link>
        <Link href="/research" className="ds-link">
          Browse research →
        </Link>
        <a href="mailto:hello@digicracy.org" className="ds-link">
          Report a broken link →
        </a>
      </div>
    </PageShell>
  )
}
