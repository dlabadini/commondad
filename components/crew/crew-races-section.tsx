import type { Race } from "lib/crew/types";
import Image from "next/image";
import Link from "next/link";

export function CrewRacesSection({
  races,
  citySlug,
}: {
  races: Race[];
  citySlug: string;
}) {
  return (
    <div className="space-y-3">
      {races.map((race) => {
        const participation = race.crewParticipation.find(
          (p) => p.citySlug === citySlug,
        );
        return (
          <Link
            key={race.slug}
            href={`/races/${race.slug}`}
            className="group flex items-center gap-4 overflow-hidden rounded-lg border border-neutral-200 bg-white pr-4 transition-colors hover:border-terracotta-600 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="relative h-20 w-28 flex-none sm:h-24 sm:w-36">
              <Image
                src={race.heroImageUrl}
                alt={race.title}
                fill
                sizes="144px"
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex-1 py-3">
              <p className="font-medium text-neutral-900 dark:text-white">
                {race.title}
              </p>
              <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                {new Date(race.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                &middot; {race.location}
              </p>
              {participation && (
                <p className="mt-1 text-xs font-medium text-terracotta-600">
                  {participation.registeredCount} from your crew
                </p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
