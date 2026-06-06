import { Button, Chips, Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { CircleCheck } from "@pillar-ui/icons";
import { Link } from "@/i18n/navigation";
import { PERSONAL_INFO } from "@/constants/personalInfo";
import { useTranslations } from "next-intl";
import { ServiceCard } from "@/app/_components/service-card";

type CareCard = {
  title: string;
  description: string;
};

export function HomeNursingSeoSections() {
  const t = useTranslations("home");
  const conditions = t.raw("conditions.items") as CareCard[];
  const steps = t.raw("howItWorks.steps") as CareCard[];
  const emergencyBenefits = t.raw("emergencyCta.benefits") as string[];

  return (
    <>
      <Paper flow="6" className="section luxury-picnic-page__section">
        <Paper flow="2" className="luxury-picnic-page__section-heading">
          <div>
            <Text as="p" className="luxury-picnic-page__eyebrow" color="p" low size="4">
              {t("conditions.eyebrow")}
            </Text>
            <Heading as="h2" size="6">
              {t("conditions.title")}
            </Heading>
          </div>
          <Text color="b" low className="mx-w-75c">
            {t("conditions.description")}
          </Text>
        </Paper>

        <Grid cols={{ default: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }} gap="4">
          {conditions.map((item, i) => (
            <ServiceCard
              key={i}
              title={item.title}
              description={item.description}
              icon={<CircleCheck width="24" stroke="var(--P11)" />}
            />
          ))}
        </Grid>
      </Paper>

      <section className="section luxury-picnic-page__section">
        <Paper flow="5" className="luxury-picnic-page__panel">
          <div>
            <Text as="p" className="luxury-picnic-page__eyebrow" color="p" low>
              {t("howItWorks.eyebrow")}
            </Text>
            <Heading as="h2" size="6">
              {t("howItWorks.title")}
            </Heading>
          </div>
          <Text color="b" low className="mx-w-75c">
            {t("howItWorks.description")}
          </Text>

          <Grid cols={{ default: "1fr", md: "repeat(5, 1fr)" }} gap="4">
            {steps.map((step) => (
              <ServiceCard
                variant="colored"
                key={step.title}
                title={step.title}
                description={step.description}
              />
            ))}
          </Grid>
        </Paper>
      </section>

      <section className="section luxury-picnic-page__section">
        <Paper flow="5" className="luxury-picnic-page__final-cta">
          <div>
            <Text as="p" className="luxury-picnic-page__eyebrow" color="p" low>
              {t("emergencyCta.eyebrow")}
            </Text>
            <Heading as="h2" size="6">
              {t("emergencyCta.title")}
            </Heading>
          </div>
          <Text color="b" low className="mx-w-75c">
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

          <Flex gap="4" wrap>
            <Button
              as={Link}
              href="/contact-us"
              size="5"
              className="luxury-picnic-page__primary-button"
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
        </Paper>
      </section>
    </>
  );
}
