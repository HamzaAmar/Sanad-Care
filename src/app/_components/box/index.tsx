import { Flex, Heading, Paper, Text, TypographyProps } from "@pillar-ui/core";
import type { ReactNode } from "react";

interface BoxProps {
  icon?: ReactNode;
  title: string;
  description: string;
  variant?: "normal" | "colored";
}

export const Box = ({ icon, title, description, variant = "normal" }: BoxProps) => {
  const color: TypographyProps = variant === "normal" ? {} : { color: "p", low: true };
  return (
    <Paper p="4" corner="3" border className="delivery-feature">
      <Flex gap="5" items="start">
        <div>{icon}</div>
        <Paper flow="1">
          <Heading as="h3" size="3" weight="5" {...color}>
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
