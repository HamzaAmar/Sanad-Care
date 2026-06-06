import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Chips,
  Flex,
  Grid,
  Heading,
  Paper,
  Text,
  Badge,
  Button,
} from "@pillar-ui/core";
import { Check, ArrowRight } from "@pillar-ui/icons";
import { useLocale, useTranslations } from "next-intl";
import type { LocaleKey } from "@/types/localeProps.interface";
import "./services.scss";
import { Prestation } from "./service.type";
import { prestationsInfirmieres } from "./service.data";
import { ServiceCard } from "../../service-card";
import { SERVICE_TREE } from "@/constants/services/serviceTreeData";
import { Link } from "@/i18n/navigation";

const PriceItem = ({ item, locale }: { item: Prestation; locale: LocaleKey }) => {
  const t = useTranslations("services.page");

  return (
    <Paper
      background="B2"
      as="article"
      p="2"
      padding="5"
      border
      corner="4"
      className="presentation-price-item"
    >
      <Grid
        cols={{ default: "1fr", md: "2fr 3fr 1fr" }}
        className="price-item"
        gap="4"
        items="center"
      >
        <Heading as="h3" size="4" weight="5">
          {item.title[locale]}
        </Heading>

        <Paper as="ul" flow="2">
          {item.inclus[locale].map((feature, index) => (
            <Flex as="li" gap="2" key={index}>
              <Badge size="1" variant="soft" type="icon" icon={<Check strokeWidth={1.5} />} />
              <Text size="3" color="b" low>
                {feature}
              </Text>
            </Flex>
          ))}
        </Paper>

        <Flex justify="center" items="center" direction="col">
          <div>
            <Chips transform="lowercase" variant="shadow" color="p">
              {t("pricing.startingFrom")}
            </Chips>
            {/* <Text size="3" weight="3">
              A partir de
            </Text> */}
            <Flex gap="2" items="center">
              <Text size="5" weight="5">
                {item.price}.00
              </Text>
              <Text size="5" weight="5" color="p" low>
                MAD
              </Text>
            </Flex>
          </div>
        </Flex>
      </Grid>
    </Paper>
  );
};

const Services = () => {
  const locale = useLocale() as LocaleKey;
  const t = useTranslations("services.page");
  const trustIndicators = t.raw("trustIndicators") as unknown as string[];
  const trustCards = t.raw("trust.cards") as unknown as Array<{
    title: string;
    description: string;
  }>;
  const faqItems = t.raw("faq.items") as unknown as Array<{ question: string; answer: string }>;

  return (
    <Paper as="section" flow="9" className="section services-pricing__shell">
      <header className="services-pricing__hero">
        <div className="services-pricing__eyebrow">
          <span className="services-pricing__badge">{t("badge")}</span>
        </div>
      </header>

      <Flex justify="center" gap="3" aria-label="trust indicators">
        {trustIndicators.map((item, i) => (
          <Chips color="b" key={i} variant="soft">
            <Check strokeWidth={2} />
            {item}
          </Chips>
        ))}
      </Flex>

      <Paper as="section" flow="2">
        <Flex items="center" gap="2">
          <Badge type="dot" translate="no" />
          <Text size="2">{t("priceNote")}</Text>
        </Flex>

        <Paper flow="4">
          {prestationsInfirmieres.map((item) => {
            return <PriceItem item={item} locale={locale} />;
          })}
        </Paper>
      </Paper>

      {/* 2. Specialized Care & Condition Support Tree */}
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
                description={item.subtitle[locale] || item.subtitle.en}
              >
                <Button
                  as={Link}
                  href={`/services/${item.slug}`}
                  variant="text"
                  icon={<ArrowRight />}
                  iconPosition="end"
                  size="2"
                >
                  {t("programs.button")}
                </Button>
              </ServiceCard>
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
            .map((item) => (
              <Paper
                key={item.slug}
                as="article"
                border
                corner="3"
                p="5"
                flow="3"
                className="presentation-price-item"
              >
                <Heading as="h3" size="4" weight="6">
                  {item.title[locale] || item.title.en}
                </Heading>
                <Text as="p" size="2" color="b" low leading="3">
                  {item.subtitle[locale] || item.subtitle.en}
                </Text>
                <Button
                  as={Link}
                  href={`/services/${item.slug}`}
                  variant="text"
                  icon={<ArrowRight />}
                  iconPosition="end"
                  size="2"
                >
                  {t("conditions.button")}
                </Button>
              </Paper>
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
            <ServiceCard key={card.title} {...card} />
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
