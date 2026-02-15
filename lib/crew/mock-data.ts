import type {
  CrewCity,
  CrewEvent,
  CrewStats,
  Race,
} from "./types";

// ── Helpers ──────────────────────────────────────────────────────────

function futureDate(daysFromNow: number): string {
  const d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  return d.toISOString().split("T")[0]!;
}

// ── Mock Crews ───────────────────────────────────────────────────────

export const mockCrewCities: CrewCity[] = [
  {
    slug: "austin",
    name: "Austin",
    state: "TX",
    heroImageUrl:
      "https://common.dad/cdn/shop/files/CommonDad_Ultra_Start-53_53721b18-22ea-4cba-8fb4-a3b489513155.jpg?v=1768564152&width=1300",
    memberCount: 127,
    established: "2024",
    leads: [
      {
        name: "Marcus Reed",
        role: "Crew Captain",
        imageUrl: "https://common.dad/cdn/shop/files/CommonDadUltraStart-67.jpg?v=1767269863&width=400",
        bio: "Three kids, one mission. Running taught me how to show up.",
        instagram: "marcus.runs",
      },
      {
        name: "Jake Ortega",
        role: "Run Lead",
        imageUrl: "https://common.dad/cdn/shop/files/CommonDadUltraStart-67.jpg?v=1767269863&width=400",
        bio: "Former college runner. Now I just chase toddlers and PRs.",
        instagram: "jake.ortega",
      },
    ],
    rhythm: [
      {
        dayOfWeek: "Tuesday",
        time: "6:00 AM",
        title: "Track Tuesday",
        category: "track-workout",
        location: "Austin High Track",
        cadence: "weekly",
      },
      {
        dayOfWeek: "Thursday",
        time: "6:00 AM",
        title: "Group Run",
        category: "group-run",
        location: "Lady Bird Lake Trail",
        cadence: "weekly",
      },
      {
        dayOfWeek: "Saturday",
        time: "6:30 AM",
        title: "Long Run",
        category: "long-run",
        location: "Barton Creek Greenbelt",
        cadence: "weekly",
      },
      {
        dayOfWeek: "Saturday",
        time: "9:00 AM",
        title: "Stroller Walk",
        category: "stroller-walk",
        location: "Zilker Park",
        cadence: "weekly",
      },
      {
        dayOfWeek: "Sunday",
        time: "10:00 AM",
        title: "Park Day",
        category: "park-day",
        location: "Mueller Lake Park",
        cadence: "monthly",
      },
    ],
    photos: [
      { url: "https://common.dad/cdn/shop/files/CommonDad_Ultra_Start-240.jpg?v=1767269951&width=1300", alt: "Austin crew at Lady Bird Lake", date: "2025-01-18" },
      { url: "https://common.dad/cdn/shop/files/CommonDad_Ultra_Start-323.jpg?v=1767269951&width=1000", alt: "Track Tuesday group photo", date: "2025-01-14" },
      { url: "https://common.dad/cdn/shop/files/CommonDadUltraStart-67.jpg?v=1767269863&width=1300", alt: "Stroller walk at Zilker", date: "2025-01-11" },
    ],
    zipCodes: ["73301", "78701", "78702", "78703", "78704", "78745", "78748", "78749", "78750", "78757"],
    intervalsOrgId: "mock-org-austin",
    shopifyCollectionHandle: "hats",
  },
  {
    slug: "nashville",
    name: "Nashville",
    state: "TN",
    heroImageUrl:
      "https://common.dad/cdn/shop/files/CommonDad_Ultra_Start-240.jpg?v=1767269951&width=1300",
    memberCount: 89,
    established: "2024",
    leads: [
      {
        name: "Chris Donovan",
        role: "Crew Captain",
        imageUrl: "https://common.dad/cdn/shop/files/CommonDadUltraStart-67.jpg?v=1767269863&width=400",
        bio: "Music city dad. Two girls, a guitar, and a 5k habit.",
        instagram: "chrisdonovan",
      },
    ],
    rhythm: [
      {
        dayOfWeek: "Wednesday",
        time: "5:30 AM",
        title: "Group Run",
        category: "group-run",
        location: "Shelby Bottoms Greenway",
        cadence: "weekly",
      },
      {
        dayOfWeek: "Saturday",
        time: "7:00 AM",
        title: "Long Run",
        category: "long-run",
        location: "Percy Warner Park",
        cadence: "weekly",
      },
      {
        dayOfWeek: "Sunday",
        time: "9:30 AM",
        title: "Stroller Walk",
        category: "stroller-walk",
        location: "Centennial Park",
        cadence: "weekly",
      },
    ],
    photos: [
      { url: "https://common.dad/cdn/shop/files/CommonDad_Ultra_Start-53_53721b18-22ea-4cba-8fb4-a3b489513155.jpg?v=1768564152&width=1300", alt: "Nashville crew at Shelby Bottoms", date: "2025-01-20" },
      { url: "https://common.dad/cdn/shop/files/CommonDadUltraStart-67.jpg?v=1767269863&width=1300", alt: "Saturday long run group", date: "2025-01-18" },
    ],
    zipCodes: ["37201", "37203", "37204", "37205", "37206", "37209", "37210", "37211", "37212", "37215"],
    intervalsOrgId: "mock-org-nashville",
  },
  {
    slug: "denver",
    name: "Denver",
    state: "CO",
    heroImageUrl:
      "https://common.dad/cdn/shop/files/CommonDad_Ultra_Start-323.jpg?v=1767269951&width=1000",
    memberCount: 104,
    established: "2024",
    leads: [
      {
        name: "Ben Torres",
        role: "Crew Captain",
        imageUrl: "https://common.dad/cdn/shop/files/CommonDadUltraStart-67.jpg?v=1767269863&width=400",
        bio: "Trail runner, ski dad, and altitude enthusiast.",
        instagram: "bentorres.co",
      },
      {
        name: "Sam Whitaker",
        role: "Community Lead",
        imageUrl: "https://common.dad/cdn/shop/files/CommonDadUltraStart-67.jpg?v=1767269863&width=400",
        bio: "Stay-at-home dad of twins. Parks are my office.",
      },
    ],
    rhythm: [
      {
        dayOfWeek: "Tuesday",
        time: "5:45 AM",
        title: "Track Workout",
        category: "track-workout",
        location: "South High School Track",
        cadence: "weekly",
      },
      {
        dayOfWeek: "Thursday",
        time: "6:00 AM",
        title: "Group Run",
        category: "group-run",
        location: "Washington Park",
        cadence: "weekly",
      },
      {
        dayOfWeek: "Saturday",
        time: "6:00 AM",
        title: "Long Run",
        category: "long-run",
        location: "Cherry Creek Trail",
        cadence: "weekly",
      },
      {
        dayOfWeek: "Saturday",
        time: "10:00 AM",
        title: "Park Day",
        category: "park-day",
        location: "City Park",
        cadence: "monthly",
      },
    ],
    photos: [
      { url: "https://common.dad/cdn/shop/files/CommonDad_Ultra_Start-240.jpg?v=1767269951&width=1300", alt: "Denver crew with mountain backdrop", date: "2025-01-19" },
      { url: "https://common.dad/cdn/shop/files/CommonDad_Ultra_Start-53_53721b18-22ea-4cba-8fb4-a3b489513155.jpg?v=1768564152&width=1300", alt: "Track Tuesday in Denver", date: "2025-01-14" },
      { url: "https://common.dad/cdn/shop/files/CommonDad_Ultra_Start-323.jpg?v=1767269951&width=1000", alt: "Park day at City Park", date: "2025-01-12" },
    ],
    zipCodes: ["80201", "80202", "80203", "80204", "80205", "80206", "80209", "80210", "80218", "80220"],
    intervalsOrgId: "mock-org-denver",
    shopifyCollectionHandle: "hats",
  },
  {
    slug: "san-diego",
    name: "San Diego",
    state: "CA",
    heroImageUrl:
      "https://common.dad/cdn/shop/files/CommonDadUltraStart-67.jpg?v=1767269863&width=1300",
    memberCount: 73,
    established: "2025",
    leads: [
      {
        name: "Ryan Nakamura",
        role: "Crew Captain",
        imageUrl: "https://common.dad/cdn/shop/files/CommonDadUltraStart-67.jpg?v=1767269863&width=400",
        bio: "Ocean air and dad vibes. Four kids, zero excuses.",
        instagram: "ryan.nak",
      },
    ],
    rhythm: [
      {
        dayOfWeek: "Wednesday",
        time: "6:00 AM",
        title: "Group Run",
        category: "group-run",
        location: "Mission Bay Trail",
        cadence: "weekly",
      },
      {
        dayOfWeek: "Saturday",
        time: "6:30 AM",
        title: "Long Run",
        category: "long-run",
        location: "Torrey Pines State Reserve",
        cadence: "weekly",
      },
      {
        dayOfWeek: "Sunday",
        time: "9:00 AM",
        title: "Stroller Walk",
        category: "stroller-walk",
        location: "Balboa Park",
        cadence: "weekly",
      },
    ],
    photos: [
      { url: "https://common.dad/cdn/shop/files/CommonDad_Ultra_Start-323.jpg?v=1767269951&width=1000", alt: "San Diego crew at Mission Bay", date: "2025-01-20" },
      { url: "https://common.dad/cdn/shop/files/CommonDad_Ultra_Start-240.jpg?v=1767269951&width=1300", alt: "Beach day with the crew", date: "2025-01-13" },
    ],
    zipCodes: ["92101", "92102", "92103", "92104", "92106", "92107", "92109", "92110", "92116", "92120"],
    intervalsOrgId: "mock-org-san-diego",
  },
];

// ── Mock Events ──────────────────────────────────────────────────────

export const mockEvents: CrewEvent[] = [
  // Austin events
  {
    id: "evt-austin-01",
    title: "Track Tuesday",
    category: "track-workout",
    source: "intervals",
    date: futureDate(1),
    time: "6:00 AM",
    location: "Austin High Track",
    citySlug: "austin",
    rsvpCount: 18,
    maxCapacity: 30,
  },
  {
    id: "evt-austin-02",
    title: "Thursday Group Run",
    category: "group-run",
    source: "intervals",
    date: futureDate(3),
    time: "6:00 AM",
    location: "Lady Bird Lake Trail",
    citySlug: "austin",
    rsvpCount: 24,
    maxCapacity: 40,
  },
  {
    id: "evt-austin-03",
    title: "Saturday Long Run — 12 miles",
    category: "long-run",
    source: "intervals",
    date: futureDate(5),
    time: "6:30 AM",
    location: "Barton Creek Greenbelt",
    citySlug: "austin",
    rsvpCount: 14,
  },
  {
    id: "evt-austin-04",
    title: "Stroller Walk",
    category: "stroller-walk",
    source: "commondad",
    date: futureDate(5),
    time: "9:00 AM",
    location: "Zilker Park",
    citySlug: "austin",
    rsvpCount: 22,
  },
  {
    id: "evt-austin-05",
    title: "Monthly Park Day",
    category: "park-day",
    source: "commondad",
    date: futureDate(12),
    time: "10:00 AM",
    location: "Mueller Lake Park",
    citySlug: "austin",
    rsvpCount: 35,
    maxCapacity: 60,
  },
  // Nashville events
  {
    id: "evt-nash-01",
    title: "Wednesday Group Run",
    category: "group-run",
    source: "intervals",
    date: futureDate(2),
    time: "5:30 AM",
    location: "Shelby Bottoms Greenway",
    citySlug: "nashville",
    rsvpCount: 16,
  },
  {
    id: "evt-nash-02",
    title: "Saturday Long Run — 10 miles",
    category: "long-run",
    source: "intervals",
    date: futureDate(4),
    time: "7:00 AM",
    location: "Percy Warner Park",
    citySlug: "nashville",
    rsvpCount: 11,
  },
  {
    id: "evt-nash-03",
    title: "Stroller Walk",
    category: "stroller-walk",
    source: "commondad",
    date: futureDate(5),
    time: "9:30 AM",
    location: "Centennial Park",
    citySlug: "nashville",
    rsvpCount: 19,
  },
  // Denver events
  {
    id: "evt-den-01",
    title: "Track Workout",
    category: "track-workout",
    source: "intervals",
    date: futureDate(1),
    time: "5:45 AM",
    location: "South High School Track",
    citySlug: "denver",
    rsvpCount: 15,
    maxCapacity: 25,
  },
  {
    id: "evt-den-02",
    title: "Thursday Group Run",
    category: "group-run",
    source: "intervals",
    date: futureDate(3),
    time: "6:00 AM",
    location: "Washington Park",
    citySlug: "denver",
    rsvpCount: 20,
  },
  {
    id: "evt-den-03",
    title: "Saturday Long Run — 14 miles",
    category: "long-run",
    source: "intervals",
    date: futureDate(5),
    time: "6:00 AM",
    location: "Cherry Creek Trail",
    citySlug: "denver",
    rsvpCount: 12,
  },
  {
    id: "evt-den-04",
    title: "Monthly Park Day",
    category: "park-day",
    source: "commondad",
    date: futureDate(9),
    time: "10:00 AM",
    location: "City Park",
    citySlug: "denver",
    rsvpCount: 28,
  },
  // San Diego events
  {
    id: "evt-sd-01",
    title: "Wednesday Group Run",
    category: "group-run",
    source: "intervals",
    date: futureDate(2),
    time: "6:00 AM",
    location: "Mission Bay Trail",
    citySlug: "san-diego",
    rsvpCount: 13,
  },
  {
    id: "evt-sd-02",
    title: "Saturday Long Run — 10 miles",
    category: "long-run",
    source: "intervals",
    date: futureDate(4),
    time: "6:30 AM",
    location: "Torrey Pines State Reserve",
    citySlug: "san-diego",
    rsvpCount: 9,
  },
  {
    id: "evt-sd-03",
    title: "Stroller Walk",
    category: "stroller-walk",
    source: "commondad",
    date: futureDate(5),
    time: "9:00 AM",
    location: "Balboa Park",
    citySlug: "san-diego",
    rsvpCount: 15,
  },
];

// ── Mock Races ───────────────────────────────────────────────────────

export const mockRaces: Race[] = [
  {
    slug: "commondad-100",
    title: "CommonDad 100",
    date: "2026-06-19",
    location: "Provincetown, MA to Duxbury, MA",
    heroImageUrl:
      "https://common.dad/cdn/shop/files/CommonDad_Ultra_Start-53_53721b18-22ea-4cba-8fb4-a3b489513155.jpg?v=1768564152&width=1300",
    description:
      "100 miles. One shot. No podiums. No prizes. Just you, the road, and every reason you've ever had to keep going.\n\nThe CommonDad 100 is an unsanctioned 100-mile endurance challenge stretching from the tip of Cape Cod to the South Shore — built for fathers who want to test themselves physically, mentally, and emotionally, and do it alongside a community that understands the weight we carry every day.\n\nThis is where dads who run at 4 AM, who push strollers through miles they'll never post about, who carry more than they let on — come to find out what's left when everything else is stripped away.\n\nNo fanfare. No finish line tape. Just 100 miles of honest conversation between you and your limits.\n\nIf you're looking for something comfortable, this isn't it.\nIf you're looking to find out what you're made of — welcome.",
    disclaimer: undefined,
    distances: [
      {
        name: "100 Mile",
        miles: 100,
        price: 350,
        registeredCount: 47,
      },
    ],
    photos: [
      {
        url: "https://common.dad/cdn/shop/files/CommonDad_Ultra_Start-240.jpg?v=1767269951&width=1300",
        alt: "CommonDad 100 runners",
      },
      {
        url: "https://common.dad/cdn/shop/files/CommonDad_Ultra_Start-323.jpg?v=1767269951&width=1000",
        alt: "CommonDad 100 on course",
      },
    ],
    faq: [
      {
        question: "Is this a sanctioned event?",
        answer:
          "No. This is an unsanctioned endurance event with limited registration capacity. There are no medals, no podiums, and no official timing results. Participants must complete a waiver and post-registration intake form.",
      },
      {
        question: "Do I need to bring my own support?",
        answer:
          "Yes. Come prepared with your own pacers and support team for aid stations. Fuel at aid stations is provided for runners if needed.",
      },
      {
        question: "Can I bring my family?",
        answer:
          "Absolutely. Your family is welcome at aid stations and the finish. This is about what you're building at home as much as what you're doing on the road.",
      },
    ],
    crewParticipation: [
      { citySlug: "austin", cityName: "Austin", registeredCount: 28 },
      { citySlug: "denver", cityName: "Denver", registeredCount: 22 },
      { citySlug: "nashville", cityName: "Nashville", registeredCount: 19 },
      { citySlug: "san-diego", cityName: "San Diego", registeredCount: 12 },
    ],
    featured: true,
  },
  {
    slug: "commondad-turkey-trot",
    title: "CommonDad Turkey Trot",
    date: futureDate(280),
    location: "Austin, TX",
    heroImageUrl:
      "https://common.dad/cdn/shop/files/CommonDadUltraStart-67.jpg?v=1767269863&width=1300",
    description:
      "The annual Thanksgiving morning run. Every distance. Every pace. Every dad welcome. Bring the kids, bring the stroller, bring your appetite.",
    distances: [
      {
        name: "10K",
        miles: 6.2,
        price: 45,
        registeredCount: 156,
      },
      {
        name: "5K",
        miles: 3.1,
        price: 35,
        registeredCount: 243,
      },
      {
        name: "1 Mile Fun Run",
        miles: 1,
        price: 15,
        registeredCount: 187,
      },
    ],
    photos: [],
    faq: [
      {
        question: "Is this stroller-friendly?",
        answer: "Yes! All distances are on paved, flat trails. Strollers are welcome and encouraged.",
      },
      {
        question: "What time does it start?",
        answer: "7:00 AM sharp. Be there by 6:30 for packet pickup.",
      },
    ],
    crewParticipation: [
      { citySlug: "austin", cityName: "Austin", registeredCount: 89 },
      { citySlug: "nashville", cityName: "Nashville", registeredCount: 14 },
      { citySlug: "denver", cityName: "Denver", registeredCount: 11 },
      { citySlug: "san-diego", cityName: "San Diego", registeredCount: 8 },
    ],
    featured: false,
  },
];

// ── Mock Stats ───────────────────────────────────────────────────────

export const mockStats: CrewStats = {
  totalDads: 393,
  totalCities: 4,
  eventsPerMonth: 48,
  milesPerWeek: 1240,
};

// ── Zip-to-City lookup ───────────────────────────────────────────────

export function mockZipToCity(zip: string): string | undefined {
  for (const city of mockCrewCities) {
    if (city.zipCodes.includes(zip)) {
      return city.slug;
    }
  }
  return undefined;
}
