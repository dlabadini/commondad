import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crew",
  description:
    "Find your CommonDad crew. City-based chapters where dads gather for weekly runs, stroller walks, park days, and more.",
};

export default function CrewLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
