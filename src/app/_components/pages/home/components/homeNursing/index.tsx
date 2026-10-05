import { Button, Chips, Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { CircleCheck } from "@pillar-ui/icons";
import type { CSSProperties } from "react";
import { Link } from "@/i18n/navigation";
import { PERSONAL_INFO } from "@/constants/personalInfo";
import { useLocale, useTranslations } from "next-intl";
import { ServiceCard } from "@/app/_components/service-card";
import { Reveal } from "@/app/_components/reveal";
import { SERVICE_TREE } from "@/constants/services/serviceTreeData";
import { LocaleKey } from "@/types/localeProps.interface";

type CareCard = {
  title: string;
  description: string;
};

const BADGE_KEYS = ["step1", "", "", "step4", "step5"];

export function HomeNursingSeoSections() {
  const t = useTranslations("home");
  const tService = useTranslations("services.page");
  const steps = (t.raw("howItWorks.steps") as CareCard[] | undefined) ?? [];
  const trust = (t.raw("howItWorks.trust") as string[] | undefined) ?? [];
  const badges = (t.raw("howItWorks.badges") as Record<string, string> | undefined) ?? {};
  const emergencyBenefits = t.raw("emergencyCta.benefits") as string[];
  const locale = useLocale() as LocaleKey;

  return (
    <>
      <Reveal>
        <Paper flow="6" className="section home-seo__section">
          <Flex justify="between" items="center" gap="4">
            <Paper flow="2" className="home-seo__section-heading">
              <div>
                <Text as="p" className="home-seo__eyebrow" color="p" low size="4">
                  {t("conditions.eyebrow")}
                </Text>
                <Heading as="h2" size="6">
                  {t("conditions.title")}
                </Heading>
              </div>
              <Text color="b" low size="4" className="mx-w-75c">
                {t("conditions.description")}
              </Text>
            </Paper>
            <Button as={Link} href="/services#services-programs">
              {tService("seeAll")}
            </Button>
          </Flex>

          <Grid cols={{ default: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }} gap="4">
            {Object.values(SERVICE_TREE)
              .filter((item) => item.category === "pillar" || item.category === "service")
              .slice(0, 6)
              .map((item, i) => (
                <Reveal key={i} variant="item" index={i}>
                  <ServiceCard
                    title={item.title[locale] || item.title.en}
                    description={item.description[locale] || item.description.en}
                    shortTitle={item.shortTitle[locale] || item.shortTitle.en}
                    highlights={item.highlights[locale] || item.highlights.en}
                    hasMonthlyPlan={item.packs.length > 0}
                    slug={item.slug}
                  />
                </Reveal>
              ))}
          </Grid>
        </Paper>
      </Reveal>

      <section className="section home-seo__section booking-journey">
        <Reveal>
          <header className="booking-journey__header">
            <Text as="p" className="home-seo__eyebrow" color="p" low>
              {t("howItWorks.eyebrow")}
            </Text>
            <Heading as="h2" size="6">
              {t("howItWorks.title")}
            </Heading>
            <Text color="b" low size="4" className="mx-w-75c">
              {t("howItWorks.description")}
            </Text>
            <Flex gap="3" wrap className="booking-journey__trust">
              {trust.map((item) => (
                <Chips key={item} corner="full" color="p" variant="soft" size="3">
                  <CircleCheck width="16" />
                  {item}
                </Chips>
              ))}
            </Flex>
          </header>
        </Reveal>

        <Reveal variant="section" className="booking-journey__rail">
          <ol className="booking-journey__steps">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="booking-journey__step"
                style={{ "--step-index": i } as CSSProperties}
              >
                <div className="booking-journey__step-inner">
                  <span className="booking-journey__num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div className="booking-journey__body">
                    <Heading as="h3" size="4" weight="6" className="booking-journey__title">
                      {step.title}
                    </Heading>
                    <Text size="3" color="b" low className="booking-journey__desc">
                      {step.description}
                    </Text>
                    {badges[BADGE_KEYS[i]] ? (
                      <span className="booking-journey__badge">{badges[BADGE_KEYS[i]]}</span>
                    ) : null}
                    {i === 0 ? (
                      <Link href="/contact-us" className="booking-journey__inline-link">
                        {t("howItWorks.cta.inline")} →
                      </Link>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal>
          <Flex className="booking-journey__cta" direction="col" items="center" gap="3">
            <Flex gap="4" wrap justify="center">
              <Button as={Link} href="/contact-us" size="4">
                {t("howItWorks.cta.primary")}
              </Button>
              <Button as="a" href={PERSONAL_INFO.contact.phone} variant="soft" size="4" dir="ltr">
                {t("howItWorks.cta.secondary")}
              </Button>
            </Flex>
            <Text size="2" color="b" low>
              {t("howItWorks.cta.reassurance")}
            </Text>
          </Flex>
        </Reveal>
      </section>

      <section className="section home-seo__section">
        <Reveal>
          <Paper flow="5" className="home-seo__final-cta">
            <div className="home-seo__final-cta-head">
              <Text as="p" className="home-seo__eyebrow" color="p" low>
                {t("emergencyCta.eyebrow")}
              </Text>
              <Heading as="h2" size="7">
                {t("emergencyCta.title")}
              </Heading>
            </div>
            <Text color="b" low size="4" className="mx-w-75c">
              {t("emergencyCta.description")}
            </Text>

            <Flex gap="3" wrap>
              {emergencyBenefits.map((benefit) => (
                <Chips key={benefit} corner="full" color="b" variant="soft" size="3">
                  <CircleCheck width="16" />
                  {benefit}
                </Chips>
              ))}
            </Flex>

            <Flex gap="4" wrap className="home-seo__final-cta-actions">
              <Button
                as="a"
                href={PERSONAL_INFO.contact.phone}
                size="5"
                className="home-seo__primary-button"
              >
                {t("emergencyCta.primaryCta")}
              </Button>
              <Button
                as="a"
                href={PERSONAL_INFO.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                size="5"
                variant="soft"
              >
                {t("emergencyCta.secondaryCta")}
              </Button>
            </Flex>

            <Flex items="center" gap="2" className="home-seo__status">
              <span className="home-seo__status-dot" aria-hidden="true" />
              <Text size="2" color="su" low>
                {t("emergencyCta.status")}
              </Text>
            </Flex>
          </Paper>
        </Reveal>
      </section>
    </>
  );
}
