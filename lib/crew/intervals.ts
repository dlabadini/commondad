import { getCrewRuntimeConfig } from "./runtime";

const { intervalsApiUrl, intervalsApiKey, useMockCrew } =
  getCrewRuntimeConfig();

export async function intervalsFetch<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  if (useMockCrew) {
    throw new Error("intervalsFetch called while in mock mode");
  }

  if (!intervalsApiUrl) {
    throw new Error("INTERVALS_API_URL environment variable is not set");
  }

  if (!intervalsApiKey) {
    throw new Error("INTERVALS_API_KEY environment variable is not set");
  }

  const url = `${intervalsApiUrl}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${intervalsApiKey}`,
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!res.ok) {
    throw new Error(
      `Intervals API error: ${res.status} ${res.statusText} for ${path}`,
    );
  }

  return res.json() as Promise<T>;
}
