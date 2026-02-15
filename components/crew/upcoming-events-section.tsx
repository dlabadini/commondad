import type { CrewEvent } from "lib/crew/types";
import { EventCard } from "./event-card";

export function UpcomingEventsSection({ events }: { events: CrewEvent[] }) {
  return (
    <div className="space-y-3">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
