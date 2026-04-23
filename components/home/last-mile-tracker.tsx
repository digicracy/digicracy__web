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

        <p className="mt-2 font-serif text-sm italic text-[var(--ink)]/70">
          The last mile of building plan approval. A six-state review.
        </p>

        {/* Matrix — desktop: table. Mobile: scrolls horizontally (minimal layout shift). */}
        <div className="mt-6 overflow-x-auto">
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
        <p className="mt-6 font-mono text-xs tracking-[0.04em] text-[var(--ink)]">
          <span className="text-[var(--ink)]">●</span> ONLINE
          <span className="mx-3 opacity-40">·</span>
          <span className="text-[var(--ink)]">◐</span> PARTIAL
          <span className="mx-3 opacity-40">·</span>
          <span className="text-[var(--ochre)]">○</span> OFFLINE
        </p>

        <div className="mt-5">
          <Link href="/research/last-mile-tracker" className="ds-link font-mono text-sm">
            Explore the full tracker →
          </Link>
        </div>
      </div>
    </section>
  )
}
