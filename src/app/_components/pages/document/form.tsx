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
  Copy,
  Heart,
  Phone,
  Send,
  Shield,
  User,
  Whatsapp,
  X,
} from "@pillar-ui/icons";
import { useTranslations } from "next-intl";
import { useActionState, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { submitDocument } from "./action/document";
import QuestionCard from "./components/question-card";
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
  writeDocumentFormData,
} from "./document.utils";
import { validateDocument } from "./document.validation";

const initialState: DocumentFormState = {
  status: "idle",
  fieldErrors: {},
  unansweredQuestions: [],
  submittedAt: 0,
};

type SendResult = { url: string; opened: boolean };

/** `YYYY-MM-DD` in the visitor's own timezone (toISOString would shift the day). */
const toDateInputValue = (date: Date): string =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate(),
  ).padStart(2, "0")}`;

const DocumentForm = ({ questions }: { questions: string[] }) => {
  const t = useTranslations("document");
  const consentPoints = [t("consentItem1"), t("consentItem2"), t("consentItem3")];

  const formRef = useRef<HTMLFormElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const handledRef = useRef(0);

  const [values, setValues] = useState<DocumentValues>(() => emptyDocumentValues(questions));
  const [showPreview, setShowPreview] = useState(false);
  const [dismissedAt, setDismissedAt] = useState(0);
  const [sendResult, setSendResult] = useState<SendResult | null>(null);
  const [copied, setCopied] = useState(false);

  const [state, formAction, pending] = useActionState(submitDocument, initialState);

  const copyTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    const arrivalInput = form.elements.namedItem("arrivalDate");

    if (arrivalInput instanceof HTMLInputElement) arrivalInput.min = today;

    syncValues();
  }, [syncValues, dismissedAt]);

  // Runs exactly once per submission (guarded by the action's timestamp).
  // WhatsApp is opened by the submit handler below — inside the click gesture —
  // so by the time this runs the new tab is already open. Here we only reset the
  // form back to a clean state (the "same page" the visitor started from).
  useEffect(() => {
    if (state.status === "idle" || handledRef.current === state.submittedAt) return;
    handledRef.current = state.submittedAt;

    if (state.status === "error") {
      // Keep the visitor's entries intact after a validation error: re-sync our
      // React state with the values the server echoed back, and write them onto
      // the actual form controls so the typed data is guaranteed to survive
      // (the live preview + progress bar stay accurate, and the inputs are never
      // reset). This is the "persist fields on error" behaviour.
      if (state.values) {
        setValues(state.values);
        if (formRef.current) writeDocumentFormData(formRef.current, state.values);
      }
      errorRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (!state.values) return;

    // Return the visitor to a fresh form, ready for the next submission.
    // `sendResult` is left exactly as the click handler set it (so a blocked
    // popup still shows the manual fallback rather than a false "opened").
    setShowPreview(false);
    setValues(emptyDocumentValues(questions));
    setDismissedAt(state.submittedAt);
    formRef.current?.reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [state, questions]);

  // The "opened" confirmation disappears on its own; the blocked fallback stays
  // until the visitor opens WhatsApp or dismisses it manually.
  useEffect(() => {
    if (!sendResult || !sendResult.opened) return;
    const id = setTimeout(() => setSendResult(null), 12000);
    return () => clearTimeout(id);
  }, [sendResult]);

  useEffect(
    () => () => {
      if (copyTimeout.current) clearTimeout(copyTimeout.current);
    },
    [],
  );

  const handleCopy = useCallback(async () => {
    if (!sendResult) return;
    try {
      await navigator.clipboard.writeText(sendResult.url);
      setCopied(true);
      if (copyTimeout.current) clearTimeout(copyTimeout.current);
      copyTimeout.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard unavailable — the link above still works.
    }
  }, [sendResult]);

  /**
   * Fired synchronously inside the click gesture. We validate on the client,
   * build the WhatsApp link, and open it right away — no extra "send" step for
   * the visitor. The form then submits to the server action for the authoritative
   * check and to reset the form.
   */
  const handleSubmit = () => {
    const form = formRef.current;
    if (!form) return;

    const current = readDocumentFormData(new FormData(form));
    const result = validateDocument(current);

    if (!result.ok) {
      // Invalid: don't open WhatsApp. The server action will surface the errors.
      return;
    }

    const url = buildWhatsAppUrl(buildDocumentMessage(current, labels));
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    setSendResult({ url, opened: Boolean(opened) });
  };

  const completed = countCompletedSteps(values);
  const total = countTotalSteps(values);

  const fieldError = (name: DocumentFieldName): string | undefined => {
    const code = state.fieldErrors[name];
    return code ? t(`errors.${code}`) : undefined;
  };

  const hasFieldError = (name: DocumentFieldName): boolean => Boolean(state.fieldErrors[name]);

  const problemCount = Object.keys(state.fieldErrors).length + state.unansweredQuestions.length;

  return (
    <form
      ref={formRef}
      action={formAction}
      onChange={syncValues}
      onSubmit={handleSubmit}
      noValidate
      className="doc-form"
    >
      {sendResult && (
        <Paper
          as="section"
          flow="3"
          p="4"
          corner="3"
          border
          background={sendResult.opened ? "Su3" : "W4"}
          className="doc-send-banner"
          aria-live="polite"
        >
          <button
            type="button"
            className="doc-send-banner__close"
            onClick={() => setSendResult(null)}
            aria-label={t("dismiss")}
          >
            <X width="16" />
          </button>

          {sendResult.opened ? (
            <>
              <Text as="p" size="3" weight="6">
                {t("whatsappOpenedTitle")}
              </Text>
              <Text as="p" size="3" color="b" low>
                {t("whatsappOpened")}
              </Text>
            </>
          ) : (
            <>
              <Text as="p" size="3" weight="6">
                {t("popupBlockedTitle")}
              </Text>
              <Text as="p" size="3" color="b" low>
                {t("popupBlocked")}
              </Text>
              <Flex gap="3" wrap className="doc-send-banner__actions">
                <Button
                  as="a"
                  href={sendResult.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="3"
                  color="su"
                  variant="solid"
                  icon={<Whatsapp stroke="currentColor" />}
                >
                  {t("openWhatsapp")}
                </Button>
                <Button
                  type="button"
                  variant="soft"
                  color="p"
                  size="3"
                  icon={copied ? <Check width="16" /> : <Copy width="16" />}
                  onClick={handleCopy}
                >
                  {copied ? t("copied") : t("copy")}
                </Button>
              </Flex>
            </>
          )}
        </Paper>
      )}

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
