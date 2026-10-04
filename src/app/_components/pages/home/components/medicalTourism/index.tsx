import { Chips, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { Ambulance, Discount, Globe, Location, Plane } from "@pillar-ui/icons";
import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/app/_components/reveal";
import { RevealImage } from "@/app/_components/reveal/image";
import { Box } from "@/app/_components/box";
import { LocaleKey } from "@/types/localeProps.interface";

const TOURISM_IMAGES: Record<LocaleKey, string> = {
  en: "/home-nursing-service-marrakech-sanadcare.avif",
  fr: "/infirmiere-soins-domicile-marrakech-sanadcare.avif",
  ar: "/%D8%AA%D9%85%D8%B1%D9%8A%D8%B6-%D9%85%D9%86%D8%B2%D9%84%D9%8A-%D9%85%D8%B1%D8%A7%D9%83%D8%B4-%D8%B3%D9%86%D8%AF-%D9%83%D9%8A%D8%B1.avif",
};

const MedicalTourism = () => {
  const t = useTranslations("tourism");
  const locale = useLocale() as LocaleKey;

  const FEATURES = [
    {
      slug: "urgent-travelers",
      icon: <Ambulance width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("features.urgentTravelers.title"),
      description: t("features.urgentTravelers.description"),
    },
    {
      slug: "medical-travelers",
      icon: <Plane width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("features.medicalTravelers.title"),
      description: t("features.medicalTravelers.description"),
    },
    {
      slug: "multilingual",
      icon: <Globe width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("features.multilingual.title"),
      description: t("features.multilingual.description"),
    },
    {
      slug: "exceptional-value",
      icon: <Discount width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("features.value.title"),
      description: t("features.value.description"),
    },
    {
      slug: "local-expertise",
      icon: <Location width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("features.localExpertise.title"),
      description: t("features.localExpertise.description"),
    },
  ];

  return (
    <Reveal>
      <Paper as="section" flow="8" className="section medical-tourism-container">
        <Grid cols={{ default: "1fr", md: "1.2fr 1fr" }} gap="6" items="center">
          <Paper flow="5">
            <div>
              <Chips corner="2" color="p" size="3" variant="outline">
                {t("heading")}
              </Chips>
              <Heading as="h2" size="6" weight="6">
                {t("subheading")}
              </Heading>
            </div>
            <Text size="6" weight="3" color="b" low>
              {t("description")}
            </Text>
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
          <Paper
            className="medical-tourism-image"
            corner="5"
            border
            style={{ background: "var(--B3)", overflow: "hidden", maxHeight: "530px" }}
          >
            <RevealImage
              src={TOURISM_IMAGES[locale]}
              alt={t("imageAlt")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Paper>
        </Grid>
      </Paper>
    </Reveal>
  );
};

export default MedicalTourism;
