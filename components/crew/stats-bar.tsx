import type { CrewStats } from "lib/crew/types";

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4 text-center dark:border-neutral-800 dark:bg-neutral-900">
      <p className="text-2xl font-bold text-neutral-900 md:text-3xl dark:text-white">
        {value}
      </p>
      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
        {label}
      </p>
    </div>
  );
}

export function StatsBar({ stats }: { stats: CrewStats }) {
  return (
    <div className="mx-auto max-w-(--breakpoint-2xl) px-4 py-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatItem value={stats.totalDads.toLocaleString()} label="Dads" />
        <StatItem value={stats.totalCities.toString()} label="Cities" />
        <StatItem
          value={stats.eventsPerMonth.toString()}
          label="Events / Month"
        />
        <StatItem
          value={`${stats.milesPerWeek.toLocaleString()}`}
          label="Miles / Week"
        />
      </div>
    </div>
  );
}
