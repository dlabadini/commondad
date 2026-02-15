import { FeaturedRaceHero } from "components/crew/featured-race-hero";
import { RacesList } from "components/crew/races-list";
import Footer from "components/layout/footer";
import { getFeaturedRace, getRaces } from "lib/crew";

export default async function RacesPage() {
  const [featuredRace, allRaces] = await Promise.all([
    getFeaturedRace(),
    getRaces(),
  ]);

  return (
    <>
      {featuredRace && <FeaturedRaceHero race={featuredRace} />}
      <RacesList races={allRaces} />
      <Footer />
    </>
  );
}
