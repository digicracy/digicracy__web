import type { Metadata } from "next"
import { PageShell } from "@/components/layout/page-shell"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "What cookies digicracy.org sets, and what we ask consent for.",
}

export default function CookiesPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Cookie Policy"
      lede="We aim to set as few cookies as possible."
    >
      <div className="prose-digicracy space-y-5 text-base text-[var(--ink)] sm:text-[17px]">
        <p>
          We do not set any tracking cookies. Analytics is served by Plausible,
          which is cookie-less and does not track individual users.
        </p>
        <p>
          If a future feature requires a functional cookie (for example, to
          remember a dismissed announcement), this page updates first.
        </p>
      </div>
    </PageShell>
  )
}
