import { PERSONAL_INFO } from "@/constants/personalInfo";
import type { AnswerValue, DocumentValues, MessageLabels } from "./document.type";

/**
 * Pure helpers shared by the client form (live preview) and the server action
 * (validation + final payload). Keeping them in one place guarantees the
 * preview the patient reads is identical to the message that gets sent.
 */

export const ANSWER_PREFIX = "q-";
export const LABEL_PREFIX = "q-label-";
export const UNANSWERED: AnswerValue = "-";

/** Text fields + the consent tick. Used to compute completion progress. */
const TEXT_FIELD_COUNT = 5;
const CONSENT_STEP_COUNT = 1;

const orDash = (value: string) => (value.trim() ? value : "-");

const readString = (formData: FormData, key: string): string => {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
};

const toAnswer = (value: FormDataEntryValue | null): AnswerValue =>
  value === "yes" ? "yes" : value === "no" ? "no" : UNANSWERED;

const collectQuestionIndices = (keys: Iterable<string>): number[] => {
  const indices = new Set<number>();

  for (const key of keys) {
    if (!key.startsWith(LABEL_PREFIX)) continue;
    const index = Number.parseInt(key.slice(LABEL_PREFIX.length), 10);
    if (Number.isInteger(index) && index >= 0) indices.add(index);
  }

  return [...indices].sort((a, b) => a - b);
};

/** Reads a submitted (or in-progress) form into a normalised value object. */
export const readDocumentFormData = (formData: FormData): DocumentValues => {
  const indices = collectQuestionIndices(formData.keys());

  return {
    questions: indices.map((index) => readString(formData, `${LABEL_PREFIX}${index}`)),
    answers: indices.map((index) => toAnswer(formData.get(`${ANSWER_PREFIX}${index}`))),
    fullName: readString(formData, "fullName"),
    age: readString(formData, "age"),
    arrivalDate: readString(formData, "arrivalDate"),
    hotel: readString(formData, "hotel"),
    phone: readString(formData, "phone"),
    consent: formData.get("consent") === "on",
  };
};

export const emptyDocumentValues = (questions: string[]): DocumentValues => ({
  questions,
  answers: questions.map(() => UNANSWERED),
  fullName: "",
  age: "",
  arrivalDate: "",
  hotel: "",
  phone: "",
  consent: false,
});

/**
 * Restores a normalised value object back into the live form controls.
 *
 * The form's inputs are uncontrolled, so on a normal (non-reset) re-render they
 * would keep their typed values — but writing them back explicitly guarantees
 * the entries survive a server-action submission that may reset the controls,
 * and keeps the live preview / progress in sync after a validation error.
 */
export const writeDocumentFormData = (form: HTMLFormElement, values: DocumentValues): void => {
  const setText = (name: string, value: string) => {
    const el = form.elements.namedItem(name);
    if (el instanceof HTMLInputElement) el.value = value;
  };

  setText("fullName", values.fullName);
  setText("age", values.age);
  setText("arrivalDate", values.arrivalDate);
  setText("hotel", values.hotel);
  setText("phone", values.phone);

  const consentEl = form.elements.namedItem("consent");
  if (consentEl instanceof HTMLInputElement) consentEl.checked = values.consent;

  values.answers.forEach((answer, index) => {
    const group = form.elements.namedItem(`${ANSWER_PREFIX}${index}`);
    if (group instanceof RadioNodeList) group.value = answer === UNANSWERED ? "" : answer;
  });
};

export const buildDocumentMessage = (values: DocumentValues, labels: MessageLabels): string => {
  const answerLabel = (answer: AnswerValue | undefined) => {
    if (answer === "yes") return labels.yes;
    if (answer === "no") return labels.no;
    return labels.unanswered;
  };

  const lines: string[] = [
    `*${labels.title}*`,
    "",
    `${labels.fullName}: ${orDash(values.fullName)}`,
    `${labels.age}: ${orDash(values.age)}`,
    `${labels.arrivalDate}: ${orDash(values.arrivalDate)}`,
    `${labels.hotel}: ${orDash(values.hotel)}`,
    `${labels.phone}: ${orDash(values.phone)}`,
    "",
    `${labels.healthHeading}:`,
    ...values.questions.map(
      (question, index) => `${index + 1}. ${question} -> ${answerLabel(values.answers[index])}`,
    ),
  ];

  return lines.join("\n");
};

export const buildWhatsAppUrl = (message: string): string =>
  `${PERSONAL_INFO.contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const countCompletedSteps = (values: DocumentValues): number => {
  const filledText = [
    values.fullName,
    values.age,
    values.arrivalDate,
    values.hotel,
    values.phone,
  ].filter((value) => value.trim().length > 0).length;

  const answered = values.answers.filter((answer) => answer !== UNANSWERED).length;

  return filledText + answered + (values.consent ? 1 : 0);
};

export const countTotalSteps = (values: DocumentValues): number =>
  values.questions.length + TEXT_FIELD_COUNT + CONSENT_STEP_COUNT;
