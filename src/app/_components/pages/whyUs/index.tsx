import { Chips, Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { CircleCheck, Clock, Globe, Heart, Shield, Users } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import "./why-us.scss"; // Assuming we'll add some custom styles
import { ServiceCard } from "../../service-card";

const WhatWeDid = [
  {
    icon: <Clock stroke="var(--P11)" strokeWidth={1.5} />,
    label: "Medication organization",
    description:
      "Ensuring medications are taken on time, in the correct dosage, with full adherence to medical prescriptions.",
  },
  {
    icon: <Heart stroke="var(--P11)" strokeWidth={1.5} />,
    label: "Nutritional quality",
    description:
      "Monitoring and supporting balanced nutrition adapted to the patient’s health condition and medical needs.",
  },
  {
    icon: <Globe stroke="var(--P11)" strokeWidth={1.5} />,
    label: "Vital signs monitoring",
    description:
      "Regular measurement and tracking of vital signs to detect changes early and prevent complications.",
  },
  {
    icon: <Users stroke="var(--P11)" strokeWidth={1.5} />,
    label: "Psychological support",
    description:
      "Providing emotional reassurance, reducing anxiety, and supporting the patient’s mental well-being.",
  },
  {
    icon: <Users stroke="var(--P11)" strokeWidth={1.5} />,
    label: "Clear, respectful communication",
    description:
      "Maintaining transparent, respectful communication with patients and families at every step of care.",
  },
  {
    icon: <Shield stroke="var(--P11)" strokeWidth={1.5} />,
    label: "Feeling safe at home",
    description:
      "Creating a secure, supervised home environment that promotes comfort, trust, and peace of mind.",
  },
];

const WhyUs = () => {
  const t = useTranslations();

  return (
    <Paper flow="8" className="section why-us-page">
      <section className="why-us-section section-exist">
        <Paper>
          <Grid gap="6" cols={{ default: "1fr", md: "1fr 1fr" }} items="center">
            <Paper flow="6">
              <div>
                <Chips size="4">{t("whyUs.page.story.subtitle")}</Chips>
                <Heading size="8" weight="8" className="section-title">
                  {t("whyUs.page.story.h2")}
                </Heading>
              </div>
              <Text size="7" weight="3" color="b" low className="section-desc">
                {t("whyUs.page.story.description")}
              </Text>
            </Paper>
            <div className="section-visual visual-exist" />
          </Grid>
        </Paper>
      </section>

      <section className="why-us-section section-patient">
        <Paper>
          <Grid gap="6" cols={{ default: "1fr", md: "1fr 1fr" }} items="center">
            <div className="section-visual visual-patient" />
            <Paper flow="6">
              <div>
                <Chips size="4">{t("whyUs.page.patient.subtitle")}</Chips>
                <Heading size="8" weight="8" className="section-title">
                  {t("whyUs.page.patient.h2")}
                </Heading>
              </div>
              <Text size="7" weight="3" color="b" low>
                {t("whyUs.page.patient.description")}
              </Text>
            </Paper>
          </Grid>
        </Paper>
      </section>

      <section className="why-us-section section-question text-center">
        <Paper>
          <Grid gap="6" cols={{ default: "1fr", md: "1fr 1fr" }} items="center">
            <Paper flow="6">
              <div>
                <Chips size="4">{t("whyUs.page.question.subtitle")}</Chips>
                <Heading size="9" weight="9" className="big-question">
                  {t("whyUs.page.question.h2")}
                </Heading>
              </div>
              <Text size="7" weight="3" color="b" low>
                {t("whyUs.page.question.description")}
              </Text>
            </Paper>
            <div className="section-visual visual-patient" />
          </Grid>
        </Paper>
      </section>

      <div className="why-us-section">
        <Paper flow="8">
          <div>
            <Chips size="4"> {t("whyUs.page.details.subtitle")}</Chips>
            <Heading size="8" weight="8">
              {t("whyUs.page.details.h2")}
            </Heading>
            <Text size="7" weight="3" color="b" low>
              {t("whyUs.page.details.description")}
            </Text>
          </div>
          <Grid gap="6" cols={{ default: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}>
            {WhatWeDid.map((item) => (
              <ServiceCard
                key={item.label}
                icon={item.icon}
                title={item.label}
                description={item.description}
              />
            ))}
          </Grid>
        </Paper>
      </div>

      <section className="why-us-section section-global">
        <Paper>
          <Grid gap="6" cols={{ default: "1fr", md: "1fr 1.5fr" }} items="center">
            <div className="section-visual visual-patient" />
            <Paper flow="4">
              <Paper flow="6">
                <div>
                  <Chips size="4">{t("whyUs.page.global.subtitle")}</Chips>
                  <Heading leading="1" size="8" weight="8">
                    {t("whyUs.page.global.h2")}
                  </Heading>
                </div>
                <Text size="7" weight="3" color="b" low>
                  {t("whyUs.page.global.description")}
                </Text>
              </Paper>
              <Paper flow="5" className="bg-surface-2 p-6 rounded-lg">
                <Flex gap="5">
                  {[0, 1, 2].map((i) => (
                    <Flex
                      key={i}
                      items="center"
                      p="2"
                      corner="3"
                      as={Paper}
                      background="B3"
                      gap="2"
                    >
                      <CircleCheck
                        stroke="var(--P11)"
                        strokeWidth={2}
                        width={20}
                        className="text-success"
                      />
                      <Text color="p" low size="4">
                        {t(`whyUs.page.global.list.${i}`)}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </Paper>
            </Paper>
          </Grid>
        </Paper>
      </section>

      <section className="why-us-section">
        <Paper flow="6">
          <div>
            <Chips size="4">{t("whyUs.page.measurement.subtitle")}</Chips>
            <Heading size="8" weight="8" className="text-center mb-6" color="b">
              {t("whyUs.page.measurement.h2")}
            </Heading>
          </div>
          <Grid gap="4" cols={{ default: "1fr", sm: "1fr 1fr" }}>
            {Array.from({ length: 11 }).map((_, i) => (
              <Paper key={i} background="B1" p="4" corner="3">
                <Text color="b" weight="5">
                  {t(`whyUs.page.measurement.list.${i}`)}
                </Text>
              </Paper>
            ))}
          </Grid>
        </Paper>
      </section>

      <section className="why-us-section section-visible">
        <Grid gap="6" cols={{ default: "1fr", md: "1fr 1fr" }} items="center">
          <div className="section-visual visual-patient" />
          <Paper flow="6">
            <div>
              <Chips size="4">{t("whyUs.page.visible.subtitle")}</Chips>
              <Heading size="8" weight="8">
                {t("whyUs.page.visible.h2")}
              </Heading>
            </div>
            <Text size="7" weight="3" color="b" low>
              {t("whyUs.page.visible.description")}
            </Text>
          </Paper>
        </Grid>
      </section>

      <section className="why-us-section section-families">
        <Paper>
          <Grid gap="6" cols={{ default: "1fr", md: "1fr 1fr" }} items="center">
            <Paper flow="6">
              <div>
                <Chips size="4">{t("whyUs.page.grow.subtitle")}</Chips>
                <Heading leading="1" size="8" weight="8">
                  {t("whyUs.page.grow.h2")}
                </Heading>
              </div>
              <Text size="7" weight="3" color="b" low>
                {t("whyUs.page.grow.description")}
              </Text>
            </Paper>
            <div className="section-visual visual-families" />
          </Grid>
        </Paper>
      </section>

      <section className="why-us-section section-promise text-center">
        <Paper flow="6">
          <Paper flow="6">
            <div>
              <Chips size="4">{t("whyUs.page.promise.subtitle")}</Chips>
              <Heading size="8" weight="8">
                {t("whyUs.page.promise.h2")}
              </Heading>
            </div>
            <Text size="7" weight="3" color="b" low>
              {t("whyUs.page.promise.description")}
            </Text>
          </Paper>

          <Grid gap="4" cols={{ default: "1fr", md: "1fr 1fr 1fr" }} className="mb-8">
            {[0, 1, 2].map((i) => (
              <Paper background="B1" as={Flex} gap="2" p="4" items="center" key={i}>
                <CircleCheck width={20} stroke="var(--P11)" strokeWidth={1.5} />
                <Text>{t(`whyUs.page.promise.list.${i}`)}</Text>
              </Paper>
            ))}
          </Grid>
        </Paper>
      </section>
    </Paper>
  );
};

export default WhyUs;
