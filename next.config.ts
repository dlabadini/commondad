export default {
  experimental: {
    ppr: true,
    inlineCss: true,
    useCache: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
      // Allow mocked product images to load from the live CommonDad Shopify CDN.
      {
        protocol: "https",
        hostname: "common.dad",
        pathname: "/cdn/shop/files/**",
      },
    ],
  },
};
