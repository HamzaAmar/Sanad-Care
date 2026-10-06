import { Flex, Grid, Heading, Paper, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import Logo from "@/app/logo";
import { PERSONAL_INFO } from "@/constants/personalInfo";
import { Link } from "@/i18n/navigation";

import { useMenuLinks } from "../header/header.data";
import SocialMedia from "../socialMedia";

const Footer = () => {
  const t = useTranslations("footer");
  const Menu = useMenuLinks();

  return (
    <footer className="footer">
      <Grid
        gap="6"
        cols={{ default: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
        className="footer-main"
      >
        <Flex gap="6" direction="col">
          <Link href="/" className="logo" aria-label={PERSONAL_INFO.name}>
            <Logo width={150} />
          </Link>

          <div className="address">
            <Text size="3" color="b" low>
              {PERSONAL_INFO.information.address}
            </Text>
            <Text size="4" color="b" low>
              <span dir="ltr">{PERSONAL_INFO.phone}</span>
            </Text>
          </div>

          <SocialMedia />
        </Flex>

        <Paper flow="5">
          <Heading size="4" as="h2">
            {t("sections.rentersTitle")}
          </Heading>

          <Flex direction="col" gap="2" as="ul" className="link_list">
            {Menu.map((item) => (
              <Text size="3" color="b" low as="li" key={item.href}>
                <Link href={item.href} className="link">
                  {item.label}
                </Link>
              </Text>
            ))}
          </Flex>
        </Paper>

        {/* Contact Section */}
        <Paper flow="5">
          <Heading size="4" as="h2">
            {t("sections.contactTitle")}
          </Heading>

          <Paper flow="3">
            <Paper flow="1">
              <Text size="3" color="b" low>
                {t("workingDays")}
              </Text>
              <Text size="4">{PERSONAL_INFO.information.workingHours}</Text>
            </Paper>

            <Paper flow="1">
              <Text size="3" color="b" low>
                {t("sections.hotline")}
              </Text>
            <Text size="4">
              <span dir="ltr">{PERSONAL_INFO.phone}</span>
            </Text>
            </Paper>

            <Paper flow="1">
              <Text size="3" color="b" low>
                {t("sections.email")}
              </Text>
              <Text size="4">{PERSONAL_INFO.email}</Text>
            </Paper>
          </Paper>
        </Paper>
      </Grid>

      {/* Copyright */}
      <Flex justify="between" items="center" as={Paper} p="4" className="copyright">
        <Text align="center" size="2" color="b" low>
          &copy; {new Date().getFullYear()} {t("copyright")}
        </Text>

        <Flex gap="4" items="center" wrap>
          <Text size="2" color="b" low>
            <Link href="/privacy" className="link">
              {t("privacy")}
            </Link>
          </Text>

          <Text size="2" color="b" low>
            <Link
              href="https://www.miloudamar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              {t("developedBy")} Miloud Amar
            </Link>
          </Text>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
