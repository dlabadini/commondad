import { getCrewCities, getRaces } from "lib/crew";
import { getCollections, getPages, getProducts } from "lib/shopify";
import { baseUrl, validateEnvironmentVariables } from "lib/utils";
import { MetadataRoute } from "next";

type Route = {
  url: string;
  lastModified: string;
};

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  validateEnvironmentVariables();

  const now = new Date().toISOString();

  const routesMap = ["", "/crew", "/races"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
  }));

  const collectionsPromise = getCollections().then((collections) =>
    collections.map((collection) => ({
      url: `${baseUrl}${collection.path}`,
      lastModified: collection.updatedAt,
    })),
  );

  const productsPromise = getProducts({}).then((products) =>
    products.map((product) => ({
      url: `${baseUrl}/product/${product.handle}`,
      lastModified: product.updatedAt,
    })),
  );

  const pagesPromise = getPages().then((pages) =>
    pages.map((page) => ({
      url: `${baseUrl}/${page.handle}`,
      lastModified: page.updatedAt,
    })),
  );

  const crewCitiesPromise = getCrewCities().then((cities) =>
    cities.map((city) => ({
      url: `${baseUrl}/crew/${city.slug}`,
      lastModified: now,
    })),
  );

  const racesPromise = getRaces().then((races) =>
    races.map((race) => ({
      url: `${baseUrl}/races/${race.slug}`,
      lastModified: now,
    })),
  );

  let fetchedRoutes: Route[] = [];

  try {
    fetchedRoutes = (
      await Promise.all([
        collectionsPromise,
        productsPromise,
        pagesPromise,
        crewCitiesPromise,
        racesPromise,
      ])
    ).flat();
  } catch (error) {
    throw JSON.stringify(error, null, 2);
  }

  return [...routesMap, ...fetchedRoutes];
}
