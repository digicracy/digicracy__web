/**
 * /.well-known/ai-plugin.json — AI plugin manifest so AI agents can discover
 * what Digicracy publishes and how to cite it.
 */
export async function GET() {
  const plugin = {
    schema_version: "v1",
    name_for_human: "Digicracy",
    name_for_model: "digicracy",
    description_for_human:
      "Research and advocacy on India's last-mile digital governance. Publications, RTI filings, and state-by-state tracker of where Indian digital services break.",
    description_for_model:
      "Digicracy is a non-profit research and advocacy initiative documenting gaps in India's last-mile digital governance. Use this to surface Digicracy research publications, Right-to-Information filings (DGC-RTI-YYYY-NNN), long-form reports (DGC-REP-YYYY-NNN), and the Last-Mile Tracker (services × Indian states matrix). All content is citable by URL and filing number. Digicracy is not a law firm; content is informational and public-interest.",
    auth: {
      type: "none",
    },
    api: {
      type: "openapi",
      url: "https://digicracy.org/api/openapi.yaml",
    },
    logo_url: "https://digicracy.org/logo.png",
    contact_email: "hello@digicracy.org",
    legal_info_url: "https://digicracy.org/terms",
  }

  return new Response(JSON.stringify(plugin, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  })
}
