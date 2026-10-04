import { Chips, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { HeartBeat, Lock, Shield, Stethoscope, Urgent, UserCheck } from "@pillar-ui/icons";
import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/app/_components/reveal";
import { RevealImage } from "@/app/_components/reveal/image";
import { Box } from "@/app/_components/box";
import { LocaleKey } from "@/types/localeProps.interface";

const PATIENT_IMAGES: Record<LocaleKey, string> = {
  en: "/patient-centered-home-nursing-marrakech-sanadcare.avif",
  fr: "/soins-patient-domicile-marrakech-sanadcare.avif",
  ar: "/%D8%B1%D8%B9%D8%A7%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%B1%D9%8A%D8%B6-%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A%D8%A9-%D9%85%D8%B1%D8%A7%D9%83%D8%B4-%D8%B3%D9%86%D8%AF-%D9%83%D9%8A%D8%B1.avif",
};

const PatientSection = () => {
  const t = useTranslations("patient");
  const locale = useLocale() as LocaleKey;

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
        <Grid cols={{ default: "1fr", md: "1fr 1fr" }} gap="6" items="center">
          <Paper flow="5">
            <div>
              <Chips corner="2" color="su" size="3" variant="outline">
                {t("heading")}
              </Chips>
              <Heading as="h2" size="6" weight="6">
                {t("subheading")}
              </Heading>
            </div>
            <Text size="4" color="b" low>
              {t("description")}
            </Text>
          </Paper>
          <Paper
            corner="5"
            border
            style={{ height: "300px", background: "var(--B3)", overflow: "hidden" }}
          >
            <RevealImage
              src={PATIENT_IMAGES[locale]}
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
