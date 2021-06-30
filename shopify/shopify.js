import Client from "shopify-buy";

const client = Client.buildClient({
  domain: "goodhod.myshopify.com",
  storefrontAccessToken: "544825cddbe1e6f538df09d18374ac6e",
});

export default client;
