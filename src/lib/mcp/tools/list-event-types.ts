import { defineTool } from "@lovable.dev/mcp-js";

const eventTypes = [
  { slug: "cultural-fest", label: "Cultural Fest", notes: "Multi-day fest with concerts, competitions, stalls." },
  { slug: "convocation", label: "Convocation / Graduation", notes: "Ceremony, robes, family portraits, stage moments." },
  { slug: "sports-week", label: "Sports Week", notes: "Fast-shutter action, medal ceremonies, team portraits." },
  { slug: "hackathon", label: "Hackathon", notes: "24–48 hr coverage, candid maker moments, closing pitches." },
  { slug: "theatre-night", label: "Theatre / Cultural Night", notes: "Low-light stage photography, dress rehearsal + show." },
  { slug: "orientation", label: "Orientation / Freshers", notes: "Icebreakers, group portraits, welcome address." },
  { slug: "conference", label: "Conference / Keynote", notes: "Speakers, audience, sponsor logos, press-ready selects." },
  { slug: "alumni-meet", label: "Alumni Meet", notes: "Reunions, networking mingles, gala dinners." },
];

export default defineTool({
  name: "list_event_types",
  title: "List supported event types",
  description:
    "Returns the campus event types Focus covers, with a short note on what each shoot typically involves.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(eventTypes, null, 2) }],
    structuredContent: { event_types: eventTypes },
  }),
});
