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
                name: "Data Categories",
        
        // Type: "geojson" - API returns GeoJSON with geometry
        // The API response should be a FeatureCollection with features
        type: "geojson",
        
        // Style: "polygon-categorical" - Discrete categories with specific colors
        // Each unique value in valueField gets its own color
        style: "polygon-categorical",
        
        // Field containing the category value
        valueField: "category",
        
        dataSource: "api",
        dataPath: "/api/data/categories",
        
        // UI controls
        enforceNoColourSchemeSelector: false,  // Allow users to change color scheme
        enforceNoClassificationMethod: true,   // Hide classification method (not applicable for categorical)

      },
    ],

    // ----- METADATA TABLES -----
    metadataTables: [],
  },
};