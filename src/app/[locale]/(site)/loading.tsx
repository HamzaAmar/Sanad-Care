import { Flex, Spinner, Text } from "@pillar-ui/core";

export default function Loading() {
  return (
    <Flex
      direction="col"
      items="center"
      justify="center"
      gap="4"
      className="section"
      style={{ minHeight: "40vh" }}
      role="status"
      aria-live="polite"
    >
      <Spinner size="8" />
      <Text size="4" color="b" low>
        Loading…
      </Text>
    </Flex>
  );
}
