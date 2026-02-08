import OpengraphImage from "components/opengraph-image";
import { getPage } from "lib/shopify";

export default async function Image({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);
  if (!page) {
    // If the page doesn't exist, Next will render 404 for the page route.
    // For OG image route, just fall back to site default.
    return await OpengraphImage();
  }
  const title = page.seo?.title || page.title;

  return await OpengraphImage({ title });
}
