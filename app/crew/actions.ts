"use server";

import { getCrewCityByZip } from "lib/crew";

export async function findCrewByZip(
  zip: string,
): Promise<{ citySlug: string | null; message: string }> {
  const trimmed = zip.trim();

  if (!/^\d{5}$/.test(trimmed)) {
    return { citySlug: null, message: "Please enter a valid 5-digit zip code." };
  }

  const citySlug = await getCrewCityByZip(trimmed);

  if (!citySlug) {
    return {
      citySlug: null,
      message: "We're not there yet — but we're growing. Want to start a chapter?",
    };
  }

  return { citySlug, message: "" };
}
