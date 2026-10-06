// app/[locale]/venipuncture/components/howItWorks.tsx
"use client";

import { useGSAP } from "@gsap/react";
import { Heading, Paper, Text } from "@pillar-ui/core";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { Box } from "@/app/_components/box";

const HowItWorksVenipuncture = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("venipuncture");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hiw-heading", {
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
        gsap.from(".hiw-step", {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".hiw-grid",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });
      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  const STEPS = [
    {
      slug: "step1",
      title: t("howItWorks.steps.step1.title"),
      description: t("howItWorks.steps.step1.description"),
    },
    {
      slug: "step2",
      title: t("howItWorks.steps.step2.title"),
      description: t("howItWorks.steps.step2.description"),
    },
    {
      slug: "step3",
      title: t("howItWorks.steps.step3.title"),
      description: t("howItWorks.steps.step3.description"),
    },
    {
      slug: "step4",
      title: t("howItWorks.steps.step4.title"),
      description: t("howItWorks.steps.step4.description"),
    },
  ];

  return (
    <Paper
      ref={sectionRef}
      as="section"
      flow="8"
      className="section"
      style={{ background: "var(--B1)" }}
    >
      <Heading as="h2" size="6" weight="5" align="center" className="hiw-heading">
        {t("howItWorks.heading")}
      </Heading>
      <Text size="3" color="b" low align="center" className="subheading">
        {t("howItWorks.description")}
      </Text>

      <div
        className="hiw-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {STEPS.map(({ slug, ...rest }, index) => (
          <Box
            key={slug}
            variant="colored"
            title={`0${index + 1}. ${rest.title}`}
            description={rest.description}
          />
        ))}
      </div>
    </Paper>
  );
};

export default HowItWorksVenipuncture;
