import type { Race } from "lib/crew/types";
import Link from "next/link";
import { CrewLeaderboard } from "./crew-leaderboard";

function getTimeUntil(dateStr: string): string {
  const eventDate = new Date(dateStr);
  const now = new Date();
  const diffMs = eventDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "Completed";
  if (diffDays === 1) return "Tomorrow";
  if (diffDays <= 7) return `${diffDays} days`;
  const weeks = Math.ceil(diffDays / 7);
  if (weeks <= 20) return `${weeks} weeks`;
  const months = Math.round(diffDays / 30);
  return `${months} months`;
}

function Separator() {
  return <hr className="border-neutral-200 dark:border-neutral-800" />;
}

export function RaceDetails({ race }: { race: Race }) {
  const timeUntil = getTimeUntil(race.date);
  const isUpcoming = new Date(race.date) > new Date();
  const totalRegistered = race.distances.reduce(
    (sum, d) => sum + d.registeredCount,
    0,
  );

  return (
    <>
      <div className="mx-auto max-w-4xl space-y-5 px-4 pb-12 sm:space-y-6 sm:px-6">
        {/* Back link */}
        <Link
          href="/races"
          className="-ml-1 inline-flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="flex-none"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All races
        </Link>

        {/* Header */}
        <section className="flex items-start gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="font-declaration text-2xl leading-tight tracking-tight text-neutral-900 sm:text-3xl md:text-4xl dark:text-white">
              {race.title}
            </h1>
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
                {new Date(race.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
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
                {race.location}
              </span>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
              {isUpcoming && (
                <span className="rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:border-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
                  Open
                </span>
              )}
              <span className="rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:border-neutral-700 dark:text-neutral-400">
                {timeUntil}
              </span>
            </div>
          </div>
        </section>

        {/* About */}
        <div className="space-y-4">
          {race.disclaimer && (
            <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 dark:border-amber-700 dark:bg-amber-950/30">
              <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
                {race.disclaimer}
              </p>
            </div>
          )}
          <div className="space-y-3">
            {race.description.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="whitespace-pre-line text-sm leading-relaxed text-neutral-700 dark:text-neutral-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <Separator />

        {/* Distances */}
        {race.distances.length > 0 && (
          <>
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                {race.distances.length === 1 ? "Race" : "Distances"}
              </h2>
              <div className="space-y-3">
                {race.distances.map((distance) => (
                  <div
                    key={distance.name}
                    className="flex items-center justify-between gap-4 rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900"
                  >
                    <div>
                      <p className="font-medium text-neutral-900 dark:text-white">
                        {distance.name}
                      </p>
                      <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                        {distance.miles} miles &middot;{" "}
                        {distance.registeredCount} registered
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-neutral-900 dark:text-white">
                        ${distance.price}
                      </span>
                      <button className="rounded-full bg-terracotta-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-terracotta-700">
                        Register
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Separator />
          </>
        )}

        {/* FAQ */}
        {race.faq.length > 0 && (
          <>
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                FAQ
              </h2>
              <div className="space-y-4">
                {race.faq.map((item, i) => (
                  <div key={i}>
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {item.question}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <Separator />
          </>
        )}

        {/* Who's Going */}
        {race.crewParticipation.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              Who's Going
            </h2>
            <CrewLeaderboard participation={race.crewParticipation} />
          </div>
        )}

        {/* Bottom spacer for sticky footer */}
        <div className="h-20 sm:h-24" />
      </div>

      {/* Sticky footer CTA */}
      {isUpcoming && race.distances.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white/95 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/95">
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-neutral-900 dark:text-white">
                {race.distances.length === 1
                  ? race.title
                  : race.distances.map((d) => d.name).join(" / ")}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {new Date(race.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                &middot; {totalRegistered} registered
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-base font-semibold text-neutral-900 sm:text-lg dark:text-white">
                ${race.distances[0]!.price}
              </span>
              <button className="h-12 rounded-full bg-terracotta-600 px-6 text-base font-medium text-white transition-colors hover:bg-terracotta-700">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
