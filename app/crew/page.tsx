import { CrewHero } from "components/crew/crew-hero";
import { CityGrid } from "components/crew/city-grid";
import { StartCrewCTA } from "components/crew/start-crew-cta";
import { RacesPreview } from "components/crew/races-preview";
import Footer from "components/layout/footer";
import { getCrewCities, getFeaturedRace } from "lib/crew";

export default async function CrewPage() {
  const [cities, featuredRace] = await Promise.all([
    getCrewCities(),
    getFeaturedRace(),
  ]);

  return (
    <>
      <CrewHero />
      <CityGrid cities={cities} />
      <StartCrewCTA />
      {featuredRace && <RacesPreview race={featuredRace} />}
      <Footer />
    </>
  );
}
