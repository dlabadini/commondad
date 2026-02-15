import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Races",
  description:
    "CommonDad races and events. From ultramarathons to turkey trots, run with purpose.",
};

export default function RacesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
