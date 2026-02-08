# CommonDad Storefront

Next.js storefront for `common.dad`.

## Local Development (No Shopify Keys)

This repo supports mocked Shopify data so the FE can run before store keys are available.

1. Install deps: `bun install`
1. Run dev: `bun run dev`

Mock mode triggers automatically in development when Shopify env vars are missing, or set `USE_MOCK_SHOPIFY=1`.

## Background-Removed Mock Images

The mock hat images can be generated as transparent PNGs:

1. Install ImageMagick: `brew install imagemagick`
1. Generate images: `bun run images:rembg`

Outputs to `public/mock/products/hats/`.
