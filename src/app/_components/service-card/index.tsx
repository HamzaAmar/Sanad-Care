import { Button, Heading, Paper, Text } from "@pillar-ui/core";
import { ArrowRight } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface ServiceCardProps {
  image?: string;
  title: string;
  description: string;
  slug?: string;
}

export const ServiceCard = ({
  slug,
  image = "/abc.avif",
  title,
  description,
}: ServiceCardProps) => {
  const tService = useTranslations("services.page.programs");

  return (
    <Paper corner="3" border className="delivery-feature service-card">
      <div
        style={{
          margin: "0.75rem",
          borderRadius: "var(--R3, 0.5em)",
          overflow: "hidden",
          aspectRatio: "2 / 1",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      <Paper p="4" flow="3">
        <Heading as="h3" size="4" weight="5">
          {title}
        </Heading>
        <Text truncate="3" size="3" color="b" low>
          {description}
        </Text>
        <Button
          as={Link}
          href={`/services/${slug}`}
          variant="soft"
          icon={<ArrowRight />}
          iconPosition="end"
          size="4"
        >
          {tService("button")}
        </Button>
      </Paper>
    </Paper>
  );
};
