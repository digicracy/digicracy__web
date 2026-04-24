import { Chain } from "@/components/chain"

/**
 * How We Work — single wide chain, 5 labelled nodes.
 * Spec §6.
 */
export function HowWeWork() {
  return (
    <section
      aria-labelledby="how-we-work-heading"
      id="how-we-work"
      className="border-b border-[var(--ink)]"
    >
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
        <h2 id="how-we-work-heading" className="ds-label ds-label--ink">
          How We Work
        </h2>

        <div className="mt-8">
          <Chain
            ariaLabel="Our workflow — research, file RTIs, publish, represent all work; litigate is a last-resort off-path step"
            size="lg"
            boldLabels
            nodes={[
              { state: "working", label: "RESEARCH" },
              { state: "working", label: "FILE RTIs" },
              { state: "working", label: "PUBLISH" },
              { state: "working", label: "REPRESENT" },
              { state: "broken", label: "LITIGATE" },
            ]}
          />
        </div>

        <p className="mt-8 max-w-[56ch] font-serif text-[17px] italic leading-[1.55] text-[var(--ink)] sm:text-lg">
          Every investigation follows this chain. Some stop at publish. Some go
          to court.
        </p>
      </div>
    </section>
  )
}
