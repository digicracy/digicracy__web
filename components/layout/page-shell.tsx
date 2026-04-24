import { cn } from "@/lib/utils"

interface PageShellProps {
  eyebrow?: string
  title: string
  lede?: string
  children?: React.ReactNode
  className?: string
}

/**
 * Generic page shell for non-homepage routes.
 * Standard chrome: eyebrow label + title + optional lede.
 */
export function PageShell({ eyebrow, title, lede, children, className }: PageShellProps) {
  return (
    <article className={cn("border-b border-[var(--ink)]", className)}>
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
        {eyebrow && <p className="ds-label ds-label--ochre">{eyebrow}</p>}
        <h1 className="balance mt-3 max-w-[24ch] font-mono text-3xl font-bold leading-[1.15] tracking-tight text-[var(--ink)] sm:text-4xl">
          {title}
        </h1>
        {lede && (
          <p className="prose-digicracy mt-5 text-[17px] leading-[1.65] text-[var(--ink)] sm:text-lg">
            {lede}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </article>
  )
}
