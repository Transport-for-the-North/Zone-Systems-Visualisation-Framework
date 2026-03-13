import { termsOfUse } from "../termsOfUse";
import { combinedAuthorityLayer, combinedAuthorityInteractionLayer } from "../mapLayers";

export const zoneSystemsPage = {
  // ===== BASIC PAGE INFO =====
  
  pageName: "Zone Systems Page",
  url: "/data-analysis",
  type: "MapLayout",
  
  about: `
    <p>This page demonstrates GeoJSON-based visualization</p>
    <ul>
      <li>Direct GeoJSON rendering (geometry included in API response)</li>
    </ul>
  `,
  
  category: null,
  legalText: termsOfUse,
  termsOfUse: termsOfUse,
  
  // ===== PAGE CONFIGURATION =====
  config: {
    // ----- MAP LAYERS -----
    layers: [
      combinedAuthorityLayer,
      combinedAuthorityInteractionLayer,
    ],

    // ----- VISUALIZATIONS -----
    visualisations: [
      {
        name: "Zone Boundaries",
        type: "tile",
        source: "api",
        path: "/api/vectortiles/zones/1/{z}/{x}/{y}",
        sourceLayer: "zones",
        geometryType: "polygon",
        style: "polygon-fill",
        isHoverable: true,
        isStylable: true,
        shouldHaveTooltipOnHover: true,
        shouldHaveLabel: true,
        labelField: "name",
      },
    ],

    // ----- METADATA TABLES -----
    metadataTables: [],
  },
};