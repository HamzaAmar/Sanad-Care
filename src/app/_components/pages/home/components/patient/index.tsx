import { Button, Chips, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import {
  ArrowRight,
  HeartBeat,
  Lock,
  Shield,
  Stethoscope,
  Urgent,
  UserCheck,
} from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { Reveal } from "@/app/_components/reveal";
import { RevealImage } from "@/app/_components/reveal/image";
import { Box } from "@/app/_components/box";
import { Link } from "@/i18n/navigation";

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
      <Paper as="section" flow="8" className="section home-care-section home-care-section--patient">
        <Grid
          className="home-care-grid"
          cols={{ default: "1fr", md: "1.2fr 1fr" }}
          gap="6"
          items="center"
        >
          <Paper flow="5" className="home-care-copy">
            <div>
              <Chips color="p" size="4">
                {t("heading")}
              </Chips>
              <Heading as="h2" size="8" weight="5">
                {t("subheading")}
              </Heading>
            </div>
            <Text size="6" weight="3" color="b" low>
              {t("description")}
            </Text>
            <Button
              as={Link}
              href="/patient"
              size="4"
              icon={<ArrowRight width={16} />}
              iconPosition="end"
              className="home-care-cta"
            >
              {t("cta")}
            </Button>
          </Paper>

          <div className="home-care-media">
            <Paper className="home-care-media__frame" corner="5" border>
              <RevealImage
                src={PATIENT_IMAGE}
                alt={t("imageAlt")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Paper>
            <div className="home-care-badge">
              <span className="home-care-badge__icon" aria-hidden="true">
                <UserCheck width={18} strokeWidth={1.6} />
              </span>
              <span className="home-care-badge__text">{t("badge")}</span>
            </div>
          </div>
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
