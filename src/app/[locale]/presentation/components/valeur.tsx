import ValueItem from "../core/value-item";

const values = [
  { id: "patient", emoji: "🛡️", who: "Patient", text: "Plus de sécurité et de continuité dans les soins" },
  { id: "family", emoji: "🧘", who: "Famille", text: "Plus de clarté et de sérénité au quotidien" },
  { id: "soignant", emoji: "📋", who: "Soignant", text: "Structure, protocoles, moins d'erreurs et d'oublis" },
  { id: "medecin", emoji: "📊", who: "Médecin", text: "Suivi lisible, exploitable, traçable" },
];

export default function Valeur() {
  return (
    <div className="slide-inner">
      <div className="eyebrow">Proposition de valeur</div>
      <h2>
        Pour <span className="accent">chaque</span> partie prenante
      </h2>
      <div className="value-grid">
        {values.map((v) => (
          <ValueItem key={v.id} emoji={v.emoji} who={v.who} text={v.text} />
        ))}
      </div>
    </div>
  );
}
