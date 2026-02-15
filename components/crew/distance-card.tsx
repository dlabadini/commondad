import type { EventDistance } from "lib/crew/types";

export function DistanceCard({ distance }: { distance: EventDistance }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
      <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
        {distance.name}
      </h3>
      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
        {distance.miles} miles
      </p>
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-neutral-500 dark:text-neutral-400">
            Registered
          </span>
          <span className="font-medium text-terracotta-600">
            {distance.registeredCount}
          </span>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-lg font-bold text-neutral-900 dark:text-white">
          ${distance.price}
        </span>
        <button className="rounded-full bg-terracotta-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-terracotta-700">
          Register
        </button>
      </div>
    </div>
  );
}
