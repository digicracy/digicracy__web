import type { Metadata } from "next"
import { PageShell } from "@/components/layout/page-shell"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Digicracy handles data: what we collect, how long we keep it, and who we share it with.",
}

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      lede="Short version: we collect the minimum needed, we don't sell it, and we use privacy-friendly analytics."
    >
      <div className="prose-digicracy space-y-5 text-base text-[var(--ink)] sm:text-[17px]">
        <p>
          Digicracy™ is a non-profit research and advocacy initiative.
          This policy is a draft placeholder. A full, auditable policy
          publishes before public launch.
        </p>
        <p>
          Analytics: we use Plausible — a privacy-friendly, cookie-less
          analytics service. We do not use Google Analytics.
        </p>
        <p>
          Newsletter: if you subscribe, we store only your email and the
          date you subscribed. Unsubscribe is one click from every email.
        </p>
      </div>
    </PageShell>
  )
}
