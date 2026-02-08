import { SHOPIFY_GRAPHQL_API_ENDPOINT } from "lib/constants";
import { ensureStartsWith } from "lib/utils";

export type ShopifyRuntimeConfig = {
  domain: string;
  endpoint: string;
  storefrontAccessToken: string;
  explicitMock: boolean;
  autoMock: boolean;
  useMockShopify: boolean;
};

export function getShopifyRuntimeConfig(): ShopifyRuntimeConfig {
  const domain = process.env.SHOPIFY_STORE_DOMAIN
    ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, "https://")
    : "";

  const endpoint = domain ? `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}` : "";
  const storefrontAccessToken =
    process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || "";

  const explicitMock = process.env.USE_MOCK_SHOPIFY === "1";
  const missingKeys = !endpoint || !storefrontAccessToken;
  const autoMock = process.env.NODE_ENV !== "production" && missingKeys;

  return {
    domain,
    endpoint,
    storefrontAccessToken,
    explicitMock,
    autoMock,
    useMockShopify: explicitMock || autoMock,
  };
}
