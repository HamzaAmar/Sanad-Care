import { Separator } from "@pillar-ui/core";

const LAYERS = [
  {
    id: "interface",
    icon: "📱",
    title: "Interface Layer — WhatsApp",
    body: "Point d'entrée utilisateur à friction minimale",
  },
  {
    id: "ai",
    icon: "🧠",
    title: "AI Layer",
    body: "Compréhension des requêtes · Extraction des intentions · Structuration",
    highlight: true,
  },
  {
    id: "workflow",
    icon: "⚙️",
    title: "Workflow Engine (Core)",
    body: "Génération des workflows · Attribution · Coordination · Suivi",
  },
  {
    id: "backend",
    icon: "☁️",
    title: "Backend SaaS",
    body: "Dashboards · Analytics · Historique médical structuré",
  },
];

export default function Architecture() {
  return (
    <div className="slide-inner">
      <div className="eyebrow">Produit &amp; Architecture</div>
      <h2>
        4 couches, <span className="accent">1 système</span>
      </h2>
      <Separator />
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
        {LAYERS.map((layer) => (
          <div
            className="card"
            key={layer.id}
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              ...(layer.highlight ? { borderColor: "rgba(0,200,150,0.25)" } : {}),
            }}
          >
            <div style={{ fontSize: 20, width: 36, textAlign: "center" }}>{layer.icon}</div>
            <div>
              <div className="card-title" style={layer.highlight ? { color: "var(--accent)" } : undefined}>
                {layer.title}
              </div>
              <div className="card-body">{layer.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
