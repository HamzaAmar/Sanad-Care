import { Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import {
  Check,
  Location,
  User,
} from "@pillar-ui/icons";
import { useLocale } from "next-intl";
import { PERSONAL_INFO } from "@/constants/personalInfo";
import type { LocaleKey } from "@/types/localeProps.interface";
import "./services.scss";
import { Plan, ServiceLocaleContent } from "./service.type";
import { contentByLocale, faqByLocale, plansByLocale, trustCardsByLocale } from "./service.data";
import { ServiceCard } from "../../service-card";


const PricingCard = ({ plan, content }: { plan: Plan; content: ServiceLocaleContent }) => {

return(     <article
              key={plan.name}
              className={`pricing-card${plan.featured ? " pricing-card--featured" : ""}`}
            >
              {plan.featured ? (
                <span className="pricing-card__popular">{content.popularLabel}</span>
              ) : null}

              <div className="pricing-card__icon">{plan.icon}</div>
              <div className="pricing-card__content">
                <Text as="p" className="pricing-card__name">
                  {plan.name}
                </Text>
                <Text as="p" className="pricing-card__tagline" color="b" low>
                  {plan.tagline}
                </Text>
              </div>

              <div className="pricing-card__price-wrap">
                <div className="pricing-card__price">{plan.price}</div>
                <span className="pricing-card__period">{content.monthLabel}</span>
              </div>

              <div className="pricing-card__divider" />

              <ul className="pricing-card__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="pricing-card__check">
                      <Check width={14} strokeWidth={2.3} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pricing-card__actions">
                <a
                  className={`pricing-card__cta${plan.featured ? " pricing-card__cta--featured" : ""}`}
                  href={plan.featured ? PERSONAL_INFO.contact.whatsapp : PERSONAL_INFO.contact.phone}
                >
                  <span>{plan.featured ? content.ctaPrimary : content.ctaSecondary}</span>
                </a>
                <p className="pricing-card__note">
                  <strong>{content.trustNoteLabel}</strong> {plan.trustNote}
                </p>
              </div>
            </article>)
}

const Services = () => {
  const locale = useLocale() as LocaleKey;
  const content = contentByLocale[locale] ?? contentByLocale.en;
  const plans = plansByLocale[locale] ?? plansByLocale.en;
  const trustCards = trustCardsByLocale[locale] ?? trustCardsByLocale.en;
  const faqItems = faqByLocale[locale] ?? faqByLocale.en;

  return (
    <Paper as="section" className="services-pricing section">
      <div className="services-pricing__orbs">
        <span className="services-pricing__orb services-pricing__orb--primary" />
        <span className="services-pricing__orb services-pricing__orb--secondary" />
      </div>

      <div className="services-pricing__shell">
        <header className="services-pricing__hero">
          <div className="services-pricing__eyebrow">
            <span className="services-pricing__badge">{content.badge}</span>
          </div>
        </header>

        <Paper>
          <Flex justify='center' gap='3' aria-label="trust indicators">
            {content.trustIndicators.map((item) => (
              <span key={item} className="services-pricing__trustpill">
                <Check width={16} strokeWidth={2} />
                {item}
              </span>
            ))}
          </Flex>
          <Grid cols={{default:'1fr', md:'1fr 1fr', lg:'repeat(4, 1fr)'}} gap='5'>
          {plans.map((plan) => (
             <PricingCard key={plan.name} plan={plan} content={content} />
          ))}
        </Grid>
        </Paper>

        <section className="services-pricing__trust" aria-labelledby="trust-title">
          <div className="services-pricing__section-heading">
            <Heading as="h2" size="6" id="trust-title">
              {content.trustTitle}
            </Heading>
            <Text as="p" size="4" color="b" low>
              {content.trustSubtitle}
            </Text>
          </div>

          <Grid cols={{default:'1fr', md:'repeat(3, 1fr)'}} gap='5'>
            {trustCards.map((card) => (
              <ServiceCard key={card.title} {...card} />
            ))}
          </Grid>
        </section>

        <section className="services-pricing__faq" aria-labelledby="faq-title">
          <div className="services-pricing__section-heading">
            <Text as="p" className="services-pricing__section-kicker">
              <User width={16} strokeWidth={2} />
              {content.faqKicker}
            </Text>
            <Heading as="h2" size="6" id="faq-title">
              {content.faqTitle}
            </Heading>
            <Text as="p" size="4" color="b" low>
              {content.faqSubtitle}
            </Text>
          </div>

          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>
                  <span>{item.question}</span>
                  <span className="faq-item__plus" aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </Paper>
  );
};

export default Services;
