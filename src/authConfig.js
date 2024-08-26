import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "e35be651-d860-4ab9-93ac-06e2d774a60c", 
        authority: "https://login.microsoftonline.com/48342a33-25ad-4d79-b854-4d66877e41c1",
        redirectUri: "http://localhost:5000/getAToken",
      },
};

const msalInstance = new PublicClientApplication(msalConfig);

export default msalInstance;