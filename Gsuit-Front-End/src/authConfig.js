import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "46a1ffde-c359-4db3-b36a-a224743b0f7d", // your client ID
    authority: "https://login.microsoftonline.com/48342a33-25ad-4d79-b854-4d66877e41c1", // correct tenant ID or domain
    redirectUri: "https://agreeable-meadow-094f89710.5.azurestaticapps.net/.auth/login/aad/callback", // your redirect URI
  },
  cache: {
    cacheLocation: "localStorage", // or "sessionStorage"
    storeAuthStateInCookie: false, // set to true if dealing with IE11 or Edge
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export default msalInstance;
