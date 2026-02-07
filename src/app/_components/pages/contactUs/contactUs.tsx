"use client";

import { Grid, Heading, Paper, Text } from "@pillar-ui/core";
import type { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import { PERSONAL_INFO } from "@/constants/personalInfo";

import type { LocaleKey } from "@/types/localeProps.interface";
import SocialMedia from "../../socialMedia";
import ContactForm from "./form";

const Contact = () => {
  const t = useTranslations("contact");
  const locale = useLocale() as LocaleKey;

  return (
    <Grid cols={{ default: "1fr", lg: "1fr 1fr" }} gap="9" className="section">
      <ContactForm />

      <Paper flow="8">
        <div>
          <Heading size="9" weight="5" as="h2">
            {t("title")}
          </Heading>

          <Text size="7" color="b" low>
            {t("intro")}
          </Text>
        </div>

        <Grid gap="8" cols={{ default: "1fr", md: "1fr 1fr" }}>
          <Paper flow="4">
            <Text weight="6">{t("addressLabel")}</Text>
            <Text>{PERSONAL_INFO[locale].address}</Text>
          </Paper>

          <Paper flow="4">
            <Text weight="6">{t("phoneLabel")}</Text>
            <Text>
              <a href={`tel:${PERSONAL_INFO.phone}`} dir="ltr">
                {PERSONAL_INFO.phone}
              </a>
            </Text>
          </Paper>

          <Paper flow="4">
            <Text weight="6">{t("socialLabel")}</Text>
            <SocialMedia />
          </Paper>

          <Paper flow="4">
            <Text weight="6">{t("emailLabel")}</Text>
            <Text>
              <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
            </Text>
          </Paper>
        </Grid>
      </Paper>
    </Grid>
  );
};

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Open Hands Morocco for inquiries about volunteering, community service, or cultural exchange programs.",
};

export default Contact;
