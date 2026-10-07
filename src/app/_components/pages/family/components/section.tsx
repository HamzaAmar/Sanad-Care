import { Grid, Heading, Text, type GridBaseProps, type Size } from "@pillar-ui/core";
import type { ReactNode } from "react";
import { Reveal } from "@/app/_components/reveal";

type FamilySectionProps = {
  id: string;
  title: string;
  lead?: string;
  titleSize?: Size;
  variant?: "default" | "statement" | "closing";
  gridAs?: "div" | "ul" | "ol";
  cols?: GridBaseProps;
  className?: string;
  children?: ReactNode;
};

const FamilySection = ({
  id,
  title,
  lead,
  titleSize = "8",
  variant = "default",
  gridAs = "div",
  cols = { default: "1fr" },
  className,
  children,
}: FamilySectionProps) => {
  const sectionClass = ["family-section", `family-section--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClass} aria-labelledby={id}>
      <Reveal>
        <header className="family-head">
          <Heading as="h2" id={id} size={titleSize} weight="7" className="family-title">
            {title}
          </Heading>
          {lead ? (
            <Text as="p" size="5" weight="3" color="b" low className="family-lead">
              {lead}
            </Text>
          ) : null}
        </header>
      </Reveal>
      {children ? (
        <Grid
          as={gridAs}
          role={gridAs === "div" ? undefined : "list"}
          gap="4"
          cols={cols}
          className="family-grid"
        >
          {children}
        </Grid>
      ) : null}
    </section>
  );
};

export default FamilySection;
