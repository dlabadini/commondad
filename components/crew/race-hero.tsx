"use client";

import type { RacePhoto } from "lib/crew/types";
import Image from "next/image";
import { useState } from "react";

export function RaceHero({
  heroImageUrl,
  title,
  photos,
}: {
  heroImageUrl: string;
  title: string;
  photos: RacePhoto[];
}) {
  const allImages = [
    { url: heroImageUrl, alt: title },
    ...photos,
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const active = allImages[activeIndex]!;

  return (
    <div className="mx-auto max-w-4xl px-4 pt-4 sm:px-6">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl">
        <Image
          src={active.url}
          alt={active.alt}
          fill
          priority
          sizes="(min-width: 896px) 896px, 100vw"
          className="object-cover"
        />
      </div>
      {allImages.length > 1 && (
        <div className="-mx-1 mt-3 flex gap-2 overflow-x-auto px-1 py-1">
          {allImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative h-16 w-24 flex-none rounded-lg transition-all sm:h-20 sm:w-28 ${
                i === activeIndex
                  ? "ring-2 ring-terracotta-600 ring-offset-2 dark:ring-offset-neutral-950"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
