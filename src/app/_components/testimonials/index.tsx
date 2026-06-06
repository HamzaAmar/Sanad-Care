import { Chips, Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { Google, Happy, Star } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import type { Testimonial as TestimonialProps } from "./testimonials.type";

const Testimonial = ({ testimonial }: { testimonial: TestimonialProps }) => {
  return (
    <Flex
      as={Paper}
      direction="col"
      justify="between"
      p="4"
      flow="4"
      key={testimonial.id}
      className="testimonials__card"
    >
      <Text size="4">{testimonial.quote}</Text>
      <Grid gap="4" cols={{ default: "1fr auto" }} items="center" className="testimonials__author">
        <div>
          <Text weight="5">{testimonial.name}</Text>
          <Flex gap="1">
            <Text size="3" weight="5">
              4.9
            </Text>
            <Star fill="var(--W11)" stroke="var(--W11)" width="16" />
          </Flex>
        </div>

        <Google width="24" strokeWidth="3" />
      </Grid>
    </Flex>
  );
};

const Testimonials = ({ showAll }: { showAll: boolean }) => {
  const t = useTranslations("testimonials");

  const TESTIMONIALS = Array.from({ length: 8 }).map((_, i) => {
    const id = (i + 1).toString();
    return {
      id,
      quote: t(`${id}.quote`),
      name: t(`${id}.name`),
      avatar: `https://i.pravatar.cc/60?img=${id}`,
    };
  });

  const displayedTestimonials = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 6);

  return (
    <Paper as="section" p="5">
      <Paper flow="8" className="testimonials__container">
        <Flex direction="col" gap="2" items="center">
          <Chips color="b" variant="outline" as={Flex} gap="1">
            <Happy />
            {t("badge")}
          </Chips>
          <Heading as="h2" size="6" weight="5" align="center">
            {t("heading")}
          </Heading>
        </Flex>

        <Grid gap="5" cols={{ default: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}>
          {displayedTestimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </Grid>
      </Paper>
    </Paper>
  );
};

export default Testimonials;
