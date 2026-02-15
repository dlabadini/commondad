import type { CrewLead } from "lib/crew/types";
import Image from "next/image";

export function CrewLeads({ leads }: { leads: CrewLead[] }) {
  return (
    <div className="space-y-3">
      {leads.map((lead) => (
        <div
          key={lead.name}
          className="flex items-center gap-4 rounded-lg border border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="relative h-12 w-12 flex-none overflow-hidden rounded-full">
            <Image
              src={lead.imageUrl}
              alt={lead.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-medium text-neutral-900 dark:text-white">
                {lead.name}
              </p>
              <span className="rounded-full border border-neutral-200 px-2 py-0.5 text-xs text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
                {lead.role}
              </span>
            </div>
            <p className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-400">
              {lead.bio}
            </p>
          </div>
          {lead.instagram && (
            <a
              href={`https://instagram.com/${lead.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none text-sm text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-white"
            >
              @{lead.instagram}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
