import type { CrewParticipation } from "lib/crew/types";
import Link from "next/link";

export function CrewLeaderboard({
  participation,
}: {
  participation: CrewParticipation[];
}) {
  const sorted = [...participation].sort(
    (a, b) => b.registeredCount - a.registeredCount,
  );

  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
      {sorted.map((crew, i) => (
        <Link
          key={crew.citySlug}
          href={`/crew/${crew.citySlug}`}
          className="flex items-center gap-4 border-b border-neutral-100 bg-white px-4 py-3 transition-colors last:border-0 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        >
          <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-neutral-100 text-sm font-bold text-neutral-900 dark:bg-neutral-800 dark:text-white">
            {i + 1}
          </span>
          <span className="flex-1 font-medium text-neutral-900 dark:text-white">
            {crew.cityName}
          </span>
          <span className="text-sm font-semibold text-terracotta-600">
            {crew.registeredCount} dads
          </span>
        </Link>
      ))}
    </div>
  );
}
