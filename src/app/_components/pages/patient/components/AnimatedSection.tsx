"use client";

import { useGSAP } from "@gsap/react";
import { Flex, Grid, Heading, Link, Paper, Text } from "@pillar-ui/core";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useRef } from "react";
import "./../patient.scss"; // Import styles locally

gsap.registerPlugin(ScrollTrigger);

interface PatientSectionProps {
  title: string;
  description?: string;
  cta?: string;
  ctaLink?: string;
  children?: ReactNode;
  className?: string;
  subtitle?: string;
  direction?: "col" | "row";
}

const AnimatedSection = ({
  title,
  subtitle,
  description,
  cta,
  ctaLink,
  children,
  className = "",
  direction = "col",
}: PatientSectionProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textElementsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const design = designRef.current;
      const content = contentRef.current;
      const textElements = textElementsRef.current?.children;

      if (!container || !design || !content || !textElements) return;

      gsap.set(container, { x: 10, opacity: 0 });
      gsap.set(design, { y: "-100%", opacity: 0 });
      gsap.set(content, { y: "100%", opacity: 0 });
      gsap.set(textElements, { y: 20, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top center+=50",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });
      //

      tl.to(container, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" })
        .to(design, { y: 0, duration: 0.5, ease: "bounce.out", opacity: 1 }, "-=0.4")
        .to(content, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.6")
        .to(textElements, { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 }, "-=0.4");
    },
    { scope: containerRef },
  );

  const grid = direction === "row" ? {cols:{default:'1fr', md:'2fr auto'}} : {};

  return (
    <section ref={containerRef} className={`patient-section ${className}`}>
      <div ref={designRef} className="patient-design" />

      <div ref={contentRef} className="patient-container patient-content-wrapper">
        <Grid {...grid} gap='6'  ref={textElementsRef}>
          <div className="patient-content">
            <Heading as="h2" size="7" weight="5">
              {title}
            </Heading>
            <Text size="4" color="b" low className="patient-subtitle">
              {subtitle}
            </Text>

            {description && (
              <Text size="5" color="b" low className="patient-description">
                {description}
              </Text>
            )}
            {cta && (
              <div className="patient-cta">
                <Link href={ctaLink || "/contact"}>{cta}</Link>
              </div>
            )}
          </div>
          {children}
        </Grid>
      </div>
    </section>
  );
};

export default AnimatedSection;
