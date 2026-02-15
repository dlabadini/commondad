import type { Race } from "lib/crew/types";
import Image from "next/image";
import Link from "next/link";

export function RacesList({ races }: { races: Race[] }) {
  return (
    <div className="mx-auto max-w-(--breakpoint-2xl) px-4 pb-12">
      <h2 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-white">
        All Races
      </h2>
      <div className="space-y-4">
        {races.map((race) => {
          const totalRegistered = race.distances.reduce(
            (sum, d) => sum + d.registeredCount,
            0,
          );
          return (
            <Link
              key={race.slug}
              href={`/races/${race.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white transition-colors hover:border-terracotta-600 md:flex-row dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="relative aspect-[16/9] w-full md:aspect-auto md:w-72">
                <Image
                  src={race.heroImageUrl}
                  alt={race.title}
                  fill
                  sizes="(min-width: 768px) 288px, 100vw"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex-1 p-4 md:p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {race.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  {new Date(race.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  &middot; {race.location}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {race.distances.map((d) => (
                    <span
                      key={d.name}
                      className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                    >
                      {d.name}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-4">
                  <p className="text-sm font-medium text-terracotta-600">
                    {totalRegistered} registered
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {race.crewParticipation.length} crews represented
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
