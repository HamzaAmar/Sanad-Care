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
import { SERVICE_TREE } from "@/constants/services/serviceTreeData";
import { Link } from "@/i18n/navigation";

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

      {/* 2. Specialized Care & Condition Support Tree */}
      <Paper as="section" flow="6" className="services-pricing__programs">
        <div>
          <Chips color="b" variant="soft">
            {locale === "fr"
              ? "Programmes de Soins"
              : locale === "ar"
                ? "برامج الرعاية"
                : "Care Programs"}
          </Chips>
          <Heading as="h2" size="6" mt="2">
            {locale === "fr"
              ? "Nos Programmes de Soins Spécialisés"
              : locale === "ar"
                ? "برامج الرعاية المنزلية المتخصصة لدينا"
                : "Our Specialized Care Programs"}
          </Heading>
          <Text as="p" size="4" color="b" low className="mt-1">
            {locale === "fr"
              ? "Des solutions de suivi clinique et d'accompagnement à domicile conçues pour la convalescence et le confort à Marrakech."
              : locale === "ar"
                ? "حلول رعاية ومتابعة طبية منزلية مصممة للتعافي والراحة في مراكش."
                : "Clinical follow-up and home assistance solutions designed for recovery and comfort in Marrakech."}
          </Text>
        </div>

        <Grid cols={{ default: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }} gap="4">
          {Object.values(SERVICE_TREE)
            .filter((item) => item.category === "pillar" || item.category === "service")
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
                  {locale === "fr"
                    ? "Découvrir le programme"
                    : locale === "ar"
                      ? "اكتشف البرنامج"
                      : "Explore Program"}
                </Button>
              </Paper>
            ))}
        </Grid>
      </Paper>

      <Paper as="section" flow="6" className="services-pricing__conditions">
        <div>
          <Chips color="b" variant="soft">
            {locale === "fr"
              ? "Accompagnement Pathologies"
              : locale === "ar"
                ? "رعاية الحالات الطبية"
                : "Condition Support"}
          </Chips>
          <Heading as="h2" size="6" mt="2">
            {locale === "fr"
              ? "Soutien et Suivi pour Conditions Médicales"
              : locale === "ar"
                ? "رعاية ودعم الحالات الطبية المزمنة"
                : "Medical Condition Care & Support"}
          </Heading>
          <Text as="p" size="4" color="b" low className="mt-1">
            {locale === "fr"
              ? "Une surveillance et des soins infirmiers adaptés aux personnes souffrant de maladies chroniques."
              : locale === "ar"
                ? "مراقبة ورعاية تمريضية مخصصة للمرضى الذين يعانون من حالات صحية مزمنة."
                : "Dedicated nursing care and monitoring tailored for patients managing chronic or acute medical conditions."}
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
                  {locale === "fr"
                    ? "Découvrir le programme"
                    : locale === "ar"
                      ? "اكتشف البرنامج"
                      : "Explore Program"}
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
