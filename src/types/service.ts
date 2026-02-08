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
