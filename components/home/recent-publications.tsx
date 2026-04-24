import Link from "next/link"
import { RECENT_PUBLICATIONS } from "@/src/constants/publications"
import { formatFilingDate } from "@/lib/utils"

/**
 * Recent Publications — three entries stacked, separated by 1px ink rules.
 * Spec §4.
 */
export function RecentPublications() {
  return (
    <section
      aria-labelledby="recent-publications-heading"
      className="border-b border-[var(--ink)]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
        <h2
          id="recent-publications-heading"
          className="ds-label ds-label--ink"
        >
          Recent Publications
        </h2>

        <ul className="mt-6 max-w-[72ch] divide-y divide-[var(--ink)]/30 border-y border-[var(--ink)]">
          {RECENT_PUBLICATIONS.map((pub) => (
            <li key={pub.id} className="py-6">
              <Link href={`/research/${pub.slug}`} className="group block">
                <p className="ds-meta">
                  <span className="tabular-nums">{pub.id}</span>
                  <span className="opacity-50"> · </span>
                  <span className="tabular-nums">
                    {formatFilingDate(pub.date)}
                  </span>
                  <span className="opacity-50"> · </span>
                  {pub.kind.toUpperCase()}
                  <span className="opacity-50"> · </span>
                  <span className="tabular-nums">{pub.readTime}</span>
                </p>
                <h3 className="balance mt-2 font-serif text-xl font-semibold leading-[1.3] text-[var(--ink)] sm:text-[1.375rem] group-hover:underline group-hover:decoration-[var(--ochre)] group-hover:underline-offset-4">
                  {pub.title}
                </h3>
                {pub.summary && (
                  <p className="mt-2 max-w-[62ch] font-serif text-base leading-[1.55] text-[var(--ink)]/75">
                    {pub.summary}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-7">
          <Link href="/research" className="ds-link inline-block py-1 font-mono text-[15px]">
            View all publications →
          </Link>
        </div>
      </div>
    </section>
  )
}
