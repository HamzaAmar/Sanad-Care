import { Button, Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { ArrowRight, Check, Clock, Heart, Plus, Star, User } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const Services = () => {
  const t = useTranslations("services");

  const SERVICES = [
    { key: "elderlyCare", slug: "elderly-care-marrakech", icon: <User width={32} /> },
    { key: "postSurgery", slug: "post-surgery-care-marrakech", icon: <Plus width={32} /> },
    { key: "palliative", slug: "palliative-care-marrakech", icon: <Heart width={32} /> },
    { key: "wounds", slug: "wound-care-marrakech", icon: <Check width={32} /> },
    { key: "injections", slug: "injection-at-home-marrakech", icon: <Star width={32} /> },
    { key: "diabetes", slug: "diabetes-care-marrakech", icon: <Clock width={32} /> },
  ];

  return (
    <Paper as="section" flow="8" className="">
      <Flex direction="col" gap="4" items="center">
        <Heading as="h2" size="6" align="center">
          {t("heading")}
        </Heading>
        <Text align="center" color="b" low size="4">
          {t("subheading")}
        </Text>
      </Flex>

      <Grid cols={{ default: "1fr", md: "1fr 1fr 1fr" }} gap="6">
        {SERVICES.map(({ key, slug, icon }) => (
          <Paper
            as={Flex}
            className="delivery-feature"
            direction="col"
            items="center"
            key={key}
            p="5"
            corner="3"
            border
            flow="4"
          >
            <Flex justify="center" className="service-icon">
              {icon}
            </Flex>
            <Heading as="h3" align="center">
              {t(`items.${key}.title`)}
            </Heading>
            <Text align="center" color="b" size="4" low>
              {t(`items.${key}.description`)}
            </Text>
            <Button
              as={Link}
              href={`/services/${slug}`}
              variant="text"
              icon={<ArrowRight />}
              iconPosition="end"
            >
              {t(`items.${key}.cta`) || "Learn More"}
            </Button>
          </Paper>
        ))}
      </Grid>
    </Paper>
  );
};

export default Services;
