"use client";

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
import { Check, Shield, Clock, Users, Whatsapp, Phone } from "@pillar-ui/icons";
import { SERVICE_TREE, ServiceTreeItem } from "@/constants/services/serviceTreeData";
import { prestationsInfirmieres } from "../services/service.data";
import type { LocaleKey } from "@/types/localeProps.interface";
import "./serviceDetail.scss";
import { PERSONAL_INFO } from "@/constants/personalInfo";

interface ServiceDetailProps {
  slug: string;
  locale: LocaleKey;
}

// Map slug to relevant clinical procedures (prestations)
const getRelatedPrestations = (slug: string) => {
  switch (slug) {
    case "blood-test-at-home-marrakech":
      return [1]; // Prélèvement Sanguin
    case "injection-at-home-marrakech":
      return [4, 5, 9]; // IM, SC, Vaccination
    case "iv-therapy-marrakech":
      return [6]; // Pose de Perfusion IV
    case "wound-care-marrakech":
    case "pressure-ulcer-care-marrakech":
      return [2, 3, 7]; // Pansement Simple, Complexe, Retrait points
    case "diabetes-care-marrakech":
      return [8]; // Glycémie + Insuline
    case "chronic-disease-care-marrakech":
      return [8, 10]; // Glycémie + Cardio-Tensionnelle
    case "home-nursing-marrakech":
    case "nurse-at-home-marrakech":
    case "hospitalization-at-home-marrakech":
    case "post-surgery-care-marrakech":
      return [0, 2, 4, 6]; // Standard, Pansement, IM, Perfusion
    default:
      return [0]; // Visite Infirmière Standard
  }
};

const ServiceDetail = ({ slug, locale }: ServiceDetailProps) => {
  const item: ServiceTreeItem | undefined = SERVICE_TREE[slug];

  if (!item) {
    return (
      <Paper p="8" className="section text-center">
        <Heading size="6">Service not found</Heading>
        <Text color="b" low>
          The requested service page does not exist or has been moved.
        </Text>
      </Paper>
    );
  }

  // Get translations based on locale
  const title = item.title[locale] || item.title.en;
  const subtitle = item.subtitle[locale] || item.subtitle.en;
  const description = item.description[locale] || item.description.en;
  const highlights = item.highlights[locale] || item.highlights.en;
  const keywords = item.keywords[locale] || item.keywords.en;
  const faqs = item.faqs[locale] || item.faqs.en;

  // Category labels
  const categoryLabels = {
    pillar: { en: "Pillar Service", fr: "Service Pilier", ar: "الخدمة الأساسية" },
    service: {
      en: "Home Nursing Service",
      fr: "Soin Infirmier à Domicile",
      ar: "خدمة تمريضية منزلية",
    },
    condition: {
      en: "Medical Condition Support",
      fr: "Suivi Pathologie / Maladie",
      ar: "رعاية الحالات الطبية",
    },
  };
  const categoryLabel = categoryLabels[item.category][locale];

  // Static site labels
  const staticLabels = {
    whatsIncluded: {
      en: "What is Included & Pricing",
      fr: "Soins & Tarification",
      ar: "ماذا تشمل الخدمة والأسعار",
    },
    pricingNote: {
      en: "Prices reflect the baseline procedure cost. Final billing depends on care duration and patient requirements.",
      fr: "Les prix indiqués sont des tarifs de base. La facturation finale dépend de la durée des soins et des besoins du patient.",
      ar: "الأسعار الموضحة هي تكاليف أساسية. تعتمد التكلفة النهائية على مدة الرعاية واحتياجات المريض.",
    },
    whyChooseUs: {
      en: "Why Families Choose Sanad Care",
      fr: "Pourquoi Choisir Sanad Care",
      ar: "لماذا تختار سند كير",
    },
    trustedTeam: {
      en: "State-Registered Nurses",
      fr: "Infirmiers Diplômés d'État",
      ar: "ممرضون وممرضات مجازون",
    },
    trustedTeamDesc: {
      en: "Every care session is delivered by fully certified and registered clinical professionals.",
      fr: "Chaque séance de soins est assurée par un infirmier diplômé et agréé par l'État.",
      ar: "كل زيارة يقوم بها ممرضون مؤهلون ومجازون علمياً لضمان أعلى مستويات السلامة.",
    },
    available247: {
      en: "24/7 Availability",
      fr: "Disponibilité 24h/24 & 7j/7",
      ar: "متاحون على مدار الساعة",
    },
    available247Desc: {
      en: "Round-the-clock support for emergencies, night shifts, and regular scheduled home visits.",
      fr: "Soutien permanent pour les urgences, les gardes de nuit et les visites programmées.",
      ar: "دعم مستمر للمناوبات الليلية، الزيارات الطارئة، والرعاية الدورية المجدولة.",
    },
    multilingual: {
      en: "Multilingual Communication",
      fr: "Communication Multilingue",
      ar: "تواصل بلغات متعددة",
    },
    multilingualDesc: {
      en: "Clear discussions with clinical staff fluent in English, French, and Moroccan Darija.",
      fr: "Échanges clairs avec notre équipe parlant français, anglais et arabe darija.",
      ar: "تواصل واضح ومريح مع ممرضين يتحدثون الدارجة، الفرنسية، والإنجليزية.",
    },
    bookTitle: { en: "Book This Care Now", fr: "Réserver ce Soin", ar: "احجز هذه الخدمة الآن" },
    bookDesc: {
      en: "Connect with our care advisors to schedule a home nurse visit or discuss a customized monthly plan.",
      fr: "Contactez nos conseillers pour planifier une visite ou concevoir un forfait de soins mensuel.",
      ar: "تواصل مع مستشاري الرعاية لدينا لجدولة زيارة تمريضية أو وضع خطة رعاية شهرية.",
    },
    ctaWhatsapp: { en: "Chat on WhatsApp", fr: "Discuter sur WhatsApp", ar: "تواصل عبر واتساب" },
    ctaPhone: { en: "Call Helpline 24/7", fr: "Appeler notre Ligne 24/7", ar: "اتصل بنا 24/7" },
    faqTitle: {
      en: "Frequently Asked Questions",
      fr: "Questions Fréquentes",
      ar: "الأسئلة الشائعة",
    },
    pricePrefix: { en: "Starting from", fr: "À partir de", ar: "ابتداءً من" },
    madUnit: { en: "MAD", fr: "MAD", ar: "درهم" },
  };

  const labels = staticLabels;

  // Retrieve related procedures (prestations) for this page
  const relatedIndices = getRelatedPrestations(slug);
  const relatedPrestations = relatedIndices
    .map((idx) => prestationsInfirmieres[idx])
    .filter(Boolean);

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <Paper as="article" flow="8" className="section service-detail__shell" dir={dir}>
      {/* 1. Header Hero section */}
      <header className="service-detail__hero">
        <Flex items="center" gap="4" justify="between" wrap>
          <Paper flow="6">
            <div>
              <Text color="p" low size="3">
                {categoryLabel}
              </Text>
              <Heading as="h1" leading="1" size="9">
                {title}
              </Heading>
            </div>
            <Flex gap="2" wrap>
              {keywords.map((kw, i) => (
                <Chips key={i} variant="soft">
                  {kw}
                </Chips>
              ))}
            </Flex>
            <Text as="p" color="b" low size="7">
              {subtitle}
            </Text>
          </Paper>
          <Flex gap="2" wrap>
            <Button
              as="a"
              variant="shadow"
              href={PERSONAL_INFO.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              icon={<Whatsapp />}
            >
              {labels.ctaWhatsapp[locale]}
            </Button>
            <Button icon={<Phone />} variant="soft" as="a" href={PERSONAL_INFO.contact.phone}>
              {labels.ctaPhone[locale]}
            </Button>
          </Flex>
        </Flex>
      </header>

      {/* 2. Content Grid */}
      <Grid cols={{ default: "1fr", lg: "1.8fr 1fr" }} gap="6" className="service-detail__grid">
        <div className="service-detail__content-main">
          {/* Main Description */}
          <Paper as={Paper} flow="3" className="l_box">
            <Heading as="h2" size="6">
              {title}
            </Heading>
            <Text color="b" low leading="3">
              {description}
            </Text>

            {/* Highlights bullet list */}
            <Heading as="h3" size="4">
              {item.category === "condition"
                ? locale === "fr"
                  ? "Symptômes et Prise en Charge"
                  : locale === "ar"
                    ? "الأعراض والرعاية المقدمة"
                    : "Symptoms & In-Home Support"
                : locale === "fr"
                  ? "Points Clés de notre Service"
                  : locale === "ar"
                    ? "أبرز مميزات الخدمة"
                    : "Key Elements of Our Service"}
            </Heading>
            <Paper flow="2">
              {highlights.map((highlight, index) => (
                <Paper
                  background="B2"
                  border
                  corner="2"
                  p="2"
                  as={Flex}
                  gap="2"
                  items="center"
                  key={index}
                >
                  <Check stroke="var(--P9)" width={20} strokeWidth={2} />
                  <Text size="3" color="b" low>
                    {highlight}
                  </Text>
                </Paper>
              ))}
            </Paper>
          </Paper>

          {/* Related Procedures & Pricing */}
          {relatedPrestations.length > 0 && (
            <Paper flow="6" as="section" className="l_box">
              <div>
                <Heading weight="5" as="h2" size="6">
                  {labels.whatsIncluded[locale]}
                </Heading>
                <Text size="3" color="b" low>
                  {labels.pricingNote[locale]}
                </Text>
              </div>

              <Paper flow="8">
                {relatedPrestations.map((prestation, idx) => (
                  <Paper flow="4" key={idx}>
                    <Flex justify="between" wrap items="center" gap="2">
                      <Heading as="h4" weight="5">
                        {prestation.title[locale] || prestation.title.en}
                      </Heading>
                      <Flex items="center" gap="2">
                        <Chips transform="lowercase" variant="shadow" color="p">
                          {labels.pricePrefix[locale]}
                        </Chips>
                        <Text size="4" weight="5" className="service-detail__prestation-price">
                          {prestation.price}.00 {labels.madUnit[locale]}
                        </Text>
                      </Flex>
                    </Flex>
                    <Paper flow="1">
                      {(prestation.inclus[locale] || prestation.inclus.en).map((inc, i) => (
                        <Paper
                          background="B2"
                          border
                          key={i}
                          corner="2"
                          p="2"
                          as={Flex}
                          gap="2"
                          items="center"
                        >
                          <Check stroke="var(--P9)" width={14} strokeWidth={2.5} />
                          <Text size="3" color="b" low>
                            {inc}
                          </Text>
                        </Paper>
                      ))}
                    </Paper>
                  </Paper>
                ))}
              </Paper>
            </Paper>
          )}

          {/* FAQs section */}
          {faqs.length > 0 && (
            <Paper flow="5" className="l_box" aria-labelledby="faq-title">
              <div>
                <Chips color="b" variant="soft">
                  FAQ
                </Chips>
                <Heading as="h2" size="5" id="faq-title">
                  {labels.faqTitle[locale]}
                </Heading>
              </div>

              <Accordion collapsible separate corner="4" size="4">
                {faqs.map(({ q, a }, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`}>
                    <AccordionButton className="faq--button">{q}</AccordionButton>
                    <AccordionPanel className="faq--answer">{a}</AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Paper>
          )}
        </div>

        {/* 3. Sticky Sidebar */}
        <Paper as="aside" flow="4" className="service-detail__sidebar">
          {/* Booking CTA Card */}
          <Paper flow="4" className="service-detail__cta-card">
            <Heading as="h2" size="6" weight="5">
              {labels.bookTitle[locale]}
            </Heading>
            <Text size="4" leading="3">
              {labels.bookDesc[locale]}
            </Text>
            <Paper flow="2">
              <Button
                fluid
                as="a"
                href={PERSONAL_INFO.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Whatsapp />}
                variant="mixed"
              >
                {labels.ctaWhatsapp[locale]}
              </Button>
              <Button
                fluid
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href={PERSONAL_INFO.contact.phone}
                icon={<Phone />}
                variant="outline"
                color="o"
              >
                {labels.ctaPhone[locale]}
              </Button>
            </Paper>
          </Paper>

          {/* Quick trust metrics */}
          <Paper flow="6" className="l_box">
            <Heading as="h3" size="4">
              {labels.whyChooseUs[locale]}
            </Heading>
            <Paper flow="4">
              <Flex gap="3" items="start">
                <Badge variant="soft" type="icon" icon={<Shield width={20} />} />
                <div>
                  <Text weight="6" size="3" color="b">
                    {labels.trustedTeam[locale]}
                  </Text>
                  <Text size="2" color="b" low>
                    {labels.trustedTeamDesc[locale]}
                  </Text>
                </div>
              </Flex>

              <Flex gap="3" items="start">
                <Badge variant="soft" type="icon" icon={<Clock width={20} />} />
                <div>
                  <Text weight="6" size="3" color="b">
                    {labels.available247[locale]}
                  </Text>
                  <Text size="2" color="b" low>
                    {labels.available247Desc[locale]}
                  </Text>
                </div>
              </Flex>

              <Flex gap="3" items="start">
                <Badge variant="soft" type="icon" icon={<Users width={20} />} />
                <div>
                  <Text weight="6" size="3" color="b">
                    {labels.multilingual[locale]}
                  </Text>
                  <Text size="2" color="b" low>
                    {labels.multilingualDesc[locale]}
                  </Text>
                </div>
              </Flex>
            </Paper>
          </Paper>
        </Paper>
      </Grid>
    </Paper>
  );
};

export default ServiceDetail;
