interface PriceFrom {
  day?: number;
  week?: number;
  month?: number;
}

export interface Lang {
  en: string;
  fr: string;
  ar: string;
}

/** A value authored once per locale. */
export type LocalizedText = Lang;

/** A list authored once per locale. */
export interface LocalizedArray {
  en: string[];
  fr: string[];
  ar: string[];
}

export interface ServiceItem {
  id: string;
  name: Lang;
}

export interface NursingService {
  id: string;
  name: Lang;
  description: Lang;
  priceFrom: PriceFrom;
  included: string[];
  notIncluded: string[];
}

export interface NursingServiceFinale extends Omit<NursingService, "name" | "description"> {
  name: string;
  description: string;
}

/** Stable ids for the clinical procedures in `prestationsInfirmieres`. */
export type ProcedureId =
  | "standard-nursing-visit"
  | "blood-sampling"
  | "simple-dressing"
  | "complex-dressing"
  | "im-injection"
  | "sc-injection"
  | "iv-infusion"
  | "stitch-removal"
  | "glucose-insulin"
  | "home-vaccination"
  | "cardio-monitoring";

/**
 * Monthly care plans. Attached to services by id, so a service's
 * "monthly plan available" state is derived from its packs rather than kept
 * as a separate boolean that can drift.
 */
export type PackId = "essential" | "suivi" | "intensif" | "vip";

export interface Pack {
  id: PackId;
  /** "Suivi" and "Intensif" are product names; Arabic uses its own. */
  name: LocalizedText;
  tagline: LocalizedText;
  /** Per month, in Moroccan dirhams. */
  priceMad: number;
  visitsPerMonth: number;
  features: LocalizedArray;
  featured?: boolean;
}
