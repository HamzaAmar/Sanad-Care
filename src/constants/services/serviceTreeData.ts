import type { PackId, ProcedureId } from "@/types/service";
import type { LocalizedArray, LocalizedText } from "@/types/service";

export type { LocalizedArray, LocalizedText } from "@/types/service";

export interface FAQ {
  q: string;
  a: string;
}

export interface LocalizedFAQs {
  en: FAQ[];
  fr: FAQ[];
  ar: FAQ[];
}

export interface ServiceTreeItem {
  slug: string;
  category: "pillar" | "service" | "condition";
  shortTitle: LocalizedText;
  /**
   * Catalogue procedures that make up this service. An empty array is
   * meaningful: the cost depends on hours, not on a procedure, so the page
   * quotes on assessment instead of showing a number.
   */
  procedures: ProcedureId[];
  /**
   * Monthly plans available for this service. Empty means the service is sold
   * per visit only; the card's "monthly plan available" chip is derived from
   * this list.
   */
  packs: PackId[];
  title: LocalizedText;
  subtitle: LocalizedText;
  metaTitle: LocalizedText;
  metaDescription: LocalizedText;
  keywords: LocalizedArray;
  description: LocalizedText;
  highlights: LocalizedArray;
  faqs: LocalizedFAQs;
}

export const SERVICE_TREE: Record<string, ServiceTreeItem> = {
  "iv-therapy-marrakech": {
    slug: "iv-therapy-marrakech",
    packs: [],
    shortTitle: { en: "IV therapy", fr: "Perfusion à domicile", ar: "المحاليل الوريدية" },
    procedures: ["iv-infusion"],
    category: "service",
    title: {
      en: "IV Therapy & Perfusion at Home in Marrakech",
      fr: "Perfusion à Domicile à Marrakech",
      ar: "تركيب المحاليل الوريدية بالمنزل في مراكش",
    },
    subtitle: {
      en: "Professional Hydration, Vitamin Drips, and Intravenous Treatments",
      fr: "Mise en place de perfusions de réhydratation ou de traitements IV",
      ar: "تركيب محاليل التغذية والترطيب والعلاجات الوريدية باحترافية",
    },
    metaTitle: {
      en: "IV Therapy Marrakech | Perfusion at Home",
      fr: "Perfusion à Domicile Marrakech | Perfusion IV",
      ar: "محلول وريدي منزلي مراكش | تركيب محاليل في المنزل",
    },
    metaDescription: {
      en: "Get professional perfusion and IV therapy at home in Marrakech. Hydration drips, post-surgery IV treatments, and medical infusions managed by experienced nurses.",
      fr: "Bénéficiez de perfusions et d'antibiothérapies IV à domicile à Marrakech. Réhydratation, suivi post-opératoire gérés par des infirmiers qualifiés.",
      ar: "احصل على تركيب محاليل وريدية وعلاجات وريدية في منزلك بمراكش. محاليل الجفاف، محاليل ما بعد الجراحة تحت إشراف ممرضين ذوي خبرة.",
    },
    keywords: {
      en: [
        "IV therapy Marrakech",
        "hydration drip Marrakech",
        "hydration IV at home Marrakech",
        "post surgery IV therapy Marrakech",
      ],
      fr: [
        "perfusion à domicile Marrakech",
        "perfusion IV Marrakech",
        "perfusion de réhydratation à domicile",
        "traitement intraveineux à domicile",
      ],
      ar: [
        "تركيب محاليل وريدية بالمنزل مراكش",
        "محلول فيتامينات منزلي مراكش",
        "تغذية وريدية في المنزل بمراكش",
        "محلول ترطيب في المنزل",
      ],
    },
    description: {
      en: "Our registered nurses specialize in installing and monitoring intravenous infusions at home. From physician-prescribed antibiotic perfusions to hydration and post-surgical support, we stay on-site during the treatment to ensure safety and comfort.",
      fr: "Nos infirmiers diplômés d'État sont formés à la pose et au suivi de cathéters veineux et perfusions. Qu'il s'agisse d'antibiotiques ou de solutés de réhydratation, l'infirmier assure une surveillance clinique tout au long de la perfusion.",
      ar: "يتخصص ممرضونا في تركيب ومراقبة المحاليل والأدوية الوريدية بالمنزل. بدءاً من المضادات الحيوية الوريدية الموصوفة إلى محاليل الجفاف، نضمن مراقبة مستمرة للمريض لسلامته.",
    },
    highlights: {
      en: [
        "Peripheral venous catheter placement",
        "Continuous monitoring of drip rate and vital signs",
        "Catheter care and complication prevention",
        "Post-therapy clean-up and reporting",
      ],
      fr: [
        "Pose sécurisée de cathéters veineux périphériques",
        "Surveillance en continu du débit et des constantes vitales",
        "Prévention du risque infectieux et contrôle du site de perfusion",
        "Retrait du matériel et rapport d'intervention",
      ],
      ar: [
        "تركيب القسطرة الوريدية الطرفية بأمان",
        "مراقبة مستمرة لمعدل تدفق المحلول والعلامات الحيوية",
        "العناية بالقسطرة والوقاية من الالتهابات الوريدية",
        "إزالة المحلول وتوثيق التحديثات الطبية",
      ],
    },
    faqs: {
      en: [
        {
          q: "How long does a nurse stay for a perfusion?",
          a: "The nurse remains present for the entire duration of the infusion (typically 45 minutes to 2 hours) to monitor the patient's reaction.",
        },
      ],
      fr: [
        {
          q: "L'infirmier reste-t-il pendant toute la durée de la perfusion ?",
          a: "Oui, l'infirmier reste sur place pour surveiller le déroulement (généralement de 45 minutes à 2 heures) et intervenir en cas de besoin.",
        },
      ],
      ar: [
        {
          q: "كم من الوقت يبقى الممرض أثناء تركيب المحلول؟",
          a: "يبقى الممرض متواجدًا طوال فترة تدفق المحلول (عادة من 45 دقيقة إلى ساعتين) لمراقبة استجابة المريض وضمان سلامته.",
        },
      ],
    },
  },
  "elderly-care-marrakech": {
    slug: "elderly-care-marrakech",
    packs: ["essential", "suivi", "intensif", "vip"],
    shortTitle: { en: "Elderly care", fr: "Soins aux aînés", ar: "رعاية كبار السن" },
    procedures: [],
    category: "service",
    title: {
      en: "Elderly & Senior Care at Home in Marrakech",
      fr: "Aide et Soins aux Personnes Âgées à Domicile",
      ar: "رعاية كبار السن في المنزل بمراكش",
    },
    subtitle: {
      en: "Compassionate Caregiving, Medication Supervision, and Mobility Assistance",
      fr: "Accompagnement bienveillant, suivi médical et aide à la mobilité pour seniors",
      ar: "رعاية عطوفة، إشراف على الأدوية، ومساعدة في الحركة للمسنين",
    },
    metaTitle: {
      en: "Elderly Care Marrakech | Senior Home Care Support",
      fr: "Aide Personnes Âgées Marrakech | Garde Malade Senior",
      ar: "رعاية مسنين مراكش | خدمة رعاية كبار السن بالمنزل",
    },
    metaDescription: {
      en: "Compassionate home care for seniors in Marrakech. Registered nurses and caregivers for medication management, hygiene, mobility support, and daily monitoring.",
      fr: "Accompagnement des seniors à domicile à Marrakech. Garde-malade qualifié pour aide à l'hygiène, prise de médicaments, sécurité et mobilité.",
      ar: "رعاية منزلية عطوفة لكبار السن في مراكش. ممرضون ومقدمو رعاية للإشراف على الأدوية، النظافة الشخصية، المساعدة الحركية، والمتابعة الصحية اليومية.",
    },
    keywords: {
      en: [
        "elderly care Marrakech",
        "senior care Marrakech",
        "caregiver Marrakech",
        "elderly care at home Marrakech",
      ],
      fr: [
        "aide personnes âgées Marrakech",
        "aide à domicile senior Marrakech",
        "garde malade senior Marrakech",
        "assistance personnes âgées",
      ],
      ar: [
        "رعاية كبار السن مراكش",
        "مرافق مسنين في مراكش",
        "ممرض رعاية كبار السن بالمنزل",
        "مساعدة المسنين في المنزل بمراكش",
      ],
    },
    description: {
      en: "Enable your elderly loved ones to maintain their independence in the comfort of their home. Sanad Care offers structured senior support including vitals tracking, medication organization, fall prevention, personal hygiene assistance, and warm companionship.",
      fr: "Permettez à vos parents âgés de vieillir sereinement chez eux. Sanad Care propose un soutien structuré : gestion du pilulier, aide à la toilette, prévention des chutes, surveillance de l'alimentation et présence rassurante.",
      ar: "ساعد والديك وكبار السن في عائلتك على العيش بسلام وراحة في منزلهم. يقدم سند كير رعاية كبار سن منظمة تشمل: تنظيم الأدوية، الوقاية من السقوط، المساعدة في النظافة الشخصية والمرافقة اليومية.",
    },
    highlights: {
      en: [
        "Medication preparation and adherence verification",
        "Gentle assistance with bathing, dressing, and hygiene",
        "Safe transfer and mobility support to prevent falls",
        "Daily reports sent directly to families and children",
      ],
      fr: [
        "Préparation du pilulier et vérification de la prise des médicaments",
        "Aide douce à la toilette quotidienne et à l'habillage",
        "Aide aux transferts et déplacements pour prévenir les chutes",
        "Rapports réguliers envoyés aux enfants et à la famille",
      ],
      ar: [
        "تحضير الأدوية والتأكد من تناولها في مواعيدها",
        "مساعدة لطيفة ومحترمة في الاستحمام، النظافة والملابس",
        "مساعدة في الحركة والتنقل لتفادي السقوط والإصابات",
        "تقارير وتحديثات يومية ترسل مباشرة للأبناء والعائلة",
      ],
    },
    faqs: {
      en: [
        {
          q: "Do you offer 24/7 care for elderly patients?",
          a: "Yes, we can arrange continuous 24/7 nurse-led supervision for seniors who cannot be left alone.",
        },
      ],
      fr: [
        {
          q: "Proposez-vous une garde 24h/24 pour les personnes âgées ?",
          a: "Oui, nous pouvons organiser une présence continue en relais (jour et nuit) pour les aînés en perte d'autonomie.",
        },
      ],
      ar: [
        {
          q: "هل توفرون رعاية كبار السن على مدار الساعة؟",
          a: "نعم، يمكننا ترتيب رعاية ومراقبة مستمرة على مدار الساعة للمسنين الذين يحتاجون إلى رعاية دائمة.",
        },
      ],
    },
  },

  "alzheimers-care-marrakech": {
    slug: "alzheimers-care-marrakech",
    packs: ["essential", "suivi", "intensif", "vip"],
    shortTitle: { en: "Alzheimer's care", fr: "Alzheimer", ar: "رعاية الزهايمر" },
    procedures: [],
    category: "service",
    title: {
      en: "Alzheimer's & Dementia Care at Home",
      fr: "Accompagnement Alzheimer & Démence à Domicile",
      ar: "رعاية مرضى الزهايمر والخرف في المنزل بمراكش",
    },
    subtitle: {
      en: "Specialized Memory Care, Behavioral Support, and Safety Supervision",
      fr: "Prise en charge spécialisée, repères et sécurité à domicile pour patients Alzheimer",
      ar: "رعاية ذاكرة متخصصة، دعم سلوكي، وإشراف أمني كامل للمرضى",
    },
    metaTitle: {
      en: "Alzheimer's Care Marrakech | Home Dementia Caregiver",
      fr: "Accompagnement Alzheimer Marrakech | Démence à Domicile",
      ar: "رعاية زهايمر منزلية مراكش | مرافق مرضى الخرف",
    },
    metaDescription: {
      en: "Specialized home care for Alzheimer's and dementia patients in Marrakech. Patient, experienced caregivers ensuring safety, memory stimulation, and family respite.",
      fr: "Soins spécialisés Alzheimer à domicile à Marrakech. Infirmiers formés pour assurer la sécurité, la stimulation cognitive et le répit des proches.",
      ar: "رعاية منزلية متخصصة لمرضى الزهايمر والخرف في مراكش. ممرضون ومقدمو رعاية يتمتعون بالصبر والخبرة لضمان السلامة وتنشيط الذاكرة.",
    },
    keywords: {
      en: [
        "Alzheimer care Marrakech",
        "dementia care Marrakech",
        "home care for Alzheimer patients Marrakech",
        "dementia caregiver Marrakech",
      ],
      fr: [
        "accompagnement Alzheimer Marrakech",
        "démence care Marrakech",
        "garde malade alzheimer Marrakech",
        "aide alzheimer à domicile",
      ],
      ar: [
        "رعاية مرضى الزهايمر مراكش",
        "مرافق مريض زهايمر بالمنزل",
        "رعاية الخرف المنزلية بمراكش",
        "مساعدة مرضى الزهايمر بالمنزل",
      ],
    },
    description: {
      en: "Caring for a family member with Alzheimer's is emotionally and physically exhausting. Our specialized caregivers and nurses provide a safe environment to prevent wandering, maintain structured daily routines, offer gentle cognitive stimulation, and give families essential respite.",
      fr: "Accompagner un proche atteint d'Alzheimer requiert patience et expertise. Nos intervenants forment un cadre rassurant pour éviter la désorientation, stimuler les fonctions cognitives et alléger la charge mentale des aidants familiaux.",
      ar: "تتطلب رعاية مريض الزهايمر أو الخرف صبراً وخبرة خاصة. يقدم مقدمو الرعاية لدينا بيئة آمنة تمنع ضياع المريض، وتتبع روتينًا يوميًا مريحًا يساعد في إبطاء التدهور المعرفي.",
    },
    highlights: {
      en: [
        "Continuous prevention of wandering and safety hazards",
        "Structured routines to reduce agitation and anxiety",
        "Cognitive exercises and memory reinforcement support",
        "Respite care options for family members",
      ],
      fr: [
        "Sécurisation du domicile et prévention des fugues",
        "Mise en place de rituels quotidiens pour diminuer l'anxiété",
        "Activités stimulantes douces adaptées au stade de la maladie",
        "Relais pour permettre aux proches de souffler",
      ],
      ar: [
        "تأمين المنزل المستمر ومنع خروج المريض بمفرده",
        "تنظيم روتين يومي يقلل من القلق والاضطرابات السلوكية",
        "تمارين إدراكية لطيفة وتنشيط مستمر للذاكرة",
        "خيارات رعاية مؤقتة لإراحة أفراد العائلة ومساعدتهم",
      ],
    },
    faqs: {
      en: [
        {
          q: "How do your caregivers manage agitation?",
          a: "Our staff is trained in non-verbal de-escalation techniques, validation therapy, and redirecting focus to calm anxious patients.",
        },
      ],
      fr: [
        {
          q: "Comment vos équipes gèrent-elles l'agitation ?",
          a: "Nos infirmiers utilisent des méthodes de diversion douce, de validation émotionnelle et d'apaisement par le ton et l'environnement.",
        },
      ],
      ar: [
        {
          q: "كيف يتعامل مقدمو الرعاية مع عصبية مريض الزهايمر؟",
          a: "يتم تدريب موظفينا على تقنيات التهدئة غير اللفظية، تفهم مشاعر المريض، وتوجيه انتباهه إلى أنشطة مهدئة أخرى.",
        },
      ],
    },
  },
  "cancer-care-marrakech": {
    slug: "cancer-care-marrakech",
    packs: [],
    shortTitle: { en: "Cancer support", fr: "Soins oncologiques", ar: "دعم مرضى السرطان" },
    procedures: ["iv-infusion", "standard-nursing-visit"],
    category: "condition",
    title: {
      en: "Cancer Home Care & Nursing Support",
      fr: "Soins en Oncologie et Cancer à Domicile",
      ar: "رعاية مرضى السرطان في المنزل بمراكش",
    },
    subtitle: {
      en: "Post-Chemotherapy Monitoring, Pain Relief, and Supportive Care",
      fr: "Suivi post-chimiothérapie, soulagement des effets secondaires et soutien",
      ar: "متابعة ما بعد العلاج الكيماوي، تخفيف الآلام، والدعم الصحي الشامل",
    },
    metaTitle: {
      en: "Cancer Home Care Marrakech | Oncology Nursing Support",
      fr: "Soins Cancer à Domicile Marrakech | Accompagnement Oncologie",
      ar: "رعاية مرضى السرطان مراكش | تمريض منزلي لمرضى الأورام",
    },
    metaDescription: {
      en: "Specialized cancer support care at home in Marrakech. Oncology nursing, chemotherapy side effects management, pain relief, and emotional support.",
      fr: "Soins d'accompagnement du cancer à domicile à Marrakech. Suivi post-chimio, gestion de la douleur et écoute par des infirmiers spécialisés.",
      ar: "رعاية منزلية متخصصة لدعم مرضى السرطان في مراكش. تمريض الأورام، إدارة الأعراض الجانبية للعلاج الكيماوي، وتخفيف الآلام بالمنزل.",
    },
    keywords: {
      en: [
        "Cancer Home Care Marrakech",
        "oncology nurse Marrakech",
        "post chemotherapy home care",
        "palliative cancer care Marrakech",
      ],
      fr: [
        "soins cancer Marrakech",
        "infirmier oncologie Marrakech",
        "suivi post chimiothérapie domicile",
        "soins de support cancer Marrakech",
      ],
      ar: [
        "رعاية مرضى السرطان مراكش",
        "تمريض الأورام بالمنزل بمراكش",
        "متابعة ما بعد الكيماوي في المنزل",
        "تخفيف آلام السرطان بالمنزل",
      ],
    },
    description: {
      en: "Undergoing cancer treatment is a challenging journey. Our oncology-trained home nurses assist patients with post-chemotherapy side effects, hydration drips, medication management, pain control, and psychological support.",
      fr: "Faire face au cancer demande un accompagnement attentionné. Nos infirmiers prennent en charge la gestion des effets secondaires des traitements, le soulagement de la douleur et le suivi des constantes.",
      ar: "يتطلب علاج السرطان رعاية متخصصة. يقدم ممرضونا المؤهلون المتابعة الطبية بعد جلسات الكيماوي، تركيب محاليل الترطيب، وتخفيف الآلام، ومتابعة العلامات الحيوية.",
    },
    highlights: {
      en: [
        "Medication management as prescribed by your doctor",
        "Nausea, vomiting, and hydration management with IV drips",
        "Monitoring of prescribed pain relief",
        "Deep emotional support and active listening for patients",
      ],
      fr: [
        "Gestion des médicaments selon l'ordonnance de votre médecin",
        "Gestion des nausées et réhydratation par perfusion à domicile",
        "Surveillance de la douleur selon l'ordonnance",
        "Soutien psychologique fort et écoute attentive de la personne",
      ],
      ar: [
        "إدارة الأدوية حسب الوصفة الطبية",
        "إدارة الغثيان والقيء وتركيب محاليل التغذية والترطيب الوريدية",
        "متابعة تسكين الألم حسب الوصفة الطبية",
        "دعم معنوي ونفسي عميق والاستماع لمتطلبات المريض والمقربين منه",
      ],
    },
    faqs: {
      en: [
        {
          q: "Can you help after a chemotherapy session?",
          a: "Yes. We monitor for post-chemotherapy side effects, manage hydration, and record symptoms to share with your treating doctor.",
        },
      ],
      fr: [
        {
          q: "Pouvez-vous intervenir après une séance de chimiothérapie ?",
          a: "Oui. Nous surveillons les effets secondaires, gérons la réhydratation et transmettons les symptômes à votre médecin traitant.",
        },
      ],
      ar: [
        {
          q: "هل يمكنكم المتابعة بعد جلسة العلاج الكيماوي؟",
          a: "نعم. نراقب الأعراض الجانبية، ونوفر الترطيب الوريدي، وننقل الأعراض إلى طبيبك المعالج.",
        },
      ],
    },
  },

  "stroke-rehabilitation-marrakech": {
    slug: "stroke-rehabilitation-marrakech",
    packs: [],
    shortTitle: { en: "Stroke recovery", fr: "Après-AVC", ar: "التعافي بعد الجلطة" },
    procedures: ["standard-nursing-visit", "cardio-monitoring"],
    category: "condition",
    title: {
      en: "Stroke Recovery & Rehabilitation Support",
      fr: "Réadaptation et Suivi Post-AVC à Domicile",
      ar: "التعافي وإعادة التأهيل بعد الجلطة الدماغية بالمنزل",
    },
    subtitle: {
      en: "Nursing Monitoring, Mobility Recovery, and Complication Prevention",
      fr: "Surveillance clinique post-AVC, prévention des récidives et mobilisation",
      ar: "متابعة طبية بعد السكتة الدماغية، الوقاية من المضاعفات، وتسهيل الحركة",
    },
    metaTitle: {
      en: "Stroke Rehabilitation Marrakech | Stroke Recovery Care",
      fr: "Rééducation Post-AVC Marrakech | Suivi AVC Domicile",
      ar: "تأهيل السكتة الدماغية مراكش | رعاية جلطة الدماغ بالمنزل",
    },
    metaDescription: {
      en: "Dedicated stroke recovery care at home in Marrakech. Registered nurses and physiotherapists assisting with mobility, speech exercise support, and vital monitoring.",
      fr: "Accompagnement post-AVC à domicile à Marrakech. Surveillance clinique, rééducation physique et aide à la reprise d'autonomie par nos équipes.",
      ar: "رعاية تأهيلية متكاملة بعد الجلطة الدماغية بالمنزل في مراكش. يشارك ممرضونا وأخصائيو الترويض في استعادة الحركة والوقاية من جلطات جديدة.",
    },
    keywords: {
      en: [
        "Stroke Rehabilitation Marrakech",
        "stroke recovery at home Marrakech",
        "post stroke nurse Marrakech",
        "hemiplegia home care",
      ],
      fr: [
        "rééducation AVC Marrakech",
        "soins post AVC à domicile",
        "réadaptation hémiplégie domicile",
        "surveillance récidive AVC",
      ],
      ar: [
        "تأهيل جلطات الدماغ مراكش",
        "التعافي من الجلطة الدماغية بالمنزل",
        "ممرض لمريض الجلطة بمراكش",
        "علاج الشلل النصفي بالمنزل",
      ],
    },
    description: {
      en: "Recovering from a stroke (AVC) requires a multidisciplinary effort and close medical supervision. We provide dedicated nursing monitoring to prevent recurrences, manage anticoagulant treatments, assist with daily transfers, and coordinate with home physiotherapists to restore motor functions.",
      fr: "La récupération après un accident vasculaire cérébral (AVC) demande un suivi quotidien. Nos équipes assurent la surveillance de la tension, la gestion des traitements anticoagulants, l'aide aux transferts et coordonnent la kinésithérapie.",
      ar: "يتطلب التعافي بعد السكتة الدماغية (AVC) رعاية دقيقة ومستمرة. يوفر ممرضونا مراقبة ضغط الدم والنبض، تنظيم أدوية السيولة والوقاية من الجلطات.",
    },
    highlights: {
      en: [
        "Strict tracking of blood pressure and cardiovascular indicators",
        "Anticoagulant treatment tracking and compliance checking",
        "Safe patient transfers and mobility exercises to prevent stiffness",
        "Coordination with speech therapists and physiotherapists",
      ],
      fr: [
        "Contrôle strict de la tension artérielle pour prévenir les récidives",
        "Suivi précis des traitements anticoagulants et dosages (INR)",
        "Mobilisation sécurisée pour stimuler la motricité et éviter la raideur",
        "Liaison étroite avec les kinésithérapeutes et orthophonistes",
      ],
      ar: [
        "مراقبة صارمة لضغط الدم ومؤشرات القلب لمنع تكرار الجلطة",
        "تتبع أدوية السيولة وفحص تحاليل تخثر الدم (مثل INR)",
        "مساعدة حركية آمنة لمنع تيبس العضلات والمفاصل",
        "تنسيق مستمر مع أخصائيي العلاج الطبيعي والنطق",
      ],
    },
    faqs: {
      en: [
        {
          q: "How does Sanad Care support post-stroke mobility?",
          a: "Our nurses assist with daily positioning and walking practice, and we can schedule a home physiotherapist for intensive motor rehabilitation.",
        },
      ],
      fr: [
        {
          q: "Comment aidez-vous à la reprise de la marche post-AVC ?",
          a: "Nos infirmiers aident aux mobilisations quotidiennes et nous pouvons programmer des séances régulières avec un kinésithérapeute partenaire à domicile.",
        },
      ],
      ar: [
        {
          q: "كيف يساعد سند كير في تحسين حركة مريض الجلطة؟",
          a: "يساعد ممرضونا في المشي والحركة اليومية الآمنة، ويمكننا جدولة أخصائي ترويض طبي منزلي لبرنامج حركي مكثف.",
        },
      ],
    },
  },

  "parkinson-care-marrakech": {
    slug: "parkinson-care-marrakech",
    packs: [],
    shortTitle: { en: "Parkinson's care", fr: "Parkinson", ar: "رعاية باركنسون" },
    procedures: ["standard-nursing-visit"],
    category: "condition",
    title: {
      en: "Parkinson's Disease Home Care in Marrakech",
      fr: "Suivi de la Maladie de Parkinson à Domicile",
      ar: "رعاية مرضى الباركنسون (الشلل الرعاش) بالمنزل",
    },
    subtitle: {
      en: "Medication Timing, Mobility Support, and Daily Assistance",
      fr: "Respect horaire des traitements, aide à la marche et autonomie",
      ar: "تنظيم مواعيد الأدوية الدقيقة، دعم الحركة والمشية، ومساعدات الحياة اليومية",
    },
    metaTitle: {
      en: "Parkinson's Care Marrakech | Parkinson Home Nursing",
      fr: "Suivi Parkinson Marrakech | Aide Parkinson Domicile",
      ar: "رعاية باركنسون مراكش | تمريض منزلي للشلل الرعاش",
    },
    metaDescription: {
      en: "Get specialized Parkinson's disease home care in Marrakech. Registered nurses ensuring strict medication schedules, mobility support, and safety checks.",
      fr: "Prise en charge de la maladie de Parkinson à domicile à Marrakech. Respect rigoureux des heures de traitement, aide à la marche et sécurité.",
      ar: "احصل على رعاية منزلية متخصصة لمرضى الباركنسون في مراكش. ممرضون يضمنون الالتزام التام بمواعيد الأدوية والمساعدة الحركية لتفادي السقوط.",
    },
    keywords: {
      en: [
        "Parkinson Care Marrakech",
        "home nurse Parkinson disease Marrakech",
        "mobility support Parkinson",
        "medication timing Parkinson",
      ],
      fr: [
        "suivi Parkinson Marrakech",
        "aide Parkinson à domicile",
        "infirmier maladie Parkinson Marrakech",
        "garde malade parkinsonien",
      ],
      ar: [
        "رعاية باركنسون مراكش",
        "ممرض منزلي للشلل الرعاش",
        "تنظيم أدوية باركنسون بالمنزل",
        "مساعدة الحركة لمرضى الباركنسون",
      ],
    },
    description: {
      en: "Parkinson's management requires highly strict medication timing to control tremors and rigidity. Our nurses help maintain this schedule, assist patients during 'off' periods, support safe walking to prevent falls, and encourage exercises to preserve motor skills.",
      fr: "La gestion de la maladie de Parkinson repose sur une prise médicamenteuse à heures très précises. Nos infirmiers veillent au respect de ce rythme, soutiennent le patient lors des phases de blocage et sécurisent les déplacements.",
      ar: "تعتمد السيطرة على أعراض الباركنسون على تناول الأدوية في مواعيد دقيقة للغاية لمنع التصلب والارتعاش. يساعد ممرضونا في ضبط المنبهات الدوائية ومساعدة الحركة.",
    },
    highlights: {
      en: [
        "Strict administration of treatments (Levodopa/dopamine agonists) on time",
        "Assistance with balance, transfers, and safety during walking",
        "Facilitation of fine motor skill exercises",
        "Nutritional monitoring to manage swallowing difficulties",
      ],
      fr: [
        "Administration rigoureuse des traitements (Lévodopa) à heures fixes",
        "Aide aux transferts et à la marche pour prévenir le risque de chute",
        "Stimulation de la motricité fine et des exercices d'étirement",
        "Surveillance de l'alimentation face aux risques de fausse route",
      ],
      ar: [
        "إعطاء الأدوية بدقة متناهية وفي مواعيدها الثابتة (مثل ليفودوبا)",
        "مساعدة التوازن والحركة أثناء المشي لتفادي السقوط",
        "تشجيع المريض على القيام بتمارين حركية خفيفة",
        "مراقبة البلع والتغذية لتفادي الاختناق وصعوبة البلع",
      ],
    },
    faqs: {
      en: [
        {
          q: "Why is medication timing so critical for Parkinson's?",
          a: "Taking medication late can cause a sudden return of rigidity and tremors (the 'off' effect), making movements extremely difficult.",
        },
      ],
      fr: [
        {
          q: "Pourquoi l'heure des médicaments est-elle si importante ?",
          a: "Un retard dans la prise peut provoquer un retour soudain des blocages et des tremblements (effet 'off'), rendant tout mouvement impossible.",
        },
      ],
      ar: [
        {
          q: "لماذا تعد مواعيد الأدوية مهمة جداً لمريض الباركنسون؟",
          a: "لأن أي تأخير في تناول الدواء قد يؤدي إلى عودة التصلب والارتعاش بشكل مفاجئ (تأثير 'off')، مما يعيق حركة المريض تماماً.",
        },
      ],
    },
  },
  "dementia-care-marrakech": {
    slug: "dementia-care-marrakech",
    packs: ["essential", "suivi", "intensif", "vip"],
    shortTitle: { en: "Dementia care", fr: "Démence", ar: "رعاية الخرف" },
    procedures: [],
    category: "condition",
    title: {
      en: "Dementia Home Care Services in Marrakech",
      fr: "Prise en Charge de la Démence à Domicile",
      ar: "رعاية مرضى الخرف بالمنزل في مراكش",
    },
    subtitle: {
      en: "Patient Behavioral Support, Memory Care, and Household Safety",
      fr: "Suivi comportemental, stimulation cognitive et repères sécurisés",
      ar: "الدعم السلوكي، تنشيط الذاكرة، وتهيئة المنزل لسلامة المريض",
    },
    metaTitle: {
      en: "Dementia Care Marrakech | Dementia Home Nurse",
      fr: "Suivi Démence Marrakech | Garde Malade Démence Domicile",
      ar: "رعاية الخرف مراكش | جليس مريض الخرف بالمنزل",
    },
    metaDescription: {
      en: "Professional dementia home care in Marrakech. Experienced nurses and caregivers for safety monitoring, behavioral stabilization, and memory support.",
      fr: "Accompagnement de la démence à domicile à Marrakech. Garde-malade qualifié pour assurer la sécurité et la stimulation cognitive du patient.",
      ar: "رعاية منزلية متخصصة لمرضى الخرف في مراكش. ممرضون ومقدمو رعاية للحفاظ على سلامة المريض، استقراره السلوكي وتنشيط ذاكرته.",
    },
    keywords: {
      en: [
        "dementia care Marrakech",
        "home nurse dementia Marrakech",
        "dementia caregiver Marrakech",
        "vascular dementia care home",
      ],
      fr: [
        "suivi démence Marrakech",
        "garde malade démence Marrakech",
        "aide démence à domicile",
        "démence sénile accompagnement",
      ],
      ar: [
        "رعاية الخرف مراكش",
        "تمريض منزلي لمرضى الخرف",
        "جليس مريض الخرف بالمنزل بمراكش",
        "التعامل مع الخرف الشيخوخي",
      ],
    },
    description: {
      en: "Dementia conditions (including vascular and senile dementia) present complex behavioral challenges. Our caregivers offer experienced support to manage mood shifts, create a secure physical environment to prevent accidents, establish reassuring daily structures, and support general health.",
      fr: "Les démences (séniles, vasculaires...) entraînent des troubles cognitifs et comportementaux complexes. Nos intervenants proposent une garde sécurisante, préviennent les accidents domestiques et instaurent un cadre quotidien stable.",
      ar: "يتسبب الخرف (بأنواعه المختلفة كالأوعية الدموية والشيخوخي) في اضطرابات سلوكية ومعرفية صعبة. يوفر فريقنا بيئة منزلية هادئة تحمي المريض وتمنع تقلب المزاج.",
    },
    highlights: {
      en: [
        "Creation of a safe living space to prevent falls and disorientation",
        "Soft redirection techniques to manage anxiety and wandering",
        "Cognitive exercises and memory games",
        "Comprehensive health monitoring and family support",
      ],
      fr: [
        "Aménagement sécurisé de l'espace de vie pour éviter les accidents",
        "Techniques d'apaisement pour canaliser l'errance ou l'agitation",
        "Jeux de mémoire et exercices cognitifs adaptés",
        "Suivi de l'état de santé général et écoute des aidants",
      ],
      ar: [
        "تهيئة مساحة معيشية آمنة تمنع السقوط أو تيهان المريض",
        "أساليب تهدئة لطيفة للتعامل مع التوتر والمشي المتكرر بلا هدف",
        "ألعاب تنشيط الذاكرة وتمارين الإدراك المعرفي",
        "متابعة صحية شاملة ودعم مستمر لأفراد الأسرة",
      ],
    },
    faqs: {
      en: [
        {
          q: "How do you handle memory loss confusion?",
          a: "We avoid arguing or correcting the patient. Instead, we validate their feelings, use simple terms, and gently redirect their attention to comforting activities.",
        },
      ],
      fr: [
        {
          q: "Comment gérez-vous la confusion liée aux pertes de mémoire ?",
          a: "Nous évitons de contredire le patient. Nous validons son ressenti, parlons calmement avec des mots simples et captons son intérêt sur une autre activité.",
        },
      ],
      ar: [
        {
          q: "كيف تتعاملون مع تشتت المريض وفقدان الذاكرة؟",
          a: "نتجنب تماماً مجادلة المريض أو تصحيحه بشدة. بدلاً من ذلك، نتفهم مشاعره، نتحدث بعبارات بسيطة، ونوجه انتباهه بلطف إلى شيء مريح ومألوف.",
        },
      ],
    },
  },

  "home-nursing-marrakech": {
    slug: "home-nursing-marrakech",
    packs: ["essential", "suivi", "intensif", "vip"],
    shortTitle: { en: "Home nursing", fr: "Soins infirmiers", ar: "التمريض المنزلي" },
    procedures: ["standard-nursing-visit", "simple-dressing", "im-injection", "iv-infusion"],
    category: "pillar",
    title: {
      en: "Home Nursing Services in Marrakech",
      fr: "Soins Infirmiers à Domicile à Marrakech",
      ar: "رعاية تمريضية منزلية في مراكش",
    },
    subtitle: {
      en: "24/7 Professional & Certified Home Healthcare Support",
      fr: "Soins médicaux professionnels à domicile 24h/24 & 7j/7",
      ar: "دعم رعاية صحية منزلية محترف ومعتمد على مدار الساعة",
    },
    metaTitle: {
      en: "Home Nursing Marrakech | 24/7 Professional Medical Care",
      fr: "Soins à Domicile Marrakech | Soins Infirmiers Professionnels",
      ar: "تمريض منزلي مراكش | رعاية طبية منزلية على مدار الساعة",
    },
    metaDescription: {
      en: "Professional home nursing services in Marrakech. Registered nurses for elderly care, post-surgery, IV therapy, and medical assistance for tourists. Available 24/7.",
      fr: "Services de soins infirmiers à domicile à Marrakech. Infirmiers qualifiés pour personnes âgées, convalescence, perfusion et assistance médicale touristique.",
      ar: "خدمات تمريض منزلي محترفة في مراكش. ممرضون مسجلون لرعاية المسنين، ما بعد الجراحة، العلاج بالحقن الوريدي، والمساعدة الطبية للسياح. متاح 24/7.",
    },
    keywords: {
      en: [
        "home nursing Marrakech",
        "healthcare at home Marrakech",
        "medical care at home Marrakech",
        "24/7 home nursing services Marrakech",
        "English speaking nurse Marrakech",
      ],
      fr: [
        "soins à domicile Marrakech",
        "soins infirmiers à domicile Marrakech",
        "infirmier à domicile Marrakech",
        "infirmière à domicile Marrakech",
        "soins de santé à domicile",
      ],
      ar: [
        "ممرض منزلي مراكش",
        "رعاية طبية منزلية مراكش",
        "تمريض منزلي في مراكش 24/7",
        "خدمات صحية بالمنزل مراكش",
      ],
    },
    description: {
      en: "Sanad Care provides comprehensive, high-quality home nursing and clinical care directly in the comfort of your home, villa, or hotel in Marrakech. Our team of state-registered nurses delivers concierge-level medical monitoring and interventions under strict protocols.",
      fr: "Sanad Care propose des soins infirmiers et une assistance médicale complète directement dans le confort de votre maison, riad ou hôtel à Marrakech. Nos infirmiers diplômés d'État assurent une surveillance clinique et des interventions conformes aux standards médicaux les plus stricts.",
      ar: "يقدم سند كير رعاية تمريضية منزلية شاملة وعالية الجودة مباشرة في منزلك أو فيلتك أو فندقك بمراكش. يقدم فريقنا من الممرضين والممرضات المؤهلين مراقبة طبية وتدخلات دقيقة تحت بروتوكولات صارمة.",
    },
    highlights: {
      en: [
        "Licensed and certified registered nurses on call",
        "Available 24/7 for regular care and urgent visits",
        "English, French, and Arabic speaking healthcare staff",
        "Coordination with local doctors and clinics",
        "Detailed medical reports and family updates",
      ],
      fr: [
        "Infirmiers et infirmières diplômés d'État agréés",
        "Disponibilité 24h/24 et 7j/7 pour soins réguliers ou urgents",
        "Personnel médical parlant français, anglais et arabe",
        "Coordination directe avec les médecins traitants et cliniques",
        "Suivi informatisé et rapports réguliers aux familles",
      ],
      ar: [
        "ممرضون وممرضات مرخصون ومؤهلون علمياً",
        "متاحون 24 ساعة طوال أيام الأسبوع للزيارات الطارئة والرعاية الدورية",
        "طاقم يتحدث العربية والفرنسية والإنجليزية بطلاقة",
        "تنسيق كامل مع الأطباء المعالجين والمستشفيات",
        "تقارير طبية وتحديثات دورية للعائلات",
      ],
    },
    faqs: {
      en: [
        {
          q: "What services do your home nurses provide in Marrakech?",
          a: "Our home nurses handle injections, IV therapy, wound dressings, blood collections, post-surgery recovery, and daily clinical monitoring.",
        },
        {
          q: "Do you have English speaking nurses for tourists?",
          a: "Yes, we have multilingual nurses fluent in English, French, and Arabic to support residents and tourists visiting Marrakech.",
        },
      ],
      fr: [
        {
          q: "Quels soins peuvent être dispensés à domicile ?",
          a: "Nos infirmiers s'occupent des injections, perfusions, pansements simples et complexes, prises de sang, et du suivi des constantes.",
        },
        {
          q: "Proposez-vous des interventions d'urgence à Marrakech ?",
          a: "Oui, nos équipes peuvent intervenir rapidement à domicile ou à l'hôtel pour des soins prescrits ou des évaluations cliniques.",
        },
      ],
      ar: [
        {
          q: "ما هي الخدمات التمريضية التي تقدمونها في المنزل؟",
          a: "يقدم ممرضونا الحقن بجميع أنواعها، تركيب المحاليل الوريدية، العناية بالجروح والضمادات، سحب الدم، ومراقبة المؤشرات الحيوية.",
        },
        {
          q: "هل يتوفر لديكم ممرضون يتحدثون الإنجليزية للسياح؟",
          a: "نعم، لدينا طاقم تمريضي متعدد اللغات يتحدث الإنجليزية والفرنسية والعربية لتقديم الرعاية الكاملة لزوار وسياح مراكش.",
        },
      ],
    },
  },

  "nurse-at-home-marrakech": {
    slug: "nurse-at-home-marrakech",
    packs: [],
    shortTitle: { en: "Nurse at home", fr: "Infirmier à domicile", ar: "ممرض في المنزل" },
    procedures: ["standard-nursing-visit", "im-injection", "iv-infusion"],
    category: "service",
    title: {
      en: "Registered Nurse at Home in Marrakech",
      fr: "Infirmier à Domicile à Marrakech",
      ar: "ممرض بالمنزل في مراكش",
    },
    subtitle: {
      en: "Qualified Private Nurses for Short or Long-Term Medical Care",
      fr: "Infirmiers et infirmières qualifiés pour soins ponctuels ou continus",
      ar: "ممرضون خصوصيون مؤهلون للرعاية الطبية قصيرة أو طويلة الأمد",
    },
    metaTitle: {
      en: "Nurse at Home Marrakech | Registered Private Nurses",
      fr: "Infirmier à Domicile Marrakech | Infirmière Libérale Privée",
      ar: "ممرض منزلي مراكش | خدمة تمريض منزلي خصوصي",
    },
    metaDescription: {
      en: "Book a registered nurse at home in Marrakech. Qualified private nursing services for injections, blood tests, dressings, and elderly care. Available 24/7.",
      fr: "Réservez un infirmier à domicile à Marrakech. Soins infirmiers qualifiés pour injections, prises de sang, pansements et garde-malade. Disponible 24h/24.",
      ar: "احجز ممرضًا منزليًا في مراكش. خدمات تمريضية خصوصية مؤهلة للحقن، سحب الدم، الضمادات، ورعاية كبار السن. متاح على مدار الساعة.",
    },
    keywords: {
      en: [
        "nurse at home Marrakech",
        "private nurse Marrakech",
        "registered nurse Marrakech",
        "urgent nurse visit Marrakech",
      ],
      fr: [
        "infirmier à domicile Marrakech",
        "infirmière à domicile Marrakech",
        "soins infirmiers Marrakech",
        "visite infirmier Marrakech",
      ],
      ar: [
        "ممرض منزلي مراكش",
        "ممرضة منزلية في مراكش",
        "خدمة تمريض خصوصي مراكش",
        "زيارة تمريضية عاجلة مراكش",
      ],
    },
    description: {
      en: "Whether you need an urgent single visit for an injection or a dedicated nurse for long-term clinical care, our certified nursing professionals are ready to assist. We match patients with experienced nurses tailored to their medical requirements.",
      fr: "Que ce soit pour une injection unique ou pour un suivi de soins complexes à long terme, nos infirmiers diplômés d'État sont à votre service. Nous sélectionnons le profil le plus adapté aux besoins spécifiques de chaque patient.",
      ar: "سواء كنت بحاجة إلى زيارة واحدة عاجلة لإعطاء حقنة أو ممرض مخصص لمراقبة طبية طويلة الأمد، فإن ممرضينا المعتمدين جاهزون لخدمتكم بمراكش.",
    },
    highlights: {
      en: [
        "Experienced registered nurses (IDE)",
        "Strict compliance with doctor prescriptions",
        "Emergency calls and rapid nurse deployments",
        "Caring and respectful approach",
      ],
      fr: [
        "Infirmiers diplômés d'État expérimentés",
        "Respect absolu des prescriptions médicales",
        "Déploiement rapide pour soins programmés ou urgents",
        "Approche douce axée sur le confort et la dignité",
      ],
      ar: [
        "ممرضون مجازون من الدولة ذوو خبرة واسعة",
        "التزام مطلق بالوصفات الطبية وتعليمات الأطباء",
        "إمكانية الحضور السريع للزيارات العاجلة",
        "عناية فائقة تركز على كرامة المريض وراحته",
      ],
    },
    faqs: {
      en: [
        {
          q: "Can I book a nurse for a 24-hour shift?",
          a: "Yes, we provide 12-hour and 24-hour continuous nursing supervision for patients requiring close monitoring.",
        },
      ],
      fr: [
        {
          q: "Puis-je avoir un infirmier pour des gardes de nuit ?",
          a: "Oui, nous proposons des gardes de nuit et des surveillances continues de 12h ou 24h selon la situation médicale.",
        },
      ],
      ar: [
        {
          q: "هل يمكنني حجز ممرض لمناوبة 24 ساعة؟",
          a: "نعم، نحن نوفر رعاية تمريضية مستمرة على مدار 12 أو 24 ساعة للمرضى الذين يحتاجون لمراقبة دقيقة ومستمرة.",
        },
      ],
    },
  },

  "blood-test-at-home-marrakech": {
    slug: "blood-test-at-home-marrakech",
    packs: [],
    shortTitle: { en: "Blood test", fr: "Prise de sang", ar: "سحب الدم" },
    procedures: ["blood-sampling"],
    category: "service",
    title: {
      en: "Blood Test & Collection at Home in Marrakech",
      fr: "Prélèvement Sanguin à Domicile à Marrakech",
      ar: "تحليل وسحب الدم في المنزل بمراكش",
    },
    subtitle: {
      en: "Convenient Home Sample Collection with Safe Lab Delivery",
      fr: "Prélèvement de sang à domicile et acheminement sécurisé au laboratoire",
      ar: "سحب عينات الدم بشكل مريح من المنزل مع نقل آمن للمختبر",
    },
    metaTitle: {
      en: "Blood Test at Home Marrakech | Home Sample Collection",
      fr: "Prise de Sang à Domicile Marrakech | Laboratoire à Domicile",
      ar: "تحليل دم منزلي مراكش | سحب عينات الدم في المنزل",
    },
    metaDescription: {
      en: "Need a blood test? Skip the wait. Get professional blood collection at your home or hotel in Marrakech with quick delivery to trusted laboratories.",
      fr: "Besoin d'une prise de sang ? Évitez l'attente. Prélèvement sanguin professionnel à domicile ou à l'hôtel à Marrakech avec envoi rapide au laboratoire.",
      ar: "هل تحتاج لتحليل دم؟ تجنب عناء الانتظار. احصل على سحب دم احترافي في منزلك أو فندقك بمراكش مع نقل سريع ومضمون لأفضل المختبرات.",
    },
    keywords: {
      en: [
        "blood test at home Marrakech",
        "home blood collection Marrakech",
        "blood test for tourists Marrakech",
        "same day blood test Marrakech",
      ],
      fr: [
        "prise de sang à domicile Marrakech",
        "laboratoire à domicile Marrakech",
        "prélèvement sanguin Marrakech",
        "analyse de sang à domicile",
      ],
      ar: [
        "تحليل دم في المنزل مراكش",
        "سحب دم منزلي بمراكش",
        "تحليل دم للسياح في مراكش",
        "أخذ عينات الدم بالمنزل",
      ],
    },
    description: {
      en: "We arrange for qualified nurses to collect blood samples at your residence or hotel room. The samples are quickly transported to partner accredited medical laboratories in Marrakech, ensuring fast and accurate results without you having to travel.",
      fr: "Nous organisons le prélèvement de vos bilans sanguins directement chez vous ou à votre hôtel. Nos infirmiers acheminent ensuite les tubes dans des conditions de sécurité optimales vers des laboratoires accrédités partenaires à Marrakech.",
      ar: "نوفر ممرضين مؤهلين لسحب عينات الدم في منزلك أو غرفتك بالفندق، ثم نقوم بنقلها سريعاً إلى مختبرات التحاليل الطبية الشريكة والمعتمدة بمراكش لضمان نتائج دقيقة.",
    },
    highlights: {
      en: [
        "Painless and hygienic collection protocols",
        "Immediate transfer to certified clinical laboratories",
        "Fast result collection sent directly to your email/WhatsApp",
        "Available for elderly, children, and hotel guests",
      ],
      fr: [
        "Technique de prélèvement douce et hygiène stricte",
        "Acheminement rapide dans le respect de la chaîne du froid",
        "Résultats transmis directement par e-mail ou WhatsApp",
        "Idéal pour personnes âgées, enfants ou touristes à l'hôtel",
      ],
      ar: [
        "طرق سحب دم غير مؤلمة مع تعقيم كامل",
        "نقل فوري وسريع للمختبرات الطبية المعتمدة",
        "إرسال النتائج فور صدورها عبر البريد الإلكتروني أو واتساب",
        "مناسب جداً لكبار السن والأطفال ونزلاء الفنادق",
      ],
    },
    faqs: {
      en: [
        {
          q: "Are the laboratory analysis fees included in the price?",
          a: "No, our service covers the nurse's visit, equipment, collection, and delivery to the lab. The laboratory bills the analysis costs separately.",
        },
      ],
      fr: [
        {
          q: "Les frais d'analyse du laboratoire sont-ils inclus ?",
          a: "Non, notre prestation comprend le déplacement de l'infirmier, le matériel, le prélèvement et le dépôt au labo. Les analyses sont facturées par le laboratoire.",
        },
      ],
      ar: [
        {
          q: "هل رسوم المختبر للتحليل مشمولة في السعر؟",
          a: "لا، تغطي خدمتنا زيارة الممرض، المستلزمات، عملية السحب والنقل. يقوم المختبر بفوترة تكاليف التحليل بشكل منفصل.",
        },
      ],
    },
  },

  "injection-at-home-marrakech": {
    slug: "injection-at-home-marrakech",
    packs: [],
    shortTitle: { en: "Injections", fr: "Injections", ar: "الحقن" },
    procedures: ["im-injection", "sc-injection", "home-vaccination"],
    category: "service",
    title: {
      en: "Injection at Home in Marrakech",
      fr: "Injection à Domicile à Marrakech",
      ar: "حقن في المنزل بمراكش",
    },
    subtitle: {
      en: "Safe Administration of Prescribed Injections (IM, SC, IV)",
      fr: "Administration sécurisée d'injections prescrites par votre médecin",
      ar: "تقديم آمن للحقن الموصوفة طبياً (عضلي، تحت الجلد، وريدي)",
    },
    metaTitle: {
      en: "Injection at Home Marrakech | Nurse for Injection",
      fr: "Injection à Domicile Marrakech | Piqûre à Domicile",
      ar: "حقن في المنزل مراكش | ممرض لإعطاء الحقن بالمنزل",
    },
    metaDescription: {
      en: "Need a prescribed injection? Get safe, professional intramuscular or subcutaneous injections administered at home by registered nurses in Marrakech.",
      fr: "Besoin d'une injection ? Faites appel à un infirmier à domicile à Marrakech pour vos injections intramusculaires, sous-cutanées ou intraveineuses.",
      ar: "هل تحتاج لحقنة موصوفة؟ احصل على حقن عضلي أو تحت الجلد آمن وبطريقة احترافية في منزلك بواسطة ممرضين معتمدين في مراكش.",
    },
    keywords: {
      en: [
        "injection at home Marrakech",
        "intramuscular injection Marrakech",
        "subcutaneous injection Marrakech",
        "nurse for injection Marrakech",
      ],
      fr: [
        "injection à domicile Marrakech",
        "piqûre à domicile Marrakech",
        "injection intramusculaire Marrakech",
        "injection sous-cutanée Marrakech",
      ],
      ar: [
        "حقن منزلي مراكش",
        "حقنة عضلية في المنزل مراكش",
        "حقن تحت الجلد مراكش",
        "ممرض لإعطاء الحقن بالمنزل",
      ],
    },
    description: {
      en: "Skip the trip to a crowded clinic. Our home nurses safely administer your prescribed treatments, including insulin, vitamins, pain relief, anticoagulants, or antibiotics. We strictly follow medical protocols to prevent complications.",
      fr: "Évitez les déplacements. Nos infirmiers administrent vos injections prescrites (anticoagulants, vitamines, antibiotiques, insuline) à votre domicile, dans le respect rigoureux des règles d'asepsie et de sécurité.",
      ar: "تجنب عناء الذهاب للمستوصف. يقوم ممرضونا بإعطاء الحقن الموصوفة لك مثل الأنسولين، الفيتامينات، مسكنات الألم، مضادات التخثر أو المضادات الحيوية في منزلك.",
    },
    highlights: {
      en: [
        "Strict adherence to medical prescriptions",
        "Sterile equipment and clinical waste disposal",
        "Post-injection safety monitoring for side effects",
        "Qualified for IM, SC, and direct IV injections",
      ],
      fr: [
        "Respect strict de l'ordonnance médicale",
        "Utilisation de matériel stérile à usage unique",
        "Surveillance post-injection des effets indésirables",
        "Compétence pour injections IM, sous-cutanées et IV",
      ],
      ar: [
        "اتباع دقيق ومطابقة تامة للوصفة الطبية",
        "استخدام مستلزمات معقمة مع التخلص الآمن من النفايات الطبية",
        "مراقبة المريض بعد الحقن للاطمئنان على عدم حدوث أعراض جانبية",
        "مؤهلون للحقن العضلي، تحت الجلد، والوريدي المباشر",
      ],
    },
    faqs: {
      en: [
        {
          q: "Do I need a medical prescription for home injections?",
          a: "Yes. For safety and legal compliance, we require a valid doctor's prescription to administer any injection.",
        },
      ],
      fr: [
        {
          q: "Faut-il une ordonnance pour faire une piqûre à domicile ?",
          a: "Oui. Pour des raisons réglementaires et de sécurité, nous exigeons une ordonnance médicale valide.",
        },
      ],
      ar: [
        {
          q: "هل أحتاج لوصفة طبية لإعطاء الحقن بالمنزل؟",
          a: "نعم، لأسباب قانونية وطبية تتعلق بسلامتك، نطلب وجود وصفة طبية صالحة لإعطاء أي حقنة.",
        },
      ],
    },
  },

  "wound-care-marrakech": {
    slug: "wound-care-marrakech",
    packs: [],
    shortTitle: { en: "Wound care", fr: "Soins des plaies", ar: "العناية بالجروح" },
    procedures: ["simple-dressing", "complex-dressing", "stitch-removal"],
    category: "service",
    title: {
      en: "Wound Care & Dressing Changes at Home",
      fr: "Soins des Plaies et Pansements à Domicile",
      ar: "العناية بالجروح وتغيير الضمادات في المنزل",
    },
    subtitle: {
      en: "Post-Surgery Dressing, Ulcer Treatment, and Infected Wound Management",
      fr: "Pansements post-opératoires, traitement d'escarres et plaies infectées",
      ar: "ضمادات ما بعد الجراحة، علاج قرح الفراش، والعناية بالجروح الملتهبة",
    },
    metaTitle: {
      en: "Wound Care Marrakech | Home Dressing Change",
      fr: "Pansement à Domicile Marrakech | Soins des Plaies",
      ar: "ضمادة وتضميد الجروح بالمنزل مراكش | علاج قرح الفراش",
    },
    metaDescription: {
      en: "Professional wound care and dressing changes at home in Marrakech. Post-surgical dressing, bedsore treatment, and complex wound management by registered nurses.",
      fr: "Soins des plaies et changement de pansements à domicile à Marrakech. Pansements chirurgicaux, traitement des escarres par des infirmiers qualifiés.",
      ar: "رعاية احترافية للجروح وتغيير الضمادات في المنزل بمراكش. ضمادات العمليات الجراحية، علاج قرح الفراش، والعناية بالجروح المعقدة بواسطة ممرضين.",
    },
    keywords: {
      en: [
        "wound care Marrakech",
        "dressing change Marrakech",
        "post surgery dressing change Marrakech",
        "pressure ulcer treatment Marrakech",
      ],
      fr: [
        "pansement à domicile Marrakech",
        "soins des plaies Marrakech",
        "changement de pansement Marrakech",
        "traitement escarres à domicile",
      ],
      ar: [
        "تضميد الجروح بالمنزل مراكش",
        "تغيير الضمادات في المنزل بمراكش",
        "علاج قرح الفراش في المنزل",
        "تضميد جروح العمليات الجراحية",
      ],
    },
    description: {
      en: "Improper wound care can lead to serious infections and delayed recovery. Our nurses specialize in surgical staples/stitches removal, simple post-op dressings, and sterile dressing changes for chronic wounds and bedsores.",
      fr: "Des soins inadaptés peuvent retarder la cicatrisation et causer des infections. Nos infirmiers s'occupent du retrait des fils/agrafes, des pansements chirurgicaux et des pansements stériles pour plaies chroniques et escarres.",
      ar: "تتطلب الجروح عناية دقيقة لتجنب الالتهابات. يقدم ممرضونا خدمات إزالة الغرز أو الدبابيس الجراحية، غيار الجروح العادية، وعلاج القرح الجلدية المعقدة وقرح الفراش بطرق معقمة.",
    },
    highlights: {
      en: [
        "Stitch and staple removal protocols",
        "Aseptic wound cleansing and disinfection",
        "Specialized dressings (hydrocolloid, alginate) based on wound stage",
        "Detailed healing progression reports",
      ],
      fr: [
        "Retrait sécurisé des fils de suture et agrafes",
        "Nettoyage et désinfection en milieu stérile",
        "Application de pansements spécifiques (hydrocolloïdes, alginates)",
        "Suivi photographique et transmission de l'évolution au chirurgien",
      ],
      ar: [
        "بروتوكولات إزالة الخيوط والدبابيس الجراحية بأمان",
        "تنظيف وتطهير الجروح تحت ظروف تعقيم كاملة",
        "استخدام ضمادات متخصصة بحسب نوع ومرحلة الجرح",
        "تقارير تفصيلية عن مدى تحسن وتئام الجرح",
      ],
    },
    faqs: {
      en: [
        {
          q: "How often should my dressing be changed?",
          a: "The frequency depends on the surgeon's instructions or the wound state, ranging from daily changes to every 48/72 hours.",
        },
      ],
      fr: [
        {
          q: "À quelle fréquence faut-il refaire le pansement ?",
          a: "La fréquence dépend des consignes du chirurgien ou du type de plaie (quotidien, tous les 2 jours ou 3 jours).",
        },
      ],
      ar: [
        {
          q: "كم مرة يجب تغيير الضمادة على الجرح؟",
          a: "يعتمد معدل تغيير الضمادة على تعليمات الجراح المشرف أو حالة الجرح (يومياً، أو كل يومين، أو كل ثلاثة أيام).",
        },
      ],
    },
  },

  "post-surgery-care-marrakech": {
    slug: "post-surgery-care-marrakech",
    packs: ["essential", "suivi", "intensif", "vip"],
    shortTitle: { en: "Post-surgery care", fr: "Après-opératoire", ar: "ما بعد الجراحة" },
    procedures: ["standard-nursing-visit", "simple-dressing", "im-injection", "iv-infusion"],
    category: "service",
    title: {
      en: "Post-Surgery Home Care in Marrakech",
      fr: "Soins Post-Opératoires à Domicile à Marrakech",
      ar: "الرعاية المنزلية ما بعد الجراحة في مراكش",
    },
    subtitle: {
      en: "Clinical Monitoring and Assistance for a Safe Recovery After Operation",
      fr: "Surveillance clinique et aide à la récupération après chirurgie",
      ar: "المراقبة الطبية والمساعدة لتعافٍ آمن بعد العمليات الجراحية",
    },
    metaTitle: {
      en: "Post-Surgery Care Marrakech | Post-Op Nursing Home Visit",
      fr: "Soins Post-Opératoires Marrakech | Convalescence Domicile",
      ar: "رعاية ما بعد الجراحة مراكش | تمريض منزلي بعد العمليات",
    },
    metaDescription: {
      en: "Professional post-surgery care at home in Marrakech. Wound monitoring, pain management, drain care, and recovery support by registered nurses.",
      fr: "Soins post-opératoires à domicile à Marrakech. Gestion de la douleur, surveillance des plaies et drains par des infirmiers diplômés d'État.",
      ar: "رعاية تمريضية متخصصة ما بعد الجراحة بالمنزل في مراكش. مراقبة الجروح، إدارة وتخفيف الألم، العناية بالدرنقة وتسهيل فترة النقاهة.",
    },
    keywords: {
      en: [
        "post surgery care Marrakech",
        "recovery after surgery Marrakech",
        "post surgery nurse Marrakech",
        "care after cosmetic surgery Marrakech",
      ],
      fr: [
        "soins post opératoires Marrakech",
        "convalescence après chirurgie Marrakech",
        "infirmier post-opératoire Marrakech",
        "soins après chirurgie esthétique",
      ],
      ar: [
        "رعاية بعد العملية الجراحية مراكش",
        "نقاهة بعد الجراحة في المنزل",
        "ممرض بعد العمليات الجراحية",
        "رعاية بعد عمليات التجميل بمراكش",
      ],
    },
    description: {
      en: "Returning home after surgery can feel overwhelming. Our nurses ease this transition by managing vital signs, administering analgesics and anticoagulants, monitoring surgical drains, dressing wounds, and coordinating with your surgeon to prevent postoperative complications.",
      fr: "Le retour à la maison après une opération nécessite un suivi rigoureux. Nos infirmiers prennent en charge la surveillance des drains, la réfection des pansements, l'injection d'anticoagulants et la gestion de la douleur conformément aux directives médicales.",
      ar: "العودة للمنزل بعد الجراحة تتطلب رعاية دقيقة. يقدم ممرضونا المتابعة الطبية للعلامات الحيوية، إعطاء مسكنات الألم ومضادات التخثر، مراقبة درنقة الجراحة وغيار الجروح لتفادي أي مضاعفات.",
    },
    highlights: {
      en: [
        "Surgical wound and incision site monitoring",
        "Administration of prescribed painkillers and injections",
        "Drain output tracking and safe emptying/removal",
        "Early detection of postoperative infections or thrombosis",
      ],
      fr: [
        "Surveillance clinique de la cicatrisation",
        "Administration de la médication antalgique prescrite",
        "Suivi, vidange et gestion des drains chirurgicaux",
        "Prévention active des phlébites et infections nosocomiales",
      ],
      ar: [
        "متابعة دقيقة لمكان الشق الجراحي والتئام الجرح",
        "إعطاء مسكنات الألم والأدوية الموصوفة بدقة",
        "تفريغ ومراقبة كمية إفرازات الدرنقة والتخلص منها بأمان",
        "الكشف المبكر عن أي علامات التهاب أو جلطات وريدية عميقة",
      ],
    },
    faqs: {
      en: [
        {
          q: "Do you handle recovery after cosmetic surgery?",
          a: "Yes, we regularly assist patients recovering from cosmetic, orthopedic, and general surgical procedures.",
        },
      ],
      fr: [
        {
          q: "Assurez-vous le suivi après une chirurgie esthétique ?",
          a: "Oui, nos équipes accompagnent régulièrement les convalescences après chirurgie esthétique, orthopédique ou générale.",
        },
      ],
      ar: [
        {
          q: "هل تقدمون الرعاية المنزلية بعد عمليات التجميل؟",
          a: "نعم، نقدم رعاية نقاهة متخصصة بعد عمليات التجميل، جراحة العظام، والجراحات العامة والبطنية.",
        },
      ],
    },
  },

  "hospitalization-at-home-marrakech": {
    slug: "hospitalization-at-home-marrakech",
    packs: ["essential", "suivi", "intensif", "vip"],
    shortTitle: {
      en: "Hospital at home",
      fr: "Hospitalisation à domicile",
      ar: "الاستشفاء المنزلي",
    },
    procedures: ["standard-nursing-visit", "simple-dressing", "im-injection", "iv-infusion"],
    category: "service",
    title: {
      en: "Hospitalization at Home in Marrakech",
      fr: "Hospitalisation à Domicile (HAD) à Marrakech",
      ar: "الاستشفاء المنزلي في مراكش",
    },
    subtitle: {
      en: "Continuous Medical Supervision as an Alternative to Hospital Stay",
      fr: "Suivi clinique intensif à domicile pour éviter l'hospitalisation classique",
      ar: "مراقبة طبية مكثفة بالمنزل كبديل للبقاء في المستشفى",
    },
    metaTitle: {
      en: "Hospitalization at Home Marrakech | Medical Monitoring",
      fr: "Hospitalisation à Domicile Marrakech | HAD Marrakech",
      ar: "مستشفى في المنزل مراكش | خدمة الاستشفاء المنزلي",
    },
    metaDescription: {
      en: "Get continuous clinical monitoring at home. Our hospitalization at home service in Marrakech offers medical-grade care in the comfort of your home.",
      fr: "Bénéficiez d'une surveillance clinique continue à domicile. Notre HAD à Marrakech propose des soins lourds encadrés dans le confort familial.",
      ar: "احصل على مراقبة طبية مستمرة في المنزل. توفر خدمة الاستشفاء المنزلي بمراكش رعاية صحية بمستوى المستشفيات مع توفير الراحة المنزلية.",
    },
    keywords: {
      en: [
        "home hospitalization Marrakech",
        "hospitalization at home after surgery Marrakech",
        "alternative to hospital stay Marrakech",
        "long term home medical care Marrakech",
      ],
      fr: [
        "hospitalisation à domicile Marrakech",
        "alternative hospitalisation Marrakech",
        "had marrakech",
        "soins intensifs à domicile",
      ],
      ar: [
        "الاستشفاء المنزلي مراكش",
        "تنويم منزلي طبي مراكش",
        "بديل البقاء في المستشفى بمراكش",
        "رعاية طبية منزلية مكثفة",
      ],
    },
    description: {
      en: "For chronic conditions, severe infections requiring long IV courses, or palliative needs, staying in the hospital is not always necessary. Our team provides hospital-grade monitoring, oxygen management, catheter care, and coordination with physicians for safe home-based recovery.",
      fr: "Pour certaines affections complexes (infections sévères sous perfusion prolongée, fin de vie), l'HAD permet d'éviter la chambre d'hôpital. Nous assurons la coordination logistique, l'oxygénothérapie et le suivi clinique rigoureux sous protocole médical.",
      ar: "بالنسبة للحالات المزمنة، أو الالتهابات الشديدة التي تتطلب مضادات حيوية وريدية مطولة، فإن البقاء بالمستشفى ليس حلاً وحيداً. نوفر رعاية استشفاء منزلي متكاملة مع مراقبة الأكسجين وتنسيق كامل مع طبيبك المعالج.",
    },
    highlights: {
      en: [
        "Regular multi-daily vital signs monitoring",
        "Administration of complex treatments and infusions",
        "Direct collaboration with treating doctors and clinics",
        "Coordination of medical equipment (beds, oxygen, monitoring monitors)",
      ],
      fr: [
        "Passages infirmiers multiples et réguliers dans la journée",
        "Administration de protocoles thérapeutiques complexes",
        "Collaboration et rapports directs avec le médecin prescripteur",
        "Logistique de matériel médicalisé (lit médicalisé, oxygène, etc.)",
      ],
      ar: [
        "زيارات ومراقبة متعددة للعلامات الحيوية على مدار اليوم",
        "تنفيذ البروتوكولات العلاجية المعقدة والمحاليل الوريدية",
        "تنسيق مباشر وإرسال تحديثات دورية للطبيب المعالج",
        "ترتيب وتأمين الأجهزة الطبية اللازمة (أسرّة طبية، أجهزة أكسجين)",
      ],
    },
    faqs: {
      en: [
        {
          q: "How does hospitalization at home work?",
          a: "The treatment is requested by your doctor. We deploy a lead nurse to set up the care plan, place necessary equipment, and schedule regular nursing shifts.",
        },
      ],
      fr: [
        {
          q: "Comment s'organise une HAD à Marrakech ?",
          a: "Sur prescription de votre médecin, nous mettons en place un planning de passage d'infirmiers, livrons le matériel nécessaire et assurons le suivi clinique quotidien.",
        },
      ],
      ar: [
        {
          q: "كيف يتم تنظيم الاستشفاء المنزلي؟",
          a: "بناءً على طلب وتوجيهات طبيبك، نقوم بوضع خطة زيارات التمريض، توفير الأجهزة الطبية المطلوبة، وجدولة المتابعة الطبية اليومية للمريض.",
        },
      ],
    },
  },

  "palliative-care-marrakech": {
    slug: "palliative-care-marrakech",
    packs: [],
    shortTitle: { en: "Palliative care", fr: "Soins palliatifs", ar: "الرعاية التلطيفية" },
    procedures: [],
    category: "service",
    title: {
      en: "Palliative & End of Life Care at Home",
      fr: "Soins Palliatifs et Fin de Vie à Domicile",
      ar: "الرعاية التلطيفية ورعاية نهاية الحياة في المنزل",
    },
    subtitle: {
      en: "Comfort Care, Advanced Pain Management, and Family Support",
      fr: "Soins de confort, gestion de la douleur et soutien aux familles en fin de vie",
      ar: "رعاية تلطيفية لتخفيف الآلام ودعم النفسية للعائلات في المراحل المتقدمة",
    },
    metaTitle: {
      en: "Palliative Care Marrakech | End of Life Nursing Care",
      fr: "Soins Palliatifs Marrakech | Fin de Vie à Domicile",
      ar: "رعاية تلطيفية مراكش | تمريض منزلي للحالات الحرجة",
    },
    metaDescription: {
      en: "Professional palliative care at home in Marrakech. Dignified end of life nursing care, pain relief management, and emotional support for families.",
      fr: "Soins palliatifs à domicile à Marrakech. Accompagnement médicalisé dans la dignité, soulagement de la douleur et écoute des proches.",
      ar: "رعاية تلطيفية احترافية بالمنزل في مراكش. رعاية تمريضية تحفظ كرامة المريض في نهاية الحياة، تخفيف الآلام ودعم نفسي كامل للعائلة.",
    },
    keywords: {
      en: [
        "palliative care Marrakech",
        "end of life care Marrakech",
        "palliative nurse Marrakech",
        "home cancer care Marrakech",
      ],
      fr: [
        "soins palliatifs Marrakech",
        "fin de vie à domicile Marrakech",
        "infirmier palliatif Marrakech",
        "soins cancer à domicile Marrakech",
      ],
      ar: [
        "رعاية تلطيفية مراكش",
        "رعاية نهاية الحياة بالمنزل",
        "تمريض منزلي لمرضى السرطان بمراكش",
        "تخفيف الآلام بالمنزل",
      ],
    },
    description: {
      en: "Sanad Care provides comfort-oriented medical and psychological support for patients facing advanced or terminal illnesses. Our nurses specialize in pain management, symptom relief, hygiene, and ensuring the highest quality of life and dignity in the comfort of home.",
      fr: "Sanad Care accompagne les personnes en phase avancée de maladie avec une approche centrée sur le confort. Nos infirmiers sont formés au soulagement de la douleur, à la prévention de l'inconfort et à l'écoute bienveillante du patient et de ses proches.",
      ar: "يقدم سند كير دعماً طبياً ونفسياً مريحاً للمرضى الذين يواجهون أمراضاً مستعصية أو في مراحلها الأخيرة. يتخصص ممرضونا في السيطرة على الألم، وتخفيف الأعراض، والحفاظ على كرامة المريض.",
    },
    highlights: {
      en: [
        "Monitoring of prescribed treatment and infusions",
        "Gentle hygiene, skin protection, and position changing",
        "Symptom management (nausea, respiratory distress)",
        "Compassionate emotional support for the patient and family",
      ],
      fr: [
        "Surveillance du traitement prescrit et des perfusions",
        "Soins d'hygiène prévenant les douleurs, effleurages escarres",
        "Contrôle des symptômes pénibles (nausées, détresse respiratoire)",
        "Soutien psychologique et écoute pour la famille",
      ],
      ar: [
        "متابعة العلاج الموصوف والمحاليل الوريدية",
        "النظافة الشخصية اللطيفة، العناية بالجلد، وتغيير الوضعيات باستمرار",
        "إدارة الأعراض الصعبة (الغثيان، ضيق التنفس)",
        "دعم معنوي ونفسي رحيم للمريض وأفراد أسرته",
      ],
    },
    faqs: {
      en: [
        {
          q: "Can you coordinate with cancer centers and doctors?",
          a: "Yes, our nurses work in direct coordination with oncology centers, treating physicians, and palliative care specialists.",
        },
      ],
      fr: [
        {
          q: "Travaillez-vous avec les oncologues du patient ?",
          a: "Oui, nos infirmiers travaillent en lien étroit avec les centres d'oncologie et les médecins traitants du patient.",
        },
      ],
      ar: [
        {
          q: "هل تنسقون مع أطباء ومراكز الأورام؟",
          a: "نعم، يعمل ممرضونا بالتنسيق المباشر مع مراكز علاج الأورام، الأطباء المعالجين وأخصائيي الرعاية التلطيفية.",
        },
      ],
    },
  },

  "disability-care-marrakech": {
    slug: "disability-care-marrakech",
    packs: [],
    shortTitle: { en: "Disability care", fr: "Handicap", ar: "رعاية ذوي الاحتياجات" },
    procedures: [],
    category: "service",
    title: {
      en: "Disability & Handicap Care at Home",
      fr: "Aide au Handicap à Domicile à Marrakech",
      ar: "رعاية ذوي الاحتياجات الخاصة في المنزل",
    },
    subtitle: {
      en: "Home Assistance and Dedicated Care for Adults and Children with Limited Mobility",
      fr: "Assistance personnalisée et soins pour personnes en situation de handicap",
      ar: "مساعدة منزلية ورعاية مخصصة لذوي الاحتياجات الخاصة ومحدودي الحركة",
    },
    metaTitle: {
      en: "Disability Care Marrakech | Handicap Home Assistance",
      fr: "Aide Handicap Marrakech | Auxiliaire de Vie Domicile",
      ar: "رعاية ذوي الاحتياجات الخاصة مراكش | مرافق لذوي الهمم",
    },
    metaDescription: {
      en: "Professional home support for disabled individuals in Marrakech. Registered caregivers and nurses for daily transfers, personal hygiene, and health monitoring.",
      fr: "Accompagnement au domicile des personnes en situation de handicap à Marrakech. Soins, transferts sécurisés et aide à la vie quotidienne.",
      ar: "دعم منزلي محترف لذوي الاحتياجات الخاصة في مراكش. ممرضون ومقدمو رعاية للمساعدة في الحركة والنظافة الشخصية والمتابعة الصحية اليومية.",
    },
    keywords: {
      en: [
        "disability care Marrakech",
        "home support for disability Marrakech",
        "caregiver for disabled adult Marrakech",
        "handicap assistance Marrakech",
      ],
      fr: [
        "aide handicap Marrakech",
        "garde malade handicap Marrakech",
        "assistance handicap à domicile",
        "auxiliaire de vie handicapé",
      ],
      ar: [
        "رعاية ذوي الاحتياجات الخاصة مراكش",
        "مرافق ذوي الهمم في مراكش",
        "مساعدة ذوي الإعاقة بالمنزل",
        "تمريض منزلي لذوي الاحتياجات الخاصة",
      ],
    },
    description: {
      en: "We offer professional, respectful home assistance for individuals living with physical, cognitive, or sensory disabilities. Our team coordinates daily care, assists with transfers, prevents immobility complications, and monitors general health.",
      fr: "Nous proposons une assistance à domicile respectueuse et sur mesure pour les personnes en situation de handicap moteur ou cognitif. Nous intervenons pour l'aide aux transferts, la toilette, et le suivi médical général.",
      ar: "نحن نقدم رعاية منزلية محترفة ومحترمة للأشخاص الذين يعيشون مع إعاقات حركية أو ذهنية. نساعد في الحركة، النظافة، وتجنب مضاعفات قلة الحركة.",
    },
    highlights: {
      en: [
        "Safe transfers using appropriate techniques and hoists",
        "Help with bathing, skin integrity checks, and personal care",
        "Support with stretching, mobility, and doctor visits",
        "Compassionate companionship promoting independence",
      ],
      fr: [
        "Transferts sécurisés limitant la fatigue et les risques",
        "Toilette complète, soins cutanés et prévention d'escarres",
        "Soutien à la mobilisation douce et accompagnement médical",
        "Présence attentive favorisant l'estime de soi et l'autonomie",
      ],
      ar: [
        "طرق انتقال وحركة آمنة تجنب المريض خطر السقوط",
        "مساعدة في الاستحمام وفحص سلامة الجلد لمنع القرح",
        "دعم في تمارين التمدد البسيطة وتسهيل زيارة الطبيب",
        "مرافقة إنسانية تهدف لتعزيز الثقة بالنفس والاستقلالية",
      ],
    },
    faqs: {
      en: [
        {
          q: "Do you care for disabled children?",
          a: "Yes, we have nurses trained in pediatric nursing and special needs support for children.",
        },
      ],
      fr: [
        {
          q: "Accompagnez-vous des enfants en situation de handicap ?",
          a: "Oui, certains de nos infirmiers sont formés à la pédiatrie et à la prise en charge d'enfants en situation de handicap.",
        },
      ],
      ar: [
        {
          q: "هل تقدمون الرعاية للأطفال ذوي الاحتياجات الخاصة؟",
          a: "نعم، لدينا ممرضون مدربون على رعاية الأطفال من ذوي الاحتياجات الخاصة ودعمهم صحياً.",
        },
      ],
    },
  },

  "physiotherapy-at-home-marrakech": {
    slug: "physiotherapy-at-home-marrakech",
    packs: [],
    shortTitle: { en: "Physiotherapy", fr: "Kinésithérapie", ar: "العلاج الطبيعي" },
    procedures: [],
    category: "service",
    title: {
      en: "Physiotherapy at Home in Marrakech",
      fr: "Kinésithérapie à Domicile à Marrakech",
      ar: "العلاج الطبيعي والترويض الطبي في المنزل بمراكش",
    },
    subtitle: {
      en: "In-Home Rehabilitation for Post-Surgery, Stroke, and Joint Replacements",
      fr: "Séances de rééducation physique à domicile après opération ou AVC",
      ar: "جلسات ترويض طبي منزلي بعد الجلطات الدماغية وعمليات المفاصل",
    },
    metaTitle: {
      en: "Physiotherapy at Home Marrakech | Home Physio",
      fr: "Kinésithérapie à Domicile Marrakech | Kiné Domicile",
      ar: "ترويض طبي بالمنزل مراكش | علاج طبيعي منزلي",
    },
    metaDescription: {
      en: "Professional physiotherapy sessions at your home in Marrakech. Specialized rehabilitation for knee/hip replacements, stroke recovery, and mobility loss.",
      fr: "Séances de kinésithérapie à domicile à Marrakech. Rééducation après prothèse de hanche/genou, réadaptation post-AVC et reprise de la marche.",
      ar: "جلسات علاج طبيعي وترويض طبي محترفة في منزلك بمراكش. تأهيل متخصص لعمليات تغيير مفاصل الركبة والورك، والتعافي من الجلطات الدماغية.",
    },
    keywords: {
      en: [
        "physiotherapy at home Marrakech",
        "knee rehabilitation Marrakech",
        "hip replacement rehabilitation Marrakech",
        "physiotherapist at home Marrakech",
      ],
      fr: [
        "kinésithérapie à domicile Marrakech",
        "rééducation genou Marrakech",
        "kiné prothèse hanche Marrakech",
        "kinésithérapeute à domicile",
      ],
      ar: [
        "ترويض طبي منزلي مراكش",
        "علاج طبيعي في المنزل بمراكش",
        "تأهيل الركبة بعد الجراحة مراكش",
        "أخصائي علاج طبيعي منزلي",
      ],
    },
    description: {
      en: "Recover your mobility faster without the pain of traveling. We connect you with qualified physiotherapists who bring rehabilitation equipment directly to your home or hotel. Perfect for post-fracture recovery, post-stroke motor training, and elderly gait stability.",
      fr: "Retrouvez votre mobilité sans vous déplacer. Nous coordonnons l'intervention de kinésithérapeutes qualifiés à votre domicile ou hôtel pour des séances de rééducation fonctionnelle adaptées à votre rythme.",
      ar: "استعد حركتك ونشاطك بشكل أسرع دون تحمل عناء الانتقال. نوفر أخصائيين مؤهلين في الترويض الطبي وجلسات العلاج الطبيعي مع إحضار الأجهزة اللازمة لمنزلك أو فندقك بمراكش.",
    },
    highlights: {
      en: [
        "Post-surgical joint mobilization (knee, hip, shoulder)",
        "Stroke and neurological motor rehabilitation",
        "Gait training, balance exercises, and fall prevention for seniors",
        "Tailored muscular strengthening programs",
      ],
      fr: [
        "Rééducation articulaire après prothèse (genou, hanche)",
        "Réadaptation motrice post-AVC et troubles neurologiques",
        "Travail de l'équilibre et de la marche chez la personne âgée",
        "Programmes personnalisés de renforcement musculaire",
      ],
      ar: [
        "تأهيل وحركة المفاصل بعد الجراحات (الركبة، الورك، الكتف)",
        "التأهيل الحركي والعصبي بعد الجلطات الدماغية (AVC)",
        "تدريب التوازن، تحسين المشي، والوقاية من السقوط للمسنين",
        "برامج مخصصة لتقوية العضلات واستعادة مرونتها",
      ],
    },
    faqs: {
      en: [
        {
          q: "How many sessions are recommended per week?",
          a: "The frequency is determined by your physician's prescription, commonly ranging from 2 to 5 sessions per week depending on the complexity.",
        },
      ],
      fr: [
        {
          q: "Combien de séances faut-il faire par semaine ?",
          a: "Cela varie selon la prescription de votre médecin et l'objectif thérapeutique, généralement entre 2 et 5 séances par semaine.",
        },
      ],
      ar: [
        {
          q: "كم عدد الجلسات الموصى بها في الأسبوع؟",
          a: "يتم تحديد عدد الجلسات بناءً على وصفة الطبيب المعالج وحالتك الصحية، وعادة ما تتراوح بين 2 إلى 5 جلسات أسبوعياً.",
        },
      ],
    },
  },

  "postpartum-care-marrakech": {
    slug: "postpartum-care-marrakech",
    packs: [],
    shortTitle: { en: "Postpartum care", fr: "Post-partum", ar: "رعاية ما بعد الولادة" },
    procedures: [],
    category: "service",
    title: {
      en: "Postpartum Care at Home in Marrakech",
      fr: "Soins Postpartum à Domicile à Marrakech",
      ar: "رعاية ما بعد الولادة بالمنزل في مراكش",
    },
    subtitle: {
      en: "Mother Recovery Support, Cesarean Healing, and Guidance After Delivery",
      fr: "Soutien à la maman après l'accouchement, suivi cicatrisation et conseils",
      ar: "دعم تعافي الأم، العناية بجرح الولادة القيصرية، وإرشادات ما بعد الولادة",
    },
    metaTitle: {
      en: "Postpartum Care Marrakech | Mother Recovery Support",
      fr: "Soins Postpartum Marrakech | Accompagnement Jeune Maman",
      ar: "رعاية بعد الولادة مراكش | تمريض منزلي للمرأة بعد الولادة",
    },
    metaDescription: {
      en: "Professional postpartum support at home in Marrakech. Mother care after delivery, cesarean incision dressing, health checks, and nurse support.",
      fr: "Soutien postpartum à domicile à Marrakech. Soins à la jeune maman, pansement césarienne, conseils allaitement et accompagnement par nos infirmières.",
      ar: "دعم ورعاية متخصصة للأم بعد الولادة في المنزل بمراكش. العناية بجرح القيصرية، فحص الصحة العامة للأم، وإرشادات الرعاية الذاتية والرضاعة.",
    },
    keywords: {
      en: [
        "postpartum care Marrakech",
        "mother care after delivery Marrakech",
        "cesarean recovery care Marrakech",
        "nurse postpartum Marrakech",
      ],
      fr: [
        "soins post accouchement Marrakech",
        "soins postpartum Marrakech",
        "pansement césarienne à domicile",
        "suivi accouchement à domicile",
      ],
      ar: [
        "رعاية بعد الولادة بالمنزل مراكش",
        "تمريض النفاس بالمنزل في مراكش",
        "العناية بالأم بعد الولادة القيصرية",
        "متابعة صحة الأم بعد الولادة",
      ],
    },
    description: {
      en: "The weeks following childbirth are crucial for a mother's physical and mental healing. Our experienced nurses assist mothers with cesarean wound dressings, monitoring signs of infection/hemorrhage, breastfeeding guidance, and gentle emotional support to prevent postpartum fatigue.",
      fr: "Le retour à la maison après la maternité est une période délicate. Nos infirmières s'occupent du pansement de césarienne, de la surveillance clinique (tension, saignements, infection), et apportent des conseils précieux à la jeune maman.",
      ar: "تعد الأسابيع التالية للولادة بالغة الأهمية لتعافي الأم جسدياً ونفسياً. تقدم ممرضاتنا العناية بغيار جرح الولادة القيصرية، مراقبة علامات الالتهاب، وتقديم نصائح الرضاعة الطبيعية.",
    },
    highlights: {
      en: [
        "Cesarean incision check and sterile dressing changes",
        "Monitoring of blood pressure, temperature, and uterine contraction",
        "Breastfeeding coaching and latching support",
        "Early detection of postpartum depression or infection warning signs",
      ],
      fr: [
        "Surveillance et réfection stérile du pansement de césarienne",
        "Contrôle des constantes (tension, température, lochies)",
        "Conseils pour l'allaitement maternel et l'engorgement",
        "Prévention du baby blues et soutien émotionnel de la maman",
      ],
      ar: [
        "متابعة جرح الولادة القيصرية وتغيير الضمادات بطرق معقمة",
        "مراقبة ضغط الدم، الحرارة، والتعافي الجسدي للأم",
        "إرشادات ودعم الرضاعة الطبيعية وتخفيف آلام احتقان الثدي",
        "الكشف المبكر عن علامات اكتئاب ما بعد الولادة أو حمى النفاس",
      ],
    },
    faqs: {
      en: [
        {
          q: "When should postpartum nursing visits begin?",
          a: "Visits usually start the day after hospital discharge, especially if you had a cesarean section that requires regular dressing changes.",
        },
      ],
      fr: [
        {
          q: "Quand doivent commencer les visites postpartum ?",
          a: "Dès le lendemain du retour à la maison, surtout en cas de césarienne nécessitant des soins de pansement quotidiens ou réguliers.",
        },
      ],
      ar: [
        {
          q: "متى يجب أن تبدأ زيارات التمريض بعد الولادة؟",
          a: "تبدأ الزيارات عادةً في اليوم التالي للخروج من المستشفى، خاصةً في حالة الولادة القيصرية التي تحتاج إلى غيارات دورية معقمة.",
        },
      ],
    },
  },

  "newborn-care-marrakech": {
    slug: "newborn-care-marrakech",
    packs: [],
    shortTitle: { en: "Newborn care", fr: "Nouveau-né", ar: "رعاية المولود" },
    procedures: [],
    category: "service",
    title: {
      en: "Newborn Care at Home in Marrakech",
      fr: "Soins du Nouveau-Né à Domicile",
      ar: "رعاية حديثي الولادة بالمنزل في مراكش",
    },
    subtitle: {
      en: "Baby Monitoring, Umbilical Cord Care, and Expert Guidance for Parents",
      fr: "Suivi du bébé, soins du cordon ombilical et conseils aux parents",
      ar: "مراقبة الرضيع، العناية بالحبل السري، وإرشادات الخبراء للوالدين",
    },
    metaTitle: {
      en: "Newborn Care Marrakech | Baby Home Nursing Support",
      fr: "Soins Bébé Marrakech | Nurse de Nuit Nouveau-Né",
      ar: "رعاية حديثي الولادة مراكش | ممرضة أطفال منزلية",
    },
    metaDescription: {
      en: "Professional newborn nursing care at home in Marrakech. Umbilical cord care, weight checks, infant jaundice monitoring, and newborn assistance.",
      fr: "Soins du nouveau-né à domicile à Marrakech. Soins du cordon, contrôle de poids, surveillance de la jaunisse et conseils de puériculture.",
      ar: "رعاية تمريضية لحديثي الولادة بالمنزل في مراكش. العناية بالحبل السري، متابعة الوزن، مراقبة اليرقان (الصفار)، ومساعدة الوالدين الجدد.",
    },
    keywords: {
      en: [
        "newborn care Marrakech",
        "newborn nurse Marrakech",
        "baby care at home Marrakech",
        "newborn assistance Marrakech",
      ],
      fr: [
        "soins bébé Marrakech",
        "infirmière puéricultrice Marrakech",
        "nurse de nuit bébé Marrakech",
        "soins cordon ombilical",
      ],
      ar: [
        "رعاية رضيع منزلي مراكش",
        "ممرضة أطفال حديثي الولادة",
        "العناية بالرضع في المنزل بمراكش",
        "متابعة حديثي الولادة بالمنزل",
      ],
    },
    description: {
      en: "Ensure your baby has a healthy start. Our specialized pediatric/newborn nurses assist parents with neonatal care, umbilical cord care, infant weight progression, jaundice screening (visual check), hygiene instruction, and building healthy sleep routines.",
      fr: "Offrez à votre bébé un départ sain. Nos infirmières puéricultrices accompagnent les parents : soins du cordon, surveillance du poids et de la jaunisse, conseils pour le bain, les coliques et le rythme de sommeil.",
      ar: "أمن بداية صحية لطفلك الرضيع. تساعد ممرضاتنا المتخصصات في رعاية الأطفال حديثي الولادة في: نظافة ورعاية السرة، تتبع الوزن، ومراقبة اليرقان.",
    },
    highlights: {
      en: [
        "Umbilical cord cleaning and infection prevention",
        "Neonatal weight progress monitoring",
        "Infant bathing, skincare, and hygiene education",
        "Advice on colics management and baby sleep environment",
      ],
      fr: [
        "Désinfection et soins du cordon ombilical",
        "Suivi régulier du poids du bébé",
        "Apprentissage du bain et des soins d'hygiène du nourrisson",
        "Conseils pour gérer les coliques et optimiser le sommeil",
      ],
      ar: [
        "تنظيف الحبل السري وتعقيمه لمنع أي التهاب",
        "متابعة دقيقة لزيادة ووزن الطفل الرضيع",
        "تعليم الوالدين كيفية الاستحمام والعناية ببشرة الرضيع",
        "تقديم نصائح حول التعامل مع مغص الرضع وتنظيم النوم",
      ],
    },
    faqs: {
      en: [
        {
          q: "Do you offer night nurses for newborns?",
          a: "Yes, we provide night nurse services to assist with feeding and settling the baby, allowing parents to get critical sleep.",
        },
      ],
      fr: [
        {
          q: "Proposez-vous des gardes de nuit pour s'occuper de bébé ?",
          a: "Oui, nos nurses de nuit veillent sur votre nouveau-né et gèrent les biberons ou réveils pour que les parents puissent se reposer.",
        },
      ],
      ar: [
        {
          q: "هل توفرون ممرضات للمبيت مع الرضع ليلاً؟",
          a: "نعم، نحن نوفر ممرضات أطفال ليلاً للإشراف على الرضاعة وتهدئة الطفل، مما يسمح للوالدين بالحصول على قسط كافٍ من النوم.",
        },
      ],
    },
  },

  "chronic-disease-care-marrakech": {
    slug: "chronic-disease-care-marrakech",
    packs: ["essential", "suivi", "intensif", "vip"],
    shortTitle: { en: "Chronic care", fr: "Maladies chroniques", ar: "الأمراض المزمنة" },
    procedures: ["glucose-insulin", "cardio-monitoring"],
    category: "service",
    title: {
      en: "Chronic Disease Management at Home",
      fr: "Suivi des Maladies Chroniques à Domicile",
      ar: "متابعة الأمراض المزمنة بالمنزل في مراكش",
    },
    subtitle: {
      en: "Regular Nursing Supervision for Diabetes, Hypertension, and Heart Conditions",
      fr: "Suivi infirmier régulier (diabète, hypertension, insuffisance cardiaque)",
      ar: "مراقبة تمريضية دورية لمرضى السكري، ضغط الدم، وقصور القلب",
    },
    metaTitle: {
      en: "Chronic Disease Care Marrakech | Home Health Monitoring",
      fr: "Suivi Maladies Chroniques Marrakech | Soins Chroniques",
      ar: "متابعة أمراض مزمنة مراكش | تمريض منزلي دوري",
    },
    metaDescription: {
      en: "Reduce medical complications. Our chronic disease home care in Marrakech offers regular nurse visits for blood pressure monitoring, blood sugar checks, and treatment adherence.",
      fr: "Prévenez les complications. Notre service à Marrakech propose des visites infirmières régulières pour contrôler la tension, glycémie et observance.",
      ar: "قلل من المضاعفات الطبية. تقدم خدمة رعاية الأمراض المزمنة في مراكش زيارات تمريضية دورية لمراقبة ضغط الدم، فحص السكر، والالتزام بالعلاج.",
    },
    keywords: {
      en: [
        "chronic care Marrakech",
        "suivi maladies chroniques Marrakech",
        "diabetes nurse at home Marrakech",
        "blood pressure monitoring Marrakech",
      ],
      fr: [
        "chronic care Marrakech",
        "suivi maladies chroniques Marrakech",
        "suivi diabète domicile Marrakech",
        "contrôle tension à domicile",
      ],
      ar: [
        "متابعة الأمراض المزمنة مراكش",
        "ممرض لمرضى السكري بمراكش",
        "مراقبة ضغط الدم بالمنزل مراكش",
        "رعاية الأمراض المزمنة بالمنزل",
      ],
    },
    description: {
      en: "Managing chronic illnesses requires consistency. Our home nursing service ensures patients stay on track with daily vital monitoring, diabetes checks, cardiac parameters tracking, medication compliance, and immediate warning sign reporting to their physicians.",
      fr: "Les pathologies chroniques nécessitent une surveillance régulière pour éviter les crises. Nos infirmiers effectuent des bilans réguliers (tension, glycémie, poids pour insuffisance cardiaque) et vérifient l'adéquation du traitement.",
      ar: "تتطلب الأمراض المزمنة التزاماً ومتابعة دقيقة. يضمن تمريضنا المنزلي بقاء المرضى في حالة مستقرة عبر قياس السكر والضغط، وفحص الوزن لمريض القلب.",
    },
    highlights: {
      en: [
        "Regular capillary blood glucose check and insulin assistance",
        "Accurate blood pressure and pulse rate tracking",
        "Medication reconciliation and pillbox organization",
        "Early notification of abnormal clinical changes to doctors",
      ],
      fr: [
        "Contrôle régulier de la glycémie et aide aux injections d'insuline",
        "Suivi précis de la pression artérielle et du rythme cardiaque",
        "Gestion et vérification de la prise correcte des médicaments",
        "Signalement immédiat des anomalies au médecin traitant",
      ],
      ar: [
        "فحص سكر الدم الشعيري بانتظام والمساعدة في حقن الأنسولين",
        "متابعة دقيقة لضغط الدم ومعدل نبضات القلب",
        "مراجعة الأدوية وتنظيم علبة الحبوب الأسبوعية",
        "تنبيه فوري للطبيب المعالج في حال وجود علامات غير طبيعية",
      ],
    },
    faqs: {
      en: [
        {
          q: "How can I set up a chronic care program?",
          a: "During our initial consultation, we design a regular schedule (e.g., weekly or multiple times a week) aligned with your doctor's protocols.",
        },
      ],
      fr: [
        {
          q: "Comment mettre en place un suivi chronique ?",
          a: "Après une évaluation initiale, nous définissons avec vous le rythme de passage (ex: hebdomadaire) selon les consignes de votre médecin.",
        },
      ],
      ar: [
        {
          q: "كيف يمكنني إعداد برنامج لمتابعة مرض مزمن بالمنزل؟",
          a: "خلال الاستشارة الأولى، نقوم بتحديد جدول زيارات دوري (مثلاً أسبوعياً) يطابق توجيهات طبيبك المعالج وبروتوكوله الطبي.",
        },
      ],
    },
  },

  "night-care-marrakech": {
    slug: "night-care-marrakech",
    packs: [],
    shortTitle: { en: "Night care", fr: "Garde de nuit", ar: "الرعاية الليلية" },
    procedures: [],
    category: "service",
    title: {
      en: "Night Care & Overnight Nurse Services",
      fr: "Garde Malade de Nuit à Marrakech",
      ar: "ممرض منزلي ليلي ومناوبات ليلية بمراكش",
    },
    subtitle: {
      en: "Overnight Nursing, Sleep Supervision, and Night Respite for Families",
      fr: "Surveillance nocturne, soins infirmiers et relais de nuit pour les proches",
      ar: "رعاية تمريضية ليلية، إشراف أثناء النوم، ومساعدة ليلية للعائلات",
    },
    metaTitle: {
      en: "Night Care Services Marrakech | Overnight Nurse",
      fr: "Garde Malade de Nuit Marrakech | Surveillance Nocturne",
      ar: "رعاية ليلية مراكش | ممرض مبيت منزلي",
    },
    metaDescription: {
      en: "Need overnight medical supervision in Marrakech? Book a night caregiver or nurse for elderly care, post-surgery monitoring, or Alzheimer's safety.",
      fr: "Besoin d'une garde de nuit médicale à Marrakech ? Réservez un infirmier ou garde-malade pour personnes âgées ou convalescence post-opératoire.",
      ar: "هل تحتاج إلى مراقبة طبية ليلية بمراكش؟ احجز ممرضًا أو مرافقًا ليلية لرعاية كبار السن، متابعة ما بعد الجراحة، أو لمرضى الزهايمر.",
    },
    keywords: {
      en: [
        "garde malade nuit Marrakech",
        "night caregiver Marrakech",
        "overnight nurse Marrakech",
        "night nurse for elderly Marrakech",
      ],
      fr: [
        "garde malade nuit Marrakech",
        "garde de nuit malade Marrakech",
        "infirmière de nuit Marrakech",
        "garde nuit senior Marrakech",
      ],
      ar: [
        "جليس ليل للمريض مراكش",
        "ممرض منزلي ليلي بمراكش",
        "ممرض للمبيت مع المريض",
        "رعاية ليلية للمسنين مراكش",
      ],
    },
    description: {
      en: "Get peaceful nights knowing your loved one is safe. Our night nursing services provide professional clinical oversight, assist with night toileting, administer evening/night medications, prevent falls, and monitor patients with dementia or sleep disturbances.",
      fr: "Passez des nuits sereines en confiant votre proche à un professionnel. Nos gardes de nuit assurent la surveillance clinique, l'aide à la miction nocturne, la gestion de l'angoisse et la sécurité des patients désorientés.",
      ar: "احصل على نوم هادئ ومريح وأنت مطمئن على سلامة مريضك. توفر خدمات الرعاية الليلية لدينا ممرضين مؤهلين لمتابعة الحالة الطبية للمريض وتلبية احتياجاته ليلاً.",
    },
    highlights: {
      en: [
        "Clinical supervision throughout the night (8 to 12 hours)",
        "Assistance with safe night-time toileting and position changes",
        "Evening/night medication administration under protocol",
        "Immediate alert and coordination in case of clinical change",
      ],
      fr: [
        "Présence clinique active et continue toute la nuit (8h à 12h)",
        "Aide sécurisée pour se lever la nuit et prévention des chutes",
        "Administration des traitements du soir et de nuit",
        "Alerte et gestion immédiate en cas de problème de santé nocturne",
      ],
      ar: [
        "إشراف ومراقبة طبية مستمرة طوال الليل (من 8 إلى 12 ساعة)",
        "مساعدة آمنة في الذهاب للمرحاض ليلاً وتغيير وضعية النوم",
        "إعطاء أدوية المساء والليل بدقة متناهية وطبقاً للتعليمات",
        "الاستعداد الكامل والتصرف السريع في حالات الطوارئ الليلية",
      ],
    },
    faqs: {
      en: [
        {
          q: "What are the standard hours for night care?",
          a: "Standard shifts are usually from 8:00 PM to 8:00 AM, but hours can be adapted to the family's schedule.",
        },
      ],
      fr: [
        {
          q: "Quelles sont les heures habituelles d'une garde de nuit ?",
          a: "Généralement de 20h00 à 8h00 du matin, mais la plage horaire peut être adaptée selon vos besoins familiaux.",
        },
      ],
      ar: [
        {
          q: "ما هي الساعات المعتمدة للرعاية الليلية؟",
          a: "تكون المناوبة الليلية عادة من الساعة 8:00 مساءً حتى 8:00 صباحاً، ويمكن تعديل الساعات لتناسب ظروف العائلة.",
        },
      ],
    },
  },

  "medical-assistance-tourists-marrakech": {
    slug: "medical-assistance-tourists-marrakech",
    packs: [],
    shortTitle: { en: "Tourist assistance", fr: "Assistance touristes", ar: "مساعدة السياح" },
    procedures: ["standard-nursing-visit", "im-injection"],
    category: "service",
    title: {
      en: "Medical Assistance for Tourists in Marrakech",
      fr: "Assistance Médicale pour Touristes à Marrakech",
      ar: "المساعدة الطبية للسياح في مراكش",
    },
    subtitle: {
      en: "English-Speaking Hotel Nurses & Doctor Coordination for Visitors",
      fr: "Soins infirmiers et coordination médicale à votre hôtel ou riad",
      ar: "ممرضون يتحدثون الإنجليزية وتنسيق طبي للزوار في الفنادق والرياضات",
    },
    metaTitle: {
      en: "Medical Assistance Tourists Marrakech | Hotel Nurse Visit",
      fr: "Assistance Médicale Touriste Marrakech | Infirmier Riad",
      ar: "مساعده طبيه للسياح مراكش | ممرض فندق مراكش",
    },
    metaDescription: {
      en: "Sick in Marrakech? Get rapid medical assistance. English-speaking home nurses for hotel visits, IV hydration drips, injury dressings, and doctor referals.",
      fr: "Malade à Marrakech ? Assistance médicale rapide à l'hôtel ou riad. Infirmiers bilingues pour perfusions, pansements et liaison médecin.",
      ar: "هل تعرضت لوعكة صحية في مراكش؟ احصل على مساعدة طبية سريعة. ممرضون يتحدثون الإنجليزية لزيارتك في الفندق، وتركيب محاليل الجفاف.",
    },
    keywords: {
      en: [
        "medical assistance tourists Marrakech",
        "nurse for tourists Marrakech",
        "English speaking nurse Marrakech",
        "nurse visit hotel Marrakech",
      ],
      fr: [
        "medical assistance tourists Marrakech",
        "soins infirmier touriste Marrakech",
        "infirmier hotel Marrakech",
        "infirmier parlant anglais Marrakech",
      ],
      ar: [
        "مساعدة طبية للسياح في مراكش",
        "ممرض للسياح بمراكش",
        "ممرض فندق في مراكش",
        "تركيب محلول جفاف في الفندق",
      ],
    },
    description: {
      en: "Don't let illness disrupt your vacation in Marrakech. If you experience travel sickness, dehydration, minor injuries, or need post-op follow-up while staying at a hotel, villa, or riad, our English-speaking registered nurses visit you directly to provide clinical relief.",
      fr: "Ne laissez pas la maladie gâcher votre séjour. En cas de déshydratation, intoxication alimentaire, blessures légères ou besoin de soins continus pendant vos vacances à Marrakech, nos infirmiers interviennent directement dans votre hôtel ou riad.",
      ar: "لا تدع الوعكة الصحية تفسد عطلتك في مراكش. إذا شعرت بالجفاف، النزلات المعوية، التسمم الغذائي، أو احتجت لغيار على جرح جراحي خلال إقامتك بالفندق، فإن طاقمنا ينتقل إليك مباشرة.",
    },
    highlights: {
      en: [
        "Rapid nursing visits directly to your hotel room or riad",
        "IV hydration drips for food poisoning and heat exhaustion",
        "Nurses fluent in English, French, and Arabic",
        "Coordination and referrals to English-speaking local doctors",
      ],
      fr: [
        "Visite infirmière rapide directement en chambre d'hôtel ou riad",
        "Perfusion de réhydratation (intoxication alimentaire, insolation)",
        "Infirmiers parfaitement francophones et anglophones",
        "Liaison et prise de rendez-vous avec des médecins locaux bilingues",
      ],
      ar: [
        "زيارات تمريضية سريعة ومباشرة إلى غرفتك بالفندق أو الرياض",
        "تركيب محاليل الجفاف والترطيب لعلاج التسمم الغذائي والإجهاد الحراري",
        "ممرضون يتحدثون الإنجليزية والفرنسية والعربية بطلاقة",
        "تنسيق وتسهيل الكشف مع أطباء محليين يتحدثون لغتك",
      ],
    },
    faqs: {
      en: [
        {
          q: "Can you provide medical invoices for travel insurance reimbursement?",
          a: "Yes, we issue detailed invoices stating the clinical care delivered to help you claim reimbursement from your travel insurance.",
        },
      ],
      fr: [
        {
          q: "Fournissez-vous des factures pour mon assurance voyage ?",
          a: "Oui, nous émettons des factures détaillées avec les actes infirmiers réalisés pour faciliter vos remboursements auprès de votre assurance voyage.",
        },
      ],
      ar: [
        {
          q: "هل تقدمون فواتير طبية لتقديمها لشركة التأمين على السفر؟",
          a: "نعم، نحن نقدم فواتير مفصلة توضح الإجراءات والخدمات الطبية المقدمة لتسهيل استرداد التكاليف من تأمين السفر الخاص بك.",
        },
      ],
    },
  },

  "diabetes-care-marrakech": {
    slug: "diabetes-care-marrakech",
    packs: [],
    shortTitle: { en: "Diabetes care", fr: "Diabète", ar: "رعاية السكري" },
    procedures: ["glucose-insulin"],
    category: "condition",
    title: {
      en: "Diabetes Home Care & Monitoring in Marrakech",
      fr: "Prise en Charge et Suivi du Diabète à Domicile",
      ar: "رعاية مرضى السكري في المنزل بمراكش",
    },
    subtitle: {
      en: "Professional Blood Sugar Checks, Insulin Injection, and Wound Prevention",
      fr: "Contrôle de la glycémie, injections d'insuline et prévention des plaies",
      ar: "فحص سكر الدم، إعطاء حقن الأنسولين، والوقاية من الجروح والقدم السكري",
    },
    metaTitle: {
      en: "Diabetes Care Marrakech | Diabetes Home Nursing",
      fr: "Suivi Diabète Marrakech | Soins Diabétique Domicile",
      ar: "رعاية السكري مراكش | تمريض منزلي لمرضى السكري",
    },
    metaDescription: {
      en: "Specialized home nursing for diabetes management in Marrakech. Blood sugar monitoring, insulin administration, diabetic foot care, and nutritional advice.",
      fr: "Soins infirmiers à domicile pour patients diabétiques à Marrakech. Contrôle glycémique, injections d'insuline et soin du pied diabétique.",
      ar: "تمريض منزلي متخصص لمرضى السكري في مراكش. مراقبة نسبة السكر في الدم، إعطاء الأنسولين، العناية بالقدم السكري، وإرشادات التغذية الصحية.",
    },
    keywords: {
      en: [
        "Diabetes Care Marrakech",
        "diabetic foot care Marrakech",
        "home insulin injection Marrakech",
        "diabetes nurse Marrakech",
      ],
      fr: [
        "soins diabète Marrakech",
        "pied diabétique soins domicile",
        "injection insuline domicile Marrakech",
        "infirmier diabétologue à domicile",
      ],
      ar: [
        "رعاية السكري مراكش",
        "العناية بالقدم السكري بالمنزل",
        "حقن الأنسولين في المنزل مراكش",
        "متابعة السكر المنزلي بمراكش",
      ],
    },
    description: {
      en: "Living with diabetes requires careful daily management to avoid long-term complications. Our home nurses assist with regular capillary tests, precise insulin dosing, diabetic foot monitoring, dietary reminders, and patient education on hypoglycemia and hyperglycemia signs.",
      fr: "Le diabète exige un suivi quotidien rigoureux. Nos infirmiers prennent en charge la surveillance glycémique, l'administration d'insuline, l'inspection préventive des pieds et l'éducation thérapeutique du patient.",
      ar: "يتطلب العيش مع السكري إدارة يومية دقيقة لمنع المضاعفات. يساعد ممرضونا في فحص السكر، ضبط جرعات الأنسولين بدقة، فحص وعناية القدم السكري.",
    },
    highlights: {
      en: [
        "Capillary blood glucose tracking and logbook management",
        "Insulin administration via pens or syringes under prescription",
        "Diabetic foot checks and ulcer prevention",
        "Guidance on hypo/hyperglycemia alert signs",
      ],
      fr: [
        "Suivi glycémique régulier et tenue du carnet de surveillance",
        "Administration d'insuline sous ordonnance (stylos ou seringues)",
        "Contrôle du pied diabétique et prévention des ulcères",
        "Éducation sur la reconnaissance des signes de malaise (hypo/hyper)",
      ],
      ar: [
        "متابعة مستمرة لنسبة السكر وتسجيلها بانتظام",
        "إعطاء الأنسولين بدقة بالحقن أو الأقلام الموصوفة",
        "فحص القدم السكري والوقاية من القروح",
        "توعية المريض بكيفية رصد والتعامل مع حالات هبوط أو ارتفاع السكر",
      ],
    },
    faqs: {
      en: [
        {
          q: "Can you care for a diabetic foot wound at home?",
          a: "We clean and dress diabetic foot wounds using sterile technique, and we alert your doctor immediately if the wound needs medical review.",
        },
      ],
      fr: [
        {
          q: "Prenez-vous en charge les plaies du pied diabétique ?",
          a: "Nous nettoyons et pansons les plaies du pied diabétique en conditions stériles, et alertons immédiatement votre médecin si la plaie nécessite un avis médical.",
        },
      ],
      ar: [
        {
          q: "هل يمكنكم العناية بجرح القدم السكري في المنزل؟",
          a: "ننظف ونضمّد جروح القدم السكري بتقنية معقمة، وننبّه طبيبك فوراً إذا كان الجرح يحتاج إلى تقييم طبي.",
        },
      ],
    },
  },

  "hypertension-care-marrakech": {
    slug: "hypertension-care-marrakech",
    packs: [],
    shortTitle: { en: "Hypertension", fr: "Hypertension", ar: "ضغط الدم" },
    procedures: ["cardio-monitoring", "standard-nursing-visit"],
    category: "condition",
    title: {
      en: "Hypertension Monitoring & Care at Home",
      fr: "Suivi de l'Hypertension Artérielle à Domicile",
      ar: "متابعة ارتفاع ضغط الدم بالمنزل في مراكش",
    },
    subtitle: {
      en: "Blood Pressure Checks, Treatment Verification, and Cardiovascular Monitoring",
      fr: "Contrôle tensionnel régulier, observance et prévention cardiovasculaire",
      ar: "قياس ضغط الدم الدوري، التحقق من الأدوية، والوقاية من أمراض القلب",
    },
    metaTitle: {
      en: "Hypertension Care Marrakech | Blood Pressure Monitoring",
      fr: "Suivi Hypertension Marrakech | Tension à Domicile",
      ar: "علاج ضغط الدم مراكش | قياس ضغط الدم في المنزل",
    },
    metaDescription: {
      en: "Professional home monitoring for hypertension in Marrakech. Avoid complications with regular blood pressure checks, medication tracking, and nurse visits.",
      fr: "Suivi de l'hypertension artérielle à domicile à Marrakech. Contrôles réguliers de la tension et suivi médical pour éviter les complications.",
      ar: "متابعة منزلية متخصصة لارتفاع ضغط الدم في مراكش. تجنب المضاعفات عبر قياس الضغط الدوري، تتبع الأدوية، وزيارات التمريض المنتظمة.",
    },
    keywords: {
      en: [
        "Hypertension Monitoring Marrakech",
        "blood pressure check home Marrakech",
        "cardiovascular home monitoring",
        "hypertension nurse Marrakech",
      ],
      fr: [
        "suivi hypertension Marrakech",
        "tension artérielle domicile Marrakech",
        "mesure tension à domicile",
        "contrôle tensionnel régulier",
      ],
      ar: [
        "متابعة ضغط الدم مراكش",
        "قياس الضغط في المنزل بمراكش",
        "جهاز قياس ضغط الدم منزلي",
        "مراقبة صحة القلب بالمنزل",
      ],
    },
    description: {
      en: "Hypertension is a silent threat that requires constant tracking. Our nurses provide regular, stress-free blood pressure checks in the comfort of your home, ensuring medication adherence, explaining potential side effects, and helping patients follow lifestyle recommendations.",
      fr: "L'hypertension est un tueur silencieux qui demande un suivi rigoureux. Nos infirmiers effectuent des mesures précises de la tension sans le stress du cabinet médical, et veillent à la bonne prise des médicaments.",
      ar: "يعتبر ارتفاع ضغط الدم خطراً صامتاً يتطلب مراقبة مستمرة. يقدم ممرضونا فحصاً دورياً ومريحاً لضغط الدم في منزلك، مع التأكد من تناول أدوية الضغط في مواعيدها.",
    },
    highlights: {
      en: [
        "Regular resting blood pressure measurements using clinical monitors",
        "Pulse and cardiac rhythm tracking",
        "Medication education and reminders",
        "Lifestyle and dietary habit tracking (low salt advice)",
      ],
      fr: [
        "Prise de tension au repos avec tensiomètre professionnel homologué",
        "Suivi du pouls et détection d'éventuelles arythmies",
        "Rappels réguliers et éducation sur le traitement antihypertenseur",
        "Conseils hygiéno-diététiques adaptés (régime hyposodé)",
      ],
      ar: [
        "قياس ضغط الدم أثناء الراحة بأجهزة طبية معتمدة ودقيقة",
        "متابعة معدل النبض ورصد أي اضطراب في ضربات القلب",
        "توعية المريض بأدوية الضغط وأهمية الالتزام بها",
        "نصائح وإرشادات حول نمط الحياة والغذاء الصحي (تقليل الملح)",
      ],
    },
    faqs: {
      en: [
        {
          q: "What should I do if my blood pressure remains high?",
          a: "Our nurses record your readings and immediately alert your physician if values exceed safe parameters.",
        },
      ],
      fr: [
        {
          q: "Que se passe-t-il si ma tension reste élevée lors de la visite ?",
          a: "Nos infirmiers consignent les valeurs et contactent immédiatement votre médecin traitant si les chiffres dépassent les seuils critiques.",
        },
      ],
      ar: [
        {
          q: "ماذا أفعل إذا ظل قياس ضغط دمي مرتفعاً؟",
          a: "يقوم ممرضونا بتسجيل قياساتك وإبلاغ طبيبك المعالج على الفور إذا تجاوزت القراءات المعدلات الآمنة المحددة لك.",
        },
      ],
    },
  },

  "bedridden-patient-care-marrakech": {
    slug: "bedridden-patient-care-marrakech",
    packs: [],
    shortTitle: { en: "Bedridden care", fr: "Patient alité", ar: "رعاية طريح الفراش" },
    procedures: ["standard-nursing-visit", "simple-dressing"],
    category: "condition",
    title: {
      en: "Bedridden Patient Care at Home in Marrakech",
      fr: "Soins aux Patients Alités à Domicile",
      ar: "رعاية المرضى طريحي الفراش بالمنزل بمراكش",
    },
    subtitle: {
      en: "Complication Prevention, Position Turning, and Dignified Daily Hygiene",
      fr: "Prévention des complications de l'alitement, toilette au lit et mobilisation",
      ar: "الوقاية من مضاعفات الاستلقاء الطويل، النظافة الشخصية بالسرير، وتغيير الوضعيات",
    },
    metaTitle: {
      en: "Bedridden Care Marrakech | Bedbound Patient Nursing",
      fr: "Soins Patient Alité Marrakech | Garde Malade Lit",
      ar: "رعاية المريض طريح الفراش مراكش | تمريض منزلي للمريض المقعد",
    },
    metaDescription: {
      en: "Get professional nursing care for bedridden patients in Marrakech. Prevention of bedsores, position changing, bathing at bed, and respiratory care.",
      fr: "Soins professionnels pour patients alités à Marrakech. Toilette complète au lit, prévention des escarres et mobilisation par nos infirmiers.",
      ar: "احصل على رعاية تمريضية محترفة للمرضى طريحي الفراش بمراكش. الوقاية من قرح الفراش، تغيير وضعية الاستلقاء، الاستحمام في السرير.",
    },
    keywords: {
      en: [
        "Bedridden Patient Care Marrakech",
        "bedsore prevention home care",
        "bedbound patient hygiene",
        "home nurse bedridden Marrakech",
      ],
      fr: [
        "soins patient alité Marrakech",
        "toilette au lit infirmier Marrakech",
        "prévention escarres domicile",
        "garde malade alité Marrakech",
      ],
      ar: [
        "رعاية طريح الفراش مراكش",
        "الوقاية من قرح الفراش بالمنزل",
        "الاستحمام في السرير للمريض",
        "تمريض منزلي للمريض المقعد بمراكش",
      ],
    },
    description: {
      en: "Long-term confinement to bed poses severe health risks, including pressure ulcers, joint stiffness, and lung congestion. Our registered nurses manage bedbound patients with strict position-changing schedules, dignified full-bed baths, skin hydration, joint mobilization, and chest physiotherapy.",
      fr: "L'alitement prolongé comporte des risques majeurs : escarres, raideurs articulaires, encombrement pulmonaire. Nos infirmiers assurent des soins rigoureux : toilette complète au lit, changements de position réguliers, hydratation de la peau.",
      ar: "يمثل الاستلقاء الطويل بالسرير مخاطر صحية جسيمة مثل قرح الفراش وتيبس المفاصل. يوفر ممرضونا رعاية متكاملة تشمل غيار وضعية المريض كل ساعتين، النظافة الشخصية بالسرير.",
    },
    highlights: {
      en: [
        "Strict turning schedules (every 2 hours) to prevent bedsores",
        "Dignified bed-bathing, hair washing, and diaper changing",
        "Passive joint range-of-motion exercises to prevent stiffness",
        "Respiratory checks and chest physical therapy when needed",
      ],
      fr: [
        "Changements de position programmés (toutes les 2 heures) anti-escarres",
        "Toilette complète au lit respectant la pudeur, change régulier",
        "Mobilisation passive des articulations pour limiter l'enraidissement",
        "Surveillance respiratoire et kinésithérapie respiratoire si nécessaire",
      ],
      ar: [
        "تغيير وضعية الاستلقاء بجدول ثابت (كل ساعتين) لتفادي قرح الفراش",
        "الاستحمام الكامل بالسرير وغسل الشعر وتغيير الحفاضات بأسلوب يحفظ الكرامة",
        "تحريك المفاصل والعضلات تمارين سلبية لمنع التصلب والتيبس",
        "متابعة الجهاز التنفسي وعمل ترويض للصدر عند تراكم الإفرازات",
      ],
    },
    faqs: {
      en: [
        {
          q: "How do you prevent bedsore complications?",
          a: "We combine frequent repositioning, skin protection barrier creams, nutritional support, and recommend anti-bedsore alternating pressure air mattresses.",
        },
      ],
      fr: [
        {
          q: "Comment prévenez-vous l'apparition des escarres ?",
          a: "Par des effleurages réguliers, des changements de position fréquents, une hydratation cutanée et l'utilisation conseillée d'un matelas anti-escarres.",
        },
      ],
      ar: [
        {
          q: "كيف تحمون المريض من الإصابة بقرح الفراش؟",
          a: "نقوم بتغيير وضعية المريض باستمرار، ترطيب الجلد بكريمات الحماية، الاهتمام بالتغذية، ونوصي دائماً باستخدام مرتبة الهواء الطبية المضادة للقرح.",
        },
      ],
    },
  },

  "pressure-ulcer-care-marrakech": {
    slug: "pressure-ulcer-care-marrakech",
    packs: [],
    shortTitle: { en: "Pressure ulcers", fr: "Escarres", ar: "قرح الفراش" },
    procedures: ["complex-dressing", "simple-dressing"],
    category: "condition",
    title: {
      en: "Pressure Ulcer & Bedsore Treatment",
      fr: "Traitement des Escarres à Domicile",
      ar: "علاج قرح الفراش والقرح الجلدية بالمنزل",
    },
    subtitle: {
      en: "Sterile Dressing Care and Wound Monitoring",
      fr: "Nettoyage stérile, pansement cicatrisant et soins des escarres",
      ar: "تنظيف القرحة، وضع ضمادات معقمة مساعدة على الالتئام السريع",
    },
    metaTitle: {
      en: "Pressure Ulcer Care Marrakech | Bedsore Dressing",
      fr: "Traitement Escarres Marrakech | Pansement Escarre",
      ar: "علاج قرح الفراش مراكش | غيار معقم لقرحة الفراش",
    },
    metaDescription: {
      en: "Professional bedsore and pressure ulcer dressing care in Marrakech. Specialized dressing changes and sterile wound care by state-registered nurses.",
      fr: "Soins et pansements des escarres à domicile à Marrakech. Pansements spécialisés et soins stériles par nos infirmiers diplômés d'État.",
      ar: "علاج متخصص لقرح الفراش بالمنزل في مراكش. تنظيف القرح وتغيير الضمادات المعقمة لتسريع شفاء الأنسجة التالفة بواسطة ممرضين معتمدين.",
    },
    keywords: {
      en: [
        "pressure ulcer treatment Marrakech",
        "bedsore care home Marrakech",
        "complex dressing bedsore",
        "wound care nurse at home",
      ],
      fr: [
        "traitement escarres Marrakech",
        "soin escarre à domicile",
        "pansement escarre fesse talon",
        "infirmier pansement complexe",
      ],
      ar: [
        "علاج قرح الفراش مراكش",
        "تضميد قرحة الفراش بالمنزل",
        "تنظيف جروح الفراش المعقدة",
        "ممرض لغيار قرح الفراش",
      ],
    },
    description: {
      en: "Bedsores (pressure ulcers) require expert clinical management to heal and avoid deep tissue infections. Our nurses assess the ulcer stage (I to IV), apply specialized dressings (alginate, hydrogel), and set up strict preventive positioning protocols.",
      fr: "Les escarres nécessitent des compétences spécifiques pour cicatriser. Nos infirmiers évaluent le stade de la plaie, appliquent des pansements hydro-actifs et instaurent des règles strictes de décharge de pression.",
      ar: "تتطلب قرح الفراش (التقرحات الجلدية) علاجاً طبياً متخصصاً لتجنب التهاب العظام والالتهابات العميقة. يقوم ممرضونا بتقييم مرحلة القرحة (من الأولى للرابعة)، وتنظيفها وتطهيرها.",
    },
    highlights: {
      en: [
        "Aseptic cleaning and sterile dressing changes",
        "Use of advanced moisture-balanced cicatrisation dressings",
        "Pressure relief strategies (position changes, padding, floatation cushions)",
        "Frequent updates and cooperation with the patient's physician",
      ],
      fr: [
        "Nettoyage stérile et changement de pansements stériles",
        "Application de pansements cicatrisants de dernière génération",
        "Mise en décharge complète de la zone lésée (talons, sacrum)",
        "Rapport régulier d'évolution et adaptation du protocole avec le médecin",
      ],
      ar: [
        "تنظيف معقم وتغيير الضمادات المعقمة",
        "استخدام ضمادات متقدمة تحافظ على رطوبة الجرح وتسرع بناء الجلد",
        "تخفيف الضغط الكامل عن المنطقة المصابة (العجز، الكعبين) بالوسائد",
        "متابعة دورية وإطلاع الطبيب المعالج على مدى تحسن القرحة",
      ],
    },
    faqs: {
      en: [
        {
          q: "How long does it take for a bedsore to heal?",
          a: "Stage I/II bedsores can heal in a few weeks with proper care. Stage III/IV ulcers are complex and may take several months of consistent treatment.",
        },
      ],
      fr: [
        {
          q: "Combien de temps prend la cicatrisation d'une escarre ?",
          a: "Les escarres légères (stade 1/2) guérissent en quelques semaines. Les stades avancés (3/4) sont complexes et exigent plusieurs mois de soins rigoureux.",
        },
      ],
      ar: [
        {
          q: "كم من الوقت يستغرق شفاء قرحة الفراش؟",
          a: "يمكن للقرح البسيطة (المرحلة الأولى والثانية) أن تشفى خلال أسابيع قليلة مع الرعاية الصحيحة. أما المراحل المتقدمة (الثالثة والرابعة) فتحتاج أشهراً من العلاج المنتظم.",
        },
      ],
    },
  },
};
