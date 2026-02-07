import { Heading, Paper, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import { SERVICES } from "@/constants/services";
import ServiceCard from "../../card";

const Services = () => {
  const t = useTranslations();
  return (
    <Paper flow="7" className="section">
      <div>
        <Heading size="6">
          <Text as="div" transform="uppercase" color="p" weight="5" size="4" low className="gold-text">
            {t("services.heading")}
          </Text>
          <span>{t("services.subheading")}</span>
        </Heading>
      </div>
      <div className="services">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </Paper>
  );
};

export default Services;
