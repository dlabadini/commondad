"use client";

import {
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/solid";
import { useRef, useState } from "react";

export function HeroVideoPlayer({
  src,
  poster,
}: {
  src: string;
  poster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Center play/pause */}
      <button
        type="button"
        onClick={togglePlay}
        className="absolute inset-0 z-10 flex items-center justify-center"
        aria-label={playing ? "Pause video" : "Play video"}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70">
          {playing ? (
            <PauseIcon className="h-6 w-6" />
          ) : (
            <PlayIcon className="ml-0.5 h-6 w-6" />
          )}
        </span>
      </button>

      {/* Bottom-right mute toggle */}
      <button
        type="button"
        onClick={toggleMute}
        className="absolute right-3 bottom-3 z-20 flex items-center gap-2 rounded-full bg-black/50 px-3 py-2 text-xs font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-black/70"
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? (
          <SpeakerXMarkIcon className="h-4 w-4" />
        ) : (
          <SpeakerWaveIcon className="h-4 w-4" />
        )}
        {muted ? "Unmute" : "Mute"}
      </button>
    </>
  );
}
