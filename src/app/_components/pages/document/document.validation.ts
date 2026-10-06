import { z } from "zod/v4";
import type { DocumentErrorCode, DocumentFieldName, DocumentValues } from "./document.type";

/**
 * Single source of truth for validation, shared by the client (to decide
 * whether it is safe to open WhatsApp inside the click gesture) and the server
 * action (authoritative check + translatable error codes).
 */
export const documentSchema = z.object({
  fullName: z.string().trim().min(1, "required").min(2, "tooShort").max(100, "tooLong"),
  age: z
    .string()
    .trim()
    .min(1, "required")
    .regex(/^\d{1,3}$/, "invalidAge")
    .refine((value) => Number(value) >= 1 && Number(value) <= 120, "invalidAge"),
  arrivalDate: z.string().trim().min(1, "required").max(30, "tooLong"),
  hotel: z.string().trim().min(1, "required").min(2, "tooShort").max(150, "tooLong"),
  phone: z
    .string()
    .trim()
    .min(1, "required")
    .min(6, "tooShort")
    .max(30, "tooLong")
    .regex(/^[+\d][\d\s\-().]{5,}$/, "invalidPhone"),
});

export type DocumentValidationResult = {
  ok: boolean;
  fieldErrors: Partial<Record<DocumentFieldName, DocumentErrorCode>>;
  unansweredQuestions: number[];
};

export const validateDocument = (values: DocumentValues): DocumentValidationResult => {
  const fieldErrors: Partial<Record<DocumentFieldName, DocumentErrorCode>> = {};

  const parsed = documentSchema.safeParse(values);
  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field !== "string") continue;

      const name = field as DocumentFieldName;
      // Keep the first (most specific) reason for each field.
      if (fieldErrors[name]) continue;
      fieldErrors[name] = (issue.message as DocumentErrorCode) ?? "unexpected";
    }
  }

  const unansweredQuestions = values.answers.reduce<number[]>((missing, answer, index) => {
    if (answer === "-") missing.push(index);
    return missing;
  }, []);

  // The consent tick is not part of the text schema: an unchecked box is simply
  // absent from FormData, so it is checked explicitly.
  if (!values.consent) fieldErrors.consent = "consentRequired";

  const ok = Object.keys(fieldErrors).length === 0 && unansweredQuestions.length === 0;

  return { ok, fieldErrors, unansweredQuestions };
};
