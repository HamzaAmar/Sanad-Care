import { Chips, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { Clock, Community, MessageCircle, UserCheck, Users, Verified } from "@pillar-ui/icons";
import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/app/_components/reveal";
import { RevealImage } from "@/app/_components/reveal/image";
import { Box } from "@/app/_components/box";
import { LocaleKey } from "@/types/localeProps.interface";

const FAMILY_IMAGES: Record<LocaleKey, string> = {
  en: "/images/elder-care/elderly-care-marrakech-sanadcare.avif",
  fr: "/soins-personnes-agees-domicile-marrakech-sanadcare.avif",
  ar: "/%D8%B1%D8%B9%D8%A7%D9%8A%D8%A9-%D9%83%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%B3%D9%86-%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A%D8%A9-%D9%85%D8%B1%D8%A7%D9%83%D8%B4-%D8%B3%D9%86%D8%AF-%D9%83%D9%8A%D8%B1.avif",
};

const FamilySection = () => {
  const t = useTranslations("family");
  const locale = useLocale() as LocaleKey;

  const FEATURES = [
    {
      slug: "licensed-nurses",
      icon: <Verified width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("features.licensedNurses.title"),
      description: t("features.licensedNurses.description"),
    },
    {
      slug: "family-updates",
      icon: <MessageCircle width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("features.familyUpdates.title"),
      description: t("features.familyUpdates.description"),
    },
    {
      slug: "emergency-availability",
      icon: <Clock width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("features.emergencyAvailability.title"),
      description: t("features.emergencyAvailability.description"),
    },
    {
      slug: "cultural-respect",
      icon: <Community width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("features.culturalRespect.title"),
      description: t("features.culturalRespect.description"),
    },
    {
      slug: "personalized-care",
      icon: <UserCheck width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("features.personalizedCare.title"),
      description: t("features.personalizedCare.description"),
    },
    {
      slug: "nurse-choice",
      icon: <Users width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("features.nurseChoice.title"),
      description: t("features.nurseChoice.description"),
    },
  ];

  return (
    <Reveal>
      <Paper as="section" flow="8" className="section family-care-section">
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
              src={FAMILY_IMAGES[locale]}
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

export default FamilySection;
