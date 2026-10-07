import { Button, Chips, Heading, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/app/_components/reveal";

const TourismHero = () => {
  const t = useTranslations();
  const [titleLead, titleAccent] = t("tourism.page.hero.title")
    .split("|")
    .map((part) => part.trim());

  return (
    <section className="tourism-hero" aria-labelledby="tourism-hero-title">
      <div className="tourism-container tourism-hero__grid">
        <div className="tourism-hero__content">
          <Reveal index={0}>
            <Chips corner="full" color="p" variant="soft" size="3">
              {t("nav.tourism")}
            </Chips>
          </Reveal>

          <Reveal index={1}>
            <Heading
              as="h1"
              size="9"
              weight="6"
              className="tourism-hero__title"
              id="tourism-hero-title"
            >
              {titleLead}
              {titleAccent ? (
                <>
                  {" "}
                  <span className="tourism-hero__accent">{titleAccent}</span>
                </>
              ) : null}
            </Heading>
          </Reveal>

          <Reveal index={2}>
            <Text as="p" size="6" color="b" low className="tourism-hero__lead">
              {t("tourism.page.hero.subtitle")}
            </Text>
          </Reveal>

          <Reveal className="tourism-hero__actions" index={3}>
            <Button as={Link} href="/contact-us" size="5" color="p">
              {t("tourism.page.hero.cta")}
            </Button>
          </Reveal>
        </div>

        <Reveal variant="item" index={1}>
          <div className="tourism-hero__visual">
            <svg className="tourism-hero__svg" viewBox="0 0 420 300" aria-hidden="true">
              <path
                className="th-route th-route--base"
                d="M40 244C104 206 128 130 194 120c64-10 112 30 186-56"
              />
              <path
                className="th-route th-route--draw"
                pathLength={1}
                d="M40 244C104 206 128 130 194 120c64-10 112 30 186-56"
              />
              <circle className="th-pulse" cx="40" cy="244" r="10" />
              <g className="th-pin">
                <circle className="th-pin__ring" cx="40" cy="244" r="10" />
                <circle className="th-pin__dot" cx="40" cy="244" r="4" />
              </g>
              <g className="th-pin">
                <circle className="th-pin__ring" cx="194" cy="120" r="10" />
                <circle className="th-pin__dot" cx="194" cy="120" r="4" />
              </g>
              <g className="th-pin">
                <circle className="th-pin__ring" cx="380" cy="64" r="10" />
                <circle className="th-pin__dot" cx="380" cy="64" r="4" />
              </g>
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TourismHero;
