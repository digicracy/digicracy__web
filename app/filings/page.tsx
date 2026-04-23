import type { Metadata } from "next"
import { PageShell } from "@/components/layout/page-shell"

export const metadata: Metadata = {
  title: "Filings",
  description:
    "The Digicracy RTI database. Every filing, authority, date, status, and downloadable reply in one public archive.",
}

export default function FilingsPage() {
  return (
    <PageShell
      eyebrow="Section"
      title="Filings"
      lede="The public RTI database. Every filing by a named individual in personal capacity, with authority, subject, status, and downloadable replies and appeals."
    >
      <p className="font-serif italic text-[var(--ink)]/60">
        Filings index coming online as the first 7 RTIs publish.
      </p>
    </PageShell>
  )
}
