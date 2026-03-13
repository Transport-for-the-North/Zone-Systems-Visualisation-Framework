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

  homePageFragments: [  ],

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
