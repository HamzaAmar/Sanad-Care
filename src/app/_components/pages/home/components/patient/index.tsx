import { ServiceCard } from "@/app/_components/service-card";
import { Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { HeartBeat, Lock, Shield, UserCheck } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";

const PatientSection = () => {
  const t = useTranslations("patient");

  const SECURITY_BENEFITS = [
    {
      slug: "strict-hygiene",
      icon: <Shield width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("benefits.strictHygiene.title"),
      description: t("benefits.strictHygiene.description"),
    },
    {
      slug: "personalized-care",
      icon: <UserCheck width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("benefits.personalizedCare.title"),
      description: t("benefits.personalizedCare.description"),
    },
    {
      slug: "maximum-comfort",
      icon: <HeartBeat width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("benefits.maximumComfort.title"),
      description: t("benefits.maximumComfort.description"),
    },
    {
      slug: "privacy-confidentiality",
      icon: <Lock width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("benefits.privacyConfidentiality.title"),
      description: t("benefits.privacyConfidentiality.description"),
    },
  ];

  return (
    <Paper
      as="section"
      flow="5"
      className="patient-section"
      p="6"
      style={{ background: "var(--B1)" }}
    >
      <Grid cols={{ default: "1fr", md: "1fr 1.5fr" }} gap="6" items="center">
        <Paper className="medical-tourism-image" corner="4" style={{ overflow: "hidden" }}>
          <img
            src="/patient-safty.png"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Paper>
        <Flex direction="col" items="center" gap="8">
          <Heading as="h2" size="8">
            {t("heading")}
          </Heading>
          <Text width="60c" size="6" color="b" low>
            {t("description")}
          </Text>
          <Grid cols={{ default: "1fr", md: "1fr 1fr" }} gap="6" className="delivery-features">
            {SECURITY_BENEFITS.map(({ slug, ...rest }) => (
              <ServiceCard key={slug} {...rest} />
            ))}
          </Grid>
        </Flex>
      </Grid>
    </Paper>
  );
};

export default PatientSection;
