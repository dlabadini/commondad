import Grid from "components/grid";
import { GridTileImage } from "components/grid/tile";
import { Product } from "lib/shopify/types";
import Link from "next/link";
import { QuickAddButton } from "components/cart/quick-add-button";
import { WishlistButton } from "components/wishlist/wishlist-button";

export default function ProductGridItems({
  products,
}: {
  products: Product[];
}) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link
            className="group relative inline-block h-full w-full"
            href={`/product/${product.handle}`}
            prefetch={true}
          >
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode,
              }}
              src={product.featuredImage?.url}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="absolute right-2 top-2 z-20 flex items-center gap-0.5 rounded-md bg-black/60 p-1">
              <WishlistButton product={product} variant="overlay" />
              <QuickAddButton product={product} />
            </div>
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
