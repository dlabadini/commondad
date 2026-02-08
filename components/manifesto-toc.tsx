"use client";

import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useMemo, useRef, useState } from "react";

export type ManifestoSection = {
  id: string;
  title: string;
};

export default function ManifestoToc({
  title = "Manifesto",
  sections,
}: {
  title?: string;
  sections: ManifestoSection[];
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id || "");
  const [openSelect, setOpenSelect] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const activeTitle = useMemo(() => {
    return sections.find((s) => s.id === activeId)?.title || sections[0]?.title;
  }, [activeId, sections]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSelect(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    // Initialize from URL hash (if present).
    const hash = window.location.hash.replace("#", "");
    if (hash && sections.some((s) => s.id === hash)) setActiveId(hash);

    // Scroll spy using IntersectionObserver.
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the top-most intersecting section.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop,
          );
        const top = visible[0]?.target as HTMLElement | undefined;
        if (top?.id) setActiveId(top.id);
      },
      {
        root: null,
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.01,
      },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [sections]);

  const linkClasses = (id: string) =>
    clsx(
      "block w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100",
      {
        "underline underline-offset-4 text-black dark:text-white":
          id === activeId,
        "text-neutral-600 dark:text-neutral-300": id !== activeId,
      },
    );

  return (
    <nav aria-label={title}>
      <h3 className="hidden text-xs text-neutral-500 lg:block dark:text-neutral-400">
        {title}
      </h3>

      <ul className="hidden lg:block">
        {sections.map((s) => (
          <li key={s.id} className="mt-2">
            <a
              href={`#${s.id}`}
              className={linkClasses(s.id)}
              onClick={() => setActiveId(s.id)}
            >
              {s.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="relative lg:hidden" ref={ref}>
        <button
          type="button"
          onClick={() => setOpenSelect(!openSelect)}
          className="flex w-full items-center justify-between rounded-sm border border-black/30 px-4 py-2 text-sm text-black dark:border-white/30 dark:text-white"
          aria-expanded={openSelect}
        >
          <div>{activeTitle}</div>
          <ChevronDownIcon className="h-4" />
        </button>
        {openSelect ? (
          <div className="absolute z-40 mt-1 w-full rounded-md bg-white p-3 shadow-md dark:bg-black">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={clsx("block py-2 text-sm", {
                  "text-black dark:text-white": s.id === activeId,
                  "text-neutral-600 dark:text-neutral-300": s.id !== activeId,
                })}
                onClick={() => {
                  setActiveId(s.id);
                  setOpenSelect(false);
                }}
              >
                {s.title}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}

