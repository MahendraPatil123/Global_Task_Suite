// import { PublicClientApplication } from "@azure/msal-browser";

// const msalConfig = {
//     auth: {
//         clientId: "e35be651-d860-4ab9-93ac-06e2d774a60c", 
//         authority: "48342a33-25ad-4d79-b854-4d66877e41c1",
//         redirectUri: "https://agreeable-meadow-094f89710.5.azurestaticapps.net/.auth/login/aad/callback",
//       },
// };

// const msalInstance = new PublicClientApplication(msalConfig);

// export default msalInstance;

import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID || "e35be651-d860-4ab9-93ac-06e2d774a60c",
    authority: process.env.REACT_APP_AUTHORITY || "https://login.microsoftonline.com/https://login.microsoftonline.com/48342a33-25ad-4d79-b854-4d66877e41c1", // Replace 'your-tenant-id'
    redirectUri: process.env.REACT_APP_REDIRECT_URI || "https://agreeable-meadow-094f89710.5.azurestaticapps.net/.auth/login/aad/callback", // Ensure this matches your Azure AD configuration
  },
  cache: {
    cacheLocation: "localStorage", // This is an example; use sessionStorage if needed
    storeAuthStateInCookie: false, // Set to true if dealing with IE11 or Edge
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export default msalInstance;
