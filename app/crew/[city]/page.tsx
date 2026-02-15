import { CrewCityHero } from "components/crew/crew-city-hero";
import { NextUpSection } from "components/crew/next-up-section";
import { UpcomingEventsSection } from "components/crew/upcoming-events-section";
import { RhythmSection } from "components/crew/rhythm-section";
import { CrewRacesSection } from "components/crew/crew-races-section";
import { PhotoGallery } from "components/crew/photo-gallery";
import { CrewLeads } from "components/crew/crew-leads";
import { CrewGearSection } from "components/crew/crew-gear-section";
import { JoinCTA } from "components/crew/join-cta";
import Footer from "components/layout/footer";
import {
  getCrewCity,
  getUpcomingEvents,
  getNextEvent,
  getRaces,
} from "lib/crew";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata(props: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const crew = await getCrewCity(params.city);

  if (!crew) return {};

  return {
    title: `${crew.name}, ${crew.state} Crew`,
    description: `Join the CommonDad crew in ${crew.name}, ${crew.state}. Weekly runs, stroller walks, park days, and more.`,
    openGraph: {
      images: [{ url: crew.heroImageUrl }],
    },
  };
}

export default async function CrewCityPage(props: {
  params: Promise<{ city: string }>;
}) {
  const params = await props.params;
  const [crew, upcomingEvents, nextEvent, allRaces] = await Promise.all([
    getCrewCity(params.city),
    getUpcomingEvents(params.city),
    getNextEvent(params.city),
    getRaces(),
  ]);

  if (!crew) return notFound();

  const crewRaces = allRaces.filter((race) =>
    race.crewParticipation.some((p) => p.citySlug === crew.slug),
  );

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-4 sm:px-6">
        <Link
          href="/crew"
          className="-ml-1 inline-flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="flex-none"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All crews
        </Link>
      </div>
      <CrewCityHero crew={crew} />
      <div className="mx-auto max-w-4xl space-y-5 px-4 pb-12 sm:space-y-6 sm:px-6">
        {/* Next Up */}
        {nextEvent && (
          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              Next Up
            </h2>
            <NextUpSection event={nextEvent} />
          </div>
        )}

        <hr className="border-neutral-200 dark:border-neutral-800" />

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <>
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Upcoming
              </h2>
              <UpcomingEventsSection events={upcomingEvents} />
            </div>
            <hr className="border-neutral-200 dark:border-neutral-800" />
          </>
        )}

        {/* The Rhythm */}
        {crew.rhythm.length > 0 && (
          <>
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                The Rhythm
              </h2>
              <RhythmSection rhythm={crew.rhythm} />
            </div>
            <hr className="border-neutral-200 dark:border-neutral-800" />
          </>
        )}

        {/* Racing Together */}
        {crewRaces.length > 0 && (
          <>
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Racing Together
              </h2>
              <CrewRacesSection races={crewRaces} citySlug={crew.slug} />
            </div>
            <hr className="border-neutral-200 dark:border-neutral-800" />
          </>
        )}

        {/* Photos */}
        {crew.photos.length > 0 && (
          <>
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Last Weekend
              </h2>
              <PhotoGallery photos={crew.photos} />
            </div>
            <hr className="border-neutral-200 dark:border-neutral-800" />
          </>
        )}

        {/* Crew Leads */}
        {crew.leads.length > 0 && (
          <>
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Your Crew Leads
              </h2>
              <CrewLeads leads={crew.leads} />
            </div>
            <hr className="border-neutral-200 dark:border-neutral-800" />
          </>
        )}

        {/* Crew Gear */}
        <div className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Crew Gear
          </h2>
          <CrewGearSection collectionHandle={crew.shopifyCollectionHandle} />
        </div>

        <hr className="border-neutral-200 dark:border-neutral-800" />

        {/* Join CTA */}
        <JoinCTA cityName={crew.name} citySlug={crew.slug} />
      </div>
      <Footer />
    </>
  );
}
