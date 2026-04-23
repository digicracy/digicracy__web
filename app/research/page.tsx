import type { Metadata } from "next"
import { PageShell } from "@/components/layout/page-shell"

export const metadata: Metadata = {
  title: "Research",
  description:
    "Digicracy research publications — investigations into India's last-mile digital governance gaps.",
}

export default function ResearchPage() {
  return (
    <PageShell
      eyebrow="Section"
      title="Research"
      lede="Chronological list of Digicracy publications — research pieces, analyses, and RTI updates. Filter by type, state, or issue."
    >
      <p className="font-serif italic text-[var(--ink)]/60">
        Publication index coming online as the first campaign publishes.
      </p>
    </PageShell>
  )
}
