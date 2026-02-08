# CommonDad Storefront

Next.js storefront for `common.dad`.

## Local Development (No Shopify Keys)

This repo supports mocked Shopify data so the FE can run before store keys are available.

1. Install deps: `pnpm install`
1. Run dev: `pnpm dev`

Mock mode triggers automatically in development when Shopify env vars are missing, or set `USE_MOCK_SHOPIFY=1`.

## Background-Removed Mock Images

The mock hat images can be generated as transparent PNGs:

1. Install ImageMagick: `brew install imagemagick`
1. Generate images: `pnpm images:rembg`

Outputs to `public/mock/products/hats/`.
