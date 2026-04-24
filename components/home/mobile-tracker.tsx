"use client"

import { useState } from "react"
import {
  STATE_CODES,
  TRACKER,
  type CellStatus,
  type StateCode,
} from "@/src/constants/tracker"

const STATUS_GLYPH: Record<CellStatus, string> = {
  online: "●",
  partial: "◐",
  offline: "○",
}

const STATUS_LABEL: Record<CellStatus, string> = {
  online: "ONLINE",
  partial: "PARTIAL",
  offline: "OFFLINE",
}

/**
 * Mobile presentation of the Last-Mile Tracker.
 *
 * Per brand spec §Responsive:
 *   "Mobile: Tracker matrix becomes a selector — pick a state, show its row."
 *
 * Rendered at < md (below 768px). The desktop matrix component renders at md+.
 */
export function MobileTracker() {
  const [selected, setSelected] = useState<StateCode>(STATE_CODES[0])

  return (
    <div className="md:hidden">
      <p id="tracker-state-label" className="ds-label ds-label--ink">
        State
      </p>

      <div
        role="group"
        aria-labelledby="tracker-state-label"
        className="mt-3 flex flex-wrap gap-2 font-mono text-sm"
      >
        {STATE_CODES.map((code) => {
          const isActive = code === selected
          return (
            <button
              key={code}
              type="button"
              aria-pressed={isActive}
              onClick={() => setSelected(code)}
              className={
                isActive
                  ? "inline-flex min-h-11 min-w-11 items-center justify-center bg-[var(--ink)] px-3 font-bold text-[var(--paper)]"
                  : "inline-flex min-h-11 min-w-11 items-center justify-center border border-[var(--ink)]/40 px-3 text-[var(--ink)] hover:border-[var(--ink)]"
              }
            >
              {code}
            </button>
          )
        })}
      </div>

      <dl className="mt-6 divide-y divide-[var(--ink)]/25 border-y border-[var(--ink)]">
        {TRACKER.map((row) => {
          const status = row.row[selected]
          const isOffline = status === "offline"
          return (
            <div
              key={row.service}
              className="flex items-center justify-between gap-4 py-4"
            >
              <dt className="font-serif text-[16px] leading-tight text-[var(--ink)]">
                {row.service}
              </dt>
              <dd
                className={`flex items-center gap-2 font-mono text-[13px] tracking-[0.06em] ${
                  isOffline ? "text-[var(--ochre)]" : "text-[var(--ink)]"
                }`}
              >
                <span aria-hidden className="text-lg leading-none">
                  {STATUS_GLYPH[status]}
                </span>
                <span>{STATUS_LABEL[status]}</span>
              </dd>
            </div>
          )
        })}
      </dl>
    </div>
  )
}
