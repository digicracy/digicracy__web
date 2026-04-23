import Link from "next/link"

const NAV_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/research", label: "Research" },
  { href: "/filings", label: "Filings" },
  { href: "/reports", label: "Reports" },
  { href: "/press", label: "Press" },
  { href: "/about", label: "About" },
]

/**
 * Top navigation — full-width band, thin ink rules top and bottom.
 * Left: DIGICRACY™ wordmark in JetBrains Mono Bold.
 * Right: horizontal links separated by middle dots.
 * Spec §1.
 */
export function Nav() {
  return (
    <header
      aria-label="Primary"
      className="sticky top-0 z-40 border-y border-[var(--ink)] bg-[var(--paper)]"
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-mono text-base font-bold tracking-tight text-[var(--ink)] sm:text-lg"
          aria-label="Digicracy home"
        >
          DIGICRACY<sup className="font-mono text-[0.55em] font-bold">™</sup>
        </Link>

        <nav aria-label="Sections">
          <ul className="flex flex-wrap items-center gap-x-1 gap-y-1 font-mono text-[11px] sm:text-xs">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className="ds-link ds-link px-1 py-1 text-[var(--ink)] hover:text-[var(--ochre)]"
                >
                  {link.label}
                </Link>
                {i < NAV_LINKS.length - 1 && (
                  <span
                    aria-hidden
                    className="px-1 text-[var(--ink)] opacity-50"
                  >
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
