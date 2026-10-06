import { Button, Chips, Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { Star } from "@pillar-ui/icons";
import { useLocale, useTranslations } from "next-intl";
import {
  GOOGLE_PROFILE_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEW_URL,
  REVIEWS,
} from "@/constants/reviews";
import type { LocaleKey } from "@/types/localeProps.interface";

/** Google shows relative dates, which rot; show the month instead. */
const formatReviewDate = (iso: string, locale: LocaleKey) => {
  const date = new Date(`${iso}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
};

const Stars = ({ rating, label }: { rating: number; label: string }) => (
  <span className="reviews__stars" role="img" aria-label={label}>
    {[1, 2, 3, 4, 5].map((step) => (
      <Star
        key={step}
        width={15}
        strokeWidth={0}
        fill="currentColor"
        aria-hidden="true"
        className={step <= Math.round(rating) ? "reviews__star is-on" : "reviews__star"}
      />
    ))}
  </span>
);

/**
 * Reviews published on the Sanad Care Google Business Profile.
 *
 * The reviews are reproduced verbatim from the profile and credited to their
 * author, with a link back to Google, and the section states plainly that they
 * are unedited. No rating is shown unless the real profile figure is set — the
 * average of the few reviews displayed here is not the profile's rating.
 */
const Reviews = () => {
  const t = useTranslations("reviews");
  const locale = useLocale() as LocaleKey;

  if (REVIEWS.length === 0 && !GOOGLE_RATING) {
    return null;
  }

  return (
    <section className="reviews section" aria-labelledby="reviews-heading">
      <Flex direction="col" gap="2" items="center" className="reviews__head">
        <Chips color="b" variant="outline" corner="full">
          {t("badge")}
        </Chips>
        <Heading as="h2" size="6" weight="5" align="center" id="reviews-heading">
          {t("heading")}
        </Heading>
        <Text align="center" color="b" low size="4" className="reviews__lead">
          {t("lead")}
        </Text>
      </Flex>

      {GOOGLE_RATING ? (
        <Flex items="center" justify="center" gap="2" className="reviews__rating">
          <Stars
            rating={GOOGLE_RATING.value}
            label={`${GOOGLE_RATING.value} / 5`}
          />
          <Text as="span" weight="6" className="reviews__rating-value">
            <bdi dir="ltr">{GOOGLE_RATING.value.toFixed(1)}</bdi>
          </Text>
          <Text as="span" size="3" color="b" low>
            {t("reviewsCount", { count: GOOGLE_RATING.count })}
          </Text>
        </Flex>
      ) : null}

      {REVIEWS.length > 0 ? (
        <Grid cols={{ default: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }} gap="5">
          {REVIEWS.map((review) => (
            <Paper
              as="article"
              key={review.id}
              flow="4"
              p="5"
              corner="3"
              border
              className="reviews__card"
            >
              <Stars rating={review.rating} label={`${review.rating} / 5`} />
              <Text as="blockquote" size="4" className="reviews__text">
                {review.text}
              </Text>
              <footer className="reviews__meta">
                <Text as="span" weight="5" size="3">
                  {review.author}
                </Text>
                <Text as="span" size="2" color="b" low>
                  {formatReviewDate(review.date, locale)}
                </Text>
              </footer>
              {review.language ? (
                <Text as="p" size="2" color="b" low className="reviews__language">
                  {t("writtenIn", { language: t(`languages.${review.language}`) })}
                </Text>
              ) : null}
            </Paper>
          ))}
        </Grid>
      ) : (
        <Text as="p" align="center" color="b" low size="4" className="reviews__empty">
          {t("empty")}
        </Text>
      )}

      <Flex gap="3" wrap justify="center" className="reviews__actions">
        <Button
          as="a"
          href={GOOGLE_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="soft"
          color="b"
          icon={<Star width={16} strokeWidth={0} fill="currentColor" />}
        >
          {t("readOnGoogle")}
        </Button>
        <Button
          as="a"
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          color="b"
        >
          {t("leaveReview")}
        </Button>
      </Flex>

      <Text as="p" size="2" color="b" low align="center" className="reviews__disclosure">
        {t("disclosure")}
      </Text>
    </section>
  );
};

export default Reviews;
