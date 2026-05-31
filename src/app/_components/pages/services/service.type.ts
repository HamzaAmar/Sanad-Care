import { ReactNode } from "react";

export interface ServiceLocaleContent {
  badge: string;
  title: string;
  subtitle: string;
  trustIndicators: string[];
  comparisonTitle: string;
  comparisonSubtitle: string;
  comparisonFeatures: string[];
  trustTitle: string;
  trustSubtitle: string;
  faqTitle: string;
  faqSubtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  monthLabel: string;
  trustNoteLabel: string;
  popularLabel: string;
  comparisonIncluded: string;
  comparisonKicker: string;
  faqKicker: string;
  featureColumnLabel: string;
};

export interface Plan {
  name: string;
  tagline: string;
  price: string;
  trustNote: string;
  features: string[];
  featured?: boolean;
  icon: ReactNode;
  comparison: boolean[];
};

export interface TrustCard {
  title: string;
  description: string;
  icon: ReactNode;
};

export interface FaqItem {
  question: string;
  answer: string;
};