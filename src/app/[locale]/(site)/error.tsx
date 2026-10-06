"use client";

import { Button, Flex, Heading, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";

export default function Error({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("errorPage");

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
      <Button color="p" size="5" onClick={reset}>
        {t("retry")}
      </Button>
    </Flex>
  );
}
