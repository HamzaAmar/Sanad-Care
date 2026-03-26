import { Separator } from "@pillar-ui/core";
import Card from "../core/card";

const advantages = [
  {
    id: "whatsapp-first",
    icon: "📱",
    title: "WhatsApp-first",
    body: "Friction minimale. Outil déjà utilisé par tous.",
  },
  {
    id: "barriers-to-exit",
    icon: "🔒",
    title: "Barrières à la sortie",
    body: "Historique patient · Workflows intégrés · Pratiques quotidiennes",
    highlight: true,
  },
  {
    id: "structured-data",
    icon: "📈",
    title: "Données structurées",
    body: "Accumulation progressive d'une base unique et défendable.",
  },
];

export default function Avantage() {
  return (
    <div className="slide-inner">
      <div className="eyebrow">Compétition</div>
      <h2>
        Adoption simple, <span className="accent">rétention naturelle</span>
      </h2>
      <Separator />
      <div className="grid-3" style={{ marginTop: 24 }}>
        {advantages.map((a) => (
          <Card
            key={a.id}
            icon={a.icon}
            title={a.title}
            body={a.body}
            style={a.highlight ? { borderColor: "var(--accent-mid)" } : undefined}
          />
        ))}
      </div>
    </div>
  );
}
