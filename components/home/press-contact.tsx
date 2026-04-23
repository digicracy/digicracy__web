import Link from "next/link"
import { site } from "@/lib/site"

/**
 * Press & Contact — two columns.
 * Spec §7.
 */
export function PressContact() {
  return (
    <section
      aria-labelledby="press-heading"
      className="border-b border-[var(--ink)]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-16">
        {/* Left — stamped press block */}
        <div>
          <div className="ds-stamp block max-w-md p-5">
            <p className="ds-label ds-label--ochre" id="press-heading">
              Press Enquiries
            </p>
            <p className="mt-2 font-mono text-sm text-[var(--ink)]">
              <a
                href={`mailto:${site.email.press}`}
                className="hover:underline underline-offset-4"
              >
                {site.email.press}
              </a>
            </p>
            <p className="mt-1 font-serif text-sm italic text-[var(--ink)]">
              Response within 24 hours
            </p>
            <p className="mt-3">
              <Link href="/press" className="ds-link font-mono text-sm">
                Press kit →
              </Link>
            </p>
          </div>
        </div>

        {/* Right — muted italic placeholder */}
        <div className="flex items-start">
          <p className="font-serif text-base italic text-[var(--ink)]/60">
            Press citations will appear here as they accumulate.
          </p>
        </div>
      </div>
    </section>
  )
}
