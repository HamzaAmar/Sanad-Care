import { Button, Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { ArrowRight, Check, Clock, Heart, Plus, Star, User } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("services");

  const SERVICES = [
    { key: "elderlyCare", icon: <User width={32} /> },
    { key: "postSurgery", icon: <Plus width={32} /> },
    { key: "palliative", icon: <Heart width={32} /> },
    { key: "wounds", icon: <Check width={32} /> },
    { key: "injections", icon: <Star width={32} /> },
    { key: "diabetes", icon: <Clock width={32} /> },
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
        {SERVICES.map(({ key, icon }) => (
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
            <Button variant="text" icon={<ArrowRight />} iconPosition="end">
              Learn More
            </Button>
          </Paper>
        ))}
      </Grid>
    </Paper>
  );
};

export default Services;
