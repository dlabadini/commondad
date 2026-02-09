import type { Cart, Collection, Image, MediaItem, Menu, Page, Product, Video } from "./types";

const now = () => new Date().toISOString();

function img(url: string, altText: string): Image {
  return {
    url,
    altText,
    width: 1400,
    height: 1400,
  };
}

function imageToMedia(image: Image): MediaItem {
  return {
    mediaContentType: "IMAGE",
    alt: image.altText,
    image,
  };
}

function mockVideo(url: string, poster: Image): Video {
  return {
    mediaContentType: "VIDEO",
    alt: "Product lifestyle video",
    sources: [
      {
        url,
        mimeType: "video/mp4",
        format: "mp4",
        width: 1080,
        height: 1080,
      },
    ],
    previewImage: { url: poster.url },
  };
}

const hatImages = [
  img(
    "/mock/products/hats/hat-uppercase-white.png",
    "CommonDad hat (uppercase), white",
  ),
  img(
    "/mock/products/hats/hat-initials-camo.png",
    "CommonDad hat (initials), camo",
  ),
  img(
    "/mock/products/hats/hat-initials-forest-green.png",
    "CommonDad hat (initials), forest green",
  ),
  img(
    "/mock/products/hats/hat-father-figure-blue-teal.png",
    "CommonDad hat (father figure), blue and teal",
  ),
  img(
    "/mock/products/hats/hat-initials-corduroy-mocha.png",
    "CommonDad hat (initials), corduroy mocha",
  ),
  img(
    "/mock/products/hats/hat-uppercase-black.png",
    "CommonDad hat (uppercase), black",
  ),
  img(
    "/mock/products/hats/hat-uppercase-forest-green.png",
    "CommonDad hat (uppercase), forest green",
  ),
];

export const mockProducts: Product[] = [
  {
    id: "mock-hat-01",
    handle: "hat-uppercase-white",
    availableForSale: true,
    title: "CD Uppercase // White",
    description: "Make it common.",
    descriptionHtml:
      "<p><strong>Make it common.</strong></p><p>Mock product data while Shopify is being connected.</p>",
    options: [],
    priceRange: {
      maxVariantPrice: { amount: "35.00", currencyCode: "USD" },
      minVariantPrice: { amount: "35.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "mock-variant-hat-01",
        title: "Default",
        availableForSale: true,
        selectedOptions: [],
        price: { amount: "35.00", currencyCode: "USD" },
      },
    ],
    featuredImage: hatImages[0]!,
    images: [hatImages[0]!],
    media: [
      imageToMedia(hatImages[0]!),
      mockVideo("/mock/products/sample-video.mp4", hatImages[0]!),
    ],
    seo: {
      title: "CD Uppercase // White",
      description: "CommonDad hat.",
    },
    tags: [],
    updatedAt: now(),
  },
  {
    id: "mock-hat-02",
    handle: "hat-initials-camo",
    availableForSale: true,
    title: "CD Initials // Camo",
    description: "Make good dads common.",
    descriptionHtml:
      "<p><strong>Make good dads common.</strong></p><p>Mock product data while Shopify is being connected.</p>",
    options: [],
    priceRange: {
      maxVariantPrice: { amount: "35.00", currencyCode: "USD" },
      minVariantPrice: { amount: "35.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "mock-variant-hat-02",
        title: "Default",
        availableForSale: true,
        selectedOptions: [],
        price: { amount: "35.00", currencyCode: "USD" },
      },
    ],
    featuredImage: hatImages[1]!,
    images: [hatImages[1]!],
    media: [imageToMedia(hatImages[1]!)],
    seo: {
      title: "CD Initials // Camo",
      description: "CommonDad hat.",
    },
    tags: [],
    updatedAt: now(),
  },
  {
    id: "mock-hat-03",
    handle: "hat-initials-forest-green",
    availableForSale: true,
    title: "CD Initials // Forest Green",
    description: "We're making it common.",
    descriptionHtml:
      "<p><strong>We're making it common.</strong></p><p>Mock product data while Shopify is being connected.</p>",
    options: [],
    priceRange: {
      maxVariantPrice: { amount: "35.00", currencyCode: "USD" },
      minVariantPrice: { amount: "35.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "mock-variant-hat-03",
        title: "Default",
        availableForSale: true,
        selectedOptions: [],
        price: { amount: "35.00", currencyCode: "USD" },
      },
    ],
    featuredImage: hatImages[2]!,
    images: [hatImages[2]!],
    media: [imageToMedia(hatImages[2]!)],
    seo: {
      title: "CD Initials // Forest Green",
      description: "CommonDad hat.",
    },
    tags: [],
    updatedAt: now(),
  },
  {
    id: "mock-hat-04",
    handle: "hat-father-figure-blue-teal",
    availableForSale: true,
    title: "CD Father Figure // Blue + Teal",
    description: "Setting the standard.",
    descriptionHtml:
      "<p><strong>Setting the standard.</strong></p><p>Mock product data while Shopify is being connected.</p>",
    options: [],
    priceRange: {
      maxVariantPrice: { amount: "35.00", currencyCode: "USD" },
      minVariantPrice: { amount: "35.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "mock-variant-hat-04",
        title: "Default",
        availableForSale: true,
        selectedOptions: [],
        price: { amount: "35.00", currencyCode: "USD" },
      },
    ],
    featuredImage: hatImages[3]!,
    images: [hatImages[3]!],
    media: [imageToMedia(hatImages[3]!)],
    seo: {
      title: "CD Father Figure // Blue + Teal",
      description: "CommonDad hat.",
    },
    tags: [],
    updatedAt: now(),
  },
  {
    id: "mock-hat-05",
    handle: "hat-initials-corduroy-mocha",
    availableForSale: true,
    title: "CD Initials // Mocha Corduroy",
    description: "This isn’t dad culture. This is leadership.",
    descriptionHtml:
      "<p><strong>This isn’t dad culture. This is leadership.</strong></p><p>Mock product data while Shopify is being connected.</p>",
    options: [],
    priceRange: {
      maxVariantPrice: { amount: "35.00", currencyCode: "USD" },
      minVariantPrice: { amount: "35.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "mock-variant-hat-05",
        title: "Default",
        availableForSale: true,
        selectedOptions: [],
        price: { amount: "35.00", currencyCode: "USD" },
      },
    ],
    featuredImage: hatImages[4]!,
    images: [hatImages[4]!],
    media: [imageToMedia(hatImages[4]!)],
    seo: {
      title: "CD Initials // Mocha Corduroy",
      description: "CommonDad hat.",
    },
    tags: [],
    updatedAt: now(),
  },
  {
    id: "mock-hat-06",
    handle: "hat-uppercase-black",
    availableForSale: true,
    title: "CD Uppercase // Black",
    description: "Show up. Carry weight. Lead.",
    descriptionHtml:
      "<p><strong>Show up. Carry weight. Lead.</strong></p><p>Mock product data while Shopify is being connected.</p>",
    options: [],
    priceRange: {
      maxVariantPrice: { amount: "35.00", currencyCode: "USD" },
      minVariantPrice: { amount: "35.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "mock-variant-hat-06",
        title: "Default",
        availableForSale: true,
        selectedOptions: [],
        price: { amount: "35.00", currencyCode: "USD" },
      },
    ],
    featuredImage: hatImages[5]!,
    images: [hatImages[5]!],
    media: [imageToMedia(hatImages[5]!)],
    seo: {
      title: "CD Uppercase // Black",
      description: "CommonDad hat.",
    },
    tags: [],
    updatedAt: now(),
  },
  {
    id: "mock-hat-07",
    handle: "hat-uppercase-forest-green",
    availableForSale: true,
    title: "CD Uppercase // Forest Green",
    description: "Discipline. Presence. Humility.",
    descriptionHtml:
      "<p><strong>Discipline. Presence. Humility.</strong></p><p>Mock product data while Shopify is being connected.</p>",
    options: [],
    priceRange: {
      maxVariantPrice: { amount: "35.00", currencyCode: "USD" },
      minVariantPrice: { amount: "35.00", currencyCode: "USD" },
    },
    variants: [
      {
        id: "mock-variant-hat-07",
        title: "Default",
        availableForSale: true,
        selectedOptions: [],
        price: { amount: "35.00", currencyCode: "USD" },
      },
    ],
    featuredImage: hatImages[6]!,
    images: [hatImages[6]!],
    media: [imageToMedia(hatImages[6]!)],
    seo: {
      title: "CD Uppercase // Forest Green",
      description: "CommonDad hat.",
    },
    tags: [],
    updatedAt: now(),
  },
];

export const mockCollections: Collection[] = [
  {
    handle: "",
    title: "All",
    description: "All products",
    seo: { title: "All", description: "All products" },
    path: "/search",
    updatedAt: now(),
  },
  {
    handle: "hats",
    title: "Hats",
    description: "Hats and headwear.",
    seo: { title: "Hats", description: "Hats and headwear." },
    path: "/search/hats",
    updatedAt: now(),
  },
];

export const mockMenus: Record<string, Menu[]> = {
  "commondad-header-menu": [
    { title: "Mission", path: "/mission" },
    { title: "Shop", path: "/search" },
  ],
  "commondad-footer-menu": [
    { title: "Mission", path: "/mission" },
    { title: "Shop", path: "/search" },
  ],
};

export const mockPages: Page[] = [
  {
    id: "mock-page-mission",
    title: "Mission",
    handle: "mission",
    body: `
<section id="mission" data-manifesto-section>
  <h2 style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;">Preamble</h2>
  <p style="margin:0; font-size: 12px; letter-spacing: .14em; text-transform: uppercase; opacity:.78;">In the course of fatherhood</p>
  <p class="font-handwritten" style="margin: 10px 0 0 0; font-size: 34px; line-height: 1.05;">A Declaration</p>
  <p style="margin-top: 10px;"><strong>Make good dads common.</strong></p>
  <p style="max-width: 74ch;">
    When, in the course of life, it becomes necessary for a man to stand as the calm in the room, the shelter in the storm, and the steady hand in the dark,
    it is fitting that he speak plainly of what he will be, and what he will do.
  </p>
</section>

<hr />

<section id="narrative" data-manifesto-section>
  <h2 style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;">Declaration</h2>
  <p style="max-width: 74ch;">
    We therefore set forth this declaration: that fatherhood be carried with honor; that presence be practiced, not performed; that love be made visible by action;
    and that the ordinary day be made extraordinary by the father who chooses to show up.
  </p>
</section>

<section id="beliefs" data-manifesto-section>
  <h2 style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;">Principles</h2>
  <p style="max-width: 74ch;">
    We hold these truths to be self-evident: that discipline keeps promises; that strength protects what matters; that presence makes a child feel seen;
    and that humility turns a mistake into growth. Not perfection, but principle. Not performance, but character.
  </p>
</section>

<hr />

<section id="standard" data-manifesto-section>
  <h2 style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;">Resolves</h2>
  <p style="max-width: 74ch;">
    We are not chasing applause. We are building men who build families. <strong>We show up.</strong> We carry weight. We lead with love.
  </p>
  <blockquote class="font-handwritten">
    <p style="margin:0;"><strong>This isn’t dad culture. This is leadership.</strong></p>
  </blockquote>
</section>

<hr />

<section id="who-we-are" data-manifesto-section>
  <h2 style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;">Compact</h2>
  <p style="max-width: 74ch;">
    CommonDad is a place for fathers who refuse to drift: a community that reminds you that you are not alone, and that the work you do matters.
    Gear is the symbol. Character is the point. Join the movement, and let us make good dads common.
  </p>
  <p style="max-width: 74ch; margin-top: 18px;"><em>With respect,</em></p>
  <p class="font-handwritten" style="margin-top: 0; font-size: 28px;">CommonDad</p>
</section>

<hr />

<section id="founders" data-manifesto-section>
  <h2 style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;">Signatories</h2>
  <p style="max-width: 74ch;">
    In witness whereof, we set our names to this cause, and commit ourselves to the daily work of fatherhood.
  </p>
  <div style="display:grid; grid-template-columns: 1fr; gap: 18px; margin-top: 18px;">
    <div style="border: 1px solid rgba(120,120,120,.25); border-radius: 16px; padding: 18px;">
      <p style="margin:0;"><strong>Founder Name (TBD)</strong></p>
      <p style="margin:0; opacity:.8;"><em>Co-Founder</em></p>
      <p style="margin-top: 12px; margin-bottom:0; display:flex; gap: 10px; align-items: baseline; flex-wrap: wrap;">
        <em>Signed,</em>
        <span class="font-handwritten" style="font-size: 26px; letter-spacing: .01em;">____________________</span>
      </p>
    </div>
    <div style="border: 1px solid rgba(120,120,120,.25); border-radius: 16px; padding: 18px;">
      <p style="margin:0;"><strong>Founder Name (TBD)</strong></p>
      <p style="margin:0; opacity:.8;"><em>Co-Founder</em></p>
      <p style="margin-top: 12px; margin-bottom:0; display:flex; gap: 10px; align-items: baseline; flex-wrap: wrap;">
        <em>Signed,</em>
        <span class="font-handwritten" style="font-size: 26px; letter-spacing: .01em;">____________________</span>
      </p>
    </div>
  </div>
</section>
`.trim(),
    bodySummary: "A declaration: make good dads common.",
    seo: {
      title: "Mission",
      description: "A declaration: make good dads common.",
    },
    createdAt: now(),
    updatedAt: now(),
  },
];

// ── In-memory mock cart (persists for dev-server lifetime) ──────────

let mockCartState: Cart | null = null;

function emptyCart(): Cart {
  return {
    id: "mock-cart",
    checkoutUrl: "",
    totalQuantity: 0,
    lines: [],
    cost: {
      subtotalAmount: { amount: "0", currencyCode: "USD" },
      totalAmount: { amount: "0", currencyCode: "USD" },
      totalTaxAmount: { amount: "0", currencyCode: "USD" },
    },
  };
}

function recalcTotals(cart: Cart): void {
  cart.totalQuantity = cart.lines.reduce((sum, l) => sum + l.quantity, 0);
  const total = cart.lines.reduce(
    (sum, l) => sum + Number(l.cost.totalAmount.amount),
    0,
  );
  const currency = cart.lines[0]?.cost.totalAmount.currencyCode ?? "USD";
  cart.cost = {
    subtotalAmount: { amount: total.toString(), currencyCode: currency },
    totalAmount: { amount: total.toString(), currencyCode: currency },
    totalTaxAmount: { amount: "0", currencyCode: currency },
  };
}

function findVariant(merchandiseId: string) {
  for (const product of mockProducts) {
    const variant = product.variants.find((v) => v.id === merchandiseId);
    if (variant) return { product, variant };
  }
  return undefined;
}

export function createMockCart(): Cart {
  mockCartState = emptyCart();
  return structuredClone(mockCartState);
}

export function getMockCart(): Cart | null {
  return mockCartState ? structuredClone(mockCartState) : null;
}

export function addToMockCart(
  lines: { merchandiseId: string; quantity: number }[],
): Cart {
  if (!mockCartState) mockCartState = emptyCart();
  for (const { merchandiseId, quantity } of lines) {
    const existing = mockCartState.lines.find(
      (l) => l.merchandise.id === merchandiseId,
    );
    if (existing) {
      const found = findVariant(merchandiseId);
      if (found) {
        existing.quantity += quantity;
        existing.cost.totalAmount.amount = (
          Number(found.variant.price.amount) * existing.quantity
        ).toString();
      }
    } else {
      const found = findVariant(merchandiseId);
      if (found) {
        const { product, variant } = found;
        mockCartState.lines.push({
          id: `mock-line-${Date.now()}`,
          quantity,
          cost: {
            totalAmount: {
              amount: (Number(variant.price.amount) * quantity).toString(),
              currencyCode: variant.price.currencyCode,
            },
          },
          merchandise: {
            id: variant.id,
            title: variant.title,
            selectedOptions: variant.selectedOptions,
            product: {
              id: product.id,
              handle: product.handle,
              title: product.title,
              featuredImage: product.featuredImage,
            },
          },
        });
      }
    }
  }
  recalcTotals(mockCartState);
  return structuredClone(mockCartState);
}

export function removeFromMockCart(lineIds: string[]): Cart {
  if (!mockCartState) mockCartState = emptyCart();
  mockCartState.lines = mockCartState.lines.filter(
    (l) => !lineIds.includes(l.id!),
  );
  recalcTotals(mockCartState);
  return structuredClone(mockCartState);
}

export function updateMockCart(
  lines: { id: string; merchandiseId: string; quantity: number }[],
): Cart {
  if (!mockCartState) mockCartState = emptyCart();
  for (const { id, merchandiseId, quantity } of lines) {
    const lineItem = mockCartState.lines.find(
      (l) => l.id === id || l.merchandise.id === merchandiseId,
    );
    if (lineItem) {
      const unitPrice =
        Number(lineItem.cost.totalAmount.amount) / lineItem.quantity;
      lineItem.quantity = quantity;
      lineItem.cost.totalAmount.amount = (unitPrice * quantity).toString();
    }
  }
  recalcTotals(mockCartState);
  return structuredClone(mockCartState);
}
