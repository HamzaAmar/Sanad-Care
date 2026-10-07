import { Paper, Text } from "@pillar-ui/core";
import { Quotes } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { Reveal } from "@/app/_components/reveal";
import FamilySection from "../section";

const Testimonials = () => {
  const t = useTranslations("family.page.section6");
  const testimonials = t.raw("testimonials") as { quote: string; source: string }[];
  const [featured, ...rest] = testimonials;

  return (
    <FamilySection
      id="family-testimonials"
      title={t("title")}
      lead={t("subtitle")}
      cols={{ default: "1fr", lg: "minmax(0, 1.2fr) minmax(0, 1fr)" }}
    >
      <Reveal variant="item">
        <Paper
          flow="5"
          border
          p="6"
          corner="3"
          background="B1"
          className="family-card family-quote"
        >
          <span className="family-quote__mark" aria-hidden="true">
            <Quotes width={30} stroke="currentColor" strokeWidth={1.5} />
          </span>
          <Text as="blockquote" size="6" weight="4">
            {featured.quote}
          </Text>
          <Text as="p" size="3" color="p" low className="family-quote__source">
            {featured.source}
          </Text>
        </Paper>
      </Reveal>
      <div className="family-quotes">
        {rest.map((item, index) => (
          <Reveal key={item.quote} variant="item" index={index + 1}>
            <Paper
              flow="4"
              border
              p="5"
              corner="3"
              background="B1"
              className="family-card family-quote"
            >
              <Text as="blockquote" size="4" weight="4">
                {item.quote}
              </Text>
              <Text as="p" size="3" color="p" low className="family-quote__source">
                {item.source}
              </Text>
            </Paper>
          </Reveal>
        ))}
      </div>
    </FamilySection>
  );
};

export default Testimonials;
