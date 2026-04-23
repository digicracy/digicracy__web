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

        <ul className="mt-6 divide-y divide-[var(--ink)] border-y border-[var(--ink)]">
          {RECENT_PUBLICATIONS.map((pub) => (
            <li key={pub.id} className="py-5">
              <Link href={`/research/${pub.slug}`} className="group block">
                <p className="ds-meta">
                  <span className="tabular-nums">{pub.id}</span>
                  {" · "}
                  <span className="tabular-nums">
                    {formatFilingDate(pub.date)}
                  </span>
                  {" · "}
                  {pub.kind.toUpperCase()}
                  {" · "}
                  <span className="tabular-nums">{pub.readTime}</span>
                </p>
                <h3 className="mt-1.5 font-serif text-lg font-semibold leading-[1.3] text-[var(--ink)] sm:text-xl group-hover:underline group-hover:decoration-[var(--ochre)] group-hover:underline-offset-4">
                  {pub.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <Link href="/research" className="ds-link font-mono text-sm">
            View all publications →
          </Link>
        </div>
      </div>
    </section>
  )
}
