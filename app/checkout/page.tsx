export const metadata = {
  title: "Checkout",
  description:
    "Checkout is disabled while running with mocked Shopify data (no store keys).",
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-(--breakpoint-2xl) px-4 py-12">
      <h1 className="text-3xl font-bold">Checkout</h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Checkout is disabled in local development when Shopify is not
        configured.
      </p>
    </div>
  );
}
