import { Button, Flex, Heading, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFoundPage");

  return (
    <Flex
      direction="col"
      items="center"
      justify="center"
      gap="4"
      className="section"
      style={{ minHeight: "50vh", textAlign: "center" }}
    >
      <Heading as="h1" size="9">
        {t("title")}
      </Heading>
      <Text size="5" color="b" low>
        {t("description")}
      </Text>
      <Button as={Link} href="/" color="p" size="5">
        {t("backHome")}
      </Button>
    </Flex>
  );
}
