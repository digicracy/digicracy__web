import { Nav } from "@/components/layout/nav"
import { Footer } from "@/components/layout/footer"

/**
 * Site shell — wraps every page with Nav + Footer.
 *
 * Kept server-only (no `"use client"`) because Digicracy is a content site
 * with no auth/dashboard carve-outs. If a bare-layout route set is needed
 * later, convert to a ConditionalShell like the reference project.
 */
export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-[var(--ink)] focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:text-[var(--paper)]"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="min-h-[60vh]">
        {children}
      </main>
      <Footer />
    </>
  )
}
