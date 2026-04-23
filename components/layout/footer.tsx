import Link from "next/link"
import { site } from "@/lib/site"

const WORK = [
  { href: "/research", label: "Research" },
  { href: "/filings", label: "Filings" },
  { href: "/reports", label: "Reports" },
  { href: "/press", label: "Press" },
]

const ORGANISATION = [
  { href: "/about", label: "About" },
  { href: "/about#trustees", label: "Trustees" },
  { href: "/about#annual-reports", label: "Annual Reports" },
  { href: "/about#funding", label: "Funding Disclosure" },
]

const FOLLOW = [
  { href: site.social.twitter, label: "Twitter", external: true },
  { href: site.social.linkedin, label: "LinkedIn", external: true },
  { href: "/feed.xml", label: "RSS", external: false },
]

/**
 * Footer — full-width ochre band, paper text, four columns.
 * Spec §9.
 */
export function Footer() {
  return (
    <footer className="ds-footer-band border-t border-[var(--ink)]">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — brand + contact */}
          <div>
            <Link
              href="/"
              className="block font-mono text-lg font-bold tracking-tight text-[var(--paper)]"
            >
              DIGICRACY<sup className="font-mono text-[0.55em] font-bold">™</sup>
            </Link>
            <p className="mt-3 font-mono text-xs leading-relaxed text-[var(--paper)]">
              {site.location}
              <br />
              Founded {site.founded}
            </p>
            <p className="mt-4 font-mono text-xs leading-relaxed text-[var(--paper)]">
              <a
                href={`mailto:${site.email.general}`}
                className="hover:underline underline-offset-4"
              >
                {site.email.general}
              </a>
              <br />
              <a
                href={`mailto:${site.email.press}`}
                className="hover:underline underline-offset-4"
              >
                {site.email.press}
              </a>
            </p>
          </div>

          {/* Col 2 — Work */}
          <FooterColumn title="Work" items={WORK} />

          {/* Col 3 — Organisation */}
          <FooterColumn title="Organisation" items={ORGANISATION} />

          {/* Col 4 — Follow */}
          <FooterColumn title="Follow" items={FOLLOW} />
        </div>

        {/* Bottom strip */}
        <div className="mt-12 border-t border-[var(--paper)]/25 pt-6 font-mono text-[11px] leading-relaxed text-[var(--paper)]">
          © {site.founded} DIGICRACY<sup>™</sup> · Funded through individual donations from the founder and supporters.
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  items,
}: {
  title: string
  items: ReadonlyArray<{ href: string; label: string; external?: boolean }>
}) {
  return (
    <div>
      <h3 className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[var(--paper)]">
        {title}
      </h3>
      <ul className="mt-3 space-y-2 font-mono text-xs">
        {items.map((item) =>
          item.external ? (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--paper)] hover:underline underline-offset-4"
              >
                {item.label}
              </a>
            </li>
          ) : (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[var(--paper)] hover:underline underline-offset-4"
              >
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
