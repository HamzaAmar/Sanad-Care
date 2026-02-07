import { Flex, Heading, Paper, Separator, Text } from "@pillar-ui/core";
import { CircleCheck, CircleMinus } from "@pillar-ui/icons";
import type { NursingService } from "@/types/service";

const ServiceCard = ({ description, included, name, notIncluded, priceFrom }: NursingService) => {
  return (
    <article className="car-container">
      <Paper p="2" corner="4" className="car-card">
        <div className="card-background" />

        <Paper p="4">
          <Heading transform="uppercase" as="h3" truncate="1">
            {name}
          </Heading>
          <Text size="3" color="b" low>
            {description}
          </Text>
        </Paper>

        <Separator />
        <Paper as="ul" p="4">
          {included.map((service) => (
            <Flex as="li" gap="4" key={service}>
              <CircleCheck width="16" stroke="var(--P9)" />
              <Text>{service}</Text>
            </Flex>
          ))}
          {notIncluded.map((service) => (
            <Flex as="li" gap="4" key={service}>
              <CircleMinus width="16" stroke="var(--B10)" />
              <Text>{service}</Text>
            </Flex>
          ))}
        </Paper>
        <Separator />

        {Object.entries(priceFrom).map(([key, value]) => (
          <Flex gap="4" key={key}>
            <Text size="3" color="b" low>
              {value} MAD
            </Text>
            <Text size="3" color="b" low>
              {key}
            </Text>
          </Flex>
        ))}
      </Paper>
    </article>
  );
};

export default ServiceCard;
