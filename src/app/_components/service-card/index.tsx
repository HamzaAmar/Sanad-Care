import { Flex, Heading, Paper, Text } from "@pillar-ui/core";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Paper p="4" corner="3" border className="delivery-feature">
      <Flex gap="5" items="start">
        <div>{icon}</div>
        <Paper flow="1">
          <Heading as="h3" size="3" weight="5">
            {title}
          </Heading>
          <Text size="3" color="b" low>
            {description}
          </Text>
        </Paper>
      </Flex>
    </Paper>
  );
};
