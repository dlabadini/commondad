import type { RhythmEntry } from "lib/crew/types";
import { EventBadge } from "./event-badge";

function groupByCadence(
  rhythm: RhythmEntry[],
): Record<string, RhythmEntry[]> {
  const groups: Record<string, RhythmEntry[]> = {};
  for (const entry of rhythm) {
    const key = entry.cadence;
    if (!groups[key]) groups[key] = [];
    groups[key].push(entry);
  }
  return groups;
}

const cadenceLabels: Record<string, string> = {
  weekly: "Weekly",
  monthly: "Monthly",
  seasonal: "Seasonal",
};

export function RhythmSection({ rhythm }: { rhythm: RhythmEntry[] }) {
  const groups = groupByCadence(rhythm);

  return (
    <div className="space-y-4">
      {Object.entries(groups).map(([cadence, entries]) => (
        <div key={cadence}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            {cadenceLabels[cadence] || cadence}
          </p>
          <div className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
            {entries.map((entry, i) => (
              <div
                key={i}
                className="flex items-center gap-4 border-b border-neutral-100 bg-white px-4 py-3 last:border-0 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <span className="w-20 flex-none text-sm font-medium text-neutral-900 dark:text-white">
                  {entry.dayOfWeek}
                </span>
                <span className="w-16 flex-none text-sm text-neutral-500 dark:text-neutral-400">
                  {entry.time}
                </span>
                <EventBadge category={entry.category} />
                <span className="flex-1 text-sm text-neutral-900 dark:text-white">
                  {entry.title}
                </span>
                <span className="hidden text-sm text-neutral-500 sm:block dark:text-neutral-400">
                  {entry.location}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
