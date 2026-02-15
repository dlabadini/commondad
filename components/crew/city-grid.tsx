import type { CrewCity } from "lib/crew/types";
import Image from "next/image";
import Link from "next/link";

export function CityGrid({ cities }: { cities: CrewCity[] }) {
  return (
    <div className="mx-auto max-w-(--breakpoint-2xl) px-4 pb-12">
      <h2 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-white">
        Active Crews
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`/crew/${city.slug}`}
            className="group overflow-hidden rounded-lg border border-neutral-200 bg-white transition-colors hover:border-terracotta-600 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={city.heroImageUrl}
                alt={`${city.name}, ${city.state} crew`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {city.name}, {city.state}
              </h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {city.memberCount} members
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
