import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Chips,
  Grid,
  Heading,
  Paper,
  Text,
} from "@pillar-ui/core";
import { useLocale, useTranslations } from "next-intl";
import type { LocaleKey } from "@/types/localeProps.interface";
import "./services.scss";
import { ServiceCard } from "../../service-card";
import { Box } from "../../box";
import { SERVICE_TREE } from "@/constants/services/serviceTreeData";

const Services = () => {
  const locale = useLocale() as LocaleKey;
  const t = useTranslations("services.page");
  const trustCards = t.raw("trust.cards") as unknown as Array<{
    title: string;
    description: string;
  }>;
  const faqItems = t.raw("faq.items") as unknown as Array<{ question: string; answer: string }>;

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

        <Grid cols={{ default: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }} gap="4">
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

      <Paper
        as="section"
        flow="6"
        className="services-pricing__trust"
        aria-labelledby="trust-title"
      >
        <div>
          <Heading as="h2" size="6" id="trust-title">
            {t("trust.title")}
          </Heading>
          <Text as="p" size="4" color="b" low>
            {t("trust.subtitle")}
          </Text>
        </div>

        <Grid cols={{ default: "1fr", md: "repeat(3, 1fr)" }} gap="5">
          {trustCards.map((card) => (
            <Box key={card.title} {...card} />
          ))}
        </Grid>
      </Paper>

      <Paper as="section" flow="6" className="services-pricing__faq" aria-labelledby="faq-title">
        <div>
          <Chips color="b" variant="soft">
            {t("faq.kicker")}
          </Chips>
          <Heading as="h2" size="6" id="faq-title">
            {t("faq.title")}
          </Heading>
          <Text as="p" size="4" color="b" low>
            {t("faq.subtitle")}
          </Text>
        </div>

        <Accordion collapsible separate corner="4">
          {faqItems.map(({ answer, question }) => (
            <AccordionItem key={question} value={question}>
              <AccordionButton className="faq--button">{question}</AccordionButton>
              <AccordionPanel className="faq--answer">{answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Paper>
    </Paper>
  );
};

export default Services;
