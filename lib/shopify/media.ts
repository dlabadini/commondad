import type { Product } from "./types";

/** Check whether a product has at least one video in its media. */
export function productHasVideo(product: Product): boolean {
  return product.media?.some((m) => m.mediaContentType === "VIDEO") ?? false;
}
