import type { NursingService } from "@/types/service";

export const SERVICES: NursingService[] = [
  {
    id: "medical-treatments",
    name: "Home Medical Treatments",
    description: "Safe and accurate execution of medically prescribed treatments at the patient’s home.",
    priceFrom: {
      day: 150,
      week: 3000,
      month: 8000,
    },
    included: [
      "Vital Signs Monitoring (Free)",
      "Nursing injections (IM / SC / IV)",
      "IV fluids setup & monitoring",
      "Wound care & dressing changes",
      "Urinary & venous catheter care",
    ],
    notIncluded: ["Prescribed medications", "Medical consumables", "Any medical diagnosis or treatment modification"],
  },

  {
    id: "home-lab-tests",
    name: "Home Medical Lab Tests",
    description: "Home sample collection with safe transfer to certified laboratories.",
    priceFrom: {
      day: 150,
    },
    included: [
      "Vital Signs Monitoring (Free)",
      "Home blood sample collection",
      "Urine sample collection",
      "Rapid home tests when required",
      "Results follow-up with doctor or family",
    ],
    notIncluded: ["Laboratory analysis fees", "Advanced imaging tests", "Emergency laboratory services"],
  },

  {
    id: "health-monitoring",
    name: "Home Health Monitoring",
    description: "Continuous monitoring to detect early warning signs without leaving home.",
    priceFrom: {
      day: 150,
      week: 3000,
    },
    included: [
      "Vital Signs Monitoring (Free)",
      "Health condition follow-up",
      "Early detection of concerning changes",
      "Family or doctor notification if needed",
      "Basic nursing assessment",
    ],
    notIncluded: ["Medical diagnosis", "Treatment plan changes", "Emergency interventions"],
  },

  {
    id: "post-surgery-care",
    name: "Post-Surgery Home Care",
    description: "Professional nursing support after hospital discharge to ensure safe recovery.",
    priceFrom: {
      day: 150,
      week: 3000,
      month: 8000,
    },
    included: [
      "Vital Signs Monitoring (Free)",
      "Surgical wound monitoring",
      "Dressing changes",
      "Prescribed treatment execution",
      "Complication prevention",
    ],
    notIncluded: ["Physiotherapy", "Surgical follow-up visits", "Medical supplies"],
  },

  {
    id: "elderly-bedridden-care",
    name: "Elderly & Bedridden Care",
    description: "Human-centered nursing care preserving comfort, dignity, and safety.",
    priceFrom: {
      day: 150,
      week: 3000,
      month: 8000,
    },
    included: [
      "Vital Signs Monitoring (Free)",
      "Bedsore prevention",
      "Position changing",
      "Daily nursing care",
      "Nutrition & hydration monitoring",
    ],
    notIncluded: ["Night shifts", "Household services", "Special medical equipment"],
  },

  {
    id: "chronic-disease-care",
    name: "Chronic Disease Follow-Up",
    description: "Regular nursing follow-up to reduce complications and improve quality of life.",
    priceFrom: {
      day: 150,
      week: 3000,
      month: 8000,
    },
    included: [
      "Vital Signs Monitoring (Free)",
      "Diabetes follow-up",
      "Blood pressure monitoring",
      "Stable cardiac condition monitoring",
      "Kidney disease basic follow-up",
    ],
    notIncluded: ["Laboratory tests", "Medication supply", "Specialist consultations"],
  },

  {
    id: "patient-education",
    name: "Patient & Family Education",
    description: "Clear guidance to help patients and families manage health conditions confidently.",
    priceFrom: {
      day: 150,
    },
    included: [
      "Vital Signs Monitoring (Free)",
      "Treatment explanation",
      "Daily preventive advice",
      "Clear warning signs guidance",
      "Medication adherence education",
    ],
    notIncluded: ["Medical diagnosis", "Written prescriptions", "Emergency decision-making"],
  },

  {
    id: "nursing-documentation",
    name: "Nursing Documentation & Follow-Up",
    description: "Transparent documentation ensuring continuity and traceability of care.",
    priceFrom: {
      day: 150,
    },
    included: [
      "Vital Signs Monitoring (Free)",
      "Individual nursing file",
      "Documentation of all interventions",
      "Short reports upon request",
      "Care continuity tracking",
    ],
    notIncluded: ["Medical reports", "Insurance paperwork", "Legal documentation"],
  },
];
