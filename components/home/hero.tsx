import Link from "next/link"
import { Chain } from "@/components/chain"

/**
 * Hero — two columns, equal width, separated by thin ink rule.
 * Spec §2.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="border-b border-[var(--ink)]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 lg:grid-cols-2">
        {/* Left column */}
        <div className="border-[var(--ink)] px-4 py-12 sm:px-6 lg:border-r lg:px-10 lg:py-16">
          <h1
            id="hero-heading"
            className="font-mono text-3xl font-bold leading-[1.15] tracking-tight text-[var(--ink)] sm:text-4xl lg:text-[2.6rem]"
          >
            Some services
            <br />
            in India are digital.
            <br />
            Some aren&apos;t.
          </h1>

          <p className="prose-digicracy mt-6 text-base leading-[1.6] text-[var(--ink)] sm:text-[17px]">
            We research and publish the gaps in India&apos;s last-mile digital
            governance. Services that work online until the last step, where
            they break — tax online, penalty offline; portal exists, gateway
            broken; &ldquo;faceless&rdquo; service, biometrics still in person.
          </p>

          <div className="mt-7 flex flex-col gap-2 font-mono text-sm sm:flex-row sm:gap-6">
            <Link href="/research" className="ds-link">
              Read the research →
            </Link>
            <Link href="/about#how-we-work" className="ds-link">
              How we work →
            </Link>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
          <Chain
            ariaLabel="The shape of most Indian digital services — five-node chain, first two working, remaining three broken"
            size="md"
            animate
            nodes={[
              { state: "working" },
              { state: "working" },
              { state: "broken", label: "OFFLINE" },
              { state: "broken", label: "" },
              { state: "broken", label: "" },
            ]}
          />
          <p className="ds-label ds-label--ochre mt-5 text-center">
            The shape of most Indian digital services
          </p>
        </div>
      </div>
    </section>
  )
}
