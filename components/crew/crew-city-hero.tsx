import type { CrewCity } from "lib/crew/types";
import Image from "next/image";

export function CrewCityHero({ crew }: { crew: CrewCity }) {
  return (
    <div className="mx-auto max-w-4xl px-4 pt-2 sm:px-6">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl">
        <Image
          src={crew.heroImageUrl}
          alt={`${crew.name}, ${crew.state} crew`}
          fill
          priority
          sizes="(min-width: 896px) 896px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="px-5 pb-5 sm:px-8 sm:pb-8">
            <h1 className="font-declaration text-3xl leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              {crew.name}, {crew.state}
            </h1>
            <p className="mt-1.5 text-sm text-white/80 sm:text-base">
              {crew.memberCount} dads &middot; Est. {crew.established}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
