import type { Cart, Collection, Menu, Page, Product } from "./types";

const now = () => new Date().toISOString();

function img(url: string, altText: string) {
  return {
    url,
    altText,
    width: 1400,
    height: 1400,
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
<section id="mission" data-manifesto-section style="padding: 28px; border: 1px solid rgba(120,120,120,.25); border-radius: 18px;">
  <p style="margin:0; font-size: 12px; letter-spacing: .12em; text-transform: uppercase; opacity:.8;">WE'RE ON A MISSION</p>
  <h2 style="margin-top: 10px; margin-bottom: 8px;">Make good dads common.</h2>
  <p style="margin:0; max-width: 62ch; opacity:.92;">Fatherhood is leadership. It should look like strength, discipline, presence, and love, every day.</p>
</section>

<hr />

<section id="narrative" data-manifesto-section>
  <h2>The Opportunity</h2>
  <p style="max-width: 68ch;">Make the default higher. Make the example clearer. Make the standard visible.</p>
  <ul>
    <li>Presence over performance.</li>
    <li>Responsibility over excuses.</li>
    <li>Growth over comfort.</li>
  </ul>
</section>

<section id="beliefs" data-manifesto-section>
  <h2>First Principles</h2>
  <p style="max-width: 68ch;">No hacks. No shortcuts. Just fundamentals, practiced until they become identity.</p>
  <ul>
    <li><strong>Discipline</strong>: do the work.</li>
    <li><strong>Strength</strong>: protect and provide.</li>
    <li><strong>Presence</strong>: be here, for real.</li>
    <li><strong>Humility</strong>: learn, own it, improve.</li>
  </ul>
</section>

<hr />

<section id="standard" data-manifesto-section>
  <h2>Setting The Standard</h2>
  <p style="max-width: 68ch;"><strong>We show up.</strong> We carry weight. We lead at home. We get better every year.</p>
  <blockquote><p style="margin:0;"><strong>This isn’t dad culture. This is leadership.</strong></p></blockquote>
</section>

<hr />

<section id="who-we-are" data-manifesto-section>
  <h2>Who We Are</h2>
  <p style="max-width: 68ch;"><strong>CommonDad is a standard.</strong> A community for men who lead with intention, train with discipline, and love with action.</p>
  <blockquote><p style="margin:0;"><strong>Gear is the symbol. Character is the point.</strong></p></blockquote>
  <p style="max-width: 68ch;"><strong>Join the movement.</strong> Make it common.</p>
</section>

<hr />

<section id="founders" data-manifesto-section>
<h2>Founders</h2>
<p style="margin-top:0; opacity:.85;"><em>Add names, headshots, and signatures when ready.</em></p>

<div style="display:grid; grid-template-columns: 1fr; gap: 18px;">
  <div style="border: 1px solid rgba(120,120,120,.25); border-radius: 16px; padding: 18px;">
    <div style="display:flex; gap: 14px; align-items:flex-start;">
      <div style="width:56px; height:56px; border-radius: 999px; background:#111827; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700;">
        CD
      </div>
      <div>
        <p style="margin:0;"><strong>Founder Name (TBD)</strong></p>
        <p style="margin:0; opacity:.8;"><em>Co-Founder</em></p>
      </div>
    </div>
    <blockquote>
      <p style="margin:0;">"Make it common."</p>
    </blockquote>
    <p style="margin-bottom:0;"><em>Signed,</em><br /><span style="font-size: 20px; letter-spacing: .02em;">____________________</span></p>
  </div>

  <div style="border: 1px solid rgba(120,120,120,.25); border-radius: 16px; padding: 18px;">
    <div style="display:flex; gap: 14px; align-items:flex-start;">
      <div style="width:56px; height:56px; border-radius: 999px; background:#111827; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700;">
        CD
      </div>
      <div>
        <p style="margin:0;"><strong>Founder Name (TBD)</strong></p>
        <p style="margin:0; opacity:.8;"><em>Co-Founder</em></p>
      </div>
    </div>
    <blockquote>
      <p style="margin:0;">"This is leadership."</p>
    </blockquote>
    <p style="margin-bottom:0;"><em>Signed,</em><br /><span style="font-size: 20px; letter-spacing: .02em;">____________________</span></p>
  </div>
</div>
</section>
`.trim(),
    bodySummary:
      "We’re on a mission to make good dads common. This is leadership.",
    seo: {
      title: "Mission",
      description:
        "We’re on a mission to make good dads common. This is leadership.",
    },
    createdAt: now(),
    updatedAt: now(),
  },
];

export function createMockCart(): Cart {
  return {
    id: "mock-cart",
    checkoutUrl: "/checkout",
    totalQuantity: 0,
    lines: [],
    cost: {
      subtotalAmount: { amount: "0", currencyCode: "USD" },
      totalAmount: { amount: "0", currencyCode: "USD" },
      totalTaxAmount: { amount: "0", currencyCode: "USD" },
    },
  };
}
