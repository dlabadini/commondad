import Link from "next/link";
import PaperShader from "./paper-shader";
import { HeroVideoPlayer } from "./hero-video-player";

export function HeroVideo({
  src,
  poster,
}: {
  src?: string;
  poster?: string;
}) {
  return (
    <div className="mx-auto max-w-(--breakpoint-2xl) px-4 pb-4 pt-4">
      <div className="relative overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
        <div className="relative aspect-video w-full">
          {src ? (
            <HeroVideoPlayer src={src} poster={poster} />
          ) : poster ? (
            <img
              src={poster}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <PaperShader />
          )}

          {/* Overlay text */}
          <div className="absolute inset-0 z-20 flex items-end">
            <div className="px-6 pb-8 md:px-12 md:pb-12">
              <h1 className="font-declaration text-4xl leading-tight tracking-tight text-neutral-900 md:text-6xl lg:text-7xl dark:text-white">
                Make Good Dads
                <br />
                Common.
              </h1>
              <p className="mt-4 max-w-lg text-base text-neutral-600 md:text-lg dark:text-white/70">
                This isn't dad culture. This is leadership.
              </p>
              <Link
                href="/search"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-terracotta-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-terracotta-700"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
