import { cn } from "@/lib/utils"

export type ChainNodeState = "working" | "broken"

export interface ChainNode {
  /** Visual state — solid ink circle or hollow ochre circle */
  state: ChainNodeState
  /** Optional short all-caps label below the node */
  label?: string
  /** Override the break label (default: OFFLINE) for broken nodes */
  breakLabel?: string
}

export interface ChainProps {
  /** Ordered nodes from left to right */
  nodes: ChainNode[]
  /** Visual scale — per spec §3 (Sizes) */
  size?: "sm" | "md" | "lg"
  /** Bold labels (used in "How we work" section) */
  boldLabels?: boolean
  /** Animate nodes building L→R on mount (hero only) */
  animate?: boolean
  /** Additional wrapper classes */
  className?: string
  /** aria-label for assistive tech */
  ariaLabel?: string
}

const SIZE_MAP: Record<NonNullable<ChainProps["size"]>, { diameter: number; labelGap: string }> = {
  sm: { diameter: 18, labelGap: "mt-2" },
  md: { diameter: 22, labelGap: "mt-2" },
  lg: { diameter: 24, labelGap: "mt-3" },
}

/**
 * The Chain motif — Digicracy's single signature visual.
 *
 * Rendering rules (spec §3):
 *   - working node: solid ink circle
 *   - broken node:  hollow ochre circle (1.5px stroke, paper fill)
 *   - line between two working nodes: solid ink
 *   - line where either end is broken: dashed ochre
 *
 * Labels live BELOW each node. For broken nodes, if `breakLabel` is
 * provided (or default "OFFLINE" when no label is set), that replaces
 * the position of the label in ochre.
 *
 * No numbers inside nodes. Ever. Enforced by component API (no slot).
 */
export function Chain({
  nodes,
  size = "md",
  boldLabels = false,
  animate = false,
  className,
  ariaLabel = "Chain diagram",
}: ChainProps) {
  if (nodes.length < 2) {
    throw new Error("<Chain /> requires at least 2 nodes")
  }

  const { diameter, labelGap } = SIZE_MAP[size]

  return (
    <figure
      role="img"
      aria-label={ariaLabel}
      className={cn("w-full", className)}
    >
      <div
        className={cn(
          "flex items-center",
          animate && "chain-animate"
        )}
      >
        {nodes.map((node, i) => {
          const isLast = i === nodes.length - 1
          const next = nodes[i + 1]
          // Line style: dashed ochre if either endpoint is broken
          const linkBroken = !isLast && (node.state === "broken" || next.state === "broken")

          return (
            <span key={i} className="flex items-center" style={isLast ? undefined : { flex: "1 1 0%" }}>
              <span
                className={cn(
                  "chain-node",
                  node.state === "broken" && "chain-node--broken"
                )}
                style={{
                  width: diameter,
                  height: diameter,
                }}
                aria-hidden
              />
              {!isLast && (
                <span
                  className={cn(
                    "chain-link",
                    linkBroken && "chain-link--broken"
                  )}
                  aria-hidden
                />
              )}
            </span>
          )
        })}
      </div>

      {/* Labels row — aligned under each node */}
      {nodes.some((n) => n.label || n.state === "broken") && (
        <div
          className={cn(
            "grid font-mono uppercase tracking-[0.08em]",
            "text-[10px] leading-tight sm:text-[11px]",
            boldLabels ? "font-bold" : "font-normal",
            labelGap
          )}
          style={{
            gridTemplateColumns: `repeat(${nodes.length}, minmax(0, 1fr))`,
          }}
        >
          {nodes.map((node, i) => {
            const isBroken = node.state === "broken"
            const label = node.label ?? (isBroken ? node.breakLabel ?? "OFFLINE" : "")
            return (
              <span
                key={i}
                className={cn(
                  "block text-center",
                  isBroken ? "text-[var(--ochre)]" : "text-[var(--ink)]"
                )}
              >
                {label}
              </span>
            )
          })}
        </div>
      )}
    </figure>
  )
}
