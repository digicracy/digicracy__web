import { NextResponse } from "next/server"

/**
 * Newsletter subscribe endpoint — stub.
 *
 * Pre-launch: wire this to Buttondown / Ghost / Mailchimp per build plan § Stage 2.
 * For now, accepts the email and redirects back to the homepage with a success flag.
 */
export async function POST(req: Request) {
  const formData = await req.formData()
  const email = String(formData.get("email") || "").trim()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.redirect(new URL("/?subscribe=error", req.url), 303)
  }

  // TODO: forward to newsletter provider
  // e.g. await fetch(`https://api.buttondown.email/...`, { ... })

  return NextResponse.redirect(new URL("/?subscribe=ok", req.url), 303)
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed. POST only." },
    { status: 405 }
  )
}
