import { Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { Envelop, Location, Phone, Users } from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { Reveal } from "@/app/_components/reveal";
import { PERSONAL_INFO } from "@/constants/personalInfo";

import SocialMedia from "../../socialMedia";
import ContactForm from "./form";

const Contact = () => {
  const t = useTranslations("contact");

  return (
    <Grid cols={{ default: "1fr", lg: "1fr 1fr" }} gap="9" className="section contact-page">
      <Paper as="section" aria-labelledby="contact-title" flow="8" className="contact-info">
        <Reveal className="contact-info__header">
          <Heading size="9" weight="5" as="h1" id="contact-title">
            {t("title")}
          </Heading>
          <Text size="7" color="b" low>
            {t("intro")}
          </Text>
        </Reveal>

        <Grid
          gap="4"
          cols={{ default: "1fr", md: "1fr 1fr", lg: "1fr", xl: "1fr 1fr" }}
          className="contact-cards"
        >
          <Reveal variant="item" index={0}>
            <Paper flow="4" border background="B1" corner="3" p="5" className="contact-card">
              <Flex items="center" gap="3">
                <span className="contact-card__chip" aria-hidden="true">
                  <Location />
                </span>
                <Heading as="h2" size="3" weight="5">
                  {t("addressLabel")}
                </Heading>
              </Flex>
              <Text size="4" color="b" low>
                {PERSONAL_INFO.information.address}
              </Text>
            </Paper>
          </Reveal>

          <Reveal variant="item" index={1}>
            <Paper flow="4" border background="B1" corner="3" p="5" className="contact-card">
              <Flex items="center" gap="3">
                <span className="contact-card__chip" aria-hidden="true">
                  <Phone />
                </span>
                <Heading as="h2" size="3" weight="5">
                  {t("phoneLabel")}
                </Heading>
              </Flex>
              <Text size="4" color="b" low>
                <a href={PERSONAL_INFO.contact.phone} dir="ltr">
                  {PERSONAL_INFO.phone}
                </a>
              </Text>
            </Paper>
          </Reveal>

          <Reveal variant="item" index={2}>
            <Paper flow="4" border background="B1" corner="3" p="5" className="contact-card">
              <Flex items="center" gap="3">
                <span className="contact-card__chip" aria-hidden="true">
                  <Users />
                </span>
                <Heading as="h2" size="3" weight="5">
                  {t("socialLabel")}
                </Heading>
              </Flex>
              <SocialMedia />
            </Paper>
          </Reveal>

          <Reveal variant="item" index={3}>
            <Paper flow="4" border background="B1" corner="3" p="5" className="contact-card">
              <Flex items="center" gap="3">
                <span className="contact-card__chip" aria-hidden="true">
                  <Envelop />
                </span>
                <Heading as="h2" size="3" weight="5">
                  {t("emailLabel")}
                </Heading>
              </Flex>
              <Text size="4" color="b" low>
                <a href={PERSONAL_INFO.contact.email} dir="ltr">
                  {PERSONAL_INFO.email}
                </a>
              </Text>
            </Paper>
          </Reveal>
        </Grid>
      </Paper>

      <Reveal className="contact-form-col">
        <ContactForm />
      </Reveal>
    </Grid>
  );
};

export default Contact;
