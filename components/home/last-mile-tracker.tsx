import Link from "next/link"
import {
  STATE_CODES,
  TRACKER,
  type CellStatus,
} from "@/src/constants/tracker"

const STATUS_GLYPH: Record<CellStatus, string> = {
  online: "●",
  partial: "◐",
  offline: "○",
}

const STATUS_COLOR: Record<CellStatus, string> = {
  online: "text-[var(--ink)]",
  partial: "text-[var(--ink)]",
  offline: "text-[var(--ochre)]",
}

const STATUS_LABEL: Record<CellStatus, string> = {
  online: "online",
  partial: "partial",
  offline: "offline",
}

/**
 * Last-Mile Tracker — services × states matrix.
 * Spec §5.
 */
export function LastMileTracker() {
  return (
    <section
      aria-labelledby="tracker-heading"
      className="border-b border-[var(--ink)]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
        <h2 id="tracker-heading" className="ds-label ds-label--ink">
          Last-Mile Tracker
        </h2>

        <p className="mt-2 max-w-[60ch] font-serif text-base italic text-[var(--ink)]/75">
          Where five everyday public services break at the last step, across
          eight Indian states.
        </p>

        {/* Matrix — bleeds edge-to-edge on mobile for scroll without pushing page scroll */}
        <div className="scroll-island -mx-4 mt-6 px-4 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[560px] border-collapse font-mono text-sm">
            <thead>
              <tr className="border-y border-[var(--ink)]">
                <th scope="col" className="py-3 text-left font-normal text-[var(--ink)]/70">
                  <span className="sr-only">Service</span>
                </th>
                {STATE_CODES.map((state) => (
                  <th
                    key={state}
                    scope="col"
                    className="py-3 text-center font-bold tracking-[0.08em] text-[var(--ink)]"
                  >
                    {state}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TRACKER.map((service, idx) => (
                <tr
                  key={service.service}
                  className={idx > 0 ? "border-t border-[var(--ink)]/30" : ""}
                >
                  <th
                    scope="row"
                    className="py-3 pr-3 text-left font-serif text-[15px] font-normal text-[var(--ink)]"
                  >
                    {service.service}
                  </th>
                  {STATE_CODES.map((state) => {
                    const status: CellStatus = service.row[state]
                    return (
                      <td
                        key={state}
                        className={`py-3 text-center text-lg ${STATUS_COLOR[status]} tabular-nums`}
                      >
                        <span aria-hidden>{STATUS_GLYPH[status]}</span>
                        <span className="sr-only">
                          {service.service} in {state}: {STATUS_LABEL[status]}
                        </span>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <p className="mt-6 font-mono text-[13px] tracking-[0.04em] text-[var(--ink)]">
          <span className="text-[var(--ink)]">●</span> ONLINE
          <span className="mx-3 opacity-40">·</span>
          <span className="text-[var(--ink)]">◐</span> PARTIAL
          <span className="mx-3 opacity-40">·</span>
          <span className="text-[var(--ochre)]">○</span> OFFLINE
        </p>

        <div className="mt-6">
          <Link href="/research/last-mile-tracker" className="ds-link inline-block py-1 font-mono text-[15px]">
            Explore the full tracker →
          </Link>
        </div>
      </div>
    </section>
  )
}
