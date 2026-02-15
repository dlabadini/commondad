import { GridTileImage } from "components/grid/tile";
import { ProductCardActions } from "components/product-card-actions";
import { getCollectionProducts } from "lib/shopify";
import { productHasVideo } from "lib/shopify/media";
import Link from "next/link";

export async function RaceMerch({
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
    <div className="mx-auto max-w-(--breakpoint-2xl) px-4 pb-12">
      <h2 className="mb-4 text-lg font-bold text-neutral-900 dark:text-white">
        Race Merch
      </h2>
      <div className="w-full overflow-x-auto pb-2">
        <ul className="flex gap-4">
          {products.slice(0, 6).map((product) => (
            <li
              key={product.handle}
              className="relative aspect-square h-48 flex-none md:h-64"
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
                  sizes="(min-width: 768px) 256px, 192px"
                  hasVideo={productHasVideo(product)}
                  actions={<ProductCardActions product={product} />}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
