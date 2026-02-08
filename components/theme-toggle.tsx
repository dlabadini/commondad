"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

function setThemeClass(isDark: boolean) {
  const root = document.documentElement;
  if (isDark) root.classList.add("dark");
  else root.classList.remove("dark");
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => {
        const next = !isDark;
        setIsDark(next);
        setThemeClass(next);
        try {
          localStorage.setItem("theme", next ? "dark" : "light");
        } catch {
          // ignore
        }
      }}
      className="mr-2 inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-white text-black hover:bg-neutral-50 dark:border-neutral-700 dark:bg-black dark:text-white dark:hover:bg-neutral-950"
    >
      {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
}

