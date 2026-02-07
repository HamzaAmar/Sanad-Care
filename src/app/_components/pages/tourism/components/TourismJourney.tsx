import { Heading, Text, Timeline, TimelineItem } from "@pillar-ui/core";
import { useTranslations } from "next-intl";

const TourismJourney = () => {
  const t = useTranslations("tourism.page.journey");

  // Create an array of indices based on the steps count
  const steps = [0, 1, 2, 3, 4];

  return (
    <section className="tourism-journey">
      <div className="container">
        <div className="journey-header">
          <Heading size="7" as="h2" className="section-heading">
            {t("title")}
          </Heading>
          <Text size="5" color="b" className="opacity-80">
            {t("subtitle")}
          </Text>
        </div>

        <div className="journey-container">
          {/* Vertical line for desktop */}
          <div className="timeline-line" />

          <Timeline>
            {steps.map((index) => (
              <TimelineItem content={index + 1} key={index}>
                <div className="step-content">
                  <div className="step-header">
                    <Heading size="4" as="h3" className="step-title">
                      {t(`steps.${index}.title`)}
                    </Heading>
                  </div>
                  <Text size="4" color="b" className="step-desc">
                    {t(`steps.${index}.description`)}
                  </Text>
                </div>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default TourismJourney;
