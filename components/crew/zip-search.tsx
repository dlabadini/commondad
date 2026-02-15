"use client";

import { findCrewByZip } from "app/crew/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ZipSearch() {
  const [zip, setZip] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const result = await findCrewByZip(zip);

    if (result.citySlug) {
      router.push(`/crew/${result.citySlug}`);
    } else {
      setMessage(result.message);
      setLoading(false);
    }
  }

  return (
    <div id="find" className="mx-auto max-w-(--breakpoint-2xl) px-4 pb-8">
      <div className="mx-auto max-w-md">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={5}
            placeholder="Enter your zip code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="flex-1 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-terracotta-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-terracotta-700 disabled:opacity-60"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>
        {message && (
          <p className="mt-3 text-center text-sm text-neutral-600 dark:text-neutral-400">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
