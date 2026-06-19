// app/[locale]/venipuncture/components/gymPartnership.tsx
"use client";

import { useGSAP } from "@gsap/react";
import { Button, Chips, Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { Check, Star } from "@pillar-ui/icons";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { Link } from "@/i18n/navigation";
import { ServiceCard } from "@/app/_components/service-card";

const GymPartnershipSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("venipuncture");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.from(".gym-badge", {
          scale: 0.7,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 30%",
            toggleActions: "play none none reverse",
          },
        });
        gsap.from(".gym-content", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gym-content-wrapper",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });
      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  const PANELS = [
    {
      slug: "nfs",
      title: t("gym.panels.nfs.title"),
      description: t("gym.panels.nfs.desc"),
      freq: t("gym.panels.nfs.freq"),
    },
    {
      slug: "vitd",
      title: t("gym.panels.vitd.title"),
      description: t("gym.panels.vitd.desc"),
      freq: t("gym.panels.vitd.freq"),
    },
    {
      slug: "hormones",
      title: t("gym.panels.hormones.title"),
      description: t("gym.panels.hormones.desc"),
      freq: t("gym.panels.hormones.freq"),
    },
    {
      slug: "crp",
      title: t("gym.panels.crp.title"),
      description: t("gym.panels.crp.desc"),
      freq: t("gym.panels.crp.freq"),
    },
    {
      slug: "lipids",
      title: t("gym.panels.lipids.title"),
      description: t("gym.panels.lipids.desc"),
      freq: t("gym.panels.lipids.freq"),
    },
    {
      slug: "liver",
      title: t("gym.panels.liver.title"),
      description: t("gym.panels.liver.desc"),
      freq: t("gym.panels.liver.freq"),
    },
  ];

  const STEPS = [
    {
      slug: "show",
      icon: <Star width={20} strokeWidth="1.5" stroke="var(--P9)" />,
      title: t("gym.steps.show.title"),
      description: t("gym.steps.show.desc"),
    },
    {
      slug: "book",
      icon: <Check width={20} strokeWidth="1.5" stroke="var(--P9)" />,
      title: t("gym.steps.book.title"),
      description: t("gym.steps.book.desc"),
    },
    {
      slug: "save",
      icon: <Star width={20} strokeWidth="1.5" stroke="var(--P9)" />,
      title: t("gym.steps.save.title"),
      description: t("gym.steps.save.desc"),
    },
  ];

  return (
    <Paper
      ref={sectionRef}
      as="section"
      flow="9"
      className="section"
      style={{ background: "var(--B1)" }}
    >
      <Flex items="center" gap="2" direction="col" className="gym-content-wrapper">
        <Chips corner="2" color="su" size="3" variant="outline" className="gym-badge">
          {t("gym.badge")}
        </Chips>
        <Heading as="h2" size="6" weight="5" className="gym-content">
          {t("gym.heading")}
        </Heading>
        <Text size="3" color="b" low align="center" className="gym-content mx-w-75c">
          {t("gym.description")}
        </Text>

        <Flex gap="4" className="gym-content" wrap justify="center">
          <Chips corner="full" variant="soft" color="su" size="4">
            {t("gym.discountBadge")}
          </Chips>
        </Flex>
      </Flex>

      <Grid cols={{ default: "1fr", md: "1fr 1fr" }} gap="8" items="start">
        <Paper flow="5" className="gym-content">
          <Heading as="h3" size="5" weight="5">
            {t("gym.panelsHeading")}
          </Heading>
          <Text size="3" color="b" low>
            {t("gym.panelsSub")}
          </Text>
          <Grid cols={{ default: "1fr", sm: "1fr 1fr" }} gap="4" className="delivery-features">
            {PANELS.map(({ slug, ...rest }) => (
              <ServiceCard key={slug} {...rest} />
            ))}
          </Grid>
        </Paper>

        <Paper flow="5" className="gym-content">
          <Heading as="h3" size="5" weight="5">
            {t("gym.howItWorks")}
          </Heading>
          <Flex direction="col" gap="4">
            {STEPS.map(({ slug, ...rest }) => (
              <ServiceCard key={slug} {...rest} />
            ))}
          </Flex>
          <Button as={Link} href="/contact-us" size="5" color="su" className="nationwide-cta">
            {t("gym.cta")}
          </Button>
        </Paper>
      </Grid>
    </Paper>
  );
};

export default GymPartnershipSection;
