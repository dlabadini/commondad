import {
  BoltIcon,
  ClockIcon,
  FlagIcon,
  FireIcon,
  HeartIcon,
  MapPinIcon,
  StarIcon,
  SunIcon,
  TicketIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import { EVENT_BADGE_CONFIG } from "lib/crew/constants";
import type { EventCategory } from "lib/crew/types";

const EVENT_ICONS: Record<EventCategory, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  "group-run": UserGroupIcon,
  "long-run": FireIcon,
  "track-workout": BoltIcon,
  "stroller-walk": HeartIcon,
  "park-day": SunIcon,
  "fair-day": TicketIcon,
  "theme-park-day": StarIcon,
  race: FlagIcon,
};

export function EventBadge({ category }: { category: EventCategory }) {
  const config = EVENT_BADGE_CONFIG[category];
  const Icon = EVENT_ICONS[category];
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
      <Icon className="h-3.5 w-3.5 flex-none" />
      {config.label}
    </span>
  );
}
