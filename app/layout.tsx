import { CartProvider } from "components/cart/cart-context";
import { WishlistProvider } from "components/wishlist/wishlist-context";
import { DevModeBanner } from "components/layout/dev-mode-banner";
import { Navbar } from "components/layout/navbar";
import { GeistSans } from "geist/font/sans";
import { ReactNode, Suspense } from "react";
import { Toaster } from "sonner";
import "./globals.css";
import { getShopifyRuntimeConfig } from "lib/shopify/runtime";
import { baseUrl } from "lib/utils";
import { DeclarationSerif, Handwritten } from "lib/fonts";

const {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_TAGLINE,
  SITE_SUBTAGLINE,
  SOCIAL_INSTAGRAM_URL,
  SOCIAL_TIKTOK_URL,
  SOCIAL_FACEBOOK_URL,
} = process.env;

const resolvedSiteName = SITE_NAME || "CommonDad";
const resolvedDescription =
  SITE_DESCRIPTION ||
  SITE_SUBTAGLINE ||
  "CommonDad is on a mission to make good dads common.";
const resolvedOgTitle = SITE_TAGLINE
  ? `${resolvedSiteName} | ${SITE_TAGLINE}`
  : resolvedSiteName;
const resolvedSameAs = [
  SOCIAL_INSTAGRAM_URL,
  SOCIAL_TIKTOK_URL,
  SOCIAL_FACEBOOK_URL,
].filter(Boolean);

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: resolvedSiteName,
  url: baseUrl,
  ...(resolvedSameAs.length ? { sameAs: resolvedSameAs } : {}),
};

// Inline "before paint" theme init to avoid a flash when toggling.
// - If localStorage theme is set, use it.
// - Else fall back to OS preference.
const themeInitScript = `
(() => {
  try {
    const t = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = t === 'dark' || (t !== 'light' && prefersDark);
    const cl = document.documentElement.classList;
    if (isDark) cl.add('dark');
    else cl.remove('dark');
  } catch {}
})();
`.trim();

export const metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: resolvedSiteName,
  title: {
    default: resolvedSiteName,
    template: `%s | ${resolvedSiteName}`,
  },
  description: resolvedDescription,
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: resolvedSiteName,
    title: resolvedOgTitle,
    description: resolvedDescription,
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: resolvedOgTitle,
    description: resolvedDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${Handwritten.variable} ${DeclarationSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          // JSON-LD for social profile discovery (sameAs).
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-950 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <CartProvider
          initialCart={undefined}
          isMockMode={getShopifyRuntimeConfig().useMockShopify}
        >
          <WishlistProvider>
            <DevModeBanner />
            <Suspense>
              <Navbar />
            </Suspense>
            <main>
              <Suspense>{children}</Suspense>
              <Toaster closeButton />
            </main>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
