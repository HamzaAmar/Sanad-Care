import { Chips, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { useLocale, useTranslations } from "next-intl";
import type { LocaleKey } from "@/types/localeProps.interface";
import "./services.scss";
import { ServiceCard } from "../../service-card";
import { SERVICE_TREE } from "@/constants/services/serviceTreeData";

const Services = () => {
  const locale = useLocale() as LocaleKey;
  const t = useTranslations("services.page");

  return (
    <Paper as="section" flow="9" className="section services-pricing__shell">
      <Paper as="section" flow="6" className="services-pricing__programs">
        <div>
          <Chips color="b" variant="soft">
            {t("programs.badge")}
          </Chips>
          <Heading id="services-programs" as="h2" size="6">
            {t("programs.title")}
          </Heading>
          <Text as="p" size="4" color="b" low className="mt-1">
            {t("programs.description")}
          </Text>
        </div>

        <Grid cols={{ default: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }} gap="4">
          {Object.values(SERVICE_TREE)
            .filter((item) => item.category === "pillar" || item.category === "service")
            .map((item, i) => (
              <ServiceCard
                key={i}
                title={item.title[locale] || item.title.en}
                description={item.description[locale] || item.description.en}
                slug={item.slug}
              />
            ))}
        </Grid>
      </Paper>

      <Paper as="section" flow="6" className="services-pricing__conditions">
        <div>
          <Chips color="b" variant="soft">
            {t("conditions.badge")}
          </Chips>
          <Heading as="h2" size="6">
            {t("conditions.title")}
          </Heading>
          <Text as="p" size="4" color="b" low className="mt-1">
            {t("conditions.description")}
          </Text>
        </div>

        <Grid
          cols={{ default: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr", lg: "1fr 1fr 1fr 1fr" }}
          gap="4"
        >
          {Object.values(SERVICE_TREE)
            .filter((item) => item.category === "condition")
            .map((item, i) => (
              <ServiceCard
                key={i}
                title={item.title[locale] || item.title.en}
                description={item.description[locale] || item.description.en}
                slug={item.slug}
              />
            ))}
        </Grid>
      </Paper>
    </Paper>
  );
};

export default Services;
