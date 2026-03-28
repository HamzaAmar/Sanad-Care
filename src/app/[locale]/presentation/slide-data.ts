import type { PitchIconId } from "./core/pitch-icons";

export type SlideSection =
  | { type: "p"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "numbered"; items: string[] }
  | { type: "highlight"; text: string }
  | { type: "stats"; items: { value: string; label: string }[] }
  | { type: "cards"; items: { icon: PitchIconId; title: string; body: string }[] }
  | { type: "flow"; items: { icon: PitchIconId; label: string }[] }
  | {
      type: "revenue";
      items: { icon: PitchIconId; title: string; subtitle: string; badge: string }[];
    };

export interface SlideConfig {
  chapter: string;
  navTitle: string;
  variant: "cover" | "content" | "closing";
  heading?: string;
  tagline?: string;
  label?: string;
  sections: SlideSection[];
}

export const SLIDE_DEFS: SlideConfig[] = [
  {
    chapter: "Introduction",
    navTitle: "Titre",
    variant: "cover",
    tagline: "Structurer les soins à domicile",
    sections: [
      {
        type: "stats",
        items: [
          { value: "2,7M+", label: "adultes diabétiques (MA)" },
          { value: "4,2M", label: "projection 2050" },
          { value: ">50%", label: "amputations liées au diabète" },
        ],
      },
      {
        type: "p",
        text: "Une solution de suivi et de coordination qui transforme la prise en charge des patients chroniques à domicile en un parcours continu, traçable et mieux piloté.",
      },
    ],
  },
  {
    chapter: "Problème",
    navTitle: "Le problème",
    variant: "content",
    heading: "Le problème",
    sections: [
      {
        type: "p",
        text: "Au Maroc, les soins à domicile restent encore peu structurés.",
      },
      {
        type: "p",
        text: "Dans la pratique, le patient reçoit souvent une intervention ponctuelle, sans protocole homogène, sans suivi régulier et sans coordination claire entre les différents intervenants.",
      },
      {
        type: "p",
        text: "Le vrai problème n’est pas l’absence de soins.",
      },
      {
        type: "highlight",
        text: "C’est l’absence de continuité et de structure.",
      },
    ],
  },
  {
    chapter: "Problème",
    navTitle: "Pourquoi c’est critique",
    variant: "content",
    heading: "Pourquoi c’est critique",
    sections: [
      {
        type: "bullets",
        items: [
          "Le Maroc compte plus de 2,7 millions d’adultes diabétiques, avec une projection à 4,2 millions en 2050.",
          "Environ 6 à 7 % des patients diabétiques développeront une complication du pied au cours de leur vie.",
          "Dans certaines études marocaines, le diabète représente plus de 50 % des causes d’amputation.",
          "Le vieillissement de la population augmente la demande en suivi à domicile.",
          "Aujourd’hui, la prise en charge reste souvent fragmentée et insuffisamment suivie.",
        ],
      },
      {
        type: "highlight",
        text: "Résultat : des complications évitables deviennent des complications graves et coûteuses.",
      },
    ],
  },
  {
    chapter: "Solution",
    navTitle: "Notre solution",
    variant: "content",
    heading: "Notre solution",
    sections: [
      { type: "p", text: "Sanad Care structure les soins à domicile." },
      {
        type: "p",
        text: "Nous ne proposons pas seulement une visite infirmière — nous mettons en place un système complet de prise en charge.",
      },
      {
        type: "cards",
        items: [
          { icon: "clipboard", title: "Protocoles", body: "Standards homogènes pour chaque parcours." },
          { icon: "chartLine", title: "Suivi continu", body: "Visibilité sur l’évolution du patient." },
          { icon: "users", title: "Coordination", body: "Infirmiers, médecins et familles alignés." },
          { icon: "listCheck", title: "Traçabilité", body: "Chaque acte documenté, exploitable." },
          { icon: "bell", title: "Alertes", body: "Signaux précoces à partir des données." },
        ],
      },
      {
        type: "p",
        text: "Nous faisons passer le soin d’un acte isolé à un parcours organisé.",
      },
    ],
  },
  {
    chapter: "Solution",
    navTitle: "Fonctionnement",
    variant: "content",
    heading: "Fonctionnement",
    sections: [
      {
        type: "flow",
        items: [
          { icon: "search", label: "Évaluation initiale" },
          { icon: "checkList", label: "Protocole adapté" },
          { icon: "calendar", label: "Planification" },
          { icon: "heartMonitor", label: "Suivi & observance" },
          { icon: "fileText", label: "Documentation" },
          { icon: "circleWarning", label: "Détection des risques" },
          { icon: "messages", label: "Communication proches & pros" },
        ],
      },
      { type: "p", text: "Chaque patient devient suivi." },
      { type: "p", text: "Chaque suivi devient exploitable." },
    ],
  },
  {
    chapter: "Solution",
    navTitle: "Proposition de valeur",
    variant: "content",
    heading: "Proposition de valeur",
    sections: [
      {
        type: "p",
        text: "Pour les familles qui ont un patient chronique à domicile et qui subissent des soins fragmentés, Sanad Care apporte un suivi fiable, coordonné et structuré, avec plus de visibilité sur l’évolution du patient et moins d’incertitude au quotidien.",
      },
      {
        type: "p",
        text: "Contrairement aux solutions informelles, notre approche repose sur un protocole, une traçabilité et une continuité.",
      },
    ],
  },
  {
    chapter: "Marché",
    navTitle: "Clients cibles",
    variant: "content",
    heading: "Clients cibles",
    sections: [
      { type: "p", text: "Nos clients prioritaires sont :" },
      {
        type: "bullets",
        items: [
          "les familles avec patients chroniques à domicile",
          "les patients post-hospitalisation",
          "les personnes âgées vivant à domicile",
          "les patients à risque : diabète, hypertension, insuffisance rénale, plaies chroniques",
        ],
      },
      {
        type: "p",
        text: "Nous ciblons les situations où le manque de suivi a un impact direct sur la santé.",
      },
    ],
  },
  {
    chapter: "Marché",
    navTitle: "Business model",
    variant: "content",
    heading: "Business Model",
    sections: [
      {
        type: "p",
        text: "Notre modèle économique repose sur trois sources de revenus :",
      },
      {
        type: "revenue",
        items: [
          {
            icon: "home",
            title: "Abonnement B2C",
            subtitle: "Mensuel pour les familles, accès au suivi structuré.",
            badge: "Récurrent",
          },
          {
            icon: "cash",
            title: "Commission",
            subtitle: "Par service ou intervention réalisée sur la plateforme.",
            badge: "À l’acte",
          },
          {
            icon: "building",
            title: "Partenariats",
            subtitle: "Cliniques, assurances, associations — B2B / B2B2C.",
            badge: "Scale",
          },
        ],
      },
      {
        type: "p",
        text: "Un modèle simple, progressif et adapté au marché.",
      },
    ],
  },
  {
    chapter: "Marché",
    navTitle: "Avantage concurrentiel",
    variant: "content",
    heading: "Avantage concurrentiel",
    sections: [
      {
        type: "p",
        text: "Les autres proposent une intervention.",
      },
      { type: "p", text: "Sanad Care propose un système." },
      { type: "p", text: "Nos différenciateurs :" },
      {
        type: "cards",
        items: [
          { icon: "clipboard", title: "Protocoles", body: "Standardisés, reproductibles." },
          { icon: "repeat", title: "Continuité", body: "Suivi dans la durée, pas ponctuel." },
          { icon: "globe", title: "Coordination", body: "Tous les acteurs sur le même fil." },
          { icon: "database", title: "Digital", body: "Traçabilité et preuves de suivi." },
          { icon: "shield", title: "Prévention", body: "Anticiper, pas seulement corriger." },
        ],
      },
      {
        type: "p",
        text: "Nous ne remplaçons pas le soignant.",
      },
      {
        type: "p",
        text: "Nous structurons son travail pour en améliorer l’impact.",
      },
    ],
  },
  {
    chapter: "Exécution",
    navTitle: "Équipe",
    variant: "content",
    heading: "Équipe",
    sections: [
      { type: "p", text: "Notre équipe réunit :" },
      {
        type: "cards",
        items: [
          {
            icon: "stethoscope",
            title: "Terrain infirmier",
            body: "Expérience directe des soins chroniques et du domicile.",
          },
          {
            icon: "settings",
            title: "Tech & gestion",
            body: "Produit, structuration des partenariats et exécution.",
          },
        ],
      },
      {
        type: "p",
        text: "Une équipe qui connaît le problème de terrain et sait le transformer en solution concrète.",
      },
    ],
  },
  {
    chapter: "Exécution",
    navTitle: "Traction",
    variant: "content",
    heading: "Traction",
    sections: [
      { type: "p", text: "Déjà réalisés :" },
      {
        type: "bullets",
        items: [
          "conception des premiers protocoles",
          "structuration du parcours patient",
          "définition du besoin terrain",
          "retours positifs sur la pertinence du problème adressé",
        ],
      },
      {
        type: "p",
        text: "Nous avançons à partir d’un besoin réel, pas d’une hypothèse abstraite.",
      },
    ],
  },
  {
    chapter: "Clôture",
    navTitle: "Conclusion",
    variant: "content",
    heading: "Conclusion",
    sections: [
      {
        type: "p",
        text: "Aujourd’hui, les soins à domicile reposent encore trop sur l’individu.",
      },
      {
        type: "p",
        text: "Demain, ils doivent reposer sur un système.",
      },
      {
        type: "highlight",
        text: "Sanad Care construit ce système pour améliorer la qualité des soins, réduire les complications et rassurer les familles.",
      },
    ],
  },
  {
    chapter: "Clôture",
    navTitle: "Phrase clé",
    variant: "closing",
    label: "Phrase de clôture à retenir",
    sections: [
      {
        type: "p",
        text: "Le problème n’est pas de soigner à domicile.",
      },
      {
        type: "p",
        text: "Le problème est de soigner à domicile sans système.",
      },
    ],
  },
];

export const SLIDES = SLIDE_DEFS.map((s) => ({
  chapter: s.chapter,
  title: s.navTitle,
}));
