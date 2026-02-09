"use client";

import { ArrowLeftIcon, ArrowRightIcon, PlayIcon } from "@heroicons/react/24/outline";
import { GridTileImage } from "components/grid/tile";
import type { MediaItem } from "lib/shopify/types";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

type GalleryItem =
  | { type: "image"; src: string; altText: string }
  | { type: "video"; sources: { url: string; mimeType: string }[]; poster?: string; altText: string };

function mediaToGalleryItems(media: MediaItem[]): GalleryItem[] {
  return media
    .map((item): GalleryItem | null => {
      if (item.mediaContentType === "IMAGE") {
        return {
          type: "image",
          src: item.image.url,
          altText: item.alt || item.image.altText,
        };
      }
      if (item.mediaContentType === "VIDEO") {
        return {
          type: "video",
          sources: item.sources.map((s) => ({ url: s.url, mimeType: s.mimeType })),
          poster: item.previewImage?.url,
          altText: item.alt,
        };
      }
      // ExternalVideo not handled in gallery for now
      return null;
    })
    .filter((item): item is GalleryItem => item !== null);
}

export function Gallery({
  media,
  images,
}: {
  media?: MediaItem[];
  images?: { src: string; altText: string }[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Build gallery items from media (preferred) or legacy images
  const items: GalleryItem[] = media?.length
    ? mediaToGalleryItems(media)
    : (images || []).map((img) => ({ type: "image" as const, ...img }));

  const activeIndex = searchParams.has("image")
    ? parseInt(searchParams.get("image")!)
    : 0;

  const updateIndex = (index: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("image", index);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const nextIndex = activeIndex + 1 < items.length ? activeIndex + 1 : 0;
  const previousIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;

  const buttonClassName =
    "h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center";

  const current = items[activeIndex];

  return (
    <form>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        {current?.type === "video" ? (
          <video
            key={current.sources[0]?.url}
            className="h-full w-full object-contain"
            poster={current.poster}
            controls
            playsInline
            preload="metadata"
          >
            {current.sources.map((source) => (
              <source key={source.url} src={source.url} type={source.mimeType} />
            ))}
          </video>
        ) : current?.type === "image" ? (
          <Image
            className="h-full w-full object-contain"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={current.altText}
            src={current.src}
            priority={true}
          />
        ) : null}

        {items.length > 1 ? (
          <div className="absolute bottom-[15%] flex w-full justify-center">
            <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur-sm dark:border-black dark:bg-neutral-900/80">
              <button
                formAction={() => updateIndex(previousIndex.toString())}
                aria-label="Previous product media"
                className={buttonClassName}
              >
                <ArrowLeftIcon className="h-5" />
              </button>
              <div className="mx-1 h-6 w-px bg-neutral-500"></div>
              <button
                formAction={() => updateIndex(nextIndex.toString())}
                aria-label="Next product media"
                className={buttonClassName}
              >
                <ArrowRightIcon className="h-5" />
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {items.length > 1 ? (
        <ul className="my-12 flex items-center flex-wrap justify-center gap-2 overflow-auto py-1 lg:mb-0">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            if (item.type === "video") {
              return (
                <li key={item.sources[0]?.url} className="h-20 w-20">
                  <button
                    formAction={() => updateIndex(index.toString())}
                    aria-label="Select product video"
                    className="h-full w-full"
                  >
                    <div
                      className={`relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border ${
                        isActive
                          ? "border-2 border-terracotta-600"
                          : "border-neutral-200 dark:border-neutral-800"
                      } bg-neutral-100 dark:bg-neutral-900`}
                    >
                      {item.poster ? (
                        <Image
                          src={item.poster}
                          alt={item.altText}
                          width={80}
                          height={80}
                          className="h-full w-full object-cover"
                        />
                      ) : null}
                      <PlayIcon className="absolute h-6 w-6 text-white drop-shadow-md" />
                    </div>
                  </button>
                </li>
              );
            }

            return (
              <li key={item.src} className="h-20 w-20">
                <button
                  formAction={() => updateIndex(index.toString())}
                  aria-label="Select product image"
                  className="h-full w-full"
                >
                  <GridTileImage
                    alt={item.altText}
                    src={item.src}
                    width={80}
                    height={80}
                    active={isActive}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </form>
  );
}
