import type { CrewEvent } from "lib/crew/types";
import { EventBadge } from "./event-badge";

export function EventCard({ event }: { event: CrewEvent }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <EventBadge category={event.category} />
        </div>
        <p className="mt-1.5 font-medium text-neutral-900 dark:text-white">
          {event.title}
        </p>
        <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
          {new Date(event.date).toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}{" "}
          &middot; {event.time} &middot; {event.location}
        </p>
      </div>
      <div className="flex-none text-right">
        <p className="text-sm font-semibold text-terracotta-600">
          {event.rsvpCount}
          {event.maxCapacity && (
            <span className="font-normal text-neutral-400">
              /{event.maxCapacity}
            </span>
          )}
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">going</p>
      </div>
    </div>
  );
}
