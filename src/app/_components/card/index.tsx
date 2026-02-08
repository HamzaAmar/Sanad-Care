import { Flex, Heading, Paper, Separator, Text } from "@pillar-ui/core";
import { CircleCheck, CircleMinus } from "@pillar-ui/icons";
import type { NursingServiceFinale } from "@/types/service";

const ServiceCard = ({ description, included, name, notIncluded }: NursingServiceFinale) => {
  return (
    <article className="service-container">
      <Paper p="2" corner="4" className="service-card">
        <div className="card-background" />

        <Paper p="4">
          <Heading weight="5" size="4" transform="uppercase" as="h3" truncate="1">
            {name}
          </Heading>
          <Text size="3" color="b" low truncate="1">
            {description}
          </Text>
        </Paper>
        {/* <Flex gap="3">
          {Object.entries(priceFrom).map(([key, value]) => (
            <Flex gap="1" key={key}>
              <Text size="3" color="b" low>
                {value} MAD
              </Text>
              <Text size="3" color="b" low>
                {key}
              </Text>
            </Flex>
          ))}
        </Flex> */}

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
      </Paper>
    </article>
  );
};

export default ServiceCard;
