/**
 * Shared types for the pre-travel health questionnaire.
 * Plain module (no "use client" / "use server") so it can be imported from both sides.
 */

export type AnswerValue = "yes" | "no" | "-";

export type DocumentValues = {
  questions: string[];
  answers: AnswerValue[];
  fullName: string;
  age: string;
  arrivalDate: string;
  hotel: string;
  phone: string;
  consent: boolean;
};

export type DocumentFieldName = "fullName" | "age" | "arrivalDate" | "hotel" | "phone" | "consent";

/**
 * Validation failures travel as codes (not sentences) so the client can
 * translate them in the active locale.
 */
export type DocumentErrorCode =
  | "required"
  | "tooShort"
  | "tooLong"
  | "invalidAge"
  | "invalidPhone"
  | "consentRequired"
  | "answerAllQuestions"
  | "unexpected";

export type DocumentFormState = {
  status: "idle" | "success" | "error";
  /** Field name -> why it failed. Empty when the submission is valid. */
  fieldErrors: Partial<Record<DocumentFieldName, DocumentErrorCode>>;
  /** Indexes of health questions left blank. */
  unansweredQuestions: number[];
  /** Echoed back on success so the client can build the WhatsApp message. */
  values?: DocumentValues;
  /** Timestamp of this submission, used to run effects exactly once per submit. */
  submittedAt: number;
};

/** Labels used when rendering the outgoing WhatsApp message. */
export type MessageLabels = {
  title: string;
  fullName: string;
  age: string;
  arrivalDate: string;
  hotel: string;
  phone: string;
  healthHeading: string;
  consentHeading: string;
  agreed: string;
  yes: string;
  no: string;
  unanswered: string;
};
