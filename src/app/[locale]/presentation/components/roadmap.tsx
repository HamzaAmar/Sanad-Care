import RoadmapItem from "../core/roadmap-item";

const phases = [
  {
    step: 1,
    phase: "Court terme — MVP",
    description: "Développement MVP · Lancement zone pilote · Validation adoption",
    active: true,
  },
  {
    step: 2,
    phase: "Moyen terme — Croissance",
    description: "Extension des modules · Réseau de prestataires · Automatisation",
  },
  {
    step: 3,
    phase: "Long terme — Référence",
    description: "Infrastructure de référence au Maroc, puis Afrique francophone",
  },
];

export default function Roadmap() {
  return (
    <div className="slide-inner">
      <div className="eyebrow">Roadmap</div>
      <h2>
        Construire l'<span className="accent">infrastructure</span>
        <br />
        des soins à domicile
      </h2>
      <div className="roadmap" style={{ marginTop: 28 }}>
        {phases.map((p) => (
          <RoadmapItem key={p.step} step={p.step} phase={p.phase} description={p.description} active={p.active} />
        ))}
      </div>
    </div>
  );
}
