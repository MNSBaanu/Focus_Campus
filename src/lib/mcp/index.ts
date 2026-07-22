import { defineMcp } from "@lovable.dev/mcp-js";
import listPackages from "./tools/list-packages";
import listEventTypes from "./tools/list-event-types";
import listFeaturedShoots from "./tools/list-featured-shoots";
import getStudioInfo from "./tools/get-studio-info";

export default defineMcp({
  name: "focus-campus-mcp",
  title: "Focus — Campus Event Photography",
  version: "0.1.0",
  instructions:
    "Tools for the Focus campus event photography studio. Use `list_packages` for pricing tiers, `list_event_types` for the kinds of campus events covered, `list_featured_shoots` for recent work, and `get_studio_info` for contact and turnaround details.",
  tools: [listPackages, listEventTypes, listFeaturedShoots, getStudioInfo],
});
