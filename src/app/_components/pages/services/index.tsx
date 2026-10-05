import { Chips, Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { Clock, Route, Shield } from "@pillar-ui/icons";
import { useLocale, useTranslations } from "next-intl";
import type { ReactNode } from "react";
import type { LocaleKey } from "@/types/localeProps.interface";
import "./services.scss";
import { ServiceCard } from "../../service-card";
import { SERVICE_TREE, type ServiceTreeItem } from "@/constants/services/serviceTreeData";

type ProofKey = "nurses" | "availability" | "response";

// A rating item from the Google Business Profile is planned as a fourth entry;
// the strip is a wrapping list so it drops in without a layout change.
const PROOF_ITEMS: Array<{ key: ProofKey; icon: ReactNode }> = [
  { key: "nurses", icon: <Shield width={18} strokeWidth={1.7} /> },
  { key: "availability", icon: <Clock width={18} strokeWidth={1.7} /> },
  { key: "response", icon: <Route width={18} strokeWidth={1.7} /> },
];

const renderCards = (items: ServiceTreeItem[], locale: LocaleKey) =>
  items.map((item) => (
    <ServiceCard
      key={item.slug}
      title={item.title[locale] || item.title.en}
      description={item.description[locale] || item.description.en}
      shortTitle={item.shortTitle[locale] || item.shortTitle.en}
      highlights={item.highlights[locale] || item.highlights.en}
      hasMonthlyPlan={item.packs.length > 0}
      slug={item.slug}
    />
  ));

const Services = () => {
  const locale = useLocale() as LocaleKey;
  const t = useTranslations("services.page");

  const all = Object.values(SERVICE_TREE);
  const programs = all.filter((item) => item.category === "pillar" || item.category === "service");
  const conditions = all.filter((item) => item.category === "condition");

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

        <ul className="services-pricing__proof">
          {PROOF_ITEMS.map(({ key, icon }) => (
            <li className="services-pricing__proof-item" key={key}>
              <span className="services-pricing__proof-icon" aria-hidden="true">
                {icon}
              </span>
              {t(`proof.${key}`)}
            </li>
          ))}
        </ul>

        <Grid cols={{ default: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap="4">
          {renderCards(programs, locale)}
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

        <Grid cols={{ default: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap="4">
          {renderCards(conditions, locale)}
        </Grid>

        <Flex justify="center" className="services-pricing__note">
          <Text as="p" size="2" color="b" low>
            {t("subscriptionNote")}
          </Text>
        </Flex>
      </Paper>
    </Paper>
  );
};

export default Services;
