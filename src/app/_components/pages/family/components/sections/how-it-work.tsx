import { Heading, Paper, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import { Reveal } from "@/app/_components/reveal";
import FamilySection from "../section";

const HowItWorks = () => {
  const t = useTranslations("family.page.section5");
  const steps = t.raw("steps") as { title: string; description: string }[];

  return (
    <FamilySection
      id="family-how"
      title={t("title")}
      lead={t("subtitle")}
      gridAs="ol"
      cols={{ default: "1fr", lg: "repeat(5, minmax(0, 1fr))" }}
    >
      {steps.map((step, index) => (
        <li key={step.title}>
          <Reveal variant="item" index={index} className="family-step">
            <span className="family-step__num" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Paper flow="4" border p="5" corner="3" background="B1" className="family-card">
              <Heading as="h3" size="4" weight="5">
                {step.title}
              </Heading>
              <Text size="4" color="b" low>
                {step.description}
              </Text>
            </Paper>
          </Reveal>
        </li>
      ))}
    </FamilySection>
  );
};

export default HowItWorks;
