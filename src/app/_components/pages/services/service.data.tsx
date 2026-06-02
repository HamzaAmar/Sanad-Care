import { LocaleKey } from "@/types/localeProps.interface";
import { FaqItem, Plan, ServiceLocaleContent, TrustCard } from "./service.type";
import { Clock, HeartBeat, Shield, Star, UserCheck, Users } from "@pillar-ui/icons";

export const contentByLocale: Record<LocaleKey, ServiceLocaleContent> = {
  en: {
    badge: "Premium home nursing plans",
    title: "Trusted care at home, packaged for peace of mind.",
    subtitle:
      "Choose a professional monthly care plan designed for recovery, chronic follow-up, and concierge-level family reassurance in Marrakech.",
    trustIndicators: ["Licensed nurses", "Available 24/7", "Home visits in Marrakech"],
    comparisonTitle: "Compare care coverage",
    comparisonSubtitle:
      "Everything your family needs to understand the difference between essential support and full-service clinical follow-up.",
    comparisonFeatures: [
      "Monthly nurse home visits",
      "Medication management",
      "Vitals and symptom tracking",
      "Family progress reporting",
      "Priority emergency coordination",
      "Dedicated lead nurse",
    ],
    trustTitle: "Why families choose Sanad Care",
    trustSubtitle:
      "Built to feel safe, responsive, and exceptionally personal from the first visit onward.",
    faqTitle: "Questions families ask before subscribing",
    faqSubtitle: "Clear answers to help you choose the right level of support for your loved one.",
    ctaPrimary: "Book a care consultation",
    ctaSecondary: "Talk to a nurse",
    monthLabel: "/month",
    trustNoteLabel: "Includes",
    popularLabel: "Most Popular",
    comparisonIncluded: "Included",
    comparisonKicker: "Marrakech home care coverage",
    faqKicker: "Care planning support",
    featureColumnLabel: "Features",
  },
  fr: {
    badge: "Forfaits premium de soins a domicile",
    title: "Des soins de confiance a domicile, penses pour votre serenite.",
    subtitle:
      "Choisissez un accompagnement mensuel professionnel concu pour la recuperation, le suivi chronique et la tranquillite des familles a Marrakech.",
    trustIndicators: [
      "Infirmiers diplomes",
      "Disponibles 24h/24",
      "Visites a domicile a Marrakech",
    ],
    comparisonTitle: "Comparer les forfaits",
    comparisonSubtitle:
      "Une lecture claire pour distinguer le soutien essentiel d'un suivi clinique complet a domicile.",
    comparisonFeatures: [
      "Visites infirmieres mensuelles",
      "Gestion des medicaments",
      "Suivi des constantes et symptomes",
      "Compte rendu a la famille",
      "Coordination d'urgence prioritaire",
      "Infirmier referent dedie",
    ],
    trustTitle: "Pourquoi les familles choisissent Sanad Care",
    trustSubtitle: "Une experience de soins sure, reactive et tres humaine des la premiere visite.",
    faqTitle: "Questions frequentes avant de souscrire",
    faqSubtitle:
      "Des reponses claires pour choisir le niveau d'accompagnement adapte a votre proche.",
    ctaPrimary: "Reserver une consultation",
    ctaSecondary: "Parler a une infirmiere",
    monthLabel: "/mois",
    trustNoteLabel: "Comprend",
    popularLabel: "Le plus choisi",
    comparisonIncluded: "Inclus",
    comparisonKicker: "Couverture des soins a domicile a Marrakech",
    faqKicker: "Accompagnement au choix du forfait",
    featureColumnLabel: "Fonctionnalites",
  },
  ar: {
    badge: "Premium home nursing plans",
    title: "Trusted home care designed for family peace of mind.",
    subtitle:
      "Choose a professional monthly plan for home follow-up, recovery support, and reliable family communication in Marrakech.",
    trustIndicators: ["Licensed nurses", "Available 24/7", "Home visits in Marrakech"],
    comparisonTitle: "Compare plans",
    comparisonSubtitle:
      "A clear overview to help families understand the difference between essential support and advanced clinical follow-up.",
    comparisonFeatures: [
      "Monthly nurse home visits",
      "Medication management",
      "Vitals and symptom tracking",
      "Family progress reporting",
      "Priority emergency coordination",
      "Dedicated lead nurse",
    ],
    trustTitle: "Why families choose Sanad Care",
    trustSubtitle: "Safe, responsive, and premium home care from the very first visit.",
    faqTitle: "Common questions before subscribing",
    faqSubtitle: "Clear answers to help you choose the right level of support.",
    ctaPrimary: "Book a care consultation",
    ctaSecondary: "Talk to a nurse",
    monthLabel: "/month",
    trustNoteLabel: "Includes",
    popularLabel: "Most Popular",
    comparisonIncluded: "Included",
    comparisonKicker: "Marrakech home care coverage",
    faqKicker: "Care planning support",
    featureColumnLabel: "Features",
  },
};

export const plansByLocale: Record<LocaleKey, Plan[]> = {
  en: [
    {
      name: "Essential",
      tagline: "Confident basics for stable day-to-day care.",
      price: "1,490 MAD",
      trustNote: "Ideal for light follow-up after discharge.",
      features: [
        "2 scheduled nurse visits each month",
        "Medication reminders and organization",
        "Basic vitals review",
        "Care notes after every visit",
      ],
      icon: <Shield width={28} strokeWidth={1.7} />,
      comparison: [true, true, true, false, false, false],
    },
    {
      name: "Suivi",
      tagline: "The balanced plan for ongoing professional monitoring.",
      price: "2,490 MAD",
      trustNote: "Best for chronic care and family peace of mind.",
      features: [
        "4 nurse visits per month",
        "Weekly medication and symptom tracking",
        "Family reporting included",
        "Fast WhatsApp nurse coordination",
        "Priority scheduling for urgent needs",
      ],
      featured: true,
      icon: <HeartBeat width={28} strokeWidth={1.7} />,
      comparison: [true, true, true, true, true, false],
    },
    {
      name: "Intensif",
      tagline: "Closer clinical supervision for complex recovery.",
      price: "3,790 MAD",
      trustNote: "Designed for higher-dependency home care.",
      features: [
        "8 nurse visits per month",
        "Advanced recovery and wound monitoring",
        "Coordination with the treating physician",
        "Detailed family health updates",
        "Same-day response support",
      ],
      icon: <UserCheck width={28} strokeWidth={1.7} />,
      comparison: [true, true, true, true, true, true],
    },
    {
      name: "VIP",
      tagline: "Concierge care with maximum comfort and oversight.",
      price: "5,490 MAD",
      trustNote: "For families who want elite responsiveness.",
      features: [
        "Dedicated lead nurse oversight",
        "High-priority home interventions",
        "Enhanced family communication",
        "Lifestyle and recovery planning",
        "White-glove care coordination",
      ],
      icon: <Star width={28} strokeWidth={1.7} />,
      comparison: [true, true, true, true, true, true],
    },
  ],
  fr: [
    {
      name: "Essential",
      tagline: "Les fondamentaux rassurants pour un suivi stable.",
      price: "1,490 MAD",
      trustNote: "Parfait apres une sortie d'hospitalisation.",
      features: [
        "2 visites infirmieres planifiees par mois",
        "Rappel et organisation des medicaments",
        "Controle de base des constantes",
        "Compte rendu apres chaque visite",
      ],
      icon: <Shield width={28} strokeWidth={1.7} />,
      comparison: [true, true, true, false, false, false],
    },
    {
      name: "Suivi",
      tagline: "Le forfait equilibre pour une surveillance continue.",
      price: "2,490 MAD",
      trustNote: "Le meilleur choix pour la serenite des familles.",
      features: [
        "4 visites infirmieres par mois",
        "Suivi hebdomadaire des medicaments et symptomes",
        "Reporting famille inclus",
        "Coordination rapide via WhatsApp",
        "Priorite en cas de besoin urgent",
      ],
      featured: true,
      icon: <HeartBeat width={28} strokeWidth={1.7} />,
      comparison: [true, true, true, true, true, false],
    },
    {
      name: "Intensif",
      tagline: "Une supervision clinique renforcee pour la recuperation.",
      price: "3,790 MAD",
      trustNote: "Adapte aux situations de soins plus complexes.",
      features: [
        "8 visites infirmieres par mois",
        "Surveillance avancee et pansements",
        "Coordination avec le medecin traitant",
        "Mises a jour detaillees a la famille",
        "Reponse le jour meme si besoin",
      ],
      icon: <UserCheck width={28} strokeWidth={1.7} />,
      comparison: [true, true, true, true, true, true],
    },
    {
      name: "VIP",
      tagline: "Une experience concierge avec accompagnement maximal.",
      price: "5,490 MAD",
      trustNote: "Pour les familles qui veulent une reactivite premium.",
      features: [
        "Supervision par un infirmier referent",
        "Interventions a domicile prioritaires",
        "Communication famille renforcee",
        "Planification confort et recuperation",
        "Coordination haut de gamme",
      ],
      icon: <Star width={28} strokeWidth={1.7} />,
      comparison: [true, true, true, true, true, true],
    },
  ],
  ar: [
    {
      name: "Essential",
      tagline: "Confident basics for stable day-to-day care.",
      price: "1,490 MAD",
      trustNote: "Ideal for light follow-up after discharge.",
      features: [
        "2 scheduled nurse visits each month",
        "Medication reminders and organization",
        "Basic vitals review",
        "Care notes after every visit",
      ],
      icon: <Shield width={28} strokeWidth={1.7} />,
      comparison: [true, true, true, false, false, false],
    },
    {
      name: "Suivi",
      tagline: "The balanced plan for ongoing professional monitoring.",
      price: "2,490 MAD",
      trustNote: "Best for chronic care and family peace of mind.",
      features: [
        "4 nurse visits per month",
        "Weekly medication and symptom tracking",
        "Family reporting included",
        "Fast WhatsApp nurse coordination",
        "Priority scheduling for urgent needs",
      ],
      featured: true,
      icon: <HeartBeat width={28} strokeWidth={1.7} />,
      comparison: [true, true, true, true, true, false],
    },
    {
      name: "Intensif",
      tagline: "Closer clinical supervision for complex recovery.",
      price: "3,790 MAD",
      trustNote: "Designed for higher-dependency home care.",
      features: [
        "8 nurse visits per month",
        "Advanced recovery and wound monitoring",
        "Coordination with the treating physician",
        "Detailed family health updates",
        "Same-day response support",
      ],
      icon: <UserCheck width={28} strokeWidth={1.7} />,
      comparison: [true, true, true, true, true, true],
    },
    {
      name: "VIP",
      tagline: "Concierge care with maximum comfort and oversight.",
      price: "5,490 MAD",
      trustNote: "For families who want elite responsiveness.",
      features: [
        "Dedicated lead nurse oversight",
        "High-priority home interventions",
        "Enhanced family communication",
        "Lifestyle and recovery planning",
        "White-glove care coordination",
      ],
      icon: <Star width={28} strokeWidth={1.7} />,
      comparison: [true, true, true, true, true, true],
    },
  ],
};

export const trustCardsByLocale: Record<LocaleKey, TrustCard[]> = {
  en: [
    {
      title: "Certified Nurses",
      description:
        "Each visit is delivered by trained professionals aligned with safe home-care protocols.",
      icon: <Shield width={24} strokeWidth={1.8} />,
    },
    {
      title: "Fast Emergency Response",
      description: "Urgent coordination pathways help families act quickly when symptoms change.",
      icon: <Clock width={24} strokeWidth={1.8} />,
    },
    {
      title: "Family Reporting Included",
      description: "Loved ones receive clear updates, care notes, and follow-up visibility.",
      icon: <Users width={24} strokeWidth={1.8} />,
    },
  ],
  fr: [
    {
      title: "Infirmiers certifies",
      description:
        "Chaque visite est assuree par des professionnels formes aux protocoles de soins a domicile.",
      icon: <Shield width={24} strokeWidth={1.8} />,
    },
    {
      title: "Reponse rapide en urgence",
      description:
        "Des circuits de coordination prioritaires pour reagir vite en cas d'evolution clinique.",
      icon: <Clock width={24} strokeWidth={1.8} />,
    },
    {
      title: "Compte rendu famille inclus",
      description:
        "Les proches recoivent des nouvelles claires et un vrai suivi apres chaque intervention.",
      icon: <Users width={24} strokeWidth={1.8} />,
    },
  ],
  ar: [
    {
      title: "Certified Nurses",
      description:
        "Each visit is delivered by trained professionals aligned with safe home-care protocols.",
      icon: <Shield width={24} strokeWidth={1.8} />,
    },
    {
      title: "Fast Emergency Response",
      description: "Urgent coordination pathways help families act quickly when symptoms change.",
      icon: <Clock width={24} strokeWidth={1.8} />,
    },
    {
      title: "Family Reporting Included",
      description: "Loved ones receive clear updates, care notes, and follow-up visibility.",
      icon: <Users width={24} strokeWidth={1.8} />,
    },
  ],
};

export const faqByLocale: Record<LocaleKey, FaqItem[]> = {
  en: [
    {
      question: "How do I know which plan fits my family member?",
      answer:
        "We recommend starting with a consultation. Our nurse team reviews the patient condition, frequency of support needed, and family expectations before recommending the best plan.",
    },
    {
      question: "Can the plan be adjusted if care needs change?",
      answer:
        "Yes. Families can move from Essential to Suivi or Intensif whenever recovery becomes more complex or more frequent nurse oversight is needed.",
    },
    {
      question: "Are emergency visits included in every package?",
      answer:
        "All plans include care coordination, while faster emergency response and priority scheduling are strongest in Suivi, Intensif, and VIP tiers.",
    },
    {
      question: "Do families receive updates after visits?",
      answer:
        "Yes. Care notes are available across all plans, and structured family reporting becomes more comprehensive in the highlighted Suivi plan and above.",
    },
  ],
  fr: [
    {
      question: "Comment choisir le bon forfait pour mon proche ?",
      answer:
        "Le plus simple est de commencer par une consultation. Notre equipe evalue l'etat du patient, le rythme des soins et les attentes de la famille avant de recommander la meilleure formule.",
    },
    {
      question: "Peut-on changer de forfait si les besoins evoluent ?",
      answer:
        "Oui. Il est possible de passer d'Essential a Suivi ou Intensif si la recuperation devient plus complexe ou demande davantage de supervision.",
    },
    {
      question: "Les interventions urgentes sont-elles incluses ?",
      answer:
        "Chaque forfait inclut une coordination de soins, avec une prise en charge prioritaire plus forte dans les offres Suivi, Intensif et VIP.",
    },
    {
      question: "La famille recoit-elle des nouvelles apres les visites ?",
      answer:
        "Oui. Des notes de suivi sont prevues dans toutes les offres, avec un reporting plus detaille des le forfait Suivi.",
    },
  ],
  ar: [
    {
      question: "How do I know which plan fits my family member?",
      answer:
        "We recommend starting with a consultation. Our nurse team reviews the patient condition, frequency of support needed, and family expectations before recommending the best plan.",
    },
    {
      question: "Can the plan be adjusted if care needs change?",
      answer:
        "Yes. Families can move from Essential to Suivi or Intensif whenever recovery becomes more complex or more frequent nurse oversight is needed.",
    },
    {
      question: "Are emergency visits included in every package?",
      answer:
        "All plans include care coordination, while faster emergency response and priority scheduling are strongest in Suivi, Intensif, and VIP tiers.",
    },
    {
      question: "Do families receive updates after visits?",
      answer:
        "Yes. Care notes are available across all plans, and structured family reporting becomes more comprehensive in the highlighted Suivi plan and above.",
    },
  ],
};

export const prestationsInfirmieres = [
  {
    title: {
      fr: "Visite Infirmière Standard",
      ar: "زيارة تمريضية قياسية",
      en: "Standard Nursing Visit",
    },
    inclus: {
      fr: [
        "Mesure tension + température + oxygène",
        "Evaluation clinique générale",
        "Vérification de l'observance médicamenteuse",
        "Compte-rendu WhatsApp à la famille",
      ],
      ar: [
        "قياس ضغط الدم + درجة الحرارة + الأكسجين",
        "تقييم سريري عام",
        "التحقق من الالتزام بالأدوية",
        "تقرير عبر واتساب للعائلة",
      ],
      en: [
        "Blood pressure + temperature + oxygen check",
        "General clinical assessment",
        "Medication adherence verification",
        "WhatsApp report to the family",
      ],
    },
    price: "220",
  },
  {
    title: {
      fr: "Prélèvement Sanguin",
      ar: "سحب الدم",
      en: "Blood Sampling",
    },
    inclus: {
      fr: [
        "Prélèvement sanguin au domicile",
        "Préparation des tubes et envoi au laboratoire",
        "Information de la famille sur les résultats",
        "Les analyses de laboratoire ne sont pas incluses",
      ],
      ar: [
        "سحب الدم في المنزل",
        "تحضير الأنابيب وإرسالها للمختبر",
        "إبلاغ العائلة بالنتائج",
        "تحاليل المختبر غير مشمولة",
      ],
      en: [
        "Home blood collection",
        "Tube preparation and delivery to the lab",
        "Informing the family of results",
        "Lab tests are not included",
      ],
    },
    price: "220",
  },
  {
    title: {
      fr: "Pansement Simple",
      ar: "ضمادة بسيطة",
      en: "Simple Dressing",
    },
    inclus: {
      fr: [
        "Nettoyage et désinfection de la plaie",
        "Changement de pansement",
        "Evaluation de l'état de la plaie",
        "Compte-rendu WhatsApp à la famille",
      ],
      ar: ["تنظيف وتطهير الجرح", "تغيير الضمادة", "تقييم حالة الجرح", "تقرير عبر واتساب للعائلة"],
      en: [
        "Cleaning and disinfection of the wound",
        "Changing the dressing",
        "Wound status evaluation",
        "WhatsApp report to the family",
      ],
    },
    price: "230",
  },
  {
    title: {
      fr: "Pansement Complexe / Escarre",
      ar: "ضمادة معقدة / قرحة الفراش",
      en: "Complex Dressing / Bedsore",
    },
    inclus: {
      fr: [
        "Nettoyage profond + détersion des tissus nécrotiques",
        "Pansement spécialisé selon le stade",
        "Evaluation et classification de la plaie",
        "Rapport médical détaillé pour le médecin",
      ],
      ar: [
        "تنظيف عميق + إزالة الأنسجة الميتة",
        "ضمادة متخصصة حسب المرحلة",
        "تقييم وتصنيف الجرح",
        "تقرير طبي مفصل للطبيب",
      ],
      en: [
        "Deep cleaning + debridement of necrotic tissue",
        "Specialized dressing according to stage",
        "Wound evaluation and classification",
        "Detailed medical report for the doctor",
      ],
    },
    price: "330",
  },
  {
    title: {
      fr: "Injection Intramusculaire (IM)",
      ar: "حقن عضلي (IM)",
      en: "Intramuscular Injection (IM)",
    },
    inclus: {
      fr: [
        "Préparation du médicament + Injection IM",
        "Surveillance 10 min après l'injection",
        "Compte-rendu WhatsApp",
        "Le médicament n'est pas inclus",
      ],
      ar: [
        "تحضير الدواء + الحقن العضلي",
        "مراقبة لمدة 10 دقائق بعد الحقن",
        "تقرير عبر واتساب",
        "الدواء غير مشمول",
      ],
      en: [
        "Medication preparation + IM injection",
        "10-minute post-injection monitoring",
        "WhatsApp report",
        "Medication is not included",
      ],
    },
    price: "170",
  },
  {
    title: {
      fr: "Injection Sous-Cutanée (SC)",
      ar: "حقن تحت الجلد (SC)",
      en: "Subcutaneous Injection (SC)",
    },
    inclus: {
      fr: [
        "Préparation du médicament + Injection SC",
        "Surveillance après l'injection",
        "Compte-rendu WhatsApp",
        "Le médicament n'est pas inclus",
      ],
      ar: [
        "تحضير الدواء + الحقن تحت الجلد",
        "مراقبة بعد الحقن",
        "تقرير عبر واتساب",
        "الدواء غير مشمول",
      ],
      en: [
        "Medication preparation + SC injection",
        "Post-injection monitoring",
        "WhatsApp report",
        "Medication is not included",
      ],
    },
    price: "160",
  },
  {
    title: {
      fr: "Pose de Perfusion IV",
      ar: "تركيب محلول وريدي (IV)",
      en: "IV Infusion Setup",
    },
    inclus: {
      fr: [
        "Pose du cathéter veineux périphérique",
        "Branchement de la perfusion + surveillance complète",
        "Ablation du cathéter + rapport détaillé",
        "La solution et le médicament ne sont pas inclus",
      ],
      ar: [
        "تركيب قسطرة وريدية محيطية",
        "ربط المحلول + مراقبة كاملة",
        "إزالة القسطرة + تقرير مفصل",
        "المحلول والدواء غير مشمولين",
      ],
      en: [
        "Peripheral venous catheter placement",
        "Infusion setup + full monitoring",
        "Catheter removal + detailed report",
        "Solution and medication are not included",
      ],
    },
    price: "280",
  },
  {
    title: {
      fr: "Retrait Points / Agrafes",
      ar: "إزالة الغرز / الدبابيس",
      en: "Stitch / Staple Removal",
    },
    inclus: {
      fr: [
        "Ablation des fils ou agrafes de suture",
        "Nettoyage + évaluation de la cicatrisation",
        "Compte-rendu WhatsApp à la famille",
      ],
      ar: [
        "إزالة خيوط أو دبابيس الجراحة",
        "تنظيف + تقييم التئام الجروح",
        "تقرير عبر واتساب للعائلة",
      ],
      en: [
        "Removal of stitches or surgical staples",
        "Cleaning + healing evaluation",
        "WhatsApp report to the family",
      ],
    },
    price: "180",
  },
  {
    title: {
      fr: "Surveillance Glycémie + Insuline",
      ar: "مراقبة مستوى السكر + الأنسولين",
      en: "Blood Glucose Monitoring + Insulin",
    },
    inclus: {
      fr: [
        "Mesure de la glycémie capillaire",
        "Enregistrement et alerte en cas de valeur anormale",
        "Injection d'insuline si prescrite",
        "L'insuline n'est pas incluse",
      ],
      ar: [
        "قياس سكر الدم الشعيري",
        "تسجيل وتنبيه في حالة وجود قيمة غير طبيعية",
        "حقن الأنسولين إذا وُصف",
        "الأنسولين غير مشمول",
      ],
      en: [
        "Capillary blood glucose measurement",
        "Recording and alerting for abnormal values",
        "Insulin injection if prescribed",
        "Insulin is not included",
      ],
    },
    price: "200",
  },
  {
    title: {
      fr: "Vaccination à Domicile",
      ar: "تلقيح منزلي",
      en: "Home Vaccination",
    },
    inclus: {
      fr: [
        "Préparation du vaccin + injection",
        "Surveillance 15 à 20 minutes après le vaccin",
        "Compte-rendu WhatsApp",
        "Le vaccin n'est pas inclus",
      ],
      ar: [
        "تحضير اللقاح + الحقن",
        "مراقبة لمدة 15 إلى 20 دقيقة بعد اللقاح",
        "تقرير عبر واتساب",
        "اللقاح غير مشمول",
      ],
      en: [
        "Vaccine preparation + injection",
        "15-20 minute post-vaccine monitoring",
        "WhatsApp report",
        "Vaccine is not included",
      ],
    },
    price: "180",
  },
  {
    title: {
      fr: "Surveillance Cardio-Tensionnelle",
      ar: "مراقبة القلب وضغط الدم",
      en: "Cardio-Tensional Monitoring",
    },
    inclus: {
      fr: [
        "Mesure tension (x2) + pouls + saturation en oxygène",
        "Enregistrement des symptômes du patient",
        "Rapport structuré envoyé au médecin traitant",
        "Alerte immédiate en cas de Red Flag",
      ],
      ar: [
        "قياس ضغط الدم (مرتين) + النبض + تشبع الأكسجين",
        "تسجيل أعراض المريض",
        "تقرير منظم يُرسل للطبيب المعالج",
        "تنبيه فوري في حالة الخطر",
      ],
      en: [
        "Blood pressure (x2) + pulse + oxygen saturation",
        "Recording patient symptoms",
        "Structured report sent to attending physician",
        "Immediate alert in case of Red Flag",
      ],
    },
    price: "169",
  },
];
