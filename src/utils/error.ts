import type { ActionResponse } from "@/types/actionResponse";

export function getFieldError(state: ActionResponse, fieldName: string): string | undefined {
  if (state.data && typeof state.data === "object" && fieldName in state.data) {
    const fieldErrors = state.data[fieldName as keyof typeof state.data];
    if (Array.isArray(fieldErrors) && (fieldErrors as string[]).length > 0) {
      return fieldErrors[0];
    }
  }
  return undefined;
}
