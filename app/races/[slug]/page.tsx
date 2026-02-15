import { RaceHero } from "components/crew/race-hero";
import { RaceDetails } from "components/crew/race-details";
import Footer from "components/layout/footer";
import { getRace } from "lib/crew";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const race = await getRace(params.slug);

  if (!race) return {};

  return {
    title: race.title,
    description: race.description,
    openGraph: {
      images: [{ url: race.heroImageUrl }],
    },
  };
}

export default async function RaceDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const race = await getRace(params.slug);

  if (!race) return notFound();

  return (
    <>
      <RaceHero
        heroImageUrl={race.heroImageUrl}
        title={race.title}
        photos={race.photos}
      />
      <RaceDetails race={race} />
      <Footer />
    </>
  );
}
