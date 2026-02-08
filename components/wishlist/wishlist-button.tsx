"use client";

import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { Product } from "lib/shopify/types";
import { useWishlist } from "./wishlist-context";
import clsx from "clsx";

interface WishlistButtonProps {
  product: Product;
  variant?: "default" | "overlay" | "inline";
}

export function WishlistButton({
  product,
  variant = "default",
}: WishlistButtonProps) {
  const { isInWishlist, toggleItem } = useWishlist();
  const isSaved = isInWishlist(product.id);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    toggleItem({
      id: product.id,
      handle: product.handle,
      title: product.title,
      featuredImage: product.featuredImage,
      price: product.priceRange.maxVariantPrice,
    });
  };

  if (variant === "overlay") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={clsx(
          "p-1.5 transition-colors",
          isSaved ? "text-terracotta-500" : "text-white/80 hover:text-white",
        )}
        aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
        title={isSaved ? "Remove from wishlist" : "Add to wishlist"}
      >
        {isSaved ? (
          <HeartIconSolid className="h-4 w-4" />
        ) : (
          <HeartIcon className="h-4 w-4" />
        )}
      </button>
    );
  }

  if (variant === "inline") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={clsx(
          "flex items-center gap-1.5 text-sm transition-colors",
          isSaved
            ? "text-terracotta-600"
            : "text-neutral-500 hover:text-neutral-800",
        )}
        aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
      >
        {isSaved ? (
          <HeartIconSolid className="h-4 w-4" />
        ) : (
          <HeartIcon className="h-4 w-4" />
        )}
        <span>{isSaved ? "Saved" : "Save"}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        "p-1 transition-colors",
        isSaved
          ? "text-terracotta-600"
          : "text-neutral-400 hover:text-neutral-600",
      )}
      aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
      title={isSaved ? "Remove from wishlist" : "Add to wishlist"}
    >
      {isSaved ? (
        <HeartIconSolid className="h-5 w-5" />
      ) : (
        <HeartIcon className="h-5 w-5" />
      )}
    </button>
  );
}
