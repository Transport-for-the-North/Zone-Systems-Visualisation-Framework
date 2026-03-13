// Data-driven paint: colour is determined by zone_type_id on each feature.
// Since only one zone system is loaded at a time, the whole layer renders
// as a single colour that changes automatically when the selection changes.
export const zoneBoundaryPaint = {
  "fill-color": [
    "match",
    ["get", "zone_type_id"],
    10, "#3a86ff",   // Combined Authorities — blue
    29, "#ff6b6b",   // Local Authorities — red
    37, "#51cf66",
    28, "#1a56cc",   // BRONTE — green
    "#aaaaaa"        // fallback for any unlisted zone type
  ],
  "fill-opacity": 0.3,
  "fill-outline-color": [
    "match",
    ["get", "zone_type_id"],
    10, "#1a56cc",
    29, "#cc2222",
    37, "#2d9e45",
    28, "#1a56cc",
    "#666666"
  ],
};

export const parentBoundaryPaint = {
  "line-color": "#808080",
  "line-width": 1,
  "line-opacity": 1,
};

export const invisiblePolygonCustomPaint = {
  "fill-opacity": 0,
};
