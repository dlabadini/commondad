export default {
  cacheComponents: true,
  experimental: {
    inlineCss: true,
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
      // Intervals API images (when real API is connected).
      {
        protocol: "https",
        hostname: "*.intervals.icu",
        pathname: "/**",
      },
    ],
  },
};
