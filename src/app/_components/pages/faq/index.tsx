import { Heading, Paper } from "@pillar-ui/core";
import { useTranslations } from "next-intl";
import Accordions from "./components/accordion";
import { FAQ } from "./components/faq.data";

const FaqPage = () => {
  const t = useTranslations("faq");
  return (
    <Paper as="section" flow="8" className="section faq-page-container">
      <Heading size="6">{t("heading")}</Heading>
      {FAQ.map(([title, faq]) => {
        const data = faq.map(({ answer, key, question }) => ({
          answer: t(answer),
          key,
          title: t(title),
          question: t(question),
        }));
        return (
          <Paper as="section" flow="4" key={title} className="faq-section">
            <Heading as="h2" className="styled--title ">
              {t(title)}
            </Heading>
            <Accordions faq={data} />
          </Paper>
        );
      })}
    </Paper>
  );
};

export default FaqPage;
