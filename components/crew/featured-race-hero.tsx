import type { Race } from "lib/crew/types";
import Image from "next/image";
import Link from "next/link";

export function FeaturedRaceHero({ race }: { race: Race }) {
  return (
    <div className="mx-auto max-w-(--breakpoint-2xl) px-4 pb-4 pt-4">
      <div className="relative overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
        <div className="relative aspect-[21/9] w-full">
          <Image
            src={race.heroImageUrl}
            alt={race.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="px-6 pb-6 md:px-12 md:pb-10">
              <h1 className="font-declaration text-4xl leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                {race.title}
              </h1>
              <p className="mt-2 text-sm text-white/80 md:text-base">
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
                    className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                  >
                    {d.name}
                  </span>
                ))}
              </div>
              <Link
                href={`/races/${race.slug}`}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-terracotta-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-terracotta-700"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
