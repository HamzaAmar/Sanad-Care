import { Chips, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { HeartBeat, Lock, Shield, Stethoscope, Urgent, UserCheck } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { Reveal } from "@/app/_components/reveal";
import { RevealImage } from "@/app/_components/reveal/image";
import { Box } from "@/app/_components/box";

const PATIENT_IMAGE = "/images/nurse-at-home/nurse-at-home-marrakech-sanadcare.avif";

const PatientSection = () => {
  const t = useTranslations("patient");

  const FEATURES = [
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
    {
      slug: "doctor-coordination",
      icon: <Stethoscope width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("benefits.doctorCoordination.title"),
      description: t("benefits.doctorCoordination.description"),
    },
    {
      slug: "emergency-support",
      icon: <Urgent width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("benefits.emergencySupport.title"),
      description: t("benefits.emergencySupport.description"),
    },
  ];

  return (
    <Reveal>
      <Paper as="section" flow="8" className="section patient-care-section">
        <Grid cols={{ default: "1fr", md: "1.2fr 1fr" }} gap="6" items="center">
          <Paper flow="5">
            <div>
              <Chips corner="2" color="su" size="3" variant="outline">
                {t("heading")}
              </Chips>
              <Heading as="h2" size="6" weight="6">
                {t("subheading")}
              </Heading>
            </div>
            <Text size="6" weight="3" color="b" low>
              {t("description")}
            </Text>
          </Paper>
          <Paper
            corner="5"
            border
            style={{ background: "var(--B3)", overflow: "hidden", maxHeight: "530px" }}
          >
            <RevealImage
              src={PATIENT_IMAGE}
              alt={t("imageAlt")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Paper>
        </Grid>

        <Grid
          cols={{ default: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }}
          gap="4"
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

export default PatientSection;
