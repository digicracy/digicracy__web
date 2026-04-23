import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

/**
 * Dynamic Open Graph image generator.
 *
 * Query params:
 *   ?title=...      — main line (default: "Digicracy")
 *   ?desc=...       — secondary line (default: tagline)
 *   ?kind=home|research|filing|report  — style variant
 *
 * Colours locked to the three-colour brand palette:
 *   paper #f4efe6 · ink #152a3a · ochre #b4843a
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  const title = (searchParams.get("title") || "Digicracy").slice(0, 120)
  const desc =
    searchParams.get("desc") ||
    "Research and publish the gaps in India's last-mile digital governance."
  const kind = searchParams.get("kind") || "home"

  const PAPER = "#f4efe6"
  const INK = "#152a3a"
  const OCHRE = "#b4843a"

  // Chain composition — 5 nodes, last two broken (mirrors hero)
  const nodes: Array<"working" | "broken"> = [
    "working",
    "working",
    "broken",
    "broken",
    "broken",
  ]

  const kindLabel =
    kind === "research"
      ? "RESEARCH"
      : kind === "filing"
        ? "FILING"
        : kind === "report"
          ? "REPORT"
          : null

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: PAPER,
          color: INK,
          padding: "72px 80px",
          fontFamily:
            '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
          position: "relative",
        }}
      >
        {/* Top rule — 1px ink */}
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 80,
            right: 80,
            height: 1,
            backgroundColor: INK,
          }}
        />

        {/* Logo top-left */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: INK,
          }}
        >
          DIGICRACY
          <span style={{ fontSize: 14, marginLeft: 2 }}>™</span>
        </div>

        {/* Optional kind badge top-right */}
        {kindLabel && (
          <div
            style={{
              position: "absolute",
              top: 72,
              right: 80,
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: OCHRE,
            }}
          >
            {kindLabel}
          </div>
        )}

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 72 ? 44 : 60,
            fontWeight: 700,
            lineHeight: 1.15,
            color: INK,
            maxWidth: 1040,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </div>

        {/* Description — serif italic */}
        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            lineHeight: 1.4,
            color: INK,
            opacity: 0.78,
            maxWidth: 920,
            fontFamily: '"Source Serif 4", Georgia, serif',
            fontStyle: "italic",
          }}
        >
          {desc}
        </div>

        {/* Chain motif — above bottom strip */}
        <div
          style={{
            marginTop: 56,
            display: "flex",
            alignItems: "center",
            width: 520,
          }}
        >
          {nodes.map((state, i) => {
            const isLast = i === nodes.length - 1
            const next = nodes[i + 1]
            const linkBroken = !isLast && (state === "broken" || next === "broken")
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flex: isLast ? "0 0 auto" : "1 1 0",
                }}
              >
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 9999,
                    backgroundColor: state === "working" ? INK : PAPER,
                    border: `2px solid ${state === "working" ? INK : OCHRE}`,
                  }}
                />
                {!isLast && (
                  <div
                    style={{
                      flex: "1 1 auto",
                      height: 0,
                      borderTop: linkBroken
                        ? `2px dashed ${OCHRE}`
                        : `2px solid ${INK}`,
                      minWidth: 36,
                    }}
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom rule + tagline */}
        <div
          style={{
            position: "absolute",
            bottom: 72,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: INK,
          }}
        >
          <span style={{ color: OCHRE }}>ONLINE UNTIL IT ISN&apos;T.</span>
          <span style={{ opacity: 0.7 }}>DIGICRACY.ORG</span>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            right: 80,
            height: 1,
            backgroundColor: INK,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
