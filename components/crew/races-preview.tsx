import type { Race } from "lib/crew/types";
import Image from "next/image";
import Link from "next/link";

export function RacesPreview({ race }: { race: Race }) {
  const totalRegistered = race.distances.reduce(
    (sum, d) => sum + d.registeredCount,
    0,
  );

  return (
    <div className="mx-auto max-w-(--breakpoint-2xl) px-4 pb-12">
      <h2 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-white">
        Featured Race
      </h2>
      <Link
        href={`/races/${race.slug}`}
        className="group block overflow-hidden rounded-lg border border-neutral-200 bg-white transition-colors hover:border-terracotta-600 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <div className="flex flex-col md:flex-row">
          <div className="relative aspect-[16/9] w-full md:aspect-auto md:w-1/2">
            <Image
              src={race.heroImageUrl}
              alt={race.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
            <h3 className="font-declaration text-2xl tracking-tight text-neutral-900 md:text-3xl dark:text-white">
              {race.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              {new Date(race.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              &middot; {race.location}
            </p>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              {race.distances.map((d) => d.name).join(" / ")}
            </p>
            <p className="mt-4 text-sm font-medium text-terracotta-600">
              {totalRegistered} dads registered
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
