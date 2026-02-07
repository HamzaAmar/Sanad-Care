"use client";

import { useGSAP } from "@gsap/react";
import { Chips, Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { Clock, Location, Shield, User } from "@pillar-ui/icons";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { ServiceCard } from "@/app/_components/service-card";

const WhyUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Animate heading
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

        // Animate subheading
        gsap.from(".why-us-subheading", {
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

        // Animate feature cards
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

        // Animate CTA
        gsap.from(".nationwide-cta", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".nationwide-cta",
            start: "top 90%",
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
      slug: "competence",
      icon: <User width={32} />,
      title: t("whyUs.features.competence.title"),
      description: t("whyUs.features.competence.description"),
    },
    {
      slug: "availability",
      icon: <Clock width={32} />,
      title: t("whyUs.features.availability.title"),
      description: t("whyUs.features.availability.description"),
    },
    {
      slug: "trust",
      icon: <Shield width={32} />,
      title: t("whyUs.features.trust.title"),
      description: t("whyUs.features.trust.description"),
    },
    {
      slug: "multilingual",
      icon: <Location width={32} />, // Using Location/Globe as placeholder
      title: t("whyUs.features.multilingual.title"),
      description: t("whyUs.features.multilingual.description"),
    },
  ];

  return (
    <Paper ref={sectionRef} as="section" flow="9" className="section">
      <Flex items="center" gap="2" direction="col">
        <Chips corner="2" color="b" size="3" variant="outline" className="why-us-badge">
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
        cols={{ default: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr", lg: "1fr 1fr 1fr 1fr" }}
        gap="6"
        className="delivery-features"
      >
        {FEATURES.map(({ slug, ...rest }) => (
          <ServiceCard key={slug} {...rest} />
        ))}
      </Grid>
    </Paper>
  );
};

export default WhyUs;
