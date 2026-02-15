import Link from "next/link";

export function JoinCTA({
  cityName,
  citySlug,
}: {
  cityName: string;
  citySlug: string;
}) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center sm:p-10 dark:border-neutral-800 dark:bg-neutral-900">
      <p className="font-declaration text-xl tracking-tight text-neutral-900 sm:text-2xl dark:text-white">
        Show up. Carry weight. Lead.
      </p>
      <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
        Join the dads in {cityName} who are making it common.
      </p>
      <Link
        href={`/crew/${citySlug}/join`}
        className="mt-5 inline-flex items-center justify-center rounded-full bg-terracotta-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-terracotta-700"
      >
        Join {cityName} Crew
      </Link>
    </div>
  );
}
