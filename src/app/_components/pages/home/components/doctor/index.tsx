"use client";

import { Box } from "@/app/_components/box";
import { Reveal } from "@/app/_components/reveal";
import { RevealImage } from "@/app/_components/reveal/image";
import { Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { Car, Clock, Home, Pill } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";

const DoctorSection = () => {
  const t = useTranslations("doctor");

  const BENEFITS = [
    {
      slug: "no-transportation-burden",
      icon: <Car width={32} strokeWidth={1.5} stroke="var(--P9)" />,
      title: t("benefits.noTransportation.title"),
      description: t("benefits.noTransportation.description"),
    },
    {
      slug: "time-savings",
      icon: <Clock width={32} strokeWidth={1.5} stroke="var(--P9)" />,
      title: t("benefits.timeSavings.title"),
      description: t("benefits.timeSavings.description"),
    },
    {
      slug: "pain-management",
      icon: <Pill width={32} strokeWidth={1.5} stroke="var(--P9)" />,
      title: t("benefits.painManagement.title"),
      description: t("benefits.painManagement.description"),
    },
    {
      slug: "familiar-environment",
      icon: <Home width={32} strokeWidth={1.5} stroke="var(--P9)" />,
      title: t("benefits.familiarEnvironment.title"),
      description: t("benefits.familiarEnvironment.description"),
    },
  ];

  return (
    <Reveal>
      <Paper as="section" flow="6" className="section doctor-section" p="6" corner="3" border>
        <Grid cols={{ default: "1fr", md: "1fr 1.5fr" }} gap="6" items="center">
          <Paper
            className="medical-tourism-image"
            corner="4"
            style={{ overflow: "hidden", aspectRatio: "1254 / 1094" }}
          >
            <RevealImage
              src="/doctor.png"
              alt="Illustration of a Sanad Care doctor carrying a medical bag on a home visit"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Paper>
          <Flex direction="col" items="center" gap="8">
            <Heading as="h2" size="6">
              {t("heading")}
            </Heading>
            <Text width="60c" size="4" color="b" low>
              {t("description")}
            </Text>
            <Grid cols={{ default: "1fr", md: "1fr 1fr" }} gap="6" className="delivery-features">
              {BENEFITS.map(({ slug, ...rest }, i) => (
                <Reveal key={slug} variant="item" index={i}>
                  <Box {...rest} />
                </Reveal>
              ))}
            </Grid>
          </Flex>
        </Grid>
      </Paper>
    </Reveal>
  );
};

export default DoctorSection;
