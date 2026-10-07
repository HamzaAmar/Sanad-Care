import { Button, Flex, Paper, Text } from "@pillar-ui/core";
import { CircleCheck, Clock, PhoneCall, UserCheck, Whatsapp } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import type { CSSProperties, ReactNode } from "react";
import { PERSONAL_INFO } from "@/constants/personalInfo";

const HERO_IMAGE = "/images/hero/hero-care-portrait-9x16.avif";
const HERO_IMAGE_WIDTH = 375;
const HERO_IMAGE_HEIGHT = 667;

type CardKey = "response" | "nurse" | "report";

const CARD_ORDER: CardKey[] = ["response", "nurse", "report"];

const CARD_ICONS: Record<CardKey, ReactNode> = {
  response: <Clock width={18} strokeWidth={1.6} />,
  nurse: <UserCheck width={18} strokeWidth={1.6} />,
  report: <CircleCheck width={18} strokeWidth={1.6} />,
};

type StatEntry = { value: string; label: string };
type CardEntry = { title: string; meta: string };

const HeroSection = () => {
  const t = useTranslations();
  const stats = Object.values(t.raw("hero.stats") as unknown as Record<string, StatEntry>);
  const cards = t.raw("hero.cards") as unknown as Record<CardKey, CardEntry>;
  const tickerItems = t.raw("hero.ticker.items") as unknown as string[];

  const step = (value: number) => ({ "--hero-step": value }) as CSSProperties;

  return (
    <section className="hero">
      <div className="hero__grain" aria-hidden="true" />
      <div className="hero__glow hero__glow--a" aria-hidden="true" />
      <div className="hero__glow hero__glow--b" aria-hidden="true" />

      <div className="hero__inner">
        <Paper flow="5" className="hero__content">
          <div className="hero__availability hero__anim" style={step(0)}>
            <span className="hero__pulse" aria-hidden="true" />
            <Text as="span" size="2" weight="5">
              {t("hero.availability")}
            </Text>
            <span className="hero__availability-sep" aria-hidden="true">
              ·
            </span>
            <Text as="span" size="2" color="b" low>
              {t("hero.availabilityMeta")}
            </Text>
          </div>

          <h1 className="hero__title hero__anim" style={step(2)}>
            {t("hero.title")} <br />
            {t("hero.titleAccent")}
          </h1>

          <Text className="hero__subtitle hero__anim" style={step(3)}>
            {t("hero.subtitle")}
          </Text>

          <Flex wrap gap="3" className="hero__actions hero__anim" style={step(4)}>
            <Button
              variant="solid"
              color="p"
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              href={PERSONAL_INFO.socialMedia.whatsapp}
              className="hero__action hero__action--primary"
              icon={<Whatsapp />}
            >
              {t("contact.contactWhatsapp")}
            </Button>
            <Button
              as="a"
              variant="outline"
              color="b"
              href={PERSONAL_INFO.contact.phone}
              className="hero__action"
              icon={<PhoneCall />}
            >
              {t("contact.contactPhone")}
            </Button>
          </Flex>

          <Flex gap="2" items="center" className="hero__actions-note hero__anim" style={step(4)}>
            <Clock width={14} strokeWidth={1.8} aria-hidden="true" />
            <Text as="span" size="2" color="b" low>
              {t("hero.whatsappNote")}
            </Text>
          </Flex>

          <dl className="hero__stats hero__anim" style={step(6)}>
            {stats.map(({ value, label }) => (
              <div className="hero__stat" key={label}>
                <dt className="hero__stat-value">{value}</dt>
                <dd className="hero__stat-label">{label}</dd>
              </div>
            ))}
          </dl>
        </Paper>

        <div className="hero__media">
          <div className="hero__frame hero__anim" style={step(1)}>
            <img
              src={HERO_IMAGE}
              alt={t("hero.photoAlt")}
              width={HERO_IMAGE_WIDTH}
              height={HERO_IMAGE_HEIGHT}
              fetchPriority="high"
              decoding="async"
            />
            <span className="hero__frame-fade" aria-hidden="true" />
          </div>

          {CARD_ORDER.map((key, i) => (
            <div
              className={`hero__card hero__card--${key} hero__anim`}
              key={key}
              style={{ "--hero-step": i + 3 } as CSSProperties}
            >
              <span className="hero__card-icon" aria-hidden="true">
                {CARD_ICONS[key]}
              </span>
              <span className="hero__card-body">
                <span className="hero__card-title">{cards[key].title}</span>
                <span className="hero__card-meta">{cards[key].meta}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__ticker">
        <Text as="span" size="2" className="hero__ticker-label">
          {t("hero.ticker.label")}
        </Text>
        <div className="hero__ticker-viewport" tabIndex={0} aria-label={t("hero.ticker.label")}>
          <ul className="hero__ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <li
                className="hero__ticker-item"
                key={`${item}-${i}`}
                aria-hidden={i >= tickerItems.length ? true : undefined}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
