// app/[locale]/venipuncture/components/pricingSection.tsx
"use client";

import { useGSAP } from "@gsap/react";
import { Button, Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { Check } from "@pillar-ui/icons";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { Link } from "@/i18n/navigation";

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("venipuncture");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.from(".pricing-heading", {
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
        gsap.from(".pricing-card", {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });
      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  const PRICES = [
    {
      service: t("pricing.services.simple"),
      standard: "250 MAD",
      gym: "200 MAD",
      tourist: "250 MAD",
    },
    {
      service: t("pricing.services.complete"),
      standard: "400 MAD",
      gym: "320 MAD",
      tourist: "400 MAD",
    },
    {
      service: t("pricing.services.sport"),
      standard: "600 MAD",
      gym: "480 MAD",
      tourist: "600 MAD",
    },
    {
      service: t("pricing.services.prenatal"),
      standard: "350 MAD",
      gym: "280 MAD",
      tourist: "350 MAD",
    },
  ];

  return (
    <Paper ref={sectionRef} as="section" flow="8" className="section">
      <Flex items="center" gap="2" direction="col">
        <Heading as="h2" size="6" weight="5" className="pricing-heading">
          {t("pricing.heading")}
        </Heading>
        <Text size="3" color="b" low align="center">
          {t("pricing.description")}
        </Text>
      </Flex>

      <Grid cols={{ default: "1fr", md: "1fr 1fr" }} gap="6" className="pricing-grid">
        <Paper flow="4" p="5" corner="3" border className="pricing-card">
          <Heading as="h3" size="5">
            {t("pricing.tableHeading")}
          </Heading>
          <Flex direction="col" gap="3">
            {PRICES.map((item, i) => (
              <Flex
                key={i}
                justify="between"
                items="center"
                as={Paper}
                p="3"
                corner="2"
                style={{ background: "var(--B2)" }}
              >
                <Text weight="5">{item.service}</Text>
                <Flex gap="2" items="end">
                  <Text size="4" color="p" low>
                    {item.gym}
                  </Text>
                  <Text size="2" color="b" low decoration="through">
                    {item.standard}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
          <Text size="2" color="b" low>
            {t("pricing.note")}
          </Text>
        </Paper>

        <Paper
          flow="4"
          p="5"
          corner="3"
          border
          className="pricing-card"
          style={{ background: "var(--P2)" }}
        >
          <Heading as="h3" size="5" color="p">
            {t("pricing.includesHeading")}
          </Heading>
          <Flex direction="col" gap="3">
            {[
              "pricing.includes.travel",
              "pricing.includes.equipment",
              "pricing.includes.results",
              "pricing.includes.languages",
              "pricing.includes.hotel",
            ].map((key) => (
              <Flex key={key} gap="2" items="center">
                <Check width={20} stroke="var(--P9)" />
                <Text size="3">{t(key)}</Text>
              </Flex>
            ))}
          </Flex>
          <Button as={Link} href="/contact-us" size="5" color="p" className="nationwide-cta">
            {t("pricing.cta")}
          </Button>
        </Paper>
      </Grid>

      <Text size="2" color="b" low align="center">
        {t("pricing.disclaimer")}
      </Text>
    </Paper>
  );
};

export default PricingSection;
