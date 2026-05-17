import { ServiceCard } from "@/app/_components/service-card";
import { Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { Clock, MessageCircle, Shield, Users } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";

const FamilySection = () => {
  const t = useTranslations("family");

  const FEATURES = [
    {
      slug: "peace-of-mind",
      icon: <Shield width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("features.peaceOfMind.title"),
      description: t("features.peaceOfMind.description"),
    },
    {
      slug: "stay-informed",
      icon: <MessageCircle width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("features.stayInformed.title"),
      description: t("features.stayInformed.description"),
    },
    {
      slug: "emotional-support",
      icon: <Users width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("features.emotionalSupport.title"),
      description: t("features.emotionalSupport.description"),
    },
    {
      slug: "time-for-what-matters",
      icon: <Clock width={32} stroke="var(--P9)" strokeWidth={1.5} />,
      title: t("features.timeForWhatMatters.title"),
      description: t("features.timeForWhatMatters.description"),
    },
  ];

  return (
    <Paper as="section" flow="5" className="family-section" p="6">
      <Grid cols={{ default: "1fr", md: "1.5fr 1fr" }} gap="6" items="center">
        <Flex direction="col" items="center" gap="8">
          <Heading as="h2" size="8">
            {t("heading")}
          </Heading>
          <Text width="60c" size="6" color="b" low>
            {t("description")}
          </Text>
          <Grid cols={{ default: "1fr", md: "1fr 1fr" }} gap="6" className="delivery-features">
            {FEATURES.map(({ slug, ...rest }) => (
              <ServiceCard key={slug} {...rest} />
            ))}
          </Grid>
        </Flex>
        <Paper className="medical-tourism-image" corner="4" border style={{ overflow: "hidden" }}>
          <img src="/family-2.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Paper>
      </Grid>
    </Paper>
  );
};

export default FamilySection;
