export function StartCrewCTA() {
  return (
    <div className="mx-auto max-w-(--breakpoint-2xl) px-4 pb-12">
      <div className="rounded-lg border border-neutral-200 bg-white p-8 md:p-12 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="font-declaration text-3xl tracking-tight text-neutral-900 md:text-4xl dark:text-white">
          Don't See Your City?
        </h2>
        <p className="mt-4 max-w-xl text-neutral-600 dark:text-neutral-400">
          Start a crew. We'll give you everything you need.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <li className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-terracotta-600" />
            Crew playbook and launch toolkit
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-terracotta-600" />
            Event templates and scheduling tools
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-terracotta-600" />
            National community and captain network
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-terracotta-600" />
            Crew gear and merchandise
          </li>
        </ul>
        <a
          href="mailto:crew@commondad.com"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-terracotta-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-terracotta-700"
        >
          Start a Crew
        </a>
      </div>
    </div>
  );
}
