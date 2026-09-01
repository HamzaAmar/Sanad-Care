"use server";

import { z } from "zod/v4";
import type { DocumentErrorCode, DocumentFieldName, DocumentFormState } from "../document.type";
import { readDocumentFormData } from "../document.utils";

/**
 * Messages are error *codes* (see DocumentErrorCode) rather than sentences —
 * the client translates them in the patient's locale.
 */
const documentSchema = z.object({
  fullName: z.string().trim().min(1, "required").min(2, "tooShort"),
  age: z
    .string()
    .trim()
    .min(1, "required")
    .regex(/^\d{1,3}$/, "invalidAge")
    .refine((value) => Number(value) >= 1 && Number(value) <= 120, "invalidAge"),
  arrivalDate: z.string().trim().min(1, "required"),
  hotel: z.string().trim().min(1, "required").min(2, "tooShort"),
  phone: z
    .string()
    .trim()
    .min(1, "required")
    .min(6, "tooShort")
    .regex(/^[+\d][\d\s\-().]{5,}$/, "invalidPhone"),
});

const toErrorCode = (message: string): DocumentErrorCode =>
  (message as DocumentErrorCode) ?? "unexpected";

export const submitDocument = async (
  _state: DocumentFormState,
  formData: FormData,
): Promise<DocumentFormState> => {
  const values = readDocumentFormData(formData);
  const parsed = documentSchema.safeParse(values);

  const fieldErrors: Partial<Record<DocumentFieldName, DocumentErrorCode>> = {};

  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field !== "string") continue;

      const name = field as DocumentFieldName;
      // Keep the first (most specific) reason for each field.
      if (fieldErrors[name]) continue;

      fieldErrors[name] = toErrorCode(issue.message);
    }
  }

  const unansweredQuestions = values.answers.reduce<number[]>((missing, answer, index) => {
    if (answer === "-") missing.push(index);
    return missing;
  }, []);

  // The consent tick is not part of the text schema: an unchecked box is simply
  // absent from FormData, so it is checked explicitly.
  if (!values.consent) fieldErrors.consent = "consentRequired";

  if (Object.keys(fieldErrors).length > 0 || unansweredQuestions.length > 0) {
    return {
      status: "error",
      fieldErrors,
      unansweredQuestions,
      submittedAt: Date.now(),
    };
  }

  return {
    status: "success",
    fieldErrors: {},
    unansweredQuestions: [],
    values: { ...values, ...parsed.data },
    submittedAt: Date.now(),
  };
};
