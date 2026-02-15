import { cacheLife, cacheTag } from "next/cache";
import { CREW_TAGS } from "./constants";
import {
  mockCrewCities,
  mockEvents,
  mockRaces,
  mockStats,
  mockZipToCity,
} from "./mock-data";
import { getCrewRuntimeConfig } from "./runtime";
import type { CrewCity, CrewEvent, CrewStats, Race } from "./types";

const { useMockCrew } = getCrewRuntimeConfig();

export async function getCrewCities(): Promise<CrewCity[]> {
  "use cache";
  cacheTag(CREW_TAGS.cities);
  cacheLife("days");

  if (useMockCrew) {
    return mockCrewCities;
  }

  // TODO: Fetch from Intervals / CMS when available
  return mockCrewCities;
}

export async function getCrewCity(
  slug: string,
): Promise<CrewCity | undefined> {
  "use cache";
  cacheTag(CREW_TAGS.cities);
  cacheLife("days");

  if (useMockCrew) {
    return mockCrewCities.find((c) => c.slug === slug);
  }

  return mockCrewCities.find((c) => c.slug === slug);
}

export async function getCrewCityByZip(
  zip: string,
): Promise<string | undefined> {
  "use cache";
  cacheTag(CREW_TAGS.cities);
  cacheLife("days");

  if (useMockCrew) {
    return mockZipToCity(zip);
  }

  return mockZipToCity(zip);
}

export async function getUpcomingEvents(
  citySlug: string,
  limit?: number,
): Promise<CrewEvent[]> {
  "use cache";
  cacheTag(CREW_TAGS.events);
  cacheLife("days");

  if (useMockCrew) {
    const events = mockEvents
      .filter((e) => e.citySlug === citySlug)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return limit ? events.slice(0, limit) : events;
  }

  // TODO: Merge Intervals API running events + local events
  const events = mockEvents
    .filter((e) => e.citySlug === citySlug)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return limit ? events.slice(0, limit) : events;
}

export async function getNextEvent(
  citySlug: string,
): Promise<CrewEvent | undefined> {
  const events = await getUpcomingEvents(citySlug, 1);
  return events[0];
}

export async function getRaces(): Promise<Race[]> {
  "use cache";
  cacheTag(CREW_TAGS.races);
  cacheLife("days");

  if (useMockCrew) {
    return mockRaces;
  }

  return mockRaces;
}

export async function getRace(slug: string): Promise<Race | undefined> {
  "use cache";
  cacheTag(CREW_TAGS.races);
  cacheLife("days");

  if (useMockCrew) {
    return mockRaces.find((r) => r.slug === slug);
  }

  return mockRaces.find((r) => r.slug === slug);
}

export async function getFeaturedRace(): Promise<Race | undefined> {
  "use cache";
  cacheTag(CREW_TAGS.races);
  cacheLife("days");

  if (useMockCrew) {
    return mockRaces.find((r) => r.featured);
  }

  return mockRaces.find((r) => r.featured);
}

export async function getCrewStats(): Promise<CrewStats> {
  "use cache";
  cacheTag(CREW_TAGS.cities);
  cacheLife("days");

  if (useMockCrew) {
    return mockStats;
  }

  return mockStats;
}
