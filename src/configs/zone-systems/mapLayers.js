import { parentBoundaryPaint, invisiblePolygonCustomPaint } from "./customPaintDefinitions";

// Combined Authority boundaries shown as a permanent context layer.
// The "hide_" prefix excludes this layer from the map layer control panel.
export const combinedAuthorityLayer = {
  name: "hide_CA Boundaries",
  type: "tile",
  source: "api",
  path: "/api/vectortiles/zones/10/{z}/{x}/{y}",
  sourceLayer: "zones",
  geometryType: "line",
  customPaint: parentBoundaryPaint,
  isHoverable: false,
  isStylable: false,
  shouldHaveTooltipOnHover: false,
  shouldHaveLabel: true,
  labelZoomLevel: 7,
  labelNulls: false,
  hoverNulls: false,
  hoverTipShouldIncludeMetadata: false,
};

// Invisible polygon overlay for Combined Authority hover/tooltip interaction
export const combinedAuthorityInteractionLayer = {
  name: "hide_CA Interaction",
  type: "tile",
  source: "api",
  path: "/api/vectortiles/zones/10/{z}/{x}/{y}",
  sourceLayer: "zones",
  geometryType: "polygon",
  customPaint: invisiblePolygonCustomPaint,
  isHoverable: false,
  isStylable: false,
  shouldHaveTooltipOnHover: true,
  shouldHaveLabel: false,
  labelNulls: false,
  hoverNulls: true,
  hoverTipShouldIncludeMetadata: false,
};
