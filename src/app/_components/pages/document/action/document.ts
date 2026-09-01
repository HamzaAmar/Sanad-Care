"use server";

import type { DocumentFormState } from "../document.type";
import { readDocumentFormData } from "../document.utils";
import { validateDocument } from "../document.validation";

/**
 * Validates the submitted questionnaire and echoes the normalised values back
 * on success so the client can build + open the WhatsApp message. Validation
 * rules live in `document.validation` and are shared with the client.
 */
export const submitDocument = async (
  _state: DocumentFormState,
  formData: FormData,
): Promise<DocumentFormState> => {
  const values = readDocumentFormData(formData);
  const { ok, fieldErrors, unansweredQuestions } = validateDocument(values);

  if (!ok) {
    return {
      status: "error",
      fieldErrors,
      unansweredQuestions,
      values,
      submittedAt: Date.now(),
    };
  }

  return {
    status: "success",
    fieldErrors: {},
    unansweredQuestions: [],
    values,
    submittedAt: Date.now(),
  };
};
