import Link from "next/link"
import { Chain } from "@/components/chain"

/**
 * Current Investigation — full-width block with 6px ochre left border.
 * Spec §3.
 */
export function CurrentInvestigation() {
  return (
    <section
      aria-labelledby="current-investigation-heading"
      className="border-b border-[var(--ink)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="border-l-[6px] border-[var(--ochre)] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
          <p className="ds-label ds-label--ochre">
            Current Investigation / 001
          </p>

          <h2
            id="current-investigation-heading"
            className="balance mt-3 max-w-[22ch] font-serif text-2xl font-semibold leading-[1.2] text-[var(--ink)] sm:text-3xl lg:text-[2rem]"
          >
            Why Punjab commercial vehicle owners still pay late-tax penalty at
            a counter
          </h2>

          <div className="prose-digicracy mt-5 space-y-4 text-[17px] leading-[1.65] text-[var(--ink)] sm:text-lg">
            <p>
              Punjab allows commercial vehicle owners to pay road tax online,
              but the penalty for late payment is still computed manually by a
              District Transport Office clerk and paid in person. For a
              digitised revenue stream, the final step requires a counter
              visit.
            </p>
            <p>
              Karnataka, Delhi, and Uttar Pradesh digitised the same penalty
              computation years ago. We filed 7 RTIs to understand why Punjab
              hasn&apos;t, and what it would take to fix.
            </p>
          </div>

          <div className="mt-8">
            <Chain
              ariaLabel="Commercial vehicle penalty flow — pay tax and generate challan work online, compute penalty is offline, visit DTO and submit form remain broken"
              size="sm"
              nodes={[
                { state: "working", label: "PAY TAX" },
                { state: "working", label: "GENERATE CHALLAN" },
                { state: "broken", label: "COMPUTE PENALTY", breakLabel: "OFFLINE" },
                { state: "broken", label: "VISIT DTO" },
                { state: "broken", label: "SUBMIT FORM" },
              ]}
            />
          </div>

          <div className="mt-8">
            <p className="ds-stamp ds-label ds-label--ochre">
              Status: 7 RTIs filed · Responses awaited
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 font-mono text-[15px] sm:flex-row sm:gap-8">
            <Link
              href="/research/punjab-commercial-vehicle-penalty"
              className="ds-link inline-block py-1"
            >
              Read investigation →
            </Link>
            <Link
              href="/filings?campaign=001"
              className="ds-link inline-block py-1"
            >
              View documents →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
