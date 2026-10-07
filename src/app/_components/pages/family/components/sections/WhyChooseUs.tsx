import { Flex, Paper, Text } from "@pillar-ui/core";
import { CircleCheck } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { Reveal } from "@/app/_components/reveal";
import FamilySection from "../section";

const WhyChooseUs = () => {
  const t = useTranslations("family.page.section7");
  const list = t.raw("list") as string[];

  return (
    <FamilySection
      id="family-trust"
      title={t("title")}
      lead={t("subtitle")}
      gridAs="ul"
      cols={{ default: "1fr", sm: "1fr 1fr", lg: "repeat(4, minmax(0, 1fr))" }}
    >
      {list.map((item, index) => (
        <li key={item}>
          <Reveal variant="item" index={index}>
            <Paper
              as={Flex}
              items="start"
              gap="3"
              border
              p="5"
              corner="3"
              background="B1"
              className="family-card"
            >
              <span className="family-check" aria-hidden="true">
                <CircleCheck width={20} stroke="currentColor" strokeWidth={1.8} />
              </span>
              <Text size="4" weight="5">
                {item}
              </Text>
            </Paper>
          </Reveal>
        </li>
      ))}
    </FamilySection>
  );
};

export default WhyChooseUs;
