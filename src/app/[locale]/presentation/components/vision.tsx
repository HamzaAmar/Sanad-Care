import StatCard from "../core/stat-card";

export default function Vision() {
  return (
    <div
      className="slide-inner"
      style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="accent-glow" style={{ bottom: -80, left: "50%", transform: "translateX(-50%)" }} />
      <div className="eyebrow" style={{ textAlign: "center" }}>
        Vision long terme
      </div>

      <h1 style={{ fontSize: "clamp(38px,6vw,64px)" }}>
        La référence des soins
        <br />à domicile <span className="accent">structurés</span>
      </h1>

      <div className="vision-quote" style={{ textAlign: "left", marginTop: 32 }}>
        "Faire de Sanad Care une référence au Maroc, puis un modèle réplicable dans d'autres marchés africains et
        francophones."
      </div>

      <div className="stat-row" style={{ marginTop: 32, justifyContent: "center" }}>
        <StatCard value="Maroc" label="Phase 1" style={{ minWidth: 140, textAlign: "center" }} />
        <StatCard value="Afrique" label="Phase 2" style={{ minWidth: 140, textAlign: "center" }} />
        <StatCard value="Franco." label="Phase 3" style={{ minWidth: 140, textAlign: "center" }} />
      </div>
    </div>
  );
}
