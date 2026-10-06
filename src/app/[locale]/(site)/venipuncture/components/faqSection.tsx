// app/[locale]/venipuncture/components/faqSection.tsx
"use client";

import { useGSAP } from "@gsap/react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Heading,
  Paper,
  Text,
} from "@pillar-ui/core";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("venipuncture");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.from(".faq-heading", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 20%",
            toggleActions: "play none none reverse",
          },
        });
        gsap.from(".faq-item", {
          y: 30,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".faq-grid",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });
      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  const FAQS = [
    { q: "faq.q1", a: "faq.a1" },
    { q: "faq.q2", a: "faq.a2" },
    { q: "faq.q3", a: "faq.a3" },
    { q: "faq.q4", a: "faq.a4" },
    { q: "faq.q5", a: "faq.a5" },
    { q: "faq.q6", a: "faq.a6" },
    { q: "faq.q7", a: "faq.a7" },
    { q: "faq.q8", a: "faq.a8" },
  ];

  return (
    <Paper ref={sectionRef} as="section" flow="8" className="section">
      <Heading as="h2" size="6" weight="5" align="center" className="faq-heading">
        {t("faq.heading")}
      </Heading>

      <div className="faq-grid" style={{ display: "grid", gap: "1rem" }}>
        <Accordion corner="2">
          {FAQS.map((faq, i) => (
            <AccordionItem value={i}>
              <AccordionButton>{t(faq.q)}</AccordionButton>
              <AccordionPanel>
                <Text color="b" low size="3">
                  {t(faq.a)}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Paper>
  );
};

export default FAQSection;
