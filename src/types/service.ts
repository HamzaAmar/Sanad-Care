interface PriceFrom {
  day?: number;
  week?: number;
  month?: number;
}

export interface NursingService {
  id: string;
  name: string;
  description: string;
  priceFrom: PriceFrom;
  included: string[];
  notIncluded: string[];
}
