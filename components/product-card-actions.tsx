"use client";

import { Product } from "lib/shopify/types";
import { QuickAddButton } from "components/cart/quick-add-button";
import { WishlistButton } from "components/wishlist/wishlist-button";

export function ProductCardActions({ product }: { product: Product }) {
  return (
    <>
      <WishlistButton product={product} variant="overlay" />
      <QuickAddButton product={product} />
    </>
  );
}
