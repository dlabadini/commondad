import { GridTileImage } from "components/grid/tile";
import { ProductCardActions } from "components/product-card-actions";
import { getCollectionProducts } from "lib/shopify";
import { productHasVideo } from "lib/shopify/media";
import Link from "next/link";

export async function CrewGearSection({
  collectionHandle,
}: {
  collectionHandle?: string;
}) {
  if (!collectionHandle) return null;

  const products = await getCollectionProducts({
    collection: collectionHandle,
  });

  if (!products.length) return null;

  return (
    <div className="-mx-4 sm:-mx-6">
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 sm:px-6">
        {products.slice(0, 6).map((product) => (
          <div
            key={product.handle}
            className="relative aspect-square h-40 flex-none sm:h-52"
          >
            <Link
              href={`/product/${product.handle}`}
              className="relative h-full w-full"
            >
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode:
                    product.priceRange.maxVariantPrice.currencyCode,
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 640px) 208px, 160px"
                hasVideo={productHasVideo(product)}
                actions={<ProductCardActions product={product} />}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
