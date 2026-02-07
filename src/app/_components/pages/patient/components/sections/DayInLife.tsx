import { Grid } from "@pillar-ui/core";
import { Moon, Star, Sun, Sunrise } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { ServiceCard } from "@/app/_components/service-card";
import AnimatedSection from "../AnimatedSection";

const DayInLife = () => {
  const t = useTranslations("patient.page.dayInLife");
  const ROUTINES = [
    {
      id: 1,
      icon: <Sunrise width={24} key="1" />,
      title: t(`periods.morning.title`),
      description: t(`periods.morning.description`),
    },
    {
      id: 2,
      icon: <Sun width={24} key="2" />,
      title: t(`periods.afternoon.title`),
      description: t(`periods.afternoon.description`),
    },
    {
      id: 3,
      icon: <Moon width={24} key="3" />,
      title: t(`periods.evening.title`),
      description: t(`periods.evening.description`),
    },
    {
      id: 4,
      icon: <Star width={24} key="4" />,
      title: t(`periods.night.title`),
      description: t(`periods.night.description`),
    },
  ];

  return (
    <AnimatedSection title={t("title")}>
      <Grid cols={{ default: "1fr", md: "1fr 1fr" }} gap="4" className="space-y-8 relative">
        {ROUTINES.map(({ title, description, icon }) => (
          <ServiceCard key={title} icon={icon} title={title} description={description} />
        ))}
      </Grid>
    </AnimatedSection>
  );
};

export default DayInLife;
