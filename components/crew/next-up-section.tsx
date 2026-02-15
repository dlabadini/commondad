import type { CrewEvent } from "lib/crew/types";
import { EventBadge } from "./event-badge";

function getCountdownText(dateStr: string): string {
  const eventDate = new Date(dateStr);
  const now = new Date();
  const diffMs = eventDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "TODAY";
  if (diffDays === 1) return "TOMORROW";
  return `IN ${diffDays} DAYS`;
}

export function NextUpSection({ event }: { event: CrewEvent }) {
  const countdown = getCountdownText(event.date);

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-5 sm:p-6 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-wider text-terracotta-600">
              {countdown}
            </span>
            <EventBadge category={event.category} />
          </div>
          <h3 className="mt-2 text-lg font-bold text-neutral-900 sm:text-xl dark:text-white">
            {event.title}
          </h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500 sm:text-sm dark:text-neutral-400">
            <span className="inline-flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="flex-none"
              >
                <rect
                  x="2"
                  y="3"
                  width="12"
                  height="11"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M2 6.5H14"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M5.5 2V4M10.5 2V4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}{" "}
              &middot; {event.time}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="flex-none"
              >
                <path
                  d="M8 1.5C5.1 1.5 2.75 3.85 2.75 6.75C2.75 10.5 8 14.5 8 14.5C8 14.5 13.25 10.5 13.25 6.75C13.25 3.85 10.9 1.5 8 1.5Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <circle
                  cx="8"
                  cy="6.75"
                  r="1.75"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              {event.location}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            <span className="font-semibold text-neutral-900 dark:text-white">
              {event.rsvpCount}
            </span>{" "}
            going
          </p>
          <button className="rounded-full bg-terracotta-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-terracotta-700">
            I&apos;m In
          </button>
        </div>
      </div>
    </div>
  );
}
