"use client";

import { Chips, Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { Clock, Location, Shield, User } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { Box } from "@/app/_components/box";
import { Reveal } from "@/app/_components/reveal";

const WhyUs = () => {
  const t = useTranslations();

  const FEATURES = [
    {
      slug: "competence",
      icon: <User width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("whyUs.features.competence.title"),
      description: t("whyUs.features.competence.description"),
    },
    {
      slug: "availability",
      icon: <Clock width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("whyUs.features.availability.title"),
      description: t("whyUs.features.availability.description"),
    },
    {
      slug: "trust",
      icon: <Shield width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("whyUs.features.trust.title"),
      description: t("whyUs.features.trust.description"),
    },
    {
      slug: "multilingual",
      icon: <Location width={32} stroke="var(--P9)" strokeWidth={1.5} />, // Using Location/Globe as placeholder
      title: t("whyUs.features.multilingual.title"),
      description: t("whyUs.features.multilingual.description"),
    },
  ];

  return (
    <Reveal>
      <Paper as="section" flow="9" className="section">
        <Flex items="center" gap="2" direction="col">
          <Chips corner="2" color="b" size="3" variant="outline" className="why-us-badge">
            {t("whyUs.badge")}
          </Chips>
          <Heading as="h2" size="6" weight="5" className="why-us-heading">
            {t("whyUs.heading")}
          </Heading>
          <Text size="4" color="b" low align="center" className="subheading">
            {t("whyUs.description")}
          </Text>
        </Flex>

        <Grid
          cols={{ default: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr", lg: "1fr 1fr 1fr 1fr" }}
          gap="6"
          className="delivery-features"
        >
          {FEATURES.map(({ slug, ...rest }, i) => (
            <Reveal key={slug} variant="item" index={i}>
              <Box {...rest} />
            </Reveal>
          ))}
        </Grid>
      </Paper>
    </Reveal>
  );
};

export default WhyUs;
