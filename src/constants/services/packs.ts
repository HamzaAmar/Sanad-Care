import type { Pack, PackId } from "@/types/service";

/**
 * The monthly care plans.
 *
 * These were previously stranded in `service.data.tsx` as `plansByLocale` —
 * defined but imported by nothing, with the Arabic array still in English.
 * They now live here, are attached to services by id, and are fully
 * translated.
 *
 * Prices are per month in MAD and match what the business already published.
 */
export const PACKS: Record<PackId, Pack> = {
  essential: {
    id: "essential",
    name: { en: "Essential", fr: "Essential", ar: "أساسي" },
    tagline: {
      en: "Confident basics for stable day-to-day care.",
      fr: "Les fondamentaux rassurants pour un suivi stable.",
      ar: "الأساسيات المطمئنة لرعاية يومية مستقرة.",
    },
    priceMad: 1490,
    visitsPerMonth: 2,
    features: {
      en: [
        "2 scheduled nurse visits each month",
        "Medication reminders and organization",
        "Basic vitals review",
        "Care note after every visit",
      ],
      fr: [
        "2 visites infirmières planifiées par mois",
        "Rappel et organisation des médicaments",
        "Contrôle de base des constantes",
        "Compte rendu après chaque visite",
      ],
      ar: [
        "زيارتان مبرمجتان للممرض شهرياً",
        "تذكير وتنظيم الأدوية",
        "مراجعة أساسية للعلامات الحيوية",
        "تقرير رعاية بعد كل زيارة",
      ],
    },
  },

  suivi: {
    id: "suivi",
    name: { en: "Suivi", fr: "Suivi", ar: "متابعة" },
    tagline: {
      en: "The balanced plan for ongoing professional monitoring.",
      fr: "La formule équilibrée pour une surveillance continue.",
      ar: "الخطة المتوازنة للمتابعة المهنية المستمرة.",
    },
    priceMad: 2490,
    visitsPerMonth: 4,
    featured: true,
    features: {
      en: [
        "4 nurse visits per month",
        "Weekly medication and symptom tracking",
        "Family reporting included",
        "Fast WhatsApp nurse coordination",
        "Priority scheduling for urgent needs",
      ],
      fr: [
        "4 visites infirmières par mois",
        "Suivi hebdomadaire des médicaments et des symptômes",
        "Compte rendu à la famille inclus",
        "Coordination rapide avec l'infirmier via WhatsApp",
        "Priorité de planification en cas de besoin urgent",
      ],
      ar: [
        "4 زيارات تمريضية شهرياً",
        "متابعة أسبوعية للأدوية والأعراض",
        "تقرير للعائلة مشمول",
        "تنسيق سريع مع الممرض عبر واتساب",
        "أولوية في الجدولة عند الحاجة المستعجلة",
      ],
    },
  },

  intensif: {
    id: "intensif",
    name: { en: "Intensif", fr: "Intensif", ar: "مكثف" },
    tagline: {
      en: "Closer clinical supervision for complex recovery.",
      fr: "Une supervision clinique renforcée pour la récupération.",
      ar: "إشراف تمريضي أقرب لحالات التعافي المعقّدة.",
    },
    priceMad: 3790,
    visitsPerMonth: 8,
    features: {
      en: [
        "8 nurse visits per month",
        "Advanced recovery and wound monitoring",
        "Coordination with the treating physician",
        "Detailed family health updates",
        "Same-day response support",
      ],
      fr: [
        "8 visites infirmières par mois",
        "Surveillance avancée du rétablissement et des pansements",
        "Coordination avec le médecin traitant",
        "Mises à jour détaillées à la famille",
        "Réponse le jour même si besoin",
      ],
      ar: [
        "8 زيارات تمريضية شهرياً",
        "متابعة متقدمة للتعافي والجروح",
        "تنسيق مع الطبيب المعالج",
        "تحديثات صحية مفصّلة للعائلة",
        "دعم استجابة في نفس اليوم",
      ],
    },
  },

  vip: {
    id: "vip",
    name: { en: "VIP", fr: "VIP", ar: "VIP" },
    tagline: {
      en: "Maximum oversight and continuity for families who want it.",
      fr: "Un accompagnement maximal pour les familles qui le souhaitent.",
      ar: "إشراف واستمرارية بأقصى درجة للعائلات التي ترغب بذلك.",
    },
    priceMad: 5490,
    visitsPerMonth: 12,
    features: {
      en: [
        "Dedicated lead nurse oversight",
        "High-priority home interventions",
        "Enhanced family communication",
        "Lifestyle and recovery planning",
        "Priority coordination with doctors",
      ],
      fr: [
        "Supervision par un infirmier référent dédié",
        "Interventions à domicile hautement prioritaires",
        "Communication renforcée avec la famille",
        "Planification du confort et du rétablissement",
        "Coordination prioritaire avec les médecins",
      ],
      ar: [
        "إشراف ممرض رئيسي مخصّص",
        "تدخلات منزلية بأولوية عالية",
        "تواصل معزّز مع العائلة",
        "تخطيط للراحة والتعافي",
        "تنسيق ذو أولوية مع الأطباء",
      ],
    },
  },
};

export const PACK_ORDER: PackId[] = ["essential", "suivi", "intensif", "vip"];

export const getPacks = (ids: PackId[]): Pack[] =>
  PACK_ORDER.filter((id) => ids.includes(id)).map((id) => PACKS[id]);
