"use client";

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

function parseTheme(value: string | null): Theme | null {
  if (value === "light" || value === "dark" || value === "system") return value;
  return null;
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = theme === "dark" || (theme === "system" && systemDark);

  if (isDark) root.classList.add("dark");
  else root.classList.remove("dark");
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const saved = parseTheme(localStorage.getItem("theme"));
    const initial: Theme = saved ?? "system";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const selectTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch {
      // ignore
    }
  };

  const options: { value: Theme; icon: React.ReactNode; label: string }[] = [
    {
      value: "light",
      icon: <SunIcon className="h-4 w-4" />,
      label: "Light mode",
    },
    {
      value: "dark",
      icon: <MoonIcon className="h-4 w-4" />,
      label: "Dark mode",
    },
    {
      value: "system",
      icon: <ComputerDesktopIcon className="h-4 w-4" />,
      label: "System preference",
    },
  ];

  return (
    <div className="inline-flex rounded-md border border-neutral-200 bg-neutral-100 p-0.5 dark:border-neutral-700 dark:bg-neutral-900">
      {options.map(({ value, icon, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => selectTheme(value)}
          aria-label={label}
          className={`inline-flex h-7 w-7 items-center justify-center rounded transition-colors ${
            theme === value
              ? "bg-white text-black shadow-sm dark:bg-neutral-800 dark:text-white"
              : "text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"
          }`}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
