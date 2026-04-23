/**
 * Publications — domain data for the homepage "Recent Publications" section
 * and the /research index. Move to MDX once content volume grows.
 */

export type PublicationKind = "research" | "report" | "rti-update" | "analysis"

export interface Publication {
  /** DGC-{KIND}-{YYYY}-{NNN} */
  id: string
  kind: PublicationKind
  title: string
  /** ISO date YYYY-MM-DD */
  date: string
  /** Minutes for articles, pages for reports */
  readTime: string
  /** Short, ≤ 200 chars */
  summary: string
  /** Slug for /research/[slug] */
  slug: string
  /** Tags — state codes, issue keywords */
  tags: string[]
  status: "draft" | "published"
  version?: string
}

export const PUBLICATIONS: Publication[] = [
  {
    id: "DGC-RES-2026-003",
    kind: "research",
    title: "The last mile of building plan approval. A six-state review.",
    date: "2026-05-14",
    readTime: "9 MIN",
    summary:
      "Building plan approval portals exist in most states, but the final stamp still requires a site visit by a municipal official in at least five of them.",
    slug: "building-plan-last-mile",
    tags: ["PB", "HR", "DL", "UP", "MH", "building-plan"],
    status: "draft",
  },
  {
    id: "DGC-RES-2026-002",
    kind: "research",
    title:
      "Offline by design: how Punjab keeps late-tax penalty at a counter.",
    date: "2026-05-07",
    readTime: "7 MIN",
    summary:
      "Punjab allows commercial vehicle owners to pay road tax online, but the penalty for late payment is computed manually and paid in person.",
    slug: "punjab-commercial-vehicle-penalty",
    tags: ["PB", "commercial-vehicle-tax"],
    status: "draft",
  },
  {
    id: "DGC-RES-2026-001",
    kind: "analysis",
    title: "Property mutation, stamp duty refunds, and citizen costs.",
    date: "2026-04-30",
    readTime: "11 MIN",
    summary:
      "Where the stamp duty refund still requires a counter visit in ten states, and what that costs the average citizen over a year.",
    slug: "property-mutation-stamp-duty",
    tags: ["IN", "stamp-duty", "property-mutation"],
    status: "draft",
  },
]

export const RECENT_PUBLICATIONS = PUBLICATIONS.slice(0, 3)
