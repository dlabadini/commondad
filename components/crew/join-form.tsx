"use client";

import { submitJoinForm } from "app/crew/[city]/join/actions";
import { useActionState } from "react";
import { toast } from "sonner";
import { useEffect } from "react";

export function JoinForm({
  citySlug,
  cityName,
}: {
  citySlug: string;
  cityName: string;
}) {
  const [message, formAction] = useActionState(submitJoinForm, null);

  useEffect(() => {
    if (message === "success") {
      toast.success(`Welcome to the ${cityName} crew!`);
    }
  }, [message, cityName]);

  if (message === "success") {
    return (
      <div className="rounded-lg border border-neutral-200 bg-white p-8 text-center dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
          You're in.
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Welcome to the {cityName} crew. We'll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="citySlug" value={citySlug} />
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label
          htmlFor="zip"
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          Zip Code
        </label>
        <input
          type="text"
          id="zip"
          name="zip"
          required
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={5}
          className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-500"
          placeholder="78701"
        />
      </div>
      {message && message !== "success" && (
        <p className="text-sm text-red-600 dark:text-red-400">{message}</p>
      )}
      <button
        type="submit"
        className="w-full rounded-full bg-terracotta-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-terracotta-700"
      >
        Join the Crew
      </button>
    </form>
  );
}
