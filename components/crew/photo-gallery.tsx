import type { CrewPhoto } from "lib/crew/types";
import Image from "next/image";

export function PhotoGallery({ photos }: { photos: CrewPhoto[] }) {
  return (
    <div className="-mx-4 sm:-mx-6">
      <div className="flex gap-2 overflow-x-auto px-4 pb-2 sm:gap-3 sm:px-6">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] h-40 flex-none overflow-hidden rounded-lg sm:h-52"
          >
            <Image
              src={photo.url}
              alt={photo.alt}
              fill
              sizes="(min-width: 640px) 208px, 160px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
