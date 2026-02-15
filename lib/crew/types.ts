export type EventCategory =
  | "group-run"
  | "long-run"
  | "track-workout"
  | "stroller-walk"
  | "park-day"
  | "fair-day"
  | "theme-park-day"
  | "race";

export type EventSource = "intervals" | "commondad";

export type EventDistance = {
  name: string;
  miles: number;
  price: number;
  registeredCount: number;
};

export type CrewPhoto = {
  url: string;
  alt: string;
  date: string;
};

export type RhythmEntry = {
  dayOfWeek: string;
  time: string;
  title: string;
  category: EventCategory;
  location: string;
  cadence: "weekly" | "monthly" | "seasonal";
};

export type CrewLead = {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  instagram?: string;
};

export type CrewCity = {
  slug: string;
  name: string;
  state: string;
  heroImageUrl: string;
  memberCount: number;
  established: string;
  leads: CrewLead[];
  rhythm: RhythmEntry[];
  photos: CrewPhoto[];
  zipCodes: string[];
  intervalsOrgId?: string;
  shopifyCollectionHandle?: string;
};

export type CrewEvent = {
  id: string;
  title: string;
  category: EventCategory;
  source: EventSource;
  date: string;
  time: string;
  location: string;
  citySlug: string;
  rsvpCount: number;
  maxCapacity?: number;
  distances?: EventDistance[];
};

export type CrewParticipation = {
  citySlug: string;
  cityName: string;
  registeredCount: number;
};

export type RacePhoto = {
  url: string;
  alt: string;
};

export type Race = {
  slug: string;
  title: string;
  date: string;
  location: string;
  heroImageUrl: string;
  description: string;
  disclaimer?: string;
  distances: EventDistance[];
  photos: RacePhoto[];
  faq: { question: string; answer: string }[];
  crewParticipation: CrewParticipation[];
  featured: boolean;
  shopifyCollectionHandle?: string;
};

export type CrewStats = {
  totalDads: number;
  totalCities: number;
  eventsPerMonth: number;
  milesPerWeek: number;
};
