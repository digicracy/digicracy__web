import type { Metadata } from "next"
import { PageShell } from "@/components/layout/page-shell"

export const metadata: Metadata = {
  title: "Reports",
  description:
    "Digicracy reports — long-form evidence-based publications with methodology, findings, and recommendations.",
}

export default function ReportsPage() {
  return (
    <PageShell
      eyebrow="Section"
      title="Reports"
      lede="Long-form, evidence-based reports. Each with a cover, methodology note, findings, comparison grid, and recommendations."
    >
      <p className="font-serif italic text-[var(--ink)]/60">
        First report (DGC-REP-2026-001) publishing with the campaign launch.
      </p>
    </PageShell>
  )
}
