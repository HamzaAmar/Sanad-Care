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
} from "@pillar-ui/core";
import { Check } from "@pillar-ui/icons";
import { useLocale } from "next-intl";
import type { LocaleKey } from "@/types/localeProps.interface";
import "./services.scss";
import { Prestation } from "./service.type";
import {
  contentByLocale,
  faqByLocale,
  prestationsInfirmieres,
  trustCardsByLocale,
} from "./service.data";
import { ServiceCard } from "../../service-card";

const PriceItem = ({ item, locale }: { item: Prestation; locale: LocaleKey }) => {
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
              A partir de
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
  const content = contentByLocale[locale] ?? contentByLocale.en;
  const trustCards = trustCardsByLocale[locale] ?? trustCardsByLocale.en;
  const faqItems = faqByLocale[locale] ?? faqByLocale.en;

  return (
    <Paper as="section" flow="9" className="section services-pricing__shell">
      <header className="services-pricing__hero">
        <div className="services-pricing__eyebrow">
          <span className="services-pricing__badge">{content.badge}</span>
        </div>
      </header>

      <Flex justify="center" gap="3" aria-label="trust indicators">
        {content.trustIndicators.map((item) => (
          <Chips color="b" variant="soft">
            <Check strokeWidth={2} />
            {item}
          </Chips>
        ))}
      </Flex>

      <Paper as="section" flow="2">
        <Flex items="center" gap="2">
          <Badge type="dot" translate="no" />
          <Text size="2">
            The price of the service is not fixed, it depends on the amount of the time we will
            spend with you.
          </Text>
        </Flex>

        <Paper flow="4">
          {prestationsInfirmieres.map((item) => {
            return <PriceItem item={item} locale={locale} />;
          })}
        </Paper>
      </Paper>

      <Paper
        as="section"
        flow="6"
        className="services-pricing__trust"
        aria-labelledby="trust-title"
      >
        <div>
          <Heading as="h2" size="6" id="trust-title">
            {content.trustTitle}
          </Heading>
          <Text as="p" size="4" color="b" low>
            {content.trustSubtitle}
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
            {content.faqKicker}
          </Chips>
          <Heading as="h2" size="6" id="faq-title">
            {content.faqTitle}
          </Heading>
          <Text as="p" size="4" color="b" low>
            {content.faqSubtitle}
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
