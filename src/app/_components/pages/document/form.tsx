"use client";

import {
  Alert,
  Button,
  Flex,
  FormController,
  Grid,
  Input,
  Paper,
  ProgressBar,
  Text,
} from "@pillar-ui/core";
import {
  Building,
  Calendar,
  Check,
  ChevronDown,
  Heart,
  Phone,
  Send,
  Shield,
  Signature,
  User,
} from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { useActionState, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { submitDocument } from "./action/document";
import QuestionCard from "./components/question-card";
import SuccessPanel from "./components/success-panel";
import type {
  DocumentFieldName,
  DocumentFormState,
  DocumentValues,
  MessageLabels,
} from "./document.type";
import {
  buildDocumentMessage,
  buildWhatsAppUrl,
  countCompletedSteps,
  countTotalSteps,
  emptyDocumentValues,
  readDocumentFormData,
} from "./document.utils";

const initialState: DocumentFormState = {
  status: "idle",
  fieldErrors: {},
  unansweredQuestions: [],
  submittedAt: 0,
};

/** `YYYY-MM-DD` in the visitor's own timezone (toISOString would shift the day). */
const toDateInputValue = (date: Date): string =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate(),
  ).padStart(2, "0")}`;

const DocumentForm = () => {
  const t = useTranslations("document");
  const questions = t.raw("questions") as string[];
  const consentPoints = [t("consentItem1"), t("consentItem2"), t("consentItem3")];

  const formRef = useRef<HTMLFormElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const handledRef = useRef(0);

  const [values, setValues] = useState<DocumentValues>(() => emptyDocumentValues(questions));
  const [showPreview, setShowPreview] = useState(false);
  const [autoOpenBlocked, setAutoOpenBlocked] = useState(false);
  const [dismissedAt, setDismissedAt] = useState(0);

  const [state, formAction, pending] = useActionState(submitDocument, initialState);

  const labels = useMemo<MessageLabels>(
    () => ({
      title: `${t("brand")} - ${t("pageTitle")}`,
      fullName: t("fullName"),
      age: t("age"),
      arrivalDate: t("arrivalDate"),
      hotel: t("hotel"),
      phone: t("phone"),
      healthHeading: t("healthHeading"),
      consentHeading: t("consentHeading"),
      agreed: t("consentAgree"),
      signature: t("signature"),
      date: t("date"),
      yes: t("yes"),
      no: t("no"),
      unanswered: t("unanswered"),
    }),
    [t],
  );

  const preview = useMemo(() => buildDocumentMessage(values, labels), [values, labels]);

  /** Re-reads the whole form so the preview and progress stay live. */
  const syncValues = useCallback(() => {
    const form = formRef.current;
    if (!form) return;
    setValues(readDocumentFormData(new FormData(form)));
  }, []);

  // Defaults are applied on the client only: rendering today's date on the
  // server would produce a hydration mismatch across timezones.
  // Re-runs whenever a fresh form is started, so the new form gets the same
  // defaults as the first one.
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const today = toDateInputValue(new Date());
    const dateInput = form.elements.namedItem("date");
    const arrivalInput = form.elements.namedItem("arrivalDate");

    if (dateInput instanceof HTMLInputElement && !dateInput.value) dateInput.value = today;
    if (arrivalInput instanceof HTMLInputElement) arrivalInput.min = today;

    syncValues();
  }, [syncValues, dismissedAt]);

  // Runs exactly once per submission (guarded by the action's timestamp).
  useEffect(() => {
    if (state.status === "idle" || handledRef.current === state.submittedAt) return;
    handledRef.current = state.submittedAt;

    if (state.status === "error") {
      errorRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (!state.values) return;

    const url = buildWhatsAppUrl(buildDocumentMessage(state.values, labels));
    // If the browser blocks the popup the success panel surfaces a manual link.
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    setAutoOpenBlocked(!opened);
  }, [state, labels]);

  const completed = countCompletedSteps(values);
  const total = countTotalSteps(values);

  const fieldError = (name: DocumentFieldName): string | undefined => {
    const code = state.fieldErrors[name];
    return code ? t(`errors.${code}`) : undefined;
  };

  const hasFieldError = (name: DocumentFieldName): boolean => Boolean(state.fieldErrors[name]);

  const problemCount = Object.keys(state.fieldErrors).length + state.unansweredQuestions.length;

  const isSuccess =
    state.status === "success" && Boolean(state.values) && state.submittedAt !== dismissedAt;

  if (isSuccess && state.values) {
    const successMessage = buildDocumentMessage(state.values, labels);

    return (
      <SuccessPanel
        title={t("successTitle")}
        description={t("successDescription")}
        previewLabel={t("previewLabel")}
        message={successMessage}
        whatsappUrl={buildWhatsAppUrl(successMessage)}
        openLabel={t("openWhatsapp")}
        copyLabel={t("copy")}
        copiedLabel={t("copied")}
        newFormLabel={t("newForm")}
        autoOpenBlocked={autoOpenBlocked}
        blockedLabel={t("popupBlocked")}
        onNewForm={() => {
          // Clear everything the previous submission left behind; the form
          // element itself remounts empty, so state has to catch up.
          setValues(emptyDocumentValues(questions));
          setAutoOpenBlocked(false);
          setShowPreview(false);
          setDismissedAt(state.submittedAt);
        }}
      />
    );
  }

  return (
    <form ref={formRef} action={formAction} onChange={syncValues} className="doc-form">
      {state.status === "error" && problemCount > 0 && (
        <div ref={errorRef}>
          <Alert
            color="d"
            variant="soft"
            title={t("errorTitle")}
            message={t("errorSummary", { count: problemCount })}
            aria-live="polite"
          />
        </div>
      )}

      <Paper flow="3" p="4" corner="3" background="B3" border className="doc-progress">
        <Flex items="center" justify="between" gap="3">
          <Text as="p" size="3" weight="6">
            {t("progressTitle")}
          </Text>
          <Text as="p" size="2" color="b" low>
            {t("progressCount", { completed, total })}
          </Text>
        </Flex>
        <ProgressBar
          label={t("progressTitle")}
          value={completed}
          max={total}
          color="p"
          size="3"
          corner="3"
        />
      </Paper>

      <Paper as="fieldset" flow="4" p="5" corner="3" border className="doc-section">
        <legend className="doc-section__legend">
          <span className="doc-section__step" aria-hidden="true">
            <User width="16" />
          </span>
          <Text as="span" size="4" weight="6">
            {t("detailsHeading")}
          </Text>
        </legend>

        <Grid cols={{ default: "1fr", md: "repeat(2, minmax(0, 1fr))" }} gap="4">
          <FormController label={t("fullName")} required error={fieldError("fullName")}>
            <Input
              name="fullName"
              placeholder={t("fullName")}
              autoComplete="name"
              prefixInput={<User width="18" />}
              isInvalid={hasFieldError("fullName")}
              required
            />
          </FormController>

          <FormController label={t("age")} required error={fieldError("age")}>
            <Input
              name="age"
              type="number"
              inputMode="numeric"
              min={1}
              max={120}
              placeholder={t("age")}
              isInvalid={hasFieldError("age")}
              required
            />
          </FormController>

          <FormController label={t("arrivalDate")} required error={fieldError("arrivalDate")}>
            <Input
              name="arrivalDate"
              type="date"
              prefixInput={<Calendar width="18" />}
              isInvalid={hasFieldError("arrivalDate")}
              required
            />
          </FormController>

          <FormController label={t("hotel")} required error={fieldError("hotel")}>
            <Input
              name="hotel"
              placeholder={t("hotel")}
              autoComplete="address-line1"
              prefixInput={<Building width="18" />}
              isInvalid={hasFieldError("hotel")}
              required
            />
          </FormController>

          <div className="doc-field-wide">
            <FormController label={t("phone")} required error={fieldError("phone")}>
              <Input
                name="phone"
                type="tel"
                inputMode="tel"
                placeholder={t("phonePlaceholder")}
                autoComplete="tel"
                prefixInput={<Phone width="18" />}
                isInvalid={hasFieldError("phone")}
                required
              />
            </FormController>
          </div>
        </Grid>
      </Paper>

      <Paper as="fieldset" flow="4" p="5" corner="3" border className="doc-section">
        <legend className="doc-section__legend">
          <span className="doc-section__step" aria-hidden="true">
            <Heart width="16" />
          </span>
          <Text as="span" size="4" weight="6">
            {t("healthHeading")}
          </Text>
        </legend>

        <Text as="p" size="2" color="b" low>
          {t("healthHint")}
        </Text>

        <Paper flow="3" as="div">
          {questions.map((question, index) => (
            <QuestionCard
              key={question}
              index={index}
              question={question}
              yesLabel={t("yes")}
              noLabel={t("no")}
              hasError={state.unansweredQuestions.includes(index)}
              errorLabel={t("errors.answerAllQuestions")}
            />
          ))}
        </Paper>
      </Paper>

      <Paper as="fieldset" flow="4" p="5" corner="3" border className="doc-section">
        <legend className="doc-section__legend">
          <span className="doc-section__step" aria-hidden="true">
            <Shield width="16" />
          </span>
          <Text as="span" size="4" weight="6">
            {t("consentHeading")}
          </Text>
        </legend>

        <ul className="doc-consent__list">
          {consentPoints.map((point) => (
            <li key={point} className="doc-consent__item">
              <Check width="16" strokeWidth="2.5" className="doc-consent__tick" />
              <Text as="span" size="3">
                {point}
              </Text>
            </li>
          ))}
        </ul>

        <label htmlFor="document-consent" className="doc-consent__check">
          <input
            type="checkbox"
            id="document-consent"
            name="consent"
            className="doc-consent__input"
            required
          />
          <span className="doc-consent__box" aria-hidden="true">
            <Check width="14" strokeWidth="3" />
          </span>
          <Text as="span" size="4" weight="5">
            {t("consentAgree")}
          </Text>
        </label>
        {hasFieldError("consent") && (
          <Text as="p" size="2" color="d">
            {fieldError("consent")}
          </Text>
        )}
      </Paper>

      <Paper flow="3" p="4" corner="3" background="B3" border className="doc-preview">
        <button
          type="button"
          className="doc-preview__toggle"
          onClick={() => setShowPreview((open) => !open)}
          aria-expanded={showPreview}
          aria-controls="document-preview"
        >
          <Text as="span" size="3" weight="6">
            {t("previewLabel")}
          </Text>
          <span
            className={`doc-preview__chevron${showPreview ? " doc-preview__chevron--open" : ""}`}
          >
            <ChevronDown width="18" />
          </span>
        </button>

        {showPreview && (
          <pre id="document-preview" className="doc-preview__body">
            {preview}
          </pre>
        )}
      </Paper>

      <Flex gap="4" items="center" justify="between" wrap className="doc-submit">
        <Text as="p" size="2" color="b" low className="doc-submit__note">
          {t("submitHint")}
        </Text>
        <Button
          type="submit"
          size="4"
          color="p"
          variant="solid"
          icon={<Send width="16" />}
          state={pending ? "loading" : "idle"}
          disabled={pending}
        >
          {pending ? t("submitting") : t("submit")}
        </Button>
      </Flex>

      <Flex gap="3" items="start" className="doc-disclaimer">
        <Shield width="18" className="doc-disclaimer__icon" />
        <Text as="p" size="2" color="b" low>
          {t("disclaimer")}
        </Text>
      </Flex>
    </form>
  );
};

export default DocumentForm;
