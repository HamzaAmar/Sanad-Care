// app/[locale]/venipuncture/components/whyUsVenipuncture.tsx
"use client";

import { useGSAP } from "@gsap/react";
import { Chips, Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { Clock, Home, Location, Shield, Star, User } from "@pillar-ui/icons";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { Box } from "@/app/_components/box";

const WhyUsVenipuncture = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("venipuncture");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.from(".why-us-badge", {
          scale: 0.7,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 30%",
            toggleActions: "play none none reverse",
          },
        });
        gsap.from(".why-us-heading", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 20%",
            toggleActions: "play none none reverse",
          },
        });
        gsap.from(".delivery-feature", {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".delivery-features",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });
      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  const FEATURES = [
    {
      slug: "certified",
      icon: <User width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("whyUs.features.certified.title"),
      description: t("whyUs.features.certified.description"),
    },
    {
      slug: "hours",
      icon: <Clock width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("whyUs.features.hours.title"),
      description: t("whyUs.features.hours.description"),
    },
    {
      slug: "multilingual",
      icon: <Location width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("whyUs.features.multilingual.title"),
      description: t("whyUs.features.multilingual.description"),
    },
    {
      slug: "hotel",
      icon: <Home width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("whyUs.features.hotel.title"),
      description: t("whyUs.features.hotel.description"),
    },
    {
      slug: "gym",
      icon: <Star width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("whyUs.features.gym.title"),
      description: t("whyUs.features.gym.description"),
    },
    {
      slug: "results",
      icon: <Shield width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("whyUs.features.results.title"),
      description: t("whyUs.features.results.description"),
    },
  ];

  return (
    <Paper ref={sectionRef} as="section" flow="9" className="section">
      <Flex items="center" gap="2" direction="col">
        <Chips corner="2" color="su" size="3" variant="outline" className="why-us-badge">
          {t("whyUs.badge")}
        </Chips>
        <Heading as="h2" size="6" weight="5" className="why-us-heading">
          {t("whyUs.heading")}
        </Heading>
        <Text size="3" color="b" low align="center" className="subheading">
          {t("whyUs.description")}
        </Text>
      </Flex>

      <Grid
        cols={{ default: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr", lg: "1fr 1fr 1fr" }}
        gap="6"
        className="delivery-features"
      >
        {FEATURES.map(({ slug, ...rest }) => (
          <Box key={slug} {...rest} />
        ))}
      </Grid>
    </Paper>
  );
};

export default WhyUsVenipuncture;
