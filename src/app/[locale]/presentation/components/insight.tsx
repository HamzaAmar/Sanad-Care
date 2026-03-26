import { Separator } from "@pillar-ui/core";
import Card from "../core/card";

const experiences = [
  { id: "dialyse", icon: "🏥", title: "Dialyse", body: "Centres de dialyse" },
  { id: "oncologie", icon: "🎗️", title: "Oncologie", body: "Centre oncologique" },
  { id: "urgences", icon: "🚑", title: "Urgences", body: "Soins d'urgence" },
  { id: "domicile", icon: "🏠", title: "Domicile", body: "Soins infirmiers" },
];

export default function Insight() {
  return (
    <div className="slide-inner">
      <div className="accent-glow" style={{ bottom: -100, left: -100 }} />
      <div className="eyebrow">Origine</div>
      <h2>
        <span className="accent">8 ans</span> de terrain
      </h2>
      <Separator />
      <div className="grid-4" style={{ marginTop: 24 }}>
        {experiences.map((exp) => (
          <Card key={exp.id} icon={exp.icon} title={exp.title} body={exp.body} />
        ))}
      </div>
      <div className="pill" style={{ marginTop: 24 }}>
        Les mêmes défaillances, encore et encore
      </div>
    </div>
  );
}
