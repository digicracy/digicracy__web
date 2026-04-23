/**
 * Monthly Digest — centred, bounded top/bottom by thin ink rules.
 * Spec §8.
 *
 * This is a server component that renders the form. The submit handler
 * should be wired up to a newsletter provider (Buttondown/Ghost/Mailchimp)
 * before launch. For now, the form POSTs to /api/subscribe which can be
 * implemented as a route handler.
 */
export function MonthlyDigest() {
  return (
    <section
      aria-labelledby="digest-heading"
      className="border-b border-[var(--ink)]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-xl text-center">
          <h2 id="digest-heading" className="ds-label ds-label--ink">
            Monthly Digest
          </h2>
          <p className="mt-3 font-serif text-base italic text-[var(--ink)]">
            One email a month. Research, investigations, and updates.
          </p>

          <form
            action="/api/subscribe"
            method="post"
            className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:gap-0"
          >
            <label htmlFor="digest-email" className="sr-only">
              Email address
            </label>
            <input
              id="digest-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="your@email.address"
              className="flex-1 border border-[var(--ink)] bg-transparent px-4 py-3 font-mono text-sm text-[var(--ink)] placeholder:text-[var(--ink)]/40 focus:border-[var(--ochre)] sm:border-r-0"
            />
            <button type="submit" className="ds-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
