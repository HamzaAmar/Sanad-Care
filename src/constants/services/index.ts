import type { NursingService } from "@/types/service";

export const SERVICE_ITEMS = [
  {
    id: "vital-signs-monitoring",
    name: {
      en: "Vital Signs Monitoring (Free)",
      fr: "Surveillance des signes vitaux (Gratuit)",
      ar: "مراقبة العلامات الحيوية (مجانًا)",
    },
  },
  {
    id: "nursing-injections",
    name: {
      en: "Nursing injections (IM / SC / IV)",
      fr: "Injections infirmières (IM / SC / IV)",
      ar: "حقن تمريضية (عضلي / تحت الجلد / وريدي)",
    },
  },
  {
    id: "iv-fluids-setup-monitoring",
    name: {
      en: "IV fluids setup & monitoring",
      fr: "Mise en place et surveillance des perfusions intraveineuses",
      ar: "تركيب ومراقبة المحاليل الوريدية",
    },
  },
  {
    id: "wound-care-dressing-changes",
    name: {
      en: "Wound care & dressing changes",
      fr: "Soins des plaies et changement de pansements",
      ar: "العناية بالجروح وتغيير الضمادات",
    },
  },
  {
    id: "urinary-venous-catheter-care",
    name: {
      en: "Urinary & venous catheter care",
      fr: "Soins des cathéters urinaires et veineux",
      ar: "العناية بالقسطرة البولية والوريدية",
    },
  },
  {
    id: "home-blood-sample-collection",
    name: {
      en: "Home blood sample collection",
      fr: "Prélèvement sanguin à domicile",
      ar: "سحب عينات الدم في المنزل",
    },
  },
  {
    id: "urine-sample-collection",
    name: {
      en: "Urine sample collection",
      fr: "Collecte d'échantillons d'urine",
      ar: "جمع عينات البول",
    },
  },
  {
    id: "rapid-home-tests",
    name: {
      en: "Rapid home tests when required",
      fr: "Tests rapides à domicile si nécessaire",
      ar: "اختبارات سريعة في المنزل عند الحاجة",
    },
  },
  {
    id: "results-follow-up",
    name: {
      en: "Results follow-up with doctor or family",
      fr: "Suivi des résultats avec le médecin ou la famille",
      ar: "متابعة النتائج مع الطبيب أو العائلة",
    },
  },
  {
    id: "health-condition-follow-up",
    name: {
      en: "Health condition follow-up",
      fr: "Suivi de l'état de santé",
      ar: "متابعة الحالة الصحية",
    },
  },
  {
    id: "early-detection-changes",
    name: {
      en: "Early detection of concerning changes",
      fr: "Détection précoce des changements préoccupants",
      ar: "الكشف المبكر عن التغيرات المقلقة",
    },
  },
  {
    id: "family-doctor-notification",
    name: {
      en: "Family or doctor notification if needed",
      fr: "Notification de la famille ou du médecin si nécessaire",
      ar: "إبلاغ العائلة أو الطبيب عند الحاجة",
    },
  },
  {
    id: "basic-nursing-assessment",
    name: {
      en: "Basic nursing assessment",
      fr: "Évaluation infirmière de base",
      ar: "تقييم تمريضي أساسي",
    },
  },
  {
    id: "surgical-wound-monitoring",
    name: {
      en: "Surgical wound monitoring",
      fr: "Surveillance des plaies chirurgicales",
      ar: "مراقبة الجروح الجراحية",
    },
  },
  {
    id: "dressing-changes",
    name: {
      en: "Dressing changes",
      fr: "Changement de pansements",
      ar: "تغيير الضمادات",
    },
  },
  {
    id: "prescribed-treatment-execution",
    name: {
      en: "Prescribed treatment execution",
      fr: "Exécution du traitement prescrit",
      ar: "تنفيذ العلاج الموصوف",
    },
  },
  {
    id: "complication-prevention",
    name: {
      en: "Complication prevention",
      fr: "Prévention des complications",
      ar: "الوقاية من المضاعفات",
    },
  },
  {
    id: "bedsore-prevention",
    name: {
      en: "Bedsore prevention",
      fr: "Prévention des escarres",
      ar: "الوقاية من قرح الفراش",
    },
  },
  {
    id: "position-changing",
    name: {
      en: "Position changing",
      fr: "Changement de position",
      ar: "تغيير الوضعية",
    },
  },
  {
    id: "daily-nursing-care",
    name: {
      en: "Daily nursing care",
      fr: "Soins infirmiers quotidiens",
      ar: "رعاية تمريضية يومية",
    },
  },
  {
    id: "nutrition-hydration-monitoring",
    name: {
      en: "Nutrition & hydration monitoring",
      fr: "Surveillance de la nutrition et de l'hydratation",
      ar: "مراقبة التغذية والترطيب",
    },
  },
  {
    id: "diabetes-follow-up",
    name: {
      en: "Diabetes follow-up",
      fr: "Suivi du diabète",
      ar: "متابعة مرض السكري",
    },
  },
  {
    id: "blood-pressure-monitoring",
    name: {
      en: "Blood pressure monitoring",
      fr: "Surveillance de la tension artérielle",
      ar: "مراقبة ضغط الدم",
    },
  },
  {
    id: "stable-cardiac-condition-monitoring",
    name: {
      en: "Stable cardiac condition monitoring",
      fr: "Surveillance des conditions cardiaques stables",
      ar: "مراقبة الحالات القلبية المستقرة",
    },
  },
  {
    id: "kidney-disease-basic-follow-up",
    name: {
      en: "Kidney disease basic follow-up",
      fr: "Suivi de base des maladies rénales",
      ar: "المتابعة الأساسية لأمراض الكلى",
    },
  },
  {
    id: "treatment-explanation",
    name: {
      en: "Treatment explanation",
      fr: "Explication du traitement",
      ar: "شرح العلاج",
    },
  },
  {
    id: "daily-preventive-advice",
    name: {
      en: "Daily preventive advice",
      fr: "Conseils préventifs quotidiens",
      ar: "نصائح وقائية يومية",
    },
  },
  {
    id: "clear-warning-signs-guidance",
    name: {
      en: "Clear warning signs guidance",
      fr: "Orientation claire sur les signes d'alerte",
      ar: "إرشادات واضحة حول علامات الخطر",
    },
  },
  {
    id: "medication-adherence-education",
    name: {
      en: "Medication adherence education",
      fr: "Éducation à l'observance médicamenteuse",
      ar: "التثقيف حول الالتزام بالأدوية",
    },
  },
  {
    id: "individual-nursing-file",
    name: {
      en: "Individual nursing file",
      fr: "Dossier infirmier individuel",
      ar: "ملف تمريضي فردي",
    },
  },
  {
    id: "documentation-of-all-interventions",
    name: {
      en: "Documentation of all interventions",
      fr: "Documentation de toutes les interventions",
      ar: "توثيق جميع التدخلات",
    },
  },
  {
    id: "short-reports-upon-request",
    name: {
      en: "Short reports upon request",
      fr: "Rapports courts sur demande",
      ar: "تقارير مختصرة عند الطلب",
    },
  },
  {
    id: "care-continuity-tracking",
    name: {
      en: "Care continuity tracking",
      fr: "Suivi de la continuité des soins",
      ar: "تتبع استمرارية الرعاية",
    },
  },

  // ─── Not-Included Items ────────────────────────────────────────────────────
  {
    id: "prescribed-medications",
    name: {
      en: "Prescribed medications",
      fr: "Médicaments prescrits",
      ar: "الأدوية الموصوفة",
    },
  },
  {
    id: "medical-consumables",
    name: {
      en: "Medical consumables",
      fr: "Consommables médicaux",
      ar: "المستهلكات الطبية",
    },
  },
  {
    id: "medical-diagnosis-treatment-modification",
    name: {
      en: "Any medical diagnosis or treatment modification",
      fr: "Tout diagnostic médical ou modification de traitement",
      ar: "أي تشخيص طبي أو تعديل في العلاج",
    },
  },
  {
    id: "laboratory-analysis-fees",
    name: {
      en: "Laboratory analysis fees",
      fr: "Frais d'analyses de laboratoire",
      ar: "رسوم التحاليل المخبرية",
    },
  },
  {
    id: "advanced-imaging-tests",
    name: {
      en: "Advanced imaging tests",
      fr: "Examens d'imagerie avancés",
      ar: "فحوصات التصوير المتقدمة",
    },
  },
  {
    id: "emergency-laboratory-services",
    name: {
      en: "Emergency laboratory services",
      fr: "Services de laboratoire d'urgence",
      ar: "خدمات المختبر الطارئة",
    },
  },
  {
    id: "medical-diagnosis",
    name: {
      en: "Medical diagnosis",
      fr: "Diagnostic médical",
      ar: "التشخيص الطبي",
    },
  },
  {
    id: "treatment-plan-changes",
    name: {
      en: "Treatment plan changes",
      fr: "Modifications du plan de traitement",
      ar: "تغييرات في خطة العلاج",
    },
  },
  {
    id: "emergency-interventions",
    name: {
      en: "Emergency interventions",
      fr: "Interventions d'urgence",
      ar: "التدخلات الطارئة",
    },
  },
  {
    id: "physiotherapy",
    name: {
      en: "Physiotherapy",
      fr: "Kinésithérapie",
      ar: "العلاج الطبيعي",
    },
  },
  {
    id: "surgical-follow-up-visits",
    name: {
      en: "Surgical follow-up visits",
      fr: "Visites de suivi chirurgical",
      ar: "زيارات المتابعة الجراحية",
    },
  },
  {
    id: "medical-supplies",
    name: {
      en: "Medical supplies",
      fr: "Fournitures médicales",
      ar: "المستلزمات الطبية",
    },
  },
  {
    id: "night-shifts",
    name: {
      en: "Night shifts",
      fr: "Gardes de nuit",
      ar: "المناوبات الليلية",
    },
  },
  {
    id: "household-services",
    name: {
      en: "Household services",
      fr: "Services ménagers",
      ar: "الخدمات المنزلية",
    },
  },
  {
    id: "special-medical-equipment",
    name: {
      en: "Special medical equipment",
      fr: "Équipement médical spécialisé",
      ar: "المعدات الطبية المتخصصة",
    },
  },
  {
    id: "laboratory-tests",
    name: {
      en: "Laboratory tests",
      fr: "Analyses de laboratoire",
      ar: "التحاليل المخبرية",
    },
  },
  {
    id: "medication-supply",
    name: {
      en: "Medication supply",
      fr: "Fourniture de médicaments",
      ar: "توفير الأدوية",
    },
  },
  {
    id: "specialist-consultations",
    name: {
      en: "Specialist consultations",
      fr: "Consultations spécialisées",
      ar: "استشارات متخصصة",
    },
  },
  {
    id: "written-prescriptions",
    name: {
      en: "Written prescriptions",
      fr: "Ordonnances écrites",
      ar: "الوصفات الطبية المكتوبة",
    },
  },
  {
    id: "emergency-decision-making",
    name: {
      en: "Emergency decision-making",
      fr: "Prise de décision d'urgence",
      ar: "اتخاذ القرارات الطارئة",
    },
  },
  {
    id: "medical-reports",
    name: {
      en: "Medical reports",
      fr: "Rapports médicaux",
      ar: "التقارير الطبية",
    },
  },
  {
    id: "insurance-paperwork",
    name: {
      en: "Insurance paperwork",
      fr: "Documents d'assurance",
      ar: "أوراق التأمين",
    },
  },
  {
    id: "legal-documentation",
    name: {
      en: "Legal documentation",
      fr: "Documentation juridique",
      ar: "الوثائق القانونية",
    },
  },
];

export const SERVICES: NursingService[] = [
  {
    id: "medical-treatments",
    name: {
      en: "Home Medical Treatments",
      fr: "Traitements médicaux à domicile",
      ar: "العلاجات الطبية في المنزل",
    },
    description: {
      en: "Safe and accurate execution of medically prescribed treatments at the patient's home.",
      fr: "Exécution sûre et précise des traitements prescrits médicalement au domicile du patient.",
      ar: "تنفيذ آمن ودقيق للعلاجات الموصوفة طبيًا في منزل المريض.",
    },
    priceFrom: {
      day: 150,
      week: 3000,
      month: 8000,
    },
    included: [
      "vital-signs-monitoring",
      "nursing-injections",
      "iv-fluids-setup-monitoring",
      "wound-care-dressing-changes",
      "urinary-venous-catheter-care",
    ],
    notIncluded: [
      "prescribed-medications",
      "medical-consumables",
      "medical-diagnosis-treatment-modification",
    ],
  },

  {
    id: "home-lab-tests",
    name: {
      en: "Home Medical Lab Tests",
      fr: "Analyses médicales à domicile",
      ar: "التحاليل الطبية في المنزل",
    },
    description: {
      en: "Home sample collection with safe transfer to certified laboratories.",
      fr: "Prélèvement d'échantillons à domicile avec transfert sécurisé vers des laboratoires certifiés.",
      ar: "جمع العينات في المنزل مع نقل آمن إلى مختبرات معتمدة.",
    },
    priceFrom: {
      day: 150,
    },
    included: [
      "vital-signs-monitoring",
      "home-blood-sample-collection",
      "urine-sample-collection",
      "rapid-home-tests",
      "results-follow-up",
    ],
    notIncluded: [
      "laboratory-analysis-fees",
      "advanced-imaging-tests",
      "emergency-laboratory-services",
    ],
  },

  {
    id: "health-monitoring",
    name: {
      en: "Home Health Monitoring",
      fr: "Surveillance sanitaire à domicile",
      ar: "المراقبة الصحية في المنزل",
    },
    description: {
      en: "Continuous monitoring to detect early warning signs without leaving home.",
      fr: "Surveillance continue pour détecter les signes d'alerte précoces sans quitter le domicile.",
      ar: "مراقبة مستمرة للكشف المبكر عن العلامات التحذيرية دون مغادرة المنزل.",
    },
    priceFrom: {
      day: 150,
      week: 3000,
    },
    included: [
      "vital-signs-monitoring",
      "health-condition-follow-up",
      "early-detection-changes",
      "family-doctor-notification",
      "basic-nursing-assessment",
    ],
    notIncluded: ["medical-diagnosis", "treatment-plan-changes", "emergency-interventions"],
  },

  {
    id: "post-surgery-care",
    name: {
      en: "Post-Surgery Home Care",
      fr: "Soins postopératoires à domicile",
      ar: "الرعاية المنزلية بعد الجراحة",
    },
    description: {
      en: "Professional nursing support after hospital discharge to ensure safe recovery.",
      fr: "Accompagnement infirmier professionnel après la sortie de l'hôpital pour assurer un rétablissement sûr.",
      ar: "دعم تمريضي متخصص بعد الخروج من المستشفى لضمان تعافٍ آمن.",
    },
    priceFrom: {
      day: 150,
      week: 3000,
      month: 8000,
    },
    included: [
      "vital-signs-monitoring",
      "surgical-wound-monitoring",
      "dressing-changes",
      "prescribed-treatment-execution",
      "complication-prevention",
    ],
    notIncluded: ["physiotherapy", "surgical-follow-up-visits", "medical-supplies"],
  },

  {
    id: "elderly-bedridden-care",
    name: {
      en: "Elderly & Bedridden Care",
      fr: "Soins aux personnes âgées et alitées",
      ar: "رعاية المسنين وطريحي الفراش",
    },
    description: {
      en: "Human-centered nursing care preserving comfort, dignity, and safety.",
      fr: "Soins infirmiers centrés sur l'humain, préservant le confort, la dignité et la sécurité.",
      ar: "رعاية تمريضية إنسانية تحافظ على الراحة والكرامة والسلامة.",
    },
    priceFrom: {
      day: 150,
      week: 3000,
      month: 8000,
    },
    included: [
      "vital-signs-monitoring",
      "bedsore-prevention",
      "position-changing",
      "daily-nursing-care",
      "nutrition-hydration-monitoring",
    ],
    notIncluded: ["night-shifts", "household-services", "special-medical-equipment"],
  },

  {
    id: "chronic-disease-care",
    name: {
      en: "Chronic Disease Follow-Up",
      fr: "Suivi des maladies chroniques",
      ar: "متابعة الأمراض المزمنة",
    },
    description: {
      en: "Regular nursing follow-up to reduce complications and improve quality of life.",
      fr: "Suivi infirmier régulier pour réduire les complications et améliorer la qualité de vie.",
      ar: "متابعة تمريضية منتظمة لتقليل المضاعفات وتحسين جودة الحياة.",
    },
    priceFrom: {
      day: 150,
      week: 3000,
      month: 8000,
    },
    included: [
      "vital-signs-monitoring",
      "diabetes-follow-up",
      "blood-pressure-monitoring",
      "stable-cardiac-condition-monitoring",
      "kidney-disease-basic-follow-up",
    ],
    notIncluded: ["laboratory-tests", "medication-supply", "specialist-consultations"],
  },

  {
    id: "patient-education",
    name: {
      en: "Patient & Family Education",
      fr: "Éducation du patient et de la famille",
      ar: "تثقيف المريض والعائلة",
    },
    description: {
      en: "Clear guidance to help patients and families manage health conditions confidently.",
      fr: "Orientation claire pour aider les patients et les familles à gérer les problèmes de santé en toute confiance.",
      ar: "إرشادات واضحة لمساعدة المرضى والعائلات على إدارة الحالات الصحية بثقة.",
    },
    priceFrom: {
      day: 150,
    },
    included: [
      "vital-signs-monitoring",
      "treatment-explanation",
      "daily-preventive-advice",
      "clear-warning-signs-guidance",
      "medication-adherence-education",
    ],
    notIncluded: ["medical-diagnosis", "written-prescriptions", "emergency-decision-making"],
  },

  {
    id: "nursing-documentation",
    name: {
      en: "Nursing Documentation & Follow-Up",
      fr: "Documentation infirmière et suivi",
      ar: "التوثيق التمريضي والمتابعة",
    },
    description: {
      en: "Transparent documentation ensuring continuity and traceability of care.",
      fr: "Documentation transparente assurant la continuité et la traçabilité des soins.",
      ar: "توثيق شفاف يضمن استمرارية الرعاية وإمكانية تتبعها.",
    },
    priceFrom: {
      day: 150,
    },
    included: [
      "vital-signs-monitoring",
      "individual-nursing-file",
      "documentation-of-all-interventions",
      "short-reports-upon-request",
      "care-continuity-tracking",
    ],
    notIncluded: ["medical-reports", "insurance-paperwork", "legal-documentation"],
  },
];
