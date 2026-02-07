import { Heading, Paper, Rating, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import { TESTIMONIALS } from "./testimonials.data";

const Testimonials = () => {
  const t = useTranslations();
  return (
    <Paper as="section" flow="5" className="section dots-background">
      <div>
        <Text transform="uppercase" color="p" weight="5" low>
          {t("customerReviews")}
        </Text>
        <Heading as="h2" size="6">
          {t("hearWhatClientsSay")}
        </Heading>
      </div>
      <article className="testimonial-card">
        {TESTIMONIALS.map((review) => (
          <blockquote dir="auto" key={review.id} cite="">
            <div>
              <Text dir="auto" weight="5" className="author">
                – {review.author}
              </Text>
              <Rating hideTitle size="3" rating={5} />
            </div>
            <Text dir="auto" color="b" low size="4">
              {review.text}
            </Text>
          </blockquote>
        ))}
      </article>
    </Paper>
  );
};

export default Testimonials;
