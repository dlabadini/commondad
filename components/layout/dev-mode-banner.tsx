import { getShopifyRuntimeConfig } from "lib/shopify/runtime";

export function DevModeBanner() {
  const { useMockShopify } = getShopifyRuntimeConfig();
  if (!useMockShopify) return null;

  return (
    <div className="sticky top-0 z-50 w-full border-b border-black/10 bg-amber-300 text-black dark:border-white/10 dark:bg-amber-200">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wide lg:px-6">
        <div>Dev Mode</div>
      </div>
    </div>
  );
}
