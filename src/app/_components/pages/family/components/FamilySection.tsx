import { Heading, Link, Text } from "@pillar-ui/core";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type React from "react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface FamilySectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  cta?: string;
  ctaLink?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  className?: string;
}

const FamilySection: React.FC<FamilySectionProps> = ({
  title,
  subtitle,
  description,
  cta,
  ctaLink = "/contact",
  children,
  reverse = false,
  className = "",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // useGSAP(
  //   () => {
  //     const section = sectionRef.current;
  //     const design = designRef.current;
  //     const text = textRef.current;

  //     if (!section || !design || !text) return;

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: section,
  //         start: "top 70%",
  //         end: "bottom 20%",
  //         toggleActions: "play none none reverse",
  //         markers: true, // Uncomment for debugging
  //       },
  //     });

  //     tl.to(section, {
  //       opacity: 1,
  //       x: 0,
  //       duration: 0.8,
  //       ease: "power3.out",
  //     })
  //       .to(
  //         design,
  //         {
  //           y: 0,
  //           opacity: 0.1,
  //           duration: 1,
  //           ease: "elastic.out(1, 0.5)",
  //         },
  //         "-=0.4",
  //       )
  //       .to(
  //         text,
  //         {
  //           y: 0,
  //           opacity: 1,
  //           duration: 0.8,
  //           ease: "back.out(1.7)",
  //         },
  //         "-=0.6",
  //       );

  //     if (text.children) {
  //       gsap.from(text.children, {
  //         scrollTrigger: {
  //           trigger: text,
  //           start: "top 80%",
  //         },
  //         y: 20,
  //         opacity: 0,
  //         duration: 0.5,
  //         stagger: 0.2,
  //         delay: 0.5,
  //       });
  //     }
  //   },
  //   { scope: sectionRef },
  // );

  return (
    <section ref={sectionRef} className={`family-section ${reverse ? "section-reverse" : ""} ${className}`}>
      <div ref={designRef} className="family-design" />

      <div ref={textRef} className="family-content">
        <div className="text-bubble">
          {subtitle && (
            <Text size="4" color="su" weight="7" className="mb-2 uppercase tracking-wider">
              {subtitle}
            </Text>
          )}
          <Heading size="7" as="h2" className="mb-4">
            {title}
          </Heading>

          {description && (
            <Text size="5" color="b" className="mb-6 opacity-80 leading-relaxed">
              {description}
            </Text>
          )}

          {children}

          {cta && (
            <div className="mt-8">
              <Link href={ctaLink}>{cta}</Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FamilySection;
