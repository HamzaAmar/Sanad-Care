"use client";

import { ServiceCard } from "@/app/_components/service-card";
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
    <Paper as="section" flow="6" className="section doctor-section" p="6" corner="3" border>
      <Grid cols={{ default: "1fr", md: "1fr 1.5fr" }} gap="6" items="center">
        <Paper className="medical-tourism-image" corner="4" style={{ overflow: "hidden" }}>
          <img src="/doctor.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Paper>
        <Flex direction="col" items="center" gap="8">
          <Heading as="h2" size="8">
            {t("heading")}
          </Heading>
          <Text width="60c" size="6" color="b" low>
            {t("description")}
          </Text>
          <Grid cols={{ default: "1fr", md: "1fr 1fr" }} gap="6" className="delivery-features">
            {BENEFITS.map(({ slug, ...rest }) => (
              <ServiceCard key={slug} {...rest} />
            ))}
          </Grid>
        </Flex>
      </Grid>
    </Paper>
  );
};

export default DoctorSection;
