import TourismCTA from "./components/TourismCTA";
import TourismHero from "./components/TourismHero";
import TourismJourney from "./components/TourismJourney";
import TourismLocations from "./components/TourismLocations";
import TourismPricing from "./components/TourismPricing";
import TourismServices from "./components/TourismServices";
import TourismTrust from "./components/TourismTrust";
import WhyTourism from "./components/WhyTourism";

const Tourism = () => {
  return (
    <main className="section">
      <TourismHero />
      <WhyTourism />
      <TourismServices />
      <TourismLocations />
      <TourismJourney />
      <TourismPricing />
      <TourismTrust />
      <TourismCTA />
    </main>
  );
};

export default Tourism;
