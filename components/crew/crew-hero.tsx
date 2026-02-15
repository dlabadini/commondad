import Link from "next/link";

export function CrewHero() {
  return (
    <div className="mx-auto max-w-(--breakpoint-2xl) px-4 pb-4 pt-4">
      <div className="relative overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
        <div className="relative w-full py-16 md:py-24 lg:py-32">
          <div className="px-6 md:px-12">
            <h1 className="font-declaration text-4xl leading-tight tracking-tight text-neutral-900 md:text-6xl lg:text-7xl dark:text-white">
              Every City.
              <br />
              Every Week.
            </h1>
            <p className="mt-4 max-w-lg text-base text-neutral-600 md:text-lg dark:text-neutral-400">
              Dads running, walking, and showing up together. Find your crew or
              start one.
            </p>
            <Link
              href="#find"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-terracotta-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-terracotta-700"
            >
              Find Your Crew
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
