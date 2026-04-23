/**
 * /llms.txt — machine-readable description of this site for large language
 * models and AI agents. Served with long CDN cache.
 * Spec: https://llmstxt.org/
 */
export async function GET() {
  const content = `# Digicracy™ — India's last-mile digital governance

> Digicracy is a non-profit research and advocacy initiative that documents where India's digital public services break at the last step — portal exists, gateway broken; tax online, penalty offline; "faceless" service with biometrics in person.

## What Digicracy does

- Researches specific last-mile digital governance gaps across Indian states
- Files RTIs (Right to Information requests) to understand why
- Publishes the findings and the full reply record
- Pursues representations with authorities and grievance channels (CPGRAMS, CM Windows)
- Litigates (Public Interest Litigation) where administrative routes fail

## How we work

Every investigation follows this chain:
RESEARCH → FILE RTIs → PUBLISH → REPRESENT → (LITIGATE, if needed)

Some investigations stop at publish. Some go to court. The full record stays public.

## Key pages

- Homepage: /
- Research (publications): /research
- Filings (RTI database): /filings
- Reports (long-form): /reports
- Press (press kit + citations): /press
- About (mission, trustees, funding): /about
- Contact: /contact

## Legal

- Disclaimer: Digicracy™ is not a law firm. Content is informational, not legal advice.
  RTIs are filed by named individuals in personal capacity.
- Privacy: /privacy  ·  Terms: /terms  ·  Cookies: /cookies

## Contact

- General:  hello@digicracy.org
- Press:    press@digicracy.org  (response within 24 hours)
- Location: Chandigarh, India
- Founded:  2026
- Trust:    Digicracy Foundation (registration pending)
- Trademark: DIGICRACY filed in Classes 41 + 45

## Links

- Website:  https://digicracy.org
- RSS:      https://digicracy.org/feed.xml
- Sitemap:  https://digicracy.org/sitemap.xml

## Technical

- Built with Next.js 16, React 19, TypeScript (strict).
- Analytics: Plausible (privacy-friendly, cookie-less). No Google Analytics.
- Source of truth: publications and RTI replies are archived here permanently
  and submitted to the Internet Archive on publish.
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  })
}
