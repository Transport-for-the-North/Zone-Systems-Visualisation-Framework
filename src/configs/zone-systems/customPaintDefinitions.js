// Data-driven paint: colour is determined by zone_type_id on each feature.
// Since only one zone system is loaded at a time, the whole layer renders
// as a single colour that changes automatically when the selection changes.
export const zoneBoundaryPaint = {
  "fill-color": [
    "match",
    ["get", "zone_type_id"],
    1, "#3a86ff",   // Combined Authorities — blue
    2, "#3a86ff",
    3, "#ff006e",
    4, "#fb5607",
    5, "#ff6b6b",   // Local Authorities — red
    6, "#ffbe0b",
    7, "#8338ec",
    8, "#52dbc1",
    9, "#a4054a",
    10, "#e252a8",
    11, "#f1ab48",
    12, "#8338ec",
    13, "#3a86ff",
    14, "#eea8c6",
    15, "#fb5607",
    16, "#ffbe0b",
    17, "#8338ec",
    18, "#3a86ff",
    19, "#ff006e",
    27, "#fb5607",
    28, "#ffbe0bb0",
    29, "#51cf66",
    37, "#1a56cc",
    // BRONTE — green
    "#aaaaaa"        // fallback for any unlisted zone type
  ],
  "fill-opacity": 0.3,
  "fill-outline-color": [
    "match",
    ["get", "zone_type_id"],
    1, "#1a56cc",
    2, "#3a86ff",
    3, "#ff006e",
    4, "#fb5607",
    5, "#cc2222",
    6, "#ffbe0b",
    7, "#8338ec",
    8, "#52dbc1",
    9, "#a4054a",
    10, "#e252a8",
    11, "#f1ab48",
    12, "#8338ec",
    13, "#3a86ff",
    14, "#eea8c6",
    15, "#fb5607",
    16, "#ffbe0b",
    17, "#8338ec",
    18, "#3a86ff",
    19, "#ff006e",
    27, "#fb5607",
    28, "#ffbe0bb0",
    29, "#51cf66",
    37, "#1a56cc",
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
