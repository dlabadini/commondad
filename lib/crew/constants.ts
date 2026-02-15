import type { EventCategory } from "./types";

export const CREW_TAGS = {
  cities: "crew-cities",
  events: "crew-events",
  races: "crew-races",
};

export const EVENT_BADGE_CONFIG: Record<
  EventCategory,
  { label: string; icon: string }
> = {
  "group-run": {
    label: "Group Run",
    icon: "M13 2.05v2.02C17.05 4.55 20 7.92 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-3.34 2.04-6.2 4.95-7.41L8 2.05C4.27 3.59 1.5 7.28 1.5 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-4.72-3.27-8.41-7.5-9.95z",
  },
  "long-run": {
    label: "Long Run",
    icon: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",
  },
  "track-workout": {
    label: "Track",
    icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
  },
  "stroller-walk": {
    label: "Stroller Walk",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
  "park-day": {
    label: "Park Day",
    icon: "M17 8C17 6.9 16.1 6 15 6C13.9 6 13 6.9 13 8H11C11 6.9 10.1 6 9 6C7.9 6 7 6.9 7 8H5v2h14V8h-2zM12 2L4 5v3.5C4 13.81 7.41 18.77 12 20c4.59-1.23 8-6.19 8-11.5V5l-8-3z",
  },
  "fair-day": {
    label: "Fair Day",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
  "theme-park-day": {
    label: "Theme Park",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
  race: {
    label: "Race",
    icon: "M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z",
  },
};
