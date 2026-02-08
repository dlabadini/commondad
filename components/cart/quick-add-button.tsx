"use client";

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { Product, ProductVariant } from "lib/shopify/types";
import { useCart } from "./cart-context";
import { addItem } from "./actions";
import clsx from "clsx";

interface QuickAddButtonProps {
  product: Product;
}

export function QuickAddButton({ product }: QuickAddButtonProps) {
  const { addCartItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const hasMultipleVariants = product.variants.length > 1;
  const availableVariants = product.variants.filter((v) => v.availableForSale);

  const handleAddToCart = async (variant: ProductVariant) => {
    if (isLoading) return;

    setIsLoading(true);
    addCartItem(variant, product);

    try {
      await addItem(null, variant.id);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    } catch (error) {
      console.error("Failed to add item:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const buttonClasses =
    "p-1.5 text-white/80 transition-colors hover:text-white";

  // Single variant - direct add
  if (!hasMultipleVariants && availableVariants.length === 1) {
    const variant = availableVariants[0];
    if (!variant) return null;

    return (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleAddToCart(variant);
        }}
        disabled={isLoading}
        className={clsx(buttonClasses, isAdded && "text-green-400")}
        aria-label="Add to cart"
      >
        {isAdded ? (
          <CheckIcon className="h-4 w-4" />
        ) : (
          <PlusIcon className="h-4 w-4" />
        )}
      </button>
    );
  }

  // Multiple variants - show popover
  if (hasMultipleVariants) {
    return (
      <Popover className="relative">
        <PopoverButton
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className={buttonClasses}
          aria-label="Quick add options"
        >
          <PlusIcon className="h-4 w-4" />
        </PopoverButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel
            className="absolute right-0 top-full z-20 mt-1 w-56 origin-top-right rounded-md bg-white p-3 shadow-lg ring-1 ring-black/5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-2">
              <p className="text-xs font-medium text-neutral-500">
                Select size
              </p>
              <div className="space-y-1">
                {availableVariants.map((variant) => (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => {
                      handleAddToCart(variant);
                    }}
                    disabled={isLoading}
                    className="w-full rounded px-2 py-1.5 text-left text-sm transition-colors hover:bg-neutral-100"
                  >
                    {variant.title}
                  </button>
                ))}
              </div>
              {availableVariants.length === 0 && (
                <p className="text-xs text-neutral-400">Out of stock</p>
              )}
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
    );
  }

  // No available variants
  return (
    <button
      type="button"
      disabled
      className="cursor-not-allowed p-1.5 text-white/40"
      aria-label="Out of stock"
    >
      <PlusIcon className="h-4 w-4" />
    </button>
  );
}
