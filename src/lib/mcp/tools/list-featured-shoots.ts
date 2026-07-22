import { defineTool } from "@lovable.dev/mcp-js";

const shoots = [
  {
    id: "spandan-24",
    title: "Spandan '24",
    campus: "IIT Bombay",
    event_type: "cultural-fest",
    frames: 812,
    highlights: ["Main stage headliner", "3-day fest", "Reel-ready dumps"],
  },
  {
    id: "convocation-25",
    title: "Convocation 2025",
    campus: "Delhi University",
    event_type: "convocation",
    frames: 430,
    highlights: ["Chief guest address", "Robed portraits", "Family moments"],
  },
  {
    id: "hack-the-north",
    title: "Hack The North",
    campus: "BITS Pilani",
    event_type: "hackathon",
    frames: 604,
    highlights: ["36-hour build", "Sponsor deliverables", "Final pitches"],
  },
  {
    id: "theatre-night-vii",
    title: "Theatre Night VII",
    campus: "St. Stephen's College",
    event_type: "theatre-night",
    frames: 275,
    highlights: ["Dress rehearsal", "Full show", "Backstage documentary"],
  },
];

export default defineTool({
  name: "list_featured_shoots",
  title: "List featured shoots",
  description:
    "Returns a curated list of recent Focus campus shoots with campus, event type, and highlights.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(shoots, null, 2) }],
    structuredContent: { shoots },
  }),
});
