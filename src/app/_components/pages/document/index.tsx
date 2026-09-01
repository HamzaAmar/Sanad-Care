"use client";

import { Heading, Paper, Text } from "@pillar-ui/core";
import { useTranslations } from "next-intl";

import DocumentForm from "./form";

const DocumentPage = () => {
  const t = useTranslations("document");

  return (
    <main className="section document-page">
      <div className="document-page__container">
        <Paper as="header" flow="4" p="5" corner="4" className="document-page__header">
          <Text as="p" size="2" weight="6" transform="uppercase" color="p">
            {t("brand")}
          </Text>
          <Heading as="h1" size="7" weight="6" leading="1">
            {t("pageTitle")}
          </Heading>
          <Text as="p" size="4" color="b" low leading="3">
            {t("subtitle")}
          </Text>
        </Paper>

        <DocumentForm />
      </div>
    </main>
  );
};

export default DocumentPage;
