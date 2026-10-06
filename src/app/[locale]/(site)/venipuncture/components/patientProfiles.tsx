// app/[locale]/venipuncture/components/patientProfiles.tsx
"use client";

import { useGSAP } from "@gsap/react";
import { Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { Heart, Home, Location, Star, User } from "@pillar-ui/icons";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { Box } from "@/app/_components/box";

const PatientProfilesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("venipuncture");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.from(".patient-heading", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 20%",
            toggleActions: "play none none reverse",
          },
        });
        gsap.from(".patient-card", {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".patient-grid",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });
      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  const PROFILES = [
    {
      slug: "seniors",
      icon: <Home width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("profiles.seniors.title"),
      description: t("profiles.seniors.description"),
    },
    {
      slug: "pregnant",
      icon: <Heart width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("profiles.pregnant.title"),
      description: t("profiles.pregnant.description"),
    },
    {
      slug: "athletes",
      icon: <Star width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("profiles.athletes.title"),
      description: t("profiles.athletes.description"),
    },
    {
      slug: "tourists",
      icon: <Location width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("profiles.tourists.title"),
      description: t("profiles.tourists.description"),
    },
    {
      slug: "busy",
      icon: <User width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("profiles.busy.title"),
      description: t("profiles.busy.description"),
    },
  ];

  return (
    <Paper ref={sectionRef} as="section" flow="9" className="section">
      <Flex items="center" gap="2" direction="col">
        <Heading as="h2" size="6" weight="5" className="patient-heading">
          {t("profiles.heading")}
        </Heading>
        <Text size="3" color="b" low align="center" className="subheading">
          {t("profiles.description")}
        </Text>
      </Flex>

      <Grid
        cols={{ default: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr", lg: "1fr 1fr 1fr 1fr 1fr" }}
        gap="6"
        className="patient-grid"
      >
        {PROFILES.map(({ slug, ...rest }) => (
          <Box key={slug} {...rest} />
        ))}
      </Grid>
    </Paper>
  );
};

export default PatientProfilesSection;
