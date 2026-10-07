import { Heading, Paper, Text } from "@pillar-ui/core";
import { MapPin } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { Reveal } from "@/app/_components/reveal";

const TourismLocations = () => {
  const t = useTranslations("tourism.page.locations");
  const places = t.raw("places") as string[];

  return (
    <section className="tourism-locations" aria-labelledby="tourism-locations-title">
      <div className="tourism-container tourism-band">
        <div className="tourism-locations__grid">
          <div className="tourism-locations__content">
            <header className="tour-head">
              <Reveal index={0}>
                <Heading
                  as="h2"
                  size="8"
                  weight="8"
                  className="tour-title"
                  id="tourism-locations-title"
                >
                  {t("title")}
                </Heading>
              </Reveal>

              <Reveal index={1}>
                <Text size="6" weight="3" color="b" low className="tour-lead">
                  {t("description")}
                </Text>
              </Reveal>
            </header>

            <ul className="tourism-locations__list" role="list">
              {places.map((place, i) => (
                <li key={place}>
                  <Reveal variant="item" index={i}>
                    <Paper
                      background="B1"
                      border
                      p="4"
                      corner="3"
                      className="tourism-locations__place tour-card"
                    >
                      <span className="tour-icon-chip tour-icon-chip--sm" aria-hidden="true">
                        <MapPin />
                      </span>
                      <Text as="span" size="4" weight="5">
                        {place}
                      </Text>
                    </Paper>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <Reveal variant="item" index={1}>
            <div className="tourism-locations__map" aria-hidden="true">
              <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
                <path
                  className="tl-map__route"
                  d="M60 220C120 160 150 190 200 150c50-40 100-20 144-66"
                />
                <g className="tl-map__pin">
                  <circle className="tl-map__pin-ring" cx="60" cy="220" r="8" />
                  <circle className="tl-map__pin-dot" cx="60" cy="220" r="3" />
                </g>
                <g className="tl-map__pin">
                  <circle className="tl-map__pin-ring" cx="200" cy="150" r="8" />
                  <circle className="tl-map__pin-dot" cx="200" cy="150" r="3" />
                </g>
                <g className="tl-map__pin">
                  <circle className="tl-map__pin-ring" cx="344" cy="84" r="8" />
                  <circle className="tl-map__pin-dot" cx="344" cy="84" r="3" />
                </g>
                <g className="tl-map__pin">
                  <circle className="tl-map__pin-ring" cx="300" cy="208" r="8" />
                  <circle className="tl-map__pin-dot" cx="300" cy="208" r="3" />
                </g>
              </svg>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default TourismLocations;
