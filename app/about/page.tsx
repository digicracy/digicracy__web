import type { Metadata } from "next"
import { PageShell } from "@/components/layout/page-shell"
import { HowWeWork } from "@/components/home/how-we-work"

export const metadata: Metadata = {
  title: "About",
  description:
    "Digicracy is a non-profit research and advocacy initiative on India's last-mile digital governance.",
}

export default function AboutPage() {
  return (
    <>
      <PageShell
        eyebrow="Section"
        title="About Digicracy™"
        lede="We are a non-profit research and advocacy initiative on India's last-mile digital governance. We file RTIs, publish findings, pursue representations with authorities, and litigate (PIL) where administrative routes fail."
      >
        <div className="prose-digicracy space-y-4 text-base text-[var(--ink)] sm:text-[17px]">
          <p>
            Many government services in India are marketed as digital but break
            at the last step — the penalty computed by a clerk, the refund
            processed at a counter, the &ldquo;faceless&rdquo; service whose biometrics
            still require in-person presence. These gaps cost citizens time and
            money, and they don&apos;t show up in portal launch announcements.
          </p>
          <p>
            Digicracy exists to document those gaps with evidence, push for
            specific fixes, and keep the record public so the same gap can&apos;t be
            marketed as digital a second time.
          </p>
        </div>

        <h2
          id="trustees"
          className="ds-label ds-label--ink mt-14"
        >
          Trustees
        </h2>
        <p className="mt-3 font-serif italic text-[var(--ink)]/60">
          Trustee roster publishes once trust registration completes.
        </p>

        <h2
          id="annual-reports"
          className="ds-label ds-label--ink mt-10"
        >
          Annual Reports
        </h2>
        <p className="mt-3 font-serif italic text-[var(--ink)]/60">
          First annual report will publish after one year of operations.
        </p>

        <h2 id="funding" className="ds-label ds-label--ink mt-10">
          Funding Disclosure
        </h2>
        <p className="mt-3 font-serif text-base text-[var(--ink)]">
          Digicracy is funded through individual donations from the founder and
          supporters. A full funding disclosure publishes with each annual
          report.
        </p>
      </PageShell>
      <HowWeWork />
    </>
  )
}
