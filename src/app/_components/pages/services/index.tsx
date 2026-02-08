import { Heading, Paper, Text } from "@pillar-ui/core";
import { useLocale, useTranslations } from "next-intl";
import { getAllServices } from "@/api/services";
import type { LocaleKey } from "@/types/localeProps.interface";
import ServiceCard from "../../card";

const Services = () => {
  const t = useTranslations();
  const locale = useLocale() as LocaleKey;
  const services = getAllServices(locale);
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
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </Paper>
  );
};

export default Services;
