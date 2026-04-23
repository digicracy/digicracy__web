import type { Metadata } from "next"
import { PageShell } from "@/components/layout/page-shell"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Digicracy — press, general, and research enquiries.",
}

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Section"
      title="Contact"
      lede="We read every email. Use the right address for faster response."
    >
      <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <dt className="ds-label ds-label--ochre">General</dt>
          <dd className="mt-2 font-mono text-sm text-[var(--ink)]">
            <a
              href={`mailto:${site.email.general}`}
              className="hover:underline underline-offset-4"
            >
              {site.email.general}
            </a>
          </dd>
        </div>
        <div>
          <dt className="ds-label ds-label--ochre">Press</dt>
          <dd className="mt-2 font-mono text-sm text-[var(--ink)]">
            <a
              href={`mailto:${site.email.press}`}
              className="hover:underline underline-offset-4"
            >
              {site.email.press}
            </a>
            <span className="mt-1 block font-serif italic text-[var(--ink)]/70">
              Response within 24 hours
            </span>
          </dd>
        </div>
      </dl>
    </PageShell>
  )
}
