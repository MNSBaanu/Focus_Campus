import { defineTool } from "@lovable.dev/mcp-js";

const info = {
  name: "Focus",
  tagline: "Event photography for universities and campuses.",
  based_in: "India",
  travels: "Pan-India, with additional travel quoted on request.",
  contact: {
    email: "hello@focus.studio",
    instagram: "@focus.campus",
  },
  turnaround: "Same-day social selects; full gallery in 48 hours.",
  booking_url: "/#booking",
  notes: "Invoiced through your university with a student discount baked in.",
};

export default defineTool({
  name: "get_studio_info",
  title: "Get studio info",
  description:
    "Returns basic contact, turnaround, and booking info for the Focus campus photography studio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
    structuredContent: info,
  }),
});
