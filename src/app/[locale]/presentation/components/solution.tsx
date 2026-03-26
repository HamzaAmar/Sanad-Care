import { Separator } from "@pillar-ui/core";
import Card from "../core/card";

const features = [
  {
    id: "ia-whatsapp",
    icon: "🤖",
    title: "IA + WhatsApp",
    body: "Interface à friction minimale. Conversations transformées en workflows.",
  },
  {
    id: "protocols",
    icon: "📋",
    title: "Protocoles cliniques",
    body: "Standards appliqués systématiquement à chaque intervention.",
  },
  {
    id: "alertes",
    icon: "🔔",
    title: "Alertes & suivi",
    body: "Détection précoce des risques. Famille informée en temps réel.",
  },
];

export default function Solution() {
  return (
    <div className="slide-inner">
      <div className="eyebrow">Solution</div>
      <h2>
        Un système d'<span className="accent">exploitation</span>
        <br />
        des soins à domicile
      </h2>
      <Separator />
      <div className="grid-3">
        {features.map((f) => (
          <Card key={f.id} icon={f.icon} title={f.title} body={f.body} />
        ))}
      </div>
      <div className="pill">De la coordination informelle à l'exécution structurée</div>
    </div>
  );
}
