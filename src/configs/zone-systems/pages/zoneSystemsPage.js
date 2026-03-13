import { termsOfUse } from "../termsOfUse";
import { zoneBoundaryPaint } from "../customPaintDefinitions";

// ─────────────────────────────────────────────────────────────────────────────
// Zone type IDs come from foreign_keys.zone_type_list in the database.
// Run:  SELECT id, name FROM foreign_keys.zone_type_list ORDER BY id;
// to get the full list and update the values array below.
// Known IDs from the existing codebase:
//   10 → Combined Authorities
//   29 → Local Authorities
// ─────────────────────────────────────────────────────────────────────────────
// colourValue on the first entry is a workaround for a vis-core bug where
// SET_MAP crashes when visualisations is empty. findFirstColourValue() finds
// this value and short-circuits before the crash. It has no visual effect.
const zoneTypeValues = [
  { displayValue: "Combined Authorities", paramValue: 10, colourValue: { value: "YlGnBu", label: "YlGnBu" } },
  { displayValue: "Local Authorities",    paramValue: 29 },
  { displayValue: "BRONTE",              paramValue: 37 }, 
  { displayValue: "NoHAM Zones",       paramValue: 1 },
  { displayValue: "Output Areas",      paramValue: 28 }
];

export const zoneSystemsPage = {
  pageName: "Zone Systems",
  url: "/zone-systems",
  type: "MapLayout",

  about: `
    <p>Use the dropdown in the panel to select a zone system from the database.
    The map will update to show the boundaries for the selected zone system.</p>
    <p>Zone boundaries are sourced directly from the <strong>spatial_data.zones</strong> table.</p>
  `,

  legalText: termsOfUse,
  termsOfUse: termsOfUse,

  config: {

    // ── LAYERS ────────────────────────────────────────────────────────────────

    layers: [
      // The selected zone system — hidden until a zone type is chosen from
      // the dropdown. The {zoneTypeId} placeholder is substituted in-place
      // by UPDATE_PARAMETERISED_LAYER when the filter value changes.
      {
        name: "Zone System",
        type: "tile",
        source: "api",
        path: "/api/vectortiles/zones/{zoneTypeId}/{z}/{x}/{y}",
        pathTemplate: "/api/vectortiles/zones/{zoneTypeId}/{z}/{x}/{y}",
        missingParams: ["zoneTypeId"],
        sourceLayer: "zones",
        geometryType: "polygon",
        customPaint: zoneBoundaryPaint,
        isHoverable: true,
        isStylable: false,
        shouldHaveTooltipOnHover: true,
        shouldHaveLabel: false,
        shouldHaveOpacityControl: false,
        hoverTipShouldIncludeMetadata: false,
        zoomToFeaturePlaceholderText: "Search by name...",
      },
    ],

    // ── VISUALISATIONS ────────────────────────────────────────────────────────

    // No data visualisation — zone boundaries are rendered directly from tiles.
    visualisations: [],

    // ── METADATA TABLES ───────────────────────────────────────────────────────

    metadataTables: [],

    // ── FILTERS ───────────────────────────────────────────────────────────────

    filters: [
      {
        filterName: "Zone System",
        paramName: "zoneTypeId",
        type: "dropdown",
        shouldBeBlankOnInit: true,
        defaultValue: null,
        isClearable: false,
        visualisations: ["Zone System"],
        actions: [
          {
            action: "UPDATE_PARAMETERISED_LAYER",
            payload: { targetLayer: "Zone System" },
          },
        ],
        values: {
          source: "local",
          values: zoneTypeValues,
        },
        info: "Select a zone system to display its boundaries on the map.",
      },
    ],

    // ── ADDITIONAL FEATURES ───────────────────────────────────────────────────

    additionalFeatures: {},
  },
};
