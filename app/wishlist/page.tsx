"use client";

import { GridTileImage } from "components/grid/tile";
import { WishlistButton } from "components/wishlist/wishlist-button";
import { useWishlist } from "components/wishlist/wishlist-context";
import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Price from "components/price";

export default function WishlistPage() {
  const { items, clearWishlist } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-(--breakpoint-2xl) px-4 py-16 text-center">
        <div className="mb-4 flex justify-center">
          <HeartIcon className="h-16 w-16 text-neutral-300" />
        </div>
        <h1 className="mb-4 text-3xl font-medium">Your Wishlist is Empty</h1>
        <p className="mb-8 text-neutral-500">
          Save items you love to your wishlist and find them here anytime.
        </p>
        <Link
          href="/search"
          className="inline-flex items-center justify-center rounded-full bg-terracotta-600 px-8 py-3 text-white transition-colors hover:bg-terracotta-700"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-(--breakpoint-2xl) px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-medium">My Wishlist</h1>
        <button
          type="button"
          onClick={clearWishlist}
          className="text-sm text-neutral-500 underline-offset-4 hover:text-terracotta-600 hover:underline"
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="group relative">
            <Link
              href={`/product/${item.handle}`}
              className="relative block aspect-square overflow-hidden rounded-lg border border-neutral-200 bg-white hover:border-terracotta-600 dark:border-neutral-800 dark:bg-neutral-900"
            >
              {item.featuredImage ? (
                <GridTileImage
                  alt={item.title}
                  label={{
                    title: item.title,
                    amount: item.price.amount,
                    currencyCode: item.price.currencyCode,
                  }}
                  src={item.featuredImage.url}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-neutral-100">
                  <span className="text-neutral-400">No image</span>
                </div>
              )}
            </Link>
            <div className="mt-3 flex items-start justify-between">
              <div>
                <Link
                  href={`/product/${item.handle}`}
                  className="block text-sm font-medium hover:text-terracotta-600"
                >
                  {item.title}
                </Link>
                <div className="mt-1">
                  <Price
                    amount={item.price.amount}
                    currencyCode={item.price.currencyCode}
                    className="text-sm text-neutral-600"
                  />
                </div>
              </div>
              <WishlistButton
                product={{
                  id: item.id,
                  handle: item.handle,
                  title: item.title,
                  featuredImage: item.featuredImage || {
                    url: "",
                    altText: item.title,
                    width: 400,
                    height: 400,
                  },
                  priceRange: {
                    maxVariantPrice: item.price,
                    minVariantPrice: item.price,
                  },
                  variants: [],
                  options: [],
                  description: "",
                  descriptionHtml: "",
                  availableForSale: true,
                  images: [],
                  seo: { title: item.title, description: "" },
                  tags: [],
                  updatedAt: item.addedAt,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
