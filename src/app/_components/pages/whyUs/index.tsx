import { Button, Chips, Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import {
  AdjustmentsHorizontal,
  ChartLine,
  CircleCheck,
  Clock,
  Globe,
  Heart,
  HeartRateMonitor,
  MessageDots,
  Shield,
  User,
  Users,
} from "@pillar-ui/icons";
import { Link } from "@/i18n/navigation";
import { PERSONAL_INFO } from "@/constants/personalInfo";
import { useTranslations } from "next-intl";
import { Box } from "../../box";
import { Reveal } from "@/app/_components/reveal";
import "./why-us.scss";

const FEATURE_ITEMS = [
  { slug: "competence", Icon: User },
  { slug: "availability", Icon: Clock },
  { slug: "trust", Icon: Shield },
  { slug: "multilingual", Icon: Globe },
] as const;

const DETAIL_ICONS = [Clock, Heart, HeartRateMonitor, Users, MessageDots, Shield];

// Care items grouped under the three process headers
// (whyUs.page.global.list): Systematic / Monitored / Measurable.
const PROCESS_GROUPS = [
  { indices: [0, 2, 7], Icon: AdjustmentsHorizontal },
  { indices: [1, 3, 4, 8, 10], Icon: HeartRateMonitor },
  { indices: [5, 6, 9, 11], Icon: ChartLine },
];

const STAT_KEYS = ["response", "licensed", "availability", "coverage"] as const;

// A few whyUs copy strings carry **bold** / *italic* markers; render them as
// emphasis instead of literal asterisks.
function rich(text: string) {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

const WhyUs = () => {
  const t = useTranslations();
  const details = t.raw("whyUs.page.details.items") as { title: string; description: string }[];

  return (
    <Paper flow="8" className="section why-us-page">
      <section className="sc-story" aria-labelledby="sc-title">
        <Paper flow="4">
          <div className="sc-container">
            <header className="sc-intro">
              <Reveal index={0}>
                <p className="sc-kicker">
                  <span className="sc-kicker__rule" aria-hidden="true" />
                  {t("whyUs.badge")}
                </p>
              </Reveal>

              <Reveal index={1}>
                <h1 className="sc-title" id="sc-title">
                  <span className="sc-line">
                    <span>{t("whyUs.page.story.titleLine1")}</span>
                  </span>
                  <span className="sc-line">
                    <span className="sc-title__accent">{t("whyUs.page.story.titleLine2")}</span>
                  </span>
                </h1>
              </Reveal>

              <Reveal index={2}>
                <Text as="p" className="sc-lead">
                  {t("whyUs.description")}
                </Text>
              </Reveal>

              <Reveal index={3}>
                <Link className="sc-cta" href="/contact-us">
                  {t("whyUs.page.story.cta")}
                  <span aria-hidden="true">→</span>
                </Link>
              </Reveal>
            </header>

            <div className="sc-body">
              <Reveal variant="item">
                <figure className="sc-visual">
                  <blockquote className="sc-quote">{t("whyUs.page.story.quote")}</blockquote>
                  <p className="sc-quote-src">{t("whyUs.page.story.quoteSource")}</p>
                  <svg
                    className="sc-ecg"
                    viewBox="0 0 600 80"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      className="sc-ecg__base"
                      d="M0 40h140l12-22 14 44 12-22h120l12-22 14 44 12-22h264"
                    />
                    <path
                      className="sc-ecg__pulse"
                      pathLength={1}
                      d="M0 40h140l12-22 14 44 12-22h120l12-22 14 44 12-22h264"
                    />
                  </svg>
                </figure>
              </Reveal>

              <Reveal className="sc-chapter" variant="item" index={1}>
                <span className="sc-num" aria-hidden="true">
                  01
                </span>
                <div>
                  <Heading as="h2" size="5" weight="6">
                    {t("whyUs.page.story.subtitle")}
                  </Heading>
                  <Text as="p" color="b" low>
                    {rich(t("whyUs.page.story.description"))}
                  </Text>
                </div>
              </Reveal>

              <Reveal className="sc-chapter" variant="item" index={2}>
                <span className="sc-num" aria-hidden="true">
                  02
                </span>
                <div>
                  <Heading as="h2" size="5" weight="6">
                    {t("whyUs.page.patient.h2")}
                  </Heading>
                  <Text as="p" color="b" low>
                    {t("whyUs.page.patient.description")}
                  </Text>
                </div>
              </Reveal>
            </div>
          </div>
        </Paper>
      </section>

      <section className="why-us-facts" aria-label={t("whyUs.badge")}>
        <Paper flow="4">
          <ul className="wu-facts" role="list">
            {FEATURE_ITEMS.map(({ slug, Icon }, i) => (
              <li key={slug}>
                <Reveal variant="item" index={i}>
                  <Box
                    icon={<Icon />}
                    title={t(`whyUs.features.${slug}.title`)}
                    description={t(`whyUs.features.${slug}.description`)}
                  />
                </Reveal>
              </li>
            ))}
          </ul>
        </Paper>
      </section>

      <section className="why-us-section section-question">
        <Reveal>
          <Paper flow="4" className="wu-statement">
            <div>
              <Chips corner="full" color="p" variant="soft" size="3">
                {t("whyUs.page.question.subtitle")}
              </Chips>
              <Heading as="h2" size="9" weight="9" className="big-question">
                {t("whyUs.page.question.h2")}
              </Heading>
            </div>
            <Text size="6" weight="3" color="b" low>
              {rich(t("whyUs.page.question.description"))}
            </Text>
          </Paper>
        </Reveal>
      </section>

      <section className="why-us-section section-details">
        <Reveal>
          <Paper flow="4">
            <div>
              <Chips corner="full" color="p" variant="soft" size="3">
                {t("whyUs.page.details.subtitle")}
              </Chips>
              <Heading as="h2" size="8" weight="8" className="section-title">
                {t("whyUs.page.details.h2")}
              </Heading>
              <Text size="6" weight="3" color="b" low>
                {t("whyUs.page.details.description")}
              </Text>
            </div>
            <ul className="wu-details" role="list">
              {details.map((item, index) => {
                const DetailIcon = DETAIL_ICONS[index];
                return (
                  <li key={item.title}>
                    <Reveal variant="item" index={index}>
                      <Box
                        icon={<DetailIcon />}
                        title={item.title}
                        description={item.description}
                      />
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </Paper>
        </Reveal>
      </section>

      <section className="why-us-section section-process">
        <Reveal>
          <Paper flow="4">
            <div className="wu-statement">
              <div>
                <Chips corner="full" color="p" variant="soft" size="3">
                  {t("whyUs.page.measurement.subtitle")}
                </Chips>
                <Heading as="h2" size="8" weight="8" className="section-title">
                  {t("whyUs.page.measurement.h2")}
                </Heading>
              </div>
              <Text size="6" weight="3" color="b" low>
                {t("whyUs.page.measurement.description")}
              </Text>
            </div>
            <Grid gap="4" cols={{ default: "1fr", md: "1fr 1fr 1fr" }}>
              {PROCESS_GROUPS.map(({ indices, Icon }, g) => (
                <Reveal key={g} variant="item" index={g}>
                  <Paper
                    flow="4"
                    background="B1"
                    border
                    p="4"
                    corner="3"
                    className="wu-process-group"
                  >
                    <Flex items="center" gap="3">
                      <span className="wu-icon-chip" aria-hidden="true">
                        <Icon />
                      </span>
                      <Heading as="h3" size="4" weight="6">
                        {t(`whyUs.page.global.list.${g}`)}
                      </Heading>
                    </Flex>
                    <ul className="wu-check-list" role="list">
                      {indices.map((itemIndex) => (
                        <li key={itemIndex}>
                          <span className="wu-check__icon" aria-hidden="true">
                            <CircleCheck width={16} strokeWidth={2} />
                          </span>
                          <Text size="4" color="b" low>
                            {t(`whyUs.page.measurement.list.${itemIndex}`)}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </Paper>
                </Reveal>
              ))}
            </Grid>
          </Paper>
        </Reveal>
      </section>

      <section className="why-us-section section-proof">
        <Reveal>
          <Paper flow="4" className="wu-statement">
            <div>
              <Chips corner="full" color="p" variant="soft" size="3">
                {t("whyUs.page.visible.subtitle")}
              </Chips>
              <Heading as="h2" size="8" weight="8" className="section-title">
                {t("whyUs.page.visible.h2")}
              </Heading>
            </div>
            <Text size="6" weight="3" color="b" low>
              {rich(t("whyUs.page.visible.description"))}
            </Text>
            <dl className="wu-stats">
              {STAT_KEYS.map((key) => (
                <div className="wu-stat" key={key}>
                  <dt className="wu-stat__value">{t(`hero.stats.${key}.value`)}</dt>
                  <dd className="wu-stat__label">{t(`hero.stats.${key}.label`)}</dd>
                </div>
              ))}
            </dl>
          </Paper>
        </Reveal>
      </section>

      <section className="why-us-section section-grow">
        <Reveal>
          <Grid gap="6" cols={{ default: "1fr", md: "1fr 1fr" }} items="center">
            <Paper flow="4">
              <div>
                <Chips corner="full" color="p" variant="soft" size="3">
                  {t("whyUs.page.grow.subtitle")}
                </Chips>
                <Heading as="h2" size="8" weight="8" className="section-title">
                  {t("whyUs.page.grow.h2")}
                </Heading>
              </div>
              <Text size="6" weight="3" color="b" low>
                {t("whyUs.page.grow.description")}
              </Text>
            </Paper>
            <div className="section-visual visual-families" aria-hidden="true">
              <Users className="wu-visual-icon" />
            </div>
          </Grid>
        </Reveal>
      </section>

      <section className="why-us-section section-promise">
        <Reveal>
          <Paper flow="4" className="wu-statement">
            <div>
              <Chips corner="full" color="p" variant="soft" size="3">
                {t("whyUs.page.promise.subtitle")}
              </Chips>
              <Heading as="h2" size="8" weight="8" className="section-title">
                {t("whyUs.page.promise.h2")}
              </Heading>
            </div>
            <Text size="6" weight="3" color="b" low>
              {t("whyUs.page.promise.description")}
            </Text>
            <ul className="wu-promises" role="list">
              {[0, 1, 2].map((i) => (
                <li key={i}>
                  <Reveal variant="item" index={i} className="wu-promise">
                    <span className="wu-promise__icon" aria-hidden="true">
                      <CircleCheck width={22} strokeWidth={2} />
                    </span>
                    <Text size="4" weight="5">
                      {t(`whyUs.page.promise.list.${i}`)}
                    </Text>
                  </Reveal>
                </li>
              ))}
            </ul>
            <Flex className="wu-cta" direction="col" items="center" gap="3">
              <Flex gap="4" wrap justify="center">
                <Button as={Link} href="/contact-us" size="4">
                  {t("home.howItWorks.cta.primary")}
                </Button>
                <Button as="a" href={PERSONAL_INFO.contact.phone} variant="soft" size="4" dir="ltr">
                  {t("home.howItWorks.cta.secondary")}
                </Button>
              </Flex>
              <Text size="2" color="b" low>
                {t("home.howItWorks.cta.reassurance")}
              </Text>
            </Flex>
          </Paper>
        </Reveal>
      </section>
    </Paper>
  );
};

export default WhyUs;
