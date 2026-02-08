"use client";

import { HeartIcon } from "@heroicons/react/24/outline";
import { useWishlist } from "components/wishlist/wishlist-context";
import Link from "next/link";

export function WishlistLink() {
  const { itemCount } = useWishlist();

  return (
    <Link
      href="/wishlist"
      className="relative flex h-10 w-10 items-center justify-center text-neutral-500 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-neutral-300"
      aria-label={`Wishlist (${itemCount} items)`}
      title="Wishlist"
    >
      <HeartIcon className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-terracotta-600 text-xs font-medium text-white">
          {itemCount > 9 ? "9+" : itemCount}
        </span>
      )}
    </Link>
  );
}
