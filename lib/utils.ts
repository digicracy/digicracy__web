import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Format an ISO date (YYYY-MM-DD) as `14 MAY 2026` */
export function formatFilingDate(iso: string): string {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return iso
  return d
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase()
}

/** Digicracy filing number formatter — DGC-{KIND}-{YYYY}-{NNN} */
export function formatFilingNumber(
  kind: "RES" | "REP" | "RTI" | "ANALYSIS",
  year: number,
  serial: number
): string {
  return `DGC-${kind}-${year}-${String(serial).padStart(3, "0")}`
}
