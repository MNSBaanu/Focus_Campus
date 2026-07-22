import { defineTool } from "@lovable.dev/mcp-js";

const packages = [
  {
    id: "club-night",
    tier: "I",
    title: "Club Night",
    price_inr: 12000,
    unit: "up to 4 hours",
    tagline: "Perfect for a single event, one venue.",
    includes: [
      "One photographer",
      "150+ edited frames",
      "48-hour delivery",
      "Private Google Drive gallery",
    ],
  },
  {
    id: "fest-weekend",
    tier: "II",
    title: "Fest Weekend",
    price_inr: 42000,
    unit: "3 days · multi-venue",
    tagline: "Cultural fests, sports weeks, orientation.",
    includes: [
      "Two-photographer crew",
      "600+ edited frames",
      "Same-day social selects",
      "Daily reel-ready dumps",
      "Poster & press-kit exports",
    ],
    badge: "Most booked",
  },
  {
    id: "yearbook",
    tier: "III",
    title: "The Yearbook",
    price_inr: 120000,
    unit: "full academic year",
    tagline: "Coverage across every major event, term-long.",
    includes: [
      "6–8 events / year",
      "Dedicated campus lead",
      "Curated year-end zine (printed)",
      "Archive on custom subdomain",
      "Media training for your club",
    ],
  },
];

export default defineTool({
  name: "list_packages",
  title: "List photography packages",
  description:
    "Returns Focus × Campus photography packages, including tier, price in INR, coverage unit, and what's included.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(packages, null, 2) }],
    structuredContent: { packages },
  }),
});
