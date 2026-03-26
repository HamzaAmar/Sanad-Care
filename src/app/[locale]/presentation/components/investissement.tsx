import UseItem from "../core/use-item";

const uses = [
  { id: "mvp", label: "MVP", description: "Développement produit & design" },
  { id: "proto", label: "Proto.", description: "Protocoles & contenu clinique" },
  { id: "pilot", label: "Pilot", description: "Test terrain & acquisition initiale" },
];

export default function Investissement() {
  return (
    <div className="slide-inner">
      <div className="accent-glow" style={{ top: -50, right: -50 }} />
      <div className="eyebrow">Ce que nous recherchons</div>
      <h2>
        Financement <span className="accent">d'amorçage</span>
      </h2>
      <div className="ask-amount">450 000 MAD</div>
      <div className="use-grid">
        {uses.map((u) => (
          <UseItem key={u.id} label={u.label} description={u.description} />
        ))}
      </div>
      <div className="pill" style={{ marginTop: 20 }}>
        + Mentoring · Connexions santé · Accompagnement stratégique
      </div>
    </div>
  );
}
