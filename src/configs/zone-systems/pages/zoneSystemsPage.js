import { termsOfUse } from "../termsOfUse";
import { combinedAuthorityLayer, combinedAuthorityInteractionLayer } from "../mapLayers";
import { zoneBoundaryPaint } from "../customPaintDefinitions";

const zoneTypeValues = [
  { displayValue: "NoHAM v2.10", paramValue:1 , colourValue: { value: "YlGnBu", label: "YlGnBu" } },
  { displayValue: "bsip_north_east", paramValue: 2 },
  { displayValue: "bsip_north_west", paramValue: 3 },
  { displayValue: "bsip_yorkshire_humber", paramValue: 4 },
  { displayValue: "NoRMS v2.11",    paramValue:5  },
  { displayValue: "MSOA 2021 BFC v5", paramValue: 6 },
  { displayValue: "MSOA 2021 BGC v2", paramValue: 7 },
  { displayValue: "LAD 2021", paramValue: 8 },
  { displayValue: "24 CA Sectors", paramValue: 9 },
  { displayValue: "23 CA Sectors", paramValue: 10 },
  { displayValue: "LAD 2020", paramValue: 11 },
  { displayValue: "WPC", paramValue: 12 },
  { displayValue: "TfN Area Type", paramValue: 13 },
  { displayValue: "MSOA 2011 BFE v3", paramValue: 14 },
  { displayValue: "STB 2023", paramValue: 15 },
  { displayValue: "TRSE Combined Authorities", paramValue: 16 },
  { displayValue: "Output Areas 2021", paramValue: 17 },
  { displayValue: "LAD 2023 - Simplified boundaries", paramValue: 18 },
  { displayValue: "LSOA 2021 v8", paramValue: 19 },
  { displayValue: "EVCI-LAD_Combined", paramValue: 27 },
  { displayValue: "Output_Areas_2021-England", paramValue: 28 },
  { displayValue: "LAD 2024",paramValue:29  }, 
  { displayValue: "BRONTE",       paramValue:37  },
];


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
      {
        uniqueId: "SelectableZones",
        name: "Selection Zones",
        type: "tile",
        source: "api",
        path: "/api/vectortiles/zones/{zoneTypeId}/{z}/{x}/{y}",
        pathTemplate: "/api/vectortiles/zones/{zoneTypeId}/{z}/{x}/{y}",
        sourceLayer: "zones",
        geometryType: "polygon",
        //visualisationName: "Data Categories",
        isHoverable: true,
        isStylable: true,  // Not styled by data (just for selection)
        shouldHaveTooltipOnHover: true,
        shouldHaveLabel: false,
        shouldHaveOpacityControl: false,
        zoomToFeaturePlaceholderText: "Search by ID or name...",
        customPaint: zoneBoundaryPaint,
      },
    ],
    
    // -
    // ---- VISUALIZATIONS -----
    visualisations: [
      //{
      //   name: "Data Categories",
        
      //   // Type: "geojson" - API returns GeoJSON with geometry
      //   // The API response should be a FeatureCollection with features
      //   type: "geojson",
        
      //   // Style: "polygon-categorical" - Discrete categories with specific colors
      //   // Each unique value in valueField gets its own color
      //   style: "polygon-categorical",
        
      //   // Field containing the category value
      //   valueField: "category",
        
      //   dataSource: "api",
      //   dataPath: "/api/data/categories",
        
      //   // UI controls
      //   enforceNoColourSchemeSelector: false,  // Allow users to change color scheme
      //   enforceNoClassificationMethod: true,   // Hide classification method (not applicable for categorical)

      // },
    ],

    // ----- METADATA TABLES -----
    metadataTables: [],
    filters: [
      {
        filterName: "Zone System",
        paramName: "zoneTypeId",
        type: "dropdown",
        shouldBeBlankOnInit: true,
        defaultValue: null,
        isClearable: false,
        visualisations: ["Selection Zones"],
        actions: [
          {
            action: "UPDATE_PARAMETERISED_LAYER",
            payload: { targetLayer: "Selection Zones" },
          },
        ],
        values: {
          source: "local",
          values: zoneTypeValues,
        },
        info: "Select a zone system to display its boundaries on the map.",
      },
    ],
  },
};