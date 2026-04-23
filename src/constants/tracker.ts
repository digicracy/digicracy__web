/**
 * Last-Mile Tracker — services × states matrix.
 * Seed data for the homepage tracker and the full /research/last-mile-tracker page.
 */

export const STATE_CODES = ["PB", "HR", "DL", "UP", "MH", "KA", "TN", "GJ"] as const
export type StateCode = (typeof STATE_CODES)[number]

export type CellStatus = "online" | "partial" | "offline"

export interface TrackerRow {
  service: string
  row: Record<StateCode, CellStatus>
}

export const TRACKER: TrackerRow[] = [
  {
    service: "Commercial Vehicle Tax",
    row: {
      PB: "offline",
      HR: "partial",
      DL: "online",
      UP: "online",
      MH: "partial",
      KA: "online",
      TN: "online",
      GJ: "partial",
    },
  },
  {
    service: "Stamp Duty Refund",
    row: {
      PB: "offline",
      HR: "offline",
      DL: "partial",
      UP: "offline",
      MH: "partial",
      KA: "partial",
      TN: "offline",
      GJ: "partial",
    },
  },
  {
    service: "Property Mutation",
    row: {
      PB: "partial",
      HR: "partial",
      DL: "online",
      UP: "partial",
      MH: "online",
      KA: "online",
      TN: "online",
      GJ: "online",
    },
  },
  {
    service: "Trade Licence",
    row: {
      PB: "partial",
      HR: "partial",
      DL: "online",
      UP: "partial",
      MH: "online",
      KA: "online",
      TN: "partial",
      GJ: "online",
    },
  },
  {
    service: "Building Plan Approval",
    row: {
      PB: "offline",
      HR: "partial",
      DL: "partial",
      UP: "offline",
      MH: "partial",
      KA: "online",
      TN: "partial",
      GJ: "partial",
    },
  },
]
