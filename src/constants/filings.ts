/**
 * RTI filings — domain data model + seed entries.
 */

export type FilingStatus =
  | "pending"
  | "awaiting-reply"
  | "partial-reply"
  | "full-reply"
  | "first-appeal"
  | "second-appeal"

export interface RTIFiling {
  /** DGC-RTI-YYYY-NNN */
  id: string
  /** Natural person (RTIs must be filed in personal capacity) */
  filerName: string
  authority: string
  stateCode: string
  /** ISO date YYYY-MM-DD */
  dateFiled: string
  trackingNumber?: string
  subject: string
  status: FilingStatus
  replyText?: string
  attachments?: string[]
  linkedCampaign?: string
}

export const FILINGS: RTIFiling[] = [
  // Populate pre-launch with the 7 RTIs from 02-rti-list.md
  // Keeping empty here — filings live as MDX+meta once workflow solidifies.
]
