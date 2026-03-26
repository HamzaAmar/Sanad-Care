import FlowStep from "../core/flow-step";

const steps = [
  { id: "whatsapp", icon: "📱", label: "Demande<br/>WhatsApp" },
  { id: "ia", icon: "🧠", label: "IA interprète" },
  { id: "workflow", icon: "⚙️", label: "Workflow<br/>généré" },
  { id: "prestataire", icon: "👩‍⚕️", label: "Prestataire<br/>assigné" },
  { id: "donnees", icon: "✅", label: "Données<br/>enregistrées" },
  { id: "suivi", icon: "📊", label: "Suivi &<br/>alertes" },
];

export default function Fonctionnement() {
  return (
    <div className="slide-inner">
      <div className="eyebrow">Fonctionnement</div>
      <h2>
        Du besoin à l'<span className="accent">exécution</span>
      </h2>
      <div className="flow" style={{ marginTop: 40 }}>
        {steps.map((s) => (
          <FlowStep key={s.id} icon={s.icon} label={s.label} />
        ))}
      </div>
      <div className="pill" style={{ marginTop: 32 }}>
        Résultat : processus structuré, traçable et standardisé
      </div>
    </div>
  );
}
