import { Flex, Heading, Paper, Separator, Text } from "@pillar-ui/core";
import { CircleCheck, Heart, Stethoscope, Users } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { Reveal } from "@/app/_components/reveal";
import FamilySection from "../section";

const CATEGORY_ICONS = {
  medical: Stethoscope,
  daily: Heart,
  family: Users,
} as const;

const FamilyServices = () => {
  const t = useTranslations("family.page.section4");
  const categories = ["medical", "daily", "family"] as const;

  return (
    <FamilySection
      id="family-services"
      title={t("title")}
      lead={t("subtitle")}
      gridAs="ul"
      cols={{ default: "1fr", md: "1fr 1fr 1fr" }}
    >
      {categories.map((key, index) => {
        const Icon = CATEGORY_ICONS[key];
        return (
          <li key={key}>
            <Reveal variant="item" index={index}>
              <Paper flow="4" border p="5" corner="3" background="B1" className="family-card">
                <Flex items="center" gap="3">
                  <span className="family-icon-chip" aria-hidden="true">
                    <Icon width={22} stroke="currentColor" strokeWidth={1.6} />
                  </span>
                  <Heading as="h3" size="4" weight="5">
                    {t(`categories.${key}.title`)}
                  </Heading>
                </Flex>
                <Separator />
                <Paper as="ul" flow="3">
                  {(t.raw(`categories.${key}.items`) as string[]).map((item) => (
                    <Flex as="li" gap="3" items="start" key={item}>
                      <span className="family-check" aria-hidden="true">
                        <CircleCheck width={18} stroke="currentColor" strokeWidth={1.8} />
                      </span>
                      <Text size="4" color="b" low>
                        {item}
                      </Text>
                    </Flex>
                  ))}
                </Paper>
              </Paper>
            </Reveal>
          </li>
        );
      })}
    </FamilySection>
  );
};

export default FamilyServices;
