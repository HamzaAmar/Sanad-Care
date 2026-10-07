import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Flex,
  Grid,
  Heading,
  Paper,
  Text,
} from "@pillar-ui/core";
import { CircleCheck, PhoneCall, Shield, Star, Whatsapp } from "@pillar-ui/icons";
import { getTranslations } from "next-intl/server";
import { PERSONAL_INFO } from "@/constants/personalInfo";
import { SERVICE_TREE, type ServiceTreeItem } from "@/constants/services/serviceTreeData";
import { getPacks } from "@/constants/services/packs";
import { prestationsInfirmieres } from "../services/service.data";
import type { LocaleKey } from "@/types/localeProps.interface";
import type { PackId } from "@/types/service";
import ServiceFaq from "./components/ServiceFaq";
import ServiceNav, { type ServiceNavSection } from "./components/ServiceNav";
import "./serviceDetail.scss";

interface ServiceDetailProps {
  slug: string;
  locale: LocaleKey;
}

const procedureById = new Map(prestationsInfirmieres.map((item) => [item.id, item]));

/** Lines the catalog already marks as excluded, e.g. "Medication is not included". */
const EXCLUDE_PATTERNS: Record<LocaleKey, RegExp> = {
  en: /not included/i,
  fr: /pas inclus/i,
  ar: /غير مشمول/,
};

const pick = <T,>(value: Record<LocaleKey, T>, locale: LocaleKey): T => value[locale] ?? value.en;

const MAX_RELATED = 3;

const getRelated = (item: ServiceTreeItem) => {
  const siblings = Object.values(SERVICE_TREE).filter(
    (other) => other.slug !== item.slug && other.category === item.category,
  );
  const pool = siblings.length
    ? siblings
    : Object.values(SERVICE_TREE).filter((other) => other.category === "service");
  return pool.slice(0, MAX_RELATED);
};

const ServiceDetail = async ({ slug, locale }: ServiceDetailProps) => {
  const item = SERVICE_TREE[slug];
  if (!item) return null;

  const t = await getTranslations({ locale, namespace: "services.detail" });

  const title = pick(item.title, locale);
  const procedures = item.procedures
    .map((id) => procedureById.get(id))
    .filter((procedure) => procedure !== undefined);
  const packs = getPacks(item.packs as PackId[]);
  const related = getRelated(item);

  const excludes = procedures
    .flatMap((procedure) => pick(procedure.inclus, locale))
    .filter((line) => EXCLUDE_PATTERNS[locale].test(line));

  const included = pick(item.highlights, locale);

  const faqs = [
    ...pick(item.faqs, locale).map((faq, index) => ({
      id: `${slug}-own-${index}`,
      q: faq.q,
      a: faq.a,
    })),
    ...(t.raw("faq.shared") as Array<{ q: string; a: string }>).map((faq, index) => ({
      id: `${slug}-shared-${index}`,
      q: faq.q,
      a: faq.a,
    })),
  ];

  const facts = [
    { key: "response", icon: <CircleCheck width={17} strokeWidth={1.8} /> },
    { key: "availability", icon: <CircleCheck width={17} strokeWidth={1.8} /> },
    { key: "nurses", icon: <Shield width={17} strokeWidth={1.8} /> },
    { key: "languages", icon: <CircleCheck width={17} strokeWidth={1.8} /> },
  ] as const;

  const processSteps = t.raw("process.steps") as string[];
  const nursePoints = ["id", "sameNurse", "oversight", "choose", "change", "report"] as const;

  const sections: ServiceNavSection[] = [
    { id: "sd-included", label: t("nav.included") },
    ...(packs.length ? [{ id: "sd-plans", label: t("nav.plans") }] : []),
    { id: "sd-process", label: t("nav.process") },
    { id: "sd-nurse", label: t("nav.nurse") },
    { id: "sd-safety", label: t("nav.safety") },
    { id: "sd-faq", label: t("nav.faq") },
    { id: "sd-contact", label: t("nav.contact"), spy: false },
  ];

  const whatsappHref = `${PERSONAL_INFO.contact.whatsapp}?text=${encodeURIComponent(
    `${t("contact.whatsappPrefill")} ${title}`,
  )}`;

  return (
    <article className="sd">
      <header className="sd__head">
        <Breadcrumb>
          <BreadcrumbItem href={`/${locale}`}>{t("breadcrumbs.home")}</BreadcrumbItem>
          <BreadcrumbItem href={`/${locale}/services`}>{t("breadcrumbs.services")}</BreadcrumbItem>
          <BreadcrumbItem current>{pick(item.shortTitle, locale)}</BreadcrumbItem>
        </Breadcrumb>

        <Text as="p" className="sd__eyebrow" size="3">
          {t(`category.${item.category}`)}
        </Text>
        <Heading as="h1" size="8" weight="6" className="sd__title">
          {title}
        </Heading>
        <Text as="p" size="5" color="b" low className="sd__subtitle">
          {pick(item.subtitle, locale)}
        </Text>

        <ul className="sd__facts">
          {facts.map(({ key, icon }) => (
            <li className="sd__fact" key={key}>
              <span className="sd__fact-icon" aria-hidden="true">
                {icon}
              </span>
              {t(`facts.${key}`)}
            </li>
          ))}
        </ul>

        <Flex wrap gap="3" className="sd__cta">
          <Button
            as="a"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="solid"
            color="p"
            icon={<Whatsapp />}
            className="sd__cta-whatsapp"
          >
            {t("contact.whatsapp")}
            <span className="sd-visually-hidden"> (opens WhatsApp)</span>
          </Button>
          <Button
            as="a"
            href={PERSONAL_INFO.contact.phone}
            variant="outline"
            color="b"
            icon={<PhoneCall />}
            className="sd__cta-call"
          >
            {t("contact.call")}
          </Button>
        </Flex>
      </header>

      <ServiceNav sections={sections} label={t("nav.onThisPage")} />

      <div className="sd__layout">
        {/* The contact card is first in the DOM so keyboard and screen-reader
            users reach it early; CSS places it in the right column on desktop. */}
        <aside className="sd__aside" id="sd-contact" aria-label={t("contact.title")}>
          <Paper flow="3" p="5" corner="3" className="sd-contact">
            <Heading as="h2" size="5" weight="6">
              {t("contact.title")}
            </Heading>
            <Text as="p" size="3" color="b" low>
              {t("contact.body")}
            </Text>
            <Flex direction="col" gap="2">
              <Button
                as="a"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                fluid
                variant="solid"
                color="p"
                icon={<Whatsapp />}
              >
                {t("contact.whatsapp")}
                <span className="sd-visually-hidden"> (opens WhatsApp)</span>
              </Button>
              <Button
                as="a"
                href={PERSONAL_INFO.contact.phone}
                fluid
                variant="outline"
                color="b"
                icon={<PhoneCall />}
              >
                <bdi dir="ltr">{PERSONAL_INFO.phone}</bdi>
              </Button>
            </Flex>
            <ul className="sd-contact__meta">
              <li>{t("contact.advisor")}</li>
              <li>
                <bdi dir="ltr">{t("contact.hours")}</bdi>
              </li>
            </ul>
          </Paper>
        </aside>

        <div className="sd__main" id="sd-main">
          <section className="sd-block" aria-labelledby="sd-about-h">
            <Heading as="h2" size="6" id="sd-about-h" className="sd-block__h">
              {t("highlights.service")}
            </Heading>
            <Text as="p" size="4" color="b" low className="sd-prose">
              {pick(item.description, locale)}
            </Text>
          </section>

          <section className="sd-block" id="sd-included" aria-labelledby="sd-included-h">
            <Heading as="h2" size="6" id="sd-included-h" className="sd-block__h">
              {t("included.title")}
            </Heading>

            <ul className="sd-checks">
              {included.map((line) => (
                <li className="sd-check" key={line}>
                  <CircleCheck width={17} strokeWidth={1.8} aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            {excludes.length > 0 ? (
              <>
                <Heading as="h3" size="4" className="sd-sub__h">
                  {t("included.excludesLabel")}
                </Heading>
                <ul className="sd-checks sd-checks--muted">
                  {[...new Set(excludes)].map((line) => (
                    <li className="sd-check" key={line}>
                      <span aria-hidden="true" className="sd-check__dash" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {procedures.length > 0 ? (
              <>
                <Heading as="h3" size="4" className="sd-sub__h">
                  {t("included.includesLabel")}
                </Heading>
                <ul className="sd-procedures">
                  {procedures.map((procedure) => (
                    <li className="sd-procedure" key={procedure.id}>
                      <div className="sd-procedure__head">
                        <Heading as="h4" size="4" weight="5">
                          {pick(procedure.title, locale)}
                        </Heading>
                        <p className="sd-procedure__price">
                          <bdi dir="ltr">
                            {procedure.price} {t("included.currency")}
                          </bdi>
                        </p>
                      </div>
                      <ul className="sd-checks">
                        {pick(procedure.inclus, locale)
                          .filter((line) => !EXCLUDE_PATTERNS[locale].test(line))
                          .map((line) => (
                            <li className="sd-check" key={line}>
                              <CircleCheck width={15} strokeWidth={1.8} aria-hidden="true" />
                              <span>{line}</span>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="sd-quote">
                <Heading as="h3" size="4" weight="5">
                  {t("quote.title")}
                </Heading>
                <Text as="p" size="3" color="b" low>
                  {t("quote.body")}
                </Text>
              </div>
            )}
          </section>

          {packs.length > 0 ? (
            <section className="sd-block" id="sd-plans" aria-labelledby="sd-plans-h">
              <Heading as="h2" size="6" id="sd-plans-h" className="sd-block__h">
                {t("packs.title")}
              </Heading>
              <Text as="p" size="3" color="b" low>
                {t("packs.note")}
              </Text>
              <Grid cols={{ default: "1fr", sm: "1fr 1fr" }} gap="4" className="sd-packs">
                {packs.map((pack) => (
                  <Paper
                    key={pack.id}
                    flow="3"
                    p="4"
                    corner="3"
                    border
                    className={pack.featured ? "sd-pack sd-pack--featured" : "sd-pack"}
                  >
                    {pack.featured ? (
                      <span className="sd-pack__badge">
                        <Star width={13} strokeWidth={1.8} aria-hidden="true" />
                        {t("packs.featured")}
                      </span>
                    ) : null}
                    <Heading as="h3" size="4" weight="6">
                      {pick(pack.name, locale)}
                    </Heading>
                    <p className="sd-pack__price">
                      <bdi dir="ltr">{pack.priceMad.toLocaleString("en-US")}</bdi>{" "}
                      {t("included.currency")} <span>· {t("packs.perMonth")}</span>
                    </p>
                    <Text as="p" size="3" color="b" low>
                      {t("packs.visitsPerMonth", { count: pack.visitsPerMonth })}
                    </Text>
                    <ul className="sd-checks">
                      {pick(pack.features, locale).map((line) => (
                        <li className="sd-check" key={line}>
                          <CircleCheck width={15} strokeWidth={1.8} aria-hidden="true" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </Paper>
                ))}
              </Grid>
            </section>
          ) : null}

          <section className="sd-block" id="sd-process" aria-labelledby="sd-process-h">
            <Heading as="h2" size="6" id="sd-process-h" className="sd-block__h">
              {t("process.title")}
            </Heading>
            <ol className="sd-steps">
              {processSteps.map((step, index) => (
                <li className="sd-step" key={step}>
                  <span className="sd-step__num" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <div className="sd-sub">
              <Heading as="h3" size="4" className="sd-sub__h">
                {t("coverage.title")}
              </Heading>
              <ul className="sd-checks">
                <li className="sd-check">
                  <CircleCheck width={15} strokeWidth={1.8} aria-hidden="true" />
                  <span>{t("coverage.body")}</span>
                </li>
                <li className="sd-check">
                  <CircleCheck width={15} strokeWidth={1.8} aria-hidden="true" />
                  <span>{t("coverage.travel")}</span>
                </li>
                <li className="sd-check">
                  <CircleCheck width={15} strokeWidth={1.8} aria-hidden="true" />
                  <span>{t("coverage.night")}</span>
                </li>
              </ul>
            </div>

            <div className="sd-sub">
              <Heading as="h3" size="4" className="sd-sub__h">
                {t("prep.title")}
              </Heading>
              <ul className="sd-checks">
                <li className="sd-check">
                  <CircleCheck width={15} strokeWidth={1.8} aria-hidden="true" />
                  <span>{t("prep.prescription")}</span>
                </li>
                <li className="sd-check">
                  <CircleCheck width={15} strokeWidth={1.8} aria-hidden="true" />
                  <span>{t("prep.extra")}</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="sd-block" id="sd-nurse" aria-labelledby="sd-nurse-h">
            <Heading as="h2" size="6" id="sd-nurse-h" className="sd-block__h">
              {t("nurse.title")}
            </Heading>
            <Text as="p" size="4" color="b" low className="sd-prose">
              {t("nurse.intro")}
            </Text>
            <ul className="sd-checks">
              {nursePoints.map((point) => (
                <li className="sd-check" key={point}>
                  <CircleCheck width={15} strokeWidth={1.8} aria-hidden="true" />
                  <span>{t(`nurse.${point}`)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="sd-block" id="sd-safety" aria-labelledby="sd-safety-h">
            <Heading as="h2" size="6" id="sd-safety-h" className="sd-block__h">
              {t("safety.title")}
            </Heading>
            <ul className="sd-checks">
              <li className="sd-check">
                <CircleCheck width={15} strokeWidth={1.8} aria-hidden="true" />
                <span>{t("safety.notEmergency")}</span>
              </li>
              <li className="sd-check">
                <CircleCheck width={15} strokeWidth={1.8} aria-hidden="true" />
                <span>{t("safety.scope")}</span>
              </li>
            </ul>
            <p className="sd-safety__numbers">
              <bdi dir="ltr">{t("safety.numbers")}</bdi>
            </p>
          </section>

          <section className="sd-block" id="sd-payment" aria-labelledby="sd-payment-h">
            <Heading as="h2" size="6" id="sd-payment-h" className="sd-block__h">
              {t("payment.title")}
            </Heading>
            <ul className="sd-checks">
              <li className="sd-check">
                <CircleCheck width={15} strokeWidth={1.8} aria-hidden="true" />
                <span>{t("payment.methods")}</span>
              </li>
              <li className="sd-check">
                <CircleCheck width={15} strokeWidth={1.8} aria-hidden="true" />
                <span>{t("payment.invoice")}</span>
              </li>
              <li className="sd-check">
                <CircleCheck width={15} strokeWidth={1.8} aria-hidden="true" />
                <span>{t("payment.cancellation")}</span>
              </li>
              <li className="sd-check">
                <CircleCheck width={15} strokeWidth={1.8} aria-hidden="true" />
                <span>{t("payment.insurance")}</span>
              </li>
            </ul>
          </section>

          {faqs.length > 0 ? (
            <section className="sd-block" id="sd-faq" aria-labelledby="sd-faq-h">
              <Heading as="h2" size="6" id="sd-faq-h" className="sd-block__h">
                {t("faq.title")}
              </Heading>
              <ServiceFaq items={faqs} />
            </section>
          ) : null}
        </div>
      </div>

      {related.length > 0 ? (
        <section className="sd-block sd-related" aria-labelledby="sd-related-h">
          <Heading as="h2" size="6" id="sd-related-h" className="sd-block__h">
            {t("related.title")}
          </Heading>
          <Grid cols={{ default: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }} gap="4">
            {related.map((other) => (
              <Paper key={other.slug} flow="2" p="4" corner="3" border className="sd-related__card">
                <Text as="p" size="2" color="p" low>
                  {t(`category.${other.category}`)}
                </Text>
                <Heading as="h3" size="4" weight="5">
                  <a className="sd-related__link" href={`/${locale}/services/${other.slug}`}>
                    {pick(other.title, locale)}
                  </a>
                </Heading>
                <Text as="p" size="3" color="b" low>
                  {pick(other.subtitle, locale)}
                </Text>
              </Paper>
            ))}
          </Grid>
        </section>
      ) : null}
    </article>
  );
};

export default ServiceDetail;
