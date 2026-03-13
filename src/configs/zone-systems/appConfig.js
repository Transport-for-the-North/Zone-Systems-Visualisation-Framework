import { termsOfUse } from "./termsOfUse";
import { pages } from "./pages";

export const appConfig = {

  title: "Zone Systems",

  introduction: `
    <p><strong>Zone Systems</strong> provides a spatial reference tool for browsing and inspecting 
    the geographic zone systems used across Transport for the North's analytical models and datasets.</p>
    <p>Use the map page to select a zone system from the dropdown and view its boundaries across the North of England.
    Zone boundaries are sourced directly from the TfN spatial data database.</p>
    <p><strong>Available zone systems include:</strong></p>
    <ul>
      <li><strong>Combined Authorities:</strong> The combined authority boundaries across the North</li>
      <li><strong>Local Authorities:</strong> Local authority district boundaries</li>
    </ul>
  `,

  background: "",
  methodology: "",

  homePageFragments: [
    {
      content: `
        <h3>What are Zone Systems?</h3>
        <p>Zone systems are the geographic building blocks used in transport modelling and analysis.
        Each model or dataset divides the North into a set of zones, and this tool lets you 
        browse and compare those zone geographies.</p>
        <h3>How to Use</h3>
        <ul>
          <li><strong>Open the Zone Systems page</strong> using the navigation bar above</li>
          <li><strong>Select a zone system</strong> from the dropdown in the sidebar panel</li>
          <li><strong>Explore the map</strong> — zone boundaries will appear immediately</li>
          <li><strong>Hover over zones</strong> to see zone names and IDs</li>
        </ul>`,
      sectionTitle: "Getting Started",
      alignment: "left",
    },
    {
      content: `
        <h3>Data Source</h3>
        <p>Zone boundaries are stored in the <strong>spatial_data.zones</strong> table in the 
        TfN spatial database. Each zone belongs to a zone type, identified by a 
        <strong>zone_type_id</strong> from the <strong>foreign_keys.zone_type_list</strong> table.</p>
        <h3>Zone Type Coverage</h3>
        <ul>
          <li><strong>Combined Authorities</strong> — top-level administrative geography</li>
          <li><strong>Local Authorities</strong> — local authority districts</li>
        </ul>
        <p>Additional zone systems can be added by updating the zone type list in the page configuration.</p>`,
      sectionTitle: "Data",
      alignment: "left",
    },
    {
      content: `
        <h3>Technical Notes</h3>
        <p>Zone boundaries are served as Mapbox Vector Tiles via the 
        <strong>/api/vectortiles/zones/{zoneTypeId}/{z}/{x}/{y}</strong> endpoint.
        Tiles are cached for 6 hours server-side.</p>
        <h3>Support</h3>
        <p>For questions about zone system coverage or data accuracy, 
        please contact the TfN analytics team.</p>`,
      sectionTitle: "Technical",
      alignment: "left",
    },
  ],

  legalText: termsOfUse,
  contactText: "For support or data queries, please contact the TfN analytics team.",
  contactEmail: "analytics@transportforthenorth.com",
  logoImage: "img/tfn-logo-fullsize.png",
  backgroundImage: "img/bsip/hero.jpg",
  logoutButtonImage: "img/burgerIcon.png",
  logoutImage: "img/logout.png",

  appPages: [
    pages.zoneSystemsPage,
  ],

  footer: {
    creditsText: "© Transport for the North 2025. All rights reserved.",
    privacyPolicyLink: "https://www.transportforthenorth.com/privacy-policy/",
    cookiesLink: "https://www.transportforthenorth.com/cookies/",
    contactUsLink: "https://www.transportforthenorth.com/contact-us/",
  },
};
