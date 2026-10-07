import { Button, Flex, Heading, Paper, Text } from "@pillar-ui/core";
import { ArrowRight, CircleCheck, PhoneCall } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PERSONAL_INFO } from "@/constants/personalInfo";

interface ServiceCardProps {
  image?: string;
  title: string;
  description: string;
  slug?: string;
  shortTitle?: string;
  hasMonthlyPlan?: boolean;
  highlights?: string[];
}

const FOLDER_ALIASES: Record<string, string> = {
  "elderly-care": "elder-care",
};

const MAX_FACTS = 2;

/**
 * Cards are a fixed height per row, so long highlights would make the grid
 * ragged. Prefer the shortest ones, then restore their authored order so the
 * set still reads deliberately.
 */
const pickFacts = (highlights: string[] | undefined): string[] =>
  [...(highlights ?? [])]
    .map((text, index) => ({ text, index }))
    .sort((a, b) => a.text.length - b.text.length)
    .slice(0, MAX_FACTS)
    .sort((a, b) => a.index - b.index)
    .map((fact) => fact.text);

export const ServiceCard = ({
  slug,
  image,
  title,
  description,
  shortTitle,
  hasMonthlyPlan = false,
  highlights,
}: ServiceCardProps) => {
  const t = useTranslations("services.page.card");
  const baseSlug = slug?.replace(/-marrakech$/, "");
  const serviceFolder = baseSlug ? (FOLDER_ALIASES[baseSlug] ?? baseSlug) : undefined;
  const imageSrc =
    image ??
    (slug && serviceFolder ? `/images/${serviceFolder}/${slug}-sanadcare.avif` : "/abc.avif");
  const facts = pickFacts(highlights);

  return (
    <Paper corner="3" border className="delivery-feature service-card">
      <div className="service-card__media">
        <img
          src={imageSrc}
          alt={title}
          loading="lazy"
          decoding="async"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {hasMonthlyPlan ? (
          <span className="service-card__chip">{t("subscriptionChip")}</span>
        ) : null}
      </div>

      <Paper flow="5" className="service-card__body">
        <Heading as="h3" size="4" weight="5">
          {title}
        </Heading>
        <Text truncate="3" size="3" color="b" low>
          {description}
        </Text>

        {facts.length > 0 ? (
          <Paper flow="2" as="ul" className="service-card__facts">
            {facts.map((fact) => (
              <Flex as="li" gap="2" className="service-card__fact" key={fact}>
                <CircleCheck width={15} stroke="var(--P9)" strokeWidth={1.8} aria-hidden="true" />
                <Text size="3" color="b" low>
                  {fact}
                </Text>
              </Flex>
            ))}
          </Paper>
        ) : null}

        <Flex wrap gap="2" className="service-card__actions">
          <Button
            as={Link}
            href={`/services/${slug}`}
            variant="mixed"
            size="4"
            icon={<ArrowRight />}
            iconPosition="end"
            className="service-card__cta"
          >
            {t("explore", { service: shortTitle ?? title })}
          </Button>
          <Button
            as="a"
            href={PERSONAL_INFO.contact.phone}
            variant="soft"
            color="b"
            size="4"
            icon={<PhoneCall />}
            className="service-card__call"
          >
            {t("callNow")}
          </Button>
        </Flex>
      </Paper>
    </Paper>
  );
};
