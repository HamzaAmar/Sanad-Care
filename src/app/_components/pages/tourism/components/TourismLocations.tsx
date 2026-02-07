import { Heading, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";

const TourismLocations = () => {
  const t = useTranslations("tourism.page.locations");
  const places = t.raw("places") as string[];

  return (
    <section className="tourism-locations">
      <div className="container">
        <div className="locations-grid">
          <div className="locations-content">
            <Heading size="7" as="h2" className="section-heading">
              {t("title")}
            </Heading>
            <Text size="5" color="b" className="opacity-80">
              {t("description")}
            </Text>
            <div className="locations-list">
              {places.map((place) => (
                <div key={place} className="location-item">
                  <div className="location-dot" />
                  <span className="location-text">{place}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="map-placeholder">
            {/* Placeholder for locations image */}
            <span className="text-slate-400 font-medium">Map / Location Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismLocations;
